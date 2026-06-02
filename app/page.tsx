"use client";
import Link from "next/link";
import { useProgress, getLevel } from "@/lib/store";
import { ChevronRight, Star, Target } from "lucide-react";

function IconMatGoc() {
  return (
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center shadow-md flex-shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 21 L7 11 L14 5 L21 11 L21 21 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
        <rect x="11" y="14" width="6" height="7" rx="1" fill="white" opacity="0.9"/>
        <path d="M5 12 L14 5 L23 12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="20" cy="9" r="3" fill="#fde68a"/>
        <path d="M20 7.5 C20 7.5 21 6.5 21.5 7 C21 7 21 7.8 20 9 C19 7.8 19 7 20 7.5Z" fill="#065f46"/>
      </svg>
    </div>
  );
}

function IconToeic() {
  return (
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center shadow-md flex-shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="5" y="7" width="18" height="14" rx="2" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
        <path d="M9 12 L19 12 M9 15.5 L15 15.5 M9 19 L13 19" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="21" cy="8" r="3.5" fill="#fbbf24"/>
        <path d="M19.5 8 L20.5 9.2 L23 6.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

function IconChuDe() {
  return (
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-md flex-shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="4.5" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
        <circle cx="18" cy="10" r="4.5" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
        <circle cx="14" cy="19" r="4.5" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
        <circle cx="14" cy="13" r="2" fill="white" opacity="0.9"/>
      </svg>
    </div>
  );
}

function IconGames() {
  return (
    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-600 flex items-center justify-center shadow-md flex-shrink-0">
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="9" width="20" height="12" rx="4" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
        <path d="M10 12 L10 18 M7 15 L13 15" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="13" r="1.5" fill="white" opacity="0.9"/>
        <circle cx="21" cy="16" r="1.5" fill="white" opacity="0.9"/>
      </svg>
    </div>
  );
}
const FEATURES = [
  {
    Icon: IconMatGoc,
    title: "Mất gốc",
    subtitle: "Lộ trình A0 → A2",
    desc: "Từ bảng chữ cái đến giao tiếp cơ bản. Mỗi bài 5–10 phút, có giải thích tiếng Việt.",
    href: "/learn/beginner",
    badge: "Phổ biến nhất",
    badgeColor: "bg-sky-500 text-white",
    accent: "border-l-sky-400",
    tag: "20 bài học",
  },
  {
    Icon: IconToeic,
    title: "TOEIC",
    subtitle: "Band 400–700",
    desc: "Từ vựng theo chủ đề công sở, đề mini có bấm giờ. Chiến lược làm bài thực tế.",
    href: "/learn/toeic",
    badge: "Có mock test",
    badgeColor: "bg-indigo-500 text-white",
    accent: "border-l-indigo-400",
    tag: "3 chủ đề · 2 đề thi",
  },
  {
    Icon: IconChuDe,
    title: "Chủ đề",
    subtitle: "Tình huống thực tế",
    desc: "Du lịch, công việc, đời sống, công nghệ... Từ vựng + cụm giao tiếp + quiz.",
    href: "/learn/topics",
    badge: null,
    badgeColor: "",
    accent: "border-l-teal-400",
    tag: "4 chủ đề",
  },
  {
    Icon: IconGames,
    title: "Mini Games",
    subtitle: "Học mà vui",
    desc: "Ghép từ, xếp câu, quiz tốc độ, điền từ. Mỗi ván ~1 phút, kiếm XP nhanh nhất.",
    href: "/games",
    badge: "Vui nhất",
    badgeColor: "bg-violet-500 text-white",
    accent: "border-l-violet-400",
    tag: "4 trò chơi",
  },
];

const WHY_ITEMS = [
  { icon: "VN", title: "Giải thích tiếng Việt", desc: "Không bị mất phương hướng khi học" },
  { icon: "F", title: "Gamified mỗi ngày", desc: "Streak, XP, level — học như chơi game" },
  { icon: "Z", title: "Không cần đăng ký", desc: "Mở trình duyệt là học ngay, không rào cản" },
  { icon: "0", title: "Hoàn toàn miễn phí", desc: "Không quảng cáo, không phí ẩn" },
];
export default function HomePage() {
  const { xp, streak, completedLessons } = useProgress();
  const level = getLevel(xp);
  const hasStarted = xp > 0 || completedLessons.length > 0;

  return (
    <div className="min-h-screen bg-sky-50 pb-20">
      <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-blue-600 text-white px-4 pt-12 pb-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
            <Star size={12} fill="currentColor" /> Học tiếng Anh cho người Việt mất gốc
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4">
            Học tiếng Anh<br />
            <span className="text-yellow-300">không còn sợ nữa</span>
          </h1>
          <p className="text-sky-100 text-lg mb-8 leading-relaxed max-w-md mx-auto">
            Từ A0 lên giao tiếp tự tin — theo lộ trình rõ ràng,<br />
            giải thích tiếng Việt, vui như chơi game.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/learn/beginner" className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-black px-8 py-4 rounded-chunky shadow-bump shadow-sky-700 active:shadow-none active:translate-y-1 transition-all text-base">
              Bắt đầu học ngay <ChevronRight size={18} />
            </Link>
            <Link href="/learn/toeic" className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-8 py-4 rounded-chunky border-2 border-white/30 hover:bg-white/30 transition-all text-base">
              Luyện TOEIC <Target size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 -mt-6">
        {hasStarted && (
          <div className="bg-white rounded-chunky border-2 border-sky-100 shadow-card p-5 mb-6">
            <p className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-3">Tiến độ của bạn</p>
            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-2"><span className="text-2xl">🔥</span><div><p className="text-xl font-black text-sky-900">{streak}</p><p className="text-xs text-sky-400">ngày streak</p></div></div>
              <div className="flex items-center gap-2"><span className="text-2xl">⚡</span><div><p className="text-xl font-black text-sky-900">{xp}</p><p className="text-xs text-sky-400">XP tích lũy</p></div></div>
              <div className="flex items-center gap-2"><span className="text-2xl">📖</span><div><p className="text-xl font-black text-sky-900">{completedLessons.length}</p><p className="text-xs text-sky-400">bài đã học</p></div></div>
              <div className="flex items-center gap-2"><span className="text-2xl">🏅</span><div><p className="text-xl font-black text-sky-900">{level.name}</p><p className="text-xs text-sky-400">cấp độ hiện tại</p></div></div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-sky-400 mb-1"><span>Tiến độ lên level tiếp</span><span>{Math.round(level.progress * 100)}%</span></div>
              <div className="h-2 bg-sky-50 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all" style={{ width: `${level.progress * 100}%` }} /></div>
            </div>
          </div>
        )}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl font-black text-sky-900">Chọn cách học của bạn</h2>
            <span className="text-xs text-sky-400 font-semibold">4 lộ trình</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {FEATURES.map((f) => (
              <Link key={f.href} href={f.href}
                className={`group relative flex items-start gap-4 p-5 rounded-2xl border-2 border-l-4 bg-white ${f.accent} border-sky-100 hover:shadow-card hover:-translate-y-0.5 transition-all active:scale-95`}>
                {f.badge && <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${f.badgeColor}`}>{f.badge}</span>}
                <f.Icon />
                <div className="flex-1 min-w-0 pr-10">
                  <div className="flex items-baseline gap-2 mb-0.5">
                    <p className="font-black text-sky-900 text-base">{f.title}</p>
                    <span className="text-xs text-sky-400 font-semibold">{f.subtitle}</span>
                  </div>
                  <p className="text-sky-500 text-sm leading-relaxed mb-2">{f.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-400 bg-sky-50 px-2 py-0.5 rounded-full">{f.tag}</span>
                    <span className="flex items-center gap-0.5 text-xs font-bold text-sky-500 group-hover:text-sky-700">Vào học <ChevronRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="font-display text-2xl font-black text-sky-900 mb-4">Tại sao chọn Apple English?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {WHY_ITEMS.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-2xl border-2 border-sky-100 hover:border-sky-300 hover:shadow-card transition-all">
                <span className="text-3xl">{item.icon}</span>
                <p className="font-black text-sky-900 text-sm leading-tight">{item.title}</p>
                <p className="text-sky-400 text-xs leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl p-8 text-center text-white">
          <p className="text-3xl mb-3">🚀</p>
          <h2 className="font-display text-2xl font-black mb-2">Sẵn sàng bắt đầu chưa?</h2>
          <p className="text-sky-100 mb-5 text-sm">Chỉ cần 10 phút mỗi ngày — không cần đăng ký, không cần trả phí.</p>
          <Link href="/learn/beginner" className="inline-flex items-center gap-2 bg-white text-sky-600 font-black px-8 py-4 rounded-chunky shadow-bump shadow-sky-800 active:shadow-none active:translate-y-1 transition-all">
            Bắt đầu ngay miễn phí <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
