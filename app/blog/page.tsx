"use client";
import Link from "next/link";
import { useState } from "react";
import { BLOG_POSTS } from "@/data/blog";
import { BookOpen, Clock, ArrowRight } from "lucide-react";

const ALL_TAGS = Array.from(new Set(BLOG_POSTS.flatMap((p) => p.tags ?? [])));

export default function BlogPage() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active ? BLOG_POSTS.filter((p) => p.tags?.includes(active)) : BLOG_POSTS;

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pt-14 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-600 text-xs font-bold uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5" /> Bài viết
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-black tracking-tight leading-tight mb-3">
          Góc học tiếng Anh <span className="text-sky-500">thực tế</span>
        </h1>
        <p className="text-ink-500 dark:text-paper-200 text-lg leading-relaxed">
          Mẹo hay, kinh nghiệm thực chiến cho người Việt mất gốc muốn lấy lại tiếng Anh.
        </p>
      </section>

      {/* Filter tags */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => setActive(null)}
            className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
              active === null
                ? "bg-sky-500 text-white"
                : "bg-ink-900/5 dark:bg-paper-50/5 text-ink-700 dark:text-paper-100 hover:bg-sky-500/10"
            }`}
          >
            Tất cả
          </button>
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag === active ? null : tag)}
              className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                active === tag
                  ? "bg-sky-500 text-white"
                  : "bg-ink-900/5 dark:bg-paper-50/5 text-ink-700 dark:text-paper-100 hover:bg-sky-500/10"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Cards */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="flex flex-col gap-4">
          {filtered.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block bg-white/60 dark:bg-ink-900/40 border border-ink-900/8 dark:border-paper-50/8 rounded-2xl p-6 hover:shadow-card transition-all hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {post.tags?.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="font-display text-xl font-black tracking-tight leading-snug mb-2 group-hover:text-sky-500 transition-colors">
                    {post.emoji} {post.title}
                  </h2>
                  <p className="text-ink-500 dark:text-paper-200 text-sm leading-relaxed line-clamp-2">
                    {post.summary}
                  </p>
                  <div className="flex items-center gap-3 mt-3 text-xs text-ink-300 dark:text-ink-300">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readingTime ?? "3 phút đọc"}
                    </span>
                    {post.date && <span>{post.date}</span>}
                  </div>
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-ember-500/10 grid place-items-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-ink-300">
            <p className="text-4xl mb-3">🔍</p>
            <p className="font-semibold">Không có bài viết nào với tag này.</p>
          </div>
        )}
      </section>
    </main>
  );
}

