"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, Check, Clock, Headphones, BookOpenText, RotateCcw } from "lucide-react";
import { TOEIC_THEMES, TOEIC_TESTS } from "@/data/toeic";
import { useProgress } from "@/lib/store";

const PHRASE_THEME_IDS = ["idioms", "phrasal-verbs", "collocations"];
const themeDoneKey = (id: string) => `toeic-theme-${id}`;

/* ─────────── Answer-sheet progress card (the page's signature element) ─────────── */

function Bubble({ filled, label, title }: { filled: boolean; label: string; title: string }) {
  return (
    <span
      title={title}
      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full grid place-items-center text-[11px] font-bold border-[1.5px] transition-colors ${
        filled ? "bg-navy-900 border-navy-900 text-white dark:bg-white dark:border-white dark:text-navy-900" : "border-navy-400/50 text-navy-400"
      }`}
    >
      {label}
    </span>
  );
}

function AnswerSheet({ doneThemes, testScores }: { doneThemes: string[]; testScores: Record<string, { score: number; total: number }> }) {
  const letters = ["A", "B", "C", "D"];
  return (
    <div className="relative rounded-[22px] bg-white dark:bg-navy-900 border border-navy-900/10 dark:border-white/10 shadow-[0_24px_60px_-30px_rgba(21,32,51,0.45)] overflow-hidden rotate-[-1deg]">
      <div className="flex items-center justify-between px-6 py-3 bg-apple-500 text-white">
        <p className="font-bold">Phiếu tiến độ của bạn</p>
        <p className="text-sm text-white/80">TOEIC L&amp;R</p>
      </div>
      <div className="px-6 py-5">
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <p className="text-sm font-semibold text-navy-500 dark:text-paper-200">
            Chủ đề từ vựng · {doneThemes.length}/{TOEIC_THEMES.length}
          </p>
          <p className="text-xs text-navy-400 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-navy-900 dark:bg-white inline-block" /> đã học
          </p>
        </div>
        <div className="grid grid-cols-5 gap-x-3 gap-y-2.5 mb-6">
          {TOEIC_THEMES.map((t, i) => (
            <div key={t.id} className="flex items-center gap-1.5">
              <span className="w-5 text-right text-[11px] font-semibold text-navy-400 tabular-nums">{i + 1}</span>
              <Bubble filled={doneThemes.includes(t.id)} label={letters[i % 4]} title={t.title} />
            </div>
          ))}
        </div>
        <p className="text-sm font-semibold text-navy-500 dark:text-paper-200 mb-3">Đề mini</p>
        <ul className="space-y-2">
          {TOEIC_TESTS.map((t, i) => {
            const r = testScores[t.id];
            const pct = r ? Math.round((r.score / r.total) * 100) : 0;
            return (
              <li key={t.id} className="flex items-center gap-3">
                <span className="text-sm font-semibold text-navy-700 dark:text-paper-100 w-14">Đề {i + 1}</span>
                <span className="flex-1 h-2 rounded-full bg-navy-900/[0.07] dark:bg-white/10 overflow-hidden">
                  <span className={`block h-full rounded-full ${pct >= 80 ? "bg-leaf-500" : "bg-apple-500"}`} style={{ width: `${pct}%` }} />
                </span>
                <span className="text-sm font-semibold tabular-nums w-12 text-right text-navy-500 dark:text-paper-200">{r ? `${r.score}/${r.total}` : "—"}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

/* ─────────── Vocabulary themes ─────────── */

function ThemeRow({ t, done }: { t: (typeof TOEIC_THEMES)[number]; done: boolean }) {
  return (
    <li>
      <Link
        href={`/learn/toeic/theme/${t.id}`}
        className="group flex items-center gap-4 px-4 sm:px-5 py-4 hover:bg-navy-900/[0.025] dark:hover:bg-white/[0.04] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-apple-500"
      >
        <span className="text-2xl w-9 text-center flex-shrink-0" aria-hidden="true">{t.emoji ?? "📘"}</span>
        <span className="flex-1 min-w-0">
          <span className="flex items-baseline gap-2">
            <span className="font-bold text-navy-900 dark:text-white group-hover:text-apple-600 dark:group-hover:text-apple-500 transition-colors">{t.title}</span>
            <span className="text-sm text-navy-400 whitespace-nowrap">{t.words?.length ?? 0} từ</span>
          </span>
          <span className="block text-sm text-navy-500 dark:text-paper-200 truncate">{t.description}</span>
        </span>
        {done ? (
          <span className="flex items-center gap-1 text-sm font-semibold text-leaf-600 dark:text-leaf-500 flex-shrink-0">
            <Check className="w-4 h-4" strokeWidth={3} /> <span className="hidden sm:inline">Đã học</span>
          </span>
        ) : (
          <ArrowRight className="w-5 h-5 text-navy-400 flex-shrink-0 group-hover:translate-x-0.5 group-hover:text-apple-500 transition-all" />
        )}
      </Link>
    </li>
  );
}

function ThemeList({ title, desc, themes, doneThemes }: { title: string; desc: string; themes: typeof TOEIC_THEMES; doneThemes: string[] }) {
  const done = themes.filter((t) => doneThemes.includes(t.id)).length;
  return (
    <div className="min-w-0">
      <div className="flex items-end justify-between gap-3 mb-3">
        <div>
          <h3 className="font-bold text-lg text-navy-900 dark:text-white">{title}</h3>
          <p className="text-sm text-navy-500 dark:text-paper-200">{desc}</p>
        </div>
        <p className="text-sm font-semibold text-navy-400 whitespace-nowrap">{done}/{themes.length}</p>
      </div>
      <ul className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10 overflow-hidden">
        {themes.map((t) => (
          <ThemeRow key={t.id} t={t} done={doneThemes.includes(t.id)} />
        ))}
      </ul>
    </div>
  );
}

/* ─────────── Mini tests ─────────── */

function partOf(title: string) {
  const m = title.match(/Part\s*(\d)/i);
  return m ? Number(m[1]) : null;
}

function TestCard({ t, index, result }: { t: (typeof TOEIC_TESTS)[number]; index: number; result?: { score: number; total: number } }) {
  const part = partOf(t.title);
  const isListening = part !== null && part <= 4;
  const pct = result ? Math.round((result.score / result.total) * 100) : null;
  const cleanTitle = t.title.replace(/^Mini Test \d+\s*[—-]\s*/, "");
  return (
    <Link
      href={`/learn/toeic/test/${t.id}`}
      className="group rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 p-5 sm:p-6 flex flex-col hover:border-navy-900/25 dark:hover:border-white/25 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-apple-500"
    >
      <div className="flex items-center justify-between mb-4">
        <span className={`inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-1 rounded-full ${isListening ? "bg-leaf-50 text-leaf-700 dark:bg-leaf-500/15 dark:text-leaf-500" : "bg-navy-900/[0.06] text-navy-700 dark:bg-white/10 dark:text-paper-100"}`}>
          {isListening ? <Headphones className="w-3.5 h-3.5" /> : <BookOpenText className="w-3.5 h-3.5" />}
          {isListening ? "Listening" : "Reading"}{part ? ` · Part ${part}` : ""}
        </span>
        <span className="text-sm font-semibold text-navy-400">Đề {index + 1}</span>
      </div>
      <p className="font-bold text-lg text-navy-900 dark:text-white leading-snug mb-1">{cleanTitle}</p>
      <p className="text-sm text-navy-500 dark:text-paper-200 mb-5">
        {t.questions.length} câu · <Clock className="inline w-3.5 h-3.5 -mt-0.5" /> {Math.round(t.timeLimitSec / 60)} phút
      </p>
      <div className="mt-auto flex items-center justify-between gap-3">
        {pct !== null ? (
          <p className="text-sm text-navy-500 dark:text-paper-200">
            Lần gần nhất <span className={`font-bold ${pct >= 80 ? "text-leaf-600 dark:text-leaf-500" : "text-apple-600 dark:text-apple-500"}`}>{result!.score}/{result!.total}</span>
          </p>
        ) : (
          <p className="text-sm text-navy-400">Chưa làm</p>
        )}
        <span className={`inline-flex items-center gap-1.5 text-sm font-bold px-4 py-2 rounded-xl transition-colors ${pct !== null ? "text-navy-700 dark:text-paper-100 bg-navy-900/[0.06] dark:bg-white/10 group-hover:bg-navy-900/10" : "bg-apple-500 text-white group-hover:bg-apple-600"}`}>
          {pct !== null ? <><RotateCcw className="w-4 h-4" /> Làm lại</> : "Làm đề"}
        </span>
      </div>
    </Link>
  );
}

/* ─────────── Exam structure & plan ─────────── */

const PARTS = [
  { part: 1, skill: "Listening", name: "Mô tả tranh", q: 6, tip: "Nhìn tranh trước khi nghe, đoán sẵn động từ và vật xuất hiện." },
  { part: 2, skill: "Listening", name: "Hỏi – đáp", q: 25, tip: "Bắt từ để hỏi đầu câu (Where, When, Who…) để loại đáp án lệch." },
  { part: 3, skill: "Listening", name: "Hội thoại", q: 39, tip: "Đọc 3 câu hỏi trước khi băng chạy, nghe có chủ đích." },
  { part: 4, skill: "Listening", name: "Bài nói ngắn", q: 30, tip: "Thông báo, quảng cáo: chú ý mục đích ở 1–2 câu đầu." },
  { part: 5, skill: "Reading", name: "Điền câu", q: 30, tip: "Khoảng 20 giây mỗi câu. Nhìn từ loại cần điền, không cần dịch cả câu." },
  { part: 6, skill: "Reading", name: "Điền đoạn văn", q: 16, tip: "Đọc câu trước và sau chỗ trống để chọn từ nối hợp lý." },
  { part: 7, skill: "Reading", name: "Đọc hiểu", q: 54, tip: "Đọc câu hỏi trước rồi quét bài tìm từ khoá." },
];

const PLAN = [
  { weeks: "Tuần 1–2", focus: "Từ vựng công sở, nghe Part 1–2", link: "/learn/toeic/theme/office" },
  { weeks: "Tuần 3–4", focus: "Ngữ pháp Part 5, làm đề mini mỗi ngày", link: "/learn/toeic/test/toeic-mini-1" },
  { weeks: "Tuần 5–6", focus: "Đọc hiểu Part 7: đọc nhanh, tìm ý", link: "/learn/toeic/test/toeic-mini-2" },
  { weeks: "Tuần 7–8", focus: "Làm đề đủ 200 câu có bấm giờ, ôn câu sai", link: null },
];

function ExamGuide() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-2">Hiểu đề để không mất điểm oan</h2>
      <p className="text-navy-500 dark:text-paper-200 mb-7 max-w-2xl">200 câu trong 120 phút, tối đa 990 điểm. Không bị trừ điểm khi sai, nên câu nào cũng phải chọn đáp án.</p>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-4 items-start">
        <div className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 overflow-hidden">
          <table className="w-full text-left">
            <caption className="sr-only">Cấu trúc đề TOEIC Listening và Reading</caption>
            <thead>
              <tr className="text-sm text-navy-400 border-b border-navy-900/[0.07] dark:border-white/10">
                <th scope="col" className="font-semibold px-4 sm:px-5 py-3">Part</th>
                <th scope="col" className="font-semibold px-2 py-3 sm:w-48">Nội dung</th>
                <th scope="col" className="font-semibold px-4 sm:px-5 py-3 hidden sm:table-cell">Mẹo</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-navy-900/[0.07] dark:divide-white/10">
              {PARTS.map((p) => (
                <tr key={p.part} className={p.part === 5 ? "border-t-2 border-navy-900/15 dark:border-white/20" : ""}>
                  <td className="px-4 sm:px-5 py-3.5 align-top">
                    <span className={`w-8 h-8 rounded-full grid place-items-center font-bold text-sm ${p.skill === "Listening" ? "bg-leaf-50 text-leaf-700 dark:bg-leaf-500/15 dark:text-leaf-500" : "bg-navy-900/[0.06] text-navy-700 dark:bg-white/10 dark:text-paper-100"}`}>
                      {p.part}
                    </span>
                  </td>
                  <td className="px-2 py-3.5 align-top">
                    <p className="font-bold text-navy-900 dark:text-white">{p.name}</p>
                    <p className="text-sm text-navy-400 whitespace-nowrap">{p.skill} · {p.q} câu</p>
                    <p className="text-sm text-navy-500 dark:text-paper-200 mt-1 sm:hidden">{p.tip}</p>
                  </td>
                  <td className="px-4 sm:px-5 py-3.5 align-top text-[15px] text-navy-500 dark:text-paper-200 leading-relaxed hidden sm:table-cell">{p.tip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded-3xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-6">
          <h3 className="font-bold text-lg text-navy-900 dark:text-white mb-1">Lộ trình 8 tuần lên 450+</h3>
          <p className="text-sm text-navy-500 dark:text-paper-200 mb-5">Mỗi ngày 15–20 phút là đủ, quan trọng là đều đặn.</p>
          <ol className="space-y-4">
            {PLAN.map((s, i) => (
              <li key={s.weeks} className="flex gap-3">
                <span className="w-7 h-7 rounded-full bg-navy-900 text-white dark:bg-white dark:text-navy-900 grid place-items-center text-sm font-bold flex-shrink-0">{i + 1}</span>
                <div>
                  <p className="font-bold text-navy-900 dark:text-white">{s.weeks}</p>
                  <p className="text-[15px] text-navy-700 dark:text-paper-100">{s.focus}</p>
                  {s.link && (
                    <Link href={s.link} className="text-sm font-bold text-apple-600 hover:text-apple-700 dark:text-apple-500">Bắt đầu phần này</Link>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ─────────── Page ─────────── */

export default function ToeicIndex() {
  const { completedLessons, testScores } = useProgress();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const doneThemes = useMemo(
    () => (mounted ? TOEIC_THEMES.filter((t) => completedLessons.includes(themeDoneKey(t.id))).map((t) => t.id) : []),
    [mounted, completedLessons]
  );
  const scores = mounted ? testScores : {};

  const officeThemes = TOEIC_THEMES.filter((t) => !PHRASE_THEME_IDS.includes(t.id));
  const phraseThemes = TOEIC_THEMES.filter((t) => PHRASE_THEME_IDS.includes(t.id));
  const totalWords = TOEIC_THEMES.reduce((a, t) => a + (t.words?.length ?? 0), 0);

  // Next step: first unlearned theme; after 3 themes, nudge toward an untaken test
  const nextTheme = TOEIC_THEMES.find((t) => !doneThemes.includes(t.id));
  const nextTest = TOEIC_TESTS.find((t) => !scores[t.id]);
  let next: { href: string; label: string; detail: string };
  if (nextTest && (doneThemes.length >= 3 || !nextTheme)) {
    next = { href: `/learn/toeic/test/${nextTest.id}`, label: "Làm đề tiếp theo", detail: nextTest.title.replace(/^Mini Test \d+\s*[—-]\s*/, "") };
  } else if (nextTheme) {
    next = { href: `/learn/toeic/theme/${nextTheme.id}`, label: doneThemes.length ? "Học chủ đề tiếp theo" : "Bắt đầu với chủ đề đầu tiên", detail: `${nextTheme.title} · ${nextTheme.words?.length ?? 0} từ` };
  } else {
    next = { href: `/learn/toeic/test/${TOEIC_TESTS[0].id}`, label: "Ôn lại đề mini", detail: "Bạn đã học hết chủ đề và làm hết đề" };
  }

  return (
    <div className="pb-24 md:pb-8">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-10 pb-14 md:pt-14 md:pb-20 grid grid-cols-1 md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <p className="text-sm font-semibold text-navy-500 dark:text-paper-200 mb-3">Dành cho mục tiêu 400–700 điểm</p>
          <h1 className="font-display font-extrabold text-navy-900 dark:text-white text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] tracking-[-0.025em] mb-5 [text-wrap:balance]">
            Luyện TOEIC mỗi ngày, từng chủ đề một.
          </h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 leading-relaxed max-w-[34rem] mb-8">
            {totalWords} từ vựng công sở chia theo {TOEIC_THEMES.length} chủ đề, cùng {TOEIC_TESTS.length} đề mini có bấm giờ và giải thích tiếng Việt.
          </p>
          <Link
            href={next.href}
            className="group inline-flex items-center gap-4 bg-apple-500 hover:bg-apple-600 text-white pl-6 pr-5 py-4 rounded-2xl shadow-[0_4px_0_0_#A51F25] active:shadow-none active:translate-y-1 transition-all focus-visible:outline focus-visible:outline-4 focus-visible:outline-apple-100"
          >
            <span className="text-left">
              <span className="block font-bold text-base">{next.label}</span>
              <span className="block text-sm text-white/80">{next.detail}</span>
            </span>
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
        <AnswerSheet doneThemes={doneThemes} testScores={scores} />
      </section>

      {/* Vocabulary */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-2">Từ vựng theo chủ đề</h2>
        <p className="text-navy-500 dark:text-paper-200 mb-7 max-w-2xl">Lật flashcard, nghe phát âm, xem ví dụ. Học hết một chủ đề được +15 XP và tick vào phiếu tiến độ.</p>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-start">
          <ThemeList title="Chủ đề công sở" desc="Từ hay gặp trong Part 3, 4 và 7" themes={officeThemes} doneThemes={doneThemes} />
          <ThemeList title="Cụm từ nâng cao" desc="Idioms, phrasal verbs, collocations" themes={phraseThemes} doneThemes={doneThemes} />
        </div>
      </section>

      {/* Tests */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-navy-900 dark:text-white mb-2">Đề mini có bấm giờ</h2>
        <p className="text-navy-500 dark:text-paper-200 mb-7 max-w-2xl">Mỗi đề tập trung một Part, làm trong vài phút. Xong được chấm điểm và xem giải thích từng câu.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOEIC_TESTS.map((t, i) => (
            <TestCard key={t.id} t={t} index={i} result={scores[t.id]} />
          ))}
        </div>
      </section>

      <ExamGuide />
    </div>
  );
}
