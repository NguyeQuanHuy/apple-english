import type { Metadata, Viewport } from "next";
import { Be_Vietnam_Pro, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/top-bar";
import { ReadingProgress } from "@/components/reading-progress";
import { MobileNav } from "@/components/mobile-nav";

// Be Vietnam Pro: designed for Vietnamese diacritics. Used for both headings and body.
const sans = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});
// Patrick Hand: only for the teacher's red-pen corrections
const hand = Patrick_Hand({ subsets: ["latin", "vietnamese"], weight: "400", variable: "--font-hand", display: "swap" });

export const metadata: Metadata = {
  title: "Apple English — Học tiếng Anh từ con số 0",
  description: "Nền tảng học tiếng Anh cho người Việt mất gốc. Lộ trình A0→A2, TOEIC, và mini games để học mỗi ngày 10 phút.",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F7F9FC" },
    { media: "(prefers-color-scheme: dark)", color: "#0F1520" },
  ],
};

function Footer() {
  const learn = [
    { href: "/learn/beginner", label: "Lộ trình mất gốc" },
    { href: "/learn/toeic", label: "Luyện TOEIC" },
    { href: "/learn/topics", label: "Từ vựng theo chủ đề" },
    { href: "/games", label: "Mini games" },
    { href: "/dashboard", label: "Tiến độ của tôi" },
  ];
  const read = [
    { href: "/blog/tai-sao-hoc-tieng-anh-mai-khong-gioi", label: "Tại sao học mãi không giỏi?" },
    { href: "/blog/toeic-450-trong-2-thang", label: "TOEIC 450 trong 2 tháng" },
    { href: "/blog/hoc-tieng-anh-qua-phim", label: "Học tiếng Anh qua phim" },
    { href: "/blog", label: "Tất cả bài viết" },
  ];
  return (
    <footer className="border-t border-navy-900/10 dark:border-white/10 bg-white dark:bg-navy-900 mt-auto mb-16 md:mb-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-extrabold text-navy-900 dark:text-white mb-2">
            <span className="text-apple-500">Apple</span> English
          </p>
          <p className="text-[15px] text-navy-500 dark:text-paper-200 leading-relaxed max-w-xs">
            Học tiếng Anh miễn phí cho người Việt mất gốc, từ chữ cái đầu tiên đến giao tiếp tự tin.
          </p>
        </div>
        <nav aria-label="Học">
          <p className="font-bold text-navy-900 dark:text-white mb-3">Học</p>
          <ul className="space-y-2">
            {learn.map((i) => (
              <li key={i.href}><a href={i.href} className="text-[15px] text-navy-500 dark:text-paper-200 hover:text-apple-600 dark:hover:text-apple-500 transition-colors">{i.label}</a></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Bài viết">
          <p className="font-bold text-navy-900 dark:text-white mb-3">Bài viết</p>
          <ul className="space-y-2">
            {read.map((i) => (
              <li key={i.href}><a href={i.href} className="text-[15px] text-navy-500 dark:text-paper-200 hover:text-apple-600 dark:hover:text-apple-500 transition-colors">{i.label}</a></li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-5 border-t border-navy-900/10 dark:border-white/10 text-sm text-navy-400">
        © 2026 Apple English. Làm với ❤️ cho người Việt.
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${sans.variable} ${hand.variable}`} suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <ReadingProgress />
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
          <MobileNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
