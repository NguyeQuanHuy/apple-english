"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";
import type { SentencePuzzle } from "@/data/beginner-lessons";
import { AudioButton } from "./audio-button";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function SentenceBuilderView({
  puzzles,
  onComplete,
}: {
  puzzles: SentencePuzzle[];
  onComplete: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [bank, setBank] = useState<string[]>([]);
  const [built, setBuilt] = useState<string[]>([]);
  const [result, setResult] = useState<"correct" | "wrong" | null>(null);

  const puzzle = puzzles[idx];

  useEffect(() => {
    setBank(shuffle(puzzle.pieces));
    setBuilt([]);
    setResult(null);
  }, [idx, puzzle]);

  function pickPiece(i: number) {
    if (result) return;
    const w = bank[i];
    setBank(bank.filter((_, j) => j !== i));
    setBuilt([...built, w]);
  }

  function unpickPiece(i: number) {
    if (result) return;
    const w = built[i];
    setBuilt(built.filter((_, j) => j !== i));
    setBank([...bank, w]);
  }

  function check() {
    if (built.length === 0) return;
    const ok = built.join(" ") === puzzle.target;
    setResult(ok ? "correct" : "wrong");
  }

  function nextPuzzle() {
    if (idx < puzzles.length - 1) setIdx(idx + 1);
    else onComplete();
  }

  function retry() {
    setBank(shuffle(puzzle.pieces));
    setBuilt([]);
    setResult(null);
  }

  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-ember-500">
        Xếp câu {idx + 1}/{puzzles.length}
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-black mt-2">
        Sắp xếp các từ thành câu đúng
      </h2>

      <div className="mt-4 card-paper p-4 border-l-4 border-teal-500">
        <div className="text-xs font-bold uppercase tracking-widest text-teal-500 mb-1">
          Dịch nghĩa
        </div>
        <div className="font-display text-lg font-bold">"{puzzle.vi}"</div>
        {puzzle.hint && (
          <div className="text-xs text-ink-500 mt-1">💡 {puzzle.hint}</div>
        )}
      </div>

      {/* Built area */}
      <div className="mt-5 min-h-[80px] card-paper p-4 flex flex-wrap gap-2 items-start border-2 border-dashed border-ember-500/40">
        {built.length === 0 ? (
          <div className="text-ink-300 text-sm italic w-full text-center py-2">
            Bấm các từ bên dưới để xếp câu...
          </div>
        ) : (
          built.map((w, i) => (
            <motion.button
              layout
              key={`${w}-built-${i}`}
              onClick={() => unpickPiece(i)}
              disabled={!!result}
              className="px-3 py-2 rounded-xl bg-ember-500 text-white font-bold"
              style={{ boxShadow: "0 3px 0 0 #A53D08" }}
            >
              {w}
            </motion.button>
          ))
        )}
      </div>

      {/* Bank */}
      <div className="mt-4 flex flex-wrap gap-2 min-h-[50px]">
        {bank.map((w, i) => (
          <motion.button
            layout
            key={`${w}-bank-${i}`}
            onClick={() => pickPiece(i)}
            disabled={!!result}
            className="px-3 py-2 rounded-xl bg-paper-100 dark:bg-ink-700 font-bold border-2 border-ink-900/10 dark:border-paper-50/10 hover:-translate-y-0.5 transition-transform"
          >
            {w}
          </motion.button>
        ))}
      </div>

      {result === "correct" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 p-4 rounded-chunky bg-teal-50 dark:bg-teal-700/20 text-teal-700 dark:text-teal-50">
          <div className="font-bold flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4" /> Chính xác!
          </div>
          <div className="text-sm flex items-center gap-2">
            <AudioButton text={puzzle.target} size="sm" />
            <span className="italic">"{puzzle.target}"</span>
          </div>
        </motion.div>
      )}
      {result === "wrong" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 p-4 rounded-chunky bg-rose-400/10 text-rose-600 dark:text-rose-400">
          <div className="font-bold flex items-center gap-2 mb-2">
            <XCircle className="w-4 h-4" /> Chưa đúng
          </div>
          <div className="text-sm">
            Câu đúng phải là: <strong>"{puzzle.target}"</strong>
          </div>
        </motion.div>
      )}

      <div className="mt-6 flex justify-end gap-3">
        {!result ? (
          <button onClick={check} disabled={built.length === 0} className="btn-bump-ember">
            Kiểm tra
          </button>
        ) : result === "wrong" ? (
          <>
            <button onClick={retry} className="btn-bump-ghost">
              <RotateCcw className="w-4 h-4" /> Thử lại
            </button>
            <button onClick={nextPuzzle} className="btn-bump-teal">
              {idx < puzzles.length - 1 ? "Câu tiếp" : "Tiếp tục"}
            </button>
          </>
        ) : (
          <button onClick={nextPuzzle} className="btn-bump-teal">
            {idx < puzzles.length - 1 ? "Câu tiếp" : "Tiếp tục"}
          </button>
        )}
      </div>
    </div>
  );
}
