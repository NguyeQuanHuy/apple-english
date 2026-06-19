"use client";
import { useState } from "react";
import { ALPHABET } from "@/data/alphabet";
import Link from "next/link";

export default function AlphabetPage() {
    const [active, setActive] = useState<number | null>(null);
    const [spoken, setSpoken] = useState<string | null>(null);

    function speak(text: string) {
        if (typeof window === "undefined") return;
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US"; u.rate = 0.85;
        window.speechSynthesis.speak(u);
        setSpoken(text);
        setTimeout(() => setSpoken(null), 1200);
    }

    const letter = active !== null ? ALPHABET[active] : null;

    return (
        <div className="min-h-screen bg-zinc-50">
            <div className="bg-white border-b border-zinc-200 px-4 py-4">
                <div className="max-w-3xl mx-auto flex items-center gap-3">
                    <Link href="/learn/beginner" className="text-zinc-400 hover:text-zinc-600 text-sm">← Quay lại</Link>
                    <div>
                        <h1 className="text-lg font-bold">🔤 Bảng chữ cái tiếng Anh</h1>
                        <p className="text-xs text-zinc-500">Nhấn vào từng chữ để nghe phát âm và xem ví dụ</p>
                    </div>
                </div>
            </div>
            <div className="max-w-3xl mx-auto px-4 py-6 space-y-6">
                <div className="grid grid-cols-6 sm:grid-cols-9 gap-2">
                    {ALPHABET.map((l, i) => (
                        <button key={l.letter} onClick={() => { setActive(i === active ? null : i); speak(l.letter); }}
                            className={`aspect-square rounded-xl border-2 flex flex-col items-center justify-center transition-all font-bold text-lg ${active === i ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md scale-105" : "border-zinc-200 bg-white text-zinc-700 hover:border-indigo-300"}`}>
                            <span>{l.letter}</span>
                            <span className="text-[10px] font-normal text-zinc-400">{l.lower}</span>
                        </button>
                    ))}
                </div>
                {letter && (
                    <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-4">
                                <div className="w-20 h-20 rounded-2xl bg-indigo-50 border-2 border-indigo-200 flex items-center justify-center">
                                    <span className="text-4xl font-black text-indigo-600">{letter.letter}</span>
                                </div>
                                <div>
                                    <p className="text-sm text-zinc-500">Phát âm IPA</p>
                                    <p className="text-xl font-bold text-zinc-800">{letter.ipa}</p>
                                    <p className="text-sm text-indigo-600 font-medium">Đọc như: <span className="font-bold">{letter.viSound}</span></p>
                                </div>
                            </div>
                            <button onClick={() => speak(letter.letter)}
                                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all ${spoken === letter.letter ? "bg-indigo-600 text-white scale-110" : "bg-indigo-100 text-indigo-600 hover:bg-indigo-200"}`}>
                                🔊
                            </button>
                        </div>
                        {letter.tip && (
                            <div className="mb-4 px-4 py-2.5 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
                                💡 <strong>Mẹo:</strong> {letter.tip}
                            </div>
                        )}
                        <h3 className="text-sm font-semibold text-zinc-500 mb-3">Từ ví dụ</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {letter.words.map((w) => (
                                <button key={w.en} onClick={() => speak(w.en)}
                                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all text-left ${spoken === w.en ? "border-indigo-400 bg-indigo-50" : "border-zinc-200 bg-zinc-50 hover:border-indigo-300"}`}>
                                    <span className="text-2xl">{w.emoji}</span>
                                    <div><p className="font-bold text-zinc-800">{w.en}</p><p className="text-xs text-zinc-500">{w.vi}</p></div>
                                    <span className="ml-auto text-zinc-300 text-sm">🔊</span>
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2 mt-5">
                            <button disabled={active === 0} onClick={() => { setActive(active! - 1); speak(ALPHABET[active! - 1].letter); }}
                                className="flex-1 py-2.5 rounded-xl border border-zinc-200 text-sm font-medium text-zinc-500 disabled:opacity-30 hover:bg-zinc-50">
                                ← {active! > 0 ? ALPHABET[active! - 1].letter : ""}
                            </button>
                            <button disabled={active === 25} onClick={() => { setActive(active! + 1); speak(ALPHABET[active! + 1].letter); }}
                                className="flex-1 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold">
                                {active! < 25 ? ALPHABET[active! + 1].letter : ""} →
                            </button>
                        </div>
                    </div>
                )}
                {!letter && <div className="text-center py-8 text-zinc-400 text-sm">↑ Nhấn vào một chữ cái để xem chi tiết</div>}
            </div>
        </div>
    );
}