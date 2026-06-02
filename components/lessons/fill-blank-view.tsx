"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Lightbulb } from "lucide-react";
import type { FillBlankItem } from "@/data/beginner-lessons";
import { AudioButton } from "./audio-button";
import { normalize, similarity } from "@/lib/audio";

export function FillBlankView({
  items,
  onComplete,
}: {
  items: FillBlankItem[];
  onComplete: () => void;
}) {
  const [idx, setIdx] = useState(0);
  const [input, setInput] = useState("");
  const [reveal, setReveal] = useState(false);
  const [result, setResult] = useState<"correct" | "close" | "wrong" | null>(null);
  const [showHint, setShowHint] = useState(false);

  const item = items[idx];
  const sentenceParts = item.sentence.split("___");
  const fullSentence = item.sentence.replace("___", item.answer);

  function check() {
    if (!input.trim()) return;
    const normalized = normalize(input);
    const accepted = [item.answer, ...(item.alts ?? [])].map(normalize);

    if (accepted.includes(normalized)) {
      setResult("correct");
    } else {
      // Check if close (typo)
      const closeMatch = accepted.some((a) => similarity(normalized, a) >= 0.75);
      setResult(closeMatch ? "close" : "wrong");
    }
    setReveal(true);
  }

  function nextItem() {
    if (idx < items.length - 1) {
      setIdx(idx + 1);
      setInput("");
      setReveal(false);
      setResult(null);
      setShowHint(false);
    } else {
      onComplete();
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter") {
      if (!reveal) check();
      else nextItem();
    }
  }

  return (
    <div>
      <div className="text-xs font-bold uppercase tracking-widest text-ember-500">
        Điền chỗ trống {idx + 1}/{items.length}
      </div>
      <h2 className="font-display text-2xl md:text-3xl font-black mt-2">
        Hoàn thành câu sau
      </h2>

      <div className="mt-6 card-paper p-5">
        <div className="text-lg md:text-xl leading-relaxed flex flex-wrap items-center gap-2">
          <span>{sentenceParts[0]}</span>
          {!reveal ? (
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              autoFocus
              placeholder="..."
              className="px-3 py-1 bg-ember-50 dark:bg-ember-700/20 border-b-2 border-ember-500 outline-none font-bold text-ember-700 dark:text-ember-100 min-w-[100px] rounded-t-md"
            />
          ) : (
            <span
              className={`px-3 py-1 rounded-md font-bold ${
                result === "correct" || result === "close"
                  ? "bg-teal-100 text-teal-700 dark:bg-teal-700/30 dark:text-teal-50"
                  : "bg-rose-400/20 text-rose-600 dark:text-rose-400"
              }`}
            >
              {input || "(trống)"}
            </span>
          )}
          <span>{sentenceParts[1]}</span>
        </div>

        <div className="mt-3 text-sm text-ink-500 italic">
          Dịch: "{item.vi}"
        </div>

        {item.hint && (
          <div className="mt-3">
            {!showHint ? (
              <button
                onClick={() => setShowHint(true)}
                className="text-xs font-bold text-gold-500 inline-flex items-center gap-1 hover:underline"
              >
                <Lightbulb className="w-3 h-3" /> Xem gợi ý
              </button>
            ) : (
              <div className="text-xs font-bold text-gold-500 inline-flex items-center gap-1">
                <Lightbulb className="w-3 h-3" /> {item.hint}
              </div>
            )}
          </div>
        )}
      </div>

      {reveal && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mt-4 p-4 rounded-chunky ${
            result === "correct"
              ? "bg-teal-50 dark:bg-teal-700/20 text-teal-700 dark:text-teal-50"
              : result === "close"
              ? "bg-gold-400/15 text-gold-500"
              : "bg-rose-400/10 text-rose-600 dark:text-rose-400"
          }`}
        >
          <div className="font-bold flex items-center gap-2 mb-1">
            {result === "correct" && <><CheckCircle2 className="w-4 h-4" /> Chính xác!</>}
            {result === "close" && <><Lightbulb className="w-4 h-4" /> Gần đúng — có thể bạn gõ sai chính tả</>}
            {result === "wrong" && <><XCircle className="w-4 h-4" /> Chưa đúng</>}
          </div>
          {result !== "correct" && (
            <div className="text-sm">
              Đáp án đúng: <strong>{item.answer}</strong>
              {item.alts && item.alts.length > 0 && (
                <span className="text-ink-500"> (hoặc: {item.alts.join(", ")})</span>
              )}
            </div>
          )}
          <div className="mt-2 flex items-center gap-2 text-sm">
            <AudioButton text={fullSentence} size="sm" />
            <span className="italic">"{fullSentence}"</span>
          </div>
        </motion.div>
      )}

      <div className="mt-6 flex justify-end gap-3">
        {!reveal ? (
          <button onClick={check} disabled={!input.trim()} className="btn-bump-ember">
            Kiểm tra
          </button>
        ) : (
          <button onClick={nextItem} className="btn-bump-teal">
            {idx < items.length - 1 ? "Câu tiếp" : "Tiếp tục"}
          </button>
        )}
      </div>
    </div>
  );
}
