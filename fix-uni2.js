const fs = require('fs');
let c = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
c = c.replace(/\\u([0-9a-fA-F]{4})/g, (m, code) => String.fromCharCode(parseInt(code, 16)));
fs.writeFileSync('app/learn/beginner/page.tsx', c, 'utf8');
const v = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
const i = v.indexOf('nh');
console.log('sample:', v.slice(i, i+30));
