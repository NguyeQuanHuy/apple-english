"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, BookOpen, Gamepad2, BarChart2, FileText } from "lucide-react";

const ITEMS = [
  { href: "/", label: "Trang chủ", Icon: Home },
  { href: "/learn/beginner", label: "Học", Icon: BookOpen },
  { href: "/games", label: "Games", Icon: Gamepad2 },
  { href: "/dashboard", label: "Tiến độ", Icon: BarChart2 },
  { href: "/blog", label: "Bài viết", Icon: FileText },
];

export function MobileNav() {
  const pathname = usePathname() || "/";
  return (
    <nav
      aria-label="Điều hướng chính"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-navy-900/95 backdrop-blur border-t border-navy-900/10 dark:border-white/10 pb-[env(safe-area-inset-bottom)]"
    >
      <ul className="grid grid-cols-5">
        {ITEMS.map(({ href, label, Icon }) => {
          const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-0.5 py-2.5 text-[11px] font-semibold transition-colors ${
                  active ? "text-apple-500" : "text-navy-400 hover:text-navy-700 dark:hover:text-white"
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={active ? 2.5 : 2} />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
