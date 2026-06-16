"use client";
import Link from "next/link";
import Image from "next/image";
import { Flame, Moon, Sparkles, Sun, Menu, X, BookOpen, Target, Globe, Gamepad2, BarChart2, FileText, Home } from "lucide-react";
import { useTheme } from "./theme-provider";
import { UserMenu } from "./UserMenu";
import { useProgress } from "@/lib/store";
import { useEffect, useState } from "react";

export function TopBar() {
  const { theme, toggle } = useTheme();
  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper-50/80 dark:bg-ink-900/80 border-b border-ink-900/8 dark:border-paper-50/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <div className="flex flex-col leading-none gap-0.5">
            <span className="text-[11px] font-semibold tracking-[0.25em] text-sky-400 uppercase">Learn English</span>
            <span className="font-display text-[22px] font-black tracking-tight bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">Apple English</span>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink href="/">Trang chủ</NavLink>
          <NavLink href="/learn/beginner">Mất gốc</NavLink>
          <NavLink href="/learn/toeic">TOEIC</NavLink>
          <NavLink href="/learn/topics">Chủ đề</NavLink>
          <NavLink href="/games">Mini Games</NavLink>
          <NavLink href="/dashboard">Tiến độ</NavLink>
          <NavLink href="/blog">Bài viết</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          {mounted && (
            <>
              <Stat icon={<Flame className="w-4 h-4" />} value={streak} label="ngay" color="text-ember-500" />
              <Stat icon={<Sparkles className="w-4 h-4" />} value={xp} label="XP" color="text-gold-500" />
            </>
          )}
          <UserMenu />
          <button onClick={toggle} aria-label="Doi giao dien" className="p-2 rounded-xl hover:bg-ink-900/5 dark:hover:bg-paper-50/5 transition-colors">
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          <button onClick={() => setMenuOpen(true)} className="p-2 rounded-xl hover:bg-ink-900/5 dark:hover:bg-paper-50/5 transition-colors" aria-label="Menu">
            <Menu className="w-5 h-5 text-ink-700 dark:text-paper-100" />
          </button>
        </div>
      </div>
    </header>

    {/* Drawer overlay */}
    {menuOpen && (
      <div className="fixed inset-0 z-50 flex justify-end">
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
        <div className="relative w-72 h-full bg-white dark:bg-zinc-900 shadow-2xl flex flex-col overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
            <div>
              <span className="text-xs font-semibold tracking-widest text-sky-400 uppercase block">Learn English</span>
              <span className="font-display text-lg font-black bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">Apple English</span>
            </div>
            <button onClick={() => setMenuOpen(false)} className="p-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          {mounted && (
            <div className="flex gap-3 px-5 py-4 border-b border-zinc-100 dark:border-zinc-800">
              <div className="flex-1 bg-orange-50 dark:bg-orange-950 rounded-xl p-3 text-center">
                <div className="text-lg font-black text-orange-500">{streak}</div>
                <div className="text-xs text-orange-400">🔥 Streak</div>
              </div>
              <div className="flex-1 bg-sky-50 dark:bg-sky-950 rounded-xl p-3 text-center">
                <div className="text-lg font-black text-sky-500">{xp}</div>
                <div className="text-xs text-sky-400">✨ XP</div>
              </div>
            </div>
          )}

          {/* Nav items */}
          <nav className="flex-1 px-3 py-4 space-y-1">
            {[
              { href: "/", icon: <Home className="w-4 h-4" />, label: "Trang chủ", color: "text-zinc-600" },
              { href: "/learn/beginner", icon: <BookOpen className="w-4 h-4" />, label: "Mất gốc A0→A2", color: "text-sky-600", badge: "Phổ biến" },
              { href: "/learn/toeic", icon: <Target className="w-4 h-4" />, label: "Luyện TOEIC", color: "text-indigo-600" },
              { href: "/learn/topics", icon: <Globe className="w-4 h-4" />, label: "Từ vựng chủ đề", color: "text-teal-600" },
              { href: "/games", icon: <Gamepad2 className="w-4 h-4" />, label: "Mini Games", color: "text-violet-600", badge: "Vui" },
              { href: "/dashboard", icon: <BarChart2 className="w-4 h-4" />, label: "Tiến độ", color: "text-emerald-600" },
              { href: "/blog", icon: <FileText className="w-4 h-4" />, label: "Bài viết", color: "text-amber-600" },
            ].map(item => (
              <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all group">
                <span className={item.color}>{item.icon}</span>
                <span className="flex-1 text-sm font-semibold text-zinc-700 dark:text-zinc-300 group-hover:text-zinc-900 dark:group-hover:text-white">{item.label}</span>
                {item.badge && <span className="text-xs bg-sky-100 dark:bg-sky-900 text-sky-600 dark:text-sky-300 px-2 py-0.5 rounded-full font-medium">{item.badge}</span>}
              </Link>
            ))}
          </nav>

          {/* Footer */}
          <div className="px-5 py-4 border-t border-zinc-100 dark:border-zinc-800">
            <p className="text-xs text-zinc-400 text-center">Apple English — Học tiếng Anh miễn phí ❤️</p>
          </div>
        </div>
      </div>
    )}
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="relative px-3 py-2 text-sm font-semibold text-ink-700 dark:text-paper-100 transition-all hover:text-sky-600 dark:hover:text-sky-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {children}
    </Link>
  );
}

function Stat({ icon, value, label, color }: { icon: React.ReactNode; value: number; label: string; color: string }) {
  return (
    <div className={`hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-ink-900/5 dark:bg-paper-50/5 text-sm font-bold ${color}`}>
      {icon}
      <span>{value}</span>
      <span className="text-ink-500 dark:text-paper-200 text-xs font-medium">{label}</span>
    </div>
  );
}