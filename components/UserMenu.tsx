"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BarChart2, LogOut, User } from "lucide-react";
import type { User as SupabaseUser } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";
import { loadFromCloud, syncToCloud, type CloudProgress } from "@/lib/sync";
import { useProgress } from "@/lib/store";
import { AuthModal } from "./AuthModal";

type Local = ReturnType<typeof useProgress.getState>;

/** Combine this browser's progress with the account's: never lose a lesson, score or day. */
function mergeProgress(local: Local, cloud: CloudProgress) {
  const scores = { ...cloud.testScores };
  for (const [id, r] of Object.entries(local.testScores || {})) {
    if (!scores[id] || (r.takenAt ?? 0) > (scores[id].takenAt ?? 0)) scores[id] = r;
  }
  const best: Record<string, number> = { ...cloud.gameBest };
  for (const [id, v] of Object.entries(local.gameBest || {})) best[id] = Math.max(v, best[id] ?? 0);
  const achievements = [...cloud.achievements];
  for (const a of local.achievements || []) if (!achievements.some((x) => x.id === a.id)) achievements.push(a);
  const localNewer = (local.lastActiveDate ?? "") >= (cloud.lastActiveDate ?? "");
  return {
    xp: Math.max(local.xp, cloud.xp),
    streak: localNewer ? local.streak : cloud.streak,
    lastActiveDate: localNewer ? local.lastActiveDate : cloud.lastActiveDate,
    completedLessons: Array.from(new Set([...cloud.completedLessons, ...(local.completedLessons || [])])),
    testScores: scores,
    gamesPlayed: Math.max(local.gamesPlayed, cloud.gamesPlayed),
    achievements,
    activeDays: Array.from(new Set([...cloud.activeDays, ...(local.activeDays || [])])).sort().slice(-60),
    gameBest: best,
  };
}

export function UserMenu() {
  const [user, setUser] = useState<SupabaseUser | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const progress = useProgress();

  useEffect(() => {
    supabase.auth
      .getUser()
      .then(({ data: { user } }) => setUser(user))
      .catch(() => setUser(null));
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      const u = session?.user ?? null;
      setUser(u);
      if (!u || (event !== "SIGNED_IN" && event !== "INITIAL_SESSION")) return;
      // Calling Supabase inside this callback can deadlock the auth client, so run it on the next tick
      setTimeout(async () => {
        try {
          const local = useProgress.getState();
          const cloud = await loadFromCloud();
          if (cloud) useProgress.setState(mergeProgress(local, cloud));
          // Push the merged (or local-only) progress so both sides match
          await syncToCloud(useProgress.getState());
        } catch {
          // Offline or server unreachable: keep learning locally
        }
      }, 0);
    });
    return () => subscription.unsubscribe();
  }, []);

  // Push progress to the cloud a moment after it changes
  useEffect(() => {
    if (!user) return;
    const t = setTimeout(() => syncToCloud(useProgress.getState()).catch(() => {}), 2000);
    return () => clearTimeout(t);
  }, [progress.xp, progress.streak, progress.completedLessons.length, progress.gamesPlayed, Object.keys(progress.testScores).length, user]);

  // Close the menu on outside click or Escape
  useEffect(() => {
    if (!showMenu) return;
    const onDown = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setShowMenu(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setShowMenu(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [showMenu]);

  if (!user)
    return (
      <>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-navy-900 hover:bg-navy-700 dark:bg-white dark:text-navy-900 dark:hover:bg-paper-100 text-white text-sm font-semibold transition-colors"
        >
          <User className="w-4 h-4" />
          <span className="hidden sm:inline">Đăng nhập</span>
        </button>
        {showModal && <AuthModal onClose={() => setShowModal(false)} />}
      </>
    );

  const avatar = user.user_metadata?.avatar_url as string | undefined;
  const name = (user.user_metadata?.full_name as string | undefined) || user.email?.split("@")[0] || "Bạn";

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setShowMenu((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={showMenu}
        className="flex items-center gap-2 pl-1 pr-2 py-1 rounded-xl hover:bg-navy-900/5 dark:hover:bg-white/10 transition-colors"
      >
        {avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={avatar} className="w-8 h-8 rounded-full object-cover" alt="" referrerPolicy="no-referrer" />
        ) : (
          <span className="w-8 h-8 rounded-full bg-apple-500 grid place-items-center text-white text-sm font-bold">{name[0]?.toUpperCase()}</span>
        )}
        <span className="hidden sm:block text-sm font-semibold text-navy-700 dark:text-paper-100 max-w-[110px] truncate">{name}</span>
      </button>
      {showMenu && (
        <div role="menu" className="absolute right-0 top-full mt-2 w-60 rounded-2xl bg-white dark:bg-navy-900 border border-navy-900/10 dark:border-white/10 shadow-[0_20px_50px_-15px_rgba(21,32,51,0.35)] p-2 z-50">
          <div className="px-3 py-2.5">
            <p className="font-bold text-navy-900 dark:text-white truncate">{name}</p>
            <p className="text-sm text-navy-400 truncate">{user.email}</p>
            <p className="text-xs text-leaf-600 dark:text-leaf-500 font-semibold mt-1">Tiến độ đang được lưu lên mạng</p>
          </div>
          <div className="h-px bg-navy-900/[0.07] dark:bg-white/10 my-1" />
          <Link role="menuitem" href="/dashboard" onClick={() => setShowMenu(false)} className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[15px] font-semibold text-navy-700 dark:text-paper-100 hover:bg-navy-900/[0.04] dark:hover:bg-white/5">
            <BarChart2 className="w-4 h-4" /> Học bạ của tôi
          </Link>
          <button
            role="menuitem"
            onClick={async () => {
              await supabase.auth.signOut().catch(() => {});
              setShowMenu(false);
            }}
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-[15px] font-semibold text-apple-600 dark:text-apple-500 hover:bg-apple-50 dark:hover:bg-apple-500/10"
          >
            <LogOut className="w-4 h-4" /> Đăng xuất
          </button>
        </div>
      )}
    </div>
  );
}
