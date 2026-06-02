const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');
const mockIdx = c.indexOf('Mock tests');
const insertAt = c.lastIndexOf('];', mockIdx);

const newTheme = [
  ',',
  '  {',
  '    id: "hr",',
  '    title: "Nh\u00e2n s\u1ef1 & Tuy\u1ec3n d\u1ee5ng",',
  '    emoji: "\uD83D\uDC65",',
  '    description: "T\u1eeb v\u1ef1ng v\u1ec1 HR, tuy\u1ec3n d\u1ee5ng hay g\u1eb7p trong TOEIC Part 4-7",',
  '    words: [',
  '      { en: "recruit", pos: "v.", vi: "tuy\u1ec3n d\u1ee5ng", example: "We are recruiting for a new sales manager." },',
  '      { en: "resume", pos: "n.", vi: "h\u1ed3 s\u01a1 xin vi\u1ec7c", example: "Please send your resume by Friday." },',
  '      { en: "interview", pos: "n.", vi: "ph\u1ecfng v\u1ea5n", example: "She has a job interview tomorrow morning." },',
  '      { en: "candidate", pos: "n.", vi: "\u1ee9ng vi\u00ean", example: "We have shortlisted five candidates." },',
  '      { en: "salary", pos: "n.", vi: "l\u01b0\u01a1ng", example: "The salary will be discussed at the interview." },',
  '      { en: "benefits", pos: "n.", vi: "ph\u00fac l\u1ee3i", example: "The company offers great benefits." },',
  '      { en: "probation", pos: "n.", vi: "th\u1eed vi\u1ec7c", example: "There is a 3-month probation period." },',
  '      { en: "resignation", pos: "n.", vi: "\u0111\u01a1n ngh\u1ec9 vi\u1ec7c", example: "She submitted her resignation last week." },',
  '      { en: "performance", pos: "n.", vi: "hi\u1ec7u su\u1ea5t l\u00e0m vi\u1ec7c", example: "His performance has improved this quarter." },',
  '      { en: "appraisal", pos: "n.", vi: "\u0111\u00e1nh gi\u00e1 nh\u00e2n vi\u00ean", example: "Annual appraisals help identify areas for growth." },',
  '    ],',
  '  }',
].join('\n');

const result = c.slice(0, insertAt) + newTheme + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const v = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('hr:', v.includes('"hr"'));
