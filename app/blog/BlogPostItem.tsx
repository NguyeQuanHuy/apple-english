"use client";
import Link from "next/link";

function TagBadge({ tag }: { tag: string }) {
  const TAG_COLORS: Record<string, string> = {
    "Phương pháp": "bg-teal-50 text-teal-700 border-teal-200",
    "Từ vựng": "bg-amber-50 text-amber-700 border-amber-200",
    "Kinh nghiệm": "bg-violet-50 text-violet-700 border-violet-200",
    "Mất gốc": "bg-rose-50 text-rose-700 border-rose-200",
    "TOEIC": "bg-blue-50 text-blue-700 border-blue-200",
    "Ngữ pháp": "bg-green-50 text-green-700 border-green-200",
  };
  const cls = TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 border-gray-200";
  return <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${cls}`}>{tag}</span>;
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

export function BlogPostItem({ post, isLast }: { post: any; isLast: boolean }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
      <article
        style={{
          display: "flex", gap: 16, alignItems: "flex-start",
          padding: "1.25rem 1rem",
          borderBottom: !isLast ? "1px solid #f0ebe3" : "none",
          cursor: "pointer", borderRadius: 16,
          transition: "all 0.2s ease",
          border: "1.5px solid transparent",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "#38bdf8";
          el.style.background = "#f0f9ff";
          el.style.boxShadow = "0 4px 20px rgba(56,189,248,0.15)";
          el.style.transform = "translateX(4px)";
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "transparent";
          el.style.background = "transparent";
          el.style.boxShadow = "none";
          el.style.transform = "translateX(0)";
        }}
      >
        <span style={{ fontSize: "2rem", lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{post.emoji ?? "📄"}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 6 }}>
            {(post.tags ?? []).slice(0, 2).map((t: string) => <TagBadge key={t} tag={t} />)}
            <span style={{ fontSize: 12, color: "#9b8ea0" }}>{post.readingTime ?? post.readTime} · {formatDate(post.date ?? post.publishedAt)}</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.1rem", fontWeight: 700, color: "#1a1a1a", lineHeight: 1.35, marginBottom: 4 }}>
            {post.title}
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#6b6068", lineHeight: 1.6, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>
            {post.summary ?? post.excerpt}
          </p>
        </div>
        <span style={{ fontSize: 18, color: "#d1c9be", flexShrink: 0, marginTop: 4 }}>→</span>
      </article>
    </Link>
  );
}
