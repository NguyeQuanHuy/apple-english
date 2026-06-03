const fs = require('fs');
let c = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
const lines = c.split('\n');
// Xoa dong 81-88 (index 80-87)
const filtered = lines.filter((l, i) => i < 80 || i > 87);
fs.writeFileSync('app/learn/beginner/page.tsx', filtered.join('\n'), 'utf8');
console.log('Done, lines:', filtered.length);
