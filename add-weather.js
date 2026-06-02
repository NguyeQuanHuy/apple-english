const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const mockIdx = c.indexOf('Mock tests');
const insertAt = c.lastIndexOf('];', mockIdx);

const newTheme = [
  ',',
  '  {',
  '    id: "weather",',
  '    title: "Th\u1eddi ti\u1ebft & Kh\u00ed h\u1eadu",',
  '    emoji: "\u26C5",',
  '    description: "T\u1eeb v\u1ef1ng v\u1ec1 th\u1eddi ti\u1ebft hay g\u1eb7p trong TOEIC Part 1-4",',
  '    words: [',
  '      { en: "forecast", pos: "n.", vi: "d\u1ef1 b\u00e1o th\u1eddi ti\u1ebft", example: "The forecast shows rain for the next three days." },',
  '      { en: "temperature", pos: "n.", vi: "nhi\u1ec7t \u0111\u1ed9", example: "Temperatures will drop below zero tonight." },',
  '      { en: "humidity", pos: "n.", vi: "\u0111\u1ed9 \u1ea9m", example: "High humidity makes it feel hotter than it is." },',
  '      { en: "precipitation", pos: "n.", vi: "l\u01b0\u1ee3ng m\u01b0a", example: "Heavy precipitation is expected this weekend." },',
  '      { en: "flood", pos: "n.", vi: "l\u0169 l\u1ee5t", example: "The flood damaged many homes in the area." },',
  '      { en: "drought", pos: "n.", vi: "h\u1ea1n h\u00e1n", example: "The drought has affected crop production." },',
  '      { en: "storm", pos: "n.", vi: "b\u00e3o", example: "A tropical storm is approaching the coast." },',
  '      { en: "visibility", pos: "n.", vi: "t\u1ea7m nh\u00ecn", example: "Poor visibility caused flight delays." },',
  '      { en: "celsius", pos: "n.", vi: "\u0111\u1ed9 C", example: "The temperature is 35 degrees Celsius today." },',
  '      { en: "climate", pos: "n.", vi: "kh\u00ed h\u1eadu", example: "Vietnam has a tropical climate." },',
  '    ],',
  '  }',
].join('\n');

const result = c.slice(0, insertAt) + newTheme + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const v = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('weather:', v.includes('"weather"'));
