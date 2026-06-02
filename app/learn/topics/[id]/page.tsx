"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, BookOpen, Sparkles, MessageCircle, Brain, Lightbulb } from "lucide-react";
import { TOPICS, type VocabItem, type Phrase, type QuizQ } from "@/data/topics";
import { useProgress } from "@/lib/store";

type TabId = "basic" | "advanced" | "phrases" | "quiz";

export default function TopicDetail() {
  const params = useParams<{ id: string }>();
  const topic = TOPICS.find((t) => t.id === params.id);
  const [tab, setTab] = useState<TabId>("basic");

  if (!topic) {
    return (
      <div className="max-w-md mx-auto px-4 pt-16 text-center">
        <p>Không tìm thấy chủ đề.</p>
        <Link href="/learn/topics" className="btn-bump-ghost mt-4 inline-flex">
          Quay lại
        </Link>
      </div>
    );
  }

  const tabs: { id: TabId; label: string; icon: typeof BookOpen; count: number }[] = [
    { id: "basic", label: "Cơ bản", icon: BookOpen, count: topic.basicVocab.length },
    { id: "advanced", label: "Nâng cao", icon: Sparkles, count: topic.advancedVocab.length },
    { id: "phrases", label: "Cụm giao tiếp", icon: MessageCircle, count: topic.phrases.length },
    { id: "quiz", label: "Quiz", icon: Brain, count: topic.quiz.length },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6">
      <Link
        href="/learn/topics"
        className="text-sm text-ink-500 font-bold inline-flex items-center gap-1"
      >
        <ArrowLeft className="w-4 h-4" /> Tất cả chủ đề
      </Link>

      {/* Header */}
      <div className="mt-5 card-paper p-6 relative overflow-hidden">
        <div
          className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-gold-400/20 blur-3xl"
          aria-hidden
        />
        <div className="relative">
          <div className="text-5xl">{topic.emoji}</div>
          <h1 className="font-display text-3xl md:text-4xl font-black mt-3">{topic.title}</h1>
          <p className="text-ink-500 mt-1">{topic.tagline}</p>
        </div>
      </div>

      {/* Tip */}
      <div className="mt-4 card-paper p-4 border-l-4 border-gold-400 flex gap-3">
        <Lightbulb className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
        <div>
          <div className="text-xs font-bold uppercase tracking-widest text-gold-500 mb-1">
            Mẹo thực dụng
          </div>
          <p className="text-sm leading-relaxed text-ink-700 dark:text-paper-100">{topic.tip}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mt-6 sticky top-16 z-30 bg-paper-50/95 dark:bg-ink-900/95 backdrop-blur-sm py-2 -mx-4 sm:-mx-6 px-4 sm:px-6 border-b border-ink-900/8 dark:border-paper-50/8">
        <div className="flex gap-1 overflow-x-auto no-scrollbar">
          {tabs.map((t) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className={`shrink-0 px-3 py-2 rounded-lg text-sm font-bold inline-flex items-center gap-1.5 transition-all ${
                  active
                    ? "bg-ember-500 text-white shadow-sm"
                    : "text-ink-500 hover:bg-ink-900/5 dark:hover:bg-paper-50/5"
                }`}
              >
                <t.icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
                <span
                  className={`ml-1 text-[10px] font-black px-1.5 py-0.5 rounded-full ${
                    active ? "bg-white/20" : "bg-ink-900/10 dark:bg-paper-50/10"
                  }`}
                >
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="mt-6"
        >
          {tab === "basic" && <VocabList items={topic.basicVocab} accent="ember" />}
          {tab === "advanced" && <VocabList items={topic.advancedVocab} accent="teal" />}
          {tab === "phrases" && <PhrasesList items={topic.phrases} />}
          {tab === "quiz" && <QuizRunner questions={topic.quiz} topicId={topic.id} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ─── Vocab list ────────────────────────────────────────────────
function VocabList({ items, accent }: { items: VocabItem[]; accent: "ember" | "teal" }) {
  const accentMap = {
    ember: "text-ember-500 border-ember-500",
    teal: "text-teal-600 dark:text-teal-400 border-teal-500",
  };
  const posLabel: Record<VocabItem["pos"], string> = {
    n: "danh từ",
    v: "động từ",
    adj: "tính từ",
    adv: "trạng từ",
    phr: "cụm từ",
  };
  return (
    <div className="space-y-3 pb-10">
      {items.map((w, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.03 }}
          className="card-paper p-4"
        >
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="font-display text-2xl font-black">{w.en}</span>
            {w.ipa && (
              <span className="text-sm text-ink-500 font-mono">{w.ipa}</span>
            )}
            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-300 px-1.5 py-0.5 rounded bg-ink-900/5 dark:bg-paper-50/5">
              {posLabel[w.pos]}
            </span>
          </div>
          <div className={`text-sm font-bold mt-1 ${accentMap[accent].split(" ")[0]}`}>
            {w.vi}
          </div>
          <div className={`mt-3 border-l-2 pl-3 ${accentMap[accent].split(" ")[1]}`}>
            <div className="text-sm font-semibold italic">"{w.example}"</div>
            <div className="text-xs text-ink-500 mt-0.5">{w.exampleVi}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Phrases list ──────────────────────────────────────────────
function PhrasesList({ items }: { items: Phrase[] }) {
  return (
    <div className="space-y-3 pb-10">
      {items.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.04 }}
          className="card-paper p-4"
        >
          <div className="font-display text-lg font-bold leading-snug">"{p.en}"</div>
          <div className="text-sm font-bold text-teal-600 dark:text-teal-400 mt-1">
            {p.vi}
          </div>
          <div className="text-xs text-ink-500 mt-2 inline-flex items-center gap-1">
            <span className="px-1.5 py-0.5 rounded bg-gold-400/15 text-gold-500 font-bold uppercase tracking-wider text-[10px]">
              Khi nào dùng
            </span>
            <span>{p.when}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// ─── Quiz runner ───────────────────────────────────────────────
function QuizRunner({ questions, topicId }: { questions: QuizQ[]; topicId: string }) {
  const addXp = useProgress((s) => s.addXp);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [reveal, setReveal] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [done, setDone] = useState(false);

  const q = questions[idx];
  const isCorrect = picked === q?.correctIndex;

  function submit() {
    if (picked === null) return;
    setReveal(true);
    if (picked === q.correctIndex) setCorrect((c) => c + 1);
  }
  function nextQ() {
    setReveal(false);
    setPicked(null);
    if (idx < questions.length - 1) setIdx(idx + 1);
    else {
      const earned = correct * 5 + 15;
      addXp(earned, `topic-quiz:${topicId}`);
      setDone(true);
    }
  }
  function retry() {
    setIdx(0);
    setPicked(null);
    setReveal(false);
    setCorrect(0);
    setDone(false);
  }

  if (done) {
    const pct = Math.round((correct / questions.length) * 100);
    return (
      <div className="text-center pt-6 pb-16">
        <div className="text-6xl mb-3">{pct >= 80 ? "🏆" : pct >= 50 ? "👍" : "📚"}</div>
        <div className="font-display text-5xl font-black">
          {correct}<span className="text-ink-300">/{questions.length}</span>
        </div>
        <p className="text-ink-500 mt-2">
          {pct >= 80 ? "Xuất sắc!" : pct >= 50 ? "Khá ổn, làm lại để chắc hơn nhé!" : "Cần ôn lại từ vựng. Đừng nản!"}
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold-400/15 text-gold-500 font-bold">
          <Sparkles className="w-4 h-4" />
          +{correct * 5 + 15} XP
        </div>
        <div className="mt-8 flex justify-center gap-3">
          <button onClick={retry} className="btn-bump-ghost">Làm lại</button>
          <Link href="/learn/topics" className="btn-bump-ember">Chủ đề khác</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-10">
      <div className="flex items-center justify-between mb-4">
        <div className="text-xs font-bold uppercase tracking-widest text-ember-500">
          Câu {idx + 1}/{questions.length}
        </div>
        <div className="text-xs font-bold text-ink-500">
          Đúng: {correct}
        </div>
      </div>

      <div className="h-2 rounded-full bg-ink-900/8 dark:bg-paper-50/8 overflow-hidden mb-5">
        <motion.div
          className="h-full bg-ember-500"
          animate={{ width: `${((idx + (reveal ? 1 : 0)) / questions.length) * 100}%` }}
        />
      </div>

      <h2 className="font-display text-xl md:text-2xl font-black leading-snug">
        {q.prompt}
      </h2>

      <div className="mt-5 space-y-2.5">
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          const isAns = i === q.correctIndex;
          let cls = "card-paper p-3.5 text-left font-semibold w-full transition-all";
          if (reveal) {
            if (isAns) cls += " ring-2 ring-teal-500 bg-teal-50 dark:bg-teal-700/20";
            else if (isPicked) cls += " ring-2 ring-rose-500 bg-rose-400/10";
            else cls += " opacity-50";
          } else if (isPicked) cls += " ring-2 ring-ember-500";
          else cls += " hover:-translate-y-0.5";
          return (
            <button
              key={i}
              disabled={reveal}
              onClick={() => setPicked(i)}
              className={cls}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`w-6 h-6 rounded-md grid place-items-center text-xs font-black ${
                    isPicked && !reveal
                      ? "bg-ember-500 text-white"
                      : reveal && isAns
                      ? "bg-teal-500 text-white"
                      : reveal && isPicked
                      ? "bg-rose-500 text-white"
                      : "bg-ink-900/8 dark:bg-paper-50/8"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span>{opt}</span>
              </div>
            </button>
          );
        })}
      </div>

      {reveal && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-chunky ${
            isCorrect
              ? "bg-teal-50 dark:bg-teal-700/20 text-teal-700 dark:text-teal-50"
              : "bg-rose-400/10 text-rose-600 dark:text-rose-400"
          }`}
        >
          <div className="font-bold mb-1">{isCorrect ? "✓ Chính xác!" : "✗ Chưa đúng"}</div>
          {q.explain && <div className="text-sm">{q.explain}</div>}
        </motion.div>
      )}

      <div className="mt-6 flex justify-end">
        {!reveal ? (
          <button onClick={submit} disabled={picked === null} className="btn-bump-ember">
            Kiểm tra
          </button>
        ) : (
          <button onClick={nextQ} className="btn-bump-teal">
            {idx < questions.length - 1 ? "Câu tiếp" : "Xem kết quả"}
          </button>
        )}
      </div>
    </div>
  );
}
