import Link from "next/link";
import { TOEIC_THEMES, TOEIC_TESTS } from "@/data/toeic";
import { Clock, Hash, ChevronRight, Target, BookOpen, FileText, Zap } from "lucide-react";

function ThemeIcon({ id }: { id: string }) {
  const icons: Record<string, JSX.Element> = {
    office: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="4" y="8" width="20" height="15" rx="2" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
          <path d="M9 13 L19 13 M9 16.5 L15 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="11" y="4" width="6" height="5" rx="1" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.2)"/>
        </svg>
      </div>
    ),
    finance: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="9" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
          <path d="M14 8 L14 20 M11 10.5 C11 10.5 11 9 14 9 C17 9 17 11 14 12 C11 13 11 15 14 15 C17 15 17 17 14 17" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    travel: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M5 18 L14 6 L23 18" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <path d="M5 18 L23 18" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="14" cy="13" r="2.5" fill="white" opacity="0.9"/>
          <path d="M10 18 L10 22 M18 18 L18 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
  };
  return icons[id] ?? (
    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-md">
      <BookOpen size={20} className="text-white" />
    </div>
  );
}

export default function ToeicIndex() {
  return (
    <div className="min-h-screen bg-sky-50 pb-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 text-white px-4 pt-14 pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-5 uppercase tracking-widest">
            <Target size={12} /> TOEIC Prep
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-4 leading-tight">
            Luyện <span className="text-yellow-300">TOEIC</span>
          </h1>
          <p className="text-sky-100 text-lg max-w-lg mx-auto leading-relaxed mb-10">
            Học từ vựng theo chủ đề công sở, luyện đề mini có bấm giờ.<br/>Phù hợp band <strong className="text-white">400–700</strong>.
          </p>
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <p className="text-4xl font-black">{TOEIC_THEMES.length}</p>
              <p className="text-sky-200 text-sm mt-1">Chủ đề</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-4xl font-black">{TOEIC_THEMES.reduce((a, t) => a + t.words.length, 0)}</p>
              <p className="text-sky-200 text-sm mt-1">Từ vựng</p>
            </div>
            <div className="w-px bg-white/20" />
            <div className="text-center">
              <p className="text-4xl font-black">{TOEIC_TESTS.length}</p>
              <p className="text-sky-200 text-sm mt-1">Đề thi</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 -mt-8 space-y-10">

        {/* Lộ trình */}
        <div className="bg-white border-2 border-sky-100 rounded-2xl p-6 shadow-card">
          <p className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-4">📌 Lộ trình gợi ý</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex items-center gap-3 p-3 bg-sky-50 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-sky-500 text-white flex items-center justify-center font-black text-sm flex-shrink-0">1</div>
              <div><p className="font-bold text-sky-900 text-sm">Học từ vựng theo chủ đề</p><p className="text-sky-400 text-xs">Nắm chắc 30+ từ hay gặp</p></div>
            </div>
            <div className="hidden sm:flex items-center text-sky-300"><ChevronRight size={20}/></div>
            <div className="flex-1 flex items-center gap-3 p-3 bg-indigo-50 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-indigo-500 text-white flex items-center justify-center font-black text-sm flex-shrink-0">2</div>
              <div><p className="font-bold text-sky-900 text-sm">Làm đề mini có giờ</p><p className="text-sky-400 text-xs">Luyện tốc độ và chiến thuật</p></div>
            </div>
            <div className="hidden sm:flex items-center text-sky-300"><ChevronRight size={20}/></div>
            <div className="flex-1 flex items-center gap-3 p-3 bg-green-50 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center font-black text-sm flex-shrink-0">3</div>
              <div><p className="font-bold text-sky-900 text-sm">Ôn sai và lặp lại</p><p className="text-sky-400 text-xs">Mỗi ngày 15–20 phút</p></div>
            </div>
          </div>
        </div>

        {/* Từ vựng */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-sky-500 flex items-center justify-center flex-shrink-0">
              <BookOpen size={18} className="text-white" />
            </div>
            <div>
              <h2 className="font-display text-xl font-black text-sky-900">Từ vựng theo chủ đề</h2>
              <p className="text-sky-400 text-xs">Học flashcard + mini quiz cho từng chủ đề</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {TOEIC_THEMES.map((t) => (
              <Link key={t.id} href={`/learn/toeic/theme/${t.id}`}
                className="bg-white border-2 border-sky-100 rounded-2xl p-5 hover:border-sky-400 hover:shadow-card hover:-translate-y-0.5 transition-all active:scale-95 group">
                <ThemeIcon id={t.id} />
                <p className="font-black text-sky-900 text-base mt-3 mb-1">{t.title}</p>
                <p className="text-sky-500 text-xs leading-relaxed mb-3">{t.description}</p>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1 bg-sky-50 text-sky-600 text-xs font-bold px-2 py-1 rounded-full">
                    <Hash size={10} /> {t.words.length} từ
                  </span>
                  <ChevronRight size={14} className="text-sky-400 group-hover:text-sky-600 group-hover:translate-x-0.5 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Đề thi */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <FileText size={18} className="text-white" />
            </div>
            <div>
              <h2 className="font-display text-xl font-black text-sky-900">Đề mini có bấm giờ</h2>
              <p className="text-sky-400 text-xs">Luyện tốc độ làm bài, sát với đề thật</p>
            </div>
          </div>
          <div className="space-y-3">
            {TOEIC_TESTS.map((t, i) => (
              <Link key={t.id} href={`/learn/toeic/test/${t.id}`}
                className="bg-white border-2 border-sky-100 rounded-2xl p-5 flex items-center gap-4 hover:border-indigo-400 hover:shadow-card transition-all active:scale-95 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-400 to-blue-600 text-white grid place-items-center font-display text-2xl font-black flex-shrink-0 shadow-md">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-black text-sky-900 text-base">{t.title}</p>
                  <p className="text-sky-400 text-sm mt-0.5 truncate">{t.description}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs font-semibold text-sky-400"><Hash size={11} /> {t.questions.length} câu</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-sky-400"><Clock size={11} /> {Math.round(t.timeLimitSec / 60)} phút</span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-green-500"><Zap size={11} /> +{t.questions.length * 5} XP</span>
                  </div>
                </div>
                <div className="flex-shrink-0 px-4 py-2 bg-indigo-500 text-white text-sm font-bold rounded-xl group-hover:bg-indigo-600 transition-colors">
                  Làm đề
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tips */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-amber-200 rounded-2xl p-6">
          <p className="font-black text-amber-800 mb-3">💡 Mẹo học TOEIC hiệu quả</p>
          <ul className="space-y-2">
            <li className="flex gap-2 text-sm text-amber-700"><span>•</span><span>Học từ vựng theo chủ đề giúp nhớ lâu hơn học riêng lẻ</span></li>
            <li className="flex gap-2 text-sm text-amber-700"><span>•</span><span>Làm đề có bấm giờ để quen với áp lực thời gian thật</span></li>
            <li className="flex gap-2 text-sm text-amber-700"><span>•</span><span>Mỗi ngày 15–20 phút, kiên trì 2 tháng là đủ để đạt 450+</span></li>
          </ul>
        </div>

      </div>
    </div>
  );
}
