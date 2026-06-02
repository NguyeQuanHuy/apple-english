"use client";
import { BLOG_POSTS } from "@/data/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import { use } from "react";

type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; text: string; emoji?: string }
  | { type: "vocab"; word: string; meaning: string; example?: string }
  | { type: "compare"; left: string; right: string; leftLabel?: string; rightLabel?: string };

function renderBlock(block: ContentBlock, i: number) {
  switch (block.type) {
    case "paragraph":
      return <p key={i} className="text-ink-700 dark:text-paper-100 leading-relaxed text-[1.05rem]">{block.text}</p>;
    case "heading":
      return <h2 key={i} className="font-display text-2xl font-black tracking-tight mt-2">{block.text}</h2>;
    case "quote":
      return (
        <blockquote key={i} className="border-l-4 border-ember-500 pl-4 py-1 bg-ember-500/5 rounded-r-xl">
          <p className="text-ember-700 dark:text-ember-100 italic leading-relaxed">{block.text}</p>
        </blockquote>
      );
    case "list":
      return (
        <ul key={i} className="space-y-2">
          {block.items.map((item, j) => (
            <li key={j} className="flex gap-2 text-ink-700 dark:text-paper-100 leading-relaxed">
              <span className="text-ember-500 mt-1 flex-shrink-0">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div key={i} className="flex gap-3 p-4 bg-teal-500/10 border border-teal-500/20 rounded-2xl">
          <span className="text-2xl flex-shrink-0">{block.emoji ?? "💡"}</span>
          <p className="text-teal-700 dark:text-teal-400 leading-relaxed font-medium">{block.text}</p>
        </div>
      );
    case "vocab":
      return (
        <div key={i} className="p-4 bg-white/70 dark:bg-ink-900/40 border border-ink-900/8 dark:border-paper-50/8 rounded-2xl">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="font-display text-lg font-black text-ember-500">{block.word}</span>
            <span className="text-ink-500 dark:text-paper-200 text-sm">— {block.meaning}</span>
          </div>
          {block.example && <p className="text-sm text-ink-500 dark:text-paper-200 italic">"{block.example}"</p>}
        </div>
      );
    case "compare":
      return (
        <div key={i} className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-rose-500/10 border border-rose-500/20 rounded-xl text-center">
            <p className="text-xs font-bold text-rose-500 mb-1">{block.leftLabel ?? "❌ Sai"}</p>
            <p className="text-sm font-semibold text-ink-700 dark:text-paper-100">{block.left}</p>
          </div>
          <div className="p-3 bg-teal-500/10 border border-teal-500/20 rounded-xl text-center">
            <p className="text-xs font-bold text-teal-500 mb-1">{block.rightLabel ?? "✅ Đúng"}</p>
            <p className="text-sm font-semibold text-ink-700 dark:text-paper-100">{block.right}</p>
          </div>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen">
      {/* Back */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-8">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-500 dark:text-paper-200 hover:text-ember-500 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Quay lại bài viết
        </Link>
      </div>

      {/* Header */}
      <header className="max-w-2xl mx-auto px-4 sm:px-6 pt-8 pb-10">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags?.map((tag) => (
            <span key={tag} className="px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-bold">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-black tracking-tight leading-tight mb-4">
          {post.emoji} {post.title}
        </h1>
        <p className="text-ink-500 dark:text-paper-200 text-lg leading-relaxed mb-5">{post.summary}</p>
        <div className="flex items-center gap-4 text-sm text-ink-300 pb-6 border-b border-ink-900/8 dark:border-paper-50/8">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readingTime ?? "3 phút đọc"}</span>
          <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" />{post.date ?? ""}</span>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-2xl mx-auto px-4 sm:px-6 pb-12 space-y-5">
        {(post.content as ContentBlock[]).map((block, i) => renderBlock(block, i))}
      </article>

      {/* CTA */}
      <section className="max-w-2xl mx-auto px-4 sm:px-6 pb-20">
        <div className="p-8 bg-gradient-to-br from-ember-500/10 to-teal-500/10 border border-ember-500/20 rounded-2xl text-center">
          <p className="text-2xl mb-2">🚀</p>
          <h3 className="font-display text-xl font-black mb-2">Sẵn sàng luyện tập chưa?</h3>
          <p className="text-ink-500 dark:text-paper-200 text-sm mb-5">Áp dụng ngay những gì bạn vừa đọc vào bài học thực tế.</p>
          <Link href="/learn/beginner" className="btn-bump-ember inline-flex text-sm">
            Bắt đầu học ngay →
          </Link>
        </div>
      </section>
    </main>
  );
}
