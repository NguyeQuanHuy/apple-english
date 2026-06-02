"use client";
import Link from "next/link";
import { Flame, Moon, Sparkles, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { useProgress } from "@/lib/store";
import { useEffect, useState } from "react";

export function TopBar() {
  const { theme, toggle } = useTheme();
  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-paper-50/80 dark:bg-ink-900/80 border-b border-ink-900/8 dark:border-paper-50/8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-bumpsm flex-shrink-0" style={{ boxShadow: "0 3px 0 0 #1d4ed8" }}><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" fill="none" /><ellipse cx="11" cy="11" rx="4" ry="9" stroke="white" strokeWidth="1.2" fill="none" /><line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="1.2" /><line x1="4" y1="7" x2="18" y2="7" stroke="white" strokeWidth="1" /><line x1="4" y1="15" x2="18" y2="15" stroke="white" strokeWidth="1" /><path d="M11 2 C9 5 8 8 8 11 C8 14 9 17 11 20" stroke="white" strokeWidth="0" fill="none" /><circle cx="14" cy="5" r="3.5" fill="#4ade80" /><path d="M14 3.5 C14 3.5 15.5 2 16 3 C15 3 15 4 14 5.5 C13 4 13 3 14 3.5Z" fill="#166534" /><path d="M14 3 C14.5 2 15.5 1.5 15.5 1.5" stroke="#166534" strokeWidth="0.8" strokeLinecap="round" /></svg></div>
          <span className="font-display text-xl font-black tracking-tight">
            Apple <span className="text-ember-500">English</span>
          </span>
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
          <button
            onClick={toggle}
            aria-label="Doi giao dien"
            className="p-2 rounded-xl hover:bg-ink-900/5 dark:hover:bg-paper-50/5 transition-colors"
          >
            {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
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