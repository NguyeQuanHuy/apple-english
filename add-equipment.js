const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const mockIdx = c.indexOf('Mock tests');
const insertAt = c.lastIndexOf('];', mockIdx);

const newTheme = [
  ',',
  '  {',
  '    id: "equipment",',
  '    title: "Thi\u1ebft b\u1ecb & M\u00e1y m\u00f3c",',
  '    emoji: "\u2699\uFE0F",',
  '    description: "T\u1eeb v\u1ef1ng v\u1ec1 thi\u1ebft b\u1ecb, m\u00e1y m\u00f3c hay g\u1eb7p trong TOEIC Part 1-4",',
  '    words: [',
  '      { en: "equipment", pos: "n.", vi: "thi\u1ebft b\u1ecb", example: "The factory has modern equipment." },',
  '      { en: "machinery", pos: "n.", vi: "m\u00e1y m\u00f3c", example: "The machinery needs regular maintenance." },',
  '      { en: "operate", pos: "v.", vi: "v\u1eadn h\u00e0nh", example: "Only trained staff can operate this machine." },',
  '      { en: "repair", pos: "v.", vi: "s\u1eeda ch\u1eefa", example: "The technician came to repair the printer." },',
  '      { en: "install", pos: "v.", vi: "l\u1eafp \u0111\u1eb7t", example: "They will install the new system tomorrow." },',
  '      { en: "malfunction", pos: "n.", vi: "s\u1ef1 c\u1ed1", example: "A malfunction caused the delay in production." },',
  '      { en: "spare parts", pos: "n.", vi: "ph\u1ee5 t\u00f9ng thay th\u1ebf", example: "We need to order spare parts for the machine." },',
  '      { en: "assembly", pos: "n.", vi: "l\u1eafp r\u00e1p", example: "The assembly line runs 24 hours a day." },',
  '      { en: "capacity", pos: "n.", vi: "c\u00f4ng su\u1ea5t", example: "The factory is running at full capacity." },',
  '      { en: "inspection", pos: "n.", vi: "ki\u1ec3m tra, gi\u00e1m s\u00e1t", example: "A safety inspection is required every month." },',
  '    ],',
  '  }',
].join('\n');

const result = c.slice(0, insertAt) + newTheme + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const v = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('equipment:', v.includes('"equipment"'));
