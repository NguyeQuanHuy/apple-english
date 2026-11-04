import { supabase } from "./supabase";

// One row per learner in public.apple_english_progress (see docs/supabase-setup.sql).
// The older public.user_progress table belongs to SpeakNest and has a different shape.
const TABLE = "apple_english_progress";

export type CloudProgress = {
  xp: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: string[];
  testScores: Record<string, { score: number; total: number; takenAt: number }>;
  gamesPlayed: number;
  achievements: { id: string; title: string; description: string; icon: string; unlockedAt?: number }[];
  activeDays: string[];
  gameBest: Record<string, number>;
};

export async function syncToCloud(data: Partial<CloudProgress>) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  const { error } = await supabase.from(TABLE).upsert(
    {
      user_id: user.id,
      xp: data.xp ?? 0,
      streak: data.streak ?? 0,
      last_active_date: data.lastActiveDate ?? null,
      completed_lessons: data.completedLessons ?? [],
      test_scores: data.testScores ?? {},
      games_played: data.gamesPlayed ?? 0,
      achievements: data.achievements ?? [],
      active_days: data.activeDays ?? [],
      game_best: data.gameBest ?? {},
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id" }
  );
  if (error) throw error;
}

export async function loadFromCloud(): Promise<CloudProgress | null> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data, error } = await supabase.from(TABLE).select("*").eq("user_id", user.id).maybeSingle();
  if (error) throw error;
  if (!data) return null;
  return {
    xp: data.xp ?? 0,
    streak: data.streak ?? 0,
    lastActiveDate: data.last_active_date ?? null,
    completedLessons: data.completed_lessons ?? [],
    testScores: data.test_scores ?? {},
    gamesPlayed: data.games_played ?? 0,
    achievements: data.achievements ?? [],
    activeDays: data.active_days ?? [],
    gameBest: data.game_best ?? {},
  };
}
