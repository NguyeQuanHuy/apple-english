const fs = require('fs');
let c = fs.readFileSync('app/learn/toeic/page.tsx', 'utf8');

const newIcons = 
    technology: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-600 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="3" y="5" width="22" height="14" rx="2" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.1)"/>
          <path d="M9 23 L19 23 M14 19 L14 23" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M8 11 L11 14 L8 17 M13 17 L18 17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    education: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-400 to-violet-600 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 4 L26 10 L14 16 L2 10 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <path d="M6 12.5 L6 19 C6 19 10 22 14 22 C18 22 22 19 22 19 L22 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M24 10 L24 16" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    health: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-400 to-pink-600 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M14 23 C14 23 4 16 4 10 C4 7 6.5 5 9.5 5 C11.5 5 13 6 14 7.5 C15 6 16.5 5 18.5 5 C21.5 5 24 7 24 10 C24 16 14 23 14 23Z" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
          <path d="M10 10 L14 10 L14 14 M14 10 L18 10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    shopping: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M7 7 L5 3 M7 7 L9 19 L19 19 L21 7 Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <path d="M10 7 C10 7 10 4 14 4 C18 4 18 7 18 7" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="11" cy="22" r="1.5" fill="white"/>
          <circle cx="18" cy="22" r="1.5" fill="white"/>
        </svg>
      </div>
    ),
    hr: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="9" r="4" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
          <path d="M5 23 C5 18.5 9 15 14 15 C19 15 23 18.5 23 23" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="22" cy="8" r="3" fill="#fde68a"/>
          <path d="M21 8 L22 9.2 L24.5 6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    ),
    equipment: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-slate-500 to-gray-700 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="4" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.15)"/>
          <path d="M14 3 L14 7 M14 21 L14 25 M3 14 L7 14 M21 14 L25 14" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M6.5 6.5 L9.5 9.5 M18.5 18.5 L21.5 21.5 M21.5 6.5 L18.5 9.5 M9.5 18.5 L6.5 21.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    banking: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M3 10 L14 4 L25 10 L25 12 L3 12 Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" fill="rgba(255,255,255,0.15)"/>
          <path d="M3 22 L25 22" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M6 12 L6 22 M11 12 L11 22 M17 12 L17 22 M22 12 L22 22" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </div>
    ),
    shipping: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <path d="M3 18 L3 10 L17 10 L17 18 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.1)"/>
          <path d="M17 13 L22 13 L25 18 L17 18 Z" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.15)"/>
          <circle cx="8" cy="20" r="2" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.2)"/>
          <circle cx="21" cy="20" r="2" stroke="white" strokeWidth="1.5" fill="rgba(255,255,255,0.2)"/>
          <path d="M3 14 L17 14" stroke="white" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
        </svg>
      </div>
    ),
    weather: (
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center shadow-md">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="10" r="4" stroke="white" strokeWidth="1.8" fill="rgba(255,255,255,0.2)"/>
          <path d="M14 4 L14 2 M14 18 L14 20 M4 10 L2 10 M26 10 L24 10 M7 7 L5.5 5.5 M22.5 14.5 L21 13 M21 7 L22.5 5.5 M5.5 14.5 L7 13" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M6 20 Q8 17 11 19 Q12 15 16 16 Q19 14 21 17 Q24 17 23 20 Z" stroke="white" strokeWidth="1.2" fill="rgba(255,255,255,0.2)"/>
        </svg>
      </div>
    ),;

// Chen vao sau dong 'office:' trong map
c = c.replace(
  "const map: Record<string, JSX.Element> = {",
  "const map: Record<string, JSX.Element> = {" + newIcons
);

fs.writeFileSync('app/learn/toeic/page.tsx', c, 'utf8');
console.log('Done');
