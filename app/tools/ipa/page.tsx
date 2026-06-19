"use client";
import { useState, useRef } from "react";
import Link from "next/link";

export default function IPAPage() {
  const [text, setText] = useState("");
  const [result, setResult] = useState<null | { words: {word:string;ipa:string}[]; fullIPA:string; explanation:string }>(null);
  const [loading, setLoading] = useState(false);

  async function analyze() {
    if (!text.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1000,
          messages: [{
            role: "user",
            content: `Bạn là chuyên gia ngôn ngữ học tiếng Anh. Hãy phân tích IPA cho đoạn văn bản sau và trả lời ONLY JSON, không có gì khác:

"${text.trim()}"

JSON format:
{
  "words": [{"word": "hello", "ipa": "/həˈloʊ/"}],
  "fullIPA": "/toʊn sentence IPA/",
  "explanation": "Giải thích ngắn bằng tiếng Việt về những âm khó trong đoạn này, tối đa 2 câu."
}`
          }]
        })
      });
      const data = await res.json();
      const raw = data.content?.map((c:any) => c.text||"").join("") || "";
      const clean = raw.replace(/```json|```/g,"").trim();
      const parsed = JSON.parse(clean);
      setResult(parsed);
    } catch(e) {
      setResult({ words:[], fullIPA:"", explanation:"Ẩch! Có lỗi xảy ra. Vui lòng thử lại." });
    }
    setLoading(false);
  }

  function speak(t:string) {
    if (typeof window==="undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang="en-US"; u.rate=0.85;
    window.speechSynthesis.speak(u);
  }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="bg-white border-b border-zinc-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link href="/" className="text-zinc-400 hover:text-zinc-600 text-sm">← Trang chủ</Link>
          <div>
            <h1 className="text-lg font-bold">🔤 Kiểm tra phát âm IPA</h1>
            <p className="text-xs text-zinc-500">Dán văn bản tiếng Anh — AI sẽ phân tích IPA từng từ</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <textarea
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Dán văn bản hoặc từ tiếng Anh vào đây...&#10;Ví dụ: Hello, how are you today?"
            className="w-full min-h-[100px] text-sm text-zinc-800 placeholder:text-zinc-400 resize-none outline-none"
          />
          <div className="flex gap-2 mt-3 pt-3 border-t border-zinc-100">
            <button
              onClick={analyze}
              disabled={loading || !text.trim()}
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-bold py-2.5 rounded-xl text-sm transition-all"
            >
              {loading ? "⏳ Đang phân tích..." : "🔍 Phân tích IPA"}
            </button>
            <button
              onClick={() => speak(text)}
              disabled={!text.trim()}
              className="px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-600 text-sm font-medium hover:bg-zinc-50 disabled:opacity-40 transition-all"
            >
              🔊 Nghe
            </button>
            <button
              onClick={() => { setText(""); setResult(null); }}
              className="px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-500 text-sm hover:bg-zinc-50 transition-all"
            >
              Xóa
            </button>
          </div>
        </div>

        {result && result.words.length > 0 && (
          <>
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">IPA toàn bộ</p>
                <button onClick={() => speak(text)} className="text-xs text-indigo-600 hover:text-indigo-800 font-medium">🔊 Nghe</button>
              </div>
              <p className="text-xl font-bold text-indigo-700 font-mono">{result.fullIPA}</p>
              {result.explanation && (
                <p className="text-sm text-indigo-600 mt-2 leading-relaxed">{result.explanation}</p>
              )}
            </div>

            <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Từng từ</p>
              <div className="flex flex-wrap gap-2">
                {result.words.map((w, i) => (
                  <button
                    key={i}
                    onClick={() => speak(w.word)}
                    className="flex flex-col items-center px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-indigo-400 hover:bg-indigo-50 transition-all group"
                  >
                    <span className="text-sm font-bold text-zinc-800 group-hover:text-indigo-700">{w.word}</span>
                    <span className="text-xs text-indigo-500 font-mono mt-0.5">{w.ipa}</span>
                    <span className="text-[10px] text-zinc-400 mt-1">🔊 nhấn để nghe</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-xs font-semibold text-amber-700 mb-2">💡 Ký hiệu IPA thường gặp</p>
              <div className="flex flex-wrap gap-2">
                {[["/θ/","th (think)"],["/ð/","th (the)"],["/ŋ/","ng (sing)"],["/ʃ/","sh (she)"],["/dʒ/","j (jump)"],["/æ/","a (cat)"],["/ə/","schwa"],["/ɪ/","i ngắn (sit)"],["/iː/","i dài (see)"],["/ˈ/","trọng âm"]].map(([s,l])=>(
                  <span key={s} className="text-xs bg-white border border-amber-200 rounded-lg px-2.5 py-1.5 text-amber-800">
                    <span className="font-mono font-bold">{s}</span> {l}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {result && result.words.length === 0 && (
          <div className="text-center py-6 text-zinc-400 text-sm">{result.explanation}</div>
        )}
      </div>
    </div>
  );
}