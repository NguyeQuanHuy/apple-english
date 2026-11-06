"use client";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, Headphones, RotateCcw, Volume2, X } from "lucide-react";
import { PART2, type Part2Item } from "@/data/toeic-practice";
import { useProgress } from "@/lib/store";
import { shuffle, shuffleOptions } from "@/lib/games";

const N = 10;
const LETTERS = ["A", "B", "C"] as const;

/* ── Speech: question in one voice, answers in another, like the real test ── */

function pickVoices() {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return { q: null, a: null };
  const vs = window.speechSynthesis.getVoices().filter((v) => v.lang.startsWith("en"));
  const us = vs.find((v) => v.lang === "en-US" && /Google|Samantha|Aria|Jenny/i.test(v.name)) ?? vs.find((v) => v.lang === "en-US") ?? vs[0] ?? null;
  const other = vs.find((v) => (v.lang === "en-GB" || v.lang === "en-AU") && v !== us) ?? vs.find((v) => v !== us) ?? us;
  return { q: us, a: other };
}

function useSequenceSpeech(rate: number) {
  const [speaking, setSpeaking] = useState<number | null>(null); // -1 question, 0..2 answers
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  useEffect(() => {
    if (supported) window.speechSynthesis.getVoices();
    return () => {
      if (supported) window.speechSynthesis.cancel();
    };
  }, [supported]);

  const play = useCallback(
    (item: Part2Item) => {
      if (!supported) return;
      const synth = window.speechSynthesis;
      synth.cancel();
      const { q, a } = pickVoices();
      const parts: { text: string; voice: SpeechSynthesisVoice | null; mark: number }[] = [
        { text: item.question, voice: q, mark: -1 },
        ...item.options.map((o, i) => ({ text: `${LETTERS[i]}. ${o}`, voice: a, mark: i })),
      ];
      parts.forEach((p, i) => {
        const u = new SpeechSynthesisUtterance(p.text);
        u.lang = p.voice?.lang ?? "en-US";
        if (p.voice) u.voice = p.voice;
        u.rate = rate;
        u.onstart = () => setSpeaking(p.mark);
        if (i === parts.length - 1) {
          u.onend = () => setSpeaking(null);
          u.onerror = () => setSpeaking(null);
        }
        synth.speak(u);
      });
    },
    [supported, rate]
  );
  const stop = useCallback(() => {
    if (supported) window.speechSynthesis.cancel();
    setSpeaking(null);
  }, [supported]);
  return { play, stop, speaking, supported };
}

/* ── Round ── */

function Round({ items, onDone, review }: { items: Part2Item[]; onDone: () => void; review: boolean }) {
  const addXp = useProgress((s) => s.addXp);
  const recordToeicAnswer = useProgress((s) => s.recordToeicAnswer);
  const [rate, setRate] = useState(0.95);
  const { play, stop, speaking, supported } = useSequenceSpeech(rate);
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [replays, setReplays] = useState(0);
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const nextRef = useRef<HTMLButtonElement>(null);

  const it = items[idx];
  const reveal = picked !== null;

  // Starting a question is always triggered by a click, so the browser lets speech play
  useEffect(() => {
    if (!finished) play(items[idx]);
  }, [idx, finished, items, play]);

  useEffect(() => {
    if (reveal) nextRef.current?.focus();
  }, [reveal]);

  function choose(i: number) {
    if (reveal) return;
    stop();
    const ok = i === it.correctIndex;
    setPicked(i);
    setResults((r) => [...r, ok]);
    recordToeicAnswer(it.id, "part2", ok);
  }

  function next() {
    if (idx < items.length - 1) {
      setIdx(idx + 1);
      setPicked(null);
      setReplays(0);
    } else {
      stop();
      const right = results.filter(Boolean).length;
      addXp(right * 3 + 5, "toeic:part2");
      setFinished(true);
    }
  }

  if (finished) {
    const right = results.filter(Boolean).length;
    const wrong = items.filter((_, i) => !results[i]);
    return (
      <div>
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-navy-400 mb-2">{review ? "Ôn câu sai Part 2" : "Luyện nghe Part 2"}</p>
          <p className="font-display text-7xl font-extrabold tracking-tight text-navy-900 dark:text-white tabular-nums">
            {right}<span className="text-3xl text-navy-400">/{items.length}</span>
          </p>
          <p className="text-lg font-semibold text-navy-700 dark:text-paper-100 mt-3">
            {right === items.length ? "Nghe chuẩn từng câu!" : right >= items.length * 0.7 ? "Tai nghe tốt rồi đó." : "Nghe lại các câu sai bên dưới nhé."}
          </p>
          <p className="mt-3 inline-block px-3 py-1 rounded-full bg-hl-200 dark:bg-hl-300/15 text-amber-800 dark:text-hl-300 font-bold text-sm">+{right * 3 + 5} XP</p>
        </div>
        {wrong.length > 0 && (
          <div className="mb-8">
            <h2 className="font-bold text-lg text-navy-900 dark:text-white mb-3">Câu sai đã được lưu vào sổ ôn tập</h2>
            <ul className="rounded-2xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10">
              {wrong.map((w) => (
                <li key={w.id} className="p-4">
                  <p className="font-bold text-navy-900 dark:text-white">{w.question}</p>
                  <p className="text-leaf-700 dark:text-leaf-500 font-semibold">{LETTERS[w.correctIndex]}. {w.options[w.correctIndex]}</p>
                  <p className="text-sm text-navy-500 dark:text-paper-200 mt-1">{w.explain}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button onClick={onDone} className="btn-bump-ember"><RotateCcw className="w-4 h-4" /> Luyện vòng mới</button>
          <Link href="/learn/toeic/part5" className="btn-bump-ghost">Sang luyện Part 5</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between gap-3 mb-4">
        <p className="text-sm font-semibold text-navy-500 dark:text-paper-200">Câu {idx + 1}/{items.length}</p>
        <div className="flex items-center gap-1 text-sm" role="group" aria-label="Tốc độ đọc">
          {[{ v: 0.8, l: "Chậm" }, { v: 0.95, l: "Thường" }].map((o) => (
            <button key={o.v} onClick={() => setRate(o.v)} aria-pressed={rate === o.v} className={`px-3 py-1 rounded-lg font-semibold ${rate === o.v ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900" : "text-navy-500 dark:text-paper-200 hover:bg-navy-900/[0.05] dark:hover:bg-white/10"}`}>
              {o.l}
            </button>
          ))}
        </div>
      </div>
      <div className="flex gap-1.5 mb-6" aria-hidden="true">
        {items.map((_, i) => (
          <span key={i} className={`h-2 flex-1 rounded-full ${i < results.length ? (results[i] ? "bg-leaf-500" : "bg-apple-500") : i === idx ? "bg-navy-900/40 dark:bg-white/40" : "bg-navy-900/[0.08] dark:bg-white/10"}`} />
        ))}
      </div>

      <div className="rounded-3xl bg-navy-900 text-white p-6 sm:p-8 mb-5">
        <div className="flex items-center gap-4">
          <button
            onClick={() => { setReplays((r) => r + 1); play(it); }}
            aria-label="Nghe lại"
            className={`w-16 h-16 rounded-full grid place-items-center flex-shrink-0 transition-colors ${speaking !== null ? "bg-apple-500" : "bg-white/10 hover:bg-white/20"}`}
          >
            <Volume2 className={`w-7 h-7 ${speaking !== null ? "animate-pulse" : ""}`} />
          </button>
          <div className="min-w-0">
            {reveal ? (
              <p className="font-display text-xl sm:text-2xl font-extrabold leading-snug">{it.question}</p>
            ) : (
              <>
                <p className="font-bold text-lg">{speaking === -1 ? "Đang đọc câu hỏi…" : speaking !== null ? `Đang đọc đáp án ${LETTERS[speaking]}…` : "Nghe câu hỏi và 3 đáp án"}</p>
                <p className="text-sm text-white/60">Chọn câu trả lời phù hợp nhất. {replays > 0 ? `Đã nghe lại ${replays} lần.` : "Bấm loa để nghe lại."}</p>
              </>
            )}
          </div>
        </div>
        {!supported && <p className="mt-4 text-sm text-hl-300">Trình duyệt này chưa hỗ trợ đọc giọng nói. Thử Chrome, Edge hoặc Safari.</p>}
      </div>

      <div className="space-y-2.5">
        {it.options.map((o, i) => {
          const isAns = i === it.correctIndex;
          const isPicked = picked === i;
          let cls = "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 hover:border-navy-900/30 dark:hover:border-white/30";
          if (reveal && isAns) cls = "border-leaf-500 bg-leaf-50 dark:bg-leaf-500/15";
          else if (reveal && isPicked) cls = "border-apple-500 bg-apple-50 dark:bg-apple-500/15";
          else if (reveal) cls = "border-navy-900/10 dark:border-white/10 bg-white dark:bg-navy-900 opacity-60";
          else if (speaking === i) cls = "border-navy-900 dark:border-white bg-white dark:bg-navy-900";
          return (
            <button key={i} disabled={reveal} onClick={() => choose(i)} className={`w-full flex items-center gap-4 p-4 rounded-2xl border-2 text-left transition-colors ${cls}`}>
              <span className={`w-10 h-10 rounded-full grid place-items-center font-extrabold flex-shrink-0 ${reveal && isAns ? "bg-leaf-500 text-white" : reveal && isPicked ? "bg-apple-500 text-white" : "bg-navy-900/[0.06] dark:bg-white/10 text-navy-900 dark:text-white"}`}>
                {reveal && isAns ? <Check className="w-5 h-5" strokeWidth={3} /> : reveal && isPicked ? <X className="w-5 h-5" strokeWidth={3} /> : LETTERS[i]}
              </span>
              <span className={`font-semibold ${reveal ? "text-navy-900 dark:text-white" : "text-navy-400"}`}>{reveal ? o : "Đáp án " + LETTERS[i]}</span>
            </button>
          );
        })}
      </div>

      {reveal && (
        <div className="mt-5">
          <div className={`rounded-2xl p-4 ${picked === it.correctIndex ? "bg-leaf-50 dark:bg-leaf-500/15" : "bg-apple-50 dark:bg-apple-500/15"}`}>
            <p className={`font-bold mb-1 ${picked === it.correctIndex ? "text-leaf-700 dark:text-leaf-500" : "text-apple-700 dark:text-apple-500"}`}>
              {picked === it.correctIndex ? "Chính xác!" : `Chưa đúng. Đáp án là ${LETTERS[it.correctIndex]}.`}
            </p>
            <p className="text-[15px] text-navy-700 dark:text-paper-100 leading-relaxed">{it.explain}</p>
          </div>
          <div className="mt-5 flex justify-between gap-3">
            <button onClick={() => play(it)} className="btn-bump-ghost"><Volume2 className="w-4 h-4" /> Nghe lại</button>
            <button ref={nextRef} onClick={next} className="btn-bump-teal">{idx < items.length - 1 ? "Câu tiếp" : "Xem kết quả"} <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Part2Page() {
  const toeicWrong = useProgress((s) => s.toeicWrong);
  const stats = useProgress((s) => s.toeicStats);
  const [mounted, setMounted] = useState(false);
  const [items, setItems] = useState<Part2Item[] | null>(null);
  const [review, setReview] = useState(false);
  useEffect(() => setMounted(true), []);

  const wrongItems = mounted ? PART2.filter((p) => (toeicWrong || []).includes(p.id)) : [];
  const st = mounted ? (stats || {})["part2"] : undefined;

  function start(reviewMode: boolean) {
    setReview(reviewMode);
    setItems((reviewMode ? shuffle(wrongItems) : shuffle(PART2)).slice(0, N).map(shuffleOptions));
  }

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      <Link href="/learn/toeic" className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white mb-5">
        <ArrowLeft className="w-4 h-4" /> Luyện TOEIC
      </Link>
      {items ? (
        <Round key={items.map((i) => i.id).join()} items={items} review={review} onDone={() => setItems(null)} />
      ) : (
        <>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-navy-900 dark:text-white mb-2">Luyện nghe Part 2</h1>
          <p className="text-lg text-navy-500 dark:text-paper-200 mb-6">Hỏi – đáp: nghe một câu hỏi và ba câu trả lời, chọn câu phù hợp nhất. Như thi thật, đề và đáp án chỉ có tiếng, không có chữ.</p>
          <div className="rounded-2xl bg-hl-200/60 dark:bg-hl-300/10 border border-hl-300 dark:border-hl-300/20 p-5 mb-6">
            <p className="font-bold text-navy-900 dark:text-white mb-2">3 bẫy hay gặp nhất ở Part 2</p>
            <ul className="space-y-1.5 text-[15px] text-navy-700 dark:text-paper-100">
              <li>• Đáp án lặp lại đúng một từ trong câu hỏi thường là đáp án sai.</li>
              <li>• Câu hỏi Where, When, Who… không bao giờ trả lời bằng Yes hoặc No.</li>
              <li>• Câu trả lời gián tiếp như “Let me check” hay “I’m not sure” rất hay là đáp án đúng.</li>
            </ul>
          </div>
          {st && (
            <p className="text-sm text-navy-500 dark:text-paper-200 mb-4">
              Bạn đã nghe {st.total} câu, đúng {Math.round((st.right / st.total) * 100)}%.
            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={() => start(false)} className="btn-bump-ember"><Headphones className="w-5 h-5" /> Bắt đầu {N} câu</button>
            {wrongItems.length > 0 && (
              <button onClick={() => start(true)} className="btn-bump-ghost"><RotateCcw className="w-4 h-4" /> Ôn {wrongItems.length} câu sai</button>
            )}
          </div>
          <p className="text-sm text-navy-400 mt-4">Nên đeo tai nghe. Ngân hàng hiện có {PART2.length} câu, mỗi vòng chọn ngẫu nhiên.</p>
        </>
      )}
    </div>
  );
}
