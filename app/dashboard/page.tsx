"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Flame, Lock, RotateCcw } from "lucide-react";
import { ALL_ACHIEVEMENTS, getLevel, useProgress } from "@/lib/store";
import { BEGINNER_PATH } from "@/data/beginner-lessons";
import { EXTRA_PATH } from "@/data/extra-lessons";
import { TOEIC_TESTS, TOEIC_THEMES } from "@/data/toeic";
import { TOPICS } from "@/data/topics";

const PATH_IDS = [...BEGINNER_PATH, ...EXTRA_PATH].flatMap((u) => u.lessonIds);

function localDateStr(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

// Map a stored score id to something a learner recognises
function describeScore(id: string): { name: string; href: string; kind: string } | null {
  const test = TOEIC_TESTS.find((t) => t.id === id);
  if (test) return { name: test.title.replace(/^Mini Test \d+\s*[—-]\s*/, ""), href: `/learn/toeic/test/${id}`, kind: "Đề TOEIC" };
  if (id.startsWith("topic-")) {
    const topic = TOPICS.find((t) => `topic-${t.id}` === id);
    if (topic) return { name: `${topic.emoji} ${topic.title}`, href: `/learn/topics/${topic.id}`, kind: "Quiz chủ đề" };
  }
  return null;
}

/* ─────────── Activity calendar ─────────── */

function ActivityCalendar({ activeDays }: { activeDays: string[] }) {
  const weeks = 6;
  const today = new Date();
  // Start on the Monday (weeks-1) weeks ago so columns line up as calendar weeks
  const start = new Date(today);
  const dow = (today.getDay() + 6) % 7; // Mon=0
  start.setDate(today.getDate() - dow - (weeks - 1) * 7);
  const cells = Array.from({ length: weeks * 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return { key: localDateStr(d), future: d > today, date: d };
  });
  const set = new Set(activeDays);
  const activeCount = cells.filter((c) => set.has(c.key)).length;
  const rows = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

  return (
    <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6">
      <div className="flex items-baseline justify-between gap-3 mb-5">
        <h2 className="font-bold text-lg text-navy-900 dark:text-white">Ngày đã học</h2>
        <p className="text-sm text-navy-400">{activeCount} ngày trong {weeks} tuần qua</p>
      </div>
      <div className="flex gap-2">
        <div className="grid grid-rows-7 gap-1.5 text-[11px] font-semibold text-navy-400">
          {rows.map((r) => <span key={r} className="h-6 sm:h-7 leading-6 sm:leading-7">{r}</span>)}
        </div>
        <div className="grid grid-flow-col grid-rows-7 gap-1.5 flex-1">
          {cells.map((c) => {
            const on = set.has(c.key);
            const isToday = c.key === localDateStr(today);
            return (
              <span
                key={c.key}
                title={`${c.date.toLocaleDateString("vi-VN")}${on ? ": đã học" : ""}`}
                className={`h-6 sm:h-7 rounded-md ${
                  c.future ? "bg-transparent" : on ? "bg-apple-500" : "bg-navy-900/[0.06] dark:bg-white/[0.07]"
                } ${isToday ? "ring-2 ring-offset-2 ring-navy-900/40 ring-offset-white dark:ring-white/50 dark:ring-offset-navy-900" : ""}`}
              />
            );
          })}
        </div>
      </div>
      {activeDays.length <= 1 && (
        <p className="text-sm text-navy-400 mt-4">Lịch bắt đầu ghi từ hôm nay. Mỗi ngày bạn học, một ô sẽ được tô đỏ.</p>
      )}
    </div>
  );
}

/* ─────────── Report card (the page's signature element) ─────────── */

type Subject = { name: string; detail: string; done: number; total: number; grade?: string; href: string; cta: string };

function ReportCard({ subjects }: { subjects: Subject[] }) {
  return (
    <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 overflow-hidden">
      <div className="hidden sm:grid grid-cols-[1.4fr_1.3fr_5rem_7rem] gap-4 px-6 py-3 text-sm font-semibold text-navy-400 border-b border-navy-900/[0.07] dark:border-white/10">
        <span>Môn</span>
        <span>Tiến độ</span>
        <span className="text-right">Điểm TB</span>
        <span />
      </div>
      <ul className="divide-y divide-navy-900/[0.07] dark:divide-white/10">
        {subjects.map((s) => {
          const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
          return (
            <li key={s.name} className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.4fr_1.3fr_5rem_7rem] gap-x-4 gap-y-2 items-center px-5 sm:px-6 py-4">
              <div className="min-w-0">
                <p className="font-bold text-navy-900 dark:text-white">{s.name}</p>
                <p className="text-sm text-navy-400">{s.detail}</p>
              </div>
              <p className="sm:hidden text-right text-xl font-extrabold tabular-nums text-apple-600 dark:text-apple-500">{s.grade ?? ""}</p>
              <div className="col-span-2 sm:col-span-1 flex items-center gap-3">
                <span className="flex-1 h-2 rounded-full bg-navy-900/[0.07] dark:bg-white/10 overflow-hidden">
                  <span className={`block h-full rounded-full ${pct === 100 ? "bg-leaf-500" : "bg-apple-500"}`} style={{ width: `${pct}%` }} />
                </span>
                <span className="text-sm font-semibold tabular-nums text-navy-500 dark:text-paper-200 w-14 text-right">{s.done}/{s.total}</span>
              </div>
              <p className="hidden sm:block text-right text-xl font-extrabold tabular-nums text-apple-600 dark:text-apple-500">{s.grade ?? <span className="text-navy-400 text-base font-semibold">—</span>}</p>
              <Link href={s.href} className="col-span-2 sm:col-span-1 justify-self-start sm:justify-self-end inline-flex items-center gap-1 text-sm font-bold text-navy-700 dark:text-paper-100 hover:text-apple-600 dark:hover:text-apple-500">
                {s.cta} <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Vietnamese-style mark out of 10 from a percentage
function toMark(pct: number) {
  return (Math.round(pct) / 10).toFixed(1).replace(/\.0$/, "").replace(".", ",");
}

/* ─────────── Page ─────────── */

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const p = useProgress();
  const xp = mounted ? p.xp : 0;
  const streak = mounted ? p.streak : 0;
  const completed = mounted ? p.completedLessons : [];
  const tests = mounted ? p.testScores : {};
  const gamesPlayed = mounted ? p.gamesPlayed : 0;
  const earned = mounted ? p.achievements : [];
  const activeDays = mounted ? p.activeDays || [] : [];

  const lvl = getLevel(xp);
  const earnedIds = new Set(earned.map((a) => a.id));

  const subjects = useMemo<Subject[]>(() => {
    const avg = (ids: string[]) => {
      const rs = ids.map((id) => tests[id]).filter(Boolean);
      if (!rs.length) return undefined;
      return toMark((rs.reduce((a, r) => a + r.score / r.total, 0) / rs.length) * 100);
    };
    const lessonsDone = PATH_IDS.filter((id) => completed.includes(id)).length;
    const nextLesson = PATH_IDS.find((id) => !completed.includes(id));
    const themesDone = TOEIC_THEMES.filter((t) => completed.includes(`toeic-theme-${t.id}`)).length;
    const testIds = TOEIC_TESTS.map((t) => t.id);
    const testsDone = testIds.filter((id) => tests[id]).length;
    const topicIds = TOPICS.map((t) => `topic-${t.id}`);
    const topicsDone = topicIds.filter((id) => tests[id]).length;
    return [
      { name: "Lộ trình mất gốc", detail: "20 bài từ A0 đến A2", done: lessonsDone, total: PATH_IDS.length, href: nextLesson ? `/learn/beginner/${nextLesson}` : "/learn/beginner", cta: lessonsDone ? "Học tiếp" : "Bắt đầu" },
      { name: "Từ vựng TOEIC", detail: "Flashcard theo chủ đề công sở", done: themesDone, total: TOEIC_THEMES.length, href: "/learn/toeic", cta: themesDone ? "Học tiếp" : "Bắt đầu" },
      { name: "Đề TOEIC mini", detail: "Đề có bấm giờ theo Part", done: testsDone, total: testIds.length, grade: avg(testIds), href: "/learn/toeic", cta: testsDone ? "Làm thêm" : "Làm đề" },
      { name: "Chủ đề đời sống", detail: "Quiz cuối mỗi chủ đề", done: topicsDone, total: topicIds.length, grade: avg(topicIds), href: "/learn/topics", cta: topicsDone ? "Học tiếp" : "Bắt đầu" },
    ];
  }, [completed, tests]);

  const history = useMemo(
    () =>
      Object.entries(tests)
        .map(([id, r]) => ({ id, ...r, info: describeScore(id) }))
        .filter((h) => h.info)
        .sort((a, b) => b.takenAt - a.takenAt)
        .slice(0, 8),
    [tests]
  );

  const lessonsDone = PATH_IDS.filter((id) => completed.includes(id)).length;
  const todayKey = localDateStr(new Date());
  const learnedToday = activeDays.includes(todayKey);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-24 md:pb-12">
      {/* Header */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-end mb-12">
        <div>
          <p className="text-sm font-semibold text-navy-500 dark:text-paper-200 mb-3">Tiến độ của bạn</p>
          <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.025em] mb-4">Học bạ</h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 max-w-[34rem]">
            {lessonsDone === 0 && Object.keys(tests).length === 0
              ? "Chưa có điểm nào. Học bài đầu tiên để học bạ bắt đầu có số liệu."
              : learnedToday
              ? "Hôm nay bạn đã học rồi. Giữ nhịp này mỗi ngày nhé."
              : "Hôm nay chưa học. Một bài 10 phút là đủ giữ chuỗi ngày học."}
          </p>
        </div>
        <dl className="grid grid-cols-3 gap-3">
          <div className="rounded-2xl bg-apple-50 dark:bg-apple-500/15 p-3 sm:p-4 min-w-0">
            <dt className="text-xs sm:text-sm font-semibold text-apple-700 dark:text-apple-500 flex items-center gap-1"><Flame className="w-4 h-4 flex-shrink-0" fill="currentColor" /> Liên tiếp</dt>
            <dd className="text-3xl font-extrabold text-navy-900 dark:text-white mt-1 tabular-nums">{streak}<span className="text-base font-bold text-navy-500 dark:text-paper-200"> ngày</span></dd>
          </div>
          <div className="rounded-2xl bg-hl-200/70 dark:bg-hl-300/15 p-3 sm:p-4 min-w-0">
            <dt className="text-xs sm:text-sm font-semibold text-amber-800 dark:text-hl-300">Tổng XP</dt>
            <dd className="text-3xl font-extrabold text-navy-900 dark:text-white mt-1 tabular-nums">{xp}</dd>
          </div>
          <div className="rounded-2xl bg-leaf-50 dark:bg-leaf-500/15 p-3 sm:p-4 min-w-0">
            <dt className="text-xs sm:text-sm font-semibold text-leaf-700 dark:text-leaf-500">Cấp độ {lvl.level}</dt>
            <dd className="text-sm sm:text-lg font-extrabold text-navy-900 dark:text-white mt-1.5 leading-tight break-words [hyphens:auto]" lang="en">{lvl.name}</dd>
          </div>
          <div className="col-span-3">
            <div className="h-2 rounded-full bg-navy-900/[0.07] dark:bg-white/10 overflow-hidden">
              <div className="h-full rounded-full bg-leaf-500 transition-all" style={{ width: `${Math.min(100, lvl.progress * 100)}%` }} />
            </div>
            <p className="text-sm text-navy-400 mt-1.5">
              {lvl.nextAt === Infinity ? "Bạn đã đạt cấp cao nhất." : `Còn ${lvl.nextAt - xp} XP nữa lên cấp ${lvl.level + 1}.`}
            </p>
          </div>
        </dl>
      </section>

      {/* Report card + calendar */}
      <section className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4 items-start mb-14">
        <div className="min-w-0">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-2">Bảng điểm</h2>
          <p className="text-navy-500 dark:text-paper-200 mb-5">Điểm trung bình tính theo thang 10, từ lần làm gần nhất của mỗi bài.</p>
          <ReportCard subjects={subjects} />
          <p className="text-sm text-navy-400 mt-3">
            Mini games: đã chơi {gamesPlayed} ván.{" "}
            <Link href="/games" className="font-bold text-apple-600 dark:text-apple-500 hover:underline">Chơi một ván</Link>
          </p>
        </div>
        <div className="lg:mt-[5.75rem] min-w-0">
          <ActivityCalendar activeDays={activeDays} />
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-14">
        <div className="flex items-end justify-between gap-4 mb-5">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Huy hiệu</h2>
          <p className="text-sm font-semibold text-navy-400 whitespace-nowrap">{earned.length}/{ALL_ACHIEVEMENTS.length}</p>
        </div>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ALL_ACHIEVEMENTS.map((a) => {
            const got = earnedIds.has(a.id);
            const when = earned.find((e) => e.id === a.id)?.unlockedAt;
            return (
              <li
                key={a.id}
                className={`rounded-2xl p-4 border ${got ? "bg-white dark:bg-navy-900 border-navy-900/[0.08] dark:border-white/10" : "bg-transparent border-dashed border-navy-900/15 dark:border-white/15"}`}
              >
                <div className="flex items-start justify-between mb-2">
                  <span className={`text-3xl leading-none ${got ? "" : "grayscale opacity-40"}`} aria-hidden="true">{a.icon}</span>
                  {!got && <Lock className="w-4 h-4 text-navy-400" aria-label="Chưa đạt" />}
                </div>
                <p className={`font-bold ${got ? "text-navy-900 dark:text-white" : "text-navy-500 dark:text-paper-200"}`}>{a.title}</p>
                <p className="text-sm text-navy-400 leading-snug">{a.description}</p>
                {got && when && <p className="text-xs text-leaf-600 dark:text-leaf-500 font-semibold mt-2">Đạt ngày {new Date(when).toLocaleDateString("vi-VN")}</p>}
              </li>
            );
          })}
        </ul>
      </section>

      {/* History */}
      <section className="mb-14">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-5">Điểm gần đây</h2>
        {history.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-navy-900/15 dark:border-white/15 p-8 text-center">
            <p className="text-navy-500 dark:text-paper-200 mb-3">Chưa có bài quiz hay đề thi nào. Làm một đề mini để có điểm đầu tiên.</p>
            <Link href="/learn/toeic" className="inline-flex items-center gap-1 font-bold text-apple-600 dark:text-apple-500">Xem đề TOEIC mini <ArrowRight className="w-4 h-4" /></Link>
          </div>
        ) : (
          <ul className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10 overflow-hidden">
            {history.map((h) => {
              const pct = Math.round((h.score / h.total) * 100);
              return (
                <li key={h.id}>
                  <Link href={h.info!.href} className="group flex items-center gap-4 px-5 sm:px-6 py-4 hover:bg-navy-900/[0.025] dark:hover:bg-white/[0.04] transition-colors">
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-navy-900 dark:text-white truncate group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{h.info!.name}</p>
                      <p className="text-sm text-navy-400">
                        {h.info!.kind}
                        {h.takenAt ? ` · ${new Date(h.takenAt).toLocaleDateString("vi-VN")}` : ""}
                      </p>
                    </div>
                    <p className="text-right">
                      <span className="block font-bold text-lg tabular-nums text-navy-900 dark:text-white">{h.score}/{h.total}</span>
                      <span className={`block text-sm font-semibold ${pct >= 80 ? "text-leaf-600 dark:text-leaf-500" : pct >= 50 ? "text-amber-700 dark:text-hl-300" : "text-apple-600 dark:text-apple-500"}`}>{pct}%</span>
                    </p>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      {/* Reset */}
      <section className="border-t border-navy-900/10 dark:border-white/10 pt-8">
        <h2 className="font-bold text-navy-900 dark:text-white mb-1">Học lại từ đầu</h2>
        <p className="text-sm text-navy-500 dark:text-paper-200 mb-4 max-w-xl">Xoá toàn bộ XP, chuỗi ngày, bài đã học và điểm trên trình duyệt này. Không thể hoàn tác.</p>
        <button
          onClick={() => {
            if (confirm("Xoá toàn bộ tiến độ học trên trình duyệt này? Không thể hoàn tác.")) p.reset();
          }}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-apple-600 dark:text-apple-500 border-2 border-apple-500/30 hover:bg-apple-50 dark:hover:bg-apple-500/10 transition-colors"
        >
          <RotateCcw className="w-4 h-4" /> Xoá tiến độ
        </button>
      </section>
    </div>
  );
}
