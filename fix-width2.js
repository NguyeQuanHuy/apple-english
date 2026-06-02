const fs = require('fs');
let c = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
const bt = String.fromCharCode(96);
const i = c.indexOf('animate={{ width: $');
console.log('found at:', i);
if (i === -1) { console.log('not found'); process.exit(1); }
const end = c.indexOf('}}', i) + 2;
const newStr = 'animate={{ width: ' + bt + '%' + bt + ' }}';
c = c.slice(0, i) + newStr + c.slice(end);
fs.writeFileSync('app/learn/toeic/theme/[id]/page.tsx', c, 'utf8');
const v = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
console.log('result:', JSON.stringify(v.slice(v.indexOf('animate={{ width'), v.indexOf('animate={{ width')+70)));
