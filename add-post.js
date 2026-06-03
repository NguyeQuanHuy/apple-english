const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

const newPost = ,
  {
    slug: "hoc-tieng-anh-cho-nguoi-khuyet-tat",
    title: "N\u1ebfu b\u1ea1n l\u00e0 ng\u01b0\u1eddi khuy\u1ebft t\u1eadt v\u00e0 mu\u1ed1n h\u1ecdc ti\u1ebfng Anh",
    emoji: "\uD83C\uDF1F",
    summary: "Kh\u00f4ng c\u00f3 r\u00e0o c\u1ea3n n\u00e0o l\u00e0 kh\u00f4ng th\u1ec3 v\u01b0\u1ee3t qua. H\u01b0\u1edbng d\u1eabn th\u1ef1c t\u1ebf d\u00e0nh cho ng\u01b0\u1eddi khi\u1ebfm th\u1ecb, khi\u1ebfm thanh, kh\u00f3 kh\u0103n v\u1eadn \u0111\u1ed9ng v\u00e0 nhi\u1ec1u d\u1ea1ng kh\u1ea3 n\u0103ng \u0111\u1eb7c bi\u1ec7t kh\u00e1c.",
    tags: ["Kinh nghi\u1ec7m", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "04/06/2026",
    readingTime: "7 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Ti\u1ebfng Anh m\u1edf ra c\u01a1 h\u1ed9i \u2014 vi\u1ec7c l\u00e0m, h\u1ecdc b\u1ed5ng, k\u1ebft n\u1ed1i qu\u1ed1c t\u1ebf. V\u00e0 \u0111i\u1ec1u \u0111\u00f3 kh\u00f4ng ch\u1ec9 d\u00e0nh cho ng\u01b0\u1eddi c\u00f3 \u0111\u1ea7y \u0111\u1ee7 kh\u1ea3 n\u0103ng th\u1ec3 ch\u1ea5t." },
      { type: "callout", emoji: "\uD83D\uDC99", text: "B\u00e0i vi\u1ebft n\u00e0y \u0111\u1ec1 c\u1eadp nhi\u1ec1u d\u1ea1ng kh\u1ea3 n\u0103ng \u0111\u1eb7c bi\u1ec7t kh\u00e1c nhau. H\u00e3y \u0111\u1ecdc ph\u1ea7n ph\u00f9 h\u1ee3p v\u1edbi b\u1ea1n." },
      { type: "heading", text: "N\u1ebfu b\u1ea1n khi\u1ebfm th\u1ecb" },
      { type: "list", items: ["Screen reader: NVDA (mi\u1ec5n ph\u00ed), VoiceOver (iOS/Mac) \u0111\u1ecdc to n\u1ed9i dung web.", "Podcast ti\u1ebfng Anh: 6 Minute English (BBC), VOA Learning English.", "Audiobook: LibriVox c\u00f3 s\u00e1ch ti\u1ebfng Anh \u0111\u1ecdc to ho\u00e0n to\u00e0n mi\u1ec5n ph\u00ed.", "Duolingo v\u00e0 Apple English \u0111\u1ec1u c\u00f3 ch\u1ebf \u0111\u1ed9 \u00e2m thanh."] },
      { type: "callout", emoji: "\uD83D\uDCA1", text: "\u0110\u1eb7t t\u1ed1c \u0111\u1ed9 ph\u00e1t l\u1ea1i 0.75x khi m\u1edbi b\u1eaft \u0111\u1ea7u, t\u0103ng d\u1ea7n l\u00ean 1x r\u1ed3i 1.25x. Tai s\u1ebd quen d\u1ea7n." },
      { type: "heading", text: "N\u1ebfu b\u1ea1n khi\u1ebfm thanh" },
      { type: "paragraph", text: "Ti\u1ebfng Anh vi\u1ebft v\u00e0 \u0111\u1ecdc hi\u1ec3u ho\u00e0n to\u00e0n kh\u00f4ng c\u1ea7n \u0111\u1ebfn kh\u1ea3 n\u0103ng nghe." },
      { type: "list", items: ["T\u1eadp trung v\u00e0o Reading v\u00e0 Writing tr\u01b0\u1edbc.", "H\u1ecdc qua ph\u1ee5 \u0111\u1ec1 phim: Language Reactor tr\u00ean Chrome.", "Chat v\u1edbi AI b\u1eb1ng ti\u1ebfng Anh \u2014 luy\u1ec7n vi\u1ebft kh\u00f4ng gi\u1edbi h\u1ea1n.", "TOEIC c\u00f3 ch\u1ebf \u0111\u1ed9 \u0111\u1eb7c bi\u1ec7t cho ng\u01b0\u1eddi khi\u1ebfm thanh."] },
      { type: "heading", text: "N\u1ebfu b\u1ea1n kh\u00f3 kh\u0103n v\u1eadn \u0111\u1ed9ng" },
      { type: "list", items: ["Voice typing: Chrome c\u00f3 t\u00ednh n\u0103ng g\u00f5 b\u1eb1ng gi\u1ecdng.", "Switch Access (Android) v\u00e0 AssistiveTouch (iOS).", "Flashcard b\u1eb1ng gi\u1ecdng n\u00f3i: Anki c\u00f3 ch\u1ebf \u0111\u1ed9 nghe \u0111\u00e1p \u00e1n."] },
      { type: "heading", text: "N\u1ebfu b\u1ea1n c\u00f3 kh\u00f3 kh\u0103n h\u1ecdc t\u1eadp (dyslexia, ADHD)" },
      { type: "list", items: ["H\u1ecdc qua nh\u1ea1c v\u00e0 v\u1ea7n \u0111i\u1ec7u \u2014 n\u00e3o ghi nh\u1edb \u00e2m thanh t\u1ed1t h\u01a1n ch\u1eef vi\u1ebft.", "Font ch\u1eef d\u00e0nh cho dyslexia: OpenDyslexic \u2014 c\u00e0i tr\u00ean tr\u00ecnh duy\u1ec7t.", "H\u1ecdc theo session ng\u1eafn 5-10 ph\u00fat, ngh\u1ec9 gi\u1eefa c\u00e1c session.", "Gamification nh\u01b0 Apple English gi\u00fap duy tr\u00ec t\u1eadp trung t\u1ed1t h\u01a1n."] },
      { type: "heading", text: "Nh\u1eefng ng\u01b0\u1eddi truy\u1ec1n c\u1ea3m h\u1ee9ng" },
      { type: "list", items: ["Haben Girma \u2014 v\u1eeba khi\u1ebfm th\u1ecb v\u1eeba khi\u1ebfm thanh, t\u1ed1t nghi\u1ec7p Harvard Law.", "Nick Vujicic \u2014 sinh ra kh\u00f4ng tay kh\u00f4ng ch\u00e2n, n\u00f3i ti\u1ebfng Anh tr\u01b0\u1edbc h\u00e0ng tri\u1ec7u ng\u01b0\u1eddi.", "C\u1ed9ng \u0111\u1ed3ng DeafEnglish tr\u00ean YouTube \u2014 ng\u01b0\u1eddi \u0111i\u1ebfc d\u1ea1y nhau h\u1ecdc ti\u1ebfng Anh."] },
      { type: "callout", emoji: "\uD83D\uDCAA", text: "Ti\u1ebfng Anh l\u00e0 c\u00f4ng c\u1ee5. C\u00f4ng c\u1ee5 kh\u00f4ng c\u00f3 \u0111i\u1ec1u ki\u1ec7n ti\u00ean quy\u1ebft v\u1ec1 c\u01a1 th\u1ec3. B\u1ea1n c\u00f3 th\u1ec3 h\u1ecdc theo c\u00e1ch c\u1ee7a m\u00ecnh." },
      { type: "quote", text: "Ng\u00f4n ng\u1eef kh\u00f4ng c\u00f3 gi\u1edbi h\u1ea1n. C\u01a1 th\u1ec3 b\u1ea1n kh\u00f4ng quy\u1ebft \u0111\u1ecbnh b\u1ea1n h\u1ecdc \u0111\u01b0\u1ee3c hay kh\u00f4ng \u2014 \u00fd ch\u00ed m\u1edbi l\u00e0 th\u1ee9 quy\u1ebft \u0111\u1ecbnh." }
    ]
  };

c = c.replace('];', newPost + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
const v = fs.readFileSync('data/blog.ts', 'utf8');
console.log('disability:', v.includes('khuyet-tat'));
