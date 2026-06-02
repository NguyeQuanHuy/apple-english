const fs = require('fs');
let c = fs.readFileSync('data/toeic.ts', 'utf8');

const newTheme = 
  ,{
    id: "education",
    title: "Gi\u00e1o d\u1ee5c & \u0110\u00e0o t\u1ea1o",
    emoji: "\ud83c\udf93",
    description: "T\u1eeb v\u1ef1ng v\u1ec1 \u0111\u00e0o t\u1ea1o, h\u1ecdc vi\u1ec7c, h\u1ed9i th\u1ea3o hay g\u1eb7p trong TOEIC Part 4\u20137",
    words: [
      { en: "training", pos: "n.", vi: "\u0111\u00e0o t\u1ea1o", example: "All new employees must complete the training program." },
      { en: "seminar", pos: "n.", vi: "h\u1ed9i th\u1ea3o", example: "We attended a seminar on leadership skills." },
      { en: "certificate", pos: "n.", vi: "ch\u1ee9ng ch\u1ec9", example: "She received a certificate after completing the course." },
      { en: "curriculum", pos: "n.", vi: "ch\u01b0\u01a1ng tr\u00ecnh \u0111\u00e0o t\u1ea1o", example: "The curriculum has been updated for this year." },
      { en: "intern", pos: "n.", vi: "th\u1ef1c t\u1eadp sinh", example: "We are looking for interns for the summer." },
      { en: "qualify", pos: "v.", vi: "\u0111\u1ee7 \u0111i\u1ec1u ki\u1ec7n", example: "Do you qualify for the advanced course?" },
      { en: "enroll", pos: "v.", vi: "\u0111\u0103ng k\u00fd (kh\u00f3a h\u1ecdc)", example: "You can enroll online before the deadline." },
      { en: "prerequisite", pos: "n.", vi: "\u0111i\u1ec1u ki\u1ec7n ti\u00ean quy\u1ebft", example: "English B1 is a prerequisite for this program." },
      { en: "workshop", pos: "n.", vi: "bu\u1ed5i th\u1ef1c h\u00e0nh / workshop", example: "The workshop on Excel was very useful." },
      { en: "mentor", pos: "n.", vi: "ng\u01b0\u1eddi h\u01b0\u1edbng d\u1eabn", example: "She was assigned a mentor for her first year." },
    ],
  };

c = c.replace('export const TOEIC_TESTS', newTheme + '\n\nexport const TOEIC_TESTS');
fs.writeFileSync('data/toeic.ts', c, 'utf8');
console.log('Done');
