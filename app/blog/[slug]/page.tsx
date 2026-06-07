import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: `${post.title} | EnglishStart`, description: post.excerpt };
}

function renderMarkdown(md: string): string {
  return md
    .replace(/\|(.+)\|\n\|[-| ]+\|\n((?:\|.+\|\n?)*)/g, (_m: string, header: string, body: string) => {
      const ths = header.split("|").filter(Boolean).map((c: string) => `<th>${c.trim()}</th>`).join("");
      const rows = body.trim().split("\n").map((row: string) => {
        const tds = row.split("|").filter(Boolean).map((c: string) => `<td>${c.trim()}</td>`).join("");
        return `<tr>${tds}</tr>`;
      }).join("");
      return `<table><thead><tr>${ths}</tr></thead><tbody>${rows}</tbody></table>`;
    })
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m: string) => `<ul>${m}</ul>`)
    .replace(/^> (.+)$/gm, "<blockquote>$1</blockquote>")
    .split(/\n\n+/)
    .map((block: string) => block.startsWith("<") ? block : `<p>${block}</p>`)
    .join("\n");
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();
  const html = renderMarkdown(post.content);
  return (
    <main className="min-h-screen bg-[var(--paper)] px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ember)] mb-8 transition-colors">
          ← Tất cả bài viết
        </Link>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[var(--ember-light)] text-[var(--ember)]">{post.category}</span>
          <span className="text-xs text-[var(--ink-muted)]">{post.readTime} đọc · {new Date(post.publishedAt).toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" })}</span>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--ink)] leading-tight mb-4">{post.title}</h1>
        <p className="text-[var(--ink-muted)] text-lg leading-relaxed mb-10 border-l-4 border-[var(--ember)] pl-4">{post.excerpt}</p>
        <article className="prose-blog" dangerouslySetInnerHTML={{ __html: html }} />
        <div className="mt-12 p-6 bg-white border border-[var(--paper-border)] rounded-2xl text-center">
          <p className="font-display text-xl font-bold text-[var(--ink)] mb-2">Sẵn sàng luyện từ vựng đúng cách?</p>
          <p className="text-[var(--ink-muted)] text-sm mb-4">Áp dụng ngay Spaced Repetition với flashcard TOEIC của EnglishStart.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/learn/toeic" className="px-5 py-2.5 bg-[var(--ember)] text-white rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">Flashcard TOEIC →</Link>
            <Link href="/learn/beginner" className="px-5 py-2.5 bg-white border border-[var(--paper-border)] text-[var(--ink)] rounded-xl text-sm font-semibold hover:shadow-sm transition-shadow">Lộ trình Beginner</Link>
          </div>
        </div>
      </div>
    </main>
  );
}