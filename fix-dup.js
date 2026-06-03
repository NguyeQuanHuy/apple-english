const fs = require('fs');
let c = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
const lines = c.split('\n');
let foundFirst = false;
const filtered = lines.filter((l) => {
  if (l.includes('function UnitSection(')) {
    if (foundFirst) return false;
    foundFirst = true;
  }
  return true;
});
fs.writeFileSync('app/learn/beginner/page.tsx', filtered.join('\n'), 'utf8');
console.log('UnitSection count:', filtered.filter(l=>l.includes('function UnitSection(')).length);
