const fs = require('fs');
let c = fs.readFileSync('data/blog.ts', 'utf8');

const newPosts = 
  ,{
    slug: "lo-trinh-hoc-tieng-anh-giao-tiep-3-thang",
    title: "L\u1ed9 tr\u00ecnh h\u1ecdc ti\u1ebfng Anh giao ti\u1ebfp trong 3 th\u00e1ng",
    emoji: "\ud83d\uddd3\ufe0f",
    summary: "Kh\u00f4ng c\u1ea7n trung t\u00e2m, kh\u00f4ng c\u1ea7n gi\u00e1o vi\u00ean. K\u1ebf ho\u1ea1ch chi ti\u1ebft t\u1eebng tu\u1ea7n \u0111\u1ec3 giao ti\u1ebfp \u0111\u01b0\u1ee3c sau 3 th\u00e1ng.",
    tags: ["L\u1ed9 tr\u00ecnh", "Giao ti\u1ebfp"],
    date: "04/06/2026",
    readingTime: "6 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "3 th\u00e1ng l\u00e0 \u0111\u1ee7 \u0111\u1ec3 b\u1ea1n \u0111i t\u1eeb m\u1ea5t g\u1ed1c ho\u00e0n to\u00e0n \u0111\u1ebfn giao ti\u1ebfp c\u01a1 b\u1ea3n \u2014 n\u1ebfu b\u1ea1n c\u00f3 k\u1ebf ho\u1ea1ch \u0111\u00fang v\u00e0 ki\u00ean tr\u00ec. B\u00e0i n\u00e0y chia chi ti\u1ebft t\u1eebng giai \u0111o\u1ea1n." },
      { type: "callout", emoji: "\ud83d\udccc", text: "Cam k\u1ebft c\u1ea7n thi\u1ebft: 30\u201340 ph\u00fat m\u1ed7i ng\u00e0y, 6 ng\u00e0y/tu\u1ea7n. \u00CDt h\u01a1n th\u00ec k\u00e9o d\u00e0i th\u00eam, nhi\u1ec1u h\u01a1n kh\u00f4ng h\u1eb3n nhanh h\u01a1n \u2014 ch\u1ea5t l\u01b0\u1ee3ng h\u01a1n s\u1ed1 l\u01b0\u1ee3ng." },
      { type: "heading", text: "Th\u00e1ng 1 \u2014 X\u00e2y n\u1ec1n t\u1ea3ng" },
      { type: "paragraph", text: "M\u1ee5c ti\u00eau: Hi\u1ec3u c\u1ea5u tr\u00fac ti\u1ebfng Anh c\u01a1 b\u1ea3n, n\u1eafm 300 t\u1eeb v\u1ef1ng th\u00f4ng d\u1ee5ng nh\u1ea5t, n\u00f3i \u0111\u01b0\u1ee3c c\u00e1c c\u00e2u \u0111\u01a1n gi\u1ea3n v\u1ec1 b\u1ea3n th\u00e2n." },
      { type: "list", items: [
        "Tu\u1ea7n 1\u20132: Ng\u1eef ph\u00e1p n\u1ec1n t\u1ea3ng \u2014 to be, Simple Present, Simple Past. M\u1ed7i ng\u00e0y 1 c\u1ea5u tr\u00fac + 5 c\u00e2u \u0111\u1eb7t theo cu\u1ed9c s\u1ed1ng c\u1ee7a b\u1ea1n.",
        "Tu\u1ea7n 3\u20134: T\u1eeb v\u1ef1ng ch\u1ee7 \u0111\u1ec1 \u2014 gia \u0111\u00ecnh, c\u00f4ng vi\u1ec7c, \u0111\u1edd s\u1ed1ng, c\u1ea3m x\u00fac. 15 t\u1eeb/ng\u00e0y, m\u1ed7i t\u1eeb \u0111\u1eb7t 1 c\u00e2u th\u1ef1c t\u1ebf.",
        "Th\u1ef1c h\u00e0nh n\u00f3i: 10 ph\u00fat/ng\u00e0y t\u1ef1 gi\u1edbi thi\u1ec7u, m\u00f4 t\u1ea3 ng\u00e0y h\u00f4m nay, tr\u1ea3 l\u1eddi c\u00e2u h\u1ecfi \u0111\u01a1n gi\u1ea3n."
      ]},
      { type: "heading", text: "Th\u00e1ng 2 \u2014 X\u00e2y v\u1ed1n t\u1eeb v\u00e0 ph\u1ea3n x\u1ea1" },
      { type: "paragraph", text: "M\u1ee5c ti\u00eau: N\u00f3i \u0111\u01b0\u1ee3c v\u1ec1 c\u00e1c t\u00ecnh hu\u1ed1ng th\u01b0\u1eddng g\u1eb7p \u2014 \u0111i ch\u1ee3, g\u1ecdi m\u00f3n, h\u1ecfi \u0111\u01b0\u1eddng, \u1edf c\u00f4ng ty." },
      { type: "list", items: [
        "Tu\u1ea7n 5\u20136: H\u1ecdc theo t\u00ecnh hu\u1ed1ng th\u1ef1c t\u1ebf \u2014 m\u1ed7i ng\u00e0y 1 t\u00ecnh hu\u1ed1ng (mua s\u1eafm, g\u1ecdi \u0111i\u1ec7n, \u0111i l\u00e0m...).",
        "Tu\u1ea7n 7\u20138: Nghe 15 ph\u00fat/ng\u00e0y \u2014 b\u1eaft \u0111\u1ea7u v\u1edbi YouTube ph\u1ee5 \u0111\u1ec1 song ng\u1eef, sau \u0111\u00f3 b\u1ecf d\u1ea7n ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Vi\u1ec7t.",
        "T\u0103ng t\u1ed1c \u0111\u1ed9 ph\u1ea3n x\u1ea1: Flashcard m\u1ed7i ng\u00e0y 10 ph\u00fat, \u0111\u1eb7t c\u00e2u ng\u01b0\u1ee3c (Vi\u1ec7t \u2192 Anh) thay v\u00ec chuy\u1ec3n ng\u1eef."
      ]},
      { type: "heading", text: "Th\u00e1ng 3 \u2014 Giao ti\u1ebfp th\u1ef1c t\u1ebf" },
      { type: "paragraph", text: "M\u1ee5c ti\u00eau: Gi\u1eef \u0111\u01b0\u1ee3c cu\u1ed9c tr\u00f2 chuy\u1ec7n 5\u201310 ph\u00fat b\u1eb1ng ti\u1ebfng Anh, hi\u1ec3u 70% khi nghe." },
      { type: "list", items: [
        "Tu\u1ea7n 9\u201310: T\u00ecm language partner tr\u00ean Tandem, HelloTalk, ho\u1eb7c iTalki. Luy\u1ec7n 2\u20133 l\u1ea7n/tu\u1ea7n.",
        "Tu\u1ea7n 11\u201312: Xem phim ng\u1eafn kh\u00f4ng ph\u1ee5 \u0111\u1ec1, nghe podcast ti\u1ebfng Anh \u0111\u01a1n gi\u1ea3n (6 Minute English c\u1ee7a BBC).",
        "T\u1ef1 \u0111\u00e1nh gi\u00e1: Ghi \u00e2m b\u1ea3n th\u00e2n n\u00f3i 2 ph\u00fat r\u1ed3i nghe l\u1ea1i \u2014 \u0111\u1ed3ng h\u1ed3 ti\u1ebfn b\u1ed9 r\u00f5 nh\u1ea5t."
      ]},
      { type: "compare", left: "H\u1ecdc d\u00e0n tr\u1ea3i, kh\u00f4ng c\u00f3 k\u1ebf ho\u1ea1ch, h\u1ecdc khi c\u00f3 h\u1ee9ng", right: "H\u1ecdc theo l\u1ed9 tr\u00ecnh, m\u1ed7i ng\u00e0y \u0111\u00fang gi\u1edd, c\u00f3 m\u1ee5c ti\u00eau r\u00f5", leftLabel: "\u274c K\u1ebft qu\u1ea3 sau 1 n\u0103m: 0", rightLabel: "\u2705 K\u1ebft qu\u1ea3 sau 3 th\u00e1ng: giao ti\u1ebfp \u0111\u01b0\u1ee3c" },
      { type: "callout", emoji: "\ud83c\udfc6", text: "Sau 3 th\u00e1ng, b\u1ea1n s\u1ebd: gi\u1edbi thi\u1ec7u b\u1ea3n th\u00e2n tr\u01a1n tru, hi\u1ec3u \u0111\u01b0\u1ee3c 70% h\u1ed9i tho\u1ea1i \u0111\u01a1n gi\u1ea3n, g\u1ecdi m\u00f3n \u2014 mua s\u1eafm \u2014 h\u1ecfi \u0111\u01b0\u1eddng kh\u00f4ng ng\u1ea1i ng\u00f9ng." },
      { type: "quote", text: "3 th\u00e1ng \u00d7 35 ph\u00fat/ng\u00e0y = 63 ti\u1ebfng h\u1ecdc. \u0110\u1ee7 \u0111\u1ec3 thay \u0111\u1ed5i ho\u00e0n to\u00e0n kh\u1ea3 n\u0103ng giao ti\u1ebfp n\u1ebfu b\u1ea1n h\u1ecdc \u0111\u00fang h\u01b0\u1edbng." }
    ]
  }
  ,{
    slug: "50-cau-giao-tiep-tieng-anh-hang-ngay",
    title: "50 c\u00e2u giao ti\u1ebfp ti\u1ebfng Anh h\u00e0ng ng\u00e0y b\u1ea1n c\u1ea7n bi\u1ebft",
    emoji: "\ud83d\udcac",
    summary: "Nh\u1eefng c\u00e2u ti\u1ebfng Anh th\u1ef1c t\u1ebf nh\u1ea5t \u0111\u1ec3 giao ti\u1ebfp h\u00e0ng ng\u00e0y \u2014 \u0111\u1ec3 kh\u00f4ng b\u1ecb \u0111\u01a1 trong m\u1ecdi t\u00ecnh hu\u1ed1ng.",
    tags: ["Giao ti\u1ebfp", "T\u1eeb v\u1ef1ng"],
    date: "04/06/2026",
    readingTime: "5 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Ng\u01b0\u1eddi b\u1ea3n ng\u1eef kh\u00f4ng d\u00f9ng c\u00e2u v\u0103n ho\u1ea1 s\u00e1ch trong cu\u1ed9c s\u1ed1ng h\u00e0ng ng\u00e0y. H\u1ecdc 50 c\u00e2u n\u00e0y \u0111\u1ec3 s\u1ed1ng s\u00f3t trong m\u1ecdi t\u00ecnh hu\u1ed1ng giao ti\u1ebfp." },
      { type: "heading", text: "Ch\u00e0o h\u1ecfi v\u00e0 x\u00e3 giao" },
      { type: "vocab", word: "What's up?", meaning: "C\u00f3 g\u00ec kh\u00f4ng? \u0110ang l\u00e0m g\u00ec v\u1eady?", example: "Hey! What's up? \u2014 Not much, just chilling." },
      { type: "vocab", word: "How's it going?", meaning: "D\u1ea1o n\u00e0y th\u1ebf n\u00e0o?", example: "How's it going? \u2014 Pretty good, thanks!" },
      { type: "vocab", word: "Long time no see!", meaning: "L\u00e2u kh\u00f4ng g\u1eb7p!", example: "Long time no see! How have you been?" },
      { type: "vocab", word: "Nice to meet you.", meaning: "R\u1ea5t vui \u0111\u01b0\u1ee3c g\u1eb7p b\u1ea1n.", example: "I'm Huy. Nice to meet you!" },
      { type: "vocab", word: "Take care!", meaning: "B\u1ea3o tr\u1ecdng nh\u00e9! / Ch\u00e0o nha!", example: "See you next week. Take care!" },
      { type: "heading", text: "H\u1ecfi v\u00e0 x\u00e1c nh\u1eadn" },
      { type: "vocab", word: "Could you say that again?", meaning: "B\u1ea1n c\u00f3 th\u1ec3 n\u00f3i l\u1ea1i kh\u00f4ng?", example: "Sorry, could you say that again? I didn't catch that." },
      { type: "vocab", word: "What do you mean?", meaning: "\u00dd b\u1ea1n l\u00e0 g\u00ec?", example: "What do you mean by that?" },
      { type: "vocab", word: "Got it.", meaning: "Hi\u1ec3u r\u1ed3i.", example: "Meet me at 5. \u2014 Got it!" },
      { type: "vocab", word: "Makes sense.", meaning: "C\u00f3 l\u00fd \u0111\u1ea5y. / H\u1ee3p l\u00fd.", example: "We should leave early to avoid traffic. \u2014 Makes sense." },
      { type: "vocab", word: "Just to clarify...", meaning: "\u0110\u1ec3 x\u00e1c nh\u1eadn l\u1ea1i...", example: "Just to clarify, the meeting is at 3, right?" },
      { type: "heading", text: "\u0110\u1ed3ng \u00fd v\u00e0 ph\u1ea3n \u0111\u1ed1i l\u1ecbch s\u1ef1" },
      { type: "vocab", word: "Absolutely!", meaning: "Ho\u00e0n to\u00e0n \u0111\u1ed3ng \u00fd!", example: "Do you think we should go? \u2014 Absolutely!" },
      { type: "vocab", word: "That's a good point.", meaning: "\u00dd ki\u1ebfn hay \u0111\u1ea5y.", example: "That's a good point. I hadn't thought of that." },
      { type: "vocab", word: "I'm not sure about that.", meaning: "T\u00f4i kh\u00f4ng ch\u1eafc l\u1eafm v\u1ec1 \u0111i\u1ec1u \u0111\u00f3.", example: "I'm not sure about that. Let me check." },
      { type: "vocab", word: "I see your point, but...", meaning: "T\u00f4i hi\u1ec3u \u00fd b\u1ea1n, nh\u01b0ng...", example: "I see your point, but I think we need more time." },
      { type: "heading", text: "T\u1eeb ch\u1ed1i v\u00e0 x\u1ea5u h\u1ed5 l\u1ecbch s\u1ef1" },
      { type: "vocab", word: "I'd rather not.", meaning: "T\u00f4i th\u00edch l\u00e0 kh\u00f4ng h\u01a1n.", example: "Want to go karaoke? \u2014 I'd rather not tonight." },
      { type: "vocab", word: "Maybe next time.", meaning: "L\u1ea7n sau nh\u00e9.", example: "Can you join us? \u2014 Maybe next time, I'm busy." },
      { type: "vocab", word: "That's not really my thing.", meaning: "C\u00e1i \u0111\u00f3 kh\u00f4ng h\u1ee3p v\u1edbi m\u00ecnh l\u1eafm.", example: "That's not really my thing, but thanks for asking." },
      { type: "heading", text: "C\u1ea3m x\u00fac v\u00e0 ph\u1ea3n \u1ee9ng" },
      { type: "vocab", word: "That's amazing!", meaning: "Tuy\u1ec7t v\u1eddi qu\u00e1!", example: "I got promoted! \u2014 That's amazing! Congratulations!" },
      { type: "vocab", word: "No way!", meaning: "Kh\u00f4ng th\u1ec3 tin \u0111\u01b0\u1ee3c! / \u0110\u1ea5t bi\u1ebft!", example: "She quit her job today. \u2014 No way!" },
      { type: "vocab", word: "Tell me about it.", meaning: "B\u1ea1n n\u00f3i v\u1eady c\u0169ng \u0111\u00fang. / \u0110\u00fang v\u1eady \u0111\u00f3.", example: "The traffic today was terrible. \u2014 Tell me about it!" },
      { type: "vocab", word: "It happens.", meaning: "Chuy\u1ec7n b\u00ecnh th\u01b0\u1eddng th\u00f4i.", example: "I made a mistake. \u2014 It happens. Don't worry." },
      { type: "heading", text: "Trong c\u00f4ng vi\u1ec7c" },
      { type: "vocab", word: "Can I ask you something?", meaning: "T\u00f4i h\u1ecfi c\u00e1i n\u00e0y \u0111\u01b0\u1ee3c kh\u00f4ng?", example: "Can I ask you something? When is the deadline?" },
      { type: "vocab", word: "I'll look into it.", meaning: "T\u00f4i s\u1ebd t\u00ecm hi\u1ec3u.", example: "Something seems wrong. \u2014 I'll look into it." },
      { type: "vocab", word: "Leave it to me.", meaning: "\u0110\u1ec3 t\u00f4i lo.", example: "Who's going to handle this? \u2014 Leave it to me." },
      { type: "vocab", word: "Keep me posted.", meaning: "C\u1eadp nh\u1eadt cho t\u00f4i bi\u1ebft nh\u00e9.", example: "I'll be in a meeting. Keep me posted on any updates." },
      { type: "callout", emoji: "\ud83d\udca1", text: "M\u1eb9o: \u0110\u1eebng c\u1ed1 h\u1ecdc thu\u1ed9c t\u1ea5t c\u1ea3 m\u1ed9t l\u00fac. Ch\u1ecdn 5 c\u00e2u m\u1ed7i ng\u00e0y, d\u00f9ng th\u1ef1c t\u1ebf trong chat, email, ho\u1eb7c t\u1ef1 n\u00f3i m\u1ed9t m\u00ecnh. S\u00e1ng h\u00f4m sau \u00f4n l\u1ea1i tr\u01b0\u1edbc khi h\u1ecdc 5 c\u00e2u m\u1edbi." },
      { type: "quote", text: "Ti\u1ebfng Anh giao ti\u1ebfp kh\u00f4ng c\u1ea7n ho\u00e0n h\u1ea3o \u2014 c\u1ea7n \u0111\u1ee7 \u0111\u1ec3 ng\u01b0\u1eddi ta hi\u1ec3u v\u00e0 b\u1ea1n hi\u1ec3u l\u1ea1i." }
    ]
  };

c = c.replace('];', newPosts + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done');
