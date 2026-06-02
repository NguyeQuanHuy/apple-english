const fs = require('fs');
let c = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
const i = c.indexOf('addXp(15,');
console.log('before:', JSON.stringify(c.slice(i, i+30)));
c = c.slice(0, i) + 'addXp(15, 	oeic-theme:)' + c.slice(c.indexOf(');', i)+2);
fs.writeFileSync('app/learn/toeic/theme/[id]/page.tsx', c, 'utf8');
const v = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
console.log('after:', v.slice(v.indexOf('addXp(15,'), v.indexOf('addXp(15,')+55));
