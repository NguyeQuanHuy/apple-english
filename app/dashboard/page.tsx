"use client";
import { useEffect, useState } from "react";
import { ALL_ACHIEVEMENTS, getLevel, useProgress } from "@/lib/store";
import { BEGINNER_LESSONS } from "@/data/beginner-lessons";
import { TOEIC_TESTS } from "@/data/toeic";
import { Flame, Sparkles, Trophy, RotateCcw, BookOpen, Gamepad2, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const xp = useProgress((s) => s.xp);
  const streak = useProgress((s) => s.streak);
  const completed = useProgress((s) => s.completedLessons);
  const tests = useProgress((s) => s.testScores);
  const gamesPlayed = useProgress((s) => s.gamesPlayed);
  const earned = useProgress((s) => s.achievements);
  const reset = useProgress((s) => s.reset);

  if (!mounted) return <div className="min-h-screen bg-sky-50 flex items-center justify-center text-sky-400">Dang tai...</div>;

  const lvl = getLevel(xp);
  const earnedIds = new Set(earned.map((a) => a.id));

  return (
    <div className="min-h-screen bg-sky-50 pb-20">

      {/* Hero */}
      <div className="bg-gradient-to-br from-sky-500 via-sky-400 to-blue-600 text-white px-4 pt-12 pb-16">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-start justify-between">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-sky-200 mb-2">Tien do</div>
              <h1 className="font-display text-4xl font-black mb-1">Bang dieu khien</h1>
              <p className="text-sky-200 text-sm">Theo doi hanh trinh hoc tieng Anh cua ban</p>
            </div>
            <button
              onClick={() => { if (confirm("Xoa toan bo tien do? Khong the hoan tac.")) reset(); }}
              className="flex items-center gap-1 text-xs font-bold text-white/60 hover:text-white transition-colors mt-1"
            >
              <RotateCcw size={12} /> Reset
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mt-8">
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <Sparkles className="w-5 h-5 mx-auto mb-1 text-yellow-300" />
              <p className="text-2xl font-black">{xp}</p>
              <p className="text-sky-200 text-xs">XP</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <Flame className="w-5 h-5 mx-auto mb-1 text-orange-300" />
              <p className="text-2xl font-black">{streak}</p>
              <p className="text-sky-200 text-xs">ngay streak</p>
            </div>
            <div className="bg-white/20 rounded-xl p-4 text-center">
              <Trophy className="w-5 h-5 mx-auto mb-1 text-yellow-300" />
              <p className="text-lg font-black">{lvl.name}</p>
              <p className="text-sky-200 text-xs">cap do</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 -mt-4">

        {/* Level progress */}
        <div className="bg-white border-2 border-sky-100 rounded-chunky p-5 mb-6 shadow-card">
          <div className="flex justify-between text-sm font-bold mb-3">
            <span className="text-sky-900">{lvl.name}</span>
            <span className="text-sky-400">{lvl.nextAt === Infinity ? "MAX" : `${xp}/${lvl.nextAt} XP`}</span>
          </div>
          <div className="h-3 rounded-full bg-sky-50 overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-400 to-blue-500 rounded-full transition-all"
              style={{ width: `${Math.min(100, lvl.progress * 100)}%` }} />
          </div>
          <div className="flex justify-between text-xs text-sky-400 mt-2">
            <span>{Math.round(lvl.progress * 100)}% len level tiep</span>
            <span>{earned.length}/{ALL_ACHIEVEMENTS.length} thanh tuu</span>
          </div>
        </div>

        {/* Achievements */}
        <section className="mb-8">
          <h2 className="font-display text-xl font-black text-sky-900 mb-4">Thanh tuu</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {ALL_ACHIEVEMENTS.map((a) => {
              const got = earnedIds.has(a.id);
              return (
                <div key={a.id}
                  className={`bg-white border-2 rounded-chunky p-4 text-center transition-all
                    ${got ? "border-sky-400 shadow-card" : "border-sky-100 opacity-50 grayscale"}`}>
                  <div className="text-3xl">{a.icon}</div>
                  <p className="font-bold text-sm mt-2 text-sky-900">{a.title}</p>
                  <p className="text-xs text-sky-400 mt-0.5">{a.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Lessons done */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-black text-sky-900 flex items-center gap-2">
              <BookOpen size={18} className="text-sky-500" />
              Bai da hoan thanh
            </h2>
            <span className="text-sm font-bold text-sky-400">{completed.length}/{BEGINNER_LESSONS.length}</span>
          </div>
          {completed.length === 0 ? (
            <div className="bg-white border-2 border-sky-100 rounded-chunky p-5 text-center">
              <p className="text-sky-400 text-sm mb-3">Chua hoan thanh bai nao.</p>
              <Link href="/learn/beginner"
                className="inline-flex items-center gap-1 text-sm font-bold text-sky-600 hover:text-sky-800">
                Bat dau hoc <ChevronRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {completed.map((id) => {
                const l = BEGINNER_LESSONS.find((x) => x.id === id);
                if (!l) return null;
                return (
                  <div key={id} className="bg-white border-2 border-sky-100 rounded-xl p-4 flex items-center justify-between hover:border-sky-300 transition-all">
                    <div>
                      <p className="font-bold text-sky-900 text-sm">{l.title}</p>
                      <p className="text-xs text-sky-400">{l.level} • +{l.xpReward} XP</p>
                    </div>
                    <Link href={`/learn/beginner/${l.id}`}
                      className="text-xs font-bold text-sky-500 hover:text-sky-700">
                      Hoc lai →
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Test history */}
        <section className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-black text-sky-900">Lich su lam de TOEIC</h2>
          </div>
          {Object.keys(tests).length === 0 ? (
            <div className="bg-white border-2 border-sky-100 rounded-chunky p-5 text-center">
              <p className="text-sky-400 text-sm mb-3">Chua lam de nao.</p>
              <Link href="/learn/toeic"
                className="inline-flex items-center gap-1 text-sm font-bold text-sky-600 hover:text-sky-800">
                Lam thu de <ChevronRight size={14} />
              </Link>
            </div>
          ) : (
            <div className="space-y-2">
              {Object.entries(tests).map(([id, r]) => {
                const t = TOEIC_TESTS.find((x) => x.id === id);
                if (!t) return null;
                const pct = Math.round((r.score / r.total) * 100);
                return (
                  <div key={id} className="bg-white border-2 border-sky-100 rounded-xl p-4 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-sky-900 text-sm">{t.title}</p>
                      <p className="text-xs text-sky-400">{new Date(r.takenAt).toLocaleString("vi-VN")}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-lg text-sky-900">{r.score}/{r.total}</p>
                      <p className={`text-xs font-bold ${pct >= 70 ? "text-sky-500" : "text-rose-400"}`}>{pct}%</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>

        {/* Games played */}
        <div className="bg-white border-2 border-sky-100 rounded-chunky p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Gamepad2 className="w-6 h-6 text-sky-500" />
            <div>
              <p className="font-bold text-sky-900">Mini Games</p>
              <p className="text-xs text-sky-400">Da choi {gamesPlayed} van</p>
            </div>
          </div>
          <Link href="/games"
            className="text-sm font-bold text-sky-500 hover:text-sky-700 flex items-center gap-1">
            Choi them <ChevronRight size={14} />
          </Link>
        </div>

      </div>
    </div>
  );
}