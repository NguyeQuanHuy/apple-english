const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
// Xoa type/interface definition, chi giu BLOG_POSTS
const postsStart = c.indexOf('export const BLOG_POSTS');
const newContent = c.slice(postsStart);
fs.writeFileSync('data/blog.ts', newContent, 'utf8');
fs.writeFileSync('data/blog.d.ts', 'export interface BlogPost {\n  slug: string;\n  title: string;\n  emoji: string;\n  summary: string;\n  tags?: string[];\n  date?: string;\n  readingTime?: string;\n  content: object[];\n}\n', 'utf8');
console.log('Done:', fs.readFileSync('data/blog.ts','utf8').slice(0,50));
