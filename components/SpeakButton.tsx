"use client";
import { useEffect, useState } from "react";
import { useTTS } from "@/lib/useTTS";
type Props = { text: string; size?: "sm" | "md" | "lg"; className?: string };
const sizeMap = { sm: "w-7 h-7", md: "w-9 h-9", lg: "w-11 h-11" };
export function SpeakButton({ text, size = "md", className = "" }: Props) {
  const { speak, stop, state, currentWord } = useTTS({ rate: 0.85 });
  // Speech support is only known in the browser; decide after mount so server and client HTML match
  const [canSpeak, setCanSpeak] = useState<boolean | null>(null);
  useEffect(() => setCanSpeak("speechSynthesis" in window), []);
  if (canSpeak === null) return <span className={`inline-block ${sizeMap[size]} ${className}`} aria-hidden="true" />;
  if (!canSpeak) return null;
  const isSpeaking = state === "speaking" && currentWord === text;
  return (
    <button
      onClick={() => (isSpeaking ? stop() : speak(text))}
      aria-label={isSpeaking ? "Dừng" : "Phát âm"}
      className={`inline-flex items-center justify-center rounded-full border transition-all duration-150 ${sizeMap[size]} ${isSpeaking ? "bg-apple-500 border-apple-500 text-white scale-110 shadow-md" : "bg-white dark:bg-navy-900 border-navy-900/15 dark:border-white/20 text-navy-500 dark:text-paper-200 hover:border-apple-500 hover:text-apple-600 hover:bg-apple-50 dark:hover:bg-apple-500/15"} ${className}`}
    >
      {isSpeaking ? (
        <span className="flex items-end gap-px h-4">
          <span className="w-0.5 bg-current rounded-full animate-bounce" style={{height:"40%"}} />
          <span className="w-0.5 bg-current rounded-full animate-bounce" style={{height:"100%",animationDelay:"0.1s"}} />
          <span className="w-0.5 bg-current rounded-full animate-bounce" style={{height:"60%",animationDelay:"0.2s"}} />
          <span className="w-0.5 bg-current rounded-full animate-bounce" style={{height:"80%",animationDelay:"0.15s"}} />
        </span>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      )}
    </button>
  );
}