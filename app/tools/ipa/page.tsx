"use client";
import { useState } from "react";
import Link from "next/link";

type IPAResult = { words: { word: string; ipa: string }[]; fullIPA: string; explanation: string };
type GrammarResult = { sentences: { original: string; structure: string; vi: string; errors: string[]; corrected: string | null }[]; summary: string };

export default function IPAPage() {
  const [text, setText] = useState("");
  const [tab, setTab] = useState<"ipa"|"grammar">("ipa");
  const [ipaResult, setIpaResult] = useState<IPAResult | null>(null);
  const [grammarResult, setGrammarResult] = useState<GrammarResult | null>(null);
  const [loading, setLoading] = useState(false);

  async function analyzeIPA() {
    if (!text.trim()) return;
    setLoading(true); setIpaResult(null);
    try {
      const res = await fetch("/api/ipa", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: text.trim() }) });
      setIpaResult(await res.json());
    } catch { setIpaResult({ words: [], fullIPA: "", explanation: "Lỗi! Thử lại." }); }
    setLoading(false);
  }

  async function analyzeGrammar() {
    if (!text.trim()) return;
    setLoading(true); setGrammarResult(null);
    try {
      const res = await fetch("/api/grammar", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ text: text.trim() }) });
      setGrammarResult(await res.json());
    } catch { setGrammarResult({ sentences: [], summary: "Lỗi! Cần API key để phân tích ngữ pháp." }); }
    setLoading(false);
  }

  function speak(t: string) {
    if (typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(t);
    u.lang = "en-US"; u.rate = 0.85;
    window.speechSynthesis.speak(u);
  }

  function analyze() { tab === "ipa" ? analyzeIPA() : analyzeGrammar(); }

  return (
    <div className="min-h-screen bg-zinc-50">
      <div className="bg-white border-b border-zinc-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <Link href="/" className="text-zinc-400 hover:text-zinc-600 text-sm">← Trang chủ</Link>
          <div>
            <h1 className="text-lg font-bold">🔤 Công cụ phân tích tiếng Anh</h1>
            <p className="text-xs text-zinc-500">IPA phát âm · Ngữ pháp · Audio</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-6 space-y-4">
        {/* Tab */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-1.5 flex gap-1.5">
          <button onClick={() => setTab("ipa")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "ipa" ? "bg-indigo-600 text-white" : "text-zinc-500 hover:bg-zinc-50"}`}>
            🔤 Phân tích IPA
          </button>
          <button onClick={() => setTab("grammar")}
            className={`flex-1 py-2.5 rounded-xl text-sm font-bold transition-all ${tab === "grammar" ? "bg-emerald-600 text-white" : "text-zinc-500 hover:bg-zinc-50"}`}>
            📝 Phân tích ngữ pháp
          </button>
        </div>

        {/* Input */}
        <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
          <textarea value={text} onChange={e => setText(e.target.value)}
            placeholder={tab === "ipa" ? "Dán văn bản tiếng Anh để xem IPA...\nVí dụ: Hello, how are you today?" : "Dán câu tiếng Anh để kiểm tra ngữ pháp...\nVí dụ: She don't like coffee."}
            className="w-full min-h-[100px] text-sm text-zinc-800 placeholder:text-zinc-400 resize-none outline-none" />
          <div className="flex gap-2 mt-3 pt-3 border-t border-zinc-100">
            <button onClick={analyze} disabled={loading || !text.trim()}
              className={`flex-1 disabled:opacity-40 text-white font-bold py-2.5 rounded-xl text-sm transition-all ${tab === "ipa" ? "bg-indigo-600 hover:bg-indigo-700" : "bg-emerald-600 hover:bg-emerald-700"}`}>
              {loading ? "⏳ Đang phân tích..." : tab === "ipa" ? "🔍 Phân tích IPA" : "📝 Phân tích ngữ pháp"}
            </button>
            <button onClick={() => speak(text)} disabled={!text.trim()}
              className="px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-600 text-sm hover:bg-zinc-50 disabled:opacity-40 transition-all">
              🔊 Nghe
            </button>
            <button onClick={() => { setText(""); setIpaResult(null); setGrammarResult(null); }}
              className="px-4 py-2.5 rounded-xl border border-zinc-200 text-zinc-500 text-sm hover:bg-zinc-50 transition-all">
              Xóa
            </button>
          </div>
        </div>

        {/* IPA Result */}
        {tab === "ipa" && ipaResult && ipaResult.words && ipaResult.words.length > 0 && (
          <>
            <div className="bg-indigo-50 border border-indigo-200 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-semibold text-indigo-500 uppercase tracking-wide">IPA toàn bộ</p>
                <button onClick={() => speak(text)} className="text-xs text-indigo-600 font-medium">🔊 Nghe</button>
              </div>
              <p className="text-xl font-bold text-indigo-700 font-mono">{ipaResult.fullIPA}</p>
              {ipaResult.explanation && <p className="text-sm text-indigo-600 mt-2">{ipaResult.explanation}</p>}
            </div>
            <div className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
              <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide mb-3">Từng từ</p>
              <div className="flex flex-wrap gap-2">
                {ipaResult.words.map((w, i) => (
                  <button key={i} onClick={() => speak(w.word)}
                    className="flex flex-col items-center px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:border-indigo-400 hover:bg-indigo-50 transition-all group">
                    <span className="text-sm font-bold text-zinc-800 group-hover:text-indigo-700">{w.word}</span>
                    <span className="text-xs text-indigo-500 font-mono mt-0.5">{w.ipa}</span>
                    <span className="text-[10px] text-zinc-400 mt-1">🔊 nhấn nghe</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-xs font-semibold text-amber-700 mb-2">💡 Ký hiệu IPA thường gặp</p>
              <div className="flex flex-wrap gap-2">
                {[["/θ/","th (think)"],["/ð/","th (the)"],["/ŋ/","ng (sing)"],["/ʃ/","sh (she)"],["/dʒ/","j (jump)"],["/æ/","a (cat)"],["/ə/","schwa"],["/ɪ/","i ngắn"],["/iː/","i dài"],["/ˈ/","trọng âm"]].map(([s,l]) => (
                  <span key={s} className="text-xs bg-white border border-amber-200 rounded-lg px-2.5 py-1.5 text-amber-800">
                    <span className="font-mono font-bold">{s}</span> {l}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Grammar Result */}
        {tab === "grammar" && grammarResult && (
          <div className="space-y-3">
            {grammarResult.summary && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <p className="text-xs font-semibold text-emerald-600 mb-1">📊 Nhận xét tổng thể</p>
                <p className="text-sm text-emerald-800">{grammarResult.summary}</p>
              </div>
            )}
            {grammarResult.sentences?.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-zinc-200 p-5 shadow-sm">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <p className="text-sm font-bold text-zinc-800">{s.original}</p>
                  <button onClick={() => speak(s.original)} className="text-zinc-400 hover:text-zinc-600 flex-shrink-0">🔊</button>
                </div>
                <div className="space-y-2">
                  <div className="flex gap-2 items-center">
                    <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full font-bold">Cấu trúc</span>
                    <span className="text-sm text-zinc-600 font-mono">{s.structure}</span>
                  </div>
                  <div className="flex gap-2 items-start">
                    <span className="text-xs bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full font-bold flex-shrink-0">Nghĩa</span>
                    <span className="text-sm text-zinc-600">{s.vi}</span>
                  </div>
                  {s.errors && s.errors.length > 0 && (
                    <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                      <p className="text-xs font-bold text-red-600 mb-1">⚠️ Lỗi ngữ pháp:</p>
                      {s.errors.map((e, j) => <p key={j} className="text-xs text-red-700">{e}</p>)}
                      {s.corrected && <p className="text-xs text-emerald-700 mt-2 font-bold">✓ Sửa: {s.corrected}</p>}
                    </div>
                  )}
                  {(!s.errors || s.errors.length === 0) && (
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">✓ Đúng ngữ pháp</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}