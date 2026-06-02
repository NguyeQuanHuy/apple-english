const fs = require('fs');
let c = fs.readFileSync('data/toeic.ts', 'utf8');
const mockIdx = c.indexOf('Mock tests');
const insertAt = c.lastIndexOf('];', mockIdx);
console.log('insertAt:', insertAt);

const add = [
  ',',
  '  {',
  '    id: "technology",',
  '    title: "Cong nghe & Thiet bi",',
  '    emoji: "\uD83D\uDCBB",',
  '    description: "Tu vung ve IT hay gap trong TOEIC",',
  '    words: [',
  '      { en: "install", pos: "v.", vi: "c\u00e0i \u0111\u1eb7t", example: "Please install the latest software update." },',
  '      { en: "upgrade", pos: "v.", vi: "n\u00e2ng c\u1ea5p", example: "We need to upgrade the server." },',
  '      { en: "malfunction", pos: "n.", vi: "s\u1ef1 c\u1ed1 k\u1ef9 thu\u1eadt", example: "The printer has a malfunction." },',
  '      { en: "maintenance", pos: "n.", vi: "b\u1ea3o tr\u00ec", example: "The system is down for maintenance." },',
  '      { en: "compatible", pos: "adj.", vi: "t\u01b0\u01a1ng th\u00edch", example: "Is this software compatible?" },',
  '      { en: "backup", pos: "n.", vi: "sao l\u01b0u", example: "Always make a backup first." },',
  '      { en: "troubleshoot", pos: "v.", vi: "kh\u1eafc ph\u1ee5c s\u1ef1 c\u1ed1", example: "IT will troubleshoot the issue." },',
  '      { en: "configure", pos: "v.", vi: "c\u1ea5u h\u00ecnh", example: "Configure the device before use." },',
  '      { en: "bandwidth", pos: "n.", vi: "b\u0103ng th\u00f4ng", example: "Streaming uses a lot of bandwidth." },',
  '      { en: "encrypted", pos: "adj.", vi: "\u0111\u01b0\u1ee3c m\u00e3 h\u00f3a", example: "All data must be encrypted." },',
  '    ],',
  '  },',
  '  {',
  '    id: "education",',
  '    title: "Giao duc & Dao tao",',
  '    emoji: "\uD83C\uDF93",',
  '    description: "Tu vung ve dao tao hay gap trong TOEIC Part 4-7",',
  '    words: [',
  '      { en: "training", pos: "n.", vi: "\u0111\u00e0o t\u1ea1o", example: "All staff must complete training." },',
  '      { en: "seminar", pos: "n.", vi: "h\u1ed9i th\u1ea3o", example: "We attended a leadership seminar." },',
  '      { en: "certificate", pos: "n.", vi: "ch\u1ee9ng ch\u1ec9", example: "She received a certificate." },',
  '      { en: "intern", pos: "n.", vi: "th\u1ef1c t\u1eadp sinh", example: "We are looking for interns." },',
  '      { en: "qualify", pos: "v.", vi: "\u0111\u1ee7 \u0111i\u1ec1u ki\u1ec7n", example: "Do you qualify for this course?" },',
  '      { en: "enroll", pos: "v.", vi: "\u0111\u0103ng k\u00fd", example: "Enroll online before the deadline." },',
  '      { en: "workshop", pos: "n.", vi: "bu\u1ed5i th\u1ef1c h\u00e0nh", example: "The Excel workshop was useful." },',
  '      { en: "mentor", pos: "n.", vi: "ng\u01b0\u1eddi h\u01b0\u1edbng d\u1eabn", example: "She was assigned a mentor." },',
  '      { en: "prerequisite", pos: "n.", vi: "\u0111i\u1ec1u ki\u1ec7n ti\u00ean quy\u1ebft", example: "B1 is a prerequisite." },',
  '      { en: "curriculum", pos: "n.", vi: "ch\u01b0\u01a1ng tr\u00ecnh", example: "The curriculum was updated." },',
  '    ],',
  '  },',
  '  {',
  '    id: "health",',
  '    title: "Suc khoe & Y te",',
  '    emoji: "\uD83C\uDFE5",',
  '    description: "Tu vung ve bao hiem, benh vien hay gap trong TOEIC",',
  '    words: [',
  '      { en: "insurance", pos: "n.", vi: "b\u1ea3o hi\u1ec3m", example: "Does your company provide health insurance?" },',
  '      { en: "prescription", pos: "n.", vi: "\u0111\u01a1n thu\u1ed1c", example: "You need a prescription for this medicine." },',
  '      { en: "symptom", pos: "n.", vi: "tri\u1ec7u ch\u1ee9ng", example: "Describe your symptoms to the doctor." },',
  '      { en: "checkup", pos: "n.", vi: "kh\u00e1m \u0111\u1ecbnh k\u1ef3", example: "The company offers an annual checkup." },',
  '      { en: "pharmacy", pos: "n.", vi: "nh\u00e0 thu\u1ed1c", example: "The pharmacy is open until 10 PM." },',
  '      { en: "diagnosis", pos: "n.", vi: "ch\u1ea9n \u0111o\u00e1n", example: "The doctor gave a diagnosis." },',
  '      { en: "treatment", pos: "n.", vi: "\u0111i\u1ec1u tr\u1ecb", example: "The treatment lasts two weeks." },',
  '      { en: "specialist", pos: "n.", vi: "b\u00e1c s\u0129 chuy\u00ean khoa", example: "She was referred to a specialist." },',
  '      { en: "emergency", pos: "n.", vi: "c\u1ea5p c\u1ee9u", example: "Call 911 in a medical emergency." },',
  '      { en: "recovery", pos: "n.", vi: "s\u1ef1 h\u1ed3i ph\u1ee5c", example: "The patient made a full recovery." },',
  '    ],',
  '  }'
].join('\n');

const result = c.slice(0, insertAt) + add + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const v = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('technology:', v.includes('technology'));
console.log('education:', v.includes('education'));
console.log('health:', v.includes('health'));
console.log('New length:', v.length);
