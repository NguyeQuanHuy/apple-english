"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mic, MicOff, CheckCircle2, AlertCircle, SkipForward } from "lucide-react";
import type { PronounceItem } from "@/data/beginner-lessons";
import { AudioButton, SlowAudioButton } from "./audio-button";
import { isRecognitionSupported, listen, normalize, similarity } from "@/lib/audio";

export function PronounceView({
  items,
  onComplete,
}: {
  items: PronounceItem[];
  onComplete: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [recording, setRecording] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activeListener, setActiveListener] = useState<{ stop: () => void } | null>(null);

  const item = items[idx];
  const supported = typeof window !== "undefined" && isRecognitionSupported();

  function startRecording() {
    setError(null);
    setTranscript(null);
    setScore(null);
    setRecording(true);

    const l = listen({
      lang: "en-US",
      onResult: (text, confidence) => {
        setTranscript(text);
        const sim = similarity(text, item.text);
        setScore(Math.round(sim * 100));
        setRecording(false);
        setActiveListener(null);
      },
      onError: (err) => {
        setRecording(false);
        setActiveListener(null);
        if (err === "not-allowed") setError("Bạn cần cho phép quyền microphone trong trình duyệt.");
        else if (err === "no-speech") setError("Không nghe được tiếng nói. Thử lại nhé.");
        else if (err === "not_supported") setError("Trình duyệt này không hỗ trợ luyện nói.");
        else setError("Lỗi: " + err);
      },
    });
    setActiveListener(l);
  }

  function stopRecording() {
    activeListener?.stop();
    setRecording(false);
  }

  function nextItem() {
    if (idx < items.length - 1) {
      setIdx(idx + 1);
      setTranscript(null);
      setScore(null);
      setError(null);
    } else {
      onComplete();
    }
  }

  function tryAgain() {
    setTranscript(null);
    setScore(null);
    setError(null);
  }

  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-ember-500">
        Luyện nói {idx + 1}/{items.length}
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-black mt-2">
        Đọc theo phát âm chuẩn
      </h2>

      <div className="mt-6 card-paper p-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ember-100 to-transparent dark:from-ember-700/20 dark:to-transparent opacity-50" aria-hidden />
        <div className="relative">
          <div className="font-display text-3xl md:text-4xl font-black">
            "{item.text}"
          </div>
          <div className="text-sm text-ink-500 mt-2 italic">{item.vi}</div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <AudioButton text={item.text} size="lg" />
            <SlowAudioButton text={item.text} />
          </div>

          {item.tip && (
            <div className="mt-4 mx-auto max-w-md text-xs text-gold-500 bg-gold-400/10 rounded-lg px-3 py-2 inline-block">
              💡 {item.tip}
            </div>
          )}
        </div>
      </div>

      {!supported ? (
        <div className="mt-6 card-paper p-4 bg-gold-400/10 text-sm">
          <div className="font-bold flex items-center gap-2 text-gold-600 mb-1">
            <AlertCircle className="w-4 h-4" /> Trình duyệt không hỗ trợ
          </div>
          <p className="text-ink-700 dark:text-paper-100">
            Tính năng luyện nói cần Chrome, Edge, Safari hoặc Coc Coc. Firefox không hỗ trợ.
            Bạn có thể bỏ qua bước này.
          </p>
        </div>
      ) : (
        <>
          {!transcript && !error && (
            <div className="mt-6 text-center">
              <motion.button
                onClick={recording ? stopRecording : startRecording}
                animate={recording ? { scale: [1, 1.05, 1] } : {}}
                transition={recording ? { repeat: Infinity, duration: 1 } : {}}
                className={`w-24 h-24 rounded-full grid place-items-center text-white transition-all ${
                  recording ? "bg-rose-500 shadow-lg shadow-rose-500/50" : "bg-ember-500"
                }`}
                style={{ boxShadow: recording ? undefined : "0 6px 0 0 #A53D08" }}
              >
                {recording ? <MicOff className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
              </motion.button>
              <div className="mt-3 font-bold text-sm">
                {recording ? "Đang ghi âm... bấm để dừng" : "Bấm để nói"}
              </div>
            </div>
          )}

          <AnimatePresence>
            {transcript && score !== null && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 card-paper p-5"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-ink-500 mb-2">
                  Bạn đã nói
                </div>
                <div className="font-display text-xl font-bold">"{transcript}"</div>

                <div className="mt-4">
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-sm font-bold">Điểm tương đồng</span>
                    <span
                      className={`font-display text-3xl font-black ${
                        score >= 80
                          ? "text-teal-500"
                          : score >= 50
                          ? "text-gold-500"
                          : "text-rose-500"
                      }`}
                    >
                      {score}%
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-ink-900/8 dark:bg-paper-50/8 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${score}%` }}
                      transition={{ duration: 0.6 }}
                      className={`h-full ${
                        score >= 80
                          ? "bg-teal-500"
                          : score >= 50
                          ? "bg-gold-400"
                          : "bg-rose-500"
                      }`}
                    />
                  </div>
                </div>

                <div className="mt-3 text-sm">
                  {score >= 80 ? (
                    <span className="text-teal-600 dark:text-teal-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Xuất sắc! Phát âm rõ ràng.
                    </span>
                  ) : score >= 50 ? (
                    <span className="text-gold-600 font-bold">
                      Khá ổn. Thử nghe lại và nói chậm hơn.
                    </span>
                  ) : (
                    <span className="text-rose-600 dark:text-rose-400 font-bold">
                      Cần luyện thêm. Nhấn nút loa nghe lại rồi thử nhé.
                    </span>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 card-paper p-4 bg-rose-400/10 text-rose-600 dark:text-rose-400 text-sm"
            >
              <div className="font-bold flex items-center gap-2 mb-1">
                <AlertCircle className="w-4 h-4" /> Không ghi âm được
              </div>
              {error}
            </motion.div>
          )}
        </>
      )}

      <div className="mt-6 flex justify-between">
        <button
          onClick={nextItem}
          className="inline-flex items-center gap-1 text-sm font-bold text-ink-500 hover:underline"
        >
          <SkipForward className="w-4 h-4" /> Bỏ qua
        </button>
        <div className="flex gap-3">
          {transcript && (
            <button onClick={tryAgain} className="btn-bump-ghost">
              Thử lại
            </button>
          )}
          <button onClick={nextItem} className="btn-bump-teal">
            {idx < items.length - 1 ? "Câu tiếp" : "Tiếp tục"}
          </button>
        </div>
      </div>
    </div>
  );
}
