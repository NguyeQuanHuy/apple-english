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
  { id: "vowels", title: "Nguyên âm cơ bản", desc: "a, e, i, o, u và các biến thể", icon: "🔤", color: "bg-violet-50 border-violet-200 hover:border-violet-400", tag: "A0" },
  { id: "consonants", title: "Phụ âm khó", desc: "/th/, /v/, /w/, /r/ lỗi hay gặp", icon: "🗣️", color: "bg-pink-50 border-pink-200 hover:border-pink-400", tag: "A1" },
  { id: "stress", title: "Trọng âm từ", desc: "Nhấn đúng chỗ để nghe tự nhiên", icon: "🎵", color: "bg-amber-50 border-amber-200 hover:border-amber-400", tag: "A1" },
  { id: "linking", title: "Nối âm", desc: "Bí quyết nghe người bản ngữ", icon: "🔗", color: "bg-teal-50 border-teal-200 hover:border-teal-400", tag: "A2" },
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
          <p className="text-xs font-bold uppercase tracking-widest text-sky-200 mb-2">Lộ trình A0 – A2</p>
          <h1 className="font-display text-3xl font-black mb-2">Mất gốc tiếng Anh</h1>
          <p className="text-sky-100 text-sm mb-6">Từ chữ cái đến câu hoàn chỉnh. Mỗi bài 5–10 phút. {totalLessons} bài học đầy đủ.</p>
          <div className="bg-white/15 rounded-xl p-4">
            <div className="flex justify-between text-sm font-bold mb-2"><span>Tiến độ</span><span>{doneCount}/{totalLessons} bài</span></div>
            <div className="h-2.5 bg-white/20 rounded-full overflow-hidden"><div className="h-full bg-yellow-300 rounded-full transition-all" style={{ width: `${percent}%` }} /></div>
            <p className="text-sky-200 text-xs mt-1.5">{percent}% hoàn thành</p>
          </div>
        </div>
      </div>
      <div className="max-w-2xl mx-auto px-4 -mt-5">
        <div className="bg-white rounded-2xl border-2 border-sky-100 shadow-card p-1.5 flex gap-1.5 mb-8">
          <button onClick={() => setActiveTab("lessons")} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "lessons" ? "bg-sky-500 text-white shadow-md" : "text-sky-500 hover:bg-sky-50"}`}>
            <BookOpen size={15} /> Bài học ({totalLessons})
          </button>
          <button onClick={() => setActiveTab("pronunciation")} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold transition-all ${activeTab === "pronunciation" ? "bg-sky-500 text-white shadow-md" : "text-sky-500 hover:bg-sky-50"}`}>
            <Mic size={15} /> Phát âm
          </button>
        </div>
        {activeTab === "lessons" && (
          <div>
            <div className="flex items-center gap-3 mb-6"><div className="h-px flex-1 bg-sky-200" /><span className="text-xs font-bold text-sky-400 uppercase tracking-widest">Trình độ A0 – A1 (Cơ bản)</span><div className="h-px flex-1 bg-sky-200" /></div>
            <div className="space-y-8 mb-10">{BEGINNER_PATH.map((unit, unitIdx) => { const lessons = unit.lessonIds.map((id) => ALL_LESSONS.find((l) => l.id === id)!); return <UnitSection key={unit.unit} unit={unit} lessons={lessons} unitIdx={unitIdx} completed={completed} mounted={mounted} allPath={ALL_PATH} allLessons={ALL_LESSONS} />; })}</div>
            <div className="flex items-center gap-3 mb-6"><div className="h-px flex-1 bg-sky-200" /><span className="text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1"><Star size={10} /> Trình độ A2 (Nâng cao)</span><div className="h-px flex-1 bg-sky-200" /></div>
            <div className="space-y-8">{EXTRA_PATH.map((unit, unitIdx) => { const lessons = unit.lessonIds.map((id) => ALL_LESSONS.find((l) => l.id === id)!); return <UnitSection key={unit.unit} unit={unit} lessons={lessons} unitIdx={unitIdx + BEGINNER_PATH.length} completed={completed} mounted={mounted} allPath={ALL_PATH} allLessons={ALL_LESSONS} />; })}</div>
          </div>
        )}
        {activeTab === "pronunciation" && (
          <div>
            <div className="bg-white border-2 border-sky-100 rounded-2xl p-5 mb-6"><div className="flex items-start gap-3"><div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center flex-shrink-0"><Mic size={18} className="text-white" /></div><div><p className="font-black text-sky-900 text-base mb-1">Tại sao phải học phát âm?</p><p className="text-sky-500 text-sm leading-relaxed">Phát âm sai khiến người nghe không hiểu dù ngữ pháp đúng. Chỉ cần 10 phút luyện mỗi ngày — tai và miệng sẽ thay đổi rõ rệt.</p></div></div></div>
            <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-5 mb-6"><p className="font-black text-amber-800 text-sm mb-3">💡 3 bước luyện phát âm hiệu quả</p><ol className="space-y-2">{["Nghe kỹ âm chuẩn từ người bản ngữ (YouTube, ELSA Speak)","Nhìn gương — quan sát hình dạng miệng và lưỡi","Ghi âm bản thân và so sánh — bước quan trọng nhất"].map((t,i)=>(<li key={i} className="flex gap-2 text-sm text-amber-700"><span className="w-5 h-5 rounded-full bg-amber-400 text-white text-xs flex items-center justify-center flex-shrink-0 font-bold">{i+1}</span><span>{t}</span></li>))}</ol></div>
            <div className="mb-6"><p className="font-black text-sky-900 text-base mb-4 flex items-center gap-2"><Zap size={16} className="text-sky-500" /> Chủ đề luyện phát âm</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-3">{PRONUNCIATION_TOPICS.map((t) => (<Link key={t.id} href="/blog/cach-phat-am-tieng-anh-ro-rang" className={`flex items-start gap-3 p-4 rounded-2xl border-2 bg-white ${t.color} transition-all hover:shadow-card group`}><span className="text-2xl flex-shrink-0">{t.icon}</span><div className="flex-1 min-w-0"><div className="flex items-center justify-between gap-2"><p className="font-black text-sky-900 text-sm">{t.title}</p><span className="text-xs font-bold text-sky-400 bg-sky-50 px-1.5 py-0.5 rounded-full">{t.tag}</span></div><p className="text-sky-500 text-xs mt-0.5">{t.desc}</p></div><ChevronRight size={14} className="text-sky-300 group-hover:text-sky-600 flex-shrink-0 mt-0.5" /></Link>))}</div></div>
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-6 text-center text-white"><p className="text-2xl mb-2">🎤</p><p className="font-black text-lg mb-1">Luyện phát âm mỗi ngày</p><p className="text-violet-200 text-sm mb-4">Đọc to bài học sau khi hoàn thành.</p><button onClick={() => setActiveTab("lessons")} className="bg-white text-violet-600 font-black px-6 py-2.5 rounded-xl text-sm">Vào học bài →</button></div>
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


  return (
    <motion.section initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: unitIdx * 0.06 }}>
      <div className="flex items-center gap-3 mb-3"><div className="w-9 h-9 rounded-lg bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center font-black text-sm flex-shrink-0">{String(unit.unit).padStart(2, "0")}</div><div><h2 className="font-display text-lg font-bold text-sky-900 leading-tight">{unit.title}</h2><p className="text-xs text-sky-400">{unit.description}</p></div></div>
      <div className="space-y-2 pl-12">{lessons.map((lesson: any, idx: number) => { if (!lesson) return null; const allPrev = allPath.flatMap((u: any) => u.unit < unit.unit ? u.lessonIds : u.unit === unit.unit ? u.lessonIds.slice(0, idx) : []); const locked = mounted && allPrev.length > 0 && !allPrev.every((id: string) => completed.includes(id)); const done = mounted && completed.includes(lesson.id); return <LessonRow key={lesson.id} lesson={lesson} locked={locked} done={done} />; })}</div>
    </motion.section>
  );
}

function LessonRow({ lesson, locked, done }: { lesson: any; locked: boolean; done: boolean }) {
  const inner = (<div className={`rounded-xl p-4 flex items-center gap-3 transition-all border-2 ${done ? "bg-sky-50 border-sky-300" : locked ? "bg-white border-sky-100 opacity-50" : "bg-white border-sky-200 hover:border-sky-400 hover:shadow-card"}`}><div className="flex-shrink-0">{done ? <CheckCircle2 className="w-6 h-6 text-sky-500" /> : locked ? <Lock className="w-6 h-6 text-sky-300" /> : <Circle className="w-6 h-6 text-sky-400" />}</div><div className="flex-1 min-w-0"><div className="flex items-center gap-2 mb-0.5"><span className="text-xs font-bold text-sky-300 uppercase">{lesson.level}</span><span className="text-xs font-bold text-sky-500">+{lesson.xpReward} XP</span></div><p className="font-bold text-sky-900 text-sm leading-tight">{lesson.title}</p><p className="text-xs text-sky-400 truncate mt-0.5">{lesson.subtitle}</p></div>{!locked && (<div className="flex items-center gap-0.5 text-xs font-bold text-sky-500 flex-shrink-0">{done ? "Học lại" : "Học"} <ChevronRight size={14} /></div>)}</div>);
  if (locked) return <div className="cursor-not-allowed">{inner}</div>;
  return <Link href={`/learn/beginner/${lesson.id}`}>{inner}</Link>;
}
