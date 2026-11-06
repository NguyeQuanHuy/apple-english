import { BLOG_POSTS } from "@/data/blog";
import { BLOG_EXTRA } from "@/data/blog-extra";
import type { BlogPost } from "@/data/blog.d";

export type Block =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "callout"; emoji?: string; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "vocab"; word: string; meaning: string; example?: string }
  | { type: "compare"; left: string; right: string; leftLabel?: string; rightLabel?: string };

/** Dates are stored as "dd/mm/yyyy". */
export function parsePostDate(raw?: string): Date | null {
  if (!raw) return null;
  const m = raw.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/);
  if (m) return new Date(Number(m[3]), Number(m[2]) - 1, Number(m[1]));
  const d = new Date(raw);
  return isNaN(d.getTime()) ? null : d;
}

export function formatPostDate(raw?: string) {
  const d = parsePostDate(raw);
  return d ? d.toLocaleDateString("vi-VN", { day: "numeric", month: "long", year: "numeric" }) : raw ?? "";
}

/** All posts, newest first, de-duplicated by slug (blog-extra wins over blog). */
export const POSTS: BlogPost[] = (() => {
  const seen = new Set<string>();
  return [...BLOG_EXTRA, ...BLOG_POSTS]
    .filter((p) => (seen.has(p.slug) ? false : (seen.add(p.slug), true)))
    .sort((a, b) => (parsePostDate(b.date)?.getTime() ?? 0) - (parsePostDate(a.date)?.getTime() ?? 0));
})();

/** Tags ordered by how many posts use them. */
export const TAGS: string[] = (() => {
  const count = new Map<string, number>();
  for (const p of POSTS) for (const t of p.tags ?? []) count.set(t, (count.get(t) ?? 0) + 1);
  return [...count.entries()].sort((a, b) => b[1] - a[1]).map(([t]) => t);
})();

export function relatedPosts(post: BlogPost, n = 3): BlogPost[] {
  const tags = new Set(post.tags ?? []);
  return POSTS.filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, score: (p.tags ?? []).filter((t) => tags.has(t)).length }))
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.p);
}

/** What to practise after reading, chosen from the post's tags. */
export function practiceFor(post: BlogPost): { title: string; desc: string; href: string; cta: string } {
  const tags = post.tags ?? [];
  if (tags.includes("TOEIC"))
    return { title: "Luyện ngay với đề TOEIC mini", desc: "Từ vựng công sở theo chủ đề và đề có bấm giờ, chấm điểm từng Part.", href: "/learn/toeic", cta: "Vào luyện TOEIC" };
  if (tags.includes("Phát âm"))
    return { title: "Thử đọc to một câu", desc: "Dán câu tiếng Anh bất kỳ để xem phiên âm IPA từng từ và nghe đọc mẫu.", href: "/tools/ipa", cta: "Mở công cụ IPA" };
  if (tags.includes("Từ vựng") || tags.includes("Giao tiếp"))
    return { title: "Học từ theo tình huống thật", desc: "14 chủ đề đời sống, mỗi chủ đề 20 từ kèm phát âm và quiz ngắn.", href: "/learn/topics", cta: "Xem các chủ đề" };
  return { title: "Bắt đầu lộ trình mất gốc", desc: "20 bài từ chữ cái đến viết email, mỗi bài khoảng 10 phút.", href: "/learn/beginner", cta: "Học bài đầu tiên" };
}

/** Rough reading time from the content when a post doesn't state one. */
export function readingTime(post: BlogPost) {
  if (post.readingTime) return post.readingTime;
  const words = JSON.stringify(post.content).split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} phút đọc`;
}
