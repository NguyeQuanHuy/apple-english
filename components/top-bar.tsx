"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Flame, Moon, Sparkles, Sun, Menu, X, BookOpen, Target, Globe, Gamepad2, BarChart2, FileText, Home } from "lucide-react";
import { useTheme } from "./theme-provider";
import { UserMenu } from "./UserMenu";
import { useProgress } from "@/lib/store";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/", label: "Trang chủ", short: "Trang chủ", Icon: Home },
  { href: "/learn/beginner", label: "Lộ trình mất gốc", short: "Mất gốc", Icon: BookOpen },
  { href: "/learn/toeic", label: "Luyện TOEIC", short: "TOEIC", Icon: Target },
  { href: "/learn/topics", label: "Từ vựng theo chủ đề", short: "Chủ đề", Icon: Globe },
  { href: "/games", label: "Mini games", short: "Games", Icon: Gamepad2 },
  { href: "/dashboard", label: "Tiến độ của tôi", short: "Tiến độ", Icon: BarChart2 },
  { href: "/blog", label: "Bài viết", short: "Bài viết", Icon: FileText },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-500" aria-label="Apple English, về trang chủ">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true">
        <path d="M17 10.5c-2.4-2.2-8.5-2.6-10.6 2.6-2 5 .6 12.4 4.3 15.3 2 1.6 3.8 1.2 6.3.2 2.5 1 4.3 1.4 6.3-.2 3.7-2.9 6.3-10.3 4.3-15.3-2.1-5.2-8.2-4.8-10.6-2.6Z" fill="#E5484D" />
        <path d="M17 10.5c.2-3 1.6-5.6 4.2-7" stroke="#22304A" strokeWidth="2" strokeLinecap="round" fill="none" />
        <path d="M18.3 6.3c2.2-2.6 5.6-2.4 7.4-1.3-1.4 2.2-4.6 3.4-7.4 1.3Z" fill="#2F9E5B" />
        <path d="M10.8 15.4c.5-1.6 1.7-2.6 3-2.9" stroke="white" strokeOpacity=".6" strokeWidth="1.8" strokeLinecap="round" fill="none" />
      </svg>
      <span className="font-display text-[20px] font-extrabold tracking-[-0.01em] text-navy-900 dark:text-white">
        Apple <span className="text-apple-500">English</span>
      </span>
    </Link>
  );
}

export function TopBar() {
  const { theme, toggle } = useTheme();
  const pathname = usePathname() || "/";
  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => setMenuOpen(false), [pathname]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <header className="sticky top-0 z-40 backdrop-blur-md bg-[rgb(var(--bg)/0.85)] border-b border-navy-900/[0.07] dark:border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Điều hướng chính">
            {NAV.slice(1).map((n) => (
              <Link
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={`px-3 py-2 rounded-xl text-[15px] font-semibold transition-colors ${
                  isActive(n.href)
                    ? "text-navy-900 bg-navy-900/[0.06] dark:text-white dark:bg-white/10"
                    : "text-navy-500 hover:text-navy-900 dark:text-paper-200 dark:hover:text-white"
                }`}
              >
                {n.short}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-1.5">
            {mounted && (
              <>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-sm font-bold text-apple-600 dark:text-apple-500 bg-apple-50 dark:bg-apple-500/15" title={`${streak} ngày học liên tiếp`}>
                  <Flame className="w-4 h-4" fill="currentColor" /> {streak}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-sm font-bold text-amber-700 dark:text-hl-300 bg-hl-200/70 dark:bg-hl-300/15" title={`${xp} XP tích luỹ`}>
                  <Sparkles className="w-4 h-4" /> {xp}
                </span>
              </>
            )}
            <UserMenu />
            <button onClick={toggle} aria-label={theme === "light" ? "Bật giao diện tối" : "Bật giao diện sáng"} className="p-2 rounded-xl text-navy-500 dark:text-paper-200 hover:bg-navy-900/5 dark:hover:bg-white/10 transition-colors">
              {theme === "light" ? <Moon className="w-[18px] h-[18px]" /> : <Sun className="w-[18px] h-[18px]" />}
            </button>
            <button onClick={() => setMenuOpen(true)} className="lg:hidden p-2 rounded-xl text-navy-700 dark:text-paper-100 hover:bg-navy-900/5 dark:hover:bg-white/10 transition-colors" aria-label="Mở menu">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="absolute inset-0 bg-navy-900/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="relative w-[18rem] max-w-[85vw] h-full bg-white dark:bg-navy-900 shadow-2xl flex flex-col overflow-y-auto">
            <div className="flex items-center justify-between px-5 h-16 border-b border-navy-900/[0.07] dark:border-white/10">
              <Logo />
              <button onClick={() => setMenuOpen(false)} className="p-2 rounded-xl hover:bg-navy-900/5 dark:hover:bg-white/10" aria-label="Đóng menu">
                <X className="w-5 h-5" />
              </button>
            </div>
            {mounted && (
              <div className="grid grid-cols-2 gap-3 px-5 py-4 border-b border-navy-900/[0.07] dark:border-white/10">
                <div className="rounded-xl bg-apple-50 dark:bg-apple-500/15 p-3">
                  <p className="text-lg font-extrabold text-apple-600 dark:text-apple-500">{streak} ngày</p>
                  <p className="text-xs text-navy-500 dark:text-paper-200">học liên tiếp</p>
                </div>
                <div className="rounded-xl bg-hl-200/70 dark:bg-hl-300/15 p-3">
                  <p className="text-lg font-extrabold text-amber-700 dark:text-hl-300">{xp} XP</p>
                  <p className="text-xs text-navy-500 dark:text-paper-200">tích luỹ</p>
                </div>
              </div>
            )}
            <nav className="flex-1 px-3 py-3 space-y-0.5">
              {NAV.map(({ href, label, Icon }) => (
                <Link
                  key={href}
                  href={href}
                  aria-current={isActive(href) ? "page" : undefined}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-[15px] font-semibold transition-colors ${
                    isActive(href) ? "bg-apple-50 text-apple-600 dark:bg-apple-500/15 dark:text-apple-500" : "text-navy-700 dark:text-paper-100 hover:bg-navy-900/[0.04] dark:hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-[18px] h-[18px]" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
