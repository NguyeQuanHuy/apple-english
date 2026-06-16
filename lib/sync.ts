import { supabase } from "./supabase";
export async function syncToCloud(data: any) {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await supabase.from("user_progress").upsert({
    user_id: user.id, xp: data.xp, streak: data.streak,
    last_active_date: data.lastActiveDate,
    completed_lessons: data.completedLessons,
    test_scores: data.testScores,
    games_played: data.gamesPlayed,
    achievements: data.achievements,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id" });
}
export async function loadFromCloud(): Promise<any> {
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return null;
  const { data } = await supabase.from("user_progress").select("*").eq("user_id", user.id).single();
  if (!data) return null;
  return {
    xp: data.xp ?? 0, streak: data.streak ?? 0,
    lastActiveDate: data.last_active_date ?? null,
    completedLessons: data.completed_lessons ?? [],
    testScores: data.test_scores ?? {},
    gamesPlayed: data.games_played ?? 0,
    achievements: data.achievements ?? [],
  };
}