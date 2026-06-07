import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/data/blog";

export async function generateStaticParams() {
  return BLOG_POSTS.map((p: any) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p: any) => p.slug === slug) as any;
  if (!post) return {};
  return { title: `${post.title} | EnglishStart`, description: post.summary ?? post.excerpt };
}

function formatDate(raw: string) {
  if (!raw) return "";
  const parts = raw.split("/");
  if (parts.length === 3) {
    const [d, m, y] = parts;
    return new Date(Number(y), Number(m) - 1, Number(d)).toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
  }
  const date = new Date(raw);
  if (isNaN(date.getTime())) return raw;
  return date.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
}

function renderArrayContent(content: any[]): string {
  return content.map((block) => {
    if (block.type === "heading") return `<h2>${block.text}</h2>`;
    if (block.type === "paragraph") return `<p>${block.text}</p>`;
    if (block.type === "quote") return `<blockquote>${block.text}</blockquote>`;
    if (block.type === "callout") return `<div class="callout"><span>${block.emoji ?? ""}</span><span>${block.text}</span></div>`;
    if (block.type === "list") return `<ul>${(block.items ?? []).map((i: string) => `<li>${i}</li>`).join("")}</ul>`;
    if (block.type === "compare") return `<div class="compare"><div class="compare-left"><div class="compare-label">${block.leftLabel ?? ""}</div><div>${block.left}</div></div><div class="compare-right"><div class="compare-label">${block.rightLabel ?? ""}</div><div>${block.right}</div></div></div>`;
    return "";
  }).join("\n");
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
  const post = BLOG_POSTS.find((p: any) => p.slug === slug) as any;
  if (!post) notFound();

  const html = Array.isArray(post.content)
    ? renderArrayContent(post.content)
    : renderMarkdown(post.content ?? "");

  return (
    <main className="min-h-screen bg-[var(--paper)] px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-[var(--ink-muted)] hover:text-[var(--ember)] mb-8 transition-colors">
          ← Tất cả bài viết
        </Link>
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {(post.tags ?? []).map((t: string) => (
            <span key={t} className="text-xs font-medium px-2 py-0.5 rounded-full border bg-[var(--ember-light)] text-[var(--ember)] border-orange-200">{t}</span>
          ))}
          <span className="text-xs text-[var(--ink-muted)]">{post.readingTime ?? post.readTime} · {formatDate(post.date ?? post.publishedAt)}</span>
        </div>
        <div className="flex items-start gap-3 mb-6">
          {post.emoji && <span className="text-4xl leading-none mt-1">{post.emoji}</span>}
          <h1 className="font-display text-3xl md:text-4xl font-bold text-[var(--ink)] leading-tight">{post.title}</h1>
        </div>
        <p className="text-[var(--ink-muted)] text-lg leading-relaxed mb-10 border-l-4 border-[var(--ember)] pl-4">
          {post.summary ?? post.excerpt}
        </p>
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