const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

// Tim va xoa phan JSON bi them sai
const jsonStart = c.indexOf(',\n  {\n    "slug": "cach-phat-am');
const jsonEnd = c.indexOf('\n];') + 3;
console.log('jsonStart:', jsonStart, 'jsonEnd:', jsonEnd);
c = c.slice(0, jsonStart) + '\n];';
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Fixed. Last 50 chars:', c.slice(-50));
