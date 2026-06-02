const fs = require('fs');
let c = fs.readFileSync('data/blog.ts', 'utf8');

const newPost = 
  ,{
    slug: "hoc-tieng-anh-qua-phim",
    title: "H\u1ecdc ti\u1ebfng Anh qua phim \u2014 c\u00e1ch xem \u0111\u00fang \u0111\u1ec3 th\u1eadt s\u1ef1 ti\u1ebfn b\u1ed9",
    emoji: "\ud83c\udfac",
    summary: "Xem phim ti\u1ebfng Anh m\u00e3i m\u00e0 kh\u00f4ng gi\u1ecfi h\u01a1n? V\u00ec b\u1ea1n \u0111ang xem sai c\u00e1ch. H\u01b0\u1edbng d\u1eabn \u0111\u1ea7y \u0111\u1ee7 t\u1eeb ch\u1ecdn phim \u0111\u1ebfn luy\u1ec7n nghe hi\u1ec7u qu\u1ea3.",
    tags: ["Ph\u01b0\u01a1ng ph\u00e1p", "Nghe", "Giao ti\u1ebfp"],
    date: "04/06/2026",
    readingTime: "6 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Nhi\u1ec1u ng\u01b0\u1eddi xem phim ti\u1ebfng Anh h\u00e0ng gi\u1edd m\u1ed7i ng\u00e0y nh\u01b0ng sau 1 n\u0103m v\u1eabn kh\u00f4ng c\u1ea3i thi\u1ec7n \u0111\u01b0\u1ee3c kh\u1ea3 n\u0103ng nghe. L\u00fd do kh\u00f4ng ph\u1ea3i v\u00ec phim kh\u00f4ng hi\u1ec7u qu\u1ea3 \u2014 m\u00e0 v\u00ec c\u00e1ch xem sai." },
      { type: "heading", text: "T\u1ea1i sao xem phim th\u01b0\u1eddng kh\u00f4ng gi\u00fap gi\u1ecfi ti\u1ebfng Anh?" },
      { type: "paragraph", text: "Khi b\u1ea1n b\u1eadt ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Vi\u1ec7t, n\u00e3o t\u1ef1 \u0111\u1ed9ng \u01b0u ti\u00ean \u0111\u1ecdc ph\u1ee5 \u0111\u1ec1 thay v\u00ec nghe. Sau 2 ti\u1ebfng xem phim, b\u1ea1n nh\u1edb c\u1ed1t truy\u1ec7n nh\u01b0ng tai kh\u00f4ng h\u1ec1 luy\u1ec7n \u0111\u01b0\u1ee3c g\u00ec. \u0110\u00e2y l\u00e0 l\u00fd do ch\u00ednh." },
      { type: "compare", left: "B\u1eadt ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Vi\u1ec7t, xem li\u00ean t\u1ee5c 2 ti\u1ebfng", right: "Xem \u0111\u00fang k\u1ef9 thu\u1eadt, t\u1eadp trung 20\u201330 ph\u00fat", leftLabel: "\u274c Xem \u0111\u1ec3 gi\u1ea3i tr\u00ed", rightLabel: "\u2705 Xem \u0111\u1ec3 h\u1ecdc" },
      { type: "heading", text: "Ph\u01b0\u01a1ng ph\u00e1p Shadowing \u2014 c\u00e1ch hi\u1ec7u qu\u1ea3 nh\u1ea5t" },
      { type: "paragraph", text: "Shadowing l\u00e0 k\u1ef9 thu\u1eadt h\u1ecdc theo ng\u01b0\u1eddi b\u1ea3n ng\u1eef t\u1eebng c\u00e2u m\u1ed9t: nghe \u2192 d\u1eebng \u2192 nh\u1eafc l\u1ea1i \u2192 so s\u00e1nh. Ph\u01b0\u01a1ng ph\u00e1p n\u00e0y \u0111\u01b0\u1ee3c d\u00f9ng b\u1edfi c\u00e1c phi\u00ean d\u1ecbch chuy\u00ean nghi\u1ec7p v\u00e0 \u0111\u00e3 \u0111\u01b0\u1ee3c ch\u1ee9ng minh gi\u00fap c\u1ea3i thi\u1ec7n ph\u00e1t \u00e2m v\u00e0 t\u1ed1c \u0111\u1ed9 nghe r\u1ea5t nhanh." },
      { type: "list", items: [
        "B\u01b0\u1edbc 1: Ch\u1ecdn 1 \u0111o\u1ea1n phim ng\u1eafn 2\u20133 ph\u00fat c\u00f3 ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Anh.",
        "B\u01b0\u1edbc 2: Nghe to\u00e0n b\u1ed9 1 l\u1ea7n kh\u00f4ng xem ph\u1ee5 \u0111\u1ec1, \u0111\u1ec3 n\u00e3o quen v\u1edbi nh\u1ecbp.",
        "B\u01b0\u1edbc 3: D\u1eebng t\u1eebng c\u00e2u, \u0111\u1ecdc ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Anh, tra t\u1eeb kh\u00f4ng hi\u1ec3u.",
        "B\u01b0\u1edbc 4: Nghe l\u1ea1i c\u00e2u \u0111\u00f3 v\u00e0 nh\u1eafc l\u1ea1i to \u2014 c\u1ed1 b\u1eaft ch\u01b0\u1edbc gi\u1ecdng \u0111i\u1ec7u, nh\u1ecbp \u0111i\u1ec7u.",
        "B\u01b0\u1edbc 5: Xem l\u1ea1i to\u00e0n b\u1ed9 \u0111o\u1ea1n kh\u00f4ng ph\u1ee5 \u0111\u1ec1 \u2014 ki\u1ec3m tra xem hi\u1ec3u \u0111\u01b0\u1ee3c bao nhi\u00eau %."
      ]},
      { type: "callout", emoji: "\u23f1\ufe0f", text: "20\u201330 ph\u00fat shadowing m\u1ed7i ng\u00e0y hi\u1ec7u qu\u1ea3 h\u01a1n 3 ti\u1ebfng xem phim th\u1ee5 \u0111\u1ed9ng. Ch\u1ea5t l\u01b0\u1ee3ng lu\u00f4n th\u1eafng s\u1ed1 l\u01b0\u1ee3ng." },
      { type: "heading", text: "Ch\u1ecdn phim n\u00e0o \u0111\u1ec3 h\u1ecdc?" },
      { type: "paragraph", text: "Kh\u00f4ng ph\u1ea3i phim n\u00e0o c\u0169ng ph\u00f9 h\u1ee3p \u0111\u1ec3 h\u1ecdc. Phim h\u00e0nh \u0111\u1ed9ng nhi\u1ec1u ti\u1ebfng n\u1ed5 nh\u01b0ng \u00edt h\u1ed9i tho\u1ea1i. Phim khoa h\u1ecdc vi\u1ec5n t\u01b0\u1edfng c\u00f3 nhi\u1ec1u t\u1eeb chuy\u00ean ng\u00e0nh kh\u00f3. \u0110\u00e2y l\u00e0 c\u00e1c th\u1ec3 lo\u1ea1i ph\u00f9 h\u1ee3p theo tr\u00ecnh \u0111\u1ed9:" },
      { type: "vocab", word: "Ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u (A0\u2013A2)", meaning: "Phim ho\u1ea1t h\u00ecnh, sitcom ng\u1eafn", example: "Friends, Modern Family, The Office \u2014 h\u1ed9i tho\u1ea1i r\u00f5 r\u00e0ng, t\u1eeb ng\u1eef \u0111\u01a1n gi\u1ea3n, nhi\u1ec1u l\u1ea7n nh\u1eafc l\u1ea1i." },
      { type: "vocab", word: "Trung c\u1ea5p (B1\u2013B2)", meaning: "Phim tr\u1ea1ng th\u00e1i, drama nh\u1eb9", example: "Stranger Things, The Crown, Breaking Bad \u2014 ng\u00f4n ng\u1eef phong ph\u00fa, ph\u1ee5 \u0111\u1ec1 r\u00f5." },
      { type: "vocab", word: "N\u00e2ng cao (B2+)", meaning: "Phim t\u00e2m l\u00fd, l\u1ecbch s\u1eed, t\u00e0i li\u1ec7u", example: "The Crown, Oppenheimer, documentary BBC \u2014 t\u1eeb v\u1ef1ng phong ph\u00fa, ph\u00e1t \u00e2m chu\u1ea9n." },
      { type: "heading", text: "L\u1ecbch h\u1ecdc qua phim trong tu\u1ea7n" },
      { type: "list", items: [
        "Th\u1ee9 2, 4, 6: Shadowing 20 ph\u00fat \u2014 ch\u1ecdn 1 \u0111o\u1ea1n v\u00e0 luy\u1ec7n \u0111i luy\u1ec7n l\u1ea1i.",
        "Th\u1ee9 3, 5: Xem t\u1ef1 do 30 ph\u00fat kh\u00f4ng shadowing \u2014 xem ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Anh \u0111\u1ec3 hi\u1ec3u ng\u1eef c\u1ea3nh.",
        "Th\u1ee9 7: Xem l\u1ea1i c\u00e1c \u0111o\u1ea1n \u0111\u00e3 h\u1ecdc trong tu\u1ea7n kh\u00f4ng ph\u1ee5 \u0111\u1ec1.",
        "Ch\u1ee7 nh\u1eadt: Xem phim gi\u1ea3i tr\u00ed, kh\u00f4ng \u00e1p l\u1ef1c \u2014 th\u01b0\u1edfng cho n\u00e3o."
      ]},
      { type: "heading", text: "M\u1eb9o nh\u1ecf gi\u00fap hi\u1ec7u qu\u1ea3 h\u01a1n" },
      { type: "list", items: [
        "Xem c\u00f9ng m\u1ed9t \u0111o\u1ea1n 3\u20135 l\u1ea7n \u2014 kh\u00f4ng c\u1ea7n xem th\u00eam phim m\u1edbi. S\u1ef1 l\u1eb7p l\u1ea1i gi\u00fap n\u00e3o ghi nh\u1edb s\u00e2u h\u01a1n.",
        "Vi\u1ebft l\u1ea1i 3\u20135 c\u00e2u hay trong \u0111o\u1ea1n v\u1eeba xem v\u00e0o s\u1ed5 tay.",
        "D\u00f9ng Language Reactor (extension Chrome) \u2014 hi\u1ec3n th\u1ecb song ng\u1eef v\u00e0 cho ph\u00e9p click v\u00e0o t\u1eebng t\u1eeb \u0111\u1ec3 tra ngay.",
        "Ch\u1ecdn phim b\u1ea1n \u0111\u00e3 xem b\u1eb1ng ti\u1ebfng Vi\u1ec7t r\u1ed3i \u2014 bi\u1ebft tr\u01b0\u1edbc c\u1ed1t truy\u1ec7n gi\u00fap t\u1eadp trung v\u00e0o ng\u00f4n ng\u1eef, kh\u00f4ng lo m\u1ea5t m\u1ea1ch phim."
      ]},
      { type: "compare", left: "Xem 2 ti\u1ebfng Friends v\u1edbi ph\u1ee5 \u0111\u1ec1 Vi\u1ec7t", right: "Shadowing 20 ph\u00fat Friends + vi\u1ebft 5 c\u00e2u hay", leftLabel: "\u274c 0 c\u1ea3i thi\u1ec7n sau 1 n\u0103m", rightLabel: "\u2705 Nghe kh\u00e1 h\u01a1n r\u00f5 r\u1ec7t sau 1 th\u00e1ng" },
      { type: "callout", emoji: "\ud83c\udf1f", text: "C\u00f4ng c\u1ee5 mi\u1ec5n ph\u00ed n\u00ean d\u00f9ng: Language Reactor (Chrome), YouTube c\u00f3 ph\u1ee5 \u0111\u1ec1 t\u1ef1 \u0111\u1ed9ng, Netflix + Ph\u1ea7n m\u1edf r\u1ed9ng Language Reactor." },
      { type: "quote", text: "Xem phim \u0111\u00fang c\u00e1ch 20 ph\u00fat m\u1ed7i ng\u00e0y \u2014 sau 3 th\u00e1ng tai b\u1ea1n s\u1ebd nghe kh\u00e1c h\u1eb3n. Kh\u00f4ng ph\u1ea3i v\u00ec xem nhi\u1ec1u, m\u00e0 v\u00ec xem \u0111\u00fang." }
    ]
  };

c = c.replace('];', newPost + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done');
