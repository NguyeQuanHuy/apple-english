"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { getGrade, levelOf, unitKey } from "@/data/school";
import { useProgress } from "@/lib/store";

export default function GradePage() {
  const params = useParams<{ grade: string }>();
  const g = getGrade(Number(params.grade));
  const completed = useProgress((s) => s.completedLessons);
  const testScores = useProgress((s) => s.testScores);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!g) {
    return (
      <div className="max-w-md mx-auto px-4 pt-16 pb-24 text-center">
        <p className="text-lg text-navy-700 dark:text-paper-100 mb-4">Chưa có nội dung cho lớp này.</p>
        <Link href="/learn/school" className="font-bold text-apple-600 dark:text-apple-500">Chọn lớp khác</Link>
      </div>
    );
  }

  const level = levelOf(g.grade);
  const isDone = (id: string) => mounted && completed.includes(unitKey(g.grade, id));
  const doneCount = g.units.filter((u) => isDone(u.id)).length;
  const nextUnit = g.units.find((u) => !isDone(u.id));
  const prev = getGrade(g.grade - 1);
  const next = getGrade(g.grade + 1);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      <Link href="/learn/school" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" /> Tất cả các lớp
      </Link>

      <header className="mt-6 mb-8 flex items-start gap-5">
        <span className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl bg-navy-900 text-white grid place-items-center flex-shrink-0">
          <span className="text-center leading-none">
            <span className="block text-xs font-semibold text-white/60 mb-1">Lớp</span>
            <span className="block font-display text-4xl sm:text-5xl font-extrabold tabular-nums">{g.grade}</span>
          </span>
        </span>
        <div className="min-w-0 pt-1">
          <p className="text-sm font-semibold text-navy-400">{level.title}</p>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-navy-900 dark:text-white">Tiếng Anh lớp {g.grade}</h1>
          <p className="text-navy-500 dark:text-paper-200 mt-1">{g.focus}</p>
        </div>
      </header>

      <div className="flex items-center justify-between gap-4 mb-4">
        <p className="text-sm font-semibold text-navy-700 dark:text-paper-100">{doneCount}/{g.units.length} bài đã học</p>
        {nextUnit && (
          <Link href={`/learn/school/${g.grade}/${nextUnit.id}`} className="inline-flex items-center gap-1 text-sm font-bold text-apple-600 dark:text-apple-500">
            {doneCount ? "Học tiếp" : "Bắt đầu bài 1"} <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <ol className="space-y-3">
        {g.units.map((u, i) => {
          const done = isDone(u.id);
          const current = nextUnit?.id === u.id;
          const score = mounted ? testScores[unitKey(g.grade, u.id)] : undefined;
          return (
            <li key={u.id}>
              <Link
                href={`/learn/school/${g.grade}/${u.id}`}
                className={`group flex items-center gap-4 rounded-2xl border-2 p-4 sm:p-5 transition-colors ${
                  current ? "border-apple-500 bg-apple-50/60 dark:bg-apple-500/10" : "border-navy-900/[0.08] dark:border-white/10 bg-white dark:bg-navy-900 hover:border-navy-900/25 dark:hover:border-white/25"
                }`}
              >
                <span className={`w-11 h-11 rounded-full grid place-items-center font-bold flex-shrink-0 ${done ? "bg-leaf-500 text-white" : current ? "bg-apple-500 text-white" : "bg-navy-900/[0.06] dark:bg-white/10 text-navy-700 dark:text-paper-100"}`}>
                  {done ? <Check className="w-5 h-5" strokeWidth={3} /> : i + 1}
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-bold text-lg text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{u.title}</span>
                  <span className="block text-sm text-navy-400">{u.titleEn} · Ngữ pháp: {u.grammar.title}</span>
                </span>
                <span className="text-sm font-semibold text-navy-400 whitespace-nowrap hidden sm:block">
                  {score ? `${score.score}/${score.total}` : `${u.words.length} từ`}
                </span>
                <ArrowRight className="w-5 h-5 text-navy-400 flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </li>
          );
        })}
      </ol>

      <nav className="mt-10 flex items-center justify-between gap-4 text-sm font-bold" aria-label="Lớp khác">
        {prev ? <Link href={`/learn/school/${prev.grade}`} className="inline-flex items-center gap-1 text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white"><ArrowLeft className="w-4 h-4" /> Lớp {prev.grade}</Link> : <span />}
        {next ? <Link href={`/learn/school/${next.grade}`} className="inline-flex items-center gap-1 text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white">Lớp {next.grade} <ArrowRight className="w-4 h-4" /></Link> : <span />}
      </nav>
    </div>
  );
}
