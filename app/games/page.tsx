import Link from "next/link";
import { Shuffle, Puzzle, Timer, PenLine } from "lucide-react";

export default function GamesIndex() {
  const games = [
    {
      href: "/games/match",
      icon: "🔀",
      title: "Ghep tu",
      desc: "Noi tu tieng Anh voi nghia tieng Viet. 30 giay.",
      color: "bg-ember-50 border-ember-400",
      badge: "De nhat",
      badgeColor: "bg-ember-400 text-white",
    },
    {
      href: "/games/sentence",
      icon: "🧩",
      title: "Xep cau",
      desc: "Keo tha cac tu thanh cau dung.",
      color: "bg-teal-50 border-teal-500",
      badge: null,
      badgeColor: "",
    },
    {
      href: "/games/fast-quiz",
      icon: "⚡",
      title: "Quiz toc do",
      desc: "10 cau, moi cau 8 giay. Phan xa nhanh!",
      color: "bg-paper-100 border-rose-400",
      badge: "Pho bien",
      badgeColor: "bg-rose-400 text-white",
    },
    {
      href: "/games/fill-blank",
      icon: "✏️",
      title: "Dien tu vao cho trong",
      desc: "Chon dap an dung de hoan thanh cau. Luyen ngu phap.",
      color: "bg-paper-100 border-teal-400",
      badge: "Moi!",
      badgeColor: "bg-teal-500 text-white",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto px-4 pt-10 pb-20">
      <div className="text-sm font-bold uppercase tracking-widest text-rose-400 mb-2">Mini Games</div>
      <h1 className="font-display text-4xl font-black text-ink-900 mb-2">Choi de hoc</h1>
      <p className="text-ink-500 mb-8">4 tro choi don gian. Moi van ~1 phut. Kiem XP nhanh nhat o day.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {games.map((g) => (
          <Link
            key={g.href}
            href={g.href}
            className={`relative flex flex-col gap-2 p-5 rounded-chunky border-2 ${g.color} hover:shadow-card transition-all active:scale-95`}
          >
            {g.badge && (
              <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${g.badgeColor}`}>
                {g.badge}
              </span>
            )}
            <span className="text-3xl">{g.icon}</span>
            <p className="font-bold text-ink-900 text-base mt-1">{g.title}</p>
            <p className="text-ink-500 text-sm leading-relaxed">{g.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}