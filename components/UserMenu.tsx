"use client";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { loadFromCloud, syncToCloud } from "@/lib/sync";
import { useProgress } from "@/lib/store";
import { AuthModal } from "./AuthModal";
import { LogOut, User } from "lucide-react";
export function UserMenu() {
  const [user, setUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const progress = useProgress();
  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user));
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (u) {
        const cloud = await loadFromCloud();
        if (cloud && cloud.xp >= progress.xp) {
          useProgress.setState({
            xp: cloud.xp, streak: cloud.streak,
            lastActiveDate: cloud.lastActiveDate,
            completedLessons: cloud.completedLessons,
            testScores: cloud.testScores,
            gamesPlayed: cloud.gamesPlayed,
            achievements: cloud.achievements,
          });
        } else if (progress.xp > 0) {
          await syncToCloud(progress);
        }
      }
    });
    return () => subscription.unsubscribe();
  }, []);
  useEffect(() => {
    if (!user) return;
    const t = setTimeout(() => syncToCloud(progress), 2000);
    return () => clearTimeout(t);
  }, [progress.xp, progress.streak, user]);
  if (!user) return (
    <>
      <button onClick={() => setShowModal(true)} className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold transition-all">
        <User className="w-4 h-4" />Đăng nhập
      </button>
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
  const avatar = user.user_metadata?.avatar_url;
  const name = user.user_metadata?.full_name || user.email?.split("@")[0] || "User";
  return (
    <div className="relative">
      <button onClick={() => setShowMenu(!showMenu)} className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all">
        {avatar
          ? <img src={avatar} className="w-7 h-7 rounded-full object-cover" alt={name} />
          : <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold">{name[0].toUpperCase()}</div>}
        <span className="hidden sm:block text-sm font-medium text-zinc-700 dark:text-zinc-300 max-w-[100px] truncate">{name}</span>
      </button>
      {showMenu && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-xl p-2 z-50">
          <div className="px-3 py-2 text-xs text-zinc-400 truncate">{user.email}</div>
          <hr className="border-zinc-100 dark:border-zinc-800 my-1" />
          <button onClick={async () => { await supabase.auth.signOut(); setShowMenu(false); }} className="w-full flex items-center gap-2 px-3 py-2 rounded-xl text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-950 transition-colors">
            <LogOut className="w-4 h-4" />Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}