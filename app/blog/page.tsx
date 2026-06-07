import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export const metadata = {
  title: "Blog học tiếng Anh | EnglishStart",
  description: "Bài viết về phương pháp học tiếng Anh hiệu quả cho người Việt mất gốc.",
};

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  return (
    <main className="min-h-screen bg-[var(--paper)] px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="mb-10">
          <h1 className="font-display text-4xl font-bold text-[var(--ink)] mb-3">Blog học tiếng Anh</h1>
          <p className="text-[var(--ink-muted)] text-lg">Phương pháp, mẹo học, và kiến thức thực tế cho người Việt mất gốc.</p>
        </div>
        <div className="flex flex-col gap-6">
          {sorted.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article className="bg-white border border-[var(--paper-border)] rounded-2xl p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--ember-light)] text-[var(--ember)]">{post.category}</span>
                  <span className="text-xs text-[var(--ink-muted)]">{post.readTime} đọc · {new Date(post.publishedAt).toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
                <h2 className="font-display text-xl font-bold text-[var(--ink)] mb-2 leading-snug">{post.title}</h2>
                <p className="text-[var(--ink-muted)] text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-[var(--ember)]">Đọc tiếp →</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}