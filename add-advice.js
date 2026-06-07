const fs = require("fs");
const p = "C:/Users/Nguyen Quan Huy/englishstart/app/learn/toeic/page.tsx";
let c = fs.readFileSync(p, "utf8");

const anchor = `      </div>\n    </div>\n  );\n}`;

const newSection = `
        {/* TOEIC Advice */}
        <div className="space-y-4">
          <h2 className="font-display text-xl font-black text-sky-900">\u{1F4CB} L\u1eddi khuy\u00ean thi TOEIC t\u1eeb A \u2192 Z</h2>

          {[
            {
              icon: "\u{1F4DA}",
              title: "1. Hi\u1ec3u r\u00f5 c\u1ea5u tr\u00fac \u0111\u1ec1 thi",
              color: "from-sky-50 to-blue-50 border-sky-200",
              titleColor: "text-sky-800",
              textColor: "text-sky-700",
              items: [
                "TOEIC g\u1ed3m 2 ph\u1ea7n: Listening (100 c\u00e2u) v\u00e0 Reading (100 c\u00e2u), t\u1ed5ng 200 c\u00e2u trong 120 ph\u00fat.",
                "Listening: Part 1 (Photographs), Part 2 (Question-Response), Part 3 (Conversations), Part 4 (Talks).",
                "Reading: Part 5 (Incomplete Sentences), Part 6 (Text Completion), Part 7 (Reading Comprehension).",
                "M\u1ed7i c\u00e2u tr\u1ea3 l\u1eddi \u0111\u00fang kho\u1ea3ng 5 \u0111i\u1ec3m. \u0110i\u1ec3m t\u1ed1i \u0111a 990.",
              ],
            },
            {
              icon: "\u23F0",
              title: "2. Chi\u1ebfn l\u01b0\u1ee3c qu\u1ea3n l\u00fd th\u1eddi gian",
              color: "from-indigo-50 to-violet-50 border-indigo-200",
              titleColor: "text-indigo-800",
              textColor: "text-indigo-700",
              items: [
                "Part 5: trung b\u00ecnh 20 gi\u00e2y/c\u00e2u \u2014 kh\u00f4ng \u0111\u01b0\u1ee3c d\u1eebng l\u00e2u, \u0111o\u00e1n v\u00e0 \u0111i ti\u1ebfp.",
                "Part 7: \u0111\u1ecdc c\u00e2u h\u1ecfi tr\u01b0\u1edbc, sau \u0111\u00f3 m\u1edbi l\u01b0\u1edbt qua b\u00e0i \u0111\u1ec3 t\u00ecm \u0111\u00e1p \u00e1n.",
                "N\u1ebfu kh\u00f4ng ch\u1eafc, \u0111\u00e1nh d\u1ea5u v\u00e0 b\u1ecf qua \u2014 kh\u00f4ng \u0111\u1ec3 m\u1ed9t c\u00e2u \u0103n h\u1ebft th\u1eddi gian.",
                "Lu\u00f4n \u0111i\u1ec1n \u0111\u00e1p \u00e1n d\u00f9 kh\u00f4ng bi\u1ebft \u2014 kh\u00f4ng c\u00f3 \u0111i\u1ec3m tr\u1eeb trong TOEIC.",
              ],
            },
            {
              icon: "\u{1F9E0}",
              title: "3. M\u1eb9o t\u0103ng \u0111i\u1ec3m nhanh",
              color: "from-emerald-50 to-teal-50 border-emerald-200",
              titleColor: "text-emerald-800",
              textColor: "text-emerald-700",
              items: [
                "H\u1ecdc 500 t\u1eeb TOEIC th\u00f4ng d\u1ee5ng tr\u01b0\u1edbc \u2014 ch\u00fang xu\u1ea5t hi\u1ec7n l\u1eb7p \u0111i l\u1eb7p l\u1ea1i trong \u0111\u1ec1.",
                "Part 2 Listening: ch\u00fa \u00fd t\u1eeb WH \u0111\u1ea7u c\u00e2u (Where/When/Who...) \u0111\u1ec3 lo\u1ea1i \u0111\u00e1p \u00e1n sai nhanh.",
                "Part 5 Grammar: nh\u1eadn di\u1ec7n d\u1ea1ng c\u00e2u (t\u1eeb lo\u1ea1i, th\u00ec, m\u1ec7nh \u0111\u1ec1) r\u1ed3i \u0111\u00e1nh \u0111\u00e1p \u00e1n \u0111\u00fang m\u00e0 kh\u00f4ng c\u1ea7n d\u1ecbch.",
                "Nghe Listening m\u1ed7i ng\u00e0y 15 ph\u00fat, \u0111\u1eb7c bi\u1ec7t gi\u1ecdng M\u1ef9 v\u00e0 Anh.",
              ],
            },
            {
              icon: "\u{1F4C5}",
              title: "4. L\u1ed9 tr\u00ecnh 2 th\u00e1ng l\u00ean 450+",
              color: "from-rose-50 to-pink-50 border-rose-200",
              titleColor: "text-rose-800",
              textColor: "text-rose-700",
              items: [
                "Tu\u1ea7n 1\u20132: N\u1ea1p t\u1eeb v\u1ef1ng ch\u1ee7 \u0111\u1ec1 (v\u0103n ph\u00f2ng, du l\u1ecbch, t\u00e0i ch\u00ednh) + nghe Part 1\u20132.",
                "Tu\u1ea7n 3\u20134: Luy\u1ec7n grammar Part 5, l\u00e0m mini test c\u00f3 b\u1ea5m gi\u1edd m\u1ed7i ng\u00e0y.",
                "Tu\u1ea7n 5\u20136: T\u1eadp trung Part 7 \u2014 \u0111\u1ecdc nhanh, t\u00ecm \u00fd ch\u00ednh, tr\u1ea3 l\u1eddi c\u00e2u h\u1ecfi.",
                "Tu\u1ea7n 7\u20138: Gi\u1ea3i \u0111\u1ec1 full 200 c\u00e2u c\u00f3 thi\u1ebfu th\u1eddi gian, r\u00fat kinh nghi\u1ec7m.",
              ],
            },
          ].map((block) => (
            <div key={block.title} className={\`bg-gradient-to-br \${block.color} border-2 rounded-2xl p-5\`}>
              <p className={\`font-black \${block.titleColor} mb-3 text-base\`}>{block.icon} {block.title}</p>
              <ul className="space-y-2">
                {block.items.map((item, i) => (
                  <li key={i} className={\`flex gap-2 text-sm \${block.textColor}\`}>
                    <span className="mt-0.5 flex-shrink-0">\u2713</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`;

c = c.replace(anchor, newSection);
fs.writeFileSync(p, c, "utf8");
console.log("Done!");
