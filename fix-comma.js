const fs = require('fs');
let c = fs.readFileSync('data/toeic.ts', 'utf8');
c = c.replace('},\n,\n  {\n    id: "technology"', '},\n  {\n    id: "technology"');
fs.writeFileSync('data/toeic.ts', c, 'utf8');
const {TOEIC_THEMES} = require('./data/toeic.ts');
console.log('Themes:', TOEIC_THEMES.map(t => t ? t.id : 'EMPTY'));
