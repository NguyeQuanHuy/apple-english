const fs = require('fs');

function fixFile(path, replacements) {
  let buf = fs.readFileSync(path);
  // Strip BOM neu co
  if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) {
    buf = buf.slice(3);
  }
  let c = buf.toString('utf8');
  for (const [from, to] of replacements) {
    c = c.split(from).join(to);
  }
  fs.writeFileSync(path, c, 'utf8');
  console.log('Done:', path);
}

fixFile('data/extra-lessons.ts', [
  ['So sanh hon - Comparative', 'So s\u00e1nh h\u01a1n \u2014 Comparative'],
  ['So sanh nhat - Superlative', 'So s\u00e1nh nh\u1ea5t \u2014 Superlative'],
  ['Hon, nhat - cach mo ta va so sanh', 'H\u01a1n, nh\u1ea5t \u2014 c\u00e1ch m\u00f4 t\u1ea3 v\u00e0 so s\u00e1nh'],
  ['Thi tiep dien va tuong lai', 'Th\u00ec ti\u1ebfp di\u1ec5n v\u00e0 t\u01b0\u01a1ng lai'],
  ['Dang lam gi? Se lam gi?', '\u0110ang l\u00e0m g\u00ec? S\u1ebd l\u00e0m g\u00ec?'],
  ['Hien tai tiep dien - Present Continuous', 'Hi\u1ec7n t\u1ea1i ti\u1ebfp di\u1ec5n \u2014 Present Continuous'],
  ['Tuong lai don - Simple Future', 'T\u01b0\u01a1ng lai \u0111\u01a1n \u2014 Simple Future'],
  ['Gioi tu va cum dong tu', 'Gi\u1edbi t\u1eeb v\u00e0 c\u1ee5m \u0111\u1ed9ng t\u1eeb'],
  ['Gioi tu noi - Prepositions of Place', 'Gi\u1edbi t\u1eeb n\u01a1i \u2014 Prepositions of Place'],
  ['Gioi tu thoi gian - Prepositions of Time', 'Gi\u1edbi t\u1eeb th\u1eddi gian \u2014 Prepositions of Time'],
  ['Cum dong tu thong dung', 'C\u1ee5m \u0111\u1ed9ng t\u1eeb th\u00f4ng d\u1ee5ng'],
  ['Hoi va tra loi', 'H\u1ecfi v\u00e0 tr\u1ea3 l\u1eddi'],
  ['Cau hoi Yes/No va WH', 'C\u00e2u h\u1ecfi Yes/No v\u00e0 WH'],
  ['Cau hoi duoi - Tag Questions', 'C\u00e2u h\u1ecfi \u0111u\u00f4i \u2014 Tag Questions'],
  ['Phu nhan va dong y', 'Ph\u1ee7 nh\u1eadn v\u00e0 \u0111\u1ed3ng \u00fd'],
  ['Tieng Anh trong cong viec', 'Ti\u1ebfng Anh trong c\u00f4ng vi\u1ec7c'],
  ['Email va tin nhan co ban', 'Email v\u00e0 tin nh\u1eafn c\u01a1 b\u1ea3n'],
  ['Giao tiep hang ngay', 'Giao ti\u1ebfp h\u00e0ng ng\u00e0y'],
  ['Lich su va de nghi', 'L\u1ecbch s\u1ef1 v\u00e0 \u0111\u1ec1 ngh\u1ecb'],
  ['Noi ve so thich', 'N\u00f3i v\u1ec1 s\u1edf th\u00edch'],
  ['Ke ve ban than', 'K\u1ec3 v\u1ec1 b\u1ea3n th\u00e2n'],
  ['Mo ta nguoi va vat', 'M\u00f4 t\u1ea3 ng\u01b0\u1eddi v\u00e0 v\u1eadt'],
]);

fixFile('data/beginner-lessons.ts', [
  ['Khoi dong', 'Kh\u1edfi \u0111\u1ed9ng'],
  ['Lam quen chu cai, chao hoi, so dem', 'L\u00e0m quen ch\u1eef c\u00e1i, ch\u00e0o h\u1ecfi, s\u1ed1 \u0111\u1ebfm'],
  ['Dong tu TO BE', '\u0110\u1ed9ng t\u1eeb TO BE'],
  ['Cau co ban voi am, is, are', 'C\u00e2u c\u01a1 b\u1ea3n v\u1edbi am, is, are'],
  ['Danh tu va Mao tu', 'Danh t\u1eeb v\u00e0 M\u1ea1o t\u1eeb'],
  ['a, an, the va danh tu so nhieu', 'a, an, the v\u00e0 danh t\u1eeb s\u1ed1 nhi\u1ec1u'],
  ['Tinh tu va Trang tu', 'T\u00ednh t\u1eeb v\u00e0 Tr\u1ea1ng t\u1eeb'],
  ['Mo ta mau sac, kich thuoc, cam xuc', 'M\u00f4 t\u1ea3 m\u00e0u s\u1eafc, k\u00edch th\u01b0\u1edbc, c\u1ea3m x\u00fac'],
  ['Hien tai don - Simple Present', 'Hi\u1ec7n t\u1ea1i \u0111\u01a1n \u2014 Simple Present'],
  ['Thoi quen va su that hien tai', 'Th\u00f3i quen v\u00e0 s\u1ef1 th\u1eadt hi\u1ec7n t\u1ea1i'],
  ['Qua khu don - Past Simple', 'Qu\u00e1 kh\u1ee9 \u0111\u01a1n \u2014 Past Simple'],
  ['Ke lai viec da xay ra', 'K\u1ec3 l\u1ea1i vi\u1ec7c \u0111\u00e3 x\u1ea3y ra'],
  ['Tuong lai voi will va going to', 'T\u01b0\u01a1ng lai v\u1edbi will v\u00e0 going to'],
  ['Noi ve ke hoach va du doan', 'N\u00f3i v\u1ec1 k\u1ebf ho\u1ea1ch v\u00e0 d\u1ef1 \u0111o\u00e1n'],
]);
