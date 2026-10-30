"use client";
import Link from "next/link";

function TagBadge({ tag }: { tag: string }) {
  const TAG_COLORS: Record<string, string> = {
    "Phương pháp": "bg-[#26243a] text-[#a79bdf] border-[#332f4d]",
    "Từ vựng": "bg-[#26243a] text-[#a79bdf] border-[#332f4d]",
    "Kinh nghiệm": "bg-[#26243a] text-[#a79bdf] border-[#332f4d]",
    "Mất gốc": "bg-[#26243a] text-[#a79bdf] border-[#332f4d]",
    "TOEIC": "bg-[#26243a] text-[#a79bdf] border-[#332f4d]",
    "Ngữ pháp": "bg-[#26243a] text-[#a79bdf] border-[#332f4d]",
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
          borderBottom: !isLast ? "1px solid rgba(233,233,237,0.08)" : "none",
          cursor: "pointer", borderRadius: 16,
          transition: "all 0.2s ease",
          border: "1.5px solid transparent",
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLElement;
          el.style.borderColor = "#9184d9";
          el.style.background = "#1e2030"
          el.style.boxShadow = "0 4px 20px rgba(145,132,217,0.15)"
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
            <span style={{ fontSize: 12, color: "#9a9aa8" }}>{post.readingTime ?? post.readTime} · {formatDate(post.date ?? post.publishedAt)}</span>
          </div>
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.1rem", fontWeight: 700, color: "#e9e9ed", lineHeight: 1.35, marginBottom: 4 }}>
            {post.title}
          </h2>
          <p style={{ fontSize: "0.85rem", color: "#9a9aa8", lineHeight: 1.6, overflow: "hidden", display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical" }}>
            {post.summary ?? post.excerpt}
          </p>
        </div>
        <span style={{ fontSize: 18, color: "#6b6b78", flexShrink: 0, marginTop: 4 }}>→</span>
      </article>
    </Link>
  );
}
