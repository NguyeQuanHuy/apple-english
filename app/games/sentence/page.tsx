"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, XCircle } from "lucide-react";
import { SENTENCE_PUZZLES } from "@/data/games";
import { useProgress } from "@/lib/store";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function SentenceGame() {
  const addXp = useProgress((s) => s.addXp);
  const inc = useProgress((s) => s.incrementGamesPlayed);
  const [idx, setIdx] = useState(0);
  const [bank, setBank] = useState<string[]>([]);
  const [built, setBuilt] = useState<string[]>([]);
  const [result, setResult] = useState<"idle" | "right" | "wrong">("idle");
  const [score, setScore] = useState(0);

  const puzzle = SENTENCE_PUZZLES[idx];

  useEffect(() => {
    setBank(shuffle(puzzle.pieces));
    setBuilt([]);
    setResult("idle");
    if (idx === 0) inc();
    // eslint-disable-next-line
  }, [idx]);

  function pickPiece(i: number) {
    if (result !== "idle") return;
    const w = bank[i];
    setBank(bank.filter((_, j) => j !== i));
    setBuilt([...built, w]);
  }
  function unpickPiece(i: number) {
    if (result !== "idle") return;
    const w = built[i];
    setBuilt(built.filter((_, j) => j !== i));
    setBank([...bank, w]);
  }
  function check() {
    if (built.length === 0) return;
    const ok = built.join(" ") === puzzle.target;
    if (ok) {
      setScore((s) => s + 1);
      setResult("right");
      addXp(10);
    } else {
      setResult("wrong");
    }
  }
  function nextPuzzle() {
    if (idx < SENTENCE_PUZZLES.length - 1) setIdx(idx + 1);
    else {
      addXp(15);
      setIdx(0); // restart for re-play, but show summary
      setResult("idle");
      setScore(0);
      alert("Bạn đã chơi xong tất cả câu! Chơi lại nhé.");
    }
  }
  function retry() {
    setBank(shuffle(puzzle.pieces));
    setBuilt([]);
    setResult("idle");
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/games" className="text-sm font-bold text-ink-500 inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Games
        </Link>
        <div className="text-sm font-bold text-ink-500">
          Câu {idx + 1}/{SENTENCE_PUZZLES.length} • Score: {score}
        </div>
      </div>

      <h1 className="font-display text-3xl font-black">Xếp câu</h1>
      <p className="text-sm text-ink-500 mt-1">Dịch nghĩa: <span className="font-bold text-ink-700 dark:text-paper-100">"{puzzle.vi}"</span></p>

      {/* Built area */}
      <div className="mt-6 min-h-[80px] card-paper p-4 flex flex-wrap gap-2 items-start">
        {built.length === 0 && (
          <div className="text-ink-300 text-sm italic">Bấm các từ bên dưới để xếp câu...</div>
        )}
        {built.map((w, i) => (
          <motion.button
            layout
            key={`${w}-${i}`}
            onClick={() => unpickPiece(i)}
            className="px-3 py-2 rounded-xl bg-ember-500 text-white font-bold shadow-bumpsm"
            style={{ boxShadow: "0 3px 0 0 #A53D08" }}
          >
            {w}
          </motion.button>
        ))}
      </div>

      {/* Bank */}
      <div className="mt-4 flex flex-wrap gap-2">
        {bank.map((w, i) => (
          <motion.button
            layout
            key={`${w}-${i}`}
            onClick={() => pickPiece(i)}
            className="px-3 py-2 rounded-xl bg-paper-100 dark:bg-ink-700 font-bold border-2 border-ink-900/10 dark:border-paper-50/10"
          >
            {w}
          </motion.button>
        ))}
      </div>

      {result === "right" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 p-4 rounded-chunky bg-teal-50 dark:bg-teal-700/20 text-teal-700 dark:text-teal-50">
          <div className="font-bold flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Đúng rồi! +10 XP</div>
        </motion.div>
      )}
      {result === "wrong" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 p-4 rounded-chunky bg-rose-400/10 text-rose-500">
          <div className="font-bold flex items-center gap-2"><XCircle className="w-4 h-4" /> Chưa đúng. Câu đúng: "{puzzle.target}"</div>
        </motion.div>
      )}

      <div className="mt-6 flex justify-end gap-3">
        {result === "idle" ? (
          <button onClick={check} disabled={built.length === 0} className="btn-bump-ember">Kiểm tra</button>
        ) : result === "wrong" ? (
          <>
            <button onClick={retry} className="btn-bump-ghost">Thử lại</button>
            <button onClick={nextPuzzle} className="btn-bump-teal">Câu tiếp</button>
          </>
        ) : (
          <button onClick={nextPuzzle} className="btn-bump-teal">Câu tiếp</button>
        )}
      </div>
    </div>
  );
}
