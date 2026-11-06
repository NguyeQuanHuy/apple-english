"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, Shuffle, X } from "lucide-react";
import { PART5, PART5_CATEGORIES, type Part5Category, type Part5Item } from "@/data/toeic-practice";
import { useProgress } from "@/lib/store";
import { shuffle, shuffleOptions } from "@/lib/games";

const N = 8;
const LETTERS = ["A", "B", "C", "D"];
const catTitle = (id: string) => PART5_CATEGORIES.find((c) => c.id === id)?.title ?? id;

type Mode = { kind: "category"; id: Part5Category } | { kind: "mixed" } | { kind: "review" };

function Round({ items, mode, onDone }: { items: Part5Item[]; mode: Mode; onDone: () => void }) {
  const addXp = useProgress((s) => s.addXp);
  const recordToeicAnswer = useProgress((s) => s.recordToeicAnswer);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const nextRef = useRef<HTMLButtonElement>(null);

  const q = items[idx];
  const reveal = picked !== null;

  useEffect(() => {
    if (reveal) nextRef.current?.focus();
  }, [reveal]);

  function choose(i: number) {
    if (reveal) return;
    const ok = i === q.correctIndex;
    setPicked(i);
    setResults((r) => [...r, ok]);
    recordToeicAnswer(q.id, q.category, ok);
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished || reveal) return;
      const k = e.key.toUpperCase();
      const i = ["A", "B", "C", "D", "1", "2", "3", "4"].indexOf(k);
      if (i >= 0) choose(i % 4);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  function next() {
    if (idx < items.length - 1) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      addXp(results.filter(Boolean).length * 3 + 5, "toeic:part5");
      setFinished(true);
    }
  }

  if (finished) {
    const right = results.filter(Boolean).length;
    const wrong = items.filter((_, i) => !results[i]);
    const label = mode.kind === "category" ? catTitle(mode.id) : mode.kind === "review" ? "Ôn câu sai" : "Trộn các dạng";
    return (
      <div>
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-navy-400 mb-2">Part 5 · {label}</p>
          <p className="font-display text-7xl font-extrabold tracking-tight text-navy-900 dark:text-white tabular-nums">
            {right}<span className="text-3xl text-navy-400">/{items.length}</span>
          </p>
          <p className="text-lg font-semibold text-navy-700 dark:text-paper-100 mt-3">
            {right === items.length ? "Không sai câu nào!" : right >= items.length * 0.7 ? "Nắm khá chắc rồi." : "Đọc kỹ giải thích các câu sai bên dưới nhé."}
          </p>
          <p className="mt-3 inline-block px-3 py-1 rounded-full bg-hl-200 dark:bg-hl-300/15 text-amber-800 dark:text-hl-300 font-bold text-sm">+{right * 3 + 5} XP</p>
        </div>
        {wrong.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-lg text-navy-900 dark:text-white mb-3">Câu sai đã được lưu vào sổ ôn tập</h2>
            <ul className="rounded-2xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10">
              {wrong.map((w) => (
                <li key={w.id} className="p-4">
                  <p className="text-sm font-semibold text-navy-400 mb-0.5">{catTitle(w.category)}</p>
                  <p className="font-bold text-navy-900 dark:text-white">{w.question.replace("___", `[${w.options[w.correctIndex]}]`)}</p>
                  <p className="text-sm text-navy-500 dark:text-paper-200 mt-1">{w.explain}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button onClick={onDone} className="btn-bump-ember"><RotateCcw className="w-4 h-4" /> Chọn dạng khác</button>
          <Link href="/learn/toeic/listening" className="btn-bump-ghost">Sang luyện nghe Part 2</Link>
        </div>
      </div>
    );
  }

  const [before, after = ""] = q.question.split("___");
  const ok = picked === q.correctIndex;

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-sm font-semibold text-navy-500 dark:text-paper-200">Câu {idx + 1}/{items.length}</p>
        <p className="text-sm font-semibold text-navy-400">{catTitle(q.category)}</p>
      </div>
      <div className="flex gap-1.5 mb-6" aria-hidden="true">
        {items.map((_, i) => (
          <span key={i} className={`h-2 flex-1 rounded-full ${i < results.length ? (results[i] ? "bg-leaf-500" : "bg-apple-500") : i === idx ? "bg-navy-900/40 dark:bg-white/40" : "bg-navy-900/[0.08] dark:bg-white/10"}`} />
        ))}
      </div>

      <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 sm:p-8 mb-5">
        <p className="font-display text-xl sm:text-2xl font-bold leading-relaxed text-navy-900 dark:text-white">
          {before}
          <span className={`inline-block min-w-[5ch] mx-1 px-1 text-center border-b-[3px] ${!reveal ? "border-navy-900/40 dark:border-white/40 text-transparent" : ok ? "border-leaf-500 text-leaf-600 dark:text-leaf-500" : "border-apple-500 text-apple-600 dark:text-apple-500"}`}>
            {reveal ? q.options[q.correctIndex] : "____"}
          </span>
          {after}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {q.options.map((o, i) => {
          const isAns = i === q.correctIndex;
          const isPicked = picked === i;
          let cls = "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-navy-900/30 dark:hover:border-white/30";
          if (reveal && isAns) cls = "border-leaf-500 bg-leaf-50 dark:bg-leaf-500/15 text-leaf-700 dark:text-leaf-500";
          else if (reveal && isPicked) cls = "border-apple-500 bg-apple-50 dark:bg-apple-500/15 text-apple-700 dark:text-apple-500";
          else if (reveal) cls = "border-navy-900/10 dark:border-white/10 bg-white dark:bg-navy-900 text-navy-400 opacity-60";
          return (
            <button key={i} disabled={reveal} onClick={() => choose(i)} className={`flex items-center gap-3 p-4 rounded-2xl border-2 text-left font-semibold text-lg transition-colors ${cls}`}>
              <span className="w-8 h-8 rounded-lg bg-navy-900/[0.06] dark:bg-white/10 grid place-items-center text-sm font-bold flex-shrink-0">
                {reveal && isAns ? <Check className="w-4 h-4" strokeWidth={3} /> : reveal && isPicked ? <X className="w-4 h-4" strokeWidth={3} /> : LETTERS[i]}
              </span>
              {o}
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className="mt-5">
          <div className={`rounded-2xl p-4 ${ok ? "bg-leaf-50 dark:bg-leaf-500/15" : "bg-apple-50 dark:bg-apple-500/15"}`}>
            <p className={`font-bold mb-1 ${ok ? "text-leaf-700 dark:text-leaf-500" : "text-apple-700 dark:text-apple-500"}`}>
              {ok ? "Chính xác!" : `Chưa đúng. Đáp án là ${LETTERS[q.correctIndex]}: ${q.options[q.correctIndex]}`}
            </p>
            <p className="text-[15px] text-navy-700 dark:text-paper-100 leading-relaxed">{q.explain}</p>
          </div>
          <div className="mt-5 flex justify-end">
            <button ref={nextRef} onClick={next} className="btn-bump-teal">{idx < items.length - 1 ? "Câu tiếp" : "Xem kết quả"} <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Part5Page() {
  const stats = useProgress((s) => s.toeicStats);
  const toeicWrong = useProgress((s) => s.toeicWrong);
  const [mounted, setMounted] = useState(false);
  const [run, setRun] = useState<{ items: Part5Item[]; mode: Mode; key: number } | null>(null);
  useEffect(() => setMounted(true), []);

  const st = mounted ? stats || {} : {};
  const wrongItems = mounted ? PART5.filter((p) => (toeicWrong || []).includes(p.id)) : [];

  // Weakest category: lowest accuracy among those with at least 4 answers
  const weakest = PART5_CATEGORIES.map((c) => ({ c, s: st[c.id] }))
    .filter((x) => x.s && x.s.total >= 4)
    .sort((a, b) => a.s!.right / a.s!.total - b.s!.right / b.s!.total)[0];

  function start(mode: Mode) {
    const pool = mode.kind === "category" ? PART5.filter((p) => p.category === mode.id) : mode.kind === "review" ? wrongItems : PART5;
    setRun({ items: shuffle(pool).slice(0, N).map(shuffleOptions), mode, key: Date.now() });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      <Link href="/learn/toeic" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white mb-5">
        <ArrowLeft className="w-4 h-4" /> Luyện TOEIC
      </Link>

      {run ? (
        <div className="max-w-2xl mx-auto">
          <Round key={run.key} items={run.items} mode={run.mode} onDone={() => setRun(null)} />
        </div>
      ) : (
        <>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-navy-900 dark:text-white mb-2">Luyện Part 5 theo dạng</h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 mb-8 max-w-2xl">
            Part 5 có 30 câu điền từ và là phần dễ kiếm điểm nhất. Luyện từng dạng một, đọc giải thích tiếng Việt, và xem mình đang yếu dạng nào.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <button onClick={() => start({ kind: "mixed" })} className="btn-bump-ember"><Shuffle className="w-4 h-4" /> Trộn tất cả các dạng</button>
            {wrongItems.length > 0 && (
              <button onClick={() => start({ kind: "review" })} className="btn-bump-ghost"><RotateCcw className="w-4 h-4" /> Ôn {wrongItems.length} câu sai</button>
            )}
          </div>

          {weakest && (
            <p className="mb-4 text-[15px] text-navy-700 dark:text-paper-100">
              Dạng bạn đang yếu nhất: <span className="font-bold text-apple-600 dark:text-apple-500">{weakest.c.title}</span> ({Math.round((weakest.s!.right / weakest.s!.total) * 100)}% đúng). Luyện dạng này trước nhé.
            </p>
          )}

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PART5_CATEGORIES.map((c) => {
              const s = st[c.id];
              const pct = s ? Math.round((s.right / s.total) * 100) : null;
              const isWeak = weakest?.c.id === c.id;
              const count = PART5.filter((p) => p.category === c.id).length;
              return (
                <li key={c.id}>
                  <button
                    onClick={() => start({ kind: "category", id: c.id })}
                    className={`group w-full text-left rounded-2xl bg-white dark:bg-navy-900 border-2 p-5 transition-colors ${isWeak ? "border-apple-500/60" : "border-navy-900/[0.08] dark:border-white/10 hover:border-navy-900/25 dark:hover:border-white/25"}`}
                  >
                    <div className="flex items-baseline justify-between gap-3 mb-1">
                      <span className="font-bold text-lg text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{c.title}</span>
                      <span className={`text-sm font-bold tabular-nums ${pct === null ? "text-navy-400" : pct >= 80 ? "text-leaf-600 dark:text-leaf-500" : pct >= 50 ? "text-amber-700 dark:text-hl-300" : "text-apple-600 dark:text-apple-500"}`}>
                        {pct === null ? "Chưa luyện" : `${pct}% đúng`}
                      </span>
                    </div>
                    <p className="text-[15px] text-navy-500 dark:text-paper-200 mb-3">{c.desc}</p>
                    <div className="h-1.5 rounded-full bg-navy-900/[0.07] dark:bg-white/10 overflow-hidden mb-2" aria-hidden="true">
                      <div className={`h-full rounded-full ${pct === null ? "" : pct >= 80 ? "bg-leaf-500" : pct >= 50 ? "bg-hl-300" : "bg-apple-500"}`} style={{ width: `${pct ?? 0}%` }} />
                    </div>
                    <p className="text-sm text-navy-400 flex items-center justify-between">
                      <span>{s ? `${s.total} lần trả lời` : `${count} câu`}</span>
                      <span className="inline-flex items-center gap-1 font-semibold text-navy-700 dark:text-paper-100">Luyện <ArrowRight className="w-3.5 h-3.5" /></span>
                    </p>
                  </button>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
