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
  "Từ vựng": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "Phương pháp": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "TOEIC": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "Mất gốc": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "Phát âm": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "Ngữ pháp": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "Giao tiếp": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "Lộ trình": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
  "Kinh nghiệm": "bg-ember-50 text-ember-400 dark:bg-ember-50 dark:text-ember-400",
};

const ALL_TAGS = ["Từ vựng", "Phương pháp", "TOEIC", "Mất gốc", "Phát âm", "Ngữ pháp", "Giao tiếp"];

// Thumbnail background & accent per category
const THUMB_THEMES: Record<string, { bg: string; text: string; pill: string }> = {
  vocab: { bg: "bg-paper-100", text: "text-ember-400", pill: "bg-ember-100 text-ember-400" },
  method: { bg: "bg-paper-100", text: "text-ember-400", pill: "bg-ember-100 text-ember-400" },
  toeic: { bg: "bg-paper-100", text: "text-ember-400", pill: "bg-ember-100 text-ember-400" },
  speak: { bg: "bg-paper-100", text: "text-ember-400", pill: "bg-ember-100 text-ember-400" },
  pronun: { bg: "bg-paper-100", text: "text-ember-400", pill: "bg-ember-100 text-ember-400" },
  exp: { bg: "bg-paper-100", text: "text-ember-400", pill: "bg-ember-100 text-ember-400" },
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
      className={`group flex flex-col bg-paper-50 border border-ink-300/20        rounded-2xl overflow-hidden hover:border-ink-300/40 hover:shadow-sm
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
          group-hover:text-ember-400 dark:group-hover:text-ember-400 transition-colors
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
          <p className="text-xs font-semibold tracking-widest uppercase text-ember-400 mb-1">
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
                ? "bg-ember-500 text-paper-100 border-ember-500 font-medium"
                : "bg-paper-50 text-ink-500 dark:text-ink-300 border-ink-300/30 hover:border-ink-300/60"
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
                  ? "bg-ember-500 text-paper-100 border-ember-500 font-medium"
                  : "bg-paper-50 text-ink-500 dark:text-ink-300 border-ink-300/30 hover:border-ink-300/60"
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
