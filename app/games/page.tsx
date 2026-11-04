"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { useProgress } from "@/lib/store";
import { GAMES, PUZZLE_POOL, WORD_POOL, type GameId } from "@/lib/games";

/* Small static previews that show how each game plays */

function PreviewMatch() {
  const rows: [string, string, "done" | "picked" | ""][] = [
    ["passport", "hộ chiếu", "done"],
    ["meeting", "cuộc họp", "picked"],
    ["luggage", "hành lý", ""],
  ];
  return (
    <div className="grid grid-cols-2 gap-1.5">
      {rows.map(([en, vi, s]) => (
        <div key={en} className="contents">
          <span className={`px-2.5 py-1.5 rounded-lg border text-[13px] font-semibold text-center ${s === "done" ? "border-transparent bg-leaf-50 text-leaf-700 dark:bg-leaf-500/15 dark:text-leaf-500" : s === "picked" ? "border-navy-900 bg-navy-900 text-white dark:bg-white dark:text-navy-900 dark:border-white" : "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white"}`}>{en}</span>
          <span className={`px-2.5 py-1.5 rounded-lg border text-[13px] font-semibold text-center ${s === "done" ? "border-transparent bg-leaf-50 text-leaf-700 dark:bg-leaf-500/15 dark:text-leaf-500" : "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-700 dark:text-paper-100"}`}>{vi}</span>
        </div>
      ))}
    </div>
  );
}

function PreviewQuiz() {
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <span className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">deadline</span>
        <span className="w-8 h-8 rounded-full bg-apple-500 text-white grid place-items-center text-sm font-extrabold">3</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {["hạn chót", "cuộc họp", "báo cáo", "lương"].map((o, i) => (
          <span key={o} className={`px-2.5 py-1.5 rounded-lg border text-[13px] font-semibold ${i === 0 ? "border-leaf-500 bg-leaf-50 text-leaf-700 dark:bg-leaf-500/15 dark:text-leaf-500" : "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-700 dark:text-paper-100"}`}>{o}</span>
        ))}
      </div>
    </div>
  );
}

function PreviewSentence() {
  return (
    <div>
      <p className="text-[13px] font-semibold text-navy-500 dark:text-paper-200 mb-2">Cô ấy là bạn tôi.</p>
      <div className="flex flex-wrap gap-1.5 mb-2">
        {["She", "is"].map((w) => (
          <span key={w} className="px-2.5 py-1.5 rounded-lg text-[13px] font-semibold bg-navy-900 text-white dark:bg-white dark:text-navy-900">{w}</span>
        ))}
        <span className="px-2.5 py-1.5 rounded-lg text-[13px] border-2 border-dashed border-navy-900/20 dark:border-white/20 text-transparent">____</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {["friend.", "my"].map((w) => (
          <span key={w} className="px-2.5 py-1.5 rounded-lg border text-[13px] font-semibold border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white">{w}</span>
        ))}
      </div>
    </div>
  );
}

function PreviewFill() {
  return (
    <div>
      <p className="font-display text-xl font-extrabold text-navy-900 dark:text-white mb-2.5">
        She <span className="inline-block min-w-[3.5ch] border-b-[3px] border-leaf-500 text-leaf-600 dark:text-leaf-500 text-center">is</span> my friend.
      </p>
      <div className="flex gap-1.5">
        {["am", "is", "are", "be"].map((o) => (
          <span key={o} className={`px-2.5 py-1.5 rounded-lg border text-[13px] font-semibold ${o === "is" ? "border-leaf-500 bg-leaf-50 text-leaf-700 dark:bg-leaf-500/15 dark:text-leaf-500" : "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-700 dark:text-paper-100"}`}>{o}</span>
        ))}
      </div>
    </div>
  );
}

const PREVIEW: Record<GameId, () => JSX.Element> = {
  match: PreviewMatch,
  "fast-quiz": PreviewQuiz,
  sentence: PreviewSentence,
  "fill-blank": PreviewFill,
};

const MAX: Record<GameId, number> = { match: 12, "fast-quiz": 80, sentence: 6, "fill-blank": 8 };

export default function GamesIndex() {
  const gameBest = useProgress((s) => s.gameBest);
  const gamesPlayed = useProgress((s) => s.gamesPlayed);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const bests = mounted ? gameBest || {} : {};
  const played = mounted ? gamesPlayed : 0;
  const toBadge = Math.max(0, 10 - played);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-24 md:pb-12">
      <header className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-12 items-end mb-10">
        <div>
          <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.025em] mb-4">Mini games</h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 max-w-[34rem]">
            Mỗi ván khoảng một phút, từ và câu đổi mới mỗi lần chơi. Lấy từ {WORD_POOL.length} từ vựng và {PUZZLE_POOL.length} câu trong các bài học.
          </p>
        </div>
        <div className="rounded-2xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-5">
          <p className="text-sm font-semibold text-navy-400 mb-1">Huy hiệu Game Master</p>
          <p className="font-bold text-navy-900 dark:text-white mb-3">
            {toBadge === 0 ? "Đã đạt! Bạn chơi hơn 10 ván rồi." : `Chơi thêm ${toBadge} ván để mở khoá`}
          </p>
          <div className="flex gap-1" aria-hidden="true">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i} className={`h-2 flex-1 rounded-full ${i < played ? "bg-apple-500" : "bg-navy-900/[0.08] dark:bg-white/10"}`} />
            ))}
          </div>
        </div>
      </header>

      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {GAMES.map((g) => {
          const Preview = PREVIEW[g.id];
          const best = bests[g.id];
          return (
            <li key={g.id}>
              <Link
                href={g.href}
                className="group h-full rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 overflow-hidden flex flex-col hover:border-navy-900/25 dark:hover:border-white/25 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-500"
              >
                <div className="oli-paper pl-14 pr-5 py-5 border-b border-navy-900/[0.07] dark:border-white/10" aria-hidden="true">
                  <div className="pointer-events-none max-w-[17rem]">
                    <Preview />
                  </div>
                </div>
                <div className="p-5 sm:p-6 flex flex-col flex-1">
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <h2 className="font-bold text-xl text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{g.title}</h2>
                    <span className="text-sm text-navy-400 whitespace-nowrap">{g.skill} · {g.length}</span>
                  </div>
                  <p className="text-[15px] text-navy-500 dark:text-paper-200 leading-relaxed mb-5">{g.desc}</p>
                  <div className="mt-auto flex items-center justify-between gap-3">
                    <span className="text-sm text-navy-400">
                      {best !== undefined ? (
                        <>Kỷ lục <span className="font-bold text-navy-900 dark:text-white tabular-nums">{best}/{MAX[g.id]}</span> {g.scoreLabel}</>
                      ) : (
                        "Chưa chơi"
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl bg-apple-500 text-white group-hover:bg-apple-600 transition-colors">
                      {best !== undefined ? "Chơi lại" : "Chơi"} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
