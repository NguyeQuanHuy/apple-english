const fs = require('fs');
let c = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
const bt = String.fromCharCode(96);

// Fix width template literal
c = c.replace(
  'animate={{ width: % }}',
  'animate={{ width: ' + bt + '%' + bt + ' }}'
);

// Fix isLast template literal  
c = c.replace(
  '{isLast ? "Ho\u00e0n th\u00e0nh (+15 XP)" : "T\u1eeb ti\u1ebfp theo"}',
  '{isLast ? "Ho\u00e0n th\u00e0nh (+15 XP)" : "T\u1eeb ti\u1ebfp theo"}'
);

fs.writeFileSync('app/learn/toeic/theme/[id]/page.tsx', c, 'utf8');
const v = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
console.log('width line:', v.slice(v.indexOf('animate={{ width')-5, v.indexOf('animate={{ width')+60));
console.log('addXp line:', v.slice(v.indexOf('addXp(15'), v.indexOf('addXp(15')+55));
