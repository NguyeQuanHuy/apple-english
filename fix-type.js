const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
c = c.replace('tags?: string[\n];', 'tags?: string[];\n  date?: string;\n  readingTime?: string;\n  content: object[];\n};');
console.log('Fixed:', c.slice(0, 200));
fs.writeFileSync('data/blog.ts', c, 'utf8');
