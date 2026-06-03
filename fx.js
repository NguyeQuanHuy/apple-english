const fs = require('fs');
const bt = String.fromCharCode(96);
let c = fs.readFileSync('app/layout.tsx', 'utf8');
const bad = 'className={ }';
const good = 'className={' + bt + ' ' + bt + '}';
const idx = c.indexOf(bad);
console.log('found at:', idx);
if (idx === -1) {
  console.log('not found, trying alternative...');
  console.log('context:', JSON.stringify(c.slice(c.indexOf('html lang'), c.indexOf('html lang')+80)));
} else {
  c = c.slice(0, idx) + good + c.slice(idx + bad.length);
  fs.writeFileSync('app/layout.tsx', c, 'utf8');
  console.log('fixed!');
}
