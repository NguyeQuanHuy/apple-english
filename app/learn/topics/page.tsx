import Link from "next/link";
import { TOPICS } from "@/data/topics";
import { ChevronRight, Lightbulb } from "lucide-react";

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-sky-50 pb-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-blue-600 text-white px-4 pt-12 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="text-xs font-bold uppercase tracking-widest text-sky-200 mb-3">Theo chu de</div>
          <h1 className="font-display text-4xl md:text-5xl font-black mb-3">
            Hoc tieng Anh theo chu de
          </h1>
          <p className="text-sky-100 text-lg max-w-md leading-relaxed">
            {TOPICS.length} chu de thuc dung. Moi chu de co tu vung + cum giao tiep + quiz + meo thuc dung.
          </p>
          <div className="flex gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-black">{TOPICS.length}</p>
              <p className="text-sky-200 text-sm">Chu de</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-black">{TOPICS.reduce((a, t) => a + t.basicVocab.length + t.advancedVocab.length, 0)}</p>
              <p className="text-sky-200 text-sm">Tu vung</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-black">{TOPICS.reduce((a, t) => a + t.quiz.length, 0)}</p>
              <p className="text-sky-200 text-sm">Cau quiz</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-4">

        {/* Grid chu de */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          {TOPICS.map((t) => {
            const vocabCount = t.basicVocab.length + t.advancedVocab.length;
            return (
              <Link
                key={t.id}
                href={`/learn/topics/${t.id}`}
                className="bg-white border-2 border-sky-100 rounded-chunky p-5 hover:border-sky-400 hover:shadow-card transition-all active:scale-95 group"
              >
                <div className="flex items-start justify-between">
                  <span className="text-4xl">{t.emoji}</span>
                  <ChevronRight size={16} className="text-sky-300 group-hover:text-sky-600 mt-1 transition-colors" />
                </div>
                <p className="font-display text-xl font-bold text-sky-900 mt-3">{t.title}</p>
                <p className="text-sky-500 text-sm mt-1 leading-snug min-h-[2.5em]">{t.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-200">
                    {vocabCount} tu
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-200">
                    {t.phrases.length} cum
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-200">
                    {t.quiz.length} quiz
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Meo hoc */}
        <div className="bg-white border-2 border-sky-200 rounded-chunky p-5">
          <div className="flex items-center gap-2 text-sky-600 font-bold text-sm mb-3">
            <Lightbulb size={16} /> Meo hoc hieu qua
          </div>
          <p className="text-sky-700 text-sm leading-relaxed">
            Dung co hoc het 1 chu de trong 1 ngay. Moi chu de chia lam 3 buoi:
            (1) Tu vung co ban, (2) Tu vung nang cao + cum giao tiep, (3) Lam quiz.
            Lap lai sau 3 ngay de nho lau hon.
          </p>
        </div>

      </div>
    </div>
  );
}