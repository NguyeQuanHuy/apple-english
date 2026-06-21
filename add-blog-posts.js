const fs = require("fs");
const path = "C:/Users/Nguyen Quan Huy/englishstart/data/blog.ts";

let content = fs.readFileSync(path, "utf8");

const newPosts = `,
  {
    slug: "cau-truc-de-thi-toeic-tu-a-den-z",
    title: "C\u1ea5u tr\u00fac \u0111\u1ec1 thi TOEIC t\u1eeb A \u0111\u1ebfn Z \u2014 Bi\u1ebft r\u00f5 \u0111\u1ec3 kh\u00f4ng b\u1ecb b\u1ea5t ng\u1edd",
    emoji: "\ud83d\udccb",
    summary: "200 c\u00e2u, 120 ph\u00fat, 2 ph\u1ea7n l\u1edbn. Hi\u1ec3u c\u1ea5u tr\u00fac \u0111\u1ec1 l\u00e0 b\u01b0\u1edbc \u0111\u1ea7u ti\u00ean \u0111\u1ec3 chinh ph\u1ee5c TOEIC.",
    tags: ["TOEIC", "L\u1ed9 tr\u00ecnh"],
    date: "20/06/2026",
    readingTime: "8 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "R\u1ea5t nhi\u1ec1u ng\u01b0\u1eddi h\u1ecdc TOEIC nhi\u1ec1u th\u00e1ng m\u00e0 v\u1eabn b\u1ecb b\u1ea5t ng\u1edd trong ph\u00f2ng thi v\u00ec ch\u01b0a hi\u1ec3u r\u00f5 c\u1ea5u tr\u00fac \u0111\u1ec1. B\u00e0i n\u00e0y gi\u00fap b\u1ea1n n\u1eafm tr\u1ecdn to\u00e0n b\u1ed9 format c\u1ee7a b\u00e0i thi TOEIC Listening & Reading." },
      { type: "heading", text: "T\u1ed5ng quan: 2 ph\u1ea7n, 200 c\u00e2u, 120 ph\u00fat" },
      { type: "paragraph", text: "TOEIC Listening & Reading g\u1ed3m \u0111\u00fang 200 c\u00e2u tr\u1eafc nghi\u1ec7m, chia \u0111\u1ec1u 100 c\u00e2u cho m\u1ed7i ph\u1ea7n. Ph\u1ea7n Listening k\u00e9o d\u00e0i 45 ph\u00fat, ph\u1ea7n Reading 75 ph\u00fat." },
      { type: "callout", emoji: "\ud83d\udca1", text: "Quan tr\u1ecdng: Trong TOEIC kh\u00f4ng c\u00f3 \u0111i\u1ec3m tr\u1eeb cho c\u00e2u sai. H\u00e3y lu\u00f4n \u0111i\u1ec1n \u0111\u00e1p \u00e1n d\u00f9 kh\u00f4ng ch\u1eafc \u2014 thay v\u00ec b\u1ecf tr\u1ed1ng." },
      { type: "heading", text: "Ph\u1ea7n Listening (45 ph\u00fat \u2014 100 c\u00e2u)" },
      { type: "list", items: [
        "Part 1 \u2014 Photographs (10 c\u00e2u): Nh\u00ecn \u1ea3nh, ch\u1ecdn c\u00e2u m\u00f4 t\u1ea3 \u0111\u00fang nh\u1ea5t. Ch\u1ec9 nghe \u2014 kh\u00f4ng \u0111\u1ecdc.",
        "Part 2 \u2014 Question-Response (30 c\u00e2u): Nghe c\u00e2u h\u1ecfi, ch\u1ecdn ph\u1ea3n h\u1ed3i ph\u00f9 h\u1ee3p trong 3 l\u1ef1a ch\u1ecdn.",
        "Part 3 \u2014 Conversations (30 c\u00e2u): Nghe 10 \u0111o\u1ea1n h\u1ed9i tho\u1ea1i, m\u1ed7i \u0111o\u1ea1n 3 c\u00e2u h\u1ecfi.",
        "Part 4 \u2014 Talks (30 c\u00e2u): Nghe 10 b\u00e0i \u0111\u1ed9c tho\u1ea1i, m\u1ed7i b\u00e0i 3 c\u00e2u h\u1ecfi."
      ]},
      { type: "callout", emoji: "\u26a0\ufe0f", text: "L\u01b0u \u00fd: Ph\u1ea7n Listening kh\u00f4ng cho ph\u00e9p tua l\u1ea1i. Audio ch\u1ec9 ph\u00e1t m\u1ed9t l\u1ea7n duy nh\u1ea5t. B\u1ea1n c\u00f3 5 gi\u00e2y \u0111\u1ec3 ch\u1ecdn \u0111\u00e1p \u00e1n \u1edf Part 1 & 2, v\u00e0 8 gi\u00e2y \u1edf Part 3 & 4." },
      { type: "heading", text: "Ph\u1ea7n Reading (75 ph\u00fat \u2014 100 c\u00e2u)" },
      { type: "list", items: [
        "Part 5 \u2014 Incomplete Sentences (40 c\u00e2u): \u0110i\u1ec1n t\u1eeb v\u00e0o ch\u1ed7 tr\u1ed1ng. T\u1eadp trung v\u00e0o ng\u1eef ph\u00e1p v\u00e0 t\u1eeb v\u1ef1ng.",
        "Part 6 \u2014 Text Completion (12 c\u00e2u): \u0110\u1ecdc \u0111o\u1ea1n v\u0103n ng\u1eafn, \u0111i\u1ec1n v\u00e0o ch\u1ed7 tr\u1ed1ng.",
        "Part 7 \u2014 Reading Comprehension (48 c\u00e2u): \u0110\u1ecdc hi\u1ec3u single v\u00e0 double passages."
      ]},
      { type: "callout", emoji: "\ud83c\udfaf", text: "M\u1ee5c ti\u00eau th\u1ef1c t\u1ebf: 450 \u0111i\u1ec3m trong 2 th\u00e1ng, 600+ trong 4\u20136 th\u00e1ng n\u1ebfu h\u1ecdc \u0111\u00fang ph\u01b0\u01a1ng ph\u00e1p." }
    ]
  },
  {
    slug: "chien-luoc-toeic-listening-part-1-va-2",
    title: "Chi\u1ebfn l\u01b0\u1ee3c l\u00e0m b\u00e0i TOEIC Listening Part 1 & 2 \u2014 Kh\u00f4ng c\u00f2n b\u1ecb b\u1eaby b\u1edfi t\u1eeb ng\u1eef",
    emoji: "\ud83c\udfa7",
    summary: "Part 1 v\u00e0 2 t\u01b0\u1edfng d\u1ec5 nh\u01b0ng \u0111\u1ea7y b\u1eaby. \u0110\u00e2y l\u00e0 c\u00e1ch nh\u1eadn bi\u1ebft v\u00e0 tr\u00e1nh c\u00e1c \u0111\u00e1p \u00e1n nhi\u1ec5u.",
    tags: ["TOEIC", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "19/06/2026",
    readingTime: "7 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Part 1 v\u00e0 Part 2 l\u00e0 hai ph\u1ea7n \u0111\u1ea7u c\u1ee7a TOEIC Listening. Nhi\u1ec1u ng\u01b0\u1eddi ngh\u0129 \u0111\u00e2y l\u00e0 ph\u1ea7n d\u1ec5 nh\u1ea5t \u2014 nh\u01b0ng \u0111\u00e2y l\u00e0 n\u01a1i th\u00ed sinh m\u1ea5t \u0111i\u1ec3m v\u00ec b\u1ecb \u0111\u00e1nh l\u1eeba b\u1edfi c\u00e1c t\u1eeb nghe gi\u1ed1ng nhau." },
      { type: "heading", text: "Part 1 \u2014 Photographs: 3 lo\u1ea1i b\u1eaby ph\u1ed5 bi\u1ebfn" },
      { type: "list", items: [
        "B\u1eaby 1 \u2014 T\u1eeb \u0111\u1ed3ng \u00e2m (homonyms): billed/build, blew/blue, read/red, hear/here. Nh\u1eefng c\u1eb7p t\u1eeb n\u00e0y c\u1ef1c k\u1ef3 hay b\u1ecb d\u00f9ng trong \u0111\u00e1p \u00e1n nhi\u1ec5u.",
        "B\u1eaby 2 \u2014 M\u00f4 t\u1ea3 \u0111\u00fang ng\u01b0\u1eddi nh\u01b0ng sai h\u00e0nh \u0111\u1ed9ng: \u1ea2nh th\u1ea5y ng\u01b0\u1eddi \u0111ang ng\u1ed3i nh\u01b0ng \u0111\u00e1p \u00e1n n\u00f3i 'She is standing'.",
        "B\u1eaby 3 \u2014 M\u00f4 t\u1ea3 \u0111\u00fang v\u1eadt nh\u01b0ng sai v\u1ecb tr\u00ed: Ch\u00fa \u00fd gi\u1edbi t\u1eeb: on, under, next to, behind, in front of."
      ]},
      { type: "callout", emoji: "\ud83d\udca1", text: "M\u1eb9o th\u1ef1c chi\u1ebfn: Tr\u01b0\u1edbc khi audio ph\u00e1t, nh\u00ecn \u1ea3nh v\u00e0 t\u1ef1 ngh\u0129 ra 2\u20133 t\u1eeb m\u00f4 t\u1ea3 n\u00f3. Khi nghe, b\u1ea1n s\u1ebd d\u1ec5 d\u00e0ng nh\u1eadn ra \u0111\u00e1p \u00e1n \u0111\u00fang h\u01a1n." },
      { type: "heading", text: "Part 2 \u2014 Nghe t\u1eeb \u0111\u1ea7u ti\u00ean, lo\u1ea1i \u0111\u00e1p \u00e1n sai" },
      { type: "list", items: [
        "Where \u2192 Tr\u1ea3 l\u1eddi v\u1ec1 v\u1ecb tr\u00ed. V\u00ed d\u1ee5: 'It is on the second floor.'",
        "When \u2192 Tr\u1ea3 l\u1eddi v\u1ec1 th\u1eddi gian. V\u00ed d\u1ee5: 'By tomorrow morning.'",
        "Who \u2192 Tr\u1ea3 l\u1eddi v\u1ec1 ng\u01b0\u1eddi. V\u00ed d\u1ee5: 'The finance team.'",
        "Why \u2192 Tr\u1ea3 l\u1eddi l\u00fd do, b\u1eaft \u0111\u1ea7u b\u1eb1ng 'Because...'",
        "How \u2192 Tr\u1ea3 l\u1eddi c\u00e1ch th\u1ee9c. V\u00ed d\u1ee5: 'I took the subway.'"
      ]},
      { type: "callout", emoji: "\u26a0\ufe0f", text: "B\u1eaby c\u1ed5 \u0111i\u1ec3n: \u0110\u00e1p \u00e1n l\u1eb7p l\u1ea1i t\u1eeb trong c\u00e2u h\u1ecfi nh\u01b0ng kh\u00f4ng tr\u1ea3 l\u1eddi \u0111\u00fang \u00fd. V\u00ed d\u1ee5: H\u1ecfi 'Where is the museum?' \u2014 \u0110\u00e1p \u00e1n sai: 'The museum is very interesting.'" },
      { type: "quote", text: "TOEIC kh\u00f4ng tr\u1eeb \u0111i\u1ec3m. Lu\u00f4n ch\u1ecdn m\u1ed9t \u0111\u00e1p \u00e1n \u2014 \u0111\u1eebng bao gi\u1edd b\u1ecf tr\u1ed1ng!" }
    ]
  },
  {
    slug: "chien-luoc-toeic-listening-part-3-va-4",
    title: "TOEIC Listening Part 3 & 4 \u2014 C\u00e1ch nghe hi\u1ec7u qu\u1ea3 khi kh\u00f4ng hi\u1ec3u 100%",
    emoji: "\ud83d\udc42",
    summary: "B\u1ea1n kh\u00f4ng c\u1ea7n hi\u1ec3u m\u1ecdi t\u1eeb. \u0110\u00e2y l\u00e0 c\u00e1ch nghe c\u00f3 ch\u1ecdn l\u1ecdc \u0111\u1ec3 tr\u1ea3 l\u1eddi \u0111\u00fang d\u00f9 c\u00f2n nhi\u1ec1u t\u1eeb ch\u01b0a bi\u1ebft.",
    tags: ["TOEIC", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "18/06/2026",
    readingTime: "8 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Part 3 v\u00e0 Part 4 chi\u1ebfm \u0111\u1ebfn 60 c\u00e2u trong Listening \u2014 v\u00e0 c\u0169ng l\u00e0 ph\u1ea7n nhi\u1ec1u ng\u01b0\u1eddi m\u1ea5t \u0111i\u1ec3m nh\u1ea5t v\u00ec b\u00e0i nghe d\u00e0i v\u00e0 ph\u1ee9c t\u1ea1p h\u01a1n." },
      { type: "heading", text: "\u0110\u1ecdc c\u00e2u h\u1ecfi TR\u01af\u1edcC khi audio ph\u00e1t \u2014 b\u01b0\u1edbc kh\u00f4ng th\u1ec3 b\u1ecf qua" },
      { type: "paragraph", text: "V\u00ec c\u00e2u h\u1ecfi \u0111\u01b0\u1ee3c in tr\u00ean \u0111\u1ec1, b\u1ea1n c\u00f3 th\u1ec3 \u0111\u1ecdc tr\u01b0\u1edbc trong khi ph\u1ea7n tr\u01b0\u1edbc \u0111ang ch\u1ea1y. Khi bi\u1ebft c\u00e2u h\u1ecfi h\u1ecfi g\u00ec, b\u1ea1n s\u1ebd bi\u1ebft c\u1ea7n nghe th\u00f4ng tin n\u00e0o." },
      { type: "list", items: [
        "C\u00e2u h\u1ecfi 'What is the main topic?' \u2192 Nghe \u00fd ch\u00ednh t\u1eeb \u0111\u1ea7u b\u00e0i",
        "C\u00e2u h\u1ecfi 'Where does it take place?' \u2192 Nghe t\u1eeb ch\u1ec9 \u0111\u1ecba \u0111i\u1ec3m",
        "C\u00e2u h\u1ecfi 'What will the man do next?' \u2192 T\u1eadp trung v\u00e0o ph\u1ea7n cu\u1ed1i b\u00e0i",
        "C\u00e2u h\u1ecfi 'Why is the woman calling?' \u2192 Nghe l\u00fd do ngay ph\u1ea7n \u0111\u1ea7u"
      ]},
      { type: "callout", emoji: "\ud83d\udca1", text: "M\u1eb9o: Trong kho\u1ea3ng im l\u1eb7ng gi\u1eefa c\u00e1c c\u00e2u h\u1ecfi, \u0111\u1eebng ng\u1ed3i y\u00ean \u2014 h\u00e3y \u0111\u1ecdc c\u00e2u h\u1ecfi ti\u1ebfp theo ngay l\u1eadp t\u1ee9c." },
      { type: "heading", text: "5 th\u00e1ch th\u1ee9c ph\u1ed5 bi\u1ebfn v\u00e0 c\u00e1ch v\u01b0\u1ee3t qua" },
      { type: "list", items: [
        "Qu\u00ean m\u1ea5t \u0111i\u1ec1u v\u1eeba nghe: Luy\u1ec7n short-term memory b\u1eb1ng c\u00e1ch nghe xong vi\u1ebft ra ngay nh\u1eefng g\u00ec nh\u1edb \u0111\u01b0\u1ee3c.",
        "Kh\u00f4ng quen gi\u1ecdng b\u1ea3n x\u1ee9: Nghe BBC, VOA, CNN m\u1ed7i ng\u00e0y 15 ph\u00fat. Xem phim ti\u1ebfng Anh c\u00f3 ph\u1ee5 \u0111\u1ec1.",
        "\u0110\u1ec1 c\u00e0ng v\u1ec1 sau c\u00e0ng kh\u00f3: L\u00e0m nhanh c\u00e2u d\u1ec5 \u0111\u1ec3 d\u00e0nh th\u1eddi gian cho c\u00e2u kh\u00f3.",
        "B\u1ecb ph\u00e2n t\u00e2m b\u1edfi c\u00e2u tr\u01b0\u1edbc: M\u1ed9t khi \u0111\u00e3 ch\u1ecdn \u0111\u00e1p \u00e1n, chuy\u1ec3n sang c\u00e2u ti\u1ebfp theo ngay.",
        "C\u0103ng th\u1eb3ng trong ph\u00f2ng thi: Luy\u1ec7n t\u1eadp trong \u0111i\u1ec1u ki\u1ec7n gi\u1ed1ng thi th\u1eadt \u2014 ph\u00f2ng y\u00ean t\u0129nh, kh\u00f4ng tua l\u1ea1i audio."
      ]},
      { type: "quote", text: "M\u1ed7i ng\u00e0y ch\u1ec9 c\u1ea7n 15\u201320 ph\u00fat nghe ti\u1ebfng Anh l\u00e0 \u0111\u1ee7 n\u1ebfu l\u00e0m \u0111\u00fang ph\u01b0\u01a1ng ph\u00e1p. Consistency quan tr\u1ecdng h\u01a1n intensity." }
    ]
  },
  {
    slug: "chien-luac-toeic-reading-part-5-ngu-phap",
    title: "TOEIC Reading Part 5 \u2014 L\u00e0m 40 c\u00e2u ng\u1eef ph\u00e1p trong 20 ph\u00fat: C\u00f3 th\u1ec3 kh\u00f4ng?",
    emoji: "\ud83d\udcdd",
    summary: "Part 5 chi\u1ebfm 40 c\u00e2u v\u00e0 c\u1ea7n l\u00e0m trong 30 gi\u00e2y/c\u00e2u. \u0110\u00e2y l\u00e0 chi\u1ebfn l\u01b0\u1ee3c nh\u1eadn d\u1ea1ng d\u1ea1ng c\u00e2u \u0111\u1ec3 tr\u1ea3 l\u1eddi kh\u00f4ng c\u1ea7n d\u1ecbch.",
    tags: ["TOEIC", "Ng\u1eef ph\u00e1p"],
    date: "17/06/2026",
    readingTime: "9 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Part 5 c\u1ee7a TOEIC Reading l\u00e0 40 c\u00e2u \u0111i\u1ec1n v\u00e0o ch\u1ed7 tr\u1ed1ng. B\u1ea1n c\u1ea7n ho\u00e0n th\u00e0nh ph\u1ea7n n\u00e0y trong kho\u1ea3ng 20 ph\u00fat \u2014 t\u1ee9c l\u00e0 trung b\u00ecnh 30 gi\u00e2y m\u1ed7i c\u00e2u." },
      { type: "heading", text: "B\u01b0\u1edbc 1: Nh\u1eadn d\u1ea1ng d\u1ea1ng c\u00e2u tr\u01b0\u1edbc khi \u0111\u1ecdc \u0111\u00e1p \u00e1n" },
      { type: "paragraph", text: "N\u1ebfu 4 \u0111\u00e1p \u00e1n l\u00e0 c\u00e1c d\u1ea1ng kh\u00e1c nhau c\u1ee7a c\u00f9ng m\u1ed9t t\u1eeb (manage/manager/management/managing), \u0111\u00e2y l\u00e0 c\u00e2u h\u1ecfi v\u1ec1 t\u1eeb lo\u1ea1i (word form). Sau 'the' \u2192 danh t\u1eeb. Tr\u01b0\u1edbc danh t\u1eeb \u2192 t\u00ednh t\u1eeb. Sau 'to' \u2192 \u0111\u1ed9ng t\u1eeb nguy\u00ean th\u1ec3." },
      { type: "heading", text: "3 d\u1ea1ng c\u00e2u ch\u00ednh trong Part 5" },
      { type: "list", items: [
        "D\u1ea1ng 1 \u2014 Word Form: Nh\u00ecn v\u1ecb tr\u00ed ch\u1ed7 tr\u1ed1ng, x\u00e1c \u0111\u1ecbnh t\u1eeb lo\u1ea1i c\u1ea7n \u0111i\u1ec1n. Kh\u00f4ng c\u1ea7n d\u1ecbch c\u1ea3 c\u00e2u.",
        "D\u1ea1ng 2 \u2014 Vocabulary: 4 \u0111\u00e1p \u00e1n c\u00f3 ngh\u0129a kh\u00e1c nhau. C\u1ea7n \u0111\u1ecdc ng\u1eef c\u1ea3nh. Ch\u00fa \u00fd c\u1eb7p: allow/let, tell/say, do/make.",
        "D\u1ea1ng 3 \u2014 Grammar: Th\u00ec \u0111\u1ed9ng t\u1eeb, \u0111\u1ea1i t\u1eeb, gi\u1edbi t\u1eeb, m\u1ea1o t\u1eeb."
      ]},
      { type: "callout", emoji: "\ud83d\udca1", text: "M\u1eb9o: V\u1edbi c\u00e2u h\u1ecfi Word Form, b\u1ea1n c\u00f3 th\u1ec3 l\u00e0m trong 10\u201315 gi\u00e2y. D\u00e0nh th\u1eddi gian ti\u1ebft ki\u1ec7m \u0111\u01b0\u1ee3c cho c\u00e2u Vocabulary v\u00e0 Grammar kh\u00f3 h\u01a1n." },
      { type: "heading", text: "C\u00e1c c\u1eb7p t\u1eeb d\u1ec5 nh\u1ea7m trong TOEIC" },
      { type: "list", items: [
        "some/any: D\u00f9ng 'some' c\u00e2u kh\u1eb3ng \u0111\u1ecbnh, 'any' c\u00e2u ph\u1ee7 \u0111\u1ecbnh v\u00e0 c\u00e2u h\u1ecfi",
        "many/much: 'many' \u0111i v\u1edbi danh t\u1eeb \u0111\u1ebfm \u0111\u01b0\u1ee3c, 'much' v\u1edbi danh t\u1eeb kh\u00f4ng \u0111\u1ebfm \u0111\u01b0\u1ee3c",
        "a few/a little: 'a few' \u0111\u1ebfm \u0111\u01b0\u1ee3c, 'a little' kh\u00f4ng \u0111\u1ebfm \u0111\u01b0\u1ee3c",
        "Phrasal verbs: back down/back out/back up \u2014 c\u00f9ng \u0111\u1ed9ng t\u1eeb nh\u01b0ng ngh\u0129a ho\u00e0n to\u00e0n kh\u00e1c"
      ]},
      { type: "callout", emoji: "\u26a0\ufe0f", text: "N\u1ebfu b\u00ed m\u1ed9t c\u00e2u qu\u00e1 30 gi\u00e2y, khoanh \u0111\u00e1p \u00e1n r\u1ed3i \u0111i ti\u1ebfp. Kh\u00f4ng n\u00ean \u0111\u1ec3 m\u1ed9t c\u00e2u \u0103n h\u1ebft 2\u20133 ph\u00fat trong khi c\u00f2n 30 c\u00e2u ph\u00eda sau." }
    ]
  },
  {
    slug: "chien-luoc-toeic-reading-part-7-doc-hieu",
    title: "TOEIC Part 7 \u0110\u1ecdc hi\u1ec3u \u2014 \u0110\u1ecdc nhanh, t\u00ecm \u0111\u00fang, kh\u00f4ng c\u1ea7n hi\u1ec3u t\u1eebng t\u1eeb",
    emoji: "\ud83d\udcd6",
    summary: "48 c\u00e2u \u0111\u1ecdc hi\u1ec3u trong 55 ph\u00fat. K\u1ef9 n\u0103ng skimming v\u00e0 scanning l\u00e0 ch\u00ec a kh\u00f3a \u2014 kh\u00f4ng ph\u1ea3i d\u1ecbch t\u1eebng c\u00e2u.",
    tags: ["TOEIC", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "16/06/2026",
    readingTime: "10 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Part 7 l\u00e0 ph\u1ea7n cu\u1ed1i v\u00e0 c\u0169ng l\u00e0 ph\u1ea7n n\u1eb7ng nh\u1ea5t \u2014 48 c\u00e2u \u0111\u1ecdc hi\u1ec3u. Nhi\u1ec1u ng\u01b0\u1eddi ch\u1ea1y h\u1ebft gi\u1edd v\u00ec c\u1ed1 \u0111\u1ecdc v\u00e0 hi\u1ec3u t\u1eebng t\u1eeb. \u0110\u00e2y l\u00e0 c\u00e1ch \u0111\u1ecdc th\u00f4ng minh h\u01a1n." },
      { type: "heading", text: "\u0110\u1ecdc c\u00e2u h\u1ecfi TR\u01af\u1edcC, \u0111\u1ecdc b\u00e0i SAU" },
      { type: "paragraph", text: "\u0110\u00e2y l\u00e0 quy t\u1eafc v\u00e0ng c\u1ee7a Part 7. Tr\u01b0\u1edbc khi \u0111\u1ecdc passage, h\u00e3y \u0111\u1ecdc to\u00e0n b\u1ed9 c\u00e1c c\u00e2u h\u1ecfi. Khi bi\u1ebft c\u1ea7n t\u00ecm th\u00f4ng tin g\u00ec, b\u1ea1n s\u1ebd \u0111\u1ecdc c\u00f3 m\u1ee5c ti\u00eau thay v\u00ec \u0111\u1ecdc t\u1ea5t c\u1ea3." },
      { type: "heading", text: "2 k\u1ef9 n\u0103ng \u0111\u1ecdc c\u1ea7n luy\u1ec7n" },
      { type: "list", items: [
        "Skimming (\u0111\u1ecdc l\u01b0\u1edbt): \u0110\u1ecdc nhanh to\u00e0n b\u00e0i trong 30\u201360 gi\u00e2y \u0111\u1ec3 n\u1eafm \u00fd ch\u00ednh. Ch\u1ec9 \u0111\u1ecdc c\u00e2u \u0111\u1ea7u m\u1ed7i \u0111o\u1ea1n, ti\u00eau \u0111\u1ec1, v\u00e0 t\u1eeb in \u0111\u1eadm.",
        "Scanning (qu\u00e9t th\u00f4ng tin): M\u1eaft ch\u1ea1y nhanh qua b\u00e0i t\u00ecm t\u1eeb kh\u00f3a \u2014 t\u00ean ng\u01b0\u1eddi, s\u1ed1 ti\u1ec1n, ng\u00e0y th\u00e1ng, \u0111\u1ecba \u0111i\u1ec3m."
      ]},
      { type: "heading", text: "Qu\u1ea3n l\u00fd th\u1eddi gian Part 7" },
      { type: "list", items: [
        "Single passages ng\u1eafn (1\u20132 c\u00e2u h\u1ecfi): 1\u20132 ph\u00fat",
        "Single passages trung b\u00ecnh (3\u20134 c\u00e2u h\u1ecfi): 3\u20134 ph\u00fat",
        "Double passages (5 c\u00e2u h\u1ecfi): 5\u20137 ph\u00fat"
      ]},
      { type: "callout", emoji: "\u26a0\ufe0f", text: "N\u1ebfu m\u1ed9t b\u00e0i \u0111\u1ecdc qu\u00e1 kh\u00f3, \u0111\u1eebng k\u1eb9t l\u1ea1i. \u0110\u00e1nh d\u1ea5u v\u00e0 b\u1ecf qua, l\u00e0m b\u00e0i kh\u00e1c tr\u01b0\u1edbc. Quay l\u1ea1i sau n\u1ebfu c\u00f2n th\u1eddi gian." },
      { type: "quote", text: "Th\u00e0nh c\u00f4ng trong Part 7 kh\u00f4ng \u0111\u1ebfn t\u1eeb vi\u1ec7c \u0111\u1ecdc nhanh h\u01a1n \u2014 m\u00e0 \u0111\u1ebfn t\u1eeb vi\u1ec7c \u0111\u1ecdc th\u00f4ng minh h\u01a1n." }
    ]
  }`;

// Tìm vị trí cuối của BLOG_POSTS array
const endIdx = content.lastIndexOf("];");
if (endIdx === -1) {
  console.error("Kh\u00f4ng t\u00ecm th\u1ea5y k\u1ebft th\u00fac c\u1ee7a BLOG_POSTS");
  process.exit(1);
}

const result = content.slice(0, endIdx) + newPosts + "\n" + content.slice(endIdx);
fs.writeFileSync(path, result, "utf8");
console.log("Done! \u0110\u00e3 th\u00eam 5 b\u00e0i vi\u1ebft TOEIC v\u00e0o blog.ts");
