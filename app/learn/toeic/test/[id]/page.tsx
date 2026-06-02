"use client";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowLeft, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { TOEIC_TESTS } from "@/data/toeic";
import { useProgress } from "@/lib/store";

export default function TestPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const test = TOEIC_TESTS.find((t) => t.id === params.id);

  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [currentIdx, setCurrentIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(test?.timeLimitSec ?? 0);
  const [submitted, setSubmitted] = useState(false);

  const recordTestScore = useProgress((s) => s.recordTestScore);
  const addXp = useProgress((s) => s.addXp);

  useEffect(() => {
    if (!started || submitted) return;
    if (timeLeft <= 0) {
      setSubmitted(true);
      return;
    }
    const i = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(i);
  }, [started, submitted, timeLeft]);

  const score = useMemo(() => {
    if (!test) return 0;
    return test.questions.reduce((acc, q) => acc + (answers[q.id] === q.correctIndex ? 1 : 0), 0);
  }, [answers, test]);

  // Record on first submission
  useEffect(() => {
    if (submitted && test) {
      recordTestScore(test.id, score, test.questions.length);
      // XP: 5 per correct + 20 bonus for completing
      addXp(score * 5 + 20, `toeic-test:${test.id}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [submitted]);

  if (!test) return <div className="p-8">Không tìm thấy đề.</div>;

  const mm = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const ss = String(timeLeft % 60).padStart(2, "0");

  if (!started) {
    return (
      <div className="max-w-xl mx-auto px-4 sm:px-6 pt-12 text-center">
        <div className="text-xs font-bold uppercase tracking-widest text-teal-500">TOEIC Mini Test</div>
        <h1 className="font-display text-4xl font-black mt-2">{test.title}</h1>
        <p className="mt-3 text-ink-500">{test.description}</p>

        <div className="card-paper p-6 mt-8 text-left">
          <h3 className="font-bold mb-3">Quy tắc:</h3>
          <ul className="text-sm space-y-2 text-ink-700 dark:text-paper-100">
            <li>• Đồng hồ bắt đầu đếm ngay khi bạn vào đề.</li>
            <li>• Hết giờ → tự động nộp bài.</li>
            <li>• Có thể quay lại sửa câu trước khi nộp.</li>
            <li>• Sau khi nộp, xem được câu sai và lời giải.</li>
          </ul>
        </div>

        <button onClick={() => setStarted(true)} className="btn-bump-teal mt-8">
          Bắt đầu làm bài
        </button>
      </div>
    );
  }

  if (submitted) {
    return <ReviewScreen test={test} answers={answers} score={score} onBack={() => router.push("/learn/toeic")} />;
  }

  const q = test.questions[currentIdx];
  const answered = Object.keys(answers).length;

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-32">
      <div className="flex items-center justify-between mb-6">
        <Link href="/learn/toeic" className="text-sm text-ink-500 font-bold inline-flex items-center gap-1">
          <ArrowLeft className="w-4 h-4" /> Thoát
        </Link>
        <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono font-bold ${
          timeLeft < 60 ? "bg-rose-400/15 text-rose-500 animate-pulse" : "bg-ink-900/5 dark:bg-paper-50/5"
        }`}>
          <Clock className="w-4 h-4" />
          {mm}:{ss}
        </div>
      </div>

      {/* Question grid nav */}
      <div className="grid grid-cols-10 gap-1.5 mb-6">
        {test.questions.map((qq, i) => (
          <button
            key={qq.id}
            onClick={() => setCurrentIdx(i)}
            className={`h-8 rounded text-xs font-bold transition-colors ${
              i === currentIdx
                ? "bg-teal-500 text-white"
                : answers[qq.id] !== undefined
                ? "bg-teal-50 text-teal-700 dark:bg-teal-700/30 dark:text-teal-50"
                : "bg-ink-900/5 dark:bg-paper-50/5 text-ink-500"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          {q.passage && (
            <div className="card-paper p-4 text-sm whitespace-pre-wrap text-ink-700 dark:text-paper-100 mb-5 font-mono leading-relaxed max-h-72 overflow-y-auto">
              {q.passage}
            </div>
          )}

          <div className="text-xs font-bold uppercase tracking-widest text-teal-500">
            Câu {currentIdx + 1} • Part {q.part}
          </div>
          <h2 className="font-display text-xl md:text-2xl font-bold mt-1.5 leading-snug">
            {q.question}
          </h2>

          <div className="mt-5 space-y-2.5">
            {q.options.map((opt, i) => {
              const picked = answers[q.id] === i;
              return (
                <button
                  key={i}
                  onClick={() => setAnswers({ ...answers, [q.id]: i })}
                  className={`card-paper p-3.5 text-left w-full font-semibold transition-all ${
                    picked ? "ring-2 ring-teal-500" : "hover:-translate-y-0.5"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-6 h-6 rounded-md grid place-items-center text-xs font-black ${
                      picked ? "bg-teal-500 text-white" : "bg-ink-900/8 dark:bg-paper-50/8"
                    }`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    <span>{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="fixed bottom-0 inset-x-0 bg-paper-50/95 dark:bg-ink-900/95 backdrop-blur border-t border-ink-900/8 dark:border-paper-50/8 py-4">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          <button
            onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
            disabled={currentIdx === 0}
            className="inline-flex items-center gap-1 text-sm font-bold text-ink-500 disabled:opacity-30"
          >
            <ArrowLeft className="w-4 h-4" /> Trước
          </button>
          <div className="text-xs font-bold text-ink-500">
            {answered}/{test.questions.length} câu
          </div>
          {currentIdx < test.questions.length - 1 ? (
            <button
              onClick={() => setCurrentIdx(currentIdx + 1)}
              className="btn-bump-teal"
            >
              Câu tiếp <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setSubmitted(true)}
              className="btn-bump-ember"
            >
              Nộp bài
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewScreen({
  test,
  answers,
  score,
  onBack,
}: {
  test: (typeof TOEIC_TESTS)[number];
  answers: Record<string, number>;
  score: number;
  onBack: () => void;
}) {
  const total = test.questions.length;
  const pct = Math.round((score / total) * 100);
  const wrong = test.questions.filter((q) => answers[q.id] !== q.correctIndex);

  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-10 pb-16">
      <div className="text-center mb-10">
        <div className="text-xs font-bold uppercase tracking-widest text-teal-500">Kết quả</div>
        <div className="font-display text-7xl md:text-8xl font-black mt-4">
          {score}<span className="text-ink-300">/{total}</span>
        </div>
        <div className="mt-2 text-ink-500">
          {pct}% • +{score * 5 + 20} XP
        </div>
      </div>

      {wrong.length === 0 ? (
        <div className="card-paper p-6 text-center">
          <div className="text-4xl mb-2">🎯</div>
          <div className="font-display text-xl font-bold">Hoàn hảo!</div>
          <div className="text-sm text-ink-500 mt-1">Không có câu nào sai.</div>
        </div>
      ) : (
        <div>
          <h3 className="font-display text-xl font-bold mb-3">
            Xem lại {wrong.length} câu sai
          </h3>
          <div className="space-y-4">
            {wrong.map((q) => (
              <div key={q.id} className="card-paper p-4">
                <div className="text-xs font-bold uppercase tracking-widest text-rose-500 mb-2">
                  Part {q.part}
                </div>
                <div className="font-semibold">{q.question}</div>
                <div className="mt-3 text-sm">
                  <div className="flex items-start gap-2 text-rose-500">
                    <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Bạn chọn: {answers[q.id] !== undefined ? q.options[answers[q.id]] : "Chưa trả lời"}</span>
                  </div>
                  <div className="flex items-start gap-2 text-teal-500 mt-1">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                    <span>Đáp án đúng: {q.options[q.correctIndex]}</span>
                  </div>
                </div>
                {q.explain && (
                  <div className="text-sm text-ink-500 mt-2 italic">{q.explain}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-10 flex justify-center">
        <button onClick={onBack} className="btn-bump-teal">
          Về trang TOEIC
        </button>
      </div>
    </div>
  );
}
