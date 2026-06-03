const fs = require('fs');
const content = export type BlogPost = {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  tags?: string[];
  date?: string;
  readingTime?: string;
  content: object[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tai-sao-hoc-tieng-anh-mai-khong-gioi",
    title: "T\u1ea1i sao h\u1ecdc ti\u1ebfng Anh m\u00e3i m\u00e0 kh\u00f4ng gi\u1ecfi?",
    emoji: "\uD83E\uDD14",
    summary: "B\u1ea1n h\u1ecdc ti\u1ebfng Anh nhi\u1ec1u n\u0103m nh\u01b0ng v\u1eabn kh\u00f4ng n\u00f3i \u0111\u01b0\u1ee3c? \u0110\u00e2y l\u00e0 4 l\u00fd do th\u1eadt s\u1ef1 v\u00e0 c\u00e1ch fix t\u1eebng c\u00e1i.",
    tags: ["Kinh nghi\u1ec7m", "M\u1ea5t g\u1ed1c"],
    date: "01/06/2026",
    readingTime: "5 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Nhi\u1ec1u ng\u01b0\u1eddi h\u1ecdc ti\u1ebfng Anh 7\u201310 n\u0103m nh\u01b0ng ra \u0111\u01b0\u1eddng g\u1eb7p ng\u01b0\u1eddi n\u01b0\u1edbc ngo\u00e0i v\u1eabn... \u0111\u1ee9ng h\u00ecnh." },
      { type: "heading", text: "1. H\u1ecdc \u0111\u1ec3 thi, kh\u00f4ng h\u1ecdc \u0111\u1ec3 d\u00f9ng" },
      { type: "callout", emoji: "\uD83D\uDCA1", text: "Fix: M\u1ed7i ng\u00e0y d\u00e0nh 10 ph\u00fat n\u00f3i to b\u1eb1ng ti\u1ebfng Anh." },
      { type: "quote", text: "B\u1ea1n kh\u00f4ng c\u1ea7n h\u1ecdc nhi\u1ec1u h\u01a1n \u2014 b\u1ea1n c\u1ea7n h\u1ecdc \u0111\u00fang h\u01a1n." }
    ]
  },
  {
    slug: "10-phut-hoc-tieng-anh-moi-ngay",
    title: "Ch\u1ec9 c\u1ea7n 10 ph\u00fat m\u1ed7i ng\u00e0y \u0111\u1ec3 c\u1ea3i thi\u1ec7n ti\u1ebfng Anh",
    emoji: "\u23F0",
    summary: "Kh\u00f4ng c\u1ea7n h\u1ecdc 2-3 ti\u1ebfng m\u1ed7i ng\u00e0y. 10 ph\u00fat \u0111\u00fang c\u00e1ch c\u00f2n hi\u1ec7u qu\u1ea3 h\u01a1n 1 ti\u1ebfng h\u1ecdc sai ph\u01b0\u01a1ng ph\u00e1p.",
    tags: ["Ph\u01b0\u01a1ng ph\u00e1p", "M\u1ea5t g\u1ed1c"],
    date: "28/05/2026",
    readingTime: "3 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "B\u1ea1n b\u1eadn \u0111i l\u00e0m, kh\u00f4ng c\u00f3 th\u1eddi gian ng\u1ed3i h\u1ecdc 2 ti\u1ebfng m\u1ed7i ng\u00e0y. Tin t\u1ed1t l\u00e0 b\u1ea1n kh\u00f4ng c\u1ea7n nhi\u1ec1u \u0111\u1ebfn v\u1eady." },
      { type: "callout", emoji: "\uD83D\uDD25", text: "Quan tr\u1ecdng nh\u1ea5t: l\u00e0m \u0110\u00daNG GI\u1edd \u0110\u00d3 m\u1ed7i ng\u00e0y. Bi\u1ebfn n\u00f3 th\u00e0nh th\u00f3i quen." },
      { type: "quote", text: "Consistency beats intensity. H\u1ecdc \u00edt m\u1ed7i ng\u00e0y th\u1eafng h\u1ecdc nhi\u1ec1u m\u1ed9t l\u1ea7n." }
    ]
  },
  {
    slug: "tu-vung-toeic-can-biet",
    title: "100 t\u1eeb v\u1ef1ng TOEIC ng\u01b0\u1eddi m\u1ea5t g\u1ed1c c\u1ea7n bi\u1ebft nh\u1ea5t",
    emoji: "\uD83D\uDCDA",
    summary: "Kh\u00f4ng c\u1ea7n h\u1ecdc h\u1ebft 10.000 t\u1eeb. \u0110\u00e2y l\u00e0 100 t\u1eeb xu\u1ea5t hi\u1ec7n nhi\u1ec1u nh\u1ea5t trong \u0111\u1ec1 TOEIC.",
    tags: ["TOEIC", "T\u1eeb v\u1ef1ng"],
    date: "25/05/2026",
    readingTime: "5 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "TOEIC c\u00f3 kho\u1ea3ng 600-800 t\u1eeb v\u1ef1ng hay xu\u1ea5t hi\u1ec7n. Trong \u0111\u00f3, 100 t\u1eeb d\u01b0\u1edbi \u0111\u00e2y chi\u1ebfm kho\u1ea3ng 40% t\u1ea7n su\u1ea5t." },
      { type: "vocab", word: "schedule", meaning: "l\u1ecbch tr\u00ecnh", example: "Please schedule a meeting for Monday." },
      { type: "vocab", word: "deadline", meaning: "h\u1ea1n ch\u1eadt", example: "The deadline is this Friday." },
      { type: "callout", emoji: "\uD83D\uDCDD", text: "M\u1eb9o: H\u1ecdc m\u1ed7i t\u1eeb k\u00e8m 1 c\u00e2u v\u00ed d\u1ee5." }
    ]
  },
  {
    slug: "loi-phat-am-nguoi-viet-hay-mac",
    title: "5 l\u1ed7i ph\u00e1t \u00e2m ti\u1ebfng Anh ng\u01b0\u1eddi Vi\u1ec7t hay m\u1eafc nh\u1ea5t",
    emoji: "\uD83D\uDDE3\uFE0F",
    summary: "Ph\u00e1t \u00e2m sai khi\u1ebfn ng\u01b0\u1eddi nghe kh\u00f4ng hi\u1ec3u d\u00f9 grammar \u0111\u00fang.",
    tags: ["Ph\u00e1t \u00e2m", "Kinh nghi\u1ec7m"],
    date: "20/05/2026",
    readingTime: "4 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Ti\u1ebfng Vi\u1ec7t v\u00e0 ti\u1ebfng Anh c\u00f3 h\u1ec7 th\u1ed1ng \u00e2m ho\u00e0n to\u00e0n kh\u00e1c nhau." },
      { type: "compare", left: "stop \u0111\u1ecdc th\u00e0nh sto", right: "stop \u2014 r\u00f5 \u00e2m /p/ cu\u1ed1i", leftLabel: "\u274c Sai", rightLabel: "\u2705 \u0110\u00fang" }
    ]
  },
  {
    slug: "cach-hoc-ngu-phap-khong-chan",
    title: "C\u00e1ch h\u1ecdc ng\u1eef ph\u00e1p ti\u1ebfng Anh m\u00e0 kh\u00f4ng b\u1ecb ch\u00e1n",
    emoji: "\u270F\uFE0F",
    summary: "Ng\u1eef ph\u00e1p kh\u00f4ng nh\u00e0m ch\u00e1n n\u1ebfu b\u1ea1n h\u1ecdc \u0111\u00fang c\u00e1ch.",
    tags: ["Ng\u1eef ph\u00e1p", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "15/05/2026",
    readingTime: "3 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "H\u1ea7u h\u1ebft m\u1ecdi ng\u01b0\u1eddi h\u1ecdc ng\u1eef ph\u00e1p b\u1eb1ng c\u00e1ch \u0111\u1ecdc b\u1ea3ng quy t\u1eafc r\u1ed3i l\u00e0m b\u00e0i t\u1eadp." },
      { type: "callout", emoji: "\uD83D\uDCA1", text: "N\u00e3o ng\u01b0\u1eddi h\u1ecdc theo pattern, kh\u00f4ng h\u1ecdc theo quy t\u1eafc." },
      { type: "quote", text: "H\u1ecdc ng\u1eef ph\u00e1p \u0111\u1ee7 \u0111\u1ec3 kh\u00f4ng hi\u1ec3u sai, \u0111\u1eebng h\u1ecdc \u0111\u1ec3 ho\u00e0n h\u1ea3o." }
    ]
  },
  {
    slug: "toeic-450-trong-2-thang",
    title: "TOEIC 450 \u0111i\u1ec3m trong 2 th\u00e1ng \u2014 k\u1ebf ho\u1ea1ch \u00f4n thi th\u1ef1c t\u1ebf",
    emoji: "\uD83C\uDFAF",
    summary: "Kh\u00f4ng c\u1ea7n trung t\u00e2m \u0111\u1eaft ti\u1ec1n. K\u1ebf ho\u1ea1ch \u00f4n TOEIC 450 trong 2 th\u00e1ng d\u00e0nh cho ng\u01b0\u1eddi m\u1ea5t g\u1ed1c.",
    tags: ["TOEIC", "L\u1ed9 tr\u00ecnh"],
    date: "03/06/2026",
    readingTime: "6 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "TOEIC 450 \u0111i\u1ec3m l\u00e0 m\u1ee9c \u0111i\u1ec3m t\u1ed1i thi\u1ec3u nhi\u1ec1u c\u00f4ng ty Vi\u1ec7t Nam y\u00eau c\u1ea7u." },
      { type: "quote", text: "2 th\u00e1ng \u00d7 30 ph\u00fat/ng\u00e0y = 60 ti\u1ebfng h\u1ecdc. \u0110\u1ee7 \u0111\u1ec3 \u0111\u1ea1t 450 n\u1ebfu b\u1ea1n h\u1ecdc \u0111\u00fang h\u01b0\u1edbng." }
    ]
  },
  {
    slug: "30-thanh-ngu-pho-bien-tieng-anh",
    title: "30 th\u00e0nh ng\u1eef ph\u1ed5 bi\u1ebfn nh\u1ea5t trong ti\u1ebfng Anh",
    emoji: "\uD83D\uDCAC",
    summary: "Ng\u01b0\u1eddi b\u1ea3n ng\u1eef n\u00f3i chuy\u1ec7n \u0111\u1ea7y th\u00e0nh ng\u1eef. H\u1ecdc 30 c\u00e2u n\u00e0y \u0111\u1ec3 hi\u1ec3u phim, nh\u1ea1c v\u00e0 giao ti\u1ebfp t\u1ef1 nhi\u00ean h\u01a1n.",
    tags: ["T\u1eeb v\u1ef1ng", "Giao ti\u1ebfp"],
    date: "03/06/2026",
    readingTime: "7 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "vocab", word: "Break a leg", meaning: "Ch\u00fac may m\u1eafn!", example: "You have an interview today? Break a leg!" },
      { type: "vocab", word: "Hit the sack", meaning: "\u0110i ng\u1ee7", example: "I am exhausted. Time to hit the sack." },
      { type: "vocab", word: "Under the weather", meaning: "C\u1ea3m th\u1ea5y \u1ed1m", example: "I am feeling under the weather today." },
      { type: "quote", text: "Bi\u1ebft th\u00e0nh ng\u1eef l\u00e0 d\u1ea5u hi\u1ec7u b\u1ea1n \u0111\u00e3 v\u01b0\u1ee3t qua ng\u01b0\u1ee1ng h\u1ecdc ti\u1ebfng Anh c\u01a1 b\u1ea3n." }
    ]
  },
  {
    slug: "cach-phat-am-tieng-anh-ro-rang",
    title: "C\u00e1ch ph\u00e1t \u00e2m ti\u1ebfng Anh r\u00f5 r\u00e0ng",
    emoji: "\uD83C\uDFA4",
    summary: "Ph\u00e1t \u00e2m sai khi\u1ebfn ng\u01b0\u1eddi nghe kh\u00f4ng hi\u1ec3u d\u00f9 ng\u1eef ph\u00e1p \u0111\u00fang. H\u01b0\u1edbng d\u1eabn t\u1eebng b\u01b0\u1edbc \u0111\u1ec3 ph\u00e1t \u00e2m chu\u1ea9n.",
    tags: ["Ph\u00e1t \u00e2m", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "04/06/2026",
    readingTime: "6 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Ph\u00e1t \u00e2m t\u1ed1t kh\u00f4ng c\u00f3 ngh\u0129a l\u00e0 gi\u1ecdng M\u1ef9 ho\u00e0n h\u1ea3o. C\u1ea7n \u0111\u1ee7 r\u00f5 \u0111\u1ec3 ng\u01b0\u1eddi ta hi\u1ec3u ngay." },
      { type: "heading", text: "L\u1ed7i 1: Nu\u1ed1t \u00e2m cu\u1ed1i" },
      { type: "compare", left: "I need your hel", right: "I need your help", leftLabel: "\u274c Nu\u1ed1t \u00e2m /p/", rightLabel: "\u2705 R\u00f5 \u00e2m cu\u1ed1i" },
      { type: "heading", text: "L\u1ed7i 2: \u00c2m /th/ \u0111\u1ecdc sai" },
      { type: "vocab", word: "/th/ kh\u00f4ng thanh", meaning: "L\u01b0\u1ee1i gi\u1eefa 2 h\u00e0ng r\u0103ng, th\u1ed5i h\u01a1i", example: "think, three, thank" },
      { type: "heading", text: "L\u1ed7i 3: Sai tr\u1ecdng \u00e2m" },
      { type: "compare", left: "pho-TO-graph", right: "PHO-to-graph", leftLabel: "\u274c Sai", rightLabel: "\u2705 \u0110\u00fang" },
      { type: "heading", text: "L\u1ecbch luy\u1ec7n 10 ph\u00fat/ng\u00e0y" },
      { type: "list", items: ["Ph\u00fat 1-2: \u0110\u1ecdc to 10 t\u1eeb c\u00f3 \u00e2m cu\u1ed1i kh\u00f3", "Ph\u00fat 3-4: Luy\u1ec7n /th/ 5 c\u00e2u", "Ph\u00fat 5-10: Shadowing + ghi \u00e2m b\u1ea3n th\u00e2n"] },
      { type: "callout", emoji: "\uD83C\uDF1F", text: "C\u00f4ng c\u1ee5 mi\u1ec5n ph\u00ed: ELSA Speak, YouGlish, Forvo." },
      { type: "quote", text: "Ph\u00e1t \u00e2m kh\u00f4ng c\u1ea7n ho\u00e0n h\u1ea3o \u2014 c\u1ea7n \u0111\u1ee7 r\u00f5 \u0111\u1ec3 ng\u01b0\u1eddi ta hi\u1ec3u ngay." }
    ]
  }
];;
fs.writeFileSync('data/blog.ts', content, 'utf8');
console.log('Done:', fs.readFileSync('data/blog.ts','utf8').includes('BLOG_POSTS'));
