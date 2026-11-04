"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useProgress } from "@/lib/store";
import { useTTS } from "@/lib/useTTS";
import { PUZZLE_POOL, shuffle, type Puzzle } from "@/lib/games";
import { SpeakButton } from "@/components/SpeakButton";
import { GameHeader, GameResult, ProgressDots } from "@/components/games/game-shell";

const N = 6;

type Piece = { id: number; text: string };

function Game({ onReplay }: { onReplay: () => void }) {
  const addXp = useProgress((s) => s.addXp);
  const recordGame = useProgress((s) => s.recordGame);
  const best = useProgress((s) => (s.gameBest || {})["sentence"]);
  const { speak } = useTTS({ rate: 0.85 });

  const [puzzles] = useState<Puzzle[]>(() => shuffle(PUZZLE_POOL).slice(0, N));
  const [idx, setIdx] = useState(0);
  const [bank, setBank] = useState<Piece[]>([]);
  const [built, setBuilt] = useState<Piece[]>([]);
  const [state, setState] = useState<"idle" | "right" | "wrong">("idle");
  const [results, setResults] = useState<(boolean | null)[]>(() => Array(N).fill(null));
  const [done, setDone] = useState<{ xp: number; newBest: boolean; correct: number } | null>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  const p = puzzles[idx];

  function reset() {
    let order = shuffle(p.pieces.map((text, id) => ({ id, text })));
    // Never start with the answer already in order
    if (order.map((x) => x.text).join(" ") === p.target && order.length > 1) order = [...order.slice(1), order[0]];
    setBank(order);
    setBuilt([]);
    setState("idle");
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(reset, [idx]);
  useEffect(() => {
    if (state !== "idle") nextRef.current?.focus();
  }, [state]);

  function check() {
    const ok = built.map((x) => x.text).join(" ") === p.target;
    setState(ok ? "right" : "wrong");
    if (ok) speak(p.target);
    // Only the first attempt counts toward the score
    setResults((r) => r.map((x, j) => (j === idx && x === null ? ok : x)));
  }

  function next() {
    if (idx < N - 1) setIdx(idx + 1);
    else {
      const correct = results.filter(Boolean).length;
      const xp = correct * 10 + 5;
      addXp(xp, "game:sentence");
      setDone({ xp, newBest: recordGame("sentence", correct), correct });
    }
  }

  if (done) {
    return (
      <GameResult
        gameId="sentence"
        score={done.correct}
        max={N}
        xp={done.xp}
        best={best}
        newBest={done.newBest}
        note="Chỉ tính câu xếp đúng ngay lần đầu."
        onReplay={onReplay}
      />
    );
  }

  const chip = "px-3.5 py-2.5 rounded-xl text-[17px] font-semibold border-2 transition-colors";

  return (
    <>
      <GameHeader title="Xếp câu" hint="Bấm các từ theo đúng thứ tự. Bấm lại một từ đã chọn để bỏ nó ra." stat={`Câu ${idx + 1}/${N}`} />
      <ProgressDots total={N} current={idx} results={results} />

      <p className="text-sm font-semibold text-navy-400 mb-1">Dịch sang tiếng Anh</p>
      <p className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-6">{p.vi}</p>

      <div
        className={`oli-paper rounded-2xl border-2 min-h-[92px] pl-16 pr-4 py-4 flex flex-wrap gap-2 items-start content-start transition-colors ${
          state === "right" ? "border-leaf-500" : state === "wrong" ? "border-apple-500" : "border-navy-900/10 dark:border-white/15"
        }`}
        aria-label="Câu của bạn"
      >
        {built.length === 0 && <span className="text-navy-400 py-2.5">Câu của bạn sẽ hiện ở đây</span>}
        {built.map((w) => (
          <button
            key={w.id}
            disabled={state !== "idle"}
            onClick={() => {
              setBuilt(built.filter((x) => x.id !== w.id));
              setBank([...bank, w]);
            }}
            className={`${chip} border-navy-900 dark:border-white bg-navy-900 dark:bg-white text-white dark:text-navy-900`}
          >
            {w.text}
          </button>
        ))}
      </div>

      <div className="mt-4 min-h-[56px] flex flex-wrap gap-2" aria-label="Các từ">
        {bank.map((w) => (
          <button
            key={w.id}
            disabled={state !== "idle"}
            onClick={() => {
              setBank(bank.filter((x) => x.id !== w.id));
              setBuilt([...built, w]);
            }}
            className={`${chip} border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-navy-900/30 dark:hover:border-white/30`}
          >
            {w.text}
          </button>
        ))}
      </div>

      {state === "right" && (
        <div className="mt-5 flex items-center gap-3 rounded-2xl bg-leaf-50 dark:bg-leaf-500/15 p-4">
          <SpeakButton text={p.target} size="sm" />
          <p className="font-bold text-leaf-700 dark:text-leaf-500">Đúng rồi! Nghe lại cả câu nhé.</p>
        </div>
      )}
      {state === "wrong" && (
        <div className="mt-5 rounded-2xl bg-apple-50 dark:bg-apple-500/15 p-4">
          <p className="font-bold text-apple-700 dark:text-apple-500 mb-1">Chưa đúng thứ tự</p>
          <p className="flex items-center gap-2 text-navy-700 dark:text-paper-100">
            Câu đúng: <span className="font-semibold">{p.target}</span>
            <SpeakButton text={p.target} size="sm" />
          </p>
        </div>
      )}

      <div className="mt-6 flex justify-end gap-3">
        {state === "idle" ? (
          <button onClick={check} disabled={bank.length > 0} className="btn-bump-ember">
            {bank.length > 0 ? `Còn ${bank.length} từ` : "Kiểm tra"}
          </button>
        ) : (
          <>
            {state === "wrong" && (
              <button onClick={reset} className="btn-bump-ghost">
                <RotateCcw className="w-4 h-4" /> Xếp lại
              </button>
            )}
            <button ref={nextRef} onClick={next} className="btn-bump-teal">
              {idx < N - 1 ? "Câu tiếp" : "Xem kết quả"} <ArrowRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default function SentenceGamePage() {
  const [run, setRun] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      {mounted && <Game key={run} onReplay={() => setRun((r) => r + 1)} />}
    </div>
  );
}
