const fs = require('fs');
let buf = fs.readFileSync('data/blog.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

const lines = [
  ',',
  '  {',
  '    slug: "cach-phat-am-tieng-anh-ro-rang",',
  '    title: "C\u00e1ch ph\u00e1t \u00e2m ti\u1ebfng Anh r\u00f5 r\u00e0ng",',
  '    emoji: "\uD83C\uDFA4",',
  '    summary: "Ph\u00e1t \u00e2m sai khi\u1ebfn ng\u01b0\u1eddi nghe kh\u00f4ng hi\u1ec3u. H\u01b0\u1edbng d\u1eabn t\u1eebng b\u01b0\u1edbc \u0111\u1ec3 ph\u00e1t \u00e2m chu\u1ea9n.",',
  '    tags: ["Ph\u00e1t \u00e2m", "Ph\u01b0\u01a1ng ph\u00e1p"],',
  '    date: "04/06/2026",',
  '    readingTime: "6 ph\u00fat \u0111\u1ecdc",',
  '    content: [',
  '      { type: "paragraph", text: "Ph\u00e1t \u00e2m t\u1ed1t kh\u00f4ng c\u00f3 ngh\u0129a l\u00e0 gi\u1ecdng M\u1ef9 ho\u00e0n h\u1ea3o. Ph\u00e1t \u00e2m t\u1ed1t c\u00f3 ngh\u0129a l\u00e0 ng\u01b0\u1eddi nghe hi\u1ec3u b\u1ea1n ngay l\u1ea7n \u0111\u1ea7u." },',
  '      { type: "heading", text: "L\u1ed7i 1 \u2014 Nu\u1ed1t \u00e2m cu\u1ed1i" },',
  '      { type: "compare", left: "I need your hel", right: "I need your help", leftLabel: "\u274c Nu\u1ed1t \u00e2m /p/", rightLabel: "\u2705 R\u00f5 \u00e2m cu\u1ed1i" },',
  '      { type: "list", items: ["/p/ cu\u1ed1i: stop, help \u2014 m\u00f4i ch\u1ea1m nhau.", "/t/ cu\u1ed1i: cat, not \u2014 l\u01b0\u1ee1i ch\u1ea1m r\u0103ng tr\u00ean.", "/k/ cu\u1ed1i: back, work \u2014 c\u1ed5 h\u1ecång \u0111\u00f3ng."] },',
  '      { type: "heading", text: "L\u1ed7i 2 \u2014 \u00c2m /th/" },',
  '      { type: "vocab", word: "/th/ kh\u00f4ng thanh", meaning: "L\u01b0\u1ee1i gi\u1eefa 2 h\u00e0ng r\u0103ng, th\u1ed5i h\u01a1i", example: "think, three, thank, thin" },',
  '      { type: "vocab", word: "/th/ c\u00f3 thanh", meaning: "Gi\u1ed1ng tr\u00ean nh\u01b0ng d\u00e2y thanh rung", example: "this, that, the, them" },',
  '      { type: "heading", text: "L\u1ed7i 3 \u2014 Sai tr\u1ecdng \u00e2m" },',
  '      { type: "compare", left: "pho-TO-graph", right: "PHO-to-graph", leftLabel: "\u274c Sai", rightLabel: "\u2705 \u0110\u00fang" },',
  '      { type: "heading", text: "L\u1ed7i 4 \u2014 Kh\u00f4ng n\u1ed1i \u00e2m" },',
  '      { type: "vocab", word: "N\u1ed1i \u00e2m", meaning: "Ph\u1ee5 \u00e2m cu\u1ed1i + nguy\u00ean \u00e2m \u0111\u1ea7u n\u1ed1i li\u1ec1n", example: "turn off \u2192 tur-NOFF | pick up \u2192 pi-CUP" },',
  '      { type: "heading", text: "L\u1ecbch luy\u1ec7n m\u1ed7i ng\u00e0y" },',
  '      { type: "list", items: ["Ph\u00fat 1-2: \u0110\u1ecdc to 10 t\u1eeb c\u00f3 \u00e2m cu\u1ed1i.", "Ph\u00fat 3-4: Luy\u1ec7n /th/ \u2014 5 c\u00e2u c\u00f3 the, think.", "Ph\u00fat 5-6: Shadowing 1 \u0111o\u1ea1n phim.", "Ph\u00fat 7-10: Ghi \u00e2m b\u1ea3n th\u00e2n, nghe l\u1ea1i."] },',
  '      { type: "callout", emoji: "\uD83C\uDF1F", text: "C\u00f4ng c\u1ee5 mi\u1ec5n ph\u00ed: ELSA Speak, YouGlish, Forvo." },',
  '      { type: "quote", text: "Ph\u00e1t \u00e2m kh\u00f4ng c\u1ea7n ho\u00e0n h\u1ea3o \u2014 c\u1ea7n \u0111\u1ee7 r\u00f5 \u0111\u1ec3 ng\u01b0\u1eddi ta hi\u1ec3u ngay." }',
  '    ]',
  '  }',
];

const newPost = lines.join('\n');
c = c.replace('];', newPost + '\n];');
fs.writeFileSync('data/blog.ts', c, 'utf8');
console.log('Done:', fs.readFileSync('data/blog.ts','utf8').includes('cach-phat-am'));
