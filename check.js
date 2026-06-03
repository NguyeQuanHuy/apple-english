const fs = require('fs');
const lines = fs.readFileSync('app/learn/beginner/page.tsx', 'utf8');
console.log('Current length:', lines.length);
