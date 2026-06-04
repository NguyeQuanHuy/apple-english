const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
// Tim va xoa cac ,, (double comma) tao ra empty item
c = c.replace(/,\s*,/g, ',');
fs.writeFileSync('data/toeic.ts', c, 'utf8');
console.log('Done');
