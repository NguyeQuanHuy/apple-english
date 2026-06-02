const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const mockIdx = c.indexOf('Mock tests');
const insertAt = c.lastIndexOf('];', mockIdx);

const newTheme = [
  ',',
  '  {',
  '    id: "banking",',
  '    title: "Ng\u00e2n h\u00e0ng & T\u00e0i kho\u1ea3n",',
  '    emoji: "\uD83C\uDFE6",',
  '    description: "T\u1eeb v\u1ef1ng v\u1ec1 ng\u00e2n h\u00e0ng, giao d\u1ecbch hay g\u1eb7p trong TOEIC Part 4-7",',
  '    words: [',
  '      { en: "deposit", pos: "v.", vi: "g\u1eed ti\u1ec1n", example: "I need to deposit this check into my account." },',
  '      { en: "withdraw", pos: "v.", vi: "r\u00fat ti\u1ec1n", example: "She withdrew  from the ATM." },',
  '      { en: "transaction", pos: "n.", vi: "giao d\u1ecbch", example: "All transactions are recorded automatically." },',
  '      { en: "interest rate", pos: "n.", vi: "l\u00e3i su\u1ea5t", example: "The interest rate on this loan is 5% per year." },',
  '      { en: "loan", pos: "n.", vi: "kho\u1ea3n vay", example: "He applied for a loan to buy a house." },',
  '      { en: "balance", pos: "n.", vi: "s\u1ed1 d\u01b0 t\u00e0i kho\u1ea3n", example: "Please check your account balance before transferring." },',
  '      { en: "transfer", pos: "v.", vi: "chuy\u1ec3n kho\u1ea3n", example: "I will transfer the money by end of day." },',
  '      { en: "statement", pos: "n.", vi: "sao k\u00ea t\u00e0i kho\u1ea3n", example: "Your monthly statement is available online." },',
  '      { en: "mortgage", pos: "n.", vi: "vay th\u1ebf ch\u1ea5p", example: "They took out a mortgage to buy the apartment." },',
  '      { en: "currency", pos: "n.", vi: "ti\u1ec1n t\u1ec7", example: "Please exchange your currency before traveling." },',
  '    ],',
  '  }',
].join('\n');

const result = c.slice(0, insertAt) + newTheme + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const v = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('banking:', v.includes('"banking"'));
