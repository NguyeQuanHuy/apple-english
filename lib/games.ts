import { BEGINNER_LESSONS } from "@/data/beginner-lessons";
import { EXTRA_LESSONS } from "@/data/extra-lessons";
import { TOPICS } from "@/data/topics";
import { GAME_WORDS, SENTENCE_PUZZLES, FILL_BLANK } from "@/data/games";

export function shuffle<T>(arr: readonly T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export type GameWord = { en: string; vi: string; group: string };

/** Short everyday words from the game list plus each topic's basic words. */
export const WORD_POOL: GameWord[] = (() => {
  const seen = new Set<string>();
  const out: GameWord[] = [];
  const add = (en: string, vi: string, group: string) => {
    const key = en.toLowerCase();
    if (seen.has(key) || en.length > 14 || vi.length > 18) return;
    seen.add(key);
    out.push({ en, vi, group });
  };
  GAME_WORDS.forEach((w) => add(w.en, w.vi, "basic"));
  TOPICS.forEach((t) => t.basicVocab.forEach((v) => add(v.en, v.vi, t.id)));
  return out;
})();

export type Puzzle = { target: string; pieces: string[]; vi: string };

/** Sentence puzzles from the game list and from every lesson's sentence-builder step. */
export const PUZZLE_POOL: Puzzle[] = (() => {
  const seen = new Set<string>();
  const out: Puzzle[] = [];
  const fromLessons = [...BEGINNER_LESSONS, ...EXTRA_LESSONS].flatMap((l) =>
    l.steps.flatMap((s) => (s.kind === "sentence-builder" ? s.puzzles : []))
  );
  for (const p of [...SENTENCE_PUZZLES, ...fromLessons]) {
    if (seen.has(p.target) || p.pieces.join(" ") !== p.target) continue;
    seen.add(p.target);
    out.push({ target: p.target, pieces: p.pieces, vi: p.vi });
  }
  return out;
})();

export const FILL_POOL = FILL_BLANK;

export type QuickQuestion = { prompt: string; speak?: string; options: string[]; correctIndex: number };

/** "'x' nghĩa là?" questions with distractors from the same topic when possible. */
export function makeQuickQuiz(n: number): QuickQuestion[] {
  return shuffle(WORD_POOL)
    .slice(0, n)
    .map((w) => {
      const sameGroup = WORD_POOL.filter((x) => x.group === w.group && x.vi !== w.vi);
      const others = WORD_POOL.filter((x) => x.vi !== w.vi);
      const pool = sameGroup.length >= 3 ? sameGroup : others;
      const distractors: string[] = [];
      for (const d of shuffle(pool)) {
        if (!distractors.includes(d.vi)) distractors.push(d.vi);
        if (distractors.length === 3) break;
      }
      const options = shuffle([w.vi, ...distractors]);
      return { prompt: w.en, speak: w.en, options, correctIndex: options.indexOf(w.vi) };
    });
}

export type GameId = "match" | "fast-quiz" | "sentence" | "fill-blank";

export const GAMES: {
  id: GameId;
  href: string;
  title: string;
  skill: string;
  desc: string;
  length: string;
  scoreLabel: string;
}[] = [
  { id: "match", href: "/games/match", title: "Ghép từ", skill: "Từ vựng", desc: "Nối từ tiếng Anh với nghĩa tiếng Việt, 2 vòng mỗi vòng 6 cặp.", length: "45 giây", scoreLabel: "cặp" },
  { id: "fast-quiz", href: "/games/fast-quiz", title: "Quiz tốc độ", skill: "Phản xạ", desc: "10 từ, mỗi từ 8 giây để chọn nghĩa. Trả lời càng nhanh càng nhiều điểm.", length: "khoảng 1 phút", scoreLabel: "điểm" },
  { id: "sentence", href: "/games/sentence", title: "Xếp câu", skill: "Ngữ pháp", desc: "Bấm các từ theo đúng thứ tự để thành câu hoàn chỉnh.", length: "6 câu", scoreLabel: "câu đúng" },
  { id: "fill-blank", href: "/games/fill-blank", title: "Điền từ", skill: "Ngữ pháp", desc: "Chọn từ đúng cho chỗ trống: am, is, are, giới từ, thì quá khứ, so sánh…", length: "8 câu", scoreLabel: "câu đúng" },
];

/** Shuffle an item's options and move correctIndex with them, so answers aren't always in the same slot. */
export function shuffleOptions<T extends { options: readonly string[]; correctIndex: number }>(item: T): T {
  const order = shuffle(item.options.map((_, i) => i));
  return { ...item, options: order.map((i) => item.options[i]), correctIndex: order.indexOf(item.correctIndex) } as T;
}
