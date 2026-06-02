"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, BookOpen, Headphones, FileText, AlertTriangle, Lightbulb, Target } from "lucide-react";
import { TOEIC_PARTS, LISTENING_PARTS, READING_PARTS } from "@/data/toeic-parts";
import { cn } from "@/lib/cn";

export default function ToeicGuidePage() {
  const [selectedPart, setSelectedPart] = useState<number>(1);
  const [levelTab, setLevelTab] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  const part = TOEIC_PARTS.find((p) => p.part === selectedPart)!;

  return (
    <div className="min-h-screen bg-paper-50 dark:bg-ink-900 pb-24">
      {/* Header */}
      <div className="bg-paper-100 dark:bg-ink-700 border-b border-paper-200 dark:border-ink-500">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <Link href="/learn/toeic" className="inline-flex items-center gap-2 text-ink-700 dark:text-paper-200 hover:text-ember-600 mb-3">
            <ChevronLeft className="w-4 h-4" /> Quay lại TOEIC
          </Link>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink-900 dark:text-paper-50">
            Hướng dẫn 7 Parts TOEIC
          </h1>
          <p className="text-ink-500 dark:text-paper-200 mt-2">
            Format, chiến lược, bẫy thường gặp và mẹo cho từng cấp độ
          </p>
        </div>
      </div>

      {/* Part Selector — sticky */}
      <div className="sticky top-0 z-10 bg-paper-50/95 dark:bg-ink-900/95 backdrop-blur border-b border-paper-200 dark:border-ink-500">
        <div className="max-w-5xl mx-auto px-4 py-3">
          <div className="flex gap-2 overflow-x-auto no-scrollbar">
            {/* Listening */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-ember-100 dark:bg-ember-600/20 text-ember-700 dark:text-ember-400 text-xs font-bold whitespace-nowrap">
              <Headphones className="w-3 h-3" /> LISTENING
            </div>
            {LISTENING_PARTS.map((p) => (
              <button
                key={p.part}
                onClick={() => setSelectedPart(p.part)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition",
                  selectedPart === p.part
                    ? "bg-ember-500 text-white shadow-bump"
                    : "bg-paper-200 dark:bg-ink-500 text-ink-700 dark:text-paper-200 hover:bg-paper-300"
                )}
              >
                Part {p.part}
              </button>
            ))}
            <div className="w-px bg-paper-300 dark:bg-ink-500 mx-1" />
            {/* Reading */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-teal-100 dark:bg-teal-600/20 text-teal-700 dark:text-teal-400 text-xs font-bold whitespace-nowrap">
              <FileText className="w-3 h-3" /> READING
            </div>
            {READING_PARTS.map((p) => (
              <button
                key={p.part}
                onClick={() => setSelectedPart(p.part)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-semibold whitespace-nowrap transition",
                  selectedPart === p.part
                    ? "bg-teal-500 text-white shadow-bump"
                    : "bg-paper-200 dark:bg-ink-500 text-ink-700 dark:text-paper-200 hover:bg-paper-300"
                )}
              >
                Part {p.part}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedPart}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* Title block */}
            <div className="card-paper p-6 mb-6">
              <div className="flex items-start justify-between flex-wrap gap-3 mb-4">
                <div>
                  <div className={cn(
                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-2",
                    part.section === "listening"
                      ? "bg-ember-100 dark:bg-ember-600/20 text-ember-700 dark:text-ember-400"
                      : "bg-teal-100 dark:bg-teal-600/20 text-teal-700 dark:text-teal-400"
                  )}>
                    {part.section === "listening" ? <Headphones className="w-3 h-3" /> : <FileText className="w-3 h-3" />}
                    Part {part.part} · {part.shortTitle}
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-ink-900 dark:text-paper-50">
                    {part.title}
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-ember-500">{part.questionCount}</div>
                  <div className="text-xs text-ink-500 dark:text-paper-200">câu hỏi</div>
                </div>
              </div>
              <div className="text-sm text-ink-500 dark:text-paper-200 mb-3">
                <span className="font-semibold">⏱ Thời lượng: </span>{part.durationNote}
              </div>
              <div className="text-ink-700 dark:text-paper-200 leading-relaxed">
                <span className="font-semibold text-ink-900 dark:text-paper-50">Format: </span>{part.format}
              </div>
            </div>

            {/* Strategy */}
            <div className="card-paper p-6 mb-6">
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-50 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-teal-500" />
                Chiến lược làm bài
              </h3>
              <ol className="space-y-3">
                {part.strategy.map((s, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-ink-700 dark:text-paper-200 leading-relaxed">{s}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Traps */}
            <div className="card-paper p-6 mb-6 border-l-4 border-rose-400">
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-50 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-500" />
                Bẫy thường gặp
              </h3>
              <ul className="space-y-2">
                {part.traps.map((t, i) => (
                  <li key={i} className="flex gap-3 text-ink-700 dark:text-paper-200">
                    <span className="text-rose-500 font-bold">⚠</span>
                    <span className="leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tips by level */}
            <div className="card-paper p-6 mb-6">
              <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-50 mb-4 flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-gold-500" />
                Mẹo theo cấp độ
              </h3>
              <div className="flex gap-2 mb-4">
                {(["beginner", "intermediate", "advanced"] as const).map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setLevelTab(lvl)}
                    className={cn(
                      "px-4 py-2 rounded-chunky text-sm font-semibold transition",
                      levelTab === lvl
                        ? "bg-gold-500 text-ink-900 shadow-bump"
                        : "bg-paper-200 dark:bg-ink-500 text-ink-700 dark:text-paper-200 hover:bg-paper-300"
                    )}
                  >
                    {lvl === "beginner" && "Cơ bản (400-600)"}
                    {lvl === "intermediate" && "Trung cấp (600-800)"}
                    {lvl === "advanced" && "Nâng cao (800+)"}
                  </button>
                ))}
              </div>
              <div className="bg-gold-500/10 dark:bg-gold-500/5 border border-gold-500/30 rounded-chunky p-4">
                <p className="text-ink-700 dark:text-paper-200 leading-relaxed">
                  {part.tipForLevel[levelTab]}
                </p>
              </div>
            </div>

            {/* Sample question */}
            {part.sampleQuestion && (
              <div className="card-paper p-6 mb-6 border-l-4 border-ember-400">
                <h3 className="font-serif text-xl font-bold text-ink-900 dark:text-paper-50 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-ember-500" />
                  Câu hỏi mẫu
                </h3>
                {part.sampleQuestion.setup && (
                  <div className="text-sm italic text-ink-500 dark:text-paper-200 mb-3 bg-paper-100 dark:bg-ink-700 px-3 py-2 rounded">
                    {part.sampleQuestion.setup}
                  </div>
                )}
                <div className="font-semibold text-ink-900 dark:text-paper-50 mb-3">
                  {part.sampleQuestion.question}
                </div>
                <div className="space-y-2 mb-4">
                  {part.sampleQuestion.options.map((opt, i) => (
                    <div
                      key={i}
                      className={cn(
                        "px-4 py-2 rounded border-2",
                        i === part.sampleQuestion!.correctIndex
                          ? "border-teal-500 bg-teal-500/10 text-ink-900 dark:text-paper-50 font-semibold"
                          : "border-paper-200 dark:border-ink-500 text-ink-700 dark:text-paper-200"
                      )}
                    >
                      {i === part.sampleQuestion!.correctIndex && "✓ "}{opt}
                    </div>
                  ))}
                </div>
                <div className="text-sm text-ink-500 dark:text-paper-200 bg-paper-100 dark:bg-ink-700 px-3 py-2 rounded">
                  <span className="font-semibold text-ink-900 dark:text-paper-50">Giải thích: </span>
                  {part.sampleQuestion.explain}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="card-paper p-6 bg-gradient-to-br from-ember-500 to-ember-600 text-white">
              <h3 className="font-serif text-xl font-bold mb-2">Sẵn sàng thử sức?</h3>
              <p className="opacity-90 mb-4">Làm đề mini TOEIC để áp dụng những gì vừa học</p>
              <Link
                href="/learn/toeic"
                className="inline-flex items-center gap-2 bg-white text-ember-600 px-5 py-2.5 rounded-chunky font-bold shadow-bump hover:translate-y-0.5 transition"
              >
                Chọn đề thi →
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
