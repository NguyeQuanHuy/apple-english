"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Lock, ChevronRight, Star } from "lucide-react";
import { BEGINNER_LESSONS, BEGINNER_PATH } from "@/data/beginner-lessons";
import { EXTRA_LESSONS, EXTRA_PATH } from "@/data/extra-lessons";
import { useProgress } from "@/lib/store";
import { useEffect, useState } from "react";

const ALL_LESSONS = [...BEGINNER_LESSONS, ...EXTRA_LESSONS];
const ALL_PATH = [...BEGINNER_PATH, ...EXTRA_PATH];

export default function BeginnerIndex() {
  const completed = useProgress((s) => s.completedLessons);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const totalLessons = ALL_PATH.flatMap((u) => u.lessonIds).length;
  const doneCount = mounted ? ALL_PATH.flatMap((u) => u.lessonIds).filter((id) => completed.includes(id)).length : 0;
  const percent = Math.round((doneCount / totalLessons) * 100);

  return (
    <div className="min-h-screen bg-sky-50 pb-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-4 pt-10 pb-10">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200 mb-2">Lộ trình A0 – A2</p>
          <h1 className="font-display text-3xl font-black mb-2">Mất gốc tiếng Anh</h1>
          <p className="text-sky-100 text-sm mb-6">Từ chữ cái đến câu hoàn chỉnh. Mỗi bài 5–10 phút. {totalLessons} bài học đầy đủ.</p>

          <div className="bg-white/15 rounded-xl p-4">
            <div className="flex justify-between text-sm font-bold mb-2">
              <span>Tiến độ</span>
              <span>{doneCount}/{totalLessons} bài</span>
            </div>
            <div className="h-2.5 bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-yellow-300 rounded-full transition-all" style={{ width: `${percent}%` }} />
            </div>
            <p className="text-sky-200 text-xs mt-1.5">{percent}% hoàn thành</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">

        {/* Label A0-A1 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-sky-200" />
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Trình độ A0 – A1 (Cơ bản)</span>
          <div className="h-px flex-1 bg-sky-200" />
        </div>

        <div className="space-y-8 mb-10">
          {BEGINNER_PATH.map((unit, unitIdx) => {
            const lessons = unit.lessonIds.map((id) => ALL_LESSONS.find((l) => l.id === id)!);
            return (
              <UnitSection key={unit.unit} unit={unit} lessons={lessons} unitIdx={unitIdx} completed={completed} mounted={mounted} allPath={ALL_PATH} allLessons={ALL_LESSONS} />
            );
          })}
        </div>

        {/* Label A2 */}
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-sky-200" />
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1">
            <Star size={10} /> Trình độ A2 (Nâng cao)
          </span>
          <div className="h-px flex-1 bg-sky-200" />
        </div>

        <div className="space-y-8">
          {EXTRA_PATH.map((unit, unitIdx) => {
            const lessons = unit.lessonIds.map((id) => ALL_LESSONS.find((l) => l.id === id)!);
            return (
              <UnitSection key={unit.unit} unit={unit} lessons={lessons} unitIdx={unitIdx + BEGINNER_PATH.length} completed={completed} mounted={mounted} allPath={ALL_PATH} allLessons={ALL_LESSONS} />
            );
          })}
        </div>

      </div>
    </div>
  );
}

function UnitSection({ unit, lessons, unitIdx, completed, mounted, allPath, allLessons }: any) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: unitIdx * 0.06 }}
    >
      <div className="flex items-center gap-3 mb-3">
        <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-black text-sm flex-shrink-0">
          {String(unit.unit).padStart(2, "0")}
        </div>
        <div>
          <h2 className="font-display text-lg font-bold text-sky-900 leading-tight">{unit.title}</h2>
          <p className="text-xs text-sky-400">{unit.description}</p>
        </div>
      </div>
      <div className="space-y-2 pl-12">
        {lessons.map((lesson: any, idx: number) => {
          if (!lesson) return null;
          const allPrev = allPath.flatMap((u: any) =>
            u.unit < unit.unit ? u.lessonIds : u.unit === unit.unit ? u.lessonIds.slice(0, idx) : []
          );
          const locked = mounted && allPrev.length > 0 && !allPrev.every((id: string) => completed.includes(id));
          const done = mounted && completed.includes(lesson.id);
          return <LessonRow key={lesson.id} lesson={lesson} locked={locked} done={done} />;
        })}
      </div>
    </motion.section>
  );
}

function LessonRow({ lesson, locked, done }: { lesson: any; locked: boolean; done: boolean }) {
  const inner = (
    <div className={`rounded-xl p-4 flex items-center gap-3 transition-all border-2
      ${done ? "bg-sky-50 border-sky-300" : locked ? "bg-white border-sky-100 opacity-50" : "bg-white border-sky-200 hover:border-sky-400 hover:shadow-card"}`}>
      <div className="flex-shrink-0">
        {done ? <CheckCircle2 className="w-6 h-6 text-sky-500" /> : locked ? <Lock className="w-6 h-6 text-sky-300" /> : <Circle className="w-6 h-6 text-sky-400" />}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-0.5">
          <span className="text-xs font-bold text-sky-300 uppercase">{lesson.level}</span>
          <span className="text-xs font-bold text-sky-500">+{lesson.xpReward} XP</span>
        </div>
        <p className="font-bold text-sky-900 text-sm leading-tight">{lesson.title}</p>
        <p className="text-xs text-sky-400 truncate mt-0.5">{lesson.subtitle}</p>
      </div>
      {!locked && (
        <div className="flex items-center gap-0.5 text-xs font-bold text-sky-500 flex-shrink-0">
          {done ? "Học lại" : "Học"} <ChevronRight size={14} />
        </div>
      )}
    </div>
  );
  if (locked) return <div className="cursor-not-allowed">{inner}</div>;
  return <Link href={`/learn/beginner/${lesson.id}`}>{inner}</Link>;
}