"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, CheckCircle2, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { useProgress } from "@/lib/store";
import { useRouter } from "next/navigation";
import type { Lesson, LessonStep, QuizQ } from "@/data/beginner-lessons";
import { AudioButton, SlowAudioButton } from "./audio-button";
import { FillBlankView } from "./fill-blank-view";
import { SentenceBuilderView } from "./sentence-builder-view";
import { PronounceView } from "./pronounce-view";

export function LessonPlayer({ lesson }: { lesson: Lesson }) {
  const router = useRouter();
  const [stepIdx, setStepIdx] = useState(0);
  const [done, setDone] = useState(false);

  const addXp = useProgress((s) => s.addXp);
  const markLessonComplete = useProgress((s) => s.markLessonComplete);

  const step = lesson.steps[stepIdx];
  const total = lesson.steps.length;
  const progress = ((stepIdx + (done ? 1 : 0)) / total) * 100;

  function next() {
    if (stepIdx < total - 1) {
      setStepIdx(stepIdx + 1);
    } else {
      addXp(lesson.xpReward, `lesson:${lesson.id}`);
      markLessonComplete(lesson.id);
      setDone(true);
    }
  }

  function prev() {
    if (stepIdx > 0) setStepIdx(stepIdx - 1);
  }

  // Whether this step has its own internal navigation (don't show outer Continue button)
  const isInteractive = ["quiz", "fill-blank", "sentence-builder", "pronounce"].includes(
    step?.kind ?? ""
  );

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-20">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <Link
          href="/learn/beginner"
          className="p-2 rounded-lg hover:bg-ink-900/5 dark:hover:bg-paper-50/5"
          aria-label="Thoát bài học"
        >
          <X className="w-5 h-5" />
        </Link>
        <div className="flex-1 h-3 rounded-full bg-ink-900/8 dark:bg-paper-50/8 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-ember-400 to-ember-600 rounded-full"
            initial={false}
            animate={{ width: `${progress}%` }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
          />
        </div>
        <div className="text-sm font-bold text-ink-500 tabular-nums">
          {stepIdx + 1}/{total}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {done ? (
          <CompletionScreen
            key="done"
            lesson={lesson}
            onContinue={() => router.push("/learn/beginner")}
          />
        ) : (
          <motion.div
            key={stepIdx}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.25 }}
          >
            <StepView step={step} onAdvance={next} />
          </motion.div>
        )}
      </AnimatePresence>

      {!done && !isInteractive && (
        <div className="mt-10 flex items-center justify-between">
          <button
            onClick={prev}
            disabled={stepIdx === 0}
            className="inline-flex items-center gap-1 text-sm font-bold text-ink-500 disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4" /> Quay lại
          </button>
          <button onClick={next} className="btn-bump-ember">
            Tiếp tục
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function StepView({ step, onAdvance }: { step: LessonStep; onAdvance: () => void }) {
  if (step.kind === "intro") {
    return (
      <div>
        <h1 className="font-display text-3xl md:text-4xl font-black leading-tight">
          {step.title}
        </h1>
        <p className="mt-5 text-lg text-ink-700 dark:text-paper-100 leading-relaxed whitespace-pre-line">
          {step.body}
        </p>
      </div>
    );
  }

  if (step.kind === "vocab") {
    return (
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Từ vựng</div>
        <h2 className="font-display text-3xl font-black mt-1">
          Học {step.items.length} từ mới
        </h2>
        <p className="text-sm text-ink-500 mt-1">Bấm 🔊 để nghe phát âm chuẩn</p>
        <div className="mt-6 space-y-3">
          {step.items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              className="card-paper p-4 flex items-start gap-3"
            >
              <AudioButton text={it.en} />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-display text-2xl font-bold">{it.en}</span>
                  {it.ipa && (
                    <span className="text-sm text-ink-500 font-mono">{it.ipa}</span>
                  )}
                </div>
                <div className="text-sm font-semibold text-teal-600 dark:text-teal-400 mt-0.5">
                  {it.vi}
                </div>
                {it.example && (
                  <div className="mt-2 flex items-start gap-2">
                    <AudioButton text={it.example} size="sm" />
                    <div className="flex-1">
                      <div className="text-sm italic text-ink-700 dark:text-paper-100">
                        "{it.example}"
                      </div>
                      {it.exampleVi && (
                        <div className="text-xs text-ink-500 mt-0.5">{it.exampleVi}</div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (step.kind === "grammar") {
    return (
      <div>
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">Ngữ pháp</div>
        <h2 className="font-display text-3xl font-black mt-1">{step.title}</h2>
        <p className="mt-5 text-ink-700 dark:text-paper-100 leading-relaxed whitespace-pre-line">
          {step.explanation}
        </p>
        <div className="mt-6 card-paper p-5">
          <div className="text-xs font-bold uppercase tracking-widest text-ink-500 mb-3">
            Ví dụ
          </div>
          <div className="space-y-3">
            {step.examples.map((ex, i) => (
              <div key={i} className="border-l-2 border-ember-500 pl-4 flex items-start gap-2">
                <AudioButton text={ex.en} size="sm" />
                <div className="flex-1">
                  <div className="font-display text-lg font-bold">{ex.en}</div>
                  <div className="text-sm text-ink-500">{ex.vi}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (step.kind === "quiz") {
    return <QuizView questions={step.questions} onComplete={onAdvance} />;
  }

  if (step.kind === "fill-blank") {
    return <FillBlankView items={step.items} onComplete={onAdvance} />;
  }

  if (step.kind === "sentence-builder") {
    return <SentenceBuilderView puzzles={step.puzzles} onComplete={onAdvance} />;
  }

  if (step.kind === "pronounce") {
    return <PronounceView items={step.items} onComplete={onAdvance} />;
  }

  return null;
}

function QuizView({ questions, onComplete }: { questions: QuizQ[]; onComplete: () => void }) {
  const [qIdx, setQIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const q = questions[qIdx];
  const isCorrect = picked === q.correctIndex;

  function submit() {
    if (picked === null) return;
    setShowResult(true);
  }
  function nextQ() {
    if (qIdx < questions.length - 1) {
      setQIdx(qIdx + 1);
      setPicked(null);
      setShowResult(false);
    } else {
      onComplete();
    }
  }

  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-ember-500">
        Quiz {qIdx + 1}/{questions.length}
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-black mt-2 leading-tight">
        {q.prompt}
      </h2>

      <div className="mt-6 space-y-3">
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          const isAnsCorrect = i === q.correctIndex;
          let cls = "card-paper p-4 text-left font-semibold w-full transition-all";
          if (showResult) {
            if (isAnsCorrect) cls += " ring-2 ring-teal-500 bg-teal-50 dark:bg-teal-700/20";
            else if (isPicked) cls += " ring-2 ring-rose-500 bg-rose-400/10";
            else cls += " opacity-60";
          } else if (isPicked) {
            cls += " ring-2 ring-ember-500";
          } else {
            cls += " hover:-translate-y-0.5";
          }
          return (
            <button key={i} disabled={showResult} onClick={() => setPicked(i)} className={cls}>
              <div className="flex items-center gap-3">
                <span className="w-7 h-7 rounded-lg border-2 border-ink-900/15 dark:border-paper-50/15 grid place-items-center text-xs font-black">
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {showResult && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-5 p-4 rounded-chunky ${
            isCorrect
              ? "bg-teal-50 dark:bg-teal-700/20 text-teal-700 dark:text-teal-50"
              : "bg-rose-400/10 text-rose-600 dark:text-rose-400"
          }`}
        >
          <div className="font-bold mb-1">{isCorrect ? "✓ Chính xác!" : "✗ Chưa đúng"}</div>
          {q.explain && <div className="text-sm">{q.explain}</div>}
        </motion.div>
      )}

      <div className="mt-8 flex justify-end">
        {!showResult ? (
          <button onClick={submit} disabled={picked === null} className="btn-bump-ember">
            Kiểm tra
          </button>
        ) : (
          <button onClick={nextQ} className="btn-bump-teal">
            {qIdx < questions.length - 1 ? "Câu tiếp" : "Hoàn thành bài học"}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

function CompletionScreen({ lesson, onContinue }: { lesson: Lesson; onContinue: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="text-center pt-10"
    >
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.1 }}
        className="w-24 h-24 mx-auto rounded-full bg-teal-500 grid place-items-center text-white"
      >
        <CheckCircle2 className="w-12 h-12" />
      </motion.div>

      <h2 className="font-display text-4xl font-black mt-6">Tuyệt vời!</h2>
      <p className="text-ink-500 mt-2">Bạn vừa hoàn thành bài: {lesson.title}</p>

      <div className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/15 text-gold-500 font-bold">
        <Sparkles className="w-5 h-5" />
        +{lesson.xpReward} XP
      </div>

      <div className="mt-10">
        <button onClick={onContinue} className="btn-bump-ember">
          Quay lại lộ trình
        </button>
      </div>
    </motion.div>
  );
}
