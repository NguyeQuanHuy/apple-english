const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

const newPost = ,
  {
    slug: "cach-phat-am-tieng-anh-ro-rang",
    title: "C\u00e1ch ph\u00e1t \u00e2m ti\u1ebfng Anh r\u00f5 r\u00e0ng",
    emoji: "\uD83C\uDFA4",
    summary: "Ph\u00e1t \u00e2m sai khi\u1ebfn ng\u01b0\u1eddi nghe kh\u00f4ng hi\u1ec3u d\u00f9 ng\u1eef ph\u00e1p \u0111\u00fang. H\u01b0\u1edbng d\u1eabn t\u1eebng b\u01b0\u1edbc \u0111\u1ec3 ph\u00e1t \u00e2m chu\u1ea9n.",
    tags: ["Ph\u00e1t \u00e2m", "Ph\u01b0\u01a1ng ph\u00e1p"],
    date: "04/06/2026",
    readingTime: "6 ph\u00fat \u0111\u1ecdc",
    content: [
      { type: "paragraph", text: "Ph\u00e1t \u00e2m t\u1ed1t kh\u00f4ng c\u00f3 ngh\u0129a l\u00e0 ph\u1ea3i n\u00f3i gi\u1ecdng M\u1ef9 ho\u1eb7c Anh ho\u00e0n h\u1ea3o. Ph\u00e1t \u00e2m t\u1ed1t c\u00f3 ngh\u0129a l\u00e0 ng\u01b0\u1eddi nghe hi\u1ec3u b\u1ea1n ngay l\u1ea7n \u0111\u1ea7u." },
      { type: "heading", text: "T\u1ea1i sao ng\u01b0\u1eddi Vi\u1ec7t ph\u00e1t \u00e2m ti\u1ebfng Anh kh\u00f3?" },
      { type: "list", items: ["Ti\u1ebfng Vi\u1ec7t \u00edt ph\u1ee5 \u00e2m cu\u1ed1i \u2014 n\u00ean hay nu\u1ed1t \u00e2m cu\u1ed1i trong ti\u1ebfng Anh.", "\u00c2m /th/ kh\u00f4ng c\u00f3 trong ti\u1ebfng Vi\u1ec7t \u2014 th\u01b0\u1eddng \u0111\u1ecdc th\u00e0nh /t/ ho\u1eb7c /d/.", "\u00c2m /v/ v\u00e0 /w/ th\u01b0\u1eddng b\u1ecb l\u1eabn.", "\u00c2m /r/ ti\u1ebfng Anh kh\u00e1c ho\u00e0n to\u00e0n /r/ ti\u1ebfng Vi\u1ec7t."] },
      { type: "heading", text: "Ph\u1ea7n 1 \u2014 \u0110\u1ecdc \u0111\u00fang \u00e2m cu\u1ed1i" },
      { type: "compare", left: "I need your hel (nu\u1ed1t \u00e2m p)", right: "I need your help (r\u00f5 \u00e2m /p/ cu\u1ed1i)", leftLabel: "\u274c Sai", rightLabel: "\u2705 \u0110\u00fang" },
      { type: "list", items: ["/p/ cu\u1ed1i: stop, help, map \u2014 m\u00f4i ch\u1ea1m nhau.", "/t/ cu\u1ed1i: cat, not, sit \u2014 l\u01b0\u1ee1i ch\u1ea1m r\u0103ng tr\u00ean.", "/k/ cu\u1ed1i: back, look, work \u2014 c\u1ed5 h\u1ecång \u0111\u00f3ng l\u1ea1i."] },
      { type: "heading", text: "Ph\u1ea7n 2 \u2014 \u00c2m /th/ \u2014 s\u00e1t th\u1ee7 ph\u00e1t \u00e2m" },
      { type: "vocab", word: "Kh\u00f4ng thanh /\u03b8/ \u2014 think, three", meaning: "L\u01b0\u1ee1i ch\u1ea1m nh\u1eb9 r\u0103ng tr\u00ean, th\u1ed5i h\u01a1i nh\u1eb9.", example: "Think, three, thank, thin" },
      { type: "vocab", word: "C\u00f3 thanh /\u00f0/ \u2014 this, that, the", meaning: "Gi\u1ed1ng tr\u00ean nh\u01b0ng d\u00e2y thanh rung.", example: "This, that, the, them, there" },
      { type: "heading", text: "Ph\u1ea7n 3 \u2014 Tr\u1ecdng \u00e2m t\u1eeb" },
      { type: "compare", left: "pho-TO-graph (sai)", right: "PHO-to-graph (\u0111\u00fang)", leftLabel: "\u274c Sai tr\u1ecdng \u00e2m", rightLabel: "\u2705 \u0110\u00fang" },
      { type: "list", items: ["Danh t\u1eeb 2 \u00e2m ti\u1ebft: th\u01b0\u1eddng nh\u1ea5n \u00e2m \u0111\u1ea7u \u2014 TA-ble, MO-ney.", "\u0110\u1ed9ng t\u1eeb 2 \u00e2m ti\u1ebft: th\u01b0\u1eddng nh\u1ea5n \u00e2m sau \u2014 be-GIN, de-CIDE."] },
      { type: "heading", text: "Ph\u1ea7n 4 \u2014 N\u1ed1i \u00e2m" },
      { type: "vocab", word: "Ph\u1ee5 \u00e2m + Nguy\u00ean \u00e2m", meaning: "T\u1eeb cu\u1ed1i k\u1ebft b\u1eb1ng ph\u1ee5 \u00e2m + t\u1eeb sau b\u1eaft \u0111\u1ea7u b\u1eb1ng nguy\u00ean \u00e2m \u2192 n\u1ed1i li\u1ec1n", example: "turn off \u2192 tur-NOFF | pick up \u2192 pi-CUP" },
      { type: "heading", text: "L\u1ecbch luy\u1ec7n ph\u00e1t \u00e2m m\u1ed7i ng\u00e0y" },
      { type: "list", items: ["Ph\u00fat 1-2: \u0110\u1ecdc to 10 t\u1eeb c\u00f3 \u00e2m cu\u1ed1i kh\u00f3.", "Ph\u00fat 3-4: Luy\u1ec7n /th/ \u2014 \u0111\u1ecdc 5 c\u00e2u c\u00f3 'the', 'think', 'three'.", "Ph\u00fat 5-6: Shadowing 1 \u0111o\u1ea1n phim ng\u1eafn.", "Ph\u00fat 7-10: Ghi \u00e2m b\u1ea3n th\u00e2n n\u00f3i 5 c\u00e2u, nghe l\u1ea1i."] },
      { type: "callout", emoji: "\uD83C\uDF1F", text: "C\u00f4ng c\u1ee5 mi\u1ec5n ph\u00ed: ELSA Speak, YouGlish, Forvo." },
      { type: "quote", text: "Ph\u00e1t \u00e2m kh\u00f4ng c\u1ea7n ho\u00e0n h\u1ea3o \u2014 c\u1ea7n \u0111\u1ee7 r\u00f5 \u0111\u1ec3 ng\u01b0\u1eddi ta hi\u1ec3u ngay." }
    ]
  };

c = c.replace('];', newPost + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done:', fs.readFileSync('data/blog.ts','utf8').includes('cach-phat-am'));
