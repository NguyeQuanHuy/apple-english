"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { useProgress } from "@/lib/store";
import { makeQuickQuiz, type QuickQuestion } from "@/lib/games";
import { SpeakButton } from "@/components/SpeakButton";
import { GameHeader, GameResult, ProgressDots } from "@/components/games/game-shell";

const N = 10;
const PER_Q = 8;

function Game({ onReplay }: { onReplay: () => void }) {
  const addXp = useProgress((s) => s.addXp);
  const recordGame = useProgress((s) => s.recordGame);
  const best = useProgress((s) => (s.gameBest || {})["fast-quiz"]);

  const [qs] = useState<QuickQuestion[]>(() => makeQuickQuiz(N));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [reveal, setReveal] = useState(false);
  const [t, setT] = useState(PER_Q);
  const [score, setScore] = useState(0);
  const [gained, setGained] = useState(0);
  const [results, setResults] = useState<(boolean | null)[]>(() => Array(N).fill(null));
  const [done, setDone] = useState<{ xp: number; newBest: boolean; correct: number } | null>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const q = qs[idx];

  const answer = useCallback(
    (i: number | null) => {
      if (reveal) return;
      const ok = i === q.correctIndex;
      const pts = ok ? Math.max(1, t) : 0;
      setPicked(i);
      setReveal(true);
      setGained(pts);
      setScore((s) => s + pts);
      setResults((r) => r.map((x, j) => (j === idx ? ok : x)));
    },
    [reveal, q, t, idx]
  );

  useEffect(() => {
    if (reveal || done) return;
    if (t <= 0) {
      answer(null);
      return;
    }
    const id = setTimeout(() => setT((x) => x - 1), 1000);
    return () => clearTimeout(id);
  }, [t, reveal, done, answer]);

  useEffect(() => {
    if (reveal) nextRef.current?.focus();
  }, [reveal]);

  // Keys 1–4 choose an answer, Enter moves on
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done) return;
      if (!reveal && ["1", "2", "3", "4"].includes(e.key)) answer(Number(e.key) - 1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [answer, reveal, done]);

  function next() {
    if (idx < N - 1) {
      setIdx(idx + 1);
      setPicked(null);
      setReveal(false);
      setT(PER_Q);
    } else {
      const correct = results.filter(Boolean).length;
      const xp = score;
      if (xp > 0) addXp(xp, "game:fast-quiz");
      setDone({ xp, newBest: recordGame("fast-quiz", score), correct });
    }
  }

  if (done) {
    return (
      <GameResult
        gameId="fast-quiz"
        score={score}
        max={N * PER_Q}
        xp={done.xp}
        best={best}
        newBest={done.newBest}
        note={`Đúng ${done.correct}/${N} từ. Mỗi câu đúng được số điểm bằng số giây còn lại.`}
        onReplay={onReplay}
      />
    );
  }

  const urgent = !reveal && t <= 3;

  return (
    <>
      <GameHeader title="Quiz tốc độ" hint="Chọn nghĩa đúng trước khi hết giờ. Có thể bấm phím 1–4." stat={`${score} điểm`} />
      <ProgressDots total={N} current={idx} results={results} />

      <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 sm:p-8 mb-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm font-semibold text-navy-400">Từ {idx + 1}/{N}</span>
          <span className={`w-11 h-11 rounded-full grid place-items-center text-lg font-extrabold tabular-nums transition-colors ${urgent ? "bg-apple-500 text-white" : "bg-navy-900/[0.06] dark:bg-white/10 text-navy-900 dark:text-white"}`} aria-label={`Còn ${t} giây`}>
            {reveal ? "–" : t}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <p className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.02em] text-navy-900 dark:text-white break-words min-w-0">{q.prompt}</p>
          {q.speak && <SpeakButton text={q.speak} size="md" className="flex-shrink-0" />}
        </div>
        <p className="text-navy-500 dark:text-paper-200 mt-1">nghĩa là gì?</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {q.options.map((opt, i) => {
          const isAns = i === q.correctIndex;
          const isPicked = picked === i;
          let cls = "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-navy-900/30 dark:hover:border-white/30";
          if (reveal && isAns) cls = "border-leaf-500 bg-leaf-50 dark:bg-leaf-500/15 text-leaf-700 dark:text-leaf-500";
          else if (reveal && isPicked) cls = "border-apple-500 bg-apple-50 dark:bg-apple-500/15 text-apple-700 dark:text-apple-500";
          else if (reveal) cls = "border-navy-900/10 dark:border-white/10 bg-white dark:bg-navy-900 text-navy-400 opacity-60";
          return (
            <button key={i} disabled={reveal} onClick={() => answer(i)} className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left font-semibold transition-colors ${cls}`}>
              <span className="w-7 h-7 rounded-lg bg-navy-900/[0.06] dark:bg-white/10 grid place-items-center text-sm font-bold flex-shrink-0">
                {reveal && isAns ? <Check className="w-4 h-4" strokeWidth={3} /> : reveal && isPicked ? <X className="w-4 h-4" strokeWidth={3} /> : i + 1}
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className={`font-bold ${picked === q.correctIndex ? "text-leaf-600 dark:text-leaf-500" : "text-apple-600 dark:text-apple-500"}`}>
            {picked === q.correctIndex ? `Đúng! +${gained} điểm` : picked === null ? "Hết giờ rồi" : "Chưa đúng"}
          </p>
          <button ref={nextRef} onClick={next} className="btn-bump-teal">
            {idx < N - 1 ? "Từ tiếp" : "Xem kết quả"} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}

export default function FastQuizPage() {
  const [run, setRun] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      {mounted && <Game key={run} onReplay={() => setRun((r) => r + 1)} />}
    </div>
  );
}
