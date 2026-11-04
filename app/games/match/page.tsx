"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { useProgress } from "@/lib/store";
import { useTTS } from "@/lib/useTTS";
import { WORD_POOL, shuffle, type GameWord } from "@/lib/games";
import { GameHeader, GameResult } from "@/components/games/game-shell";

const ROUNDS = 2;
const PAIRS = 6;
const TIME = 45;

type Round = { en: GameWord[]; vi: GameWord[] };

function makeRounds(): Round[] {
  // Two words with the same Vietnamese meaning would make a pair ambiguous
  const words: GameWord[] = [];
  const meanings = new Set<string>();
  for (const w of shuffle(WORD_POOL)) {
    if (meanings.has(w.vi)) continue;
    meanings.add(w.vi);
    words.push(w);
    if (words.length === ROUNDS * PAIRS) break;
  }
  return Array.from({ length: ROUNDS }, (_, r) => {
    const set = words.slice(r * PAIRS, (r + 1) * PAIRS);
    return { en: shuffle(set), vi: shuffle(set) };
  });
}

function Game({ onReplay }: { onReplay: () => void }) {
  const addXp = useProgress((s) => s.addXp);
  const recordGame = useProgress((s) => s.recordGame);
  const best = useProgress((s) => (s.gameBest || {})["match"]);
  const { speak } = useTTS({ rate: 0.85 });

  const [rounds] = useState(makeRounds);
  const [round, setRound] = useState(0);
  const [pickedEn, setPickedEn] = useState<string | null>(null);
  const [pickedVi, setPickedVi] = useState<string | null>(null);
  const [matched, setMatched] = useState<string[]>([]); // en words matched this round
  const [total, setTotal] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [wrong, setWrong] = useState<[string, string] | null>(null);
  const [timeLeft, setTimeLeft] = useState(TIME);
  const [result, setResult] = useState<{ xp: number; newBest: boolean; finishedAll: boolean } | null>(null);

  const doneRef = useRef(false);
  const finish = useCallback(
    (pairs: number, finishedAll: boolean) => {
      if (doneRef.current) return;
      doneRef.current = true;
      const xp = pairs * 2 + (finishedAll ? 5 : 0);
      if (xp > 0) addXp(xp, "game:match");
      const newBest = recordGame("match", pairs);
      setResult({ xp, newBest, finishedAll });
    },
    [addXp, recordGame]
  );

  // One steady clock, independent of taps
  useEffect(() => {
    if (result) return;
    const t = setInterval(() => setTimeLeft((x) => Math.max(0, x - 1)), 1000);
    return () => clearInterval(t);
  }, [result]);

  useEffect(() => {
    if (!result && timeLeft === 0) finish(total, false);
  }, [timeLeft, result, total, finish]);

  const cur = rounds[round];

  function tryPair(en: string | null, vi: string | null) {
    if (!en || !vi) return;
    const word = cur.en.find((w) => w.en === en)!;
    if (word.vi === vi) {
      const next = [...matched, en];
      const newTotal = total + 1;
      setMatched(next);
      setTotal(newTotal);
      setPickedEn(null);
      setPickedVi(null);
      if (next.length === PAIRS) {
        setTimeout(() => {
          if (round < ROUNDS - 1) {
            setRound(round + 1);
            setMatched([]);
          } else finish(newTotal, true);
        }, 450);
      }
    } else {
      setMistakes((m) => m + 1);
      setWrong([en, vi]);
      setTimeout(() => {
        setWrong(null);
        setPickedEn(null);
        setPickedVi(null);
      }, 550);
    }
  }

  if (result) {
    return (
      <GameResult
        gameId="match"
        score={total}
        max={ROUNDS * PAIRS}
        xp={result.xp}
        best={best}
        newBest={result.newBest}
        note={result.finishedAll ? `Xong cả ${ROUNDS} vòng khi còn ${timeLeft} giây, sai ${mistakes} lần.` : `Hết giờ. Sai ${mistakes} lần.`}
        onReplay={onReplay}
      />
    );
  }

  const tile = "w-full min-h-[56px] px-3 py-3 rounded-2xl border-2 text-[15px] sm:text-base font-semibold text-center transition-all select-none";
  const isMatchedVi = (vi: string) => cur.en.some((w) => matched.includes(w.en) && w.vi === vi);

  return (
    <>
      <GameHeader
        title="Ghép từ"
        hint={`Vòng ${round + 1}/${ROUNDS} · Chọn một từ tiếng Anh rồi chọn nghĩa của nó`}
        stat={`${timeLeft}s · ${total} cặp`}
        statUrgent={timeLeft <= 10}
      />
      <div className="h-2 rounded-full bg-navy-900/[0.07] dark:bg-white/10 overflow-hidden mb-6" aria-hidden="true">
        <div className={`h-full rounded-full transition-all duration-1000 ease-linear ${timeLeft <= 10 ? "bg-apple-500" : "bg-navy-900 dark:bg-white"}`} style={{ width: `${(timeLeft / TIME) * 100}%` }} />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <ul className="space-y-2.5" aria-label="Tiếng Anh">
          {cur.en.map((w) => {
            const done = matched.includes(w.en);
            const isWrong = wrong?.[0] === w.en;
            const picked = pickedEn === w.en;
            return (
              <li key={w.en}>
                <button
                  disabled={done}
                  onClick={() => {
                    speak(w.en);
                    const v = picked ? null : w.en;
                    setPickedEn(v);
                    tryPair(v, pickedVi);
                  }}
                  className={`${tile} ${
                    done
                      ? "border-transparent bg-leaf-50 dark:bg-leaf-500/15 text-leaf-700 dark:text-leaf-500 opacity-60"
                      : isWrong
                      ? "border-apple-500 bg-apple-50 dark:bg-apple-500/15 text-apple-700 dark:text-apple-500 animate-wiggle"
                      : picked
                      ? "border-navy-900 dark:border-white bg-navy-900 dark:bg-white text-white dark:text-navy-900"
                      : "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-navy-900/30 dark:hover:border-white/30"
                  }`}
                >
                  {w.en}
                </button>
              </li>
            );
          })}
        </ul>
        <ul className="space-y-2.5" aria-label="Tiếng Việt">
          {cur.vi.map((w) => {
            const done = isMatchedVi(w.vi);
            const isWrong = wrong?.[1] === w.vi;
            const picked = pickedVi === w.vi;
            return (
              <li key={w.vi}>
                <button
                  disabled={done}
                  onClick={() => {
                    const v = picked ? null : w.vi;
                    setPickedVi(v);
                    tryPair(pickedEn, v);
                  }}
                  className={`${tile} ${
                    done
                      ? "border-transparent bg-leaf-50 dark:bg-leaf-500/15 text-leaf-700 dark:text-leaf-500 opacity-60"
                      : isWrong
                      ? "border-apple-500 bg-apple-50 dark:bg-apple-500/15 text-apple-700 dark:text-apple-500 animate-wiggle"
                      : picked
                      ? "border-navy-900 dark:border-white bg-navy-900 dark:bg-white text-white dark:text-navy-900"
                      : "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-700 dark:text-paper-100 hover:border-navy-900/30 dark:hover:border-white/30"
                  }`}
                >
                  {w.vi}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default function MatchGamePage() {
  // Words are shuffled on the client only, so the server and browser render the same HTML
  const [run, setRun] = useState(0);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      {mounted && <Game key={run} onReplay={() => setRun((r) => r + 1)} />}
    </div>
  );
}
