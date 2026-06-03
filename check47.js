const fs = require('fs');
const bt = String.fromCharCode(96);
let c = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
const lines = c.split('\n');

// Xem dong 47 day du
console.log('Line 47:', JSON.stringify(lines[46]));
