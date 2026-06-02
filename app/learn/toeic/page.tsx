import Link from "next/link";
import { TOEIC_THEMES, TOEIC_TESTS } from "@/data/toeic";
import { Clock, Hash, ChevronRight, Target, BookOpen } from "lucide-react";

export default function ToeicIndex() {
  return (
    <div className="min-h-screen bg-sky-50 pb-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-500 to-blue-600 text-white px-4 pt-12 pb-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            <Target size={12} /> TOEIC PREP
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black mb-3">
            Luyen TOEIC
          </h1>
          <p className="text-sky-100 text-lg max-w-md mx-auto leading-relaxed">
            Hoc tu vung theo chu de cong so, lam de mini co bam gio. Phu hop band 400 - 700.
          </p>
          <div className="flex justify-center gap-6 mt-8">
            <div className="text-center">
              <p className="text-3xl font-black">{TOEIC_THEMES.length}</p>
              <p className="text-sky-200 text-sm">Chu de</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-black">{TOEIC_THEMES.reduce((a, t) => a + t.words.length, 0)}</p>
              <p className="text-sky-200 text-sm">Tu vung</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-black">{TOEIC_TESTS.length}</p>
              <p className="text-sky-200 text-sm">De thi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-6">

        {/* Tu vung section */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={18} className="text-sky-600" />
            <h2 className="font-display text-xl font-bold text-sky-900">Tu vung theo chu de</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {TOEIC_THEMES.map((t) => (
              <Link
                key={t.id}
                href={`/learn/toeic/theme/${t.id}`}
                className="bg-white border-2 border-sky-100 rounded-chunky p-5 hover:border-sky-400 hover:shadow-card transition-all active:scale-95 group"
              >
                <div className="flex items-start justify-between">
                  <span className="text-3xl">{t.emoji}</span>
                  <ChevronRight size={16} className="text-sky-400 group-hover:text-sky-600 mt-1 transition-colors" />
                </div>
                <p className="font-bold text-sky-900 text-base mt-3">{t.title}</p>
                <p className="text-sky-600 text-sm mt-1 leading-relaxed">{t.description}</p>
                <div className="mt-3 inline-flex items-center gap-1 bg-sky-50 text-sky-600 text-xs font-bold px-2 py-1 rounded-full">
                  <Hash size={10} /> {t.words.length} tu
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* De thi section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Clock size={18} className="text-sky-600" />
            <h2 className="font-display text-xl font-bold text-sky-900">De mini co bam gio</h2>
          </div>
          <div className="space-y-3">
            {TOEIC_TESTS.map((t, i) => (
              <Link
                key={t.id}
                href={`/learn/toeic/test/${t.id}`}
                className="bg-white border-2 border-sky-100 rounded-chunky p-5 flex items-center gap-4 hover:border-sky-400 hover:shadow-card transition-all active:scale-95 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 text-white grid place-items-center font-display text-2xl font-black flex-shrink-0">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-sky-900 text-base">{t.title}</p>
                  <p className="text-sky-500 text-sm mt-0.5 truncate">{t.description}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs font-semibold text-sky-400">
                      <Hash size={11} /> {t.questions.length} cau
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-sky-400">
                      <Clock size={11} /> {Math.round(t.timeLimitSec / 60)} phut
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm font-bold text-sky-500 group-hover:text-sky-700 flex-shrink-0">
                  Lam de <ChevronRight size={16} />
                </div>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}