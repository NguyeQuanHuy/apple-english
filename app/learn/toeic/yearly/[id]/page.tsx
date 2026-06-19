"use client";
import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { TOEIC_YEARLY } from "@/data/toeic-yearly";
import { useProgress } from "@/lib/store";

type Phase = "ready" | "doing" | "submitted";

function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return m + ":" + s.toString().padStart(2, "0");
}

function getScoreLevel(pct: number) {
  if (pct >= 90) return { label: "Xuất sắc 🏆", color: "text-emerald-600", bg: "bg-emerald-50" };
  if (pct >= 70) return { label: "Khá tốt 👍", color: "text-blue-600", bg: "bg-blue-50" };
  if (pct >= 50) return { label: "Trung bình 📚", color: "text-amber-600", bg: "bg-amber-50" };
  return { label: "Cần ôn thêm 💪", color: "text-red-600", bg: "bg-red-50" };
}

export default function YearlyTestPage() {
  const params = useParams();
  const router = useRouter();
  const { recordTestScore, addXp } = useProgress();
  const test = TOEIC_YEARLY.find((t) => t.id === params.id);

  const [phase, setPhase] = useState<Phase>("ready");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(test?.timeLimitSec ?? 0);
  const [aiExplain, setAiExplain] = useState<Record<number, string>>({});
  const [aiLoading, setAiLoading] = useState<Record<number, boolean>>({});
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (phase !== "doing") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) { clearInterval(timerRef.current); handleSubmit(true); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [phase]);

  if (!test) return <div className="p-8 text-center">Đề không tồn tại.</div>;

  const q = test.questions[current];
  const totalQ = test.questions.length;
  const urgent = timeLeft < 60;

  function handleSubmit(auto = false) {
    clearInterval(timerRef.current);
    let correct = 0;
    test!.questions.forEach((q, i) => { if (answers[i] === q.correctIndex) correct++; });
    recordTestScore(test!.id, correct, totalQ);
    addXp(correct * 5 + 20);
    setPhase("submitted");
  }

  async function fetchAIExplain(idx: number) {
    const q = test!.questions[idx];
    if (aiExplain[idx] || aiLoading[idx]) return;
    setAiLoading((p) => ({ ...p, [idx]: true }));
    try {
      const prompt = `Bạn là giáo viên TOEIC. Hãy giải thích bài TOEIC này bằng tiếng Việt, ngắn gọn, dễ hiểu cho người học mất gốc:

Câu hỏi: ${q.question}
Đáp án đúng: ${q.options[q.correctIndex]}

Giải thích tại sao đáp án này đúng, dùng ngôn ngữ đơn giản, khoảng 2-3 câu.`;
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        }),
      });
      const data = await res.json();
      const text = data.content?.map((c: any) => c.text || "").join("") || "Đang cập nhật...";
      setAiExplain((p) => ({ ...p, [idx]: text }));
    } catch {
      setAiExplain((p) => ({ ...p, [idx]: "Không thể tải giải thích. Vui lòng thử lại." }));
    }
    setAiLoading((p) => ({ ...p, [idx]: false }));
  }

  if (phase === "ready") return (
    <div className="min-h-screen bg-zinc-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl border border-zinc-200 p-8 shadow-sm">
        <div className="text-center mb-6">
          <div className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full mb-3">📅 Đề mô phỏng {test.year}</div>
          <h1 className="text-xl font-bold mb-2">{test.title}</h1>
          <p className="text-sm text-zinc-500">{test.description}</p>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[["30", "Câu hỏi"], [Math.floor(test.timeLimitSec/60)+"'", "Thời gian"], ["AI", "Giải thích"]].map(([v, l]) => (
            <div key={l} className="bg-zinc-50 rounded-xl p-3 text-center">
              <div className="text-xl font-black text-indigo-600">{v}</div>
              <div className="text-xs text-zinc-500 mt-0.5">{l}</div>
            </div>
          ))}
        </div>
        <div className="bg-indigo-50 border border-indigo-100 rounded-xl p-4 mb-6 text-sm text-indigo-800 space-y-1.5">
          <p className="font-semibold mb-2">💡 Tính năng AI giải thích:</p>
          <p>Trong khi làm bài, bấm nút <strong>"🤖 AI giải thích"</strong> để hiểu tại sao đáp án đúng.</p>
        </div>
        <button onClick={() => { setPhase("doing"); setTimeLeft(test.timeLimitSec); }}
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all">
          Bắt đầu làm bài
        </button>
        <button onClick={() => router.back()} className="w-full mt-2 text-zinc-400 text-sm py-2">Quay lại</button>
      </div>
    </div>
  );

  if (phase === "submitted") {
    let correct = 0;
    test.questions.forEach((q, i) => { if (answers[i] === q.correctIndex) correct++; });
    const pct = Math.round((correct / totalQ) * 100);
    const level = getScoreLevel(pct);
    const byPart: Record<number, {correct: number; total: number}> = {};
    test.questions.forEach((q, i) => {
      if (!byPart[q.part]) byPart[q.part] = { correct: 0, total: 0 };
      byPart[q.part].total++;
      if (answers[i] === q.correctIndex) byPart[q.part].correct++;
    });
    return (
      <div className="min-h-screen bg-zinc-50 py-8 px-4">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className="bg-white rounded-2xl border border-zinc-200 p-8 text-center shadow-sm">
            <div className="text-5xl font-black text-indigo-600 mb-1">{pct}%</div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold mt-1 mb-3 ${level.color} ${level.bg}`}>{level.label}</div>
            <p className="text-zinc-500 text-sm">Đúng <strong className="text-zinc-900">{correct}</strong>/{totalQ} • +{correct*5+20} XP</p>
            <div className="mt-4 h-2.5 rounded-full bg-zinc-100 overflow-hidden">
              <div className="h-full bg-indigo-500 rounded-full transition-all duration-700" style={{ width: pct+"%" }} />
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
            <h2 className="font-bold mb-4">Phân tích theo Part</h2>
            {Object.entries(byPart).map(([part, s]) => {
              const p = Math.round((s.correct/s.total)*100);
              return (
                <div key={part} className="mb-3">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-zinc-600">Part {part}</span>
                    <span className="font-semibold">{s.correct}/{s.total}</span>
                  </div>
                  <div className="h-2 rounded-full bg-zinc-100 overflow-hidden">
                    <div className={`h-full rounded-full ${p>=70?"bg-emerald-400":p>=50?"bg-amber-400":"bg-red-400"}`} style={{ width: p+"%" }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-white rounded-2xl border border-zinc-200 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 flex items-center gap-2">
              <h2 className="font-bold">Xem lại từng câu</h2>
              <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full font-medium">🤖 AI giải thích</span>
            </div>
            <div className="divide-y divide-zinc-100">
              {test.questions.map((q, i) => {
                const isCorrect = answers[i] === q.correctIndex;
                return (
                  <div key={q.id} className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${isCorrect?"bg-emerald-100 text-emerald-700":"bg-red-100 text-red-700"}`}>
                        Câu {i+1} • Part {q.part} • {isCorrect?"✓ Đúng":"✗ Sai"}
                      </span>
                    </div>
                    {q.passage && (
                      <div className="mb-3 p-3 bg-zinc-50 rounded-lg text-xs text-zinc-600 leading-relaxed whitespace-pre-line max-h-36 overflow-y-auto border border-zinc-100">{q.passage}</div>
                    )}
                    <p className="text-sm font-medium mb-3">{q.question}</p>
                    <div className="space-y-1.5 mb-3">
                      {q.options.map((opt, oi) => (
                        <div key={oi} className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${oi===q.correctIndex?"bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium":oi===answers[i]&&answers[i]!==q.correctIndex?"bg-red-50 border border-red-200 text-red-700 line-through":"bg-zinc-50 text-zinc-600"}`}>
                          <span className="font-bold w-5">{String.fromCharCode(65+oi)}.</span> {opt}
                          {oi===q.correctIndex && <span className="ml-auto">✓</span>}
                        </div>
                      ))}
                    </div>
                    {q.explain && <p className="text-xs text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mb-2">📚 {q.explain}</p>}
                    <button onClick={() => fetchAIExplain(i)}
                      disabled={aiLoading[i]}
                      className="text-xs text-indigo-600 hover:text-indigo-800 font-medium flex items-center gap-1">
                      {aiLoading[i] ? "⏳ Đang tải..." : aiExplain[i] ? "✨ Ẩn giải thích AI" : "🤖 AI giải thích chi tiết"}
                    </button>
                    {aiExplain[i] && (
                      <div className="mt-2 text-xs text-zinc-600 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2 leading-relaxed">{aiExplain[i]}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex gap-3">
            <button onClick={() => { setAnswers({}); setAiExplain({}); setPhase("ready"); setCurrent(0); }} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl transition-all">Làm lại</button>
            <button onClick={() => router.push("/learn/toeic")} className="flex-1 border border-zinc-200 text-zinc-600 font-medium py-3 rounded-xl hover:bg-zinc-50 transition-all">Về TOEIC</button>
          </div>
        </div>
      </div>
    );
  }

  const userAnswer = answers[current];
  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="sticky top-0 z-20 bg-white/90 backdrop-blur border-b border-zinc-200">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-zinc-600">Câu {current+1}/{totalQ} • Part {q.part}</span>
            <span className={`text-sm font-black tabular-nums ${urgent?"text-red-500 animate-pulse":"text-zinc-700"}`}>⏱ {formatTime(timeLeft)}</span>
          </div>
          <div className="h-1.5 rounded-full bg-zinc-200 overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-1000 ${urgent?"bg-red-500":"bg-indigo-500"}`} style={{ width: (timeLeft/test.timeLimitSec*100)+"%" }} />
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 py-5 space-y-4">
        <div className="bg-white rounded-2xl border border-zinc-200 p-4">
          <div className="flex flex-wrap gap-1.5 mb-3">
            {test.questions.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)}
                className={`w-8 h-8 rounded-lg text-xs font-bold transition-all ${i===current?"bg-indigo-600 text-white":answers[i]!==undefined?"bg-emerald-100 text-emerald-700 border border-emerald-300":"bg-zinc-100 text-zinc-500 hover:border-indigo-300 border border-transparent"}`}>
                {i+1}
              </button>
            ))}
          </div>
          <div className="text-xs text-zinc-400">{Object.keys(answers).length}/{totalQ} đã trả lời</div>
        </div>

        <div className="bg-white rounded-2xl border border-zinc-200 p-6">
          <span className="inline-block text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold mb-4">Part {q.part}</span>
          {q.passage && (
            <div className="mb-4 p-4 bg-zinc-50 rounded-xl text-sm text-zinc-600 leading-relaxed whitespace-pre-line border border-zinc-100 max-h-56 overflow-y-auto">{q.passage}</div>
          )}
          <p className="text-base font-semibold mb-5">{q.question}</p>

          {/* AI explain button during test */}
          <button onClick={() => fetchAIExplain(current)}
            disabled={aiLoading[current]}
            className="mb-4 text-xs text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 font-medium">
            {aiLoading[current] ? "⏳ Đang tải..." : "🤖 AI giải thích câu này"}
          </button>
          {aiExplain[current] && (
            <div className="mb-4 text-xs text-zinc-600 bg-indigo-50 border border-indigo-100 rounded-xl px-4 py-3 leading-relaxed">{aiExplain[current]}</div>
          )}

          <div className="space-y-2">
            {q.options.map((opt, oi) => (
              <button key={oi} onClick={() => setAnswers((p) => ({ ...p, [current]: oi }))}
                className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl border transition-all ${userAnswer===oi?"border-indigo-500 bg-indigo-50 font-medium":"border-zinc-200 hover:border-indigo-300 hover:bg-indigo-50/50"}`}>
                <span className={`text-xs font-black w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${userAnswer===oi?"bg-indigo-600 text-white":"bg-zinc-100 text-zinc-500"}`}>
                  {String.fromCharCode(65+oi)}
                </span>
                <span className="text-sm">{opt}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button disabled={current===0} onClick={() => setCurrent(c=>c-1)} className="flex-1 border border-zinc-200 text-zinc-500 py-3 rounded-xl disabled:opacity-30 hover:bg-zinc-50 transition-all text-sm font-medium">← Trước</button>
          {current < totalQ-1
            ? <button onClick={() => setCurrent(c=>c+1)} className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl text-sm font-bold transition-all">Tiếp →</button>
            : <button onClick={() => handleSubmit()} className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-sm font-bold transition-all">Nộp bài ✓</button>
          }
        </div>
        {current < totalQ-1 && (
          <div className="text-center">
            <button onClick={() => { if(confirm("Nộp bài ngay?")) handleSubmit(); }} className="text-xs text-zinc-400 underline">Nộp sớm ({Object.keys(answers).length}/{totalQ} câu)</button>
          </div>
        )}
      </div>
    </div>
  );
}
