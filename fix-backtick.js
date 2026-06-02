const fs = require('fs');
let c = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
c = c.replace('addXp(15, \toeic-theme:);', 'addXp(15, 	oeic-theme:);');
fs.writeFileSync('app/learn/toeic/theme/[id]/page.tsx', c, 'utf8');
console.log('Done');
console.log(c.slice(c.indexOf('addXp')-5, c.indexOf('addXp')+60));
