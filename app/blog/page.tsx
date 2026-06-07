import Link from "next/link";
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
    const date = new Date(Number(y), Number(m) - 1, Number(d));
    return date.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
  }
  const date = new Date(raw);
  if (isNaN(date.getTime())) return raw;
  return date.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" });
}

const TAG_COLORS: Record<string, string> = {
  "Phương pháp": "bg-teal-50 text-teal-700 border-teal-200",
  "Từ vựng": "bg-amber-50 text-amber-700 border-amber-200",
  "Kinh nghiệm": "bg-violet-50 text-violet-700 border-violet-200",
  "Mất gốc": "bg-rose-50 text-rose-700 border-rose-200",
  "TOEIC": "bg-blue-50 text-blue-700 border-blue-200",
  "Ngữ pháp": "bg-green-50 text-green-700 border-green-200",
};

function TagBadge({ tag }: { tag: string }) {
  const cls = TAG_COLORS[tag] ?? "bg-gray-100 text-gray-600 border-gray-200";
  return (
    <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${cls}`}>
      {tag}
    </span>
  );
}

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => {
    const parseDate = (d: string) => {
      const parts = d?.split("/");
      if (parts?.length === 3) return new Date(Number(parts[2]), Number(parts[1]) - 1, Number(parts[0])).getTime();
      return new Date(d ?? 0).getTime();
    };
    return parseDate((b as any).date ?? (b as any).publishedAt) - parseDate((a as any).date ?? (a as any).publishedAt);
  });

  const [featured, ...rest] = sorted;

  return (
    <main className="min-h-screen bg-[var(--paper)] pb-20">
      {/* Hero header */}
      <div className="bg-[var(--ink)] text-white px-4 py-14">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-3">EnglishStart</p>
          <h1 className="font-display text-5xl font-bold leading-tight mb-4">Blog học<br />tiếng Anh</h1>
          <p className="text-white/60 text-lg max-w-md">
            Phương pháp, mẹo học, và kiến thức thực tế cho người Việt mất gốc.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {/* Featured post */}
        {featured && (
          <Link href={`/blog/${(featured as any).slug}`}>
            <article className="group -mt-6 bg-white rounded-2xl border border-[var(--paper-border)] p-7 shadow-sm hover:shadow-md transition-all duration-200 mb-8 cursor-pointer">
              <div className="flex items-center gap-2 mb-4 flex-wrap">
                <span className="text-xs font-bold tracking-widest uppercase text-[var(--ember)]">✦ Bài nổi bật</span>
                <span className="text-[var(--paper-border)]">·</span>
                <span className="text-xs text-[var(--ink-muted)]">{(featured as any).readingTime ?? (featured as any).readTime}</span>
                <span className="text-[var(--paper-border)]">·</span>
                <span className="text-xs text-[var(--ink-muted)]">{formatDate((featured as any).date ?? (featured as any).publishedAt)}</span>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-4xl leading-none mt-1 hidden sm:block">{(featured as any).emoji ?? "📖"}</span>
                <div className="flex-1 min-w-0">
                  <h2 className="font-display text-2xl font-bold text-[var(--ink)] mb-2 leading-snug group-hover:text-[var(--ember)] transition-colors">
                    {(featured as any).title}
                  </h2>
                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed mb-4 line-clamp-2">
                    {(featured as any).summary ?? (featured as any).excerpt}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    {((featured as any).tags ?? []).map((t: string) => <TagBadge key={t} tag={t} />)}
                  </div>
                </div>
              </div>
              <div className="mt-5 pt-4 border-t border-[var(--paper-border)] flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--ember)]">Đọc bài viết →</span>
              </div>
            </article>
          </Link>
        )}

        {/* Post list */}
        <div className="flex flex-col divide-y divide-[var(--paper-border)]">
          {rest.map((post) => (
            <Link key={(post as any).slug} href={`/blog/${(post as any).slug}`}>
              <article className="group py-6 flex gap-4 items-start hover:bg-white hover:px-4 hover:-mx-4 hover:rounded-xl transition-all duration-150 cursor-pointer">
                <span className="text-3xl leading-none mt-0.5 hidden sm:block">{(post as any).emoji ?? "📄"}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                    {((post as any).tags ?? []).slice(0, 2).map((t: string) => <TagBadge key={t} tag={t} />)}
                    <span className="text-xs text-[var(--ink-muted)]">{(post as any).readingTime ?? (post as any).readTime}</span>
                    <span className="text-xs text-[var(--ink-muted)]">· {formatDate((post as any).date ?? (post as any).publishedAt)}</span>
                  </div>
                  <h2 className="font-display text-lg font-bold text-[var(--ink)] leading-snug group-hover:text-[var(--ember)] transition-colors mb-1">
                    {(post as any).title}
                  </h2>
                  <p className="text-[var(--ink-muted)] text-sm leading-relaxed line-clamp-1">
                    {(post as any).summary ?? (post as any).excerpt}
                  </p>
                </div>
                <span className="text-[var(--ink-muted)] group-hover:text-[var(--ember)] text-lg mt-1 transition-colors flex-shrink-0">→</span>
              </article>
            </Link>
          ))}
        </div>

        {sorted.length === 0 && (
          <p className="text-center text-[var(--ink-muted)] py-20">Chưa có bài viết nào.</p>
        )}
      </div>
    </main>
  );
}