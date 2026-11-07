"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Flame, Gamepad2, Target, Globe, AudioLines, BookOpen, Lock, GraduationCap } from "lucide-react";
import { useProgress, getLevel } from "@/lib/store";
import { BEGINNER_LESSONS as A1_LESSONS, BEGINNER_PATH as A1_PATH } from "@/data/beginner-lessons";
import { EXTRA_LESSONS, EXTRA_PATH } from "@/data/extra-lessons";

// Full A0 → A2 path: units 1–5 (A0–A1) plus 6–10 (A2)
const BEGINNER_LESSONS = [...A1_LESSONS, ...EXTRA_LESSONS];
const BEGINNER_PATH = [...A1_PATH, ...EXTRA_PATH];
import { TOPICS } from "@/data/topics";
import { POSTS } from "@/lib/blog";
import { SpeakButton } from "@/components/SpeakButton";

const DAILY_GOAL = 30; // XP per day

function localDateStr(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/* ─────────────────────────── Hero ─────────────────────────── */

function NotebookCorrection() {
  return (
    <div className="relative">
      <div className="oli-paper rounded-[22px] border border-navy-900/10 dark:border-white/10 shadow-[0_24px_60px_-28px_rgba(21,32,51,0.45)] pl-16 pr-6 sm:pr-8 py-8 rotate-[1.2deg]">
        <p className="text-xs font-semibold text-navy-400 mb-6">Bài tập về nhà · Thứ Hai</p>

        <div className="relative font-hand text-[24px] leading-[48px] sm:text-[34px] sm:leading-[64px] text-navy-700 dark:text-paper-50">
          <span>She </span>
          <span className="relative inline-block">
            go
            <svg className="absolute left-[-4px] top-1/2 -translate-y-1/2 w-[calc(100%+8px)] h-4 overflow-visible" viewBox="0 0 40 10" preserveAspectRatio="none" aria-hidden="true">
              <path className="pen-strike" style={{ ["--len" as string]: 48 }} d="M1 6 C 12 3, 26 8, 39 4" stroke="#E5484D" strokeWidth="2.6" fill="none" strokeLinecap="round" />
            </svg>
            <span className="pen-word absolute -top-7 sm:-top-9 left-1/2 -translate-x-1/2 text-apple-500 text-[26px] sm:text-[30px] whitespace-nowrap">goes</span>
          </span>
          <span> to school every day.</span>
        </div>

        <div className="pen-note mt-4 flex items-start gap-2 font-hand text-apple-600 text-xl leading-snug" style={{ transform: "rotate(-3deg)" }}>
          <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="mt-1 flex-shrink-0"><path d="M3 12 L9 17 L19 4" stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span>She, he, it → động từ thêm -s nhé. Sai lần này, nhớ cả đời!</span>
        </div>

        <div className="mt-7 flex items-center gap-3 border-t border-dashed border-navy-400/30 pt-4">
          <SpeakButton text="She goes to school every day." size="md" />
          <span className="text-sm text-navy-500 dark:text-paper-200">Nghe câu đúng</span>
        </div>
      </div>
    </div>
  );
}

function Hero({ nextLesson, hasStarted }: { nextLesson: { id: string; title: string } | null; hasStarted: boolean }) {
  const primaryHref = nextLesson ? `/learn/beginner/${nextLesson.id}` : "/learn/beginner";
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-16 md:pb-20 grid md:grid-cols-[1.15fr_1fr] gap-12 md:gap-12 items-center">
        <div>
          <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] leading-[1.1] sm:text-[48px] lg:text-[56px] tracking-[-0.025em] mb-5 [text-wrap:balance]">
            Mất gốc tiếng Anh? <span className="whitespace-nowrap">Bắt đầu lại</span>{" "}từ&nbsp;chữ&nbsp;A.
          </h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 leading-relaxed max-w-[34rem] mb-8">
            Mỗi bài 10 phút, giải thích bằng tiếng Việt, nói sai được sửa ngay mà không bị trừ điểm. Học như có cô giáo ngồi cạnh.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={primaryHref}
              className="group inline-flex items-center justify-center gap-2 bg-apple-500 hover:bg-apple-600 text-white font-bold px-7 py-4 rounded-2xl shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-apple-100"
            >
              {hasStarted && nextLesson ? "Học tiếp bài hôm nay" : "Học bài đầu tiên"}
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/learn/toeic"
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-4 rounded-2xl text-navy-700 dark:text-paper-50 border-2 border-navy-900/10 dark:border-white/15 hover:border-navy-900/25 hover:bg-white dark:hover:bg-white/5 transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-leaf-100"
            >
              Luyện thi TOEIC
            </Link>
          </div>
          <p className="mt-5 text-sm text-navy-400 dark:text-paper-200/70">Miễn phí, không cần tạo tài khoản để bắt đầu.</p>
        </div>
        <NotebookCorrection />
      </div>
    </section>
  );
}

/* ─────────────────────────── Today panel (retention) ─────────────────────────── */

function GoalRing({ value, goal }: { value: number; goal: number }) {
  const pct = Math.min(1, value / goal);
  const r = 34;
  const c = 2 * Math.PI * r;
  const done = pct >= 1;
  return (
    <div className="relative w-[92px] h-[92px] flex-shrink-0">
      <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90" aria-hidden="true">
        <circle cx="40" cy="40" r={r} fill="none" strokeWidth="8" className="stroke-navy-900/[0.07] dark:stroke-white/10" />
        <circle
          cx="40" cy="40" r={r} fill="none" strokeWidth="8" strokeLinecap="round"
          className={done ? "stroke-leaf-500" : "stroke-apple-500"}
          strokeDasharray={c} strokeDashoffset={c * (1 - pct)}
          style={{ transition: "stroke-dashoffset 0.8s ease-out" }}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {done ? <Check className="w-7 h-7 text-leaf-500" strokeWidth={3} /> : (
          <>
            <span className="text-xl font-extrabold text-navy-900 dark:text-white leading-none">{value}</span>
            <span className="text-[11px] text-navy-400">/{goal} XP</span>
          </>
        )}
      </div>
    </div>
  );
}

function WeekStrip({ activeDays }: { activeDays: string[] }) {
  const labels = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"];
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() - (6 - i));
    return { key: localDateStr(d), label: labels[d.getDay()], isToday: i === 6 };
  });
  return (
    <div className="flex gap-1.5 sm:gap-2">
      {days.map((d) => {
        const on = activeDays.includes(d.key);
        return (
          <div key={d.key} className="flex flex-col items-center gap-1.5">
            <div
              className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full grid place-items-center text-sm transition-colors ${
                on ? "bg-apple-500 text-white" : d.isToday ? "border-2 border-dashed border-apple-500/60 text-apple-500" : "bg-navy-900/[0.05] dark:bg-white/[0.06] text-navy-400"
              }`}
              title={on ? "Đã học" : "Chưa học"}
            >
              {on ? <Flame className="w-4 h-4" fill="currentColor" /> : null}
            </div>
            <span className={`text-[11px] font-semibold ${d.isToday ? "text-navy-900 dark:text-white" : "text-navy-400"}`}>{d.label}</span>
          </div>
        );
      })}
    </div>
  );
}

function WordOfTheDay() {
  const word = useMemo(() => {
    // Works with both the old topics format (vocab) and the new one (basicVocab)
    const all = (TOPICS as any[]).flatMap((t) =>
      ((t.basicVocab ?? t.vocab ?? []) as { en: string; vi: string; example?: string }[])
        .filter((v) => v.en && v.vi)
        .map((v) => ({ en: v.en, vi: v.vi, example: v.example ?? "", topic: t.title as string, topicId: t.id as string }))
    );
    const dayIndex = Math.floor(Date.now() / 86_400_000);
    return all[dayIndex % all.length];
  }, []);
  if (!word) return null;
  return (
    <div className="rounded-3xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <p className="text-sm font-semibold text-navy-500 dark:text-paper-200">Từ của hôm nay</p>
        <Link href={`/learn/topics/${word.topicId}`} className="text-xs font-semibold text-navy-400 hover:text-navy-700 dark:hover:text-white">
          Chủ đề: {word.topic}
        </Link>
      </div>
      <div className="flex items-center gap-3 mb-1">
        <p className="font-display text-[34px] font-extrabold text-navy-900 dark:text-white leading-tight">{word.en}</p>
        <SpeakButton text={word.en} size="md" />
      </div>
      <p className="text-lg text-navy-700 dark:text-paper-100 mb-4">{word.vi}</p>
      {word.example && (
        <div className="flex items-start gap-2 mb-5">
          <p className="text-[15px] text-navy-500 dark:text-paper-200 italic leading-relaxed flex-1">“{word.example}”</p>
          <SpeakButton text={word.example} size="sm" />
        </div>
      )}
      <Link
        href={`/learn/topics/${word.topicId}`}
        className="mt-auto inline-flex items-center gap-1.5 self-start text-sm font-bold text-navy-900 dark:text-white hover:text-apple-600 dark:hover:text-apple-500"
      >
        Học thêm từ chủ đề {word.topic} <ArrowRight size={15} />
      </Link>
    </div>
  );
}

function TodayPanel({ nextLesson }: { nextLesson: { id: string; title: string; subtitle: string; xpReward: number } | null }) {
  const { xp, streak, dailyXp, dailyXpDate, activeDays } = useProgress();
  const todayKey = localDateStr(new Date());
  const todayXp = dailyXpDate === todayKey ? dailyXp : 0;
  const level = getLevel(xp);
  const goalDone = todayXp >= DAILY_GOAL;
  const streakAtRisk = streak > 0 && !(activeDays || []).includes(todayKey);

  let message = "Học 1 bài là đủ mục tiêu hôm nay.";
  if (goalDone) message = "Xong mục tiêu hôm nay rồi. Mai gặp lại nhé!";
  else if (streakAtRisk) message = `Học trước nửa đêm để giữ chuỗi ${streak} ngày.`;
  else if (todayXp > 0) message = `Còn ${DAILY_GOAL - todayXp} XP nữa là xong hôm nay.`;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-2 mb-16">
      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-4">
        <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 sm:p-7">
          <div className="flex items-start gap-5 mb-6">
            <GoalRing value={todayXp} goal={DAILY_GOAL} />
            <div className="min-w-0 pt-1">
              <h2 className="font-display text-xl sm:text-2xl font-extrabold text-navy-900 dark:text-white mb-1">Hôm nay của bạn</h2>
              <p className={`text-[15px] ${streakAtRisk && !goalDone ? "text-apple-600 dark:text-apple-500 font-semibold" : "text-navy-500 dark:text-paper-200"}`}>{message}</p>
              <p className="text-sm text-navy-400 mt-2">
                <span className="font-semibold text-navy-700 dark:text-paper-100">{streak} ngày</span> liên tiếp ·{" "}
                <span className="font-semibold text-navy-700 dark:text-paper-100">{level.name}</span> ({Math.round(level.progress * 100)}% tới cấp sau)
              </p>
            </div>
          </div>

          <div className="mb-6 overflow-x-auto"><WeekStrip activeDays={activeDays || []} /></div>

          {nextLesson ? (
            <Link
              href={`/learn/beginner/${nextLesson.id}`}
              className="group flex items-center gap-4 rounded-2xl bg-navy-900 dark:bg-white/[0.06] text-white p-4 pr-5 hover:bg-navy-700 dark:hover:bg-white/10 transition-colors focus-visible:outline focus-visible:outline-4 focus-visible:outline-apple-100"
            >
              <div className="w-12 h-12 rounded-xl bg-apple-500 grid place-items-center flex-shrink-0">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-white/60 mb-0.5">Bài tiếp theo · +{nextLesson.xpReward} XP</p>
                <p className="font-bold truncate">{nextLesson.title}</p>
              </div>
              <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <Link href="/learn/topics" className="flex items-center gap-4 rounded-2xl bg-leaf-500 text-white p-4 hover:bg-leaf-600 transition-colors">
              <Check className="w-6 h-6" />
              <p className="font-bold flex-1">Bạn đã học hết lộ trình mất gốc! Ôn từ vựng theo chủ đề nhé.</p>
              <ArrowRight className="w-5 h-5" />
            </Link>
          )}
        </div>
        <WordOfTheDay />
      </div>
    </section>
  );
}

/* ─────────────────────────── Learning path ─────────────────────────── */

function BeginnerRoadmap({ completed }: { completed: string[] }) {
  const total = BEGINNER_PATH.reduce((n, u) => n + u.lessonIds.length, 0);
  const done = BEGINNER_PATH.reduce((n, u) => n + u.lessonIds.filter((id) => completed.includes(id)).length, 0);
  let foundCurrent = false;

  return (
    <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 sm:p-8">
      <div className="flex flex-wrap items-end justify-between gap-3 mb-7">
        <div>
          <h3 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white">Lộ trình mất gốc A0 → A2</h3>
          <p className="text-navy-500 dark:text-paper-200 mt-1">Đi từng bước, mỗi bài mở khoá bài sau.</p>
        </div>
        <p className="text-sm font-semibold text-navy-500 dark:text-paper-200">{done}/{total} bài</p>
      </div>

      <ol className="relative">
        {BEGINNER_PATH.map((unit, ui) => {
          const unitDone = unit.lessonIds.every((id) => completed.includes(id));
          const isCurrent = !unitDone && !foundCurrent;
          if (isCurrent) foundCurrent = true;
          const locked = !unitDone && !isCurrent;
          const firstOpen = unit.lessonIds.find((id) => !completed.includes(id)) ?? unit.lessonIds[0];
          const isLast = ui === BEGINNER_PATH.length - 1;
          return (
            <li key={unit.unit} className="relative flex gap-4 sm:gap-5 pb-4 last:pb-0">
              {!isLast && (
                <span className={`absolute left-[19px] top-11 bottom-0 w-[2px] ${unitDone ? "bg-leaf-500" : "bg-navy-900/10 dark:bg-white/10"}`} aria-hidden="true" />
              )}
              <span
                className={`relative z-10 w-10 h-10 rounded-full grid place-items-center flex-shrink-0 font-bold text-sm ${
                  unitDone ? "bg-leaf-500 text-white" : isCurrent ? "bg-apple-500 text-white ring-4 ring-apple-100 dark:ring-apple-500/25" : "bg-navy-900/[0.06] dark:bg-white/10 text-navy-400"
                }`}
              >
                {unitDone ? <Check className="w-5 h-5" strokeWidth={3} /> : locked ? <Lock className="w-4 h-4" /> : unit.unit}
              </span>
              <div className={`flex-1 min-w-0 pt-1.5 ${locked ? "opacity-60" : ""}`}>
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <p className="font-bold text-navy-900 dark:text-white">Chặng {unit.unit}: {unit.title}</p>
                  <p className="text-sm text-navy-400">{unit.lessonIds.length} bài</p>
                </div>
                {isCurrent && <p className="text-[15px] text-navy-500 dark:text-paper-200">{unit.description}</p>}
                {isCurrent && (
                  <Link
                    href={`/learn/beginner/${firstOpen}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-apple-600 hover:text-apple-700 dark:text-apple-500"
                  >
                    {done === 0 ? "Bắt đầu chặng này" : "Học tiếp chặng này"} <ArrowRight size={15} />
                  </Link>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

const OTHER_TRACKS = [
  { href: "/learn/school", Icon: GraduationCap, title: "Học sinh lớp 3–12", desc: "Học theo lớp: 4 bài mỗi lớp, từ vựng, ngữ pháp và bài luyện tập bám sát chương trình.", tint: "text-apple-600 bg-apple-50 dark:text-apple-500 dark:bg-apple-500/15" },
  { href: "/learn/toeic", Icon: Target, title: "Luyện TOEIC", desc: "Từ vựng công sở theo chủ đề và đề thi thử có bấm giờ, chấm điểm từng part.", tint: "text-navy-700 bg-navy-900/[0.06] dark:text-white dark:bg-white/10" },
  { href: "/learn/topics", Icon: Globe, title: "Từ vựng theo chủ đề", desc: `${TOPICS.length} chủ đề đời sống: du lịch, công việc, mua sắm… mỗi chủ đề có quiz ngắn.`, tint: "text-leaf-700 bg-leaf-50 dark:text-leaf-500 dark:bg-leaf-500/15" },
  { href: "/games", Icon: Gamepad2, title: "Mini games", desc: "Ghép từ, xếp câu, quiz tốc độ. Mỗi ván khoảng 1 phút, ăn XP nhanh.", tint: "text-apple-600 bg-apple-50 dark:text-apple-500 dark:bg-apple-500/15" },
  { href: "/tools/ipa", Icon: AudioLines, title: "Tra phiên âm IPA", desc: "Dán một câu tiếng Anh, xem phiên âm từng từ và nghe đọc mẫu.", tint: "text-amber-700 bg-hl-200 dark:text-hl-300 dark:bg-hl-300/15" },
];

function LearningSection({ completed }: { completed: string[] }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
      <h2 className="font-display text-3xl sm:text-[36px] font-extrabold text-navy-900 dark:text-white tracking-[-0.01em] mb-2">Học theo cách của bạn</h2>
      <p className="text-navy-500 dark:text-paper-200 text-lg mb-8 max-w-xl">Người mới nên đi theo lộ trình. Đã có nền thì nhảy thẳng vào phần mình cần.</p>
      <div className="grid lg:grid-cols-[1.25fr_1fr] gap-4 items-start">
        <BeginnerRoadmap completed={completed} />
        <ul className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10 overflow-hidden">
          {OTHER_TRACKS.map(({ href, Icon, title, desc, tint }) => (
            <li key={href}>
              <Link href={href} className="group flex items-start gap-4 p-5 sm:p-6 hover:bg-navy-900/[0.02] dark:hover:bg-white/[0.03] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-apple-500">
                <span className={`w-11 h-11 rounded-xl grid place-items-center flex-shrink-0 ${tint}`}><Icon className="w-5 h-5" /></span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-navy-900 dark:text-white mb-0.5 group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{title}</span>
                  <span className="block text-[15px] text-navy-500 dark:text-paper-200 leading-relaxed">{desc}</span>
                </span>
                <ArrowRight className="w-5 h-5 text-navy-400 mt-3 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────────────────── Promise + blog ─────────────────────────── */

const PROMISES = [
  { title: "Giải thích bằng tiếng Việt", desc: "Ngữ pháp được nói bằng ngôn ngữ bạn hiểu, không phải thuật ngữ khó nhớ." },
  { title: "Sai không bị phạt", desc: "Không mất mạng, không khoá bài. Sai thì xem lời giải rồi làm lại." },
  { title: "Không quảng cáo", desc: "Không popup, không đếm ngược ép trả tiền. Chỉ có bài học." },
];

function Promises() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
      <div className="grid sm:grid-cols-3 gap-8 sm:gap-10 border-t border-navy-900/10 dark:border-white/10 pt-10">
        {PROMISES.map((p) => (
          <div key={p.title}>
            <p className="font-display text-xl font-extrabold text-navy-900 dark:text-white mb-2"><span className="hl-mark">{p.title}</span></p>
            <p className="text-navy-500 dark:text-paper-200 leading-relaxed">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function BlogStrip() {
  const posts = POSTS.slice(0, 3);
  if (posts.length === 0) return null;
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
      <div className="flex items-end justify-between gap-4 mb-6">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Đọc thêm khi rảnh</h2>
        <Link href="/blog" className="text-sm font-bold text-apple-600 hover:text-apple-700 dark:text-apple-500 whitespace-nowrap">Tất cả bài viết</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 flex flex-col hover:border-navy-900/20 dark:hover:border-white/25 transition-colors">
            <span className="text-3xl mb-4" aria-hidden="true">{p.emoji}</span>
            <p className="font-bold text-lg text-navy-900 dark:text-white leading-snug mb-2 group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{p.title}</p>
            <p className="text-[15px] text-navy-500 dark:text-paper-200 leading-relaxed mb-4 line-clamp-2">{p.summary}</p>
            {p.readingTime && <p className="mt-auto text-sm text-navy-400">{p.readingTime}</p>}
          </Link>
        ))}
      </div>
    </section>
  );
}

function FinalCta({ href }: { href: string }) {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
      <div className="oli-paper rounded-3xl border border-navy-900/10 dark:border-white/10 pl-16 pr-6 sm:pr-10 py-10 sm:py-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
        <div className="flex-1">
          <p className="font-hand text-apple-500 text-2xl mb-3" style={{ transform: "rotate(-2deg)" }}>Chỉ 10 phút thôi!</p>
          <h2 className="font-display text-3xl font-extrabold text-navy-900 dark:text-white mb-2">Trang vở đầu tiên đang chờ bạn.</h2>
          <p className="text-navy-500 dark:text-paper-200 text-lg">Học xong một bài hôm nay là bạn đã giỏi hơn hôm qua.</p>
        </div>
        <Link href={href} className="inline-flex items-center justify-center gap-2 bg-apple-500 hover:bg-apple-600 text-white font-bold px-7 py-4 rounded-2xl shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all whitespace-nowrap">
          Học ngay <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

/* ─────────────────────────── Page ─────────────────────────── */

export default function HomePage() {
  const { xp, completedLessons } = useProgress();
  // Progress lives in localStorage; render personal bits only after mount to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const completed = mounted ? completedLessons : [];
  const hasStarted = mounted && (xp > 0 || completedLessons.length > 0);

  const nextLesson = useMemo(() => {
    const id = BEGINNER_PATH.flatMap((u) => u.lessonIds).find((lid) => !completed.includes(lid));
    const l = BEGINNER_LESSONS.find((x) => x.id === id);
    return l ? { id: l.id, title: l.title, subtitle: l.subtitle, xpReward: l.xpReward } : null;
  }, [completed]);

  const startHref = nextLesson ? `/learn/beginner/${nextLesson.id}` : "/learn/beginner";

  return (
    <div className="pb-20 md:pb-0">
      <Hero nextLesson={nextLesson} hasStarted={hasStarted} />
      {mounted && <TodayPanel nextLesson={nextLesson} />}
      <LearningSection completed={completed} />
      <Promises />
      <BlogStrip />
      <FinalCta href={startHref} />
    </div>
  );
}
