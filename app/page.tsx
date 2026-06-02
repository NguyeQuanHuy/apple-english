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
    title: "Mat goc",
    subtitle: "Lo trinh A0 -> A2",
    desc: "Tu bang chu cai den giao tiep co ban. Moi bai 5-10 phut, co giai thich tieng Viet.",
    href: "/learn/beginner",
    badge: "Pho bien nhat",
    badgeColor: "bg-sky-500 text-white",
    accent: "border-l-sky-400",
    tag: "20 bai hoc",
  },
  {
    Icon: IconToeic,
    title: "TOEIC",
    subtitle: "Band 400-700",
    desc: "Tu vung theo chu de cong so, de mini co bam gio. Chien luoc lam bai thuc te.",
    href: "/learn/toeic",
    badge: "Co mock test",
    badgeColor: "bg-indigo-500 text-white",
    accent: "border-l-indigo-400",
    tag: "3 chu de · 2 de thi",
  },
  {
    Icon: IconChuDe,
    title: "Chu de",
    subtitle: "Tinh huong thuc te",
    desc: "Du lich, cong viec, doi song, cong nghe... Tu vung + cum giao tiep + quiz.",
    href: "/learn/topics",
    badge: null,
    badgeColor: "",
    accent: "border-l-teal-400",
    tag: "4 chu de",
  },
  {
    Icon: IconGames,
    title: "Mini Games",
    subtitle: "Hoc ma vui",
    desc: "Ghep tu, xep cau, quiz toc do, dien tu. Moi van ~1 phut, kiem XP nhanh nhat.",
    href: "/games",
    badge: "Vui nhat",
    badgeColor: "bg-violet-500 text-white",
    accent: "border-l-violet-400",
    tag: "4 tro choi",
  },
];

const WHY_ITEMS = [
  { icon: "VN", title: "Giai thich tieng Viet", desc: "Khong bi mat phuong huong khi hoc" },
  { icon: "F", title: "Gamified moi ngay", desc: "Streak, XP, level - hoc nhu choi game" },
  { icon: "Z", title: "Khong can dang ky", desc: "Mo trinh duyet la hoc ngay, khong rao can" },
  { icon: "0", title: "Hoan toan mien phi", desc: "Khong quang cao, khong phi an" },
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
            <Star size={12} fill="currentColor" /> Hoc tieng Anh cho nguoi Viet mat goc
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-black leading-tight mb-4">
            Hoc tieng Anh<br />
            <span className="text-yellow-300">khong con so nua</span>
          </h1>
          <p className="text-sky-100 text-lg mb-8 leading-relaxed max-w-md mx-auto">
            Tu A0 len giao tiep tu tin - theo lo trinh ro rang,<br />
            giai thich tieng Viet, vui nhu choi game.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/learn/beginner" className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-black px-8 py-4 rounded-chunky shadow-bump shadow-sky-700 active:shadow-none active:translate-y-1 transition-all text-base">
              Bat dau hoc ngay <ChevronRight size={18} />
            </Link>
            <Link href="/learn/toeic" className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-8 py-4 rounded-chunky border-2 border-white/30 hover:bg-white/30 transition-all text-base">
              Luyen TOEIC <Target size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto px-4 -mt-6">
        {hasStarted && (
          <div className="bg-white rounded-chunky border-2 border-sky-100 shadow-card p-5 mb-6">
            <p className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-3">Tien do cua ban</p>
            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-2"><span className="text-2xl">🔥</span><div><p className="text-xl font-black text-sky-900">{streak}</p><p className="text-xs text-sky-400">ngay streak</p></div></div>
              <div className="flex items-center gap-2"><span className="text-2xl">⚡</span><div><p className="text-xl font-black text-sky-900">{xp}</p><p className="text-xs text-sky-400">XP tich luy</p></div></div>
              <div className="flex items-center gap-2"><span className="text-2xl">📖</span><div><p className="text-xl font-black text-sky-900">{completedLessons.length}</p><p className="text-xs text-sky-400">bai da hoc</p></div></div>
              <div className="flex items-center gap-2"><span className="text-2xl">🏅</span><div><p className="text-xl font-black text-sky-900">{level.name}</p><p className="text-xs text-sky-400">cap do hien tai</p></div></div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-sky-400 mb-1"><span>Tien do len level tiep</span><span>{Math.round(level.progress * 100)}%</span></div>
              <div className="h-2 bg-sky-50 rounded-full overflow-hidden"><div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all" style={{ width: `${level.progress * 100}%` }} /></div>
            </div>
          </div>
        )}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-2xl font-black text-sky-900">Chon cach hoc cua ban</h2>
            <span className="text-xs text-sky-400 font-semibold">4 lo trinh</span>
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
                    <span className="flex items-center gap-0.5 text-xs font-bold text-sky-500 group-hover:text-sky-700">Vao hoc <ChevronRight size={12} /></span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-8">
          <h2 className="font-display text-2xl font-black text-sky-900 mb-4">Tai sao chon Apple English?</h2>
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
          <h2 className="font-display text-2xl font-black mb-2">San sang bat dau chua?</h2>
          <p className="text-sky-100 mb-5 text-sm">Chi can 10 phut moi ngay - khong can dang ky, khong can tra phi.</p>
          <Link href="/learn/beginner" className="inline-flex items-center gap-2 bg-white text-sky-600 font-black px-8 py-4 rounded-chunky shadow-bump shadow-sky-800 active:shadow-none active:translate-y-1 transition-all">
            Bat dau ngay mien phi <ChevronRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
