const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
c = c.replace('export type BlogPost = {', 'export interface BlogPost {');
c = c.replace('};', '}');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done:', fs.readFileSync('data/blog.ts','utf8').slice(0,50));
