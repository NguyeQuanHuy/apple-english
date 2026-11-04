"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, X } from "lucide-react";
import { useProgress } from "@/lib/store";
import { FILL_POOL, shuffle } from "@/lib/games";
import { SpeakButton } from "@/components/SpeakButton";
import { GameHeader, GameResult, ProgressDots } from "@/components/games/game-shell";

const N = 8;

type Item = { before: string; after: string; answer: string; options: string[]; vi: string; full: string };

function makeItems(): Item[] {
  return shuffle(FILL_POOL)
    .slice(0, N)
    .map((f) => {
      const [before, after = ""] = f.sentence.split("___");
      const options = f.options.includes(f.answer) ? shuffle(f.options) : shuffle([f.answer, ...f.options.slice(0, 3)]);
      return { before, after, answer: f.answer, options, vi: f.vi, full: `${before}${f.answer}${after}` };
    });
}

function Game({ onReplay }: { onReplay: () => void }) {
  const addXp = useProgress((s) => s.addXp);
  const recordGame = useProgress((s) => s.recordGame);
  const best = useProgress((s) => (s.gameBest || {})["fill-blank"]);

  const [items] = useState<Item[]>(makeItems);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<string | null>(null);
  const [results, setResults] = useState<(boolean | null)[]>(() => Array(N).fill(null));
  const [done, setDone] = useState<{ xp: number; newBest: boolean; correct: number } | null>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const it = items[idx];
  const reveal = picked !== null;
  const ok = picked === it.answer;

  useEffect(() => {
    if (reveal) nextRef.current?.focus();
  }, [reveal]);

  function choose(o: string) {
    if (reveal) return;
    setPicked(o);
    setResults((r) => r.map((x, j) => (j === idx ? o === it.answer : x)));
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done || reveal) return;
      const n = Number(e.key);
      if (n >= 1 && n <= it.options.length) choose(it.options[n - 1]);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function next() {
    if (idx < N - 1) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      const correct = results.filter(Boolean).length;
      const xp = correct * 5 + 5;
      addXp(xp, "game:fill-blank");
      setDone({ xp, newBest: recordGame("fill-blank", correct), correct });
    }
  }

  if (done) {
    return <GameResult gameId="fill-blank" score={done.correct} max={N} xp={done.xp} best={best} newBest={done.newBest} onReplay={onReplay} />;
  }

  return (
    <>
      <GameHeader title="Điền từ" hint="Chọn từ đúng cho chỗ trống. Có thể bấm phím 1–4." stat={`Câu ${idx + 1}/${N}`} />
      <ProgressDots total={N} current={idx} results={results} />

      <div className="oli-paper rounded-3xl border border-navy-900/10 dark:border-white/10 pl-16 pr-6 py-8 mb-5">
        <p className="font-display text-2xl sm:text-[32px] font-extrabold leading-snug text-navy-900 dark:text-white">
          {it.before}
          <span
            className={`inline-block min-w-[4.5ch] px-2 mx-0.5 text-center border-b-[3px] ${
              !reveal ? "border-navy-900/40 dark:border-white/40 text-transparent" : ok ? "border-leaf-500 text-leaf-600 dark:text-leaf-500" : "border-apple-500 text-apple-600 dark:text-apple-500"
            }`}
          >
            {reveal ? it.answer : "____"}
          </span>
          {it.after}
        </p>
        {reveal && (
          <p className="flex items-center gap-2 mt-3 text-navy-500 dark:text-paper-200">
            {it.vi} <SpeakButton text={it.full} size="sm" />
          </p>
        )}
      </div>

      <div className="grid grid-cols-2 gap-2.5">
        {it.options.map((o, i) => {
          const isAns = o === it.answer;
          const isPicked = picked === o;
          let cls = "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-navy-900/30 dark:hover:border-white/30";
          if (reveal && isAns) cls = "border-leaf-500 bg-leaf-50 dark:bg-leaf-500/15 text-leaf-700 dark:text-leaf-500";
          else if (reveal && isPicked) cls = "border-apple-500 bg-apple-50 dark:bg-apple-500/15 text-apple-700 dark:text-apple-500";
          else if (reveal) cls = "border-navy-900/10 dark:border-white/10 bg-white dark:bg-navy-900 text-navy-400 opacity-60";
          return (
            <button key={o} disabled={reveal} onClick={() => choose(o)} className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left text-lg font-semibold transition-colors ${cls}`}>
              <span className="w-7 h-7 rounded-lg bg-navy-900/[0.06] dark:bg-white/10 grid place-items-center text-sm font-bold flex-shrink-0">
                {reveal && isAns ? <Check className="w-4 h-4" strokeWidth={3} /> : reveal && isPicked ? <X className="w-4 h-4" strokeWidth={3} /> : i + 1}
              </span>
              {o}
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className="mt-5 flex items-center justify-between gap-4">
          <p className={`font-bold ${ok ? "text-leaf-600 dark:text-leaf-500" : "text-apple-600 dark:text-apple-500"}`}>{ok ? "Chính xác!" : `Đáp án đúng là “${it.answer}”`}</p>
          <button ref={nextRef} onClick={next} className="btn-bump-teal">
            {idx < N - 1 ? "Câu tiếp" : "Xem kết quả"} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </>
  );
}

export default function FillBlankPage() {
  const [run, setRun] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      {mounted && <Game key={run} onReplay={() => setRun((r) => r + 1)} />}
    </div>
  );
}
