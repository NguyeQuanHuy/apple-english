const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const mockIdx = c.indexOf('Mock tests');
const insertAt = c.lastIndexOf('];', mockIdx);

const newTheme = [
  ',',
  '  {',
  '    id: "shipping",',
  '    title: "V\u1eadn chuy\u1ec3n & Giao h\u00e0ng",',
  '    emoji: "\uD83D\uDE9A",',
  '    description: "T\u1eeb v\u1ef1ng v\u1ec1 v\u1eadn chuy\u1ec3n, xu\u1ea5t nh\u1eadp kh\u1ea9u hay g\u1eb7p trong TOEIC Part 4-7",',
  '    words: [',
  '      { en: "shipment", pos: "n.", vi: "l\u00f4 h\u00e0ng", example: "The shipment will arrive by Thursday." },',
  '      { en: "freight", pos: "n.", vi: "h\u00e0ng h\u00f3a v\u1eadn chuy\u1ec3n", example: "Freight costs have increased this year." },',
  '      { en: "customs", pos: "n.", vi: "h\u1ea3i quan", example: "The package is stuck at customs." },',
  '      { en: "tracking", pos: "n.", vi: "theo d\u00f5i \u0111\u01a1n h\u00e0ng", example: "You can use the tracking number to locate your order." },',
  '      { en: "dispatch", pos: "v.", vi: "g\u1eedi \u0111i, xu\u1ea5t h\u00e0ng", example: "The order was dispatched yesterday." },',
  '      { en: "warehouse", pos: "n.", vi: "kho h\u00e0ng", example: "The goods are stored in our warehouse." },',
  '      { en: "invoice", pos: "n.", vi: "h\u00f3a \u0111\u01a1n", example: "Please attach the invoice to the shipment." },',
  '      { en: "delivery", pos: "n.", vi: "giao h\u00e0ng", example: "Free delivery is available for orders over ." },',
  '      { en: "import", pos: "v.", vi: "nh\u1eadp kh\u1ea9u", example: "They import raw materials from Vietnam." },',
  '      { en: "export", pos: "v.", vi: "xu\u1ea5t kh\u1ea9u", example: "The company exports goods to 20 countries." },',
  '    ],',
  '  }',
].join('\n');

const result = c.slice(0, insertAt) + newTheme + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const v = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('shipping:', v.includes('"shipping"'));
