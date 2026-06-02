const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const mockIdx = c.indexOf('Mock tests');
const insertAt = c.lastIndexOf('];', mockIdx);

const newTheme = [
  ',',
  '  {',
  '    id: "shopping",',
  '    title: "Mua s\u1eafm & B\u00e1n l\u1ebb",',
  '    emoji: "\uD83D\uDED2",',
  '    description: "T\u1eeb v\u1ef1ng v\u1ec1 mua s\u1eafm, gi\u00e1 c\u1ea3 hay g\u1eb7p trong TOEIC Part 1-7",',
  '    words: [',
  '      { en: "purchase", pos: "v.", vi: "mua", example: "She purchased a new laptop online." },',
  '      { en: "discount", pos: "n.", vi: "gi\u1ea3m gi\u00e1", example: "There is a 20% discount on all items." },',
  '      { en: "receipt", pos: "n.", vi: "bi\u00ean lai", example: "Please keep your receipt for returns." },',
  '      { en: "refund", pos: "n.", vi: "ho\u00e0n ti\u1ec1n", example: "I would like a refund for this product." },',
  '      { en: "exchange", pos: "v.", vi: "\u0111\u1ed5i h\u00e0ng", example: "Can I exchange this for a different size?" },',
  '      { en: "retail", pos: "n.", vi: "b\u00e1n l\u1ebb", example: "The retail price is higher than wholesale." },',
  '      { en: "wholesale", pos: "n.", vi: "b\u00e1n bu\u00f4n", example: "They buy wholesale and sell retail." },',
  '      { en: "inventory", pos: "n.", vi: "h\u00e0ng t\u1ed3n kho", example: "We need to check the inventory." },',
  '      { en: "checkout", pos: "n.", vi: "thanh to\u00e1n", example: "Please proceed to the checkout counter." },',
  '      { en: "warranty", pos: "n.", vi: "b\u1ea3o h\u00e0nh", example: "The product comes with a one-year warranty." },',
  '    ],',
  '  }',
].join('\n');

const result = c.slice(0, insertAt) + newTheme + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const v = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('shopping:', v.includes('"shopping"'));
