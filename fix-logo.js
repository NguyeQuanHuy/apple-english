const fs = require('fs');
let c = fs.readFileSync('components/top-bar.tsx', 'utf8');

// Thay ten web: chu "Apple" mau ink dam, "English" mau sky gradient dep hon
c = c.replace(
  'Apple <span className="text-ember-500">English</span>',
  '<span className="text-sky-600 dark:text-sky-400">Apple</span> <span className="bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">English</span>'
);

// Tang font size nhe va them tracking
c = c.replace(
  'className="font-display text-xl font-black tracking-tight"',
  'className="font-display text-xl font-black tracking-tight bg-clip-text"'
);

fs.writeFileSync('components/top-bar.tsx', c, 'utf8');
console.log('Done');
