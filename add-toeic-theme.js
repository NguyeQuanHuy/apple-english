const fs = require('fs');
let c = fs.readFileSync('data/toeic.ts', 'utf8');

const newTheme = 
  ,{
    id: "technology",
    title: "C\u00f4ng ngh\u1ec7 & Thi\u1ebft b\u1ecb",
    emoji: "\ud83d\udcbb",
    description: "T\u1eeb v\u1ef1ng v\u1ec1 IT, thi\u1ebft b\u1ecb v\u0103n ph\u00f2ng hay g\u1eb7p trong TOEIC Part 1\u20137",
    words: [
      { en: "install", pos: "v.", vi: "c\u00e0i \u0111\u1eb7t", example: "Please install the latest software update." },
      { en: "upgrade", pos: "v.", vi: "n\u00e2ng c\u1ea5p", example: "We need to upgrade the server this weekend." },
      { en: "malfunction", pos: "n.", vi: "s\u1ef1 c\u1ed1 k\u1ef9 thu\u1eadt", example: "The printer has a malfunction and needs repair." },
      { en: "maintenance", pos: "n.", vi: "b\u1ea3o tr\u00ec", example: "The system is down for scheduled maintenance." },
      { en: "compatible", pos: "adj.", vi: "t\u01b0\u01a1ng th\u00edch", example: "Make sure the software is compatible with your system." },
      { en: "backup", pos: "n.", vi: "sao l\u01b0u", example: "Always make a backup before updating the system." },
      { en: "troubleshoot", pos: "v.", vi: "kh\u1eafc ph\u1ee5c s\u1ef1 c\u1ed1", example: "The IT team will troubleshoot the network issue." },
      { en: "configure", pos: "v.", vi: "c\u1ea5u h\u00ecnh", example: "You need to configure the device before use." },
      { en: "bandwidth", pos: "n.", vi: "b\u0103ng th\u00f4ng", example: "Streaming videos uses a lot of bandwidth." },
      { en: "encrypted", pos: "adj.", vi: "\u0111\u01b0\u1ee3c m\u00e3 h\u00f3a", example: "All sensitive data must be encrypted." },
    ],
  };

c = c.replace('export const TOEIC_TESTS', newTheme + '\n\nexport const TOEIC_TESTS');
fs.writeFileSync('data/toeic.ts', c, 'utf8');
console.log('Done');
