// Audio helper — uses browser's built-in Web Speech API
// No external service, no API key, free forever
// Supported in: Chrome, Edge, Safari, Coc Coc (good for VN users)

let voices: SpeechSynthesisVoice[] = [];
let voicesLoaded = false;

function loadVoices() {
  if (typeof window === "undefined" || !window.speechSynthesis) return;
  voices = window.speechSynthesis.getVoices();
  voicesLoaded = voices.length > 0;
}

// Some browsers load voices async
if (typeof window !== "undefined" && window.speechSynthesis) {
  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
}

export function isSpeechSupported(): boolean {
  return typeof window !== "undefined" && "speechSynthesis" in window;
}

export function isRecognitionSupported(): boolean {
  if (typeof window === "undefined") return false;
  return "webkitSpeechRecognition" in window || "SpeechRecognition" in window;
}

/**
 * Speak English text using browser TTS.
 * Tries to pick a good native English voice (US/UK preferred).
 */
export function speak(text: string, opts: { rate?: number; lang?: string } = {}) {
  if (!isSpeechSupported()) return;
  // Cancel any ongoing speech
  window.speechSynthesis.cancel();

  if (!voicesLoaded) loadVoices();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = opts.lang ?? "en-US";
  utterance.rate = opts.rate ?? 0.9; // slightly slower for learners
  utterance.pitch = 1;
  utterance.volume = 1;

  // Pick best English voice if available
  const englishVoices = voices.filter((v) => v.lang.startsWith("en"));
  const preferred =
    englishVoices.find((v) => v.lang === "en-US" && v.name.toLowerCase().includes("google")) ||
    englishVoices.find((v) => v.lang === "en-US") ||
    englishVoices.find((v) => v.lang === "en-GB") ||
    englishVoices[0];
  if (preferred) utterance.voice = preferred;

  window.speechSynthesis.speak(utterance);
}

/**
 * Listen to user speech and return transcript.
 * Returns null if not supported or user denied permission.
 */
export function listen(
  opts: { lang?: string; onResult: (transcript: string, confidence: number) => void; onError?: (err: string) => void } = {
    onResult: () => {},
  }
): { stop: () => void } | null {
  if (!isRecognitionSupported()) {
    opts.onError?.("not_supported");
    return null;
  }

  // @ts-ignore — webkitSpeechRecognition isn't in default TS types
  const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const r = new Recognition();
  r.lang = opts.lang ?? "en-US";
  r.continuous = false;
  r.interimResults = false;
  r.maxAlternatives = 3;

  r.onresult = (event: any) => {
    const result = event.results[0];
    if (result) {
      const transcript = result[0].transcript as string;
      const confidence = result[0].confidence as number;
      opts.onResult(transcript, confidence);
    }
  };

  r.onerror = (event: any) => {
    opts.onError?.(event.error || "unknown");
  };

  try {
    r.start();
  } catch (e) {
    opts.onError?.("start_failed");
    return null;
  }

  return {
    stop: () => {
      try { r.stop(); } catch {}
    },
  };
}

/**
 * Normalize text for comparison: lowercase, strip punctuation, collapse whitespace.
 * Used for fill-blank checking AND speech recognition matching.
 */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .replace(/[.,!?;:'"()]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Compute similarity between two strings (0-1).
 * Used for "close enough" matching in speech and fill-blank.
 * Uses Levenshtein distance.
 */
export function similarity(a: string, b: string): number {
  const s1 = normalize(a);
  const s2 = normalize(b);
  if (s1 === s2) return 1;
  if (!s1 || !s2) return 0;
  const maxLen = Math.max(s1.length, s2.length);
  return 1 - levenshtein(s1, s2) / maxLen;
}

function levenshtein(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (a[i - 1] === b[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m][n];
}
