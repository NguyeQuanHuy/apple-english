const fs = require('fs');
let c = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
// Decode all unicode escapes
c = c.replace(/\\\\u([0-9a-fA-F]{4})/g, (m, code) => String.fromCharCode(parseInt(code, 16)));
fs.writeFileSync('app/learn/beginner/page.tsx', c, 'utf8');
console.log('Done. Sample:', fs.readFileSync('app/learn/beginner/page.tsx','utf8').slice(500,550));
