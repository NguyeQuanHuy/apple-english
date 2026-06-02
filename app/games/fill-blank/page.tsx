"use client";
import { useState, useEffect } from "react";
import { FILL_BLANK } from "@/data/games";
import { useProgress } from "@/lib/store";
import { CheckCircle, XCircle, ArrowRight, Trophy } from "lucide-react";

export default function FillBlankGame() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const { addXp } = useProgress();

  const q = FILL_BLANK[index];
  const isCorrect = selected === q.blank;

  function handleSelect(opt: string) {
    if (selected) return;
    setSelected(opt);
    if (opt === q.blank) setScore((s) => s + 1);
  }

  function handleNext() {
    if (index + 1 >= FILL_BLANK.length) {
      addXp(score * 10 + 20);
      setDone(true);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  if (done) return (
    <div className="min-h-screen bg-paper-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-chunky border-2 border-paper-200 shadow-card p-8 text-center max-w-sm w-full">
        <Trophy className="w-16 h-16 text-gold-400 mx-auto mb-4" />
        <h2 className="font-display text-3xl font-bold text-ink-900 mb-2">Xong roi!</h2>
        <p className="text-ink-500 mb-2">Ban dung {score}/{FILL_BLANK.length} cau</p>
        <p className="text-ember-500 font-bold text-lg mb-6">+{score * 10 + 20} XP</p>
        <button onClick={() => { setIndex(0); setSelected(null); setScore(0); setDone(false); }}
          className="w-full bg-ember-500 text-white font-bold py-3 rounded-chunky shadow-bump shadow-ember-700 active:shadow-none active:translate-y-1 transition-all">
          Choi lai
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-paper-50 px-4 py-10">
      <div className="max-w-lg mx-auto">
        <div className="flex justify-between items-center mb-6">
          <span className="text-sm text-ink-400 font-medium">Cau {index + 1}/{FILL_BLANK.length}</span>
          <span className="text-sm font-bold text-ember-500">{score} dung</span>
        </div>
        <div className="h-2 bg-paper-100 rounded-full mb-8">
          <div className="h-full bg-ember-400 rounded-full transition-all" style={{ width: `${((index) / FILL_BLANK.length) * 100}%` }} />
        </div>
        <div className="bg-white rounded-chunky border-2 border-paper-200 shadow-card p-6 mb-6">
          <p className="text-xs text-ink-400 font-semibold uppercase tracking-wide mb-3">Dien vao cho trong</p>
          <p className="text-xl font-bold text-ink-900 mb-2">
            {q.sentence.replace("___", selected ? `[${selected}]` : "___")}
          </p>
          <p className="text-sm text-ink-400 italic">{q.vi}</p>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-6">
          {q.options.map((opt) => {
            let style = "bg-white border-2 border-paper-200 text-ink-700 hover:border-ember-400";
            if (selected === opt) {
              style = isCorrect && opt === q.blank
                ? "bg-teal-50 border-2 border-teal-500 text-teal-600"
                : opt !== q.blank
                ? "bg-red-50 border-2 border-red-400 text-red-600"
                : "bg-white border-2 border-paper-200 text-ink-700";
            }
            if (selected && opt === q.blank && selected !== opt) {
              style = "bg-teal-50 border-2 border-teal-500 text-teal-600";
            }
            return (
              <button key={opt} onClick={() => handleSelect(opt)}
                className={`py-3 px-4 rounded-xl font-semibold text-sm transition-all ${style}`}>
                {opt}
              </button>
            );
          })}
        </div>
        {selected && (
          <div className={`flex items-center gap-3 p-4 rounded-xl mb-4 ${isCorrect ? "bg-teal-50 text-teal-700" : "bg-red-50 text-red-700"}`}>
            {isCorrect ? <CheckCircle className="w-5 h-5" /> : <XCircle className="w-5 h-5" />}
            <span className="font-semibold text-sm">{isCorrect ? "Chinh xac!" : `Dap an dung: "${q.blank}"`}</span>
          </div>
        )}
        {selected && (
          <button onClick={handleNext}
            className="w-full flex items-center justify-center gap-2 bg-ember-500 text-white font-bold py-4 rounded-chunky shadow-bump shadow-ember-700 active:shadow-none active:translate-y-1 transition-all">
            {index + 1 >= FILL_BLANK.length ? "Xem ket qua" : "Cau tiep theo"} <ArrowRight size={18} />
          </button>
        )}
      </div>
    </div>
  );
}