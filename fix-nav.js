const fs = require('fs');
let c = fs.readFileSync('components/top-bar.tsx', 'utf8');
c = c.replace(
  'className="px-3 py-1.5 rounded-lg text-sm font-semibold text-ink-700 dark:text-paper-100 hover:bg-ink-900/5 dark:hover:bg-paper-50/5 transition-colors"',
  'className="relative px-3 py-2 text-sm font-semibold text-ink-700 dark:text-paper-100 transition-all hover:text-sky-600 dark:hover:text-sky-400 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:rounded-full after:bg-sky-500 after:transition-all after:duration-300 hover:after:w-full"'
);
fs.writeFileSync('components/top-bar.tsx', c, 'utf8');
console.log('Done');
