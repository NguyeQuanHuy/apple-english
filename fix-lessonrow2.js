const fs = require('fs');
let c = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
const lines = c.split('\n');

// Xoa dong 81 (LessonRow rong) va dong 97 (} thua)
const filtered = lines.filter((l, i) => {
  if (i === 80 && l.includes('LessonRow') && l.includes('JSX.Element')) return false;
  if (i === 96 && l.trim() === '}') return false;
  return true;
});

fs.writeFileSync('app/learn/beginner/page.tsx', filtered.join('\n'), 'utf8');
console.log('Done, lines:', filtered.length);
