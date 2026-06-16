"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { TOEIC_TESTS, ToeicQuestion } from "@/data/toeic";
import { useProgress } from "@/lib/store";

// ─── Types ────────────────────────────────────────────────────────
type Phase = "ready" | "doing" | "submitted";

type PartStat = {
  part: number;
  label: string;
  correct: number;
  total: number;
};

// ─── Helpers ──────────────────────────────────────────────────────
function formatTime(sec: number) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function getScoreLevel(pct: number) {
  if (pct >= 90) return { label: "Xuất sắc", color: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-50 dark:bg-emerald-950" };
  if (pct >= 70) return { label: "Khá tốt", color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-50 dark:bg-blue-950" };
  if (pct >= 50) return { label: "Trung bình", color: "text-amber-600 dark:text-amber-400", bg: "bg-amber-50 dark:bg-amber-950" };
  return { label: "Cần ôn thêm", color: "text-red-600 dark:text-red-400", bg: "bg-red-50 dark:bg-red-950" };
}

function getPartLabel(part: number) {
  if (part === 5) return "Part 5 — Incomplete Sentences";
  if (part === 6) return "Part 6 — Text Completion";
  return "Part 7 — Reading Comprehension";
}

// ─── Sub-components ───────────────────────────────────────────────

function TimerBar({ timeLeft, totalTime, urgent }: { timeLeft: number; totalTime: number; urgent: boolean }) {
  const pct = Math.max(0, (timeLeft / totalTime) * 100);
  return (
    <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ${urgent ? "bg-red-500" : "bg-amber-500"}`}
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function QuestionNav({
  total,
  current,
  answers,
  onJump,
}: {
  total: number;
  current: number;
  answers: Record<number, number>;
  onJump: (i: number) => void;
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {Array.from({ length: total }, (_, i) => {
        const answered = answers[i] !== undefined;
        const active = i === current;
        return (
          <button
            key={i}
            onClick={() => onJump(i)}
            className={`w-8 h-8 rounded-md text-xs font-medium transition-all
              ${active
                ? "bg-amber-500 text-white shadow-sm"
                : answered
                  ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700"
                  : "bg-white dark:bg-zinc-800 text-zinc-500 border border-zinc-200 dark:border-zinc-700 hover:border-amber-400"
              }`}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
}

function OptionButton({
  label,
  text,
  state,
  onClick,
  disabled,
}: {
  label: string;
  text: string;
  state: "default" | "selected" | "correct" | "wrong" | "reveal";
  onClick: () => void;
  disabled: boolean;
}) {
  const styles: Record<string, string> = {
    default: "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 hover:border-amber-400 hover:bg-amber-50 dark:hover:bg-amber-950",
    selected: "border-amber-500 bg-amber-50 dark:bg-amber-950",
    correct: "border-emerald-500 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200",
    wrong: "border-red-400 bg-red-50 dark:bg-red-950 text-red-800 dark:text-red-300 line-through opacity-70",
    reveal: "border-emerald-400 bg-emerald-50 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-200",
  };

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-full text-left flex items-start gap-3 px-4 py-3 rounded-xl border transition-all duration-150 ${styles[state]} ${disabled ? "cursor-default" : "cursor-pointer"}`}
    >
      <span className={`font-semibold text-sm flex-shrink-0 mt-0.5 ${state === "correct" || state === "reveal" ? "text-emerald-600 dark:text-emerald-400" : state === "wrong" ? "text-red-500" : "text-amber-600"}`}>
        {label}
      </span>
      <span className="text-sm leading-relaxed">{text}</span>
      {state === "correct" && <span className="ml-auto text-emerald-500 text-base">✓</span>}
      {state === "wrong" && <span className="ml-auto text-red-400 text-base">✗</span>}
      {state === "reveal" && <span className="ml-auto text-emerald-500 text-base">✓</span>}
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────
export default function ToeicTestPage() {
  const params = useParams();
  const router = useRouter();
  const { recordTestScore, addXp } = useProgress();

  const test = TOEIC_TESTS.find((t) => t.id === params.id);

  // ── State ──
  const [phase, setPhase] = useState<Phase>("ready");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(test?.timeLimitSec ?? 0);
  const [showExplain, setShowExplain] = useState<Record<number, boolean>>({});
  const [timedOut, setTimedOut] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Timer ──
  useEffect(() => {
    if (phase !== "doing") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setTimedOut(true);
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [phase]);

  if (!test) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-zinc-500">Không tìm thấy đề thi.</p>
      </div>
    );
  }

  const q = test.questions[current];
  const totalQ = test.questions.length;
  const urgent = timeLeft < 60;

  // ── Compute results ──
  const computeResults = () => {
    let correct = 0;
    test.questions.forEach((q, i) => {
      if (answers[i] === q.correctIndex) correct++;
    });
    return correct;
  };

  const computePartStats = (): PartStat[] => {
    const map: Record<number, { correct: number; total: number }> = {};
    test.questions.forEach((q, i) => {
      if (!map[q.part]) map[q.part] = { correct: 0, total: 0 };
      map[q.part].total++;
      if (answers[i] === q.correctIndex) map[q.part].correct++;
    });
    return Object.entries(map).map(([part, s]) => ({
      part: Number(part),
      label: getPartLabel(Number(part)),
      ...s,
    }));
  };

  // ── Actions ──
  const handleStart = () => {
    setPhase("doing");
    setTimeLeft(test.timeLimitSec);
  };

  const handleAnswer = (idx: number) => {
    if (phase === "submitted") return;
    setAnswers((prev) => ({ ...prev, [current]: idx }));
  };

  const handleSubmit = (auto = false) => {
    clearInterval(timerRef.current!);
    const correct = computeResults();
    recordTestScore(test.id, correct, totalQ);
    addXp(correct * 5 + 20);
    setPhase("submitted");
  };

  const handleRetry = () => {
    setAnswers({});
    setShowExplain({});
    setTimedOut(false);
    setPhase("ready");
    setCurrent(0);
    setTimeLeft(test.timeLimitSec);
  };

  // ── Render: Ready screen ──
  if (phase === "ready") {
    return (
      <div className="min-h-screen bg-[var(--paper)] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 shadow-sm">
          <div className="text-center mb-6">
            <div className="text-4xl mb-3">📝</div>
            <h1 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">{test.title}</h1>
            <p className="text-sm text-zinc-500">{test.description}</p>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">{totalQ}</div>
              <div className="text-xs text-zinc-500 mt-0.5">câu hỏi</div>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-600">{Math.floor(test.timeLimitSec / 60)}'</div>
              <div className="text-xs text-zinc-500 mt-0.5">thời gian</div>
            </div>
          </div>

          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6 text-sm text-amber-800 dark:text-amber-200 space-y-1.5">
            <p className="font-medium mb-2">Lưu ý trước khi bắt đầu:</p>
            <p>• Đồng hồ đếm ngược ngay khi bấm Bắt đầu.</p>
            <p>• Bạn có thể chuyển câu tự do, quay lại chỉnh đáp án.</p>
            <p>• Nộp bài trước khi hết giờ để xem giải thích chi tiết.</p>
          </div>

          <button
            onClick={handleStart}
            className="w-full bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition-all"
          >
            Bắt đầu làm bài
          </button>
          <button
            onClick={() => router.back()}
            className="w-full mt-2 text-zinc-500 hover:text-zinc-700 text-sm py-2"
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  // ── Render: Result screen ──
  if (phase === "submitted") {
    const correct = computeResults();
    const pct = Math.round((correct / totalQ) * 100);
    const level = getScoreLevel(pct);
    const partStats = computePartStats();

    return (
      <div className="min-h-screen bg-[var(--paper)] py-8 px-4">
        <div className="max-w-2xl mx-auto space-y-6">

          {/* Score card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-8 text-center shadow-sm">
            {timedOut && (
              <div className="text-xs bg-red-100 dark:bg-red-950 text-red-600 dark:text-red-400 rounded-lg px-3 py-1.5 mb-4 inline-block">
                ⏰ Hết giờ — bài đã được nộp tự động
              </div>
            )}
            <div className="text-5xl font-bold text-amber-500 mb-1">{pct}%</div>
            <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-1 mb-4 ${level.color} ${level.bg}`}>
              {level.label}
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              Đúng <span className="font-semibold text-zinc-900 dark:text-zinc-100">{correct}</span> / {totalQ} câu
              &nbsp;·&nbsp; +{correct * 5 + 20} XP
            </p>

            {/* Progress bar */}
            <div className="mt-5 h-2.5 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
              <div
                className="h-full rounded-full bg-amber-400 transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
          </div>

          {/* Part breakdown */}
          {partStats.length > 0 && (
            <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-4">Phân tích theo Part</h2>
              <div className="space-y-4">
                {partStats.map((ps) => {
                  const p = Math.round((ps.correct / ps.total) * 100);
                  return (
                    <div key={ps.part}>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="text-sm text-zinc-700 dark:text-zinc-300">{ps.label}</span>
                        <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{ps.correct}/{ps.total}</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
                        <div
                          className={`h-full rounded-full ${p >= 70 ? "bg-emerald-400" : p >= 50 ? "bg-amber-400" : "bg-red-400"}`}
                          style={{ width: `${p}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Review: all questions */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-zinc-100 dark:border-zinc-800">
              <h2 className="font-semibold text-zinc-900 dark:text-zinc-100">Xem lại từng câu</h2>
            </div>
            <div className="divide-y divide-zinc-100 dark:divide-zinc-800">
              {test.questions.map((q, i) => {
                const userAns = answers[i];
                const isCorrect = userAns === q.correctIndex;
                const shown = showExplain[i];

                return (
                  <div key={q.id} className="p-5">
                    {/* Part badge */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${isCorrect ? "bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300" : "bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300"}`}>
                        Câu {i + 1} · Part {q.part}
                      </span>
                      <span className={`text-xs font-medium ${isCorrect ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                        {isCorrect ? "✓ Đúng" : "✗ Sai"}
                      </span>
                    </div>

                    {/* Passage for Part 7 */}
                    {q.passage && (
                      <div className="mb-3 p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line border border-zinc-100 dark:border-zinc-700 max-h-40 overflow-y-auto">
                        {q.passage}
                      </div>
                    )}

                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200 mb-3">{q.question}</p>

                    <div className="space-y-1.5">
                      {q.options.map((opt, oi) => {
                        let state: "default" | "correct" | "wrong" | "reveal" = "default";
                        if (oi === q.correctIndex) state = "reveal";
                        if (oi === userAns && userAns !== q.correctIndex) state = "wrong";
                        return (
                          <OptionButton
                            key={oi}
                            label={String.fromCharCode(65 + oi)}
                            text={opt}
                            state={state}
                            onClick={() => {}}
                            disabled={true}
                          />
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {q.explain && (
                      <div className="mt-3">
                        <button
                          onClick={() => setShowExplain((p) => ({ ...p, [i]: !shown }))}
                          className="text-xs text-amber-600 dark:text-amber-400 hover:underline"
                        >
                          {shown ? "Ẩn giải thích" : "💡 Xem giải thích"}
                        </button>
                        {shown && (
                          <div className="mt-2 text-xs text-zinc-600 dark:text-zinc-400 bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg px-3 py-2 leading-relaxed">
                            {q.explain}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleRetry}
              className="flex-1 bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-white font-semibold py-3 rounded-xl transition-all"
            >
              Làm lại
            </button>
            <button
              onClick={() => router.push("/learn/toeic")}
              className="flex-1 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium py-3 rounded-xl transition-all"
            >
              Về TOEIC
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Render: Doing ──
  const userAnswer = answers[current];
  const answeredCount = Object.keys(answers).length;

  return (
    <div className="min-h-screen bg-[var(--paper)]">
      {/* Sticky header */}
      <div className="sticky top-0 z-20 bg-white/90 dark:bg-zinc-900/90 backdrop-blur border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-2xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Câu {current + 1} / {totalQ}
            </span>
            <span className={`text-sm font-bold tabular-nums ${urgent ? "text-red-500 animate-pulse" : "text-zinc-700 dark:text-zinc-300"}`}>
              ⏱ {formatTime(timeLeft)}
            </span>
          </div>
          <TimerBar timeLeft={timeLeft} totalTime={test.timeLimitSec} urgent={urgent} />
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">

        {/* Question navigator */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs text-zinc-500">Điều hướng câu hỏi</span>
            <span className="text-xs text-zinc-500">{answeredCount}/{totalQ} đã trả lời</span>
          </div>
          <QuestionNav
            total={totalQ}
            current={current}
            answers={answers}
            onJump={setCurrent}
          />
        </div>

        {/* Question card */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6">
          {/* Part badge */}
          <span className="inline-block text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-medium mb-4">
            Part {q.part}
          </span>

          {/* Passage */}
          {q.passage && (
            <div className="mb-4 p-4 bg-zinc-50 dark:bg-zinc-800 rounded-xl text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-line border border-zinc-100 dark:border-zinc-700 max-h-60 overflow-y-auto">
              {q.passage}
            </div>
          )}

          {/* Question text */}
          <p className="text-base font-medium text-zinc-900 dark:text-zinc-100 mb-5 leading-relaxed">
            {q.question}
          </p>

          {/* Options */}
          <div className="space-y-2">
            {q.options.map((opt, oi) => {
              const state =
                userAnswer === undefined
                  ? "default"
                  : userAnswer === oi
                    ? "selected"
                    : "default";
              return (
                <OptionButton
                  key={oi}
                  label={String.fromCharCode(65 + oi)}
                  text={opt}
                  state={state}
                  onClick={() => handleAnswer(oi)}
                  disabled={false}
                />
              );
            })}
          </div>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-3">
          <button
            disabled={current === 0}
            onClick={() => setCurrent((c) => c - 1)}
            className="flex-1 border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-400 py-3 rounded-xl text-sm font-medium disabled:opacity-30 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all"
          >
            ← Câu trước
          </button>

          {current < totalQ - 1 ? (
            <button
              onClick={() => setCurrent((c) => c + 1)}
              className="flex-1 bg-amber-500 hover:bg-amber-600 active:scale-[0.98] text-white py-3 rounded-xl text-sm font-semibold transition-all"
            >
              Câu tiếp →
            </button>
          ) : (
            <button
              onClick={() => handleSubmit()}
              className="flex-1 bg-emerald-500 hover:bg-emerald-600 active:scale-[0.98] text-white py-3 rounded-xl text-sm font-semibold transition-all"
            >
              Nộp bài ✓
            </button>
          )}
        </div>

        {/* Early submit */}
        {current < totalQ - 1 && (
          <div className="text-center">
            <button
              onClick={() => {
                if (confirm("Bạn còn câu chưa trả lời. Nộp bài ngay?")) handleSubmit();
              }}
              className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 underline"
            >
              Nộp bài sớm ({answeredCount}/{totalQ} câu đã làm)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
