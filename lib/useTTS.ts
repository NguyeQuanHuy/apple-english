"use client";
import { useCallback, useEffect, useRef, useState } from "react";
type TTSOptions = { rate?: number; pitch?: number; lang?: string };
export type TTSState = "idle" | "speaking" | "unsupported";
export function useTTS(options: TTSOptions = {}) {
  const { rate = 0.9, pitch = 1, lang = "en-US" } = options;
  const [state, setState] = useState<TTSState>("idle");
  const [currentWord, setCurrentWord] = useState<string | null>(null);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  useEffect(() => {
    if (!supported) setState("unsupported");
    if (supported) window.speechSynthesis.getVoices();
  }, [supported]);
  const getBestVoice = useCallback((): SpeechSynthesisVoice | null => {
    if (!supported) return null;
    const voices = window.speechSynthesis.getVoices();
    return (
      voices.find((v) => v.name.includes("Google US English")) ??
      voices.find((v) => v.lang === "en-US" && !v.localService) ??
      voices.find((v) => v.lang === "en-US") ??
      voices.find((v) => v.lang.startsWith("en")) ??
      null
    );
  }, [supported]);
  const speak = useCallback((text: string) => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang; utter.rate = rate; utter.pitch = pitch;
    const voice = getBestVoice();
    if (voice) utter.voice = voice;
    utter.onstart = () => { setState("speaking"); setCurrentWord(text); };
    utter.onend = () => { setState("idle"); setCurrentWord(null); };
    utter.onerror = () => { setState("idle"); setCurrentWord(null); };
    utterRef.current = utter;
    window.speechSynthesis.speak(utter);
  }, [supported, lang, rate, pitch, getBestVoice]);
  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setState("idle"); setCurrentWord(null);
  }, [supported]);
  useEffect(() => () => { if (supported) window.speechSynthesis.cancel(); }, [supported]);
  return { speak, stop, state, currentWord, supported };
}