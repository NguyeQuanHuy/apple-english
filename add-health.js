const fs = require('fs');
let c = fs.readFileSync('data/toeic.ts', 'utf8');
const testsIdx = c.indexOf('export const TOEIC_TESTS');
const insertAt = c.lastIndexOf('];', testsIdx);

const newTheme = 
  ,{
    id: "health",
    title: "S\u1ee9c kh\u1ecfe & Y t\u1ebf",
    emoji: "\ud83c\udfe5",
    description: "T\u1eeb v\u1ef1ng v\u1ec1 b\u1ea3o hi\u1ec3m, b\u1ec7nh vi\u1ec7n hay g\u1eb7p trong TOEIC Part 4-7",
    words: [
      { en: "insurance", pos: "n.", vi: "b\u1ea3o hi\u1ec3m", example: "Does your company provide health insurance?" },
      { en: "prescription", pos: "n.", vi: "\u0111\u01a1n thu\u1ed1c", example: "You need a prescription to buy this medicine." },
      { en: "symptom", pos: "n.", vi: "tri\u1ec7u ch\u1ee9ng", example: "Please describe your symptoms to the doctor." },
      { en: "checkup", pos: "n.", vi: "kh\u00e1m s\u1ee9c kh\u1ecfe \u0111\u1ecbnh k\u1ef3", example: "The company offers an annual checkup for all staff." },
      { en: "pharmacy", pos: "n.", vi: "nh\u00e0 thu\u1ed1c", example: "The pharmacy is open until 10 PM." },
      { en: "diagnosis", pos: "n.", vi: "ch\u1ea9n \u0111o\u00e1n", example: "The doctor gave a diagnosis after the test results." },
      { en: "treatment", pos: "n.", vi: "\u0111i\u1ec1u tr\u1ecb", example: "The treatment usually lasts about two weeks." },
      { en: "specialist", pos: "n.", vi: "b\u00e1c s\u0129 chuy\u00ean khoa", example: "She was referred to a specialist." },
      { en: "emergency", pos: "n.", vi: "c\u1ea5p c\u1ee9u", example: "Call 911 in case of a medical emergency." },
      { en: "recovery", pos: "n.", vi: "s\u1ef1 h\u1ed3i ph\u1ee5c", example: "The patient made a full recovery after surgery." },
    ],
  };

const result = c.slice(0, insertAt) + newTheme + '\n' + c.slice(insertAt);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const verify = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('health:', verify.includes('"health"'));
