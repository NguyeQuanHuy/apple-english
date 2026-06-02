const fs = require('fs');

const footer = 
function Footer() {
  return (
    <footer className="bg-white dark:bg-ink-900 border-t border-sky-100 dark:border-sky-900 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center shadow-md flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="9" stroke="white" strokeWidth="1.5" fill="none"/><ellipse cx="11" cy="11" rx="4" ry="9" stroke="white" strokeWidth="1.2" fill="none"/><line x1="2" y1="11" x2="20" y2="11" stroke="white" strokeWidth="1.2"/><line x1="4" y1="7" x2="18" y2="7" stroke="white" strokeWidth="1"/><line x1="4" y1="15" x2="18" y2="15" stroke="white" strokeWidth="1"/><circle cx="14" cy="5" r="3.5" fill="#4ade80"/><path d="M14 3.5 C14 3.5 15.5 2 16 3 C15 3 15 4 14 5.5 C13 4 13 3 14 3.5Z" fill="#166534"/></svg>
              </div>
              <span className="font-display text-lg font-black">
                <span className="text-sky-600">Apple</span>{" "}
                <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">English</span>
              </span>
            </div>
            <p className="text-sm text-ink-500 dark:text-paper-200 leading-relaxed mb-4">
              N\u1ec1n t\u1ea3ng h\u1ecdc ti\u1ebfng Anh mi\u1ec5n ph\u00ed cho ng\u01b0\u1eddi Vi\u1ec7t m\u1ea5t g\u1ed1c. T\u1eeb A0 l\u00ean giao ti\u1ebfp t\u1ef1 tin.
            </p>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 dark:bg-sky-900/30 text-sky-600 dark:text-sky-400 text-xs font-bold rounded-full">
                \uD83C\uDDF9\uD83C\uDDFB Vi\u1ec7t Nam
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-bold rounded-full">
                \uD83C\uDD93 Mi\u1ec5n ph\u00ed
              </span>
            </div>
          </div>

          {/* Hoc */}
          <div>
            <p className="font-black text-sm text-sky-900 dark:text-paper-50 uppercase tracking-widest mb-4">H\u1ecdc</p>
            <ul className="space-y-2.5">
              {[
                { href: "/learn/beginner", label: "M\u1ea5t g\u1ed1c A0\u2192A2" },
                { href: "/learn/toeic", label: "Luy\u1ec7n TOEIC" },
                { href: "/learn/topics", label: "Ch\u1ee7 \u0111\u1ec1 th\u1ef1c t\u1ebf" },
                { href: "/games", label: "Mini Games" },
                { href: "/dashboard", label: "Ti\u1ebfn \u0111\u1ed9 c\u1ee7a b\u1ea1n" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-500 dark:text-paper-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Bai viet */}
          <div>
            <p className="font-black text-sm text-sky-900 dark:text-paper-50 uppercase tracking-widest mb-4">B\u00e0i vi\u1ebft</p>
            <ul className="space-y-2.5">
              {[
                { href: "/blog/tai-sao-hoc-tieng-anh-mai-khong-gioi", label: "T\u1ea1i sao m\u00e3i kh\u00f4ng gi\u1ecfi?" },
                { href: "/blog/toeic-450-trong-2-thang", label: "TOEIC 450 trong 2 th\u00e1ng" },
                { href: "/blog/10-phut-hoc-tieng-anh-moi-ngay", label: "10 ph\u00fat m\u1ed7i ng\u00e0y" },
                { href: "/blog/hoc-tieng-anh-qua-phim", label: "H\u1ecdc qua phim" },
                { href: "/blog", label: "Xem t\u1ea5t c\u1ea3 \u2192" },
              ].map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-ink-500 dark:text-paper-200 hover:text-sky-600 dark:hover:text-sky-400 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Thong tin */}
          <div>
            <p className="font-black text-sm text-sky-900 dark:text-paper-50 uppercase tracking-widest mb-4">Th\u00f4ng tin</p>
            <ul className="space-y-2.5">
              {[
                { label: "\uD83C\uDDFE\uD83C\uDDF3 D\u00e0nh cho ng\u01b0\u1eddi Vi\u1ec7t" },
                { label: "\uD83C\uDDE9\uD83C\uDDEA \u0110\u00e3 h\u1ecdc \u1edf \u0110\u1ee9c" },
                { label: "\uD83D\uDCDA N\u1ed9i dung ti\u1ebfng Vi\u1ec7t" },
                { label: "\uD83D\uDE80 C\u1eadp nh\u1eadt li\u00ean t\u1ee5c" },
              ].map((item, i) => (
                <li key={i} className="text-sm text-ink-500 dark:text-paper-200">
                  {item.label}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-sky-100 dark:border-sky-900 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-ink-300 dark:text-ink-500">
            \u00a9 2026 Apple English. Mi\u1ec5n ph\u00ed m\u00e3i m\u00e3i \u2764\ufe0f
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-ink-300 dark:text-ink-500">Made with \u2764\ufe0f for ng\u01b0\u1eddi Vi\u1ec7t</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
              <span className="text-xs text-green-500 font-semibold">Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

let c = fs.readFileSync('app/layout.tsx', 'utf8');

// Them import Link
c = c.replace('import type { Metadata }', 'import type { Metadata }');

// Them Footer component va dung trong layout
c = c.replace(
  'export default function RootLayout',
  footer + '\n\nexport default function RootLayout'
);

// Them Footer vao trong body
c = c.replace(
  '<main className="pb-20">{children}</main>',
  '<main>{children}</main>\n          <Footer />'
);

fs.writeFileSync('app/layout.tsx', c, 'utf8');
console.log('Done');
