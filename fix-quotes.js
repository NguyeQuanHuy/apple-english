const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
c = c.replace(
  'YouTube channel "Stutter With Me", "Disability After Dark".',
  "YouTube channel 'Stutter With Me', 'Disability After Dark'."
);
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done');
