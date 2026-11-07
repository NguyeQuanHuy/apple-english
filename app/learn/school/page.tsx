"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { SCHOOL_LEVELS, getGrade, unitKey, type SchoolGrade } from "@/data/school";
import { useProgress } from "@/lib/store";

const MY_GRADE_KEY = "apple-english-my-grade";

function readMyGrade(): number | null {
  try {
    const v = Number(localStorage.getItem(MY_GRADE_KEY));
    return v >= 3 && v <= 12 ? v : null;
  } catch {
    return null;
  }
}
function saveMyGrade(g: number) {
  try {
    localStorage.setItem(MY_GRADE_KEY, String(g));
  } catch {
    /* private mode: just don't remember */
  }
}

function useGradeProgress() {
  const completed = useProgress((s) => s.completedLessons);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (g: SchoolGrade) => {
    const done = mounted ? g.units.filter((u) => completed.includes(unitKey(g.grade, u.id))).length : 0;
    return { done, total: g.units.length };
  };
}

function GradeTile({ g, mine, progress }: { g: SchoolGrade; mine: boolean; progress: { done: number; total: number } }) {
  const complete = progress.done === progress.total;
  return (
    <Link
      href={`/learn/school/${g.grade}`}
      className={`group relative rounded-2xl border-2 p-4 sm:p-5 flex flex-col transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-500 ${
        mine ? "border-apple-500 bg-apple-50/60 dark:bg-apple-500/10" : "border-navy-900/[0.08] dark:border-white/10 bg-white dark:bg-navy-900 hover:border-navy-900/25 dark:hover:border-white/25"
      }`}
    >
      {mine && <span className="absolute -top-2.5 left-4 px-2 py-0.5 rounded-md bg-apple-500 text-white text-xs font-bold">Lớp của bạn</span>}
      <span className="text-sm font-semibold text-navy-400">Lớp</span>
      <span className="font-display text-4xl sm:text-5xl font-extrabold leading-none text-navy-900 dark:text-white mb-3 group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors tabular-nums">{g.grade}</span>
      <span className="flex gap-1 mt-auto" aria-label={`${progress.done}/${progress.total} bài`}>
        {Array.from({ length: progress.total }, (_, i) => (
          <span key={i} className={`h-1.5 flex-1 rounded-full ${i < progress.done ? "bg-leaf-500" : "bg-navy-900/[0.08] dark:bg-white/10"}`} />
        ))}
      </span>
      <span className="text-xs font-semibold text-navy-400 mt-1.5 flex items-center gap-1">
        {complete ? <><Check className="w-3.5 h-3.5 text-leaf-600" strokeWidth={3} /> Đã học xong</> : `${progress.done}/${progress.total} bài`}
      </span>
    </Link>
  );
}

export default function SchoolIndex() {
  const [myGrade, setMyGrade] = useState<number | null>(null);
  const progressOf = useGradeProgress();
  useEffect(() => setMyGrade(readMyGrade()), []);

  const mine = myGrade ? getGrade(myGrade) : undefined;
  const mineProgress = mine ? progressOf(mine) : null;
  const completed = useProgress((s) => s.completedLessons);
  const nextUnit = mine?.units.find((u) => !completed.includes(unitKey(mine.grade, u.id)));

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-24 md:pb-12">
      <header className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-12 items-end mb-12">
        <div>
          <p className="text-sm font-semibold text-navy-500 dark:text-paper-200 mb-3">Dành cho học sinh lớp 3 đến lớp 12</p>
          <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.025em] mb-4 [text-wrap:balance]">
            Học tiếng Anh theo lớp, chắc từng bài.
          </h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 max-w-[34rem]">
            Mỗi lớp có 4 bài theo chủ đề, đi theo tiến trình của chương trình phổ thông. Mỗi bài gồm từ vựng có phát âm, một điểm ngữ pháp giải thích bằng tiếng Việt và bài luyện tập có chấm điểm.
          </p>
        </div>

        <div className="oli-paper rounded-[22px] border border-navy-900/10 dark:border-white/10 pl-16 pr-6 py-6 shadow-[0_24px_60px_-34px_rgba(21,32,51,0.45)]">
          {mine && mineProgress ? (
            <>
              <p className="font-hand text-apple-500 text-2xl mb-1" style={{ transform: "rotate(-2deg)" }}>Lớp {mine.grade} của bạn</p>
              <p className="text-navy-700 dark:text-paper-100 mb-4">{mineProgress.done}/{mineProgress.total} bài đã học</p>
              {nextUnit ? (
                <Link href={`/learn/school/${mine.grade}/${nextUnit.id}`} className="btn-bump-ember">
                  Học tiếp: {nextUnit.title} <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <Link href={`/learn/school/${Math.min(12, mine.grade + 1)}`} className="btn-bump-teal">
                  Xong lớp {mine.grade}! Xem lớp {Math.min(12, mine.grade + 1)} <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              <button onClick={() => setMyGrade(null)} className="block mt-4 text-sm font-semibold text-navy-400 hover:text-navy-700 dark:hover:text-white">Đổi lớp</button>
            </>
          ) : (
            <>
              <p className="font-hand text-apple-500 text-2xl mb-1" style={{ transform: "rotate(-2deg)" }}>Bạn đang học lớp mấy?</p>
              <p className="text-navy-500 dark:text-paper-200 mb-4 text-[15px]">Chọn lớp để trang luôn mở đúng bài của bạn.</p>
              <div className="grid grid-cols-5 gap-2" role="group" aria-label="Chọn lớp">
                {SCHOOL_LEVELS.flatMap((l) => l.grades).map((g) => (
                  <button
                    key={g.grade}
                    onClick={() => {
                      saveMyGrade(g.grade);
                      setMyGrade(g.grade);
                    }}
                    className="h-11 rounded-xl bg-white dark:bg-navy-900 border-2 border-navy-900/10 dark:border-white/15 font-extrabold text-navy-900 dark:text-white hover:border-apple-500 hover:text-apple-600 transition-colors tabular-nums"
                  >
                    {g.grade}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </header>

      <div className="space-y-12 mb-16">
        {SCHOOL_LEVELS.map((level) => (
          <section key={level.id} aria-labelledby={`lv-${level.id}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
              <h2 id={`lv-${level.id}`} className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">{level.title}</h2>
              <p className="text-sm text-navy-500 dark:text-paper-200">{level.desc}</p>
            </div>
            <div className={`grid gap-3 ${level.grades.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"}`}>
              {level.grades.map((g) => (
                <GradeTile key={g.grade} g={g} mine={g.grade === myGrade} progress={progressOf(g)} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-3xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-6 sm:p-8">
        <h2 className="font-bold text-xl text-navy-900 dark:text-white mb-1">Học một bài thế nào cho nhớ?</h2>
        <p className="text-navy-500 dark:text-paper-200 mb-6">Mỗi bài khoảng 15 phút. Làm đủ ba bước theo thứ tự.</p>
        <ol className="grid sm:grid-cols-3 gap-6">
          {[
            { t: "Từ vựng", d: "Nghe từng từ, đọc to câu ví dụ. Che nghĩa tiếng Việt rồi tự nhớ lại." },
            { t: "Ngữ pháp", d: "Đọc giải thích, chép công thức vào vở, đặt thêm một câu của riêng mình." },
            { t: "Luyện tập", d: "Làm 4 câu. Đúng từ 3 câu là qua bài. Sai thì đọc lời giải rồi làm lại." },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-3">
              <span className="w-8 h-8 rounded-full bg-navy-900 text-white dark:bg-white dark:text-navy-900 grid place-items-center text-sm font-bold flex-shrink-0">{i + 1}</span>
              <div>
                <p className="font-bold text-navy-900 dark:text-white">{s.t}</p>
                <p className="text-[15px] text-navy-700 dark:text-paper-100 leading-relaxed">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
