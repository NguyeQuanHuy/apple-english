import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/top-bar";

const display = Fraunces({ subsets: ["latin", "vietnamese"], variable: "--font-display", display: "swap" });
const sans = Plus_Jakarta_Sans({ subsets: ["latin", "vietnamese"], variable: "--font-sans", display: "swap" });

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Apple English — Học tiếng Anh từ con số 0",
  description: "Nền tảng học tiếng Anh cho người Việt mất gốc. Lộ trình A0→A2, TOEIC, và mini games để học mỗi ngày 10 phút.",
};

function Footer() {
  return (
    <footer className="bg-white dark:bg-ink-900 border-t border-sky-100 dark:border-sky-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-md flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" fill="none"/><ellipse cx="11" cy="11" rx="4" ry="9" stroke="white" strokeWidth="1.2" fill="none"/><line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="1.2"/><line x1="4" y1="7" x2="18" y2="7" stroke="white" strokeWidth="1"/><line x1="4" y1="15" x2="18" y2="15" stroke="white" strokeWidth="1"/><circle cx="14" cy="5" r="3.5" fill="#4ade80"/></svg>
              </div>
              <span className="font-display text-lg font-black"><span className="text-sky-600">Apple</span> <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">English</span></span>
            </div>
            <p className="text-sm text-ink-500 dark:text-paper-200 leading-relaxed mb-4">Nền tảng học tiếng Anh miễn phí cho người Việt mất gốc. Từ A0 lên giao tiếp tự tin.</p>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-sky-50 text-sky-600 text-xs font-bold rounded-full">🇹🇻 Việt Nam</span>
              <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full">🆓 Miễn phí</span>
            </div>
          </div>
          <div>
            <p className="font-black text-xs text-sky-900 dark:text-paper-50 uppercase tracking-widest mb-4">Học</p>
            <ul className="space-y-2.5">
              {[
                { href: "/learn/beginner", label: "Mất gốc A0→A2" },
                { href: "/learn/toeic", label: "Luyện TOEIC" },
                { href: "/learn/topics", label: "Chủ đề thực tế" },
                { href: "/games", label: "Mini Games" },
                { href: "/dashboard", label: "Tiến độ" },
              ].map((item) => (
                <li key={item.href}><a href={item.href} className="text-sm text-ink-500 dark:text-paper-200 hover:text-sky-600 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-black text-xs text-sky-900 dark:text-paper-50 uppercase tracking-widest mb-4">Bài viết</p>
            <ul className="space-y-2.5">
              {[
                { href: "/blog/tai-sao-hoc-tieng-anh-mai-khong-gioi", label: "Tại sao mãi không giỏi?" },
                { href: "/blog/toeic-450-trong-2-thang", label: "TOEIC 450 trong 2 tháng" },
                { href: "/blog/hoc-tieng-anh-qua-phim", label: "Học qua phim" },
                { href: "/blog/30-thanh-ngu-pho-bien-tieng-anh", label: "30 thành ngữ phổ biến" },
                { href: "/blog", label: "Xem tất cả →" },
              ].map((item) => (
                <li key={item.href}><a href={item.href} className="text-sm text-ink-500 dark:text-paper-200 hover:text-sky-600 transition-colors">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-black text-xs text-sky-900 dark:text-paper-50 uppercase tracking-widest mb-4">Thông tin</p>
            <ul className="space-y-2.5">
              {["🇾🇳 Dành cho người Việt", "🇩🇪 Đã học ở Đức", "📚 Nội dung tiếng Việt", "🚀 Cập nhật liên tục"].map((t, i) => (
                <li key={i} className="text-sm text-ink-500 dark:text-paper-200">{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-sky-100 dark:border-sky-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-300">© 2026 Apple English. Miễn phí mãi mãi ❤️</p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ink-300">Made with ❤️ for người Việt</span>
            <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div><span className="text-xs text-green-500 font-semibold">Online</span></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={` `} } suppressHydrationWarning>
      <body className="font-sans min-h-screen flex flex-col">
        <ThemeProvider>
          <TopBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}