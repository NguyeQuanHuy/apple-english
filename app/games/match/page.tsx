"use client";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, RotateCw } from "lucide-react";
import { GAME_WORDS } from "@/data/games";
import { useProgress } from "@/lib/store";

type Tile = { id: string; text: string; pairId: string; side: "en" | "vi" };

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function MatchGame() {
  const addXp = useProgress((s) => s.addXp);
  const inc = useProgress((s) => s.incrementGamesPlayed);

  const [round, setRound] = useState(0);
  const [tiles, setTiles] = useState<Tile[]>([]);
  const [picked, setPicked] = useState<Tile | null>(null);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [wrongPair, setWrongPair] = useState<[string, string] | null>(null);
  const [timeLeft, setTimeLeft] = useState(45);
  const [finished, setFinished] = useState(false);

  function buildRound() {
    const pool = shuffle(GAME_WORDS).slice(0, 6);
    const out: Tile[] = [];
    pool.forEach((w, i) => {
      out.push({ id: `${i}-en`, text: w.en, pairId: `p${i}`, side: "en" });
      out.push({ id: `${i}-vi`, text: w.vi, pairId: `p${i}`, side: "vi" });
    });
    setTiles(shuffle(out));
    setMatched(new Set());
    setPicked(null);
  }

  useEffect(() => {
    buildRound();
    inc();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (finished) return;
    if (timeLeft <= 0) {
      setFinished(true);
      addXp(matched.size * 2);
      return;
    }
    const t = setInterval(() => setTimeLeft((x) => x - 1), 1000);
    return () => clearInterval(t);
  }, [timeLeft, finished]);

  function onPick(t: Tile) {
    if (matched.has(t.pairId) || finished) return;
    if (!picked) {
      setPicked(t);
      return;
    }
    if (picked.id === t.id) {
      setPicked(null);
      return;
    }
    if (picked.pairId === t.pairId && picked.side !== t.side) {
      const next = new Set(matched);
      next.add(t.pairId);
      setMatched(next);
      setPicked(null);
      if (next.size === 6) {
        // round complete
        addXp(20);
        setTimeout(() => {
          if (round < 1) {
            setRound(round + 1);
            buildRound();
          } else {
            setFinished(true);
          }
        }, 600);
      }
    } else {
      setWrongPair([picked.id, t.id]);
      setTimeout(() => {
        setWrongPair(null);
        setPicked(null);
      }, 500);
    }
  }

  if (finished) {
    return (
      <div className="max-w-md mx-auto px-4 pt-16 text-center">
        <div className="text-6xl mb-4">🎉</div>
        <h1 className="font-display text-4xl font-black">Hết giờ!</h1>
        <p className="text-ink-500 mt-2">Bạn nối được {matched.size} cặp ở round cuối.</p>
        <div className="mt-10 flex justify-center gap-3">
          <Link href="/games" className="btn-bump-ghost">Game khác</Link>
          <button onClick={() => location.reload()} className="btn-bump-ember">Chơi lại</button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6">
      <div className="flex items-center justify-between mb-6">
        <Link href="/games" className="text-sm font-bold text-ink-500 inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Games
        </Link>
        <div className={`px-3 py-1.5 rounded-full font-mono font-bold text-sm ${timeLeft < 10 ? "bg-rose-400/15 text-rose-500" : "bg-ink-900/5 dark:bg-paper-50/5"}`}>
          ⏱ {String(timeLeft).padStart(2, "0")}s
        </div>
      </div>

      <h1 className="font-display text-3xl font-black">Ghép từ</h1>
      <p className="text-sm text-ink-500 mt-1">Round {round + 1}/2 • Nối tiếng Anh với nghĩa tiếng Việt</p>

      <div className="mt-6 grid grid-cols-3 sm:grid-cols-4 gap-2.5">
        {tiles.map((t) => {
          const isMatched = matched.has(t.pairId);
          const isPicked = picked?.id === t.id;
          const isWrong = wrongPair?.includes(t.id);
          let cls = "p-4 rounded-chunky font-bold text-center transition-all cursor-pointer select-none";
          if (isMatched) cls += " bg-teal-500 text-white pointer-events-none opacity-60";
          else if (isWrong) cls += " bg-rose-400 text-white animate-wiggle";
          else if (isPicked) cls += " bg-ember-500 text-white ring-4 ring-ember-200";
          else cls += " card-paper hover:-translate-y-0.5";
          return (
            <motion.button
              key={t.id}
              whileTap={{ scale: 0.95 }}
              onClick={() => onPick(t)}
              className={cls}
            >
              {t.text}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
