const fs = require('fs');
let c = fs.readFileSync('data/toeic.ts', 'utf8');
const lastBracket = c.lastIndexOf('];');
const newThemes = 
  ,{
    id: "technology",
    title: "C\u00f4ng ngh\u1ec7 & Thi\u1ebft b\u1ecb",
    emoji: "\ud83d\udcbb",
    description: "T\u1eeb v\u1ef1ng v\u1ec1 IT, thi\u1ebft b\u1ecb hay g\u1eb7p trong TOEIC",
    words: [
      { en: "install", pos: "v.", vi: "c\u00e0i \u0111\u1eb7t", example: "Please install the latest software update." },
      { en: "upgrade", pos: "v.", vi: "n\u00e2ng c\u1ea5p", example: "We need to upgrade the server this weekend." },
      { en: "malfunction", pos: "n.", vi: "s\u1ef1 c\u1ed1 k\u1ef9 thu\u1eadt", example: "The printer has a malfunction and needs repair." },
      { en: "maintenance", pos: "n.", vi: "b\u1ea3o tr\u00ec", example: "The system is down for scheduled maintenance." },
      { en: "compatible", pos: "adj.", vi: "t\u01b0\u01a1ng th\u00edch", example: "Make sure the software is compatible with your system." },
      { en: "backup", pos: "n.", vi: "sao l\u01b0u", example: "Always make a backup before updating the system." },
      { en: "troubleshoot", pos: "v.", vi: "kh\u1eafc ph\u1ee5c s\u1ef1 c\u1ed1", example: "The IT team will troubleshoot the network issue." },
      { en: "configure", pos: "v.", vi: "c\u1ea5u h\u00ecnh", example: "You need to configure the device before use." },
      { en: "bandwidth", pos: "n.", vi: "b\u0103ng th\u00f4ng", example: "Streaming uses a lot of bandwidth." },
      { en: "encrypted", pos: "adj.", vi: "\u0111\u01b0\u1ee3c m\u00e3 h\u00f3a", example: "All sensitive data must be encrypted." },
    ],
  },
  {
    id: "education",
    title: "Gi\u00e1o d\u1ee5c & \u0110\u00e0o t\u1ea1o",
    emoji: "\ud83c\udf93",
    description: "T\u1eeb v\u1ef1ng v\u1ec1 \u0111\u00e0o t\u1ea1o, h\u1ecdc vi\u1ec7c hay g\u1eb7p trong TOEIC Part 4-7",
    words: [
      { en: "training", pos: "n.", vi: "\u0111\u00e0o t\u1ea1o", example: "All new employees must complete the training program." },
      { en: "seminar", pos: "n.", vi: "h\u1ed9i th\u1ea3o", example: "We attended a seminar on leadership skills." },
      { en: "certificate", pos: "n.", vi: "ch\u1ee9ng ch\u1ec9", example: "She received a certificate after completing the course." },
      { en: "curriculum", pos: "n.", vi: "ch\u01b0\u01a1ng tr\u00ecnh \u0111\u00e0o t\u1ea1o", example: "The curriculum has been updated for this year." },
      { en: "intern", pos: "n.", vi: "th\u1ef1c t\u1eadp sinh", example: "We are looking for interns for the summer." },
      { en: "qualify", pos: "v.", vi: "\u0111\u1ee7 \u0111i\u1ec1u ki\u1ec7n", example: "Do you qualify for the advanced course?" },
      { en: "enroll", pos: "v.", vi: "\u0111\u0103ng k\u00fd kh\u00f3a h\u1ecdc", example: "You can enroll online before the deadline." },
      { en: "prerequisite", pos: "n.", vi: "\u0111i\u1ec1u ki\u1ec7n ti\u00ean quy\u1ebft", example: "English B1 is a prerequisite for this program." },
      { en: "workshop", pos: "n.", vi: "bu\u1ed5i th\u1ef1c h\u00e0nh", example: "The workshop on Excel was very useful." },
      { en: "mentor", pos: "n.", vi: "ng\u01b0\u1eddi h\u01b0\u1edbng d\u1eabn", example: "She was assigned a mentor for her first year." },
    ],
  };
const result = c.slice(0, lastBracket) + newThemes + '\n' + c.slice(lastBracket);
fs.writeFileSync('data/toeic.ts', result, 'utf8');
const verify = fs.readFileSync('data/toeic.ts', 'utf8');
console.log('technology:', verify.includes('technology'));
console.log('education:', verify.includes('education'));
