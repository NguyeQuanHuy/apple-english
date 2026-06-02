import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TopBar } from "@/components/top-bar";

const display = Fraunces({
  subsets: ["latin", "vietnamese"],
  variable: "--font-display",
  display: "swap",
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  icons: { icon: "/favicon.svg" },
  title: "Apple English — Học tiếng Anh từ con số 0",
  description:
    "Nền tảng học tiếng Anh cho người Việt mất gốc. Lộ trình A0→A2, TOEIC, và mini games để học mỗi ngày 10 phút.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <body className="font-sans min-h-screen">
        <ThemeProvider>
          <TopBar />
          <main className="pb-20">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}


