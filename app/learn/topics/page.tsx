"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Search, X } from "lucide-react";
import { TOPICS } from "@/data/topics";
import { useProgress } from "@/lib/store";
import { SpeakButton } from "@/components/SpeakButton";

const quizKey = (id: string) => `topic-${id}`;

// Strip Vietnamese diacritics so "ho chieu" finds "hộ chiếu"
function fold(s: string) {
  return s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase().trim();
}

type Hit = { en: string; vi: string; example?: string; topicId: string; topicTitle: string; emoji: string };

const ALL_WORDS: Hit[] = TOPICS.flatMap((t) =>
  [...t.basicVocab, ...t.advancedVocab].map((v) => ({ en: v.en, vi: v.vi, example: v.example, topicId: t.id, topicTitle: t.title, emoji: t.emoji }))
);

/* ─────────── Word lookup (the page's signature element) ─────────── */

function WordLookup() {
  const [q, setQ] = useState("");
  const hits = useMemo(() => {
    const f = fold(q);
    if (f.length < 2) return [];
    const starts: Hit[] = [];
    const contains: Hit[] = [];
    for (const w of ALL_WORDS) {
      const en = fold(w.en);
      const vi = fold(w.vi);
      if (en.startsWith(f) || vi.startsWith(f)) starts.push(w);
      else if (en.includes(f) || vi.includes(f)) contains.push(w);
    }
    return [...starts, ...contains].slice(0, 6);
  }, [q]);

  return (
    <div className="rounded-[22px] bg-white dark:bg-navy-900 border border-navy-900/10 dark:border-white/10 shadow-[0_24px_60px_-30px_rgba(21,32,51,0.45)] p-5 sm:p-6">
      <label htmlFor="word-lookup" className="block font-bold text-navy-900 dark:text-white mb-1">Tra nhanh một từ</label>
      <p className="text-sm text-navy-500 dark:text-paper-200 mb-4">Gõ tiếng Anh hoặc tiếng Việt, có dấu hay không dấu đều được.</p>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-400 pointer-events-none" />
        <input
          id="word-lookup"
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Ví dụ: passport, hộ chiếu, ho chieu"
          autoComplete="off"
          className="w-full h-14 pl-12 pr-12 rounded-2xl bg-[rgb(var(--bg))] border-2 border-navy-900/10 dark:border-white/15 text-lg text-navy-900 dark:text-white placeholder:text-navy-400 focus:outline-none focus:border-apple-500 transition-colors [&::-webkit-search-cancel-button]:hidden"
        />
        {q && (
          <button onClick={() => setQ("")} aria-label="Xoá" className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-lg text-navy-400 hover:text-navy-900 dark:hover:text-white">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      <div className="mt-4 min-h-[13rem]" aria-live="polite">
        {fold(q).length < 2 ? (
          <div className="flex flex-wrap gap-2">
            <p className="w-full text-sm text-navy-400 mb-1">Thử một từ:</p>
            {["passport", "hoá đơn", "bác sĩ", "deadline", "rent"].map((s) => (
              <button key={s} onClick={() => setQ(s)} className="px-3 py-1.5 rounded-full text-sm font-semibold bg-navy-900/[0.05] dark:bg-white/10 text-navy-700 dark:text-paper-100 hover:bg-navy-900/10 dark:hover:bg-white/15 transition-colors">
                {s}
              </button>
            ))}
          </div>
        ) : hits.length === 0 ? (
          <p className="text-[15px] text-navy-500 dark:text-paper-200 pt-2">
            Chưa có “{q.trim()}” trong {ALL_WORDS.length} từ của các chủ đề. Thử từ khác, hoặc tra phiên âm ở{" "}
            <Link href="/tools/ipa" className="font-bold text-apple-600 dark:text-apple-500 hover:underline">công cụ IPA</Link>.
          </p>
        ) : (
          <ul className="divide-y divide-navy-900/[0.07] dark:divide-white/10">
            {hits.map((h) => (
              <li key={`${h.topicId}-${h.en}`} className="flex items-start gap-3 py-2.5">
                <SpeakButton text={h.en} size="sm" className="mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-navy-900 dark:text-white">
                    <span className="font-bold">{h.en}</span> <span className="text-navy-500 dark:text-paper-200">· {h.vi}</span>
                  </p>
                  {h.example && <p className="text-sm text-navy-400 italic truncate">{h.example}</p>}
                </div>
                <Link href={`/learn/topics/${h.topicId}`} className="text-sm font-semibold text-navy-400 hover:text-apple-600 dark:hover:text-apple-500 whitespace-nowrap flex-shrink-0 mt-0.5">
                  {h.emoji} {h.topicTitle}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

/* ─────────── Topic grid ─────────── */

function TopicCard({ t, result }: { t: (typeof TOPICS)[number]; result?: { score: number; total: number } }) {
  const words = t.basicVocab.length + t.advancedVocab.length;
  const perfect = result && result.score === result.total;
  return (
    <Link
      href={`/learn/topics/${t.id}`}
      className="group relative rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-5 flex flex-col hover:border-navy-900/25 dark:hover:border-white/25 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-500"
    >
      <div className="flex items-start justify-between mb-4">
        <span className="text-4xl leading-none" aria-hidden="true">{t.emoji}</span>
        {result ? (
          <span className={`inline-flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full ${perfect ? "bg-leaf-50 text-leaf-700 dark:bg-leaf-500/15 dark:text-leaf-500" : "bg-hl-200 text-amber-800 dark:bg-hl-300/15 dark:text-hl-300"}`}>
            {perfect && <Check className="w-3.5 h-3.5" strokeWidth={3} />} Quiz {result.score}/{result.total}
          </span>
        ) : null}
      </div>
      <p className="font-bold text-lg text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{t.title}</p>
      <p className="text-[15px] text-navy-500 dark:text-paper-200 leading-snug mb-4">{t.tagline}</p>
      <div className="mt-auto flex items-center justify-between text-sm">
        <span className="text-navy-400">{words} từ · {t.quiz.length} câu quiz</span>
        <ArrowRight className="w-5 h-5 text-navy-400 group-hover:text-apple-500 group-hover:translate-x-0.5 transition-all" />
      </div>
    </Link>
  );
}

const STEPS = [
  { title: "10 từ cơ bản", desc: "Nghe từng từ, đọc to câu ví dụ. Khoảng 5 phút." },
  { title: "10 từ nâng cao", desc: "Học vào buổi khác để não kịp ghi nhớ phần trước." },
  { title: "Làm quiz", desc: "Sai câu nào thì quay lại xem từ đó. Ôn lại sau 3 ngày." },
];

export default function TopicsIndex() {
  const testScores = useProgress((s) => s.testScores);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const scores = mounted ? testScores : {};
  const doneCount = TOPICS.filter((t) => scores[quizKey(t.id)]).length;

  return (
    <div className="pb-24 md:pb-8">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-14 md:pb-20 grid grid-cols-1 md:grid-cols-[1fr_1.05fr] gap-10 md:gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-navy-500 dark:text-paper-200 mb-3">{TOPICS.length} chủ đề · {ALL_WORDS.length} từ vựng</p>
          <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.025em] mb-5 [text-wrap:balance]">
            Từ vựng cho những lúc bạn thật sự cần.
          </h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 leading-relaxed max-w-[32rem]">
            Ở sân bay, đi khám bệnh, thuê nhà, đi làm. Mỗi chủ đề có 20 từ kèm câu ví dụ, phát âm và quiz ngắn.
          </p>
        </div>
        <WordLookup />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="flex items-end justify-between gap-4 mb-7">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white">Chọn một tình huống</h2>
          {mounted && doneCount > 0 && (
            <p className="text-sm font-semibold text-navy-500 dark:text-paper-200 whitespace-nowrap">Đã làm quiz {doneCount}/{TOPICS.length}</p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOPICS.map((t) => (
            <TopicCard key={t.id} t={t} result={scores[quizKey(t.id)]} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <div className="rounded-3xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-6 sm:p-8">
          <h2 className="font-bold text-xl text-navy-900 dark:text-white mb-1">Học một chủ đề trong 3 buổi</h2>
          <p className="text-navy-500 dark:text-paper-200 mb-6">Học dồn một lần dễ quên. Chia nhỏ thì nhớ lâu hơn nhiều.</p>
          <ol className="grid sm:grid-cols-3 gap-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-3">
                <span className="w-8 h-8 rounded-full bg-navy-900 text-white dark:bg-white dark:text-navy-900 grid place-items-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="font-bold text-navy-900 dark:text-white">{s.title}</p>
                  <p className="text-[15px] text-navy-700 dark:text-paper-100 leading-relaxed">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
