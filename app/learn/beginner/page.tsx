"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Lock, ChevronRight, Star, Mic, BookOpen, Zap } from "lucide-react";
import { BEGINNER_LESSONS, BEGINNER_PATH } from "@/data/beginner-lessons";
import { EXTRA_LESSONS, EXTRA_PATH } from "@/data/extra-lessons";
import { useProgress } from "@/lib/store";
import { useEffect, useState } from "react";

const ALL_LESSONS = [...BEGINNER_LESSONS, ...EXTRA_LESSONS];
const ALL_PATH = [...BEGINNER_PATH, ...EXTRA_PATH];

const PRONUNCIATION_TOPICS = [
  { id: "vowels", title: "Nguy\u00ean \u00e2m c\u01a1 b\u1ea3n", desc: "a, e, i, o, u v\u00e0 c\u00e1c bi\u1ebfn th\u1ec3", icon: "\uD83D\uDD24", color: "bg-violet-50 border-violet-200 hover:border-violet-400", tag: "A0" },
  { id: "consonants", title: "Ph\u1ee5 \u00e2m kh\u00f3", desc: "/th/, /v/, /w/, /r/ l\u1ed7i hay g\u1eb7p", icon: "\uD83D\uDDE3\uFE0F", color: "bg-pink-50 border-pink-200 hover:border-pink-400", tag: "A1" },
  { id: "stress", title: "Tr\u1ecdng \u00e2m t\u1eeb", desc: "Nh\u1ea5n \u0111\u00fang ch\u1ed7 \u0111\u1ec3 nghe t\u1ef1 nhi\u00ean", icon: "\uD83C\uDFB5", color: "bg-amber-50 border-amber-200 hover:border-amber-400", tag: "A1" },
  { id: "linking", title: "N\u1ed1i \u00e2m", desc: "B\u00ed quy\u1ebft nghe ng\u01b0\u1eddi b\u1ea3n ng\u1eef", icon: "\uD83D\uDD17", color: "bg-teal-50 border-teal-200 hover:border-teal-400", tag: "A2" },
];

export default function BeginnerIndex() {
  const completed = useProgress((s) => s.completedLessons);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"lessons" | "pronunciation">("lessons");
  useEffect(() => setMounted(true), []);
  const totalLessons = ALL_PATH.flatMap((u) => u.lessonIds).length;
  const doneCount = mounted ? ALL_PATH.flatMap((u) => u.lessonIds).filter((id) => completed.includes(id)).length : 0;
  const percent = Math.round((doneCount / totalLessons) * 100);
  return (
    <div className="min-h-screen bg-sky-50 pb-20">
      <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-4 pt-10 pb-16">
        <div className="max-w-2xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200 mb-2">L\u1ed9 tr\u00ecnh A0 \u2013 A2</p>
          <h1 className="font-display text-3xl font-black mb-2">M\u1ea5t g\u1ed1c ti\u1ebfng Anh</h1>
          <p className="text-sky-100 text-sm mb-6">T\u1eeb ch\u1eef c\u00e1i \u0111\u1ebfn c\u00e2u ho\u00e0n ch\u1ec9nh. M\u1ed7i b\u00e0i 5\u201310 ph\u00fat. {totalLessons} b\u00e0i h\u1ecdc \u0111\u1ea7y \u0111\u1ee7.</p>
          <div className="bg-white/15 rounded-xl p-4">
            <div className="flex justify-between text-sm font-bold mb-2"><span>Ti\u1ebfn \u0111\u1ed9</span><span>{doneCount}/{totalLessons} b\u00e0i</span></div>
            <div className="h-2.5 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-yellow-300 rounded-full transition-all" style={{ width: `${percent}%` }} /></div>
            <p className="text-sky-200 text-xs mt-1.5">{percent}% ho\u00e0n th\u00e0nh</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 -mt-5">
        <div className="bg-white rounded-2xl border-2 border-sky-100 shadow-card p-1.5 flex gap-1.5 mb-8">
          <button onClick={() => setActiveTab("lessons")} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "lessons" ? "bg-sky-500 text-white shadow-md" : "text-sky-500 hover:bg-sky-50"}`}>
            <BookOpen size={15} /> B\u00e0i h\u1ecdc ({totalLessons})
          </button>
          <button onClick={() => setActiveTab("pronunciation")} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "pronunciation" ? "bg-sky-500 text-white shadow-md" : "text-sky-500 hover:bg-sky-50"}`}>
            <Mic size={15} /> Ph\u00e1t \u00e2m
          </button>
        </div>
        {activeTab === "lessons" && (
          <div>
            <div className="flex items-center gap-3 mb-6"><div className="h-px flex-1 bg-sky-200" /><span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Tr\u00ecnh \u0111\u1ed9 A0 \u2013 A1 (C\u01a1 b\u1ea3n)</span><div className="h-px flex-1 bg-sky-200" /></div>
            <div className="space-y-8 mb-10">{BEGINNER_PATH.map((unit, unitIdx) => { const lessons = unit.lessonIds.map((id) => ALL_LESSONS.find((l) => l.id === id)!); return <UnitSection key={unit.unit} unit={unit} lessons={lessons} unitIdx={unitIdx} completed={completed} mounted={mounted} allPath={ALL_PATH} allLessons={ALL_LESSONS} />; })}</div>
            <div className="flex items-center gap-3 mb-6"><div className="h-px flex-1 bg-sky-200" /><span className="text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1"><Star size={10} /> Tr\u00ecnh \u0111\u1ed9 A2 (N\u00e2ng cao)</span><div className="h-px flex-1 bg-sky-200" /></div>
            <div className="space-y-8">{EXTRA_PATH.map((unit, unitIdx) => { const lessons = unit.lessonIds.map((id) => ALL_LESSONS.find((l) => l.id === id)!); return <UnitSection key={unit.unit} unit={unit} lessons={lessons} unitIdx={unitIdx + BEGINNER_PATH.length} completed={completed} mounted={mounted} allPath={ALL_PATH} allLessons={ALL_LESSONS} />; })}</div>
          </div>
        )}
        {activeTab === "pronunciation" && (
          <div>
            <div className="bg-white border-2 border-sky-100 rounded-2xl p-5 mb-6"><div className="flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0"><Mic size={18} className="text-white" /></div><div><p className="font-black text-sky-900 text-base mb-1">T\u1ea1i sao ph\u1ea3i h\u1ecdc ph\u00e1t \u00e2m?</p><p className="text-sky-500 text-sm leading-relaxed">Ph\u00e1t \u00e2m sai khi\u1ebfn ng\u01b0\u1eddi nghe kh\u00f4ng hi\u1ec3u d\u00f9 ng\u1eef ph\u00e1p \u0111\u00fang. Ch\u1ec9 c\u1ea7n 10 ph\u00fat luy\u1ec7n m\u1ed7i ng\u00e0y \u2014 tai v\u00e0 mi\u1ec7ng s\u1ebd thay \u0111\u1ed5i r\u00f5 r\u1ec7t.</p></div></div></div>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mb-6"><p className="font-black text-amber-800 text-sm mb-3">\uD83D\uDCA1 3 b\u01b0\u1edbc luy\u1ec7n ph\u00e1t \u00e2m hi\u1ec7u qu\u1ea3</p><ol className="space-y-2">{["Nghe k\u1ef9 \u00e2m chu\u1ea9n t\u1eeb ng\u01b0\u1eddi b\u1ea3n ng\u1eef (YouTube, ELSA Speak)","Nh\u00ecn g\u01b0\u01a1ng \u2014 quan s\u00e1t h\u00ecnh d\u1ea1ng mi\u1ec7ng v\u00e0 l\u01b0\u1ee1i","Ghi \u00e2m b\u1ea3n th\u00e2n v\u00e0 so s\u00e1nh \u2014 b\u01b0\u1edbc quan tr\u1ecdng nh\u1ea5t"].map((t,i)=>(<li key={i} className="flex gap-2 text-sm text-amber-700"><span className="w-5 h-5 rounded-full bg-amber-400 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">{i+1}</span><span>{t}</span></li>))}</ol></div>
            <div className="mb-6"><p className="font-black text-sky-900 text-base mb-4 flex items-center gap-2"><Zap size={16} className="text-sky-500" /> Ch\u1ee7 \u0111\u1ec1 luy\u1ec7n ph\u00e1t \u00e2m</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{PRONUNCIATION_TOPICS.map((t) => (<Link key={t.id} href="/blog/cach-phat-am-tieng-anh-ro-rang" className={`flex items-start gap-3 p-4 rounded-2xl border-2 bg-white ${t.color} transition-all hover:shadow-card group`}><span className="text-2xl flex-shrink-0">{t.icon}</span><div className="flex-1 min-w-0"><div className="flex items-center justify-between gap-2"><p className="font-black text-sky-900 text-sm">{t.title}</p><span className="text-xs font-bold text-sky-400 bg-sky-50 px-1.5 py-0.5 rounded-full">{t.tag}</span></div><p className="text-sky-500 text-xs mt-0.5">{t.desc}</p></div><ChevronRight size={14} className="text-sky-300 group-hover:text-sky-600 flex-shrink-0 mt-0.5" /></Link>))}</div></div>
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-center text-white"><p className="text-2xl mb-2">\uD83C\uDFA4</p><p className="font-black text-lg mb-1">Luy\u1ec7n ph\u00e1t \u00e2m m\u1ed7i ng\u00e0y</p><p className="text-violet-200 text-sm mb-4">\u0110\u1ecdc to b\u00e0i h\u1ecdc sau khi ho\u00e0n th\u00e0nh.</p><button onClick={() => setActiveTab("lessons")} className="bg-white text-violet-600 font-black px-6 py-2.5 rounded-xl text-sm">V\u00e0o h\u1ecdc b\u00e0i \u2192</button></div>
          </div>
        )}
      </div>
    </div>
  );
}

function UnitSection({ unit, lessons, unitIdx, completed, mounted, allPath, allLessons }: any) {
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: unitIdx * 0.06 }}>
      <div className="flex items-center gap-3 mb-3"><div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-black text-sm flex-shrink-0">{String(unit.unit).padStart(2, "0")}</div><div><h2 className="font-display text-lg font-bold text-sky-900 leading-tight">{unit.title}</h2><p className="text-xs text-sky-400">{unit.description}</p></div></div>
      <div className="space-y-2 pl-12">{lessons.map((lesson: any, idx: number) => { if (!lesson) return null; const allPrev = allPath.flatMap((u: any) => u.unit < unit.unit ? u.lessonIds : u.unit === unit.unit ? u.lessonIds.slice(0, idx) : []); const locked = mounted && allPrev.length > 0 && !allPrev.every((id: string) => completed.includes(id)); const done = mounted && completed.includes(lesson.id); return <LessonRow key={lesson.id} lesson={lesson} locked={locked} done={done} />; })}</div>
    </motion.section>
  );
}

function LessonRow({ lesson, locked, done }: { lesson: any; locked: boolean; done: boolean }) {

function UnitSection({ unit, lessons, unitIdx, completed, mounted, allPath, allLessons }: any) {
  return (
    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: unitIdx * 0.06 }}>
      <div className="flex items-center gap-3 mb-3"><div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-black text-sm flex-shrink-0">{String(unit.unit).padStart(2, "0")}</div><div><h2 className="font-display text-lg font-bold text-sky-900 leading-tight">{unit.title}</h2><p className="text-xs text-sky-400">{unit.description}</p></div></div>
      <div className="space-y-2 pl-12">{lessons.map((lesson: any, idx: number) => { if (!lesson) return null; const allPrev = allPath.flatMap((u: any) => u.unit < unit.unit ? u.lessonIds : u.unit === unit.unit ? u.lessonIds.slice(0, idx) : []); const locked = mounted && allPrev.length > 0 && !allPrev.every((id: string) => completed.includes(id)); const done = mounted && completed.includes(lesson.id); return <LessonRow key={lesson.id} lesson={lesson} locked={locked} done={done} />; })}</div>
    </motion.section>
  );
}

function LessonRow({ lesson, locked, done }: { lesson: any; locked: boolean; done: boolean }) {
  const inner = (<div className={`rounded-xl p-4 flex items-center gap-3 transition-all border-2 ${done ? "bg-sky-50 border-sky-300" : locked ? "bg-white border-sky-100 opacity-50" : "bg-white border-sky-200 hover:border-sky-400 hover:shadow-card"}`}><div className="flex-shrink-0">{done ? <CheckCircle2 className="w-6 h-6 text-sky-500" /> : locked ? <Lock className="w-6 h-6 text-sky-300" /> : <Circle className="w-6 h-6 text-sky-400" />}</div><div className="flex-1 min-w-0"><div className="flex items-center gap-2 mb-0.5"><span className="text-xs font-bold text-sky-300 uppercase">{lesson.level}</span><span className="text-xs font-bold text-sky-500">+{lesson.xpReward} XP</span></div><p className="font-bold text-sky-900 text-sm leading-tight">{lesson.title}</p><p className="text-xs text-sky-400 truncate mt-0.5">{lesson.subtitle}</p></div>{!locked && (<div className="flex items-center gap-0.5 text-xs font-bold text-sky-500 flex-shrink-0">{done ? "H\u1ecdc l\u1ea1i" : "H\u1ecdc"} <ChevronRight size={14} /></div>)}</div>);
  if (locked) return <div className="cursor-not-allowed">{inner}</div>;
  return <Link href={`/learn/beginner/${lesson.id}`}>{inner}</Link>;
}
}
