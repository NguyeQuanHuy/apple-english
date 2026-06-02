const fs = require('fs');
const existing = fs.readFileSync('data/toeic.ts', 'utf8');
const testsIdx = existing.indexOf('TOEIC_TESTS');
const insertAt = existing.lastIndexOf('];', testsIdx);
console.log('insertAt:', insertAt, 'testsIdx:', testsIdx);
console.log('Will insert before:', existing.slice(insertAt-10, insertAt+5));
