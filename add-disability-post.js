const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

const newPost = ,
  {
    slug: "hoc-tieng-anh-cho-nguoi-khuyet-tat",
    title: "N\u1ebfu b\u1ea1n l\u00e0 ng\u01b0\u1eddi khuy\u1ebft t\u1eadt v\u00e0 mu\u1ed1n h\u1ecdc ti\u1ebfng Anh \u2014 b\u00e0i vi\u1ebft n\u00e0y d\u00e0nh cho b\u1ea1n",
    emoji: "\uD83C\uDF1F",
    summary: "Kh\u00f4ng c\u00f3 r\u00e0o c\u1ea3n n\u00e0o l\u00e0 kh\u00f4ng th\u1ec3 v\u01b0\u1ee3t qua. H\u01b0\u1edbng d\u1eabn h\u1ecdc ti\u1ebfng Anh th\u1ef1c t\u1ebf d\u00e0nh cho ng\u01b0\u1eddi khi\u1ebfm th\u1ecb, khi\u1ebfm thnh, kh\u00f3 kh\u0103n v\u1eadn \u0111\u1ed9ng v\u00e0 nhi\u1ec1u d\u1ea1ng kh\u1ea3 n\u0103ng \u0111\u1eb7c bi\u1ec7t kh\u00e1c.",
    tags: ["Kinh nghi\u1ec7m", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "04/06/2026",
    readingTime: "7 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Ti\u1ebfng Anh m\u1edf ra c\u01a1 h\u1ed9i \u2014 vi\u1ec7c l\u00e0m, h\u1ecdc b\u1ed5ng, k\u1ebft n\u1ed1i qu\u1ed1c t\u1ebf, ti\u1ebfp c\u1eadn th\u00f4ng tin. V\u00e0 \u0111i\u1ec1u \u0111\u00f3 kh\u00f4ng ch\u1ec9 d\u00e0nh cho ng\u01b0\u1eddi c\u00f3 \u0111\u1ea7y \u0111\u1ee7 kh\u1ea3 n\u0103ng th\u1ec3 ch\u1ea5t. B\u00e0i vi\u1ebft n\u00e0y vi\u1ebft cho nh\u1eefng ng\u01b0\u1eddi \u0111ang h\u1ecdc ti\u1ebfng Anh v\u1edbi m\u1ed9t c\u01a1 th\u1ec3 kh\u00e1c \u2014 v\u00e0 \u0111i\u1ec1u \u0111\u00f3 ho\u00e0n to\u00e0n b\u00ecnh th\u01b0\u1eddng." },
      { type: "callout", emoji: "\uD83D\uDC99", text: "L\u01b0u \u00fd: B\u00e0i vi\u1ebft n\u00e0y \u0111\u1ec1 c\u1eadp nhi\u1ec1u d\u1ea1ng kh\u1ea3 n\u0103ng \u0111\u1eb7c bi\u1ec7t kh\u00e1c nhau. H\u00e3y \u0111\u1ecdc ph\u1ea7n ph\u00f9 h\u1ee3p v\u1edbi b\u1ea1n \u2014 b\u1ea1n kh\u00f4ng c\u1ea7n \u0111\u1ecdc h\u1ebft." },
      { type: "heading", text: "N\u1ebfu b\u1ea1n khi\u1ebfm th\u1ecb (kh\u00f3 nh\u00ecn ho\u1eb7c m\u00f9 ho\u00e0n to\u00e0n)" },
      { type: "paragraph", text: "Ti\u1ebfng Anh c\u00f3 r\u1ea5t nhi\u1ec1u t\u00e0i nguy\u00ean \u00e2m thanh. Th\u1ef1c ra, h\u1ecdc qua tai c\u00f3 th\u1ec3 gi\u00fap b\u1ea1n ti\u1ebfp thu t\u1ef1 nhi\u00ean h\u01a1n \u2014 nhi\u1ec1u ng\u01b0\u1eddi khi\u1ebfm th\u1ecb c\u00f3 kh\u1ea3 n\u0103ng nghe v\u01b0\u1ee3t tr\u1ed9i." },
      { type: "list", items: [
        "Screen reader t\u01b0\u01a1ng th\u00edch: NVDA (mi\u1ec5n ph\u00ed), JAWS, VoiceOver (iOS/Mac) \u2014 \u0111\u1ecdc to n\u1ed9i dung web.",
        "Podcast ti\u1ebfng Anh: 6 Minute English (BBC), ESL Pod, VOA Learning English \u2014 nghe m\u1ecdi n\u01a1i, m\u1ecdi l\u00fac.",
        "Audiobook: LibriVox c\u00f3 s\u00e1ch ti\u1ebfng Anh \u0111\u1ecdc to ho\u00e0n to\u00e0n mi\u1ec5n ph\u00ed.",
        "YouTube: b\u1eadt ph\u00e1t \u00e2m t\u1ef1 \u0111\u1ed9ng (TTS) tr\u00ean tr\u00ecnh duy\u1ec7t \u0111\u1ec3 nghe ph\u1ee5 \u0111\u1ec1.",
        "Duolingo v\u00e0 Apple English \u0111\u1ec1u c\u00f3 ch\u1ebf \u0111\u1ed9 \u00e2m thanh \u2014 h\u1ecdc kh\u00f4ng c\u1ea7n nh\u00ecn nhi\u1ec1u."
      ]},
      { type: "callout", emoji: "\uD83D\uDCA1", text: "M\u1eb9o: \u0110\u1eb7t t\u1ed1c \u0111\u1ed9 ph\u00e1t l\u1ea1i 0.75x khi m\u1edbi b\u1eaft \u0111\u1ea7u, t\u0103ng d\u1ea7n l\u00ean 1x r\u1ed3i 1.25x theo th\u1eddi gian. Tai s\u1ebd quen d\u1ea7n v\u1edbi t\u1ed1c \u0111\u1ed9 b\u00ecnh th\u01b0\u1eddng." },
      { type: "heading", text: "N\u1ebfu b\u1ea1n khi\u1ebfm thanh (kh\u00f3 nghe ho\u1eb7c \u0111i\u1ebfc ho\u00e0n to\u00e0n)" },
      { type: "paragraph", text: "Ti\u1ebfng Anh vi\u1ebft v\u00e0 \u0111\u1ecdc hi\u1ec3u ho\u00e0n to\u00e0n kh\u00f4ng c\u1ea7n \u0111\u1ebfn kh\u1ea3 n\u0103ng nghe. Nhi\u1ec1u ng\u01b0\u1eddi khi\u1ebfm thanh \u0111\u1ecdc v\u00e0 vi\u1ebft ti\u1ebfng Anh r\u1ea5t t\u1ed1t \u2014 \u0111\u01b0\u1ee3c tuy\u1ec3n d\u1ee5ng b\u1edfi c\u00e1c c\u00f4ng ty qu\u1ed1c t\u1ebf." },
      { type: "list", items: [
        "T\u1eadp trung v\u00e0o Reading v\u00e0 Writing tr\u01b0\u1edbc \u2014 \u0111\u00e2y l\u00e0 th\u1ebf m\u1ea1nh th\u1ef1c s\u1ef1.",
        "H\u1ecdc qua ph\u1ee5 \u0111\u1ec1 phim: Language Reactor tr\u00ean Chrome hi\u1ec3n th\u1ecb song ng\u1eef, c\u00f3 th\u1ec3 click t\u1eebng t\u1eeb.",
        "Chat v\u1edbi AI (nh\u01b0 Claude, ChatGPT) b\u1eb1ng ti\u1ebfng Anh \u2014 luy\u1ec7n vi\u1ebft kh\u00f4ng gi\u1edbi h\u1ea1n.",
        "Google Docs c\u00f3 ch\u1ebf \u0111\u1ed9 g\u00f5 b\u1eb1ng gi\u1ecdng \u2014 nh\u01b0ng n\u1ebfu kh\u00f3 nghe, h\u00e3y d\u00f9ng b\u00e0n ph\u00edm b\u00ecnh th\u01b0\u1eddng.",
        "TOEIC v\u00e0 c\u00e1c ch\u1ee9ng ch\u1ec9 qu\u1ed1c t\u1ebf c\u00f3 ch\u1ebf \u0111\u1ed9 \u0111\u1eb7c bi\u1ec7t cho ng\u01b0\u1eddi khi\u1ebfm thanh \u2014 h\u00e3y li\u00ean h\u1ec7 trung t\u00e2m thi \u0111\u1ec3 bi\u1ebft th\u00eam."
      ]},
      { type: "heading", text: "N\u1ebfu b\u1ea1n kh\u00f3 kh\u0103n v\u1eadn \u0111\u1ed9ng (tay, ng\u00f3n tay, di \u0111\u1ed9ng h\u1ea1n ch\u1ebf)" },
      { type: "paragraph", text: "H\u1ecdc ti\u1ebfng Anh kh\u00f4ng \u0111\u00f2i h\u1ecfi vi\u1ebft tay. C\u00f3 nhi\u1ec1u c\u00f4ng c\u1ee5 gi\u00fap b\u1ea1n h\u1ecdc hi\u1ec7u qu\u1ea3 m\u00e0 kh\u00f4ng c\u1ea7n g\u00f5 nhi\u1ec1u." },
      { type: "list", items: [
        "Voice typing: Chrome c\u00f3 t\u00ednh n\u0103ng g\u00f5 b\u1eb1ng gi\u1ecdng \u2014 n\u00f3i ti\u1ebfng Anh, m\u00e1y t\u1ef1 chuy\u1ec3n th\u00e0nh ch\u1eef.",
        "Switch Access (Android) v\u00e0 AssistiveTouch (iOS) \u2014 \u0111i\u1ec1u khi\u1ec3n m\u00e0n h\u00ecnh b\u1eb1ng c\u1eed ch\u1ec9 \u0111\u01a1n gi\u1ea3n.",
        "Eye-tracking: \u1ee9ng d\u1ee5ng nh\u01b0 Tobii c\u00f3 th\u1ec3 \u0111i\u1ec1u khi\u1ec3n m\u00e1y t\u00ednh b\u1eb1ng m\u1eaft.",
        "Flashcard b\u1eb1ng gi\u1ecdng n\u00f3i: Anki c\u00f3 ch\u1ebf \u0111\u1ed9 nghe \u0111\u00e1p \u00e1n \u2014 kh\u00f4ng c\u1ea7n g\u00f5 ph\u00edm.",
        "H\u1ecdc qua video YouTube kh\u00f4ng c\u1ea7n t\u01b0\u01a1ng t\u00e1c nhi\u1ec1u \u2014 ch\u1ec9 c\u1ea7n xem v\u00e0 nghe."
      ]},
      { type: "heading", text: "N\u1ebfu b\u1ea1n c\u00f3 kh\u00f3 kh\u0103n h\u1ecdc t\u1eadp (dyslexia, ADHD, r\u1ed1i lo\u1ea1n \u0111\u1ecdc hi\u1ec3u)" },
      { type: "paragraph", text: "Nhi\u1ec1u ng\u01b0\u1eddi n\u1ed5i ti\u1ebfng th\u1ebf gi\u1edbi c\u00f3 dyslexia nh\u01b0ng n\u00f3i \u0111\u01b0\u1ee3c nhi\u1ec1u ng\u00f4n ng\u1eef. B\u00ed quy\u1ebft l\u00e0 h\u1ecdc qua \u00e2m thanh v\u00e0 h\u00ecnh \u1ea3nh, kh\u00f4ng qua v\u0103n b\u1ea3n th\u1ea7n th\u00fa." },
      { type: "list", items: [
        "H\u1ecdc qua nh\u1ea1c v\u00e0 v\u1ea7n \u0111i\u1ec7u \u2014 n\u00e3o ghi nh\u1edb \u00e2m thanh t\u1ed1t h\u01a1n ch\u1eef vi\u1ebft.",
        "Flashcard c\u00f3 h\u00ecnh \u1ea3nh + \u00e2m thanh \u2014 Anki, Quizlet \u0111\u1ec1u h\u1ed7 tr\u1ee3.",
        "Font ch\u1eef d\u00e0nh cho dyslexia: OpenDyslexic \u2014 c\u00e0i tr\u00ean tr\u00ecnh duy\u1ec7t gi\u00fap \u0111\u1ecdc d\u1ec5 h\u01a1n.",
        "H\u1ecdc theo session ng\u1eafn 5\u201310 ph\u00fat \u2014 ngh\u1ec9 gi\u1eefa c\u00e1c session. ADHD th\u01b0\u1eddng l\u00e0m vi\u1ec7c t\u1ed1t h\u01a1n v\u1edbi nhi\u1ec1u k\u1ef3 ngh\u1ec9 ng\u1eafn.",
        "Gamification nh\u01b0 Apple English, Duolingo gi\u00fap duy tr\u00ec c\u01b0\u1ee1ng \u0111\u1ed9 t\u1eadp trung t\u1ed1t h\u01a1n."
      ]},
      { type: "heading", text: "Nh\u1eefng ng\u01b0\u1eddi truy\u1ec1n c\u1ea3m h\u1ee9ng" },
      { type: "paragraph", text: "B\u1ea1n kh\u00f4ng \u0111i m\u1ed9t m\u00ecnh. Nhi\u1ec1u ng\u01b0\u1eddi kh\u00f3 kh\u0103n h\u01a1n b\u1ea1n \u0111\u00e3 th\u00e0nh c\u00f4ng:" },
      { type: "list", items: [
        "Haben Girma \u2014 lu\u1eadt s\u01b0 M\u1ef9 v\u1eeba khi\u1ebfm th\u1ecb v\u1eeba khi\u1ebfm thanh, t\u1ed1t nghi\u1ec7p Harvard Law.",
        "Haben Girma giao ti\u1ebfng Anh qua b\u00e0n ph\u00edm Braille k\u1ebft n\u1ed1i v\u1edbi m\u00e1y t\u00ednh.",
        "Nick Vujicic \u2014 sinh ra kh\u00f4ng tay kh\u00f4ng ch\u00e2n, n\u00f3i ti\u1ebfng Anh tr\u01b0\u1edbc h\u00e0ng tri\u1ec7u ng\u01b0\u1eddi.",
        "C\u00f3 c\u1ea3 m\u1ed9t c\u1ed9ng \u0111\u1ed3ng DeafEnglish tr\u00ean YouTube \u2014 ng\u01b0\u1eddi \u0111i\u1ebfc d\u1ea1y nhau h\u1ecdc ti\u1ebfng Anh."
      ]},
      { type: "callout", emoji: "\uD83D\uDCAA", text: "Ti\u1ebfng Anh l\u00e0 c\u00f4ng c\u1ee5. C\u00f4ng c\u1ee5 kh\u00f4ng c\u00f3 \u0111i\u1ec1u ki\u1ec7n ti\u00ean quy\u1ebft v\u1ec1 c\u01a1 th\u1ec3. B\u1ea1n c\u00f3 th\u1ec3 h\u1ecdc theo c\u00e1ch c\u1ee7a m\u00ecnh \u2014 kh\u00f4ng ph\u1ea3i theo c\u00e1ch c\u1ee7a ng\u01b0\u1eddi kh\u00e1c." },
      { type: "heading", text: "B\u1eaft \u0111\u1ea7u t\u1eeb \u0111\u00e2u?" },
      { type: "list", items: [
        "X\u00e1c \u0111\u1ecbnh b\u1ea1n m\u1ea1nh h\u01a1n \u1edf k\u1ef9 n\u0103ng n\u00e0o: Nghe? \u0110\u1ecdc? Vi\u1ebft? N\u00f3i? B\u1eaft \u0111\u1ea7u t\u1eeb k\u1ef9 n\u0103ng \u0111\u00f3.",
        "Ch\u1ecdn 1 m\u1ee5c ti\u00eau c\u1ee5 th\u1ec3: \u0111\u1ecdc email c\u00f4ng vi\u1ec7c, chat v\u1edbi b\u1ea1n qu\u1ed1c t\u1ebf, thi TOEIC.",
        "H\u1ecdc 10\u201315 ph\u00fat m\u1ed7i ng\u00e0y \u2014 \u0111\u01b0\u01a1ng \u0111\u1ea7u d\u00e0i, kh\u00f4ng c\u1ea7n nhanh.",
        "T\u00ecm c\u1ed9ng \u0111\u1ed3ng h\u1ecd tr\u1ee3 \u2014 deaf education groups, blind language learners tr\u00ean Facebook v\u00e0 Reddit."
      ]},
      { type: "quote", text: "Ng\u00f4n ng\u1eef kh\u00f4ng c\u00f3 gi\u1edbi h\u1ea1n. C\u01a1 th\u1ec3 b\u1ea1n kh\u00f4ng quy\u1ebft \u0111\u1ecbnh b\u1ea1n h\u1ecdc \u0111\u01b0\u1ee3c hay kh\u00f4ng \u2014 \u00fd ch\u00ed m\u1edbi l\u00e0 th\u1ee9 quy\u1ebft \u0111\u1ecbnh." }
    ]
  };

c = c.replace('];', newPost + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done');
