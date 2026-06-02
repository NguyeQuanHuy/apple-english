"use client";
import Link from "next/link";
import { useProgress, getLevel } from "@/lib/store";
import { ChevronRight, Star, Target, Hash, BookOpen } from "lucide-react";

const FEATURES = [
  {
    icon: "📚",
    title: "Mat goc",
    desc: "Hoc tu A0 - khong can nen tang truoc",
    href: "/learn/beginner",
    badge: "Pho bien nhat",
    badgeColor: "bg-sky-500 text-white",
    border: "border-sky-300 hover:border-sky-500",
  },
  {
    icon: "🎯",
    title: "TOEIC",
    desc: "Luyen 7 ky nang, mock test co gio dem nguoc",
    href: "/learn/toeic",
    badge: "Co mock test",
    badgeColor: "bg-blue-500 text-white",
    border: "border-blue-300 hover:border-blue-500",
  },
  {
    icon: "🗂️",
    title: "Chu de",
    desc: "Tu vung theo tinh huong thuc te hang ngay",
    href: "/learn/topics",
    badge: null,
    badgeColor: "",
    border: "border-sky-200 hover:border-sky-400",
  },
  {
    icon: "🎮",
    title: "Mini Games",
    desc: "Ghep tu, xep cau, quiz toc do - hoc ma vui",
    href: "/games",
    badge: "Vui nhat",
    badgeColor: "bg-indigo-500 text-white",
    border: "border-indigo-200 hover:border-indigo-400",
  },
];

const WHY_ITEMS = [
  { icon: "🇻🇳", text: "Giai thich bang tieng Viet, de hieu hon" },
  { icon: "🎮", text: "Gamified - streak, XP, achievements" },
  { icon: "📱", text: "Khong can dang ky, hoc ngay tren trinh duyet" },
  { icon: "🆓", text: "Hoan toan mien phi, khong quang cao" },
];

export default function HomePage() {
  const { xp, streak, completedLessons } = useProgress();
  const level = getLevel(xp);
  const hasStarted = xp > 0 || completedLessons.length > 0;

  return (
    <div className="min-h-screen bg-sky-50 pb-20">

      {/* Hero */}
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
            <Link href="/learn/beginner"
              className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 font-black px-8 py-4 rounded-chunky shadow-bump shadow-sky-700 active:shadow-none active:translate-y-1 transition-all text-base">
              Bat dau hoc ngay <ChevronRight size={18} />
            </Link>
            <Link href="/learn/toeic"
              className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-8 py-4 rounded-chunky border-2 border-white/30 hover:bg-white/30 transition-all text-base">
              Luyen TOEIC <Target size={16} />
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-6">

        {/* Stats */}
        {hasStarted && (
          <div className="bg-white rounded-chunky border-2 border-sky-100 shadow-card p-5 mb-6">
            <p className="text-xs font-bold text-sky-400 uppercase tracking-wide mb-3">Tien do cua ban</p>
            <div className="flex gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔥</span>
                <div>
                  <p className="text-xl font-black text-sky-900">{streak}</p>
                  <p className="text-xs text-sky-400">ngay streak</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                <div>
                  <p className="text-xl font-black text-sky-900">{xp}</p>
                  <p className="text-xs text-sky-400">XP tich luy</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">📖</span>
                <div>
                  <p className="text-xl font-black text-sky-900">{completedLessons.length}</p>
                  <p className="text-xs text-sky-400">bai da hoc</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏅</span>
                <div>
                  <p className="text-xl font-black text-sky-900">{level.name}</p>
                  <p className="text-xs text-sky-400">cap do hien tai</p>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-xs text-sky-400 mb-1">
                <span>Tien do len level tiep</span>
                <span>{Math.round(level.progress * 100)}%</span>
              </div>
              <div className="h-2 bg-sky-50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all"
                  style={{ width: `${level.progress * 100}%` }} />
              </div>
            </div>
          </div>
        )}

        {/* Feature cards */}
        <div className="mb-8">
          <h2 className="font-display text-2xl font-black text-sky-900 mb-4">Chon cach hoc cua ban</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => (
              <Link key={f.href} href={f.href}
                className={`relative flex flex-col gap-2 p-5 rounded-chunky border-2 bg-white ${f.border} hover:shadow-card transition-all active:scale-95`}>
                {f.badge && (
                  <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${f.badgeColor}`}>
                    {f.badge}
                  </span>
                )}
                <span className="text-3xl">{f.icon}</span>
                <p className="font-bold text-sky-900 text-base mt-1">{f.title}</p>
                <p className="text-sky-500 text-sm leading-relaxed">{f.desc}</p>
                <div className="flex items-center gap-1 text-sky-500 text-sm font-semibold mt-1">
                  Vao hoc <ChevronRight size={14} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Why */}
        <div className="bg-gradient-to-br from-sky-600 to-blue-700 rounded-chunky p-6 text-white mb-8">
          <h2 className="font-display text-xl font-black mb-5">Tai sao chon EnglishStart?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {WHY_ITEMS.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-xl">{item.icon}</span>
                <p className="text-sky-100 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border-2 border-sky-200 rounded-chunky p-8 text-center">
          <p className="text-3xl mb-3">🚀</p>
          <h2 className="font-display text-2xl font-black text-sky-900 mb-2">San sang bat dau chua?</h2>
          <p className="text-sky-500 mb-5 text-sm">Chi can 10 phut moi ngay - khong can dang ky, khong can tra phi.</p>
          <Link href="/learn/beginner"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-black px-8 py-4 rounded-chunky shadow-bump shadow-sky-700 active:shadow-none active:translate-y-1 transition-all">
            Bat dau ngay mien phi <ChevronRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
}