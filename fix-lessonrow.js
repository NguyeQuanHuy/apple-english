const fs = require('fs');
let c = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
c = c.replace(
  'function LessonRow({ lesson, locked, done }: { lesson: any; locked: boolean; done: boolean }) {',
  'function LessonRow({ lesson, locked, done }: { lesson: any; locked: boolean; done: boolean }): JSX.Element {'
);
fs.writeFileSync('app/learn/beginner/page.tsx', c, 'utf8');
console.log('Done');
