import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { POSTS, formatPostDate, practiceFor, readingTime, relatedPosts, type Block } from "@/lib/blog";
import { SpeakButton } from "@/components/SpeakButton";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Apple English`,
    description: post.summary,
    openGraph: { title: post.title, description: post.summary, type: "article", locale: "vi_VN" },
  };
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "heading":
      return <h2 className="font-display text-2xl sm:text-[26px] font-extrabold text-navy-900 dark:text-white mt-12 mb-4 tracking-[-0.01em]">{block.text}</h2>;
    case "paragraph":
      return <p className="text-[18px] leading-[1.75] text-navy-700 dark:text-paper-100 mb-6">{block.text}</p>;
    case "list":
      return (
        <ul className="mb-7 space-y-3">
          {block.items.map((it, i) => (
            <li key={i} className="flex gap-3 text-[18px] leading-[1.7] text-navy-700 dark:text-paper-100">
              <span className="w-1.5 h-1.5 rounded-full bg-apple-500 flex-shrink-0 mt-[0.8em]" aria-hidden="true" />
              <span>{it}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="my-8 flex gap-4 rounded-2xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-5">
          {block.emoji && <span className="text-2xl leading-none" aria-hidden="true">{block.emoji}</span>}
          <p className="text-[17px] leading-relaxed text-navy-900 dark:text-paper-50 font-medium">{block.text}</p>
        </aside>
      );
    case "quote":
      return (
        <blockquote className="my-10 pl-6 border-l-4 border-apple-500">
          <p className="font-display text-xl sm:text-2xl font-bold leading-snug text-navy-900 dark:text-white">{block.text}</p>
        </blockquote>
      );
    case "compare":
      return (
        <div className="my-8 grid sm:grid-cols-2 gap-3">
          <div className="rounded-2xl bg-apple-50 dark:bg-apple-500/10 border border-apple-100 dark:border-apple-500/25 p-5">
            <p className="text-sm font-bold text-apple-700 dark:text-apple-500 mb-2">{block.leftLabel || "Chưa đúng"}</p>
            <p className="text-[16px] leading-relaxed text-navy-700 dark:text-paper-100">{block.left}</p>
          </div>
          <div className="rounded-2xl bg-leaf-50 dark:bg-leaf-500/10 border border-leaf-100 dark:border-leaf-500/25 p-5">
            <p className="text-sm font-bold text-leaf-700 dark:text-leaf-500 mb-2">{block.rightLabel || "Đúng"}</p>
            <p className="text-[16px] leading-relaxed text-navy-700 dark:text-paper-100">{block.right}</p>
          </div>
        </div>
      );
    case "vocab": {
      // Phonics entries like "/th/ không thanh" aren't words; reading them aloud would say "slash"
      const speakable = /^[A-Za-z][A-Za-z' .,!?-]*$/.test(block.word);
      return (
        <div className="flex gap-4 py-4 border-b border-navy-900/[0.08] dark:border-white/10 first-of-type:border-t">
          {speakable ? <SpeakButton text={block.word} size="md" className="flex-shrink-0 mt-0.5" /> : <span className="w-9 flex-shrink-0" aria-hidden="true" />}
          <div className="min-w-0 flex-1">
            <p className="text-[18px]">
              <span className="font-bold text-navy-900 dark:text-white">{block.word}</span>
              <span className="text-apple-600 dark:text-apple-500 font-semibold"> · {block.meaning}</span>
            </p>
            {block.example && (
              <div className="flex items-start gap-2 mt-1">
                <p className="text-[16px] italic text-navy-500 dark:text-paper-200 flex-1">{block.example}</p>
                <SpeakButton text={block.example} size="sm" className="flex-shrink-0" />
              </div>
            )}
          </div>
        </div>
      );
    }
    default:
      return null;
  }
}

/** Consecutive vocab blocks are grouped into one word list. */
function renderBlocks(blocks: Block[]) {
  const out: React.ReactNode[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if (b.type === "vocab") {
      const group: Block[] = [];
      while (i < blocks.length && blocks[i].type === "vocab") group.push(blocks[i++]);
      i--;
      out.push(
        <div key={`v${i}`} className="my-8">
          {group.map((g, j) => <BlockView key={j} block={g} />)}
        </div>
      );
    } else out.push(<BlockView key={i} block={b} />);
  }
  return out;
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const blocks = (Array.isArray(post.content) ? post.content : []) as Block[];
  const practice = practiceFor(post);
  const related = relatedPosts(post, 3);

  return (
    <div className="px-4 sm:px-6 pt-8 md:pt-12 pb-24 md:pb-12">
      <article className="max-w-[44rem] mx-auto">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white mb-10">
          <ArrowLeft className="w-4 h-4" /> Tất cả bài viết
        </Link>

        <header className="mb-10">
          <span className="block text-5xl mb-5" aria-hidden="true">{post.emoji}</span>
          <p className="text-sm font-semibold text-navy-400 mb-3">{(post.tags ?? []).join(" · ")}</p>
          <h1 className="font-display text-[32px] sm:text-[44px] font-extrabold leading-[1.12] tracking-[-0.02em] text-navy-900 dark:text-white mb-5 [text-wrap:balance]">{post.title}</h1>
          <p className="text-xl leading-relaxed text-navy-500 dark:text-paper-200 mb-5">{post.summary}</p>
          <p className="text-sm text-navy-400">{formatPostDate(post.date)} · {readingTime(post)}</p>
        </header>

        <div className="border-t border-navy-900/10 dark:border-white/10 pt-8">{renderBlocks(blocks)}</div>

        <aside className="mt-14 rounded-3xl bg-navy-900 dark:bg-white/[0.06] text-white p-6 sm:p-8">
          <p className="font-display text-2xl font-extrabold mb-2">{practice.title}</p>
          <p className="text-white/70 mb-6">{practice.desc}</p>
          <Link href={practice.href} className="inline-flex items-center gap-2 bg-apple-500 hover:bg-apple-600 text-white font-bold px-6 py-3.5 rounded-2xl shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all">
            {practice.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </aside>
      </article>

      {related.length > 0 && (
        <section className="max-w-6xl mx-auto mt-20">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-6">Đọc tiếp</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-6 flex flex-col hover:border-navy-900/25 dark:hover:border-white/25 transition-colors">
                <span className="text-3xl mb-4" aria-hidden="true">{p.emoji}</span>
                <span className="font-bold text-lg leading-snug text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors mb-2">{p.title}</span>
                <span className="text-[15px] text-navy-500 dark:text-paper-200 line-clamp-2 mb-4">{p.summary}</span>
                <span className="mt-auto text-sm text-navy-400">{readingTime(p)}</span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
