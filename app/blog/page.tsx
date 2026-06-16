import Link from "next/link";
import { BlogPostItem } from "./BlogPostItem";
import { BLOG_POSTS } from "@/data/blog";

export const metadata = {
  title: "Blog học tiếng Anh | EnglishStart",
  description: "Bài viết về phương pháp học tiếng Anh hiệu quả cho người Việt mất gốc.",
};

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

const TAG_COLORS: Record<string, string> = {
  "Phương pháp": "bg-teal-50 text-teal-700 border-teal-200",
  "Từ vựng":     "bg-amber-50 text-amber-700 border-amber-200",
  "Kinh nghiệm": "bg-violet-50 text-violet-700 border-violet-200",
  "Mất gốc":     "bg-rose-50 text-rose-700 border-rose-200",
  "TOEIC":       "bg-blue-50 text-blue-700 border-blue-200",
  "Ngữ pháp":    "bg-green-50 text-green-700 border-green-200",
};

function TagBadge({ tag }: { tag: string }) {
  const cls = TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${cls}`}>{tag}</span>
  );
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a: any, b: any) => {
    const parse = (d: string) => {
      const p = d?.split("/");
      if (p?.length === 3) return new Date(+p[2], +p[1]-1, +p[0]).getTime();
      return new Date(d ?? 0).getTime();
    };
    return parse(b.date ?? b.publishedAt) - parse(a.date ?? a.publishedAt);
  });

  const [featured, ...rest] = sorted;

  return (
    <main className="min-h-screen" style={{ background: "#faf8f4" }}>

      {/* ── Hero ── */}
      <div style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #2d1b4e 50%, #1a2a1a 100%)", padding: "4rem 1rem 5rem" }}>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <span style={{ width: 28, height: 2, background: "#f97316", display: "inline-block", borderRadius: 2 }}></span>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#f97316" }}>EnglishStart Blog</span>
          </div>
          <h1 style={{ fontFamily: "var(--font-display, serif)", fontSize: "clamp(2.5rem, 6vw, 3.75rem)", fontWeight: 800, color: "#fff", lineHeight: 1.1, marginBottom: "1rem" }}>
            Blog học<br />tiếng Anh
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.55)", maxWidth: 420, lineHeight: 1.6 }}>
            Phương pháp, mẹo học và kiến thức thực tế cho người Việt mất gốc.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 1rem 4rem" }}>

        {/* ── Featured card ── */}
        {featured && (
          <Link href={`/blog/${(featured as any).slug}`} style={{ textDecoration: "none" }}>
            <article style={{
              background: "#fff",
              borderRadius: 20,
              border: "1.5px solid #e8e2d9",
              padding: "1.75rem",
              marginTop: "-2.5rem",
              marginBottom: "2.5rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "transform .2s, box-shadow .2s",
            }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16, flexWrap: "wrap" as const }}>
                <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#f97316" }}>✦ Bài nổi bật</span>
                <span style={{ color: "#d1c9be" }}>·</span>
                <span style={{ fontSize: 12, color: "#9b8ea0" }}>{(featured as any).readingTime ?? (featured as any).readTime}</span>
                <span style={{ color: "#d1c9be" }}>·</span>
                <span style={{ fontSize: 12, color: "#9b8ea0" }}>{formatDate((featured as any).date ?? (featured as any).publishedAt)}</span>
              </div>

              <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <span style={{ fontSize: "2.75rem", lineHeight: 1, flexShrink: 0, marginTop: 2 }}>{(featured as any).emoji ?? "📖"}</span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <h2 style={{ fontFamily: "var(--font-display, serif)", fontSize: "1.5rem", fontWeight: 800, color: "#1a1a1a", lineHeight: 1.25, marginBottom: 10 }}>
                    {(featured as any).title}
                  </h2>
                  <p style={{ fontSize: "0.9rem", color: "#6b6068", lineHeight: 1.7, marginBottom: 14 }}>
                    {(featured as any).summary ?? (featured as any).excerpt}
                  </p>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" as const }}>
                    {((featured as any).tags ?? []).map((t: string) => <TagBadge key={t} tag={t} />)}
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid #f0ebe3", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: "#f97316" }}>Đọc bài viết →</span>
              </div>
            </article>
          </Link>
        )}

        {/* ── Section label ── */}
        {rest.length > 0 && (
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 4 }}>
            <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#9b8ea0" }}>Tất cả bài viết</span>
            <div style={{ flex: 1, height: 1, background: "#e8e2d9" }}></div>
          </div>
        )}

        {/* ── Post list ── */}
        <div style={{ display: "flex", flexDirection: "column" as const }}>
          {rest.map((post: any, i: number) => (
            <BlogPostItem key={post.slug} post={post} isLast={i === rest.length - 1} formatDate={formatDate}>
              </BlogPostItem>
          ))}
        </div>

        {sorted.length === 0 && (
          <p style={{ textAlign: "center", color: "#9b8ea0", padding: "5rem 0" }}>Chưa có bài viết nào.</p>
        )}
      </div>
    </main>
  );
}