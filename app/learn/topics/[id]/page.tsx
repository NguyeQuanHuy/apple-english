"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Lightbulb, RotateCcw, X } from "lucide-react";
import { TOPICS, type VocabItem, type Phrase, type QuizQ } from "@/data/topics";
import { useProgress } from "@/lib/store";
import { SpeakButton } from "@/components/SpeakButton";

type TabId = "basic" | "advanced" | "phrases" | "quiz";

const POS_LABEL: Record<NonNullable<VocabItem["pos"]>, string> = {
  n: "danh từ",
  v: "động từ",
  adj: "tính từ",
  adv: "trạng từ",
  phr: "cụm từ",
};

export default function TopicDetail() {
  const params = useParams<{ id: string }>();
  const topic = TOPICS.find((t) => t.id === params.id);
  const [tab, setTab] = useState<TabId>("basic");
  const testScores = useProgress((s) => s.testScores);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!topic) {
    return (
      <div className="max-w-md mx-auto px-4 pt-16 pb-24 text-center">
        <p className="text-lg text-navy-700 dark:text-paper-100 mb-4">Không tìm thấy chủ đề này.</p>
        <Link href="/learn/topics" className="inline-flex items-center gap-2 font-bold text-apple-600 dark:text-apple-500">
          <ArrowLeft className="w-4 h-4" /> Xem tất cả chủ đề
        </Link>
      </div>
    );
  }

  const tabs = (
    [
      { id: "basic", label: "Cơ bản", count: topic.basicVocab.length },
      { id: "advanced", label: "Nâng cao", count: topic.advancedVocab.length },
      { id: "phrases", label: "Cụm giao tiếp", count: topic.phrases.length },
      { id: "quiz", label: "Quiz", count: topic.quiz.length },
    ] as { id: TabId; label: string; count: number }[]
  ).filter((t) => t.count > 0);

  const tabIndex = tabs.findIndex((t) => t.id === tab);
  const nextTab = tabs[tabIndex + 1];
  const lastQuiz = mounted ? testScores[`topic-${topic.id}`] : undefined;
  const idx = TOPICS.findIndex((t) => t.id === topic.id);
  const nextTopic = TOPICS[(idx + 1) % TOPICS.length];

  function go(t: TabId) {
    setTab(t);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      <Link href="/learn/topics" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" /> Tất cả chủ đề
      </Link>

      {/* Header */}
      <header className="mt-6 flex items-start gap-5">
        <span className="text-5xl sm:text-6xl leading-none mt-1" aria-hidden="true">{topic.emoji}</span>
        <div className="min-w-0">
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-navy-900 dark:text-white">{topic.title}</h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 mt-1">{topic.tagline}</p>
          {lastQuiz && (
            <p className="text-sm text-navy-400 mt-2">
              Quiz lần gần nhất: <span className="font-bold text-navy-700 dark:text-paper-100">{lastQuiz.score}/{lastQuiz.total}</span>
            </p>
          )}
        </div>
      </header>

      {topic.tip && (
        <div className="mt-6 rounded-2xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-4 flex gap-3">
          <Lightbulb className="w-5 h-5 text-amber-700 dark:text-hl-300 shrink-0 mt-0.5" />
          <p className="text-[15px] leading-relaxed text-navy-700 dark:text-paper-100">{topic.tip}</p>
        </div>
      )}

      {/* Tabs */}
      <div className="mt-7 sticky top-16 z-30 bg-[rgb(var(--bg)/0.92)] backdrop-blur-sm py-3 -mx-4 sm:-mx-6 px-4 sm:px-6 border-b border-navy-900/[0.07] dark:border-white/10">
        <div role="tablist" aria-label="Phần học" className="flex gap-1.5 overflow-x-auto">
          {tabs.map((t, i) => {
            const active = tab === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={active}
                onClick={() => setTab(t.id)}
                className={`shrink-0 px-4 py-2 rounded-xl text-[15px] font-semibold inline-flex items-center gap-2 transition-colors ${
                  active ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900" : "text-navy-500 dark:text-paper-200 hover:bg-navy-900/[0.05] dark:hover:bg-white/10"
                }`}
              >
                <span className={`text-xs font-bold ${active ? "opacity-70" : "text-navy-400"}`}>{i + 1}</span>
                {t.label}
                <span className={`text-xs font-bold px-1.5 py-0.5 rounded-md ${active ? "bg-white/15 dark:bg-navy-900/10" : "bg-navy-900/[0.06] dark:bg-white/10"}`}>{t.count}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-6" role="tabpanel">
        {tab === "basic" && <VocabList items={topic.basicVocab} />}
        {tab === "advanced" && <VocabList items={topic.advancedVocab} />}
        {tab === "phrases" && <PhrasesList items={topic.phrases} />}
        {tab === "quiz" && <QuizRunner questions={topic.quiz} topicId={topic.id} nextTopic={nextTopic} />}

        {tab !== "quiz" && nextTab && (
          <button
            onClick={() => go(nextTab.id)}
            className="mt-6 w-full flex items-center justify-between gap-4 rounded-2xl bg-navy-900 dark:bg-white/[0.06] text-white px-5 py-4 hover:bg-navy-700 dark:hover:bg-white/10 transition-colors"
          >
            <span className="text-left">
              <span className="block text-sm text-white/60">Học xong phần này?</span>
              <span className="block font-bold">Sang phần {nextTab.label.toLowerCase()}</span>
            </span>
            <ArrowRight className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
}

// ─── Vocab list ────────────────────────────────────────────────
function VocabList({ items }: { items: VocabItem[] }) {
  return (
    <ul className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10 overflow-hidden">
      {items.map((w, i) => (
        <li key={i} className="p-4 sm:p-5 flex gap-4">
          <SpeakButton text={w.en} size="md" className="flex-shrink-0 mt-0.5" />
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-x-2 gap-y-0.5 flex-wrap">
              <span className="text-xl font-bold text-navy-900 dark:text-white">{w.en}</span>
              {w.ipa && <span className="text-sm text-navy-400">{w.ipa}</span>}
              {w.pos && <span className="text-xs font-semibold text-navy-400">{POS_LABEL[w.pos]}</span>}
            </div>
            <p className="text-[15px] font-semibold text-apple-600 dark:text-apple-500">{w.vi}</p>
            {w.example && (
              <div className="mt-2 flex items-start gap-2">
                <div className="flex-1 border-l-2 border-navy-900/10 dark:border-white/15 pl-3">
                  <p className="text-[15px] italic text-navy-700 dark:text-paper-100">{w.example}</p>
                  {w.exampleVi && <p className="text-sm text-navy-400 mt-0.5">{w.exampleVi}</p>}
                </div>
                <SpeakButton text={w.example} size="sm" className="flex-shrink-0" />
              </div>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

// ─── Phrases list ──────────────────────────────────────────────
function PhrasesList({ items }: { items: Phrase[] }) {
  return (
    <ul className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10 overflow-hidden">
      {items.map((p, i) => (
        <li key={i} className="p-4 sm:p-5 flex gap-4">
          <SpeakButton text={p.en} size="md" className="flex-shrink-0 mt-0.5" />
          <div className="min-w-0">
            <p className="text-lg font-bold text-navy-900 dark:text-white leading-snug">{p.en}</p>
            <p className="text-[15px] font-semibold text-apple-600 dark:text-apple-500">{p.vi}</p>
            <p className="text-sm text-navy-500 dark:text-paper-200 mt-1">Dùng khi: {p.when}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// ─── Quiz runner ───────────────────────────────────────────────
function QuizRunner({ questions, topicId, nextTopic }: { questions: QuizQ[]; topicId: string; nextTopic: (typeof TOPICS)[number] }) {
  const addXp = useProgress((s) => s.addXp);
  const recordTestScore = useProgress((s) => s.recordTestScore);
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
      addXp(correct * 5 + 15, `topic-quiz:${topicId}`);
      recordTestScore(`topic-${topicId}`, correct, questions.length);
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
      <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-8 text-center">
        <p className="font-display text-6xl font-extrabold text-navy-900 dark:text-white">
          {correct}<span className="text-navy-400">/{questions.length}</span>
        </p>
        <p className="text-lg text-navy-500 dark:text-paper-200 mt-2">
          {pct === 100 ? "Đúng hết! Chủ đề này bạn nắm chắc rồi." : pct >= 50 ? "Khá ổn. Xem lại từ sai rồi làm lại cho chắc nhé." : "Cần ôn thêm. Quay lại phần từ vựng rồi thử lại."}
        </p>
        <p className="mt-4 inline-block px-4 py-1.5 rounded-full bg-hl-200 dark:bg-hl-300/15 text-amber-800 dark:text-hl-300 font-bold">+{correct * 5 + 15} XP</p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <button onClick={retry} className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-2xl border-2 border-navy-900/10 dark:border-white/15 text-navy-700 dark:text-paper-50 hover:bg-navy-900/[0.04] dark:hover:bg-white/5">
            <RotateCcw className="w-4 h-4" /> Làm lại
          </button>
          <Link href={`/learn/topics/${nextTopic.id}`} className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-2xl bg-apple-500 hover:bg-apple-600 text-white shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all">
            Chủ đề tiếp: {nextTopic.emoji} {nextTopic.title} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3 text-sm font-semibold">
        <span className="text-navy-500 dark:text-paper-200">Câu {idx + 1}/{questions.length}</span>
        <span className="text-navy-400">Đúng {correct}</span>
      </div>
      <div className="h-2 rounded-full bg-navy-900/[0.07] dark:bg-white/10 overflow-hidden mb-6">
        <div className="h-full bg-apple-500 rounded-full transition-all duration-300" style={{ width: `${((idx + (reveal ? 1 : 0)) / questions.length) * 100}%` }} />
      </div>

      <h2 className="font-display text-2xl font-extrabold leading-snug text-navy-900 dark:text-white">{q.prompt}</h2>

      <div className="mt-5 space-y-2.5">
        {q.options.map((opt, i) => {
          const isPicked = picked === i;
          const isAns = i === q.correctIndex;
          let state = "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 hover:border-navy-900/30 dark:hover:border-white/30";
          let badge = "bg-navy-900/[0.06] dark:bg-white/10 text-navy-700 dark:text-paper-100";
          if (reveal && isAns) { state = "border-leaf-500 bg-leaf-50 dark:bg-leaf-500/15"; badge = "bg-leaf-500 text-white"; }
          else if (reveal && isPicked) { state = "border-apple-500 bg-apple-50 dark:bg-apple-500/15"; badge = "bg-apple-500 text-white"; }
          else if (reveal) { state = "border-navy-900/10 dark:border-white/10 bg-white dark:bg-navy-900 opacity-50"; }
          else if (isPicked) { state = "border-navy-900 dark:border-white bg-white dark:bg-navy-900"; badge = "bg-navy-900 text-white dark:bg-white dark:text-navy-900"; }
          return (
            <button
              key={i}
              disabled={reveal}
              onClick={() => setPicked(i)}
              className={`w-full text-left flex items-center gap-3 p-4 rounded-2xl border-2 font-semibold text-navy-900 dark:text-white transition-colors ${state}`}
            >
              <span className={`w-8 h-8 rounded-full grid place-items-center text-sm font-bold flex-shrink-0 ${badge}`}>
                {reveal && isAns ? <Check className="w-4 h-4" strokeWidth={3} /> : reveal && isPicked ? <X className="w-4 h-4" strokeWidth={3} /> : String.fromCharCode(65 + i)}
              </span>
              <span>{opt}</span>
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className={`mt-4 p-4 rounded-2xl ${isCorrect ? "bg-leaf-50 dark:bg-leaf-500/15 text-leaf-700 dark:text-leaf-500" : "bg-apple-50 dark:bg-apple-500/15 text-apple-700 dark:text-apple-500"}`}>
          <p className="font-bold">{isCorrect ? "Chính xác!" : `Chưa đúng. Đáp án là ${String.fromCharCode(65 + q.correctIndex)}: ${q.options[q.correctIndex]}`}</p>
          {q.explain && <p className="text-[15px] mt-1 text-navy-700 dark:text-paper-100">{q.explain}</p>}
        </div>
      )}

      <div className="mt-6 flex justify-end">
        {!reveal ? (
          <button onClick={submit} disabled={picked === null} className="font-bold px-7 py-3.5 rounded-2xl bg-apple-500 hover:bg-apple-600 text-white shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none">
            Kiểm tra
          </button>
        ) : (
          <button onClick={nextQ} className="inline-flex items-center gap-2 font-bold px-7 py-3.5 rounded-2xl bg-navy-900 hover:bg-navy-700 text-white dark:bg-white dark:text-navy-900 dark:hover:bg-paper-100 transition-colors">
            {idx < questions.length - 1 ? "Câu tiếp" : "Xem kết quả"} <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
