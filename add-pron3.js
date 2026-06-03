const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

const post = {
  slug: "cach-phat-am-tieng-anh-ro-rang",
  title: "C\u00e1ch ph\u00e1t \u00e2m ti\u1ebfng Anh r\u00f5 r\u00e0ng",
  emoji: "\uD83C\uDFA4",
  summary: "Ph\u00e1t \u00e2m sai khi\u1ebfn ng\u01b0\u1eddi nghe kh\u00f4ng hi\u1ec3u d\u00f9 ng\u1eef ph\u00e1p \u0111\u00fang. H\u01b0\u1edbng d\u1eabn t\u1eebng b\u01b0\u1edbc \u0111\u1ec3 ph\u00e1t \u00e2m chu\u1ea9n.",
  tags: ["Ph\u00e1t \u00e2m", "Ph\u01b0\u01a1ng ph\u00e1p"],
  date: "04/06/2026",
  readingTime: "6 ph\u00fat \u0111\u1ecdc",
  content: [
    { type: "paragraph", text: "Ph\u00e1t \u00e2m t\u1ed1t kh\u00f4ng c\u00f3 ngh\u0129a l\u00e0 ph\u1ea3i n\u00f3i gi\u1ecdng M\u1ef9 ho\u00e0n h\u1ea3o. Ph\u00e1t \u00e2m t\u1ed1t c\u00f3 ngh\u0129a l\u00e0 ng\u01b0\u1eddi nghe hi\u1ec3u b\u1ea1n ngay l\u1ea7n \u0111\u1ea7u." },
    { type: "heading", text: "L\u1ed7i 1: Nu\u1ed1t \u00e2m cu\u1ed1i" },
    { type: "paragraph", text: "Ng\u01b0\u1eddi Vi\u1ec7t hay nu\u1ed1t \u00e2m cu\u1ed1i v\u00ec ti\u1ebfng Vi\u1ec7t \u00edt ph\u1ee5 \u00e2m cu\u1ed1i m\u1ea1nh." },
    { type: "compare", left: "I need your hel", right: "I need your help", leftLabel: "\u274c Nu\u1ed1t \u00e2m /p/", rightLabel: "\u2705 R\u00f5 \u00e2m cu\u1ed1i" },
    { type: "list", items: ["/p/ cu\u1ed1i: stop, help \u2014 m\u00f4i ch\u1ea1m nhau", "/t/ cu\u1ed1i: cat, not \u2014 l\u01b0\u1ee1i ch\u1ea1m r\u0103ng tr\u00ean", "/k/ cu\u1ed1i: back, work \u2014 ng\u1eebng h\u01a1i \u1edf h\u1ecd ng\u1ef1c"] },
    { type: "heading", text: "L\u1ed7i 2: \u00c2m /th/ \u0111\u1ecdc sai" },
    { type: "vocab", word: "/th/ kh\u00f4ng thanh", meaning: "L\u01b0\u1ee1i gi\u1eefa 2 h\u00e0ng r\u0103ng, th\u1ed5i h\u01a1i", example: "think, three, thank, thin" },
    { type: "vocab", word: "/th/ c\u00f3 thanh", meaning: "Gi\u1ed1ng tr\u00ean nh\u01b0ng d\u00e2y thanh rung", example: "this, that, the, them" },
    { type: "callout", emoji: "\uD83D\uDCA1", text: "C\u00e1ch luy\u1ec7n: \u0110\u1eb7t g\u01b0\u01a1ng tr\u01b0\u1edbc m\u1eb7t. L\u01b0\u1ee1i ph\u1ea3i th\u1ea5y gi\u1eefa 2 h\u00e0ng r\u0103ng khi \u0111\u1ecdc /th/." },
    { type: "heading", text: "L\u1ed7i 3: Sai tr\u1ecdng \u00e2m" },
    { type: "compare", left: "pho-TO-graph", right: "PHO-to-graph", leftLabel: "\u274c Sai", rightLabel: "\u2705 \u0110\u00fang" },
    { type: "list", items: ["Danh t\u1eeb 2 \u00e2m ti\u1ebft: nh\u1ea5n \u00e2m \u0111\u1ea7u \u2014 TA-ble, MO-ney, PEO-ple", "\u0110\u1ed9ng t\u1eeb 2 \u00e2m ti\u1ebft: nh\u1ea5n \u00e2m sau \u2014 be-GIN, de-CIDE, re-LAX"] },
    { type: "heading", text: "L\u1ed7i 4: Kh\u00f4ng n\u1ed1i \u00e2m" },
    { type: "paragraph", text: "Ng\u01b0\u1eddi b\u1ea3n ng\u1eef n\u00f3i nhanh v\u00ec h\u1ecd n\u1ed1i \u00e2m gi\u1eefa c\u00e1c t\u1eeb. N\u1ebfu b\u1ea1n ng\u1eaft t\u1eebng t\u1eeb, nghe r\u1ea5t c\u01a1 h\u1ecdc." },
    { type: "vocab", word: "Ph\u1ee5 \u00e2m + Nguy\u00ean \u00e2m", meaning: "N\u1ed1i li\u1ec1n gi\u1eefa 2 t\u1eeb", example: "turn off \u2192 tur-NOFF | pick up \u2192 pi-CUP | get in \u2192 ge-TIN" },
    { type: "heading", text: "L\u1ecbch luy\u1ec7n 10 ph\u00fat m\u1ed7i ng\u00e0y" },
    { type: "list", items: ["Ph\u00fat 1-2: \u0110\u1ecdc to 10 t\u1eeb c\u00f3 \u00e2m cu\u1ed1i kh\u00f3 (stop, help, back, ask)", "Ph\u00fat 3-4: Luy\u1ec7n /th/ \u2014 \u0111\u1ecdc 5 c\u00e2u c\u00f3 the, this, think, three", "Ph\u00fat 5-6: Shadowing 1 \u0111o\u1ea1n phim ng\u1eafn c\u00f3 ph\u1ee5 \u0111\u1ec1 ti\u1ebfng Anh", "Ph\u00fat 7-10: Ghi \u00e2m b\u1ea3n th\u00e2n n\u00f3i 5 c\u00e2u, nghe l\u1ea1i v\u00e0 so s\u00e1nh"] },
    { type: "callout", emoji: "\uD83C\uDF1F", text: "C\u00f4ng c\u1ee5 mi\u1ec5n ph\u00ed n\u00ean d\u00f9ng: ELSA Speak (app luy\u1ec7n ph\u00e1t \u00e2m AI), YouGlish (nghe ph\u00e1t \u00e2m trong video th\u1ef1c t\u1ebf), Forvo (nghe ph\u00e1t \u00e2m chu\u1ea9n theo t\u1eebng t\u1eeb)." },
    { type: "quote", text: "Ph\u00e1t \u00e2m kh\u00f4ng c\u1ea7n ho\u00e0n h\u1ea3o \u2014 c\u1ea7n \u0111\u1ee7 r\u00f5 \u0111\u1ec3 ng\u01b0\u1eddi ta hi\u1ec3u ngay. V\u00e0 \u0111i\u1ec1u \u0111\u00f3 ch\u1ec9 c\u1ea7n 10 ph\u00fat luy\u1ec7n m\u1ed7i ng\u00e0y trong 1 th\u00e1ng." }
  ]
};

const newPost = ',\n  ' + JSON.stringify(post, null, 2).split('\n').join('\n  ');
c = c.replace('];', newPost + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done:', fs.readFileSync('data/blog.ts','utf8').includes('cach-phat-am'));
