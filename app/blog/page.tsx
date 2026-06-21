"use client";

import { useState } from "react";
import Link from "next/link";

// ========== Types & Data ==========

type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  readTime: number;
  date: string;
  emoji: string;
  thumbColor: string;
  thumbAccent: string;
  featured?: boolean;
};

// Tag color map — match với theme của Apple English
const TAG_STYLES: Record<string, string> = {
  "Từ vựng":     "bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300",
  "Phương pháp": "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
  "TOEIC":       "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "Mất gốc":     "bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300",
  "Phát âm":     "bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300",
  "Ngữ pháp":    "bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300",
  "Giao tiếp":   "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
  "Lộ trình":    "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-700",
  "Kinh nghiệm": "bg-teal-100 text-teal-800 dark:bg-teal-900/40 dark:text-teal-300",
};

const ALL_TAGS = ["Từ vựng", "Phương pháp", "TOEIC", "Mất gốc", "Phát âm", "Ngữ pháp", "Giao tiếp"];

// Thumbnail background & accent per category
const THUMB_THEMES: Record<string, { bg: string; text: string; pill: string }> = {
  vocab:   { bg: "bg-sky-50 dark:bg-sky-950/50",    text: "text-sky-700 dark:text-sky-300",    pill: "bg-sky-100 text-sky-800 dark:bg-sky-900/60 dark:text-sky-300" },
  method:  { bg: "bg-teal-50 dark:bg-teal-950/50",  text: "text-teal-700 dark:text-teal-300",  pill: "bg-teal-100 text-teal-800 dark:bg-teal-900/60 dark:text-teal-300" },
  toeic:   { bg: "bg-amber-50 dark:bg-amber-950/50",text: "text-amber-700 dark:text-amber-300",pill: "bg-amber-100 text-amber-800 dark:bg-amber-900/60 dark:text-amber-300" },
  speak:   { bg: "bg-violet-50 dark:bg-violet-950/50",text: "text-violet-700 dark:text-violet-300",pill: "bg-violet-100 text-violet-800 dark:bg-violet-900/60 dark:text-violet-300" },
  pronun:  { bg: "bg-orange-50 dark:bg-orange-950/50",text: "text-orange-700 dark:text-orange-300",pill: "bg-orange-100 text-orange-800 dark:bg-orange-900/60 dark:text-orange-300" },
  exp:     { bg: "bg-emerald-50 dark:bg-emerald-950/50",text: "text-emerald-700 dark:text-emerald-300",pill: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300" },
};

// Sample posts — thay bằng BLOG_POSTS thực của bạn
const POSTS: BlogPost[] = [
  {
    slug: "tai-sao-quen-tu-vung",
    title: "Tại sao nao bạn quên từ vựng sau 24 giờ và cách khắc phục",
    excerpt: "Học 20 từ hôm nay, sang mai quên sạch? Đây không phải lỗi của bạn.",
    tags: ["Phương pháp", "Từ vựng"],
    readTime: 6,
    date: "7 tháng 6, 2026",
    emoji: "🧠",
    thumbColor: "method",
    thumbAccent: "Spaced Repetition",
    featured: true,
  },
  {
    slug: "hoc-tieng-anh-tu-a0",
    title: "Học tiếng Anh từ A0: 50 câu đầu tiên cần nhớ",
    excerpt: "Chưa biết bắt đầu từ đâu? Đây là 50 câu tiếng Anh cơ bản nhất.",
    tags: ["Mất gốc", "Từ vựng"],
    readTime: 8,
    date: "7 tháng 6, 2026",
    emoji: "💬",
    thumbColor: "speak",
    thumbAccent: "A0 → A1",
  },
  {
    slug: "cach-phat-am-ro-rang",
    title: "Cách phát âm tiếng Anh rõ ràng",
    excerpt: "Phát âm sai khiến người nghe không hiểu. Hướng dẫn từng bước để phát âm chuẩn.",
    tags: ["Phát âm", "Phương pháp"],
    readTime: 6,
    date: "4 tháng 6, 2026",
    emoji: "🎤",
    thumbColor: "pronun",
    thumbAccent: "IPA · Chuẩn giọng",
  },
  {
    slug: "toeic-450-trong-2-thang",
    title: "TOEIC 450 điểm trong 2 tháng — kế hoạch ôn thi thực tế",
    excerpt: "Kế hoạch ôn TOEIC 450 trong 2 tháng dành cho người mất gốc.",
    tags: ["TOEIC", "Lộ trình"],
    readTime: 6,
    date: "3 tháng 6, 2026",
    emoji: "🎯",
    thumbColor: "toeic",
    thumbAccent: "450+ điểm",
  },
  {
    slug: "30-thanh-ngu-pho-bien",
    title: "30 thành ngữ phổ biến nhất trong tiếng Anh",
    excerpt: "Nói chuyện như người bản ngữ với 30 idioms thường dùng nhất.",
    tags: ["Từ vựng", "Giao tiếp"],
    readTime: 7,
    date: "3 tháng 6, 2026",
    emoji: "🗣️",
    thumbColor: "speak",
    thumbAccent: "30 idioms",
  },
  {
    slug: "hoc-khi-khi-khuyet-giong-noi",
    title: "Học tiếng Anh khi bị khiếm khuyết về giọng nói — bạn vẫn làm được",
    excerpt: "Không nói được hoặc nói khó khăn không có nghĩa là bạn không học được.",
    tags: ["Kinh nghiệm", "Phương pháp"],
    readTime: 7,
    date: "4 tháng 6, 2026",
    emoji: "♿",
    thumbColor: "exp",
    thumbAccent: "Accessibility",
  },
];

// ========== Sub-components ==========

function TagBadge({ tag }: { tag: string }) {
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full ${TAG_STYLES[tag] ?? "bg-gray-100 text-gray-700"}`}>
      {tag}
    </span>
  );
}

function CardThumbnail({ post, featured }: { post: BlogPost; featured?: boolean }) {
  const theme = THUMB_THEMES[post.thumbColor] ?? THUMB_THEMES.method;
  return (
    <div
      className={`${theme.bg} flex flex-col items-center justify-center gap-2 w-full
        ${featured ? "aspect-[2/1]" : "aspect-square"}`}
    >
      <span className={`${featured ? "text-5xl" : "text-4xl"}`}>{post.emoji}</span>
      <span className={`text-xs font-medium px-3 py-1 rounded-full ${theme.pill}`}>
        {post.thumbAccent}
      </span>
    </div>
  );
}

function BlogCard({ post, featured }: { post: BlogPost; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group flex flex-col bg-white dark:bg-paper-50/5 border border-ink-300/20
        rounded-2xl overflow-hidden hover:border-ink-300/40 hover:shadow-sm
        transition-all duration-200 ${featured ? "col-span-2" : ""}`}
    >
      <CardThumbnail post={post} featured={featured} />
      <div className="flex flex-col flex-1 gap-2.5 p-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {post.tags.map((t) => <TagBadge key={t} tag={t} />)}
        </div>

        {/* Title */}
        <h2 className={`font-semibold leading-snug text-ink-700 dark:text-paper-100
          group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors
          ${featured ? "text-base" : "text-sm"}`}>
          {post.title}
        </h2>

        {/* Meta */}
        <div className="mt-auto flex items-center gap-1.5 text-xs text-ink-300 dark:text-ink-300">
          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" />
          </svg>
          <span>{post.readTime} phút đọc</span>
          <span className="w-1 h-1 rounded-full bg-ink-300/50 inline-block" />
          <span>{post.date}</span>
        </div>
      </div>
    </Link>
  );
}

// ========== Main Page ==========

export default function BlogPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? POSTS.filter((p) => p.tags.includes(activeTag))
    : POSTS;

  const featured = filtered.find((p) => p.featured && !activeTag);
  const rest = activeTag ? filtered : filtered.filter((p) => !p.featured);

  return (
    <main className="min-h-screen bg-paper-50 dark:bg-paper-50/5 pt-10 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold tracking-widest uppercase text-teal-600 dark:text-teal-400 mb-1">
            Apple English
          </p>
          <h1 className="text-3xl font-bold text-ink-700 dark:text-paper-100 mb-2">
            Bài viết
          </h1>
          <p className="text-ink-500 dark:text-ink-300 text-sm">
            Kiến thức tiếng Anh thực tế, dễ hiểu cho người mất gốc tiếng Anh
          </p>
        </div>

        {/* Filter bar */}
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveTag(null)}
            className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-150
              ${!activeTag
                ? "bg-teal-500 text-white border-teal-500 font-medium"
                : "bg-white dark:bg-paper-50/5 text-ink-500 dark:text-ink-300 border-ink-300/30 hover:border-ink-300/60"
              }`}
          >
            Tất cả
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`text-sm px-4 py-1.5 rounded-full border transition-all duration-150
                ${activeTag === tag
                  ? "bg-teal-500 text-white border-teal-500 font-medium"
                  : "bg-white dark:bg-paper-50/5 text-ink-500 dark:text-ink-300 border-ink-300/30 hover:border-ink-300/60"
                }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {featured && <BlogCard post={featured} featured />}
          {rest.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-ink-300">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-sm">Chưa có bài viết nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </main>
  );
}
