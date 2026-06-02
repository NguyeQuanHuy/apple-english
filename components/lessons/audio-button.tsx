"use client";
import { useState } from "react";
import { Volume2 } from "lucide-react";
import { speak, isSpeechSupported } from "@/lib/audio";

export function AudioButton({
  text,
  rate = 0.9,
  size = "md",
  className = "",
}: {
  text: string;
  rate?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);

  if (!isSpeechSupported()) return null;

  const sizeMap = {
    sm: "w-7 h-7 [&>svg]:w-3.5 [&>svg]:h-3.5",
    md: "w-9 h-9 [&>svg]:w-4 [&>svg]:h-4",
    lg: "w-11 h-11 [&>svg]:w-5 [&>svg]:h-5",
  };

  function handleClick(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setPlaying(true);
    speak(text, { rate });
    // Visual feedback ~ length of text
    const ms = Math.max(400, text.length * 70);
    setTimeout(() => setPlaying(false), ms);
  }

  return (
    <button
      onClick={handleClick}
      aria-label={`Phát âm: ${text}`}
      className={`shrink-0 grid place-items-center rounded-full bg-teal-50 text-teal-600 dark:bg-teal-700/30 dark:text-teal-100 hover:bg-teal-100 dark:hover:bg-teal-700/50 transition-all ${
        playing ? "ring-2 ring-teal-500 animate-pop" : ""
      } ${sizeMap[size]} ${className}`}
    >
      <Volume2 />
    </button>
  );
}

// Slow speech button (for learners who need it slower)
export function SlowAudioButton({ text, className = "" }: { text: string; className?: string }) {
  if (!isSpeechSupported()) return null;
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        speak(text, { rate: 0.6 });
      }}
      aria-label={`Phát âm chậm: ${text}`}
      className={`shrink-0 inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-bold bg-gold-400/15 text-gold-500 hover:bg-gold-400/25 transition-colors ${className}`}
    >
      <Volume2 className="w-3 h-3" />
      Chậm
    </button>
  );
}
