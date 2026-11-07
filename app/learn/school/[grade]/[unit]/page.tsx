"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from "lucide-react";
import { getGrade, unitKey, type SchoolQuiz, type SchoolUnit } from "@/data/school";
import { useProgress } from "@/lib/store";
import { shuffleOptions } from "@/lib/games";
import { SpeakButton } from "@/components/SpeakButton";

type Step = "words" | "grammar" | "quiz";
const STEPS: { id: Step; label: string }[] = [
  { id: "words", label: "Từ vựng" },
  { id: "grammar", label: "Ngữ pháp" },
  { id: "quiz", label: "Luyện tập" },
];
const PASS = 3; // of 4

function Words({ unit }: { unit: SchoolUnit }) {
  const [hideVi, setHideVi] = useState(false);
  return (
    <div>
      <div className="flex justify-end mb-3">
        <button onClick={() => setHideVi((v) => !v)} aria-pressed={hideVi} className="text-sm font-semibold px-3 py-1.5 rounded-lg text-navy-700 dark:text-paper-100 bg-navy-900/[0.05] dark:bg-white/10 hover:bg-navy-900/10">
          {hideVi ? "Hiện nghĩa tiếng Việt" : "Che nghĩa để tự kiểm tra"}
        </button>
      </div>
      <ul className="rounded-3xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10 overflow-hidden">
        {unit.words.map((w) => (
          <li key={w.en} className="p-4 sm:p-5 flex gap-4">
            <SpeakButton text={w.en} size="md" className="flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="text-xl font-bold text-navy-900 dark:text-white">{w.en}</p>
              <p className={`text-[15px] font-semibold text-apple-600 dark:text-apple-500 transition-opacity ${hideVi ? "opacity-0 select-none" : ""}`} aria-hidden={hideVi}>{w.vi}</p>
              <div className="mt-1.5 flex items-start gap-2">
                <p className="flex-1 text-[15px] italic text-navy-500 dark:text-paper-200">{w.example}</p>
                <SpeakButton text={w.example} size="sm" className="flex-shrink-0" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Grammar({ unit }: { unit: SchoolUnit }) {
  const g = unit.grammar;
  return (
    <div className="space-y-5">
      <div>
        <h2 className="font-display text-2xl font-extrabold text-navy-900 dark:text-white mb-2">{g.title}</h2>
        <p className="text-[17px] leading-relaxed text-navy-700 dark:text-paper-100">{g.explain}</p>
      </div>
      <div className="oli-paper rounded-2xl border border-navy-900/10 dark:border-white/10 pl-16 pr-5 py-5">
        <p className="font-hand text-apple-500 text-xl mb-2" style={{ transform: "rotate(-1.5deg)" }}>Chép vào vở</p>
        <ul className="space-y-2">
          {g.forms.map((f) => (
            <li key={f} className="font-semibold text-navy-900 dark:text-white leading-relaxed">{f}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="text-sm font-semibold text-navy-400 mb-2">Ví dụ</p>
        <ul className="rounded-2xl bg-white dark:bg-navy-900 border border-navy-900/[0.08] dark:border-white/10 divide-y divide-navy-900/[0.07] dark:divide-white/10">
          {g.examples.map((e) => (
            <li key={e.en} className="p-4 flex items-start gap-3">
              <SpeakButton text={e.en} size="sm" className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-navy-900 dark:text-white">{e.en}</p>
                <p className="text-sm text-navy-500 dark:text-paper-200">{e.vi}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Quiz({ grade, unit, onFinish }: { grade: number; unit: SchoolUnit; onFinish: (score: number) => void }) {
  const [qs, setQs] = useState<SchoolQuiz[]>(() => unit.quiz.map(shuffleOptions));
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [results, setResults] = useState<boolean[]>([]);
  const [done, setDone] = useState(false);
  const nextRef = useRef<HTMLButtonElement>(null);
  const best = useProgress((s) => s.testScores[unitKey(grade, unit.id)]);

  const q = qs[idx];
  const reveal = picked !== null;
  useEffect(() => {
    if (reveal) nextRef.current?.focus();
  }, [reveal]);

  function choose(i: number) {
    if (reveal) return;
    setPicked(i);
    setResults((r) => [...r, i === q.correctIndex]);
  }
  function next() {
    if (idx < qs.length - 1) {
      setIdx(idx + 1);
      setPicked(null);
    } else {
      setDone(true);
      onFinish(results.filter(Boolean).length);
    }
  }
  function retry() {
    setQs(unit.quiz.map(shuffleOptions));
    setIdx(0);
    setPicked(null);
    setResults([]);
    setDone(false);
  }

  if (done) {
    const score = results.filter(Boolean).length;
    const passed = score >= PASS;
    return (
      <div className="text-center py-4">
        {passed && <p className="font-hand text-apple-500 text-3xl mb-2" style={{ transform: "rotate(-3deg)" }}>Giỏi lắm!</p>}
        <p className="font-display text-7xl font-extrabold tracking-tight text-navy-900 dark:text-white tabular-nums">
          {score}<span className="text-3xl text-navy-400">/{qs.length}</span>
        </p>
        <p className="text-lg font-semibold text-navy-700 dark:text-paper-100 mt-3 mb-2">
          {passed ? "Bạn đã qua bài này." : `Cần đúng ít nhất ${PASS} câu để qua bài. Xem lại phần ngữ pháp rồi thử lại nhé.`}
        </p>
        {best && <p className="text-sm text-navy-400 mb-6">Điểm cao nhất: {best.score}/{best.total}</p>}
        <button onClick={retry} className="btn-bump-ghost"><RotateCcw className="w-4 h-4" /> Làm lại</button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-1.5 mb-6" aria-label={`Câu ${idx + 1} trên ${qs.length}`}>
        {qs.map((_, i) => (
          <span key={i} className={`h-2 flex-1 rounded-full ${i < results.length ? (results[i] ? "bg-leaf-500" : "bg-apple-500") : i === idx ? "bg-navy-900/40 dark:bg-white/40" : "bg-navy-900/[0.08] dark:bg-white/10"}`} />
        ))}
      </div>
      <p className="text-sm font-semibold text-navy-400 mb-1">Câu {idx + 1}/{qs.length}</p>
      <h2 className="font-display text-2xl font-extrabold leading-snug text-navy-900 dark:text-white mb-5">{q.prompt}</h2>
      <div className="space-y-2.5">
        {q.options.map((o, i) => {
          const isAns = i === q.correctIndex;
          const isPicked = picked === i;
          let cls = "border-navy-900/10 dark:border-white/15 bg-white dark:bg-navy-900 text-navy-900 dark:text-white hover:border-navy-900/30 dark:hover:border-white/30";
          if (reveal && isAns) cls = "border-leaf-500 bg-leaf-50 dark:bg-leaf-500/15 text-leaf-700 dark:text-leaf-500";
          else if (reveal && isPicked) cls = "border-apple-500 bg-apple-50 dark:bg-apple-500/15 text-apple-700 dark:text-apple-500";
          else if (reveal) cls = "border-navy-900/10 dark:border-white/10 bg-white dark:bg-navy-900 text-navy-400 opacity-60";
          return (
            <button key={i} disabled={reveal} onClick={() => choose(i)} className={`w-full flex items-center gap-3 p-4 rounded-2xl border-2 text-left font-semibold transition-colors ${cls}`}>
              <span className="w-8 h-8 rounded-full bg-navy-900/[0.06] dark:bg-white/10 grid place-items-center text-sm font-bold flex-shrink-0">
                {reveal && isAns ? <Check className="w-4 h-4" strokeWidth={3} /> : reveal && isPicked ? <X className="w-4 h-4" strokeWidth={3} /> : String.fromCharCode(65 + i)}
              </span>
              {o}
            </button>
          );
        })}
      </div>
      {reveal && (
        <div className="mt-5">
          <div className={`rounded-2xl p-4 ${picked === q.correctIndex ? "bg-leaf-50 dark:bg-leaf-500/15" : "bg-apple-50 dark:bg-apple-500/15"}`}>
            <p className={`font-bold mb-1 ${picked === q.correctIndex ? "text-leaf-700 dark:text-leaf-500" : "text-apple-700 dark:text-apple-500"}`}>
              {picked === q.correctIndex ? "Chính xác!" : `Chưa đúng. Đáp án: ${q.options[q.correctIndex]}`}
            </p>
            <p className="text-[15px] text-navy-700 dark:text-paper-100">{q.explain}</p>
          </div>
          <div className="mt-5 flex justify-end">
            <button ref={nextRef} onClick={next} className="btn-bump-teal">{idx < qs.length - 1 ? "Câu tiếp" : "Xem kết quả"} <ArrowRight className="w-4 h-4" /></button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function SchoolUnitPage() {
  const params = useParams<{ grade: string; unit: string }>();
  const g = getGrade(Number(params.grade));
  const unit = g?.units.find((u) => u.id === params.unit);
  const [step, setStep] = useState<Step>("words");
  const [finished, setFinished] = useState<number | null>(null);
  const addXp = useProgress((s) => s.addXp);
  const markLessonComplete = useProgress((s) => s.markLessonComplete);
  const recordTestScore = useProgress((s) => s.recordTestScore);
  const completed = useProgress((s) => s.completedLessons);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!g || !unit) {
    return (
      <div className="max-w-md mx-auto px-4 pt-16 pb-24 text-center">
        <p className="text-lg text-navy-700 dark:text-paper-100 mb-4">Không tìm thấy bài học này.</p>
        <Link href="/learn/school" className="font-bold text-apple-600 dark:text-apple-500">Chọn lớp</Link>
      </div>
    );
  }

  const key = unitKey(g.grade, unit.id);
  const wasDone = mounted && completed.includes(key);
  const idx = g.units.findIndex((u) => u.id === unit.id);
  const nextUnit = g.units[idx + 1];
  const stepIdx = STEPS.findIndex((s) => s.id === step);

  function onFinish(score: number) {
    setFinished(score);
    recordTestScore(key, score, unit!.quiz.length);
    if (score >= PASS) {
      const firstTime = !completed.includes(key);
      addXp(firstTime ? 20 : 5, `school:${key}`);
      markLessonComplete(key);
    }
  }

  function go(s: Step) {
    setStep(s);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 pb-24 md:pb-12">
      <Link href={`/learn/school/${g.grade}`} className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-500 dark:text-paper-200 hover:text-navy-900 dark:hover:text-white">
        <ArrowLeft className="w-4 h-4" /> Lớp {g.grade}
      </Link>

      <header className="mt-5 mb-6">
        <p className="text-sm font-semibold text-navy-400">Lớp {g.grade} · Bài {idx + 1}/{g.units.length}{wasDone ? " · Đã học" : ""}</p>
        <h1 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.02em] text-navy-900 dark:text-white">{unit.title}</h1>
        <p className="text-lg text-navy-500 dark:text-paper-200">{unit.titleEn}</p>
      </header>

      <div className="sticky top-16 z-30 bg-[rgb(var(--bg)/0.92)] backdrop-blur-sm py-3 -mx-4 sm:-mx-6 px-4 sm:px-6 border-b border-navy-900/[0.07] dark:border-white/10 mb-6">
        <div role="tablist" aria-label="Các bước" className="grid grid-cols-3 gap-1.5">
          {STEPS.map((s, i) => {
            const active = s.id === step;
            return (
              <button
                key={s.id}
                role="tab"
                aria-selected={active}
                onClick={() => setStep(s.id)}
                className={`px-3 py-2.5 rounded-xl text-[15px] font-semibold inline-flex items-center justify-center gap-2 transition-colors ${active ? "bg-navy-900 text-white dark:bg-white dark:text-navy-900" : "text-navy-500 dark:text-paper-200 hover:bg-navy-900/[0.05] dark:hover:bg-white/10"}`}
              >
                <span className={`text-xs font-bold ${active ? "opacity-70" : "text-navy-400"}`}>{i + 1}</span>
                {s.label}
              </button>
            );
          })}
        </div>
      </div>

      <div role="tabpanel">
        {step === "words" && <Words unit={unit} />}
        {step === "grammar" && <Grammar unit={unit} />}
        {step === "quiz" && <Quiz key={unit.id} grade={g.grade} unit={unit} onFinish={onFinish} />}
      </div>

      {step !== "quiz" && (
        <button onClick={() => go(STEPS[stepIdx + 1].id)} className="mt-6 w-full flex items-center justify-between gap-4 rounded-2xl bg-navy-900 dark:bg-white/[0.06] text-white px-5 py-4 hover:bg-navy-700 dark:hover:bg-white/10 transition-colors">
          <span className="text-left">
            <span className="block text-sm text-white/60">Xong bước {stepIdx + 1}?</span>
            <span className="block font-bold">Sang bước {stepIdx + 2}: {STEPS[stepIdx + 1].label}</span>
          </span>
          <ArrowRight className="w-5 h-5" />
        </button>
      )}

      {step === "quiz" && finished !== null && (
        <div className="mt-8 border-t border-navy-900/10 dark:border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3">
          <Link href={`/learn/school/${g.grade}`} className="btn-bump-ghost">Về danh sách bài lớp {g.grade}</Link>
          {nextUnit && finished >= PASS && (
            <Link href={`/learn/school/${g.grade}/${nextUnit.id}`} className="btn-bump-ember">Bài tiếp: {nextUnit.title} <ArrowRight className="w-4 h-4" /></Link>
          )}
          {!nextUnit && finished >= PASS && getGrade(g.grade + 1) && (
            <Link href={`/learn/school/${g.grade + 1}`} className="btn-bump-ember">Sang lớp {g.grade + 1} <ArrowRight className="w-4 h-4" /></Link>
          )}
        </div>
      )}
    </div>
  );
}
