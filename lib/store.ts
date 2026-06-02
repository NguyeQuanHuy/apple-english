"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Achievement = {
  id: string;
  title: string;
  description: string;
  icon: string;
  unlockedAt?: number;
};

const ALL_ACHIEVEMENTS: Achievement[] = [
  { id: "first-step", title: "Bước đầu tiên", description: "Hoàn thành bài học đầu tiên", icon: "🌱" },
  { id: "streak-3", title: "3 ngày liền", description: "Học 3 ngày liên tục", icon: "🔥" },
  { id: "streak-7", title: "Một tuần kiên trì", description: "Học 7 ngày liên tục", icon: "⚡" },
  { id: "xp-100", title: "Người tập sự", description: "Đạt 100 XP", icon: "✨" },
  { id: "xp-500", title: "Người chăm chỉ", description: "Đạt 500 XP", icon: "💎" },
  { id: "toeic-starter", title: "TOEIC Starter", description: "Hoàn thành bài TOEIC đầu tiên", icon: "🎯" },
  { id: "game-master", title: "Game Master", description: "Chơi 10 ván mini-game", icon: "🎮" },
  { id: "perfect-quiz", title: "Hoàn hảo", description: "Đạt 100% một bài quiz", icon: "🏆" },
];

type State = {
  xp: number;
  streak: number;
  lastActiveDate: string | null; // YYYY-MM-DD
  completedLessons: string[];
  testScores: Record<string, { score: number; total: number; takenAt: number }>;
  gamesPlayed: number;
  achievements: Achievement[];
  // actions
  addXp: (amount: number, reason?: string) => void;
  markLessonComplete: (lessonId: string) => void;
  recordTestScore: (testId: string, score: number, total: number) => void;
  incrementGamesPlayed: () => void;
  pingDailyActivity: () => void;
  reset: () => void;
};

function todayStr() {
  return new Date().toISOString().slice(0, 10);
}

function dayDiff(a: string, b: string) {
  const da = new Date(a).getTime();
  const db = new Date(b).getTime();
  return Math.round((db - da) / (1000 * 60 * 60 * 24));
}

export const useProgress = create<State>()(
  persist(
    (set, get) => ({
      xp: 0,
      streak: 0,
      lastActiveDate: null,
      completedLessons: [],
      testScores: {},
      gamesPlayed: 0,
      achievements: [],

      addXp: (amount) => {
        set({ xp: get().xp + amount });
        get().pingDailyActivity();
        checkAchievements(set, get);
      },

      markLessonComplete: (lessonId) => {
        const list = get().completedLessons;
        if (!list.includes(lessonId)) {
          set({ completedLessons: [...list, lessonId] });
        }
        checkAchievements(set, get);
      },

      recordTestScore: (testId, score, total) => {
        set({
          testScores: {
            ...get().testScores,
            [testId]: { score, total, takenAt: Date.now() },
          },
        });
        if (testId.startsWith("toeic-")) {
          unlockAchievement(set, get, "toeic-starter");
        }
        if (score === total) {
          unlockAchievement(set, get, "perfect-quiz");
        }
      },

      incrementGamesPlayed: () => {
        set({ gamesPlayed: get().gamesPlayed + 1 });
        if (get().gamesPlayed >= 10) {
          unlockAchievement(set, get, "game-master");
        }
      },

      pingDailyActivity: () => {
        const today = todayStr();
        const last = get().lastActiveDate;
        if (last === today) return;
        if (!last) {
          set({ streak: 1, lastActiveDate: today });
        } else {
          const diff = dayDiff(last, today);
          if (diff === 1) set({ streak: get().streak + 1, lastActiveDate: today });
          else set({ streak: 1, lastActiveDate: today });
        }
        checkAchievements(set, get);
      },

      reset: () =>
        set({
          xp: 0,
          streak: 0,
          lastActiveDate: null,
          completedLessons: [],
          testScores: {},
          gamesPlayed: 0,
          achievements: [],
        }),
    }),
    { name: "englishstart-progress" }
  )
);

function unlockAchievement(set: any, get: any, id: string) {
  if (get().achievements.some((a: Achievement) => a.id === id)) return;
  const tpl = ALL_ACHIEVEMENTS.find((a) => a.id === id);
  if (!tpl) return;
  set({
    achievements: [...get().achievements, { ...tpl, unlockedAt: Date.now() }],
  });
}

function checkAchievements(set: any, get: any) {
  const s = get();
  if (s.completedLessons.length >= 1) unlockAchievement(set, get, "first-step");
  if (s.streak >= 3) unlockAchievement(set, get, "streak-3");
  if (s.streak >= 7) unlockAchievement(set, get, "streak-7");
  if (s.xp >= 100) unlockAchievement(set, get, "xp-100");
  if (s.xp >= 500) unlockAchievement(set, get, "xp-500");
}

export function getLevel(xp: number): { name: string; level: number; nextAt: number; progress: number } {
  // Levels: Beginner (0-200), Elementary (200-600), Pre-Int (600-1200), Intermediate (1200-2400), Advanced (2400+)
  const tiers = [
    { name: "Beginner", min: 0, max: 200 },
    { name: "Elementary", min: 200, max: 600 },
    { name: "Pre-Intermediate", min: 600, max: 1200 },
    { name: "Intermediate", min: 1200, max: 2400 },
    { name: "Advanced", min: 2400, max: Infinity },
  ];
  for (let i = 0; i < tiers.length; i++) {
    const t = tiers[i];
    if (xp >= t.min && xp < t.max) {
      const span = t.max - t.min;
      return {
        name: t.name,
        level: i + 1,
        nextAt: t.max,
        progress: span === Infinity ? 1 : (xp - t.min) / span,
      };
    }
  }
  return { name: "Advanced", level: 5, nextAt: Infinity, progress: 1 };
}

export { ALL_ACHIEVEMENTS };
