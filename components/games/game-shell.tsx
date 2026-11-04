"use client";
import Link from "next/link";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { GAMES, type GameId } from "@/lib/games";

export function GameHeader({ title, hint, stat, statUrgent }: { title: string; hint: string; stat?: React.ReactNode; statUrgent?: boolean }) {
  return (
    <div className="mb-7">
      <div className="flex items-center justify-between gap-4 mb-5">
        <Link href="/games" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white">
          <ArrowLeft className="w-4 h-4" /> Mini games
        </Link>
        {stat !== undefined && (
          <span
            aria-live="polite"
            className={`px-3 py-1.5 rounded-xl text-sm font-bold tabular-nums transition-colors ${
              statUrgent ? "bg-apple-500 text-white" : "bg-navy-900/[0.06] dark:bg-white/10 text-navy-700 dark:text-paper-100"
            }`}
          >
            {stat}
          </span>
        )}
      </div>
      <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-navy-900 dark:text-white">{title}</h1>
      <p className="text-navy-500 dark:text-paper-200 mt-1">{hint}</p>
    </div>
  );
}

export function ProgressDots({ total, current, results }: { total: number; current: number; results: (boolean | null)[] }) {
  return (
    <div className="flex gap-1.5 mb-6" aria-label={`Câu ${current + 1} trên ${total}`}>
      {Array.from({ length: total }, (_, i) => {
        const r = results[i];
        return (
          <span
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              r === true ? "bg-leaf-500" : r === false ? "bg-apple-500" : i === current ? "bg-navy-900/40 dark:bg-white/40" : "bg-navy-900/[0.08] dark:bg-white/10"
            }`}
          />
        );
      })}
    </div>
  );
}

export function GameResult({
  gameId,
  score,
  max,
  xp,
  best,
  newBest,
  note,
  onReplay,
}: {
  gameId: GameId;
  score: number;
  max: number;
  xp: number;
  best: number | undefined;
  newBest: boolean;
  note?: string;
  onReplay: () => void;
}) {
  const game = GAMES.find((g) => g.id === gameId)!;
  const pct = max ? score / max : 0;
  const headline = pct === 1 ? "Hoàn hảo!" : pct >= 0.7 ? "Làm tốt lắm!" : pct >= 0.4 ? "Khá ổn, thử thêm ván nữa nhé" : "Khởi động xong rồi, ván sau sẽ tốt hơn";
  const others = GAMES.filter((g) => g.id !== gameId);
  return (
    <div className="max-w-md mx-auto text-center pt-4">
      {newBest && (
        <p className="font-hand text-apple-500 text-3xl mb-2" style={{ transform: "rotate(-3deg)" }}>Kỷ lục mới!</p>
      )}
      <p className="text-sm font-semibold text-navy-400 mb-2">{game.title}</p>
      <p className="font-display text-7xl font-extrabold tracking-tight text-navy-900 dark:text-white tabular-nums">
        {score}
        <span className="text-3xl text-navy-400">/{max}</span>
      </p>
      <p className="text-sm text-navy-400 mb-4">{game.scoreLabel}</p>
      <p className="text-lg font-semibold text-navy-700 dark:text-paper-100 mb-2">{headline}</p>
      {note && <p className="text-[15px] text-navy-500 dark:text-paper-200 mb-2">{note}</p>}
      <p className="flex items-center justify-center gap-3 text-sm mb-8">
        <span className="px-3 py-1 rounded-full bg-hl-200 dark:bg-hl-300/15 text-amber-800 dark:text-hl-300 font-bold">+{xp} XP</span>
        {best !== undefined && <span className="text-navy-400">Kỷ lục: <span className="font-bold text-navy-700 dark:text-paper-100">{best}</span></span>}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
        <button onClick={onReplay} className="btn-bump-ember">
          <RotateCcw className="w-4 h-4" /> Chơi ván mới
        </button>
        <Link href="/games" className="btn-bump-ghost">Chọn game khác</Link>
      </div>
      <div className="text-left">
        <p className="text-sm font-semibold text-navy-400 mb-2">Thử game khác</p>
        <ul className="rounded-2xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10 overflow-hidden">
          {others.map((g) => (
            <li key={g.id}>
              <Link href={g.href} className="group flex items-center justify-between gap-3 px-4 py-3 hover:bg-navy-900/[0.025] dark:hover:bg-white/[0.04]">
                <span>
                  <span className="font-bold text-navy-900 dark:text-white">{g.title}</span>
                  <span className="text-sm text-navy-400"> · {g.skill}</span>
                </span>
                <ArrowRight className="w-4 h-4 text-navy-400 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
