"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FAST_QUIZ } from "@/data/games";
import { useProgress } from "@/lib/store";

const PER_Q_SEC = 8;

export default function FastQuizGame() {
  const addXp = useProgress((s) => s.addXp);
  const inc = useProgress((s) => s.incrementGamesPlayed);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [reveal, setReveal] = useState(false);
  const [score, setScore] = useState(0);
  const [t, setT] = useState(PER_Q_SEC);
  const [done, setDone] = useState(false);

  useEffect(() => { inc(); /* eslint-disable-next-line */ }, []);

  const q = FAST_QUIZ[idx];

  useEffect(() => {
    if (reveal || done) return;
    if (t <= 0) {
      setReveal(true);
      return;
    }
    const i = setInterval(() => setT((x) => x - 1), 1000);
    return () => clearInterval(i);
  }, [t, reveal, done]);

  function pick(i: number) {
    if (reveal) return;
    setPicked(i);
    setReveal(true);
    if (i === q.correctIndex) {
      const bonus = Math.max(1, t); // faster = more XP
      setScore((s) => s + bonus);
    }
  }

  function nextQ() {
    if (idx < FAST_QUIZ.length - 1) {
      setIdx(idx + 1);
      setPicked(null);
      setReveal(false);
      setT(PER_Q_SEC);
    } else {
      addXp(score);
      setDone(true);
    }
  }

  if (done) {
    return (
      <div className="max-w-md mx-auto px-4 pt-16 text-center">
        <div className="text-6xl mb-4">⚡</div>
        <h1 className="font-display text-4xl font-black">Hoàn thành!</h1>
        <p className="text-ink-500 mt-2">Bạn kiếm được {score} XP</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link href="/games" className="btn-bump-ghost">Game khác</Link>
          <button onClick={() => location.reload()} className="btn-bump-ember">Chơi lại</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto px-4 sm:px-6 pt-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/games" className="text-sm font-bold text-ink-500 inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Games
        </Link>
        <div className="text-sm font-bold text-ink-500">
          {idx + 1}/{FAST_QUIZ.length} • {score} XP
        </div>
      </div>

      <div className="relative h-2 rounded-full bg-ink-900/8 dark:bg-paper-50/8 overflow-hidden mb-6">
        <motion.div
          key={idx}
          initial={{ width: "100%" }}
          animate={{ width: `${(t / PER_Q_SEC) * 100}%` }}
          transition={{ duration: 1, ease: "linear" }}
          className={`h-full ${t <= 2 ? "bg-rose-500" : "bg-ember-500"}`}
        />
      </div>

      <h1 className="font-display text-2xl md:text-3xl font-black">{q.prompt}</h1>
      <div className="mt-5 space-y-3">
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === q.correctIndex;
          let cls = "card-paper p-4 text-left font-bold w-full transition-all";
          if (reveal) {
            if (isCorrect) cls += " ring-2 ring-teal-500 bg-teal-50 dark:bg-teal-700/20";
            else if (isPicked) cls += " ring-2 ring-rose-500 bg-rose-400/10";
            else cls += " opacity-50";
          } else cls += " hover:-translate-y-0.5";
          return (
            <button key={i} onClick={() => pick(i)} disabled={reveal} className={cls}>
              {opt}
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className="mt-6 flex justify-end">
          <button onClick={nextQ} className="btn-bump-teal">
            {idx < FAST_QUIZ.length - 1 ? "Câu tiếp" : "Xem kết quả"}
          </button>
        </div>
      )}
    </div>
  );
}
