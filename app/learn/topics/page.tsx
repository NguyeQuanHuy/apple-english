import Link from "next/link";
import { TOPICS } from "@/data/topics";
import { ChevronRight, Lightbulb, BookOpen, MessageCircle, HelpCircle } from "lucide-react";

function TopicIcon({ id }: { id: string }) {
  const map: Record<string, JSX.Element> = {
    travel: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M5 20 L15 7 L25 20 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <path d="M3 20 L27 20" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="15" cy="14" r="2.5" fill="white" opacity="0.9"/>
          <path d="M11 20 L11 24 M19 20 L19 24" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    business: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="9" width="22" height="16" rx="2" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
          <path d="M10 9 L10 6 C10 5 11 5 11 5 L19 5 C19 5 20 5 20 6 L20 9" stroke="white" strokeWidth="1.5"/>
          <path d="M10 15 L20 15 M10 19 L16 19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    daily: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="5" y="7" width="20" height="18" rx="2" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
          <path d="M10 5 L10 9 M20 5 L20 9" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M9 15 L13 19 L21 12" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    tech: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <rect x="4" y="6" width="22" height="15" rx="2" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
          <path d="M10 24 L20 24 M15 21 L15 24" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M9 12 L12 15 L9 18 M14 18 L19 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    health: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 24 C15 24 5 17 5 11 C5 8 7.5 6 10.5 6 C12.5 6 14 7 15 8.5 C16 7 17.5 6 19.5 6 C22.5 6 25 8 25 11 C25 17 15 24 15 24Z" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
        </svg>
      </div>
    ),
    food: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <circle cx="15" cy="15" r="9" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
          <path d="M10 12 C10 12 10 9 13 9 C16 9 15 12 15 12" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M10 15 L20 15" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M11 18 C11 18 13 21 15 21 C17 21 19 18 19 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    education: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M15 5 L27 11 L15 17 L3 11 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <path d="M7 13.5 L7 20 C7 20 11 23 15 23 C19 23 23 20 23 20 L23 13.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    shopping: (
      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-md flex-shrink-0">
        <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
          <path d="M8 8 L6 4 M8 8 L10 20 L20 20 L22 8 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <path d="M11 8 C11 8 11 5 15 5 C19 5 19 8 19 8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="12" cy="23" r="1.5" fill="white"/>
          <circle cx="19" cy="23" r="1.5" fill="white"/>
        </svg>
      </div>
    ),
  };
  return map[id] ?? (
    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-md flex-shrink-0">
      <BookOpen size={22} className="text-white" />
    </div>
  );
}

export default function TopicsPage() {
  return (
    <div className="min-h-screen bg-sky-50 pb-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-blue-600 text-white px-4 pt-14 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-xs font-bold uppercase tracking-widest text-sky-200 mb-3">Theo chủ đề</div>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-4 leading-tight">
            Học tiếng Anh <span className="text-yellow-300">theo tình huống</span>
          </h1>
          <p className="text-sky-100 text-lg max-w-lg mx-auto leading-relaxed mb-10">
            Mỗi chủ đề có từ vựng + cụm giao tiếp + quiz + mẹo thực dụng.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-black">{TOPICS.length}</p>
              <p className="text-sky-200 text-sm mt-1">Chủ đề</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-4xl font-black">{TOPICS.reduce((a, t) => a + t.basicVocab.length + t.advancedVocab.length, 0)}</p>
              <p className="text-sky-200 text-sm mt-1">Từ vựng</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-4xl font-black">{TOPICS.reduce((a, t) => a + t.quiz.length, 0)}</p>
              <p className="text-sky-200 text-sm mt-1">Câu quiz</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-8 space-y-8">

        {/* Grid chủ đề */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {TOPICS.map((t) => {
            const vocabCount = t.basicVocab.length + t.advancedVocab.length;
            return (
              <Link key={t.id} href={`/learn/topics/${t.id}`}
                className="bg-white border-2 border-sky-100 rounded-2xl p-5 hover:border-sky-400 hover:shadow-card hover:-translate-y-0.5 transition-all active:scale-95 group">
                <div className="flex items-start gap-4">
                  <TopicIcon id={t.id} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-lg font-black text-sky-900 leading-tight">{t.title}</p>
                      <ChevronRight size={16} className="text-sky-300 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                    </div>
                    <p className="text-sky-500 text-sm mt-1 leading-snug">{t.tagline}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-sky-50 text-sky-600 text-xs font-bold border border-sky-200">
                        <BookOpen size={9} /> {vocabCount} từ
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold border border-blue-200">
                        <MessageCircle size={9} /> {t.phrases.length} cụm
                      </span>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold border border-indigo-200">
                        <HelpCircle size={9} /> {t.quiz.length} quiz
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mẹo học */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-amber-200 rounded-2xl p-6">
          <div className="flex items-center gap-2 text-amber-700 font-black mb-3">
            <Lightbulb size={18} /> Mẹo học hiệu quả
          </div>
          <p className="text-amber-700 text-sm leading-relaxed">
            Đừng cố học hết 1 chủ đề trong 1 ngày. Mỗi chủ đề chia làm 3 buổi:
            (1) Từ vựng cơ bản, (2) Từ vựng nâng cao + cụm giao tiếp, (3) Làm quiz.
            Lặp lại sau 3 ngày để nhớ lâu hơn.
          </p>
        </div>

      </div>
    </div>
  );
}
