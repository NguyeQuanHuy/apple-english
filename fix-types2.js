const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const lines = c.split('\n');
const fixed = lines.map(l => {
  const m = l.match(/^(export type )(\w+)( = \{)$/);
  if (m) return 'export interface ' + m[2] + ' {';
  return l;
});
fs.writeFileSync('data/toeic.ts', fixed.join('\n'), 'utf8');
console.log('Done. First 100:', fs.readFileSync('data/toeic.ts','utf8').slice(0,100));
