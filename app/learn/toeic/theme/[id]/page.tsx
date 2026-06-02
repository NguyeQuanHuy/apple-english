"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import { TOEIC_THEMES } from "@/data/toeic";
import { ArrowLeft, ArrowRight, RotateCw } from "lucide-react";
import Link from "next/link";
import { useProgress } from "@/lib/store";

export default function ThemePage() {
  const params = useParams<{ id: string }>();
  const theme = TOEIC_THEMES.find((t) => t.id === params.id);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const addXp = useProgress((s) => s.addXp);
  const router = useRouter();

  if (!theme) return <div className="p-8">Không tìm thấy chủ đề.</div>;

  const w = theme.words[idx];
  const isLast = idx === theme.words.length - 1;

  function next() {
    setFlipped(false);
    if (isLast) {
            addXp(15, `toeic-theme:`);
      router.push("/learn/toeic");
    } else setIdx(idx + 1);
  }
  function prev() {
    setFlipped(false);
    if (idx > 0) setIdx(idx - 1);
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8">
      <Link href="/learn/toeic" className="text-sm text-ink-500 font-bold inline-flex items-center gap-1">
        <ArrowLeft className="w-4 h-4" /> TOEIC
      </Link>
      <div className="mt-4 flex items-baseline gap-3">
        <span className="text-3xl">{theme.emoji}</span>
        <h1 className="font-display text-3xl font-black">{theme.title}</h1>
      </div>
      <div className="mt-2 h-2 rounded-full bg-ink-900/8 dark:bg-paper-50/8 overflow-hidden">
        <motion.div className="h-full bg-teal-500" initial={false} animate={{ width: ${((idx + 1) / theme.words.length) * 100}% }} />
      </div>
      <div className="text-xs font-bold text-ink-500 mt-2">{idx + 1}/{theme.words.length}</div>
      <div className="mt-8 perspective-1000">
        <AnimatePresence mode="wait">
          <motion.button key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            onClick={() => setFlipped(!flipped)}
            className="card-paper w-full p-8 md:p-12 min-h-[280px] flex flex-col items-center justify-center text-center relative"
          >
            <AnimatePresence mode="wait">
              {!flipped ? (
                <motion.div key="front" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="text-xs font-bold uppercase tracking-widest text-ink-300 mb-3">{w.pos}</div>
                  <div className="font-display text-5xl md:text-6xl font-black">{w.en}</div>
                  <div className="text-sm text-ink-500 mt-6 inline-flex items-center gap-1.5">
                    <RotateCw className="w-3.5 h-3.5" />
                    Bấm để xem nghĩa
                  </div>
                </motion.div>
              ) : (
                <motion.div key="back" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="font-display text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-400">{w.vi}</div>
                  <div className="mt-6 text-ink-700 dark:text-paper-100 italic max-w-md">"{w.example}"</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </AnimatePresence>
      </div>
      <div className="mt-6 flex items-center justify-between">
        <button onClick={prev} disabled={idx === 0} className="inline-flex items-center gap-1 text-sm font-bold text-ink-500 disabled:opacity-30">
          <ArrowLeft className="w-4 h-4" /> Trước
        </button>
        <button onClick={next} className="btn-bump-teal">
          {isLast ? "Hoàn thành (+15 XP)" : "Từ tiếp theo"}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}