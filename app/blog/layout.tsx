import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bài viết — Apple English",
  description: "Kinh nghiệm và phương pháp học tiếng Anh cho người Việt mất gốc: từ vựng, phát âm, ngữ pháp, TOEIC.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
