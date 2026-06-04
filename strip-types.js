const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const start = c.indexOf('export const TOEIC_THEMES');
c = c.slice(start);
fs.writeFileSync('data/toeic.ts', c, 'utf8');
console.log('Done:', c.slice(0,50));
