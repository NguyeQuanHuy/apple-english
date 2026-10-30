"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Lock, RotateCcw } from "lucide-react";
import { BEGINNER_LESSONS, BEGINNER_PATH, type Lesson } from "@/data/beginner-lessons";
import { EXTRA_LESSONS, EXTRA_PATH } from "@/data/extra-lessons";
import { useProgress } from "@/lib/store";

const ALL_LESSONS: Lesson[] = [...BEGINNER_LESSONS, ...EXTRA_LESSONS];
const ALL_PATH = [...BEGINNER_PATH, ...EXTRA_PATH];
const ORDER = ALL_PATH.flatMap((u) => u.lessonIds);
const byId = (id: string) => ALL_LESSONS.find((l) => l.id === id);

const STEP_LABEL: Record<Lesson["steps"][number]["kind"], string> = {
  intro: "Giới thiệu",
  vocab: "Từ vựng",
  grammar: "Ngữ pháp",
  quiz: "Quiz",
  "fill-blank": "Điền từ",
  "sentence-builder": "Xếp câu",
  pronounce: "Luyện nói",
};

type Status = "done" | "current" | "open" | "locked";

/* ─────────── Next lesson, on a notebook page ─────────── */

function NextLessonCard({ lesson, position, allDone }: { lesson: Lesson; position: number; allDone: boolean }) {
  const kinds = Array.from(new Set(lesson.steps.map((s) => s.kind)));
  return (
    <div className="oli-paper rounded-[22px] border border-navy-900/10 dark:border-white/10 shadow-[0_24px_60px_-30px_rgba(21,32,51,0.45)] pl-16 pr-6 sm:pr-8 py-7 rotate-[1deg]">
      <p className="font-hand text-apple-500 text-2xl mb-1" style={{ transform: "rotate(-2deg)" }}>
        {allDone ? "Ôn lại bài đầu nhé!" : `Bài ${position} hôm nay`}
      </p>
      <p className="text-sm font-semibold text-navy-400 mb-1">Chặng {lesson.unit} · {lesson.level} · +{lesson.xpReward} XP</p>
      <h2 className="font-display text-2xl sm:text-[28px] font-extrabold text-navy-900 dark:text-white leading-tight mb-1">{lesson.title}</h2>
      <p className="text-navy-500 dark:text-paper-200 mb-5">{lesson.subtitle}</p>
      <p className="text-sm font-semibold text-navy-700 dark:text-paper-100 mb-2">Trong bài có {lesson.steps.length} phần:</p>
      <ul className="flex flex-wrap gap-1.5 mb-6">
        {kinds.map((k) => (
          <li key={k} className="px-2.5 py-1 rounded-lg text-sm font-semibold bg-white/80 dark:bg-white/10 border border-navy-900/10 dark:border-white/10 text-navy-700 dark:text-paper-100">{STEP_LABEL[k]}</li>
        ))}
      </ul>
      <Link
        href={`/learn/beginner/${lesson.id}`}
        className="group inline-flex items-center gap-2 bg-apple-500 hover:bg-apple-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-apple-100"
      >
        {allDone ? "Học lại" : position === 1 ? "Bắt đầu bài 1" : "Học bài này"}
        <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
      </Link>
    </div>
  );
}

/* ─────────── Path ─────────── */

function LessonRow({ lesson, n, status }: { lesson: Lesson; n: number; status: Status }) {
  const body = (
    <>
      <span
        className={`w-9 h-9 rounded-full grid place-items-center text-sm font-bold flex-shrink-0 ${
          status === "done"
            ? "bg-leaf-500 text-white"
            : status === "current"
            ? "bg-apple-500 text-white ring-4 ring-apple-100 dark:ring-apple-500/25"
            : status === "open"
            ? "bg-navy-900/[0.06] dark:bg-white/10 text-navy-700 dark:text-paper-100"
            : "bg-navy-900/[0.04] dark:bg-white/[0.06] text-navy-400"
        }`}
      >
        {status === "done" ? <Check className="w-4 h-4" strokeWidth={3} /> : status === "locked" ? <Lock className="w-3.5 h-3.5" /> : n}
      </span>
      <span className="flex-1 min-w-0">
        <span className={`block font-bold ${status === "locked" ? "text-navy-400" : "text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500"} transition-colors`}>{lesson.title}</span>
        <span className="block text-sm text-navy-400 truncate">{lesson.subtitle}</span>
      </span>
      {status === "current" && <span className="text-sm font-bold text-apple-600 dark:text-apple-500 flex items-center gap-1 flex-shrink-0">Học <ArrowRight className="w-4 h-4" /></span>}
      {status === "done" && <span className="text-sm font-semibold text-navy-400 flex items-center gap-1 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"><RotateCcw className="w-3.5 h-3.5" /> Học lại</span>}
      {status === "open" && <ArrowRight className="w-4 h-4 text-navy-400 flex-shrink-0" />}
    </>
  );
  const cls = `group flex items-center gap-4 px-4 sm:px-5 py-3.5 ${status === "current" ? "bg-apple-50/70 dark:bg-apple-500/10" : ""}`;
  if (status === "locked") {
    return (
      <li className={`${cls} cursor-not-allowed`} title="Học xong bài trước để mở khoá">
        {body}
      </li>
    );
  }
  return (
    <li>
      <Link href={`/learn/beginner/${lesson.id}`} className={`${cls} hover:bg-navy-900/[0.025] dark:hover:bg-white/[0.04] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-apple-500`}>
        {body}
      </Link>
    </li>
  );
}

function LevelGroup({ title, desc, units, statusOf }: { title: string; desc: string; units: typeof ALL_PATH; statusOf: (id: string) => Status }) {
  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-1">{title}</h2>
      <p className="text-navy-500 dark:text-paper-200 mb-6">{desc}</p>
      <div className="space-y-5">
        {units.map((u) => {
          const done = u.lessonIds.filter((id) => statusOf(id) === "done").length;
          return (
            <section key={u.unit} aria-labelledby={`unit-${u.unit}`} className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 overflow-hidden">
              <header className="flex items-start justify-between gap-4 px-5 sm:px-6 pt-5 pb-3">
                <div>
                  <p className="text-sm font-semibold text-navy-400">Chặng {u.unit}</p>
                  <h3 id={`unit-${u.unit}`} className="font-bold text-lg text-navy-900 dark:text-white">{u.title}</h3>
                  <p className="text-[15px] text-navy-500 dark:text-paper-200">{u.description}</p>
                </div>
                <p className={`text-sm font-semibold whitespace-nowrap mt-0.5 ${done === u.lessonIds.length ? "text-leaf-600 dark:text-leaf-500" : "text-navy-400"}`}>
                  {done}/{u.lessonIds.length} bài
                </p>
              </header>
              <ul className="divide-y divide-navy-900/[0.06] dark:divide-white/[0.08] border-t border-navy-900/[0.06] dark:border-white/[0.08]">
                {u.lessonIds.map((id) => {
                  const l = byId(id);
                  return l ? <LessonRow key={id} lesson={l} n={ORDER.indexOf(id) + 1} status={statusOf(id)} /> : null;
                })}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}

/* ─────────── Side column: foundations ─────────── */

const PRONOUNCE_TIPS = [
  "Nghe âm mẫu, bấm nút loa nhiều lần cũng được.",
  "Nhìn gương xem khẩu hình miệng và lưỡi.",
  "Tự ghi âm rồi so với âm mẫu. Đây là bước quan trọng nhất.",
];

function Foundations() {
  return (
    <div className="space-y-4">
      <Link href="/learn/alphabet" className="group block rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 hover:border-navy-900/25 dark:hover:border-white/25 transition-colors">
        <p className="font-display text-5xl font-extrabold text-navy-900 dark:text-white tracking-tight mb-3" aria-hidden="true">
          A<span className="text-apple-500">b</span>C
        </p>
        <p className="font-bold text-lg text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">Bảng chữ cái A–Z</p>
        <p className="text-[15px] text-navy-500 dark:text-paper-200 mb-3">Nghe cách đọc 26 chữ cái, mỗi chữ có từ ví dụ. Nên xem trước bài 1.</p>
        <span className="inline-flex items-center gap-1 text-sm font-bold text-apple-600 dark:text-apple-500">Mở bảng chữ cái <ArrowRight className="w-4 h-4" /></span>
      </Link>

      <div className="rounded-3xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-6">
        <h2 className="font-bold text-lg text-navy-900 dark:text-white mb-1">Luyện phát âm mỗi ngày</h2>
        <p className="text-[15px] text-navy-500 dark:text-paper-200 mb-4">Phát âm sai thì người nghe không hiểu, dù ngữ pháp đúng.</p>
        <ol className="space-y-3 mb-4">
          {PRONOUNCE_TIPS.map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-6 h-6 rounded-full bg-navy-900 text-white dark:bg-white dark:text-navy-900 grid place-items-center text-xs font-bold flex-shrink-0 mt-0.5">{i + 1}</span>
              <span className="text-[15px] text-navy-700 dark:text-paper-100">{t}</span>
            </li>
          ))}
        </ol>
        <div className="flex flex-col gap-1.5">
          <Link href="/blog/cach-phat-am-tieng-anh-ro-rang" className="text-sm font-bold text-apple-600 dark:text-apple-500 hover:underline">Đọc hướng dẫn phát âm rõ ràng</Link>
          <Link href="/tools/ipa" className="text-sm font-bold text-apple-600 dark:text-apple-500 hover:underline">Tra phiên âm IPA của một câu</Link>
        </div>
      </div>
    </div>
  );
}

/* ─────────── Page ─────────── */

export default function BeginnerIndex() {
  const completedLessons = useProgress((s) => s.completedLessons);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const completed = mounted ? completedLessons : [];

  const { statusOf, doneCount, nextId } = useMemo(() => {
    const done = new Set(ORDER.filter((id) => completed.includes(id)));
    const firstOpen = ORDER.find((id) => !done.has(id)) ?? null;
    const firstOpenIdx = firstOpen ? ORDER.indexOf(firstOpen) : ORDER.length;
    const statusOf = (id: string): Status => {
      if (done.has(id)) return "done";
      if (id === firstOpen) return "current";
      // Lessons are unlocked in order; everything after the first unfinished one stays locked
      return ORDER.indexOf(id) < firstOpenIdx ? "open" : "locked";
    };
    return { statusOf, doneCount: done.size, nextId: firstOpen };
  }, [completed]);

  const allDone = nextId === null;
  const nextLesson = byId(nextId ?? ORDER[0])!;
  const pct = Math.round((doneCount / ORDER.length) * 100);

  return (
    <div className="pb-24 md:pb-8">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-14 md:pb-20 grid grid-cols-1 md:grid-cols-[1.05fr_1fr] gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-navy-500 dark:text-paper-200 mb-3">Lộ trình A0 → A2 · {ORDER.length} bài · {ALL_PATH.length} chặng</p>
          <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.025em] mb-5 [text-wrap:balance]">
            Từ chữ cái đầu tiên đến viết được email.
          </h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 leading-relaxed max-w-[32rem] mb-8">
            Mỗi bài khoảng 10 phút, giải thích bằng tiếng Việt. Học xong bài này thì bài sau mở ra.
          </p>
          <div className="max-w-md">
            <div className="flex justify-between text-sm font-semibold mb-2">
              <span className="text-navy-700 dark:text-paper-100">{doneCount === 0 ? "Chưa bắt đầu" : `Đã học ${doneCount}/${ORDER.length} bài`}</span>
              <span className="text-navy-400">{pct}%</span>
            </div>
            <div className="h-3 rounded-full bg-navy-900/[0.07] dark:bg-white/10 overflow-hidden flex gap-[2px]" aria-hidden="true">
              {ORDER.map((id) => (
                <span key={id} className={`flex-1 h-full ${statusOf(id) === "done" ? "bg-leaf-500" : statusOf(id) === "current" ? "bg-apple-500/40" : ""}`} />
              ))}
            </div>
          </div>
        </div>
        <NextLessonCard lesson={nextLesson} position={ORDER.indexOf(nextLesson.id) + 1} allDone={allDone} />
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-8 items-start">
        <div className="min-w-0 space-y-14">
          <LevelGroup title="A0 – A1: Nền móng" desc="Chữ cái, chào hỏi, động từ to be, các thì cơ bản." units={BEGINNER_PATH} statusOf={statusOf} />
          <LevelGroup title="A2: Lên trình" desc="So sánh, động từ khuyết thiếu, câu bị động, câu điều kiện, viết email." units={EXTRA_PATH} statusOf={statusOf} />
        </div>
        <aside className="lg:sticky lg:top-24 min-w-0">
          <Foundations />
        </aside>
      </div>
    </div>
  );
}
