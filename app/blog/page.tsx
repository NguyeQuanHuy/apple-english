"use client";
import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { POSTS, TAGS, formatPostDate, readingTime } from "@/lib/blog";
import type { BlogPost } from "@/data/blog.d";

function FeaturedPost({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block oli-paper rounded-[22px] border border-navy-900/10 dark:border-white/10 shadow-[0_24px_60px_-34px_rgba(21,32,51,0.45)] pl-16 pr-6 sm:pr-10 py-8 sm:py-10 focus-visible:outline focus-visible:outline-4 focus-visible:outline-apple-100"
    >
      <p className="font-hand text-apple-500 text-2xl mb-5" style={{ transform: "rotate(-2deg)" }}>Bài mới nhất</p>
      <div className="flex items-start gap-4 sm:gap-6">
        <span className="text-5xl sm:text-6xl leading-none flex-shrink-0 mt-1" aria-hidden="true">{post.emoji}</span>
        <div className="min-w-0">
          <h2 className="font-display text-2xl sm:text-[34px] font-extrabold leading-[1.15] tracking-[-0.015em] text-navy-900 dark:text-white mb-3 group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors [text-wrap:balance]">
            {post.title}
          </h2>
          <p className="text-lg text-navy-500 dark:text-paper-200 leading-relaxed mb-5 max-w-2xl">{post.summary}</p>
          <p className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-navy-400">
            <span>{formatPostDate(post.date)}</span>
            <span>{readingTime(post)}</span>
            <span className="inline-flex items-center gap-1 font-bold text-apple-600 dark:text-apple-500">
              Đọc bài <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}

function PostRow({ post }: { post: BlogPost }) {
  return (
    <li>
      <Link
        href={`/blog/${post.slug}`}
        className="group flex gap-4 sm:gap-5 py-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-apple-500 rounded-lg"
      >
        <span className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 grid place-items-center text-3xl flex-shrink-0" aria-hidden="true">
          {post.emoji}
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-sm font-semibold text-navy-400 mb-1">{(post.tags ?? []).join(" · ")}</span>
          <span className="block font-bold text-lg sm:text-xl leading-snug text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors mb-1.5">
            {post.title}
          </span>
          <span className="block text-[15px] text-navy-500 dark:text-paper-200 leading-relaxed line-clamp-2 mb-2">{post.summary}</span>
          <span className="block text-sm text-navy-400">{formatPostDate(post.date)} · {readingTime(post)}</span>
        </span>
      </Link>
    </li>
  );
}

export default function BlogIndex() {
  const [tag, setTag] = useState<string | null>(null);
  const filtered = useMemo(() => (tag ? POSTS.filter((p) => p.tags?.includes(tag)) : POSTS), [tag]);
  const [featured, ...rest] = filtered;
  const list = tag ? filtered : rest;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 md:pt-14 pb-24 md:pb-12">
      <header className="mb-8 max-w-2xl">
        <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.025em] mb-4">Bài viết</h1>
        <p className="text-lg text-navy-500 dark:text-paper-200">
          Kinh nghiệm và phương pháp học tiếng Anh cho người mất gốc, viết bằng tiếng Việt. {POSTS.length} bài, mỗi bài đọc trong vài phút.
        </p>
      </header>

      <div role="group" aria-label="Lọc theo chủ đề" className="flex flex-wrap gap-2 mb-10">
        {[null, ...TAGS].map((t) => {
          const active = tag === t;
          const count = t ? POSTS.filter((p) => p.tags?.includes(t)).length : POSTS.length;
          return (
            <button
              key={t ?? "all"}
              onClick={() => setTag(t)}
              aria-pressed={active}
              className={`px-4 py-2 rounded-full text-[15px] font-semibold transition-colors ${
                active
                  ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900"
                  : "bg-navy-900/[0.05] text-navy-700 hover:bg-navy-900/10 dark:bg-white/[0.07] dark:text-paper-100 dark:hover:bg-white/15"
              }`}
            >
              {t ?? "Tất cả"} <span className={active ? "opacity-60" : "text-navy-400"}>{count}</span>
            </button>
          );
        })}
      </div>

      {!tag && featured && (
        <div className="mb-6">
          <FeaturedPost post={featured} />
        </div>
      )}

      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 [&>li]:border-b [&>li]:border-navy-900/[0.08] dark:[&>li]:border-white/10">
        {list.map((p) => (
          <PostRow key={p.slug} post={p} />
        ))}
      </ul>
    </div>
  );
}
