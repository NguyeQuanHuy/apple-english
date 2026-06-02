const fs = require('fs');
let c = fs.readFileSync('components/top-bar.tsx', 'utf8');
c = c.replace(
  'className="relative px-3 py-1.5 text-sm font-semibold text-ink-700 dark:text-paper-100 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-sky-500 after:transition-all after:duration-200 hover:text-sky-600 hover:after:w-full"',
  'className="relative px-3 py-2 text-sm font-semibold text-ink-700 dark:text-paper-100 transition-colors after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:w-0 after:bg-sky-500 after:rounded-full after:transition-all after:duration-300 hover:text-sky-600 dark:hover:text-sky-400 hover:after:w-4/5"'
);
fs.writeFileSync('components/top-bar.tsx', c, 'utf8');
console.log('Done');
