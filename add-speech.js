const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

const lines = [
  ',',
  '  {',
  '    slug: "hoc-tieng-anh-khi-bi-khuyet-tat-giong-noi",',
  '    title: "H\u1ecdc ti\u1ebfng Anh khi b\u1ecb khi\u1ebfm khuy\u1ebft v\u1ec1 gi\u1ecdng n\u00f3i \u2014 b\u1ea1n v\u1eabn l\u00e0m \u0111\u01b0\u1ee3c",',
  '    emoji: "\uD83D\uDCDD",',
  '    summary: "Kh\u00f4ng n\u00f3i \u0111\u01b0\u1ee3c ho\u1eb7c n\u00f3i kh\u00f3 kh\u0103n kh\u00f4ng c\u00f3 ngh\u0129a l\u00e0 b\u1ea1n kh\u00f4ng h\u1ecdc \u0111\u01b0\u1ee3c ti\u1ebfng Anh. H\u01b0\u1edbng d\u1eabn \u0111\u1ea7y \u0111\u1ee7 cho ng\u01b0\u1eddi kh\u00f3 kh\u0103n v\u1ec1 ng\u00f4n ng\u1eef, \u00e2m thanh, \u0111am m\u00ea.",',
  '    tags: ["Kinh nghi\u1ec7m", "Ph\u01b0\u01a1ng ph\u00e1p"],',
  '    date: "04/06/2026",',
  '    readingTime: "7 ph\u00fat \u0111\u1ecdc",',
  '    content: [',
  '      { type: "paragraph", text: "Ti\u1ebfng Anh kh\u00f4ng ch\u1ec9 l\u00e0 ng\u00f4n ng\u1eef n\u00f3i. \u0110\u00f3 l\u00e0 m\u1ed9t h\u1ec7 th\u1ed1ng giao ti\u1ebfp \u0111a d\u1ea1ng \u2014 vi\u1ebft, \u0111\u1ecdc, nghe, k\u00fd hi\u1ec7u, c\u00f4ng ngh\u1ec7 h\u1ed7 tr\u1ee3. B\u1ea1n c\u00f3 th\u1ec3 h\u1ecdc v\u00e0 s\u1eed d\u1ee5ng ti\u1ebfng Anh d\u00f9 kh\u00f4ng n\u00f3i \u0111\u01b0\u1ee3c m\u1ed9t ti\u1ebfng n\u00e0o." },',
  '      { type: "callout", emoji: "\uD83D\uDC99", text: "B\u00e0i vi\u1ebft n\u00e0y d\u00e0nh cho: ng\u01b0\u1eddi ngu t\u1eadt n\u00f3i (stuttering), b\u1ea1i n\u00e3o \u1ea3nh h\u01b0\u1edfng gi\u1ecdng n\u00f3i, kh\u00f3 n\u00f3i do y\u1ebft h\u1ea7u, ng\u01b0\u1eddi kh\u00f4ng c\u00f3 thanh qu\u1ea3n, v\u00e0 b\u1ea5t k\u1ef3 ai c\u1ea3m th\u1ea5y n\u00f3i ti\u1ebfng Anh l\u00e0 r\u00e0o c\u1ea3n qu\u00e1 l\u1edbn." },',
  '      { type: "heading", text: "Ti\u1ebfng Anh vi\u1ebft v\u00e0 \u0111\u1ecdc hi\u1ec3u \u2014 c\u00e1nh c\u1eeda r\u1ed9ng m\u1edf nh\u1ea5t" },',
  '      { type: "paragraph", text: "Nhi\u1ec1u ng\u01b0\u1eddi t\u01b0\u1edfng ti\u1ebfng Anh = n\u00f3i ti\u1ebfng Anh. Nh\u01b0ng trong th\u1ebf gi\u1edbi c\u00f4ng vi\u1ec7c hi\u1ec7n \u0111\u1ea1i, 70-80% giao ti\u1ebfp ti\u1ebfng Anh x\u1ea3y ra qua email, chat, v\u0103n b\u1ea3n, b\u00e1o c\u00e1o. Vi\u1ebft t\u1ed1t l\u00e0 k\u1ef9 n\u0103ng quan tr\u1ecdng nh\u1ea5t." },',
  '      { type: "list", items: ["Email c\u00f4ng vi\u1ec7c v\u1edbi \u0111\u1ed3ng nghi\u1ec7p qu\u1ed1c t\u1ebf", "Chat tr\u00ean Slack, Teams v\u1edbi team n\u01b0\u1edbc ngo\u00e0i", "Vi\u1ebft code comments v\u00e0 documentation", "Tham gia c\u1ed9ng \u0111\u1ed3ng k\u1ef9 thu\u1eadt tr\u00ean GitHub, Stack Overflow", "H\u1ecdc kh\u00f3a h\u1ecdc online b\u1eb1ng ti\u1ebfng Anh"] },',
  '      { type: "callout", emoji: "\uD83D\uDCBC", text: "Th\u1ef1c t\u1ebf: Nhi\u1ec1u k\u1ef9 s\u01b0 ph\u1ea7n m\u1ec1m Vi\u1ec7t Nam l\u00e0m vi\u1ec7c cho c\u00f4ng ty M\u1ef9, \u00c2u m\u00e0 ch\u01b0a b\u1eafo gi\u1edd ph\u1ea3i g\u1ecdi \u0111i\u1ec7n hay g\u1eb7p tr\u1ef1c ti\u1ebfp. To\u00e0n b\u1ed9 giao ti\u1ebfp qua text." },',
  '      { type: "heading", text: "N\u1ebfu b\u1ea1n b\u1ecb n\u00f3i l\u1eafp (stuttering)" },',
  '      { type: "paragraph", text: "N\u00f3i l\u1eafp kh\u00f4ng \u1ea3nh h\u01b0\u1edfng kh\u1ea3 n\u0103ng t\u01b0 duy hay v\u1ed1n t\u1eeb c\u1ee7a b\u1ea1n. Nhi\u1ec1u ng\u01b0\u1eddi n\u00f3i l\u1eafp c\u00f3 v\u1ed1n ti\u1ebfng Anh r\u1ea5t phong ph\u00fa v\u00e0 vi\u1ebft r\u1ea5t xu\u1ea5t s\u1eafc." },',
  '      { type: "list", items: ["T\u1eadp trung v\u00e0o reading v\u00e0 writing tr\u01b0\u1edbc \u2014 x\u00e2y v\u1ed1n t\u1eeb m\u1ea1nh.", "N\u1ebfu mu\u1ed1n luy\u1ec7n n\u00f3i: t\u1eadp \u0111\u1ecdc to m\u1ed9t m\u00ecnh \u2014 kh\u00f4ng c\u00f3 \u00e1p l\u1ef1c x\u00e3 h\u1ed9i.", "Slow speech therapy + ti\u1ebfng Anh: \u0111\u1ecdc ch\u1eadm r\u00f5 t\u1eebng t\u1eeb, kh\u00f4ng c\u1ea7n t\u1ed1c \u0111\u1ed9.", "App ELSA Speak c\u00f3 ch\u1ebf \u0111\u1ed9 luy\u1ec7n ph\u00e1t \u00e2m t\u1eebng t\u1eeb \u0111\u01a1n l\u1ebb, r\u1ea5t ph\u00f9 h\u1ee3p.", "Giao ti\u1ebfp v\u0103n b\u1ea3n qua HelloTalk \u2014 kh\u00f4ng c\u1ea7n voice call."] },',
  '      { type: "heading", text: "N\u1ebfu b\u1ea1n kh\u00f4ng c\u00f3 thanh qu\u1ea3n ho\u1eb7c d\u00f9ng thi\u1ebft b\u1ecb h\u1ed7 tr\u1ee3 gi\u1ecdng n\u00f3i" },',
  '      { type: "paragraph", text: "C\u00f4ng ngh\u1ec7 AAC (Augmentative and Alternative Communication) ng\u00e0y nay h\u1ed7 tr\u1ee3 ti\u1ebfng Anh r\u1ea5t t\u1ed1t. Nhi\u1ec1u ng\u01b0\u1eddi d\u00f9ng thi\u1ebft b\u1ecb n\u00e0y giao ti\u1ebfp th\u00e0nh c\u00f4ng v\u1edbi c\u1ea3 th\u1ebf gi\u1edbi." },',
  '      { type: "list", items: ["Stephen Hawking \u2014 nh\u00e0 v\u1eadt l\u00fd v\u0129 \u0111\u1ea1i \u2014 giao ti\u1ebfp to\u00e0n b\u1ed9 b\u1eb1ng thi\u1ebft b\u1ecb \u0111i\u1ec7u khi\u1ec3n b\u1eb1ng c\u01a1 m\u1eb7t.", "Thi\u1ebft b\u1ecb AAC ti\u1ebfng Anh: Proloquo2Go, TouchChat, Snap Core First.", "Text-to-speech iOS/Android h\u1ed7 tr\u1ee3 ti\u1ebfng Anh c\u00f3 th\u1ec3 l\u00e0m voice output.", "T\u1eadp giao ti\u1ebfp qua text tr\u01b0\u1edbc \u2014 x\u00e2y v\u1ed1n t\u1eeb v\u00e0 t\u1ef1 tin tr\u01b0\u1edbc."] },',
  '      { type: "heading", text: "N\u1ebfu b\u1ea1n b\u1ecb kh\u00f3 kh\u0103n ph\u00e1t \u00e2m do b\u1ea1i n\u00e3o ho\u1eb7c b\u1ec7nh l\u00fd" },',
  '      { type: "paragraph", text: "Dysarthria (kh\u00f3 ph\u00e1t \u00e2m do t\u1ed5n th\u01b0\u01a1ng th\u1ea7n kinh) nh\u01b0ng kh\u00f4ng \u1ea3nh h\u01b0\u1edfng trí tu\u1ec7. R\u1ea5t nhi\u1ec1u ng\u01b0\u1eddi c\u00f3 dysarthria \u0111\u1ecdc ti\u1ebfng Anh r\u1ea5t t\u1ed1t." },',
  '      { type: "list", items: ["H\u1ecdc ng\u1eef ph\u00e1p v\u00e0 t\u1eeb v\u1ef1ng kh\u00f4ng c\u1ea7n n\u00f3i \u2014 ch\u1ec9 c\u1ea7n \u0111\u1ecdc v\u00e0 vi\u1ebft.", "Speech therapy b\u1eb1ng ti\u1ebfng Anh: c\u00f3 nhi\u1ec1u app luy\u1ec7n \u0111\u1eb7c bi\u1ec7t.", "T\u1eadp trung v\u00e0o TOEIC Reading \u2014 kh\u00f4ng y\u00eau c\u1ea7u n\u00f3i.", "Nghe podcast ch\u1eadm \u2014 luy\u1ec7n nghe hi\u1ec3u m\u00e0 kh\u00f4ng c\u1ea7n n\u00f3i l\u1ea1i."] },',
  '      { type: "heading", text: "C\u00e1c c\u00f4ng c\u1ee5 c\u00f4ng ngh\u1ec7 h\u1ed7 tr\u1ee3" },',
  '      { type: "vocab", word: "Google Voice Typing", meaning: "Chuy\u1ec3n gi\u1ecdng n\u00f3i th\u00e0nh v\u0103n b\u1ea3n \u2014 h\u1ed7 tr\u1ee3 ti\u1ebfng Anh", example: "Ph\u00f9 h\u1ee3p cho ng\u01b0\u1eddi c\u00f3 th\u1ec3 n\u00f3i nh\u01b0ng g\u00f5 ph\u00edm kh\u00f3" },',
  '      { type: "vocab", word: "Microsoft Dictate", meaning: "Ra l\u1ec7nh b\u1eb1ng gi\u1ecdng n\u00f3i trong Word/Outlook", example: "Vi\u1ebft email ti\u1ebfng Anh b\u1eb1ng gi\u1ecdng n\u00f3i" },',
  '      { type: "vocab", word: "Otter.ai", meaning: "Ghi ch\u00e9p t\u1ef1 \u0111\u1ed9ng cu\u1ed9c h\u1ecdn b\u1eb1ng ti\u1ebfng Anh", example: "D\u00f9ng trong cu\u1ed9c h\u1ecdn video call, kh\u00f4ng c\u1ea7n t\u1ef1 nhi\u1ec1u" },',
  '      { type: "vocab", word: "Read&Write", meaning: "H\u1ed7 tr\u1ee3 \u0111\u1ecdc v\u0103n b\u1ea3n ti\u1ebfng Anh b\u1eb1ng gi\u1ecdng n\u00f3i", example: "Ph\u00f9 h\u1ee3p cho ng\u01b0\u1eddi kh\u00f3 \u0111\u1ecdc" },',
  '      { type: "heading", text: "L\u1ed9 tr\u00ecnh h\u1ecdc \u0111\u1ec1 xu\u1ea5t" },',
  '      { type: "list", items: ["Th\u00e1ng 1-2: X\u00e2y v\u1ed1n t\u1eeb c\u01a1 b\u1ea3n qua flashcard (Anki, Quizlet) \u2014 kh\u00f4ng c\u1ea7n n\u00f3i.", "Th\u00e1ng 3-4: Luy\u1ec7n \u0111\u1ecdc hi\u1ec3u \u2014 b\u00e0i b\u00e1o \u0111\u01a1n gi\u1ea3n, blog, news.", "Th\u00e1ng 5-6: Luy\u1ec7n vi\u1ebft \u2014 b\u1eaft \u0111\u1ea7u t\u1eeb 3 c\u00e2u/ng\u00e0y, t\u0103ng d\u1ea7n.", "Th\u00e1ng 7+: Giao ti\u1ebfp v\u0103n b\u1ea3n v\u1edbi ng\u01b0\u1eddi th\u1eadt \u2014 HelloTalk, Reddit, forum."] },',
  '      { type: "compare", left: "Kh\u00f4ng n\u00f3i \u0111\u01b0\u1ee3c n\u00ean kh\u00f4ng h\u1ecdc", right: "H\u1ecdc vi\u1ebft, \u0111\u1ecdc, nghe \u2014 v\u1eabn \u0111\u1ea1t TOEIC, l\u00e0m vi\u1ec7c qu\u1ed1c t\u1ebf", leftLabel: "\u274c Suy ngh\u0129 sai", rightLabel: "\u2705 Th\u1ef1c t\u1ebf" },',
  '      { type: "callout", emoji: "\uD83C\uDF1F", text: "Ngu\u1ed3n l\u1ef1c mi\u1ec5n ph\u00ed: National Stuttering Association (stutter.org), AAC Learning Center, YouTube channel \u0022Stutter With Me\u0022, \u0022Disability After Dark\u0022." },',
  '      { type: "quote", text: "Ng\u00f4n ng\u1eef l\u00e0 c\u1ea7u n\u1ed1i \u2014 kh\u00f4ng ch\u1ec9 qua \u00e2m thanh m\u00e0 c\u00f2n qua ch\u1eef vi\u1ebft, \u00e1nh m\u1eaft, tay, v\u00e0 c\u00f4ng ngh\u1ec7. B\u1ea1n c\u00f3 quy\u1ec1n k\u1ebft n\u1ed1i v\u1edbi th\u1ebf gi\u1edbi theo c\u00e1ch c\u1ee7a m\u00ecnh." }',
  '    ]',
  '  }',
];

const newPost = lines.join('\n');
c = c.replace('];', newPost + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done:', fs.readFileSync('data/blog.ts','utf8').includes('khuyet-tat-giong-noi'));
