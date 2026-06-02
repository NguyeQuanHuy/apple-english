// ──────────────────────────────────────────────────────────────────
// Blog posts — written by hand, structured content (no MDX needed)
// 10 posts across 6 categories, each ~600-900 words VI + EN summary
// ──────────────────────────────────────────────────────────────────

export type Block =
  | { kind: "p"; text: string }
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "quote"; text: string; cite?: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | { kind: "callout"; tone: "tip" | "warn" | "info"; title?: string; text: string }
  | { kind: "vocab"; rows: { en: string; vi: string; note?: string }[] }
  | { kind: "compare"; left: { label: string; lines: string[] }; right: { label: string; lines: string[] } };

export type EnglishSummary = {
  level: "A2" | "B1";
  paragraphs: string[];
  keyWords: { en: string; vi: string }[];
};

export type BlogCategory =
  | "pronunciation"
  | "grammar"
  | "vocabulary"
  | "culture"
  | "idioms"
  | "work";

export type BlogPost = {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  readingMinutes: number;
  publishedAt: string; // ISO date
  content: Block[];
  englishSummary: EnglishSummary;
};

export const BLOG_CATEGORIES: { id: BlogCategory; label: string; emoji: string; color: string }[] = [
  { id: "pronunciation", label: "Phát âm", emoji: "🗣️", color: "ember" },
  { id: "grammar", label: "Ngữ pháp", emoji: "📚", color: "teal" },
  { id: "vocabulary", label: "Mẹo nhớ từ", emoji: "🧠", color: "gold" },
  { id: "culture", label: "Văn hoá", emoji: "🌍", color: "rose" },
  { id: "idioms", label: "Idiom & Slang", emoji: "💬", color: "teal" },
  { id: "work", label: "Công việc", emoji: "💼", color: "ember" },
];

export const BLOG_POSTS: BlogPost[] = [
  // ═══════════════════════════════════════════════════════════════
  // 1. CULTURE
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "tai-sao-anh-my-noi-khac-nhau",
    category: "culture",
    title: "Tại sao người Anh và người Mỹ nói tiếng Anh khác nhau?",
    excerpt: "Cùng một ngôn ngữ, nhưng Anh và Mỹ phát âm, viết, dùng từ khác nhau. Câu chuyện bắt đầu từ thế kỷ 17.",
    readingMinutes: 6,
    publishedAt: "2026-05-20",
    content: [
      { kind: "p", text: "Nếu bạn từng xem phim Anh rồi xem phim Mỹ, hẳn bạn đã thắc mắc: tại sao cùng nói tiếng Anh mà nghe khác nhau đến vậy? Người Mỹ nói 'water' nghe như 'wa-dơ', trong khi người Anh phát âm rõ 't'. Người Mỹ viết 'color', người Anh viết 'colour'. Câu chuyện này thú vị hơn bạn nghĩ." },

      { kind: "h2", text: "Khởi đầu: Người Anh sang Mỹ thế kỷ 17" },
      { kind: "p", text: "Năm 1607, những người Anh đầu tiên đặt chân lên đất Mỹ. Họ mang theo tiếng Anh thời đó — mà thật bất ngờ, cách họ nói lúc đó GẦN GIỐNG tiếng Anh-Mỹ ngày nay hơn là tiếng Anh-Anh hiện đại." },
      { kind: "callout", tone: "info", title: "Điều ít ai biết", text: "Tiếng Anh-Mỹ giữ lại nhiều nét cổ. Cách phát âm chữ 'r' rõ ràng (như 'car' /kɑːr/) là cách người Anh nói vào thế kỷ 17. Chính người Anh sau này mới bỏ âm 'r' đi (gọi là 'non-rhotic')." },

      { kind: "h2", text: "Vậy tiếng Anh-Anh thay đổi vì sao?" },
      { kind: "p", text: "Vào cuối thế kỷ 18 và 19, tầng lớp thượng lưu Anh bắt đầu phát triển một cách nói mới gọi là 'Received Pronunciation' (RP) — hay còn gọi là 'BBC English'. Họ bỏ âm 'r' cuối từ, kéo dài nguyên âm, và phát âm rõ 't' giữa từ. Cách nói này được xem là sang trọng và được dạy ở trường tư." },
      { kind: "p", text: "Trong khi đó ở Mỹ, không có 'tầng lớp thượng lưu trung tâm' áp đặt chuẩn nào cả. Người Mỹ tiếp tục giữ cách nói gốc, pha trộn với các ngôn ngữ khác (Đức, Hà Lan, Tây Ban Nha) tuỳ vùng." },

      { kind: "h2", text: "Noah Webster — Người đổi cách viết tiếng Anh-Mỹ" },
      { kind: "p", text: "Năm 1828, Noah Webster (cha đẻ của từ điển Webster nổi tiếng) cố tình đơn giản hoá cách viết tiếng Anh để 'tiếng Anh-Mỹ độc lập với tiếng Anh-Anh'. Đó là lý do bạn thấy những khác biệt sau:" },
      { kind: "compare",
        left: { label: "🇬🇧 Anh-Anh", lines: ["colour", "centre", "organise", "travelled", "programme"] },
        right: { label: "🇺🇸 Anh-Mỹ", lines: ["color", "center", "organize", "traveled", "program"] }
      },
      { kind: "p", text: "Webster cho rằng tiếng Anh-Mỹ nên phản ánh cách phát âm thực tế. Ví dụ, không ai phát âm 'u' trong 'colour' nên bỏ đi cho gọn." },

      { kind: "h2", text: "Từ vựng — khác đến không ngờ" },
      { kind: "vocab", rows: [
        { en: "🇬🇧 lift", vi: "🇺🇸 elevator (thang máy)" },
        { en: "🇬🇧 lorry", vi: "🇺🇸 truck (xe tải)" },
        { en: "🇬🇧 flat", vi: "🇺🇸 apartment (căn hộ)" },
        { en: "🇬🇧 chips", vi: "🇺🇸 fries (khoai tây chiên)" },
        { en: "🇬🇧 biscuit", vi: "🇺🇸 cookie (bánh quy)" },
        { en: "🇬🇧 petrol", vi: "🇺🇸 gas (xăng)" },
        { en: "🇬🇧 holiday", vi: "🇺🇸 vacation (kỳ nghỉ)" },
        { en: "🇬🇧 football", vi: "🇺🇸 soccer (bóng đá)" },
      ] },

      { kind: "h2", text: "Vậy người Việt nên học cái nào?" },
      { kind: "p", text: "Câu trả lời thực dụng: học một cách thôi, đừng pha trộn. Lý do:" },
      { kind: "list", items: [
        "Tiếng Anh-Mỹ phổ biến hơn trong phim ảnh, công nghệ, kinh doanh quốc tế. Hầu hết phim Hollywood, YouTube, podcast đều dùng giọng Mỹ.",
        "Tiếng Anh-Anh phổ biến trong giáo dục cao cấp (Oxford, Cambridge), trong Liên Hiệp Quốc, và ở các nước Khối Thịnh vượng chung.",
        "Nếu bạn ở Đức hoặc châu Âu: cả hai đều OK, nhưng giọng Anh-Anh dễ hiểu hơn cho người châu Âu vì họ học giọng đó ở trường.",
      ] },
      { kind: "callout", tone: "tip", title: "Lời khuyên thực tế", text: "Đừng quá lo về accent. Quan trọng nhất là phát âm RÕ RÀNG — người nước ngoài hiểu bạn nói gì. Một người Việt nói tiếng Anh giọng Mỹ rõ ràng vẫn dễ nghe hơn người Việt cố bắt chước giọng Anh nhưng phát âm lẫn lộn." },

      { kind: "h2", text: "Còn các nước khác thì sao?" },
      { kind: "p", text: "Tiếng Anh ở Úc, New Zealand, Nam Phi, Ấn Độ, Singapore... đều có biến thể riêng. Tiếng Anh-Úc gần với Anh-Anh nhưng có giọng đặc trưng. Tiếng Anh-Ấn có ngữ điệu riêng nhưng ngữ pháp chuẩn Anh-Anh. Tiếng Anh ở Singapore (Singlish) trộn nhiều từ tiếng Mã Lai, Trung Quốc, Tamil." },
      { kind: "p", text: "Tóm lại: tiếng Anh là ngôn ngữ toàn cầu, và mỗi vùng đất đều làm nó 'của mình'. Khi bạn nói tiếng Anh với accent Việt, bạn cũng đang thêm một biến thể nữa vào danh sách đó — không có gì phải xấu hổ." },
    ],
    englishSummary: {
      level: "A2",
      paragraphs: [
        "British and American English are different because of history. In 1607, English people went to America. They took their English with them. Over time, the two languages changed in different ways.",
        "American English keeps some old features. For example, Americans say the 'r' sound clearly in words like 'car'. British people in the 1700s also said 'r' clearly, but they stopped later. So American English is closer to old English in this way.",
        "Noah Webster, an American, changed how Americans write. He removed the 'u' in 'colour' to make it 'color'. He wanted American English to be simple and different from British English.",
        "Today, both are correct. Choose one and stick with it. Don't mix them.",
      ],
      keyWords: [
        { en: "pronunciation", vi: "cách phát âm" },
        { en: "spelling", vi: "cách viết" },
        { en: "accent", vi: "giọng" },
        { en: "century", vi: "thế kỷ" },
        { en: "feature", vi: "đặc điểm" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 2. PRONUNCIATION
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "5-loi-phat-am-nguoi-viet-mac-nhieu-nhat",
    category: "pronunciation",
    title: "5 lỗi phát âm người Việt mắc nhiều nhất (và cách sửa)",
    excerpt: "Âm /θ/, âm cuối, l-r, stress sai chỗ... Đây là 5 lỗi gần như mọi người Việt mới học đều mắc.",
    readingMinutes: 7,
    publishedAt: "2026-05-18",
    content: [
      { kind: "p", text: "Người Việt nói tiếng Anh thường bị người bản xứ phát hiện ngay từ câu đầu tiên. Không phải vì sai ngữ pháp — mà vì 5 lỗi phát âm phổ biến này. Tin tốt là: chỉ cần biết và luyện 2 tuần, accent bạn sẽ tốt hơn đáng kể." },

      { kind: "h2", text: "Lỗi 1: Âm /θ/ và /ð/ — 'th' bị thành 't' hoặc 'd'" },
      { kind: "p", text: "Tiếng Việt không có âm /θ/ (âm 'th' trong 'think') hay /ð/ (âm 'th' trong 'this'). Người Việt thường thay bằng 't' hoặc 'd':" },
      { kind: "compare",
        left: { label: "❌ Sai", lines: ["'think' → 'tink'", "'this' → 'dis'", "'three' → 'tree'", "'mother' → 'modder'"] },
        right: { label: "✅ Đúng", lines: ["/θɪŋk/ — lưỡi GIỮA hai răng", "/ðɪs/ — lưỡi giữa răng, có rung", "/θriː/ — lưỡi giữa răng", "/ˈmʌðər/"] }
      },
      { kind: "callout", tone: "tip", title: "Cách luyện 5 phút/ngày", text: "Đứng trước gương, đặt lưỡi GIỮA hai răng cửa rồi thổi hơi — đó là /θ/. Nếu rung dây thanh quản (sờ cổ thấy rung) — đó là /ð/. Tập đọc: thin, thick, thank, think, three, thirty, thirsty." },

      { kind: "h2", text: "Lỗi 2: Nuốt âm cuối — đặc biệt là /s/, /t/, /d/" },
      { kind: "p", text: "Tiếng Việt là ngôn ngữ đơn âm tiết, mỗi từ kết thúc bằng nguyên âm hoặc nasal (m, n, ng). Người Việt khi nói tiếng Anh thường BỎ âm cuối:" },
      { kind: "list", items: [
        "'books' → bị nói thành 'book' (mất /s/ → không biết số ít/số nhiều)",
        "'worked' → 'work' (mất quá khứ)",
        "'cats' → 'cat' (mất /s/)",
        "'first' → 'firs' (mất /t/)",
      ] },
      { kind: "p", text: "Hậu quả: người nghe không biết bạn đang nói thì quá khứ hay hiện tại, số ít hay số nhiều. Câu của bạn mất nghĩa." },
      { kind: "callout", tone: "warn", title: "Cách sửa", text: "Cố ý KÉO DÀI âm cuối khi luyện. Nói 'books-ss', 'worked-d', 'cats-ss' phóng đại. Sau 1-2 tuần não bạn sẽ tự nhớ ra âm cuối." },

      { kind: "h2", text: "Lỗi 3: Nhầm /l/ và /n/" },
      { kind: "p", text: "Người Việt miền Bắc (đặc biệt) hay nhầm 'l' và 'n'. Trong tiếng Anh, sai lỗi này cực kỳ rõ:" },
      { kind: "vocab", rows: [
        { en: "light", vi: "ánh sáng", note: "KHÁC 'night' (đêm)" },
        { en: "lice", vi: "rận", note: "KHÁC 'nice' (đẹp)" },
        { en: "low", vi: "thấp", note: "KHÁC 'no' (không)" },
        { en: "long", vi: "dài", note: "KHÁC ... gần đúng nhưng âm /l/ phải bật" },
      ] },
      { kind: "callout", tone: "tip", text: "/l/ phát âm với đầu lưỡi CHẠM vòm miệng, sau răng cửa trên. /n/ thì lưỡi chạm cùng chỗ nhưng KHÔNG thoát hơi qua miệng, mà qua mũi." },

      { kind: "h2", text: "Lỗi 4: Stress sai chỗ" },
      { kind: "p", text: "Tiếng Việt mỗi từ một âm tiết, stress đều nhau. Tiếng Anh có từ nhiều âm tiết, và NHẤN đúng chỗ rất quan trọng. Nhấn sai = người nghe không hiểu." },
      { kind: "compare",
        left: { label: "❌ Stress sai", lines: ["pho-TO-graph", "AU-stra-LI-a", "im-POR-tant (vẫn ổn)", "RE-cord (động từ)"] },
        right: { label: "✅ Stress đúng", lines: ["PHO-to-graph (n.)", "Aus-TRA-li-a", "im-POR-tant", "re-CORD (động từ ghi)"] }
      },
      { kind: "p", text: "Mẹo: từ 'record' khi là DANH TỪ thì nhấn 're-' (REcord = bản thu); khi là ĐỘNG TỪ thì nhấn 'cord' (reCORD = ghi). Đây là pattern phổ biến với nhiều từ Anh-Anh: present/PREsent, object/OBject..." },

      { kind: "h2", text: "Lỗi 5: Bỏ qua nguyên âm yếu /ə/ (schwa)" },
      { kind: "p", text: "/ə/ là âm phổ biến nhất trong tiếng Anh — âm 'ơ' nhẹ, không stress. Người Việt thường phát âm RÕ mọi nguyên âm, làm câu nghe gượng:" },
      { kind: "vocab", rows: [
        { en: "about", vi: "/əˈbaʊt/ — chữ a đầu KHÔNG đọc 'a-bout' mà đọc 'ơ-baut'" },
        { en: "banana", vi: "/bəˈnænə/ — bə-NAN-nơ, không 'ba-na-na'" },
        { en: "computer", vi: "/kəmˈpjuːtər/ — kơm-PYÚ-tơ" },
        { en: "the (trước phụ âm)", vi: "/ðə/ — 'thơ', không 'thi'" },
      ] },

      { kind: "h2", text: "Tóm lại: lộ trình luyện 2 tuần" },
      { kind: "list", ordered: true, items: [
        "Tuần 1: Mỗi tối 10 phút, đứng trước gương, luyện /θ/, /ð/ với danh sách từ.",
        "Tuần 1: Ghi âm bản thân đọc 1 đoạn ngắn → so với người bản xứ → nghe lại để tự sửa.",
        "Tuần 2: Tập trung vào âm cuối. Đọc bài rồi cố ý kéo dài /s/, /t/, /d/.",
        "Tuần 2: Học stress của 20 từ thường dùng nhất. Tra IPA trên Cambridge Dictionary.",
        "Liên tục: Nghe podcast tiếng Anh nói chậm (BBC Learning English, VOA Learning English).",
      ] },
    ],
    englishSummary: {
      level: "A2",
      paragraphs: [
        "Vietnamese people often make 5 pronunciation mistakes when they speak English. The first is the 'th' sound. There is no 'th' in Vietnamese, so people say 't' or 'd' instead. For 'think', put your tongue between your teeth.",
        "The second mistake is not saying the end of words. In Vietnamese, words are short. In English, the last sound is very important. 'Books' is different from 'book'. Practice saying the final 's', 't', and 'd' clearly.",
        "Other common mistakes are mixing 'l' and 'n', wrong stress, and not using the weak 'schwa' sound. Practice for 10 minutes every day. After 2 weeks, your accent will be better.",
      ],
      keyWords: [
        { en: "mistake", vi: "lỗi" },
        { en: "tongue", vi: "lưỡi" },
        { en: "stress", vi: "trọng âm" },
        { en: "practice", vi: "luyện tập" },
        { en: "improve", vi: "cải thiện" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 3. PRONUNCIATION
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "us-uk-australian-accent",
    category: "pronunciation",
    title: "Accent Mỹ, Anh, Úc — Phân biệt thế nào?",
    excerpt: "Cùng một câu 'Can you dance after class?' — Mỹ, Anh, Úc nói khác hẳn nhau. Cách nhận biết từ một câu duy nhất.",
    readingMinutes: 5,
    publishedAt: "2026-05-15",
    content: [
      { kind: "p", text: "Bạn đã bao giờ xem một bộ phim và không chắc nhân vật là người Anh hay Mỹ chưa? Hoặc gặp một người Úc và tự hỏi 'tại sao giọng họ lạ thế?'. Bài này dạy bạn nghe ra 3 accent chính chỉ qua vài đặc điểm đơn giản." },

      { kind: "h2", text: "Test nhanh: Một câu, ba cách nói" },
      { kind: "p", text: "Câu test kinh điển: 'Can you dance after class?'" },
      { kind: "compare",
        left: { label: "🇺🇸 Mỹ", lines: ["'Can you DANS after KLAS?'", "âm 'a' như 'a' Việt", "âm 'r' rõ ở mọi vị trí", "âm 't' nhẹ /d/ giữa từ"] },
        right: { label: "🇬🇧 Anh-Anh", lines: ["'Can you DAHNS after KLAHS?'", "âm 'a' dài, sâu /ɑː/", "âm 'r' cuối từ bị bỏ", "âm 't' rõ và sắc"] }
      },
      { kind: "p", text: "Còn người Úc sẽ nói 'Can ya DEHNS after KLEHS?' — họ kéo nguyên âm, và 'a' nghe như 'eh' Việt." },

      { kind: "h2", text: "3 dấu hiệu nhận biết Anh-Mỹ" },
      { kind: "list", ordered: true, items: [
        "Âm 'r' cuối từ: Mỹ ĐỌC rõ ('car' /kɑːr/), Anh BỎ ('car' /kɑː/).",
        "Âm 't' giữa từ: Mỹ làm nhẹ thành /d/ ('water' nghe như 'wadder'), Anh giữ /t/ rõ.",
        "Âm 'o' ngắn: Mỹ đọc /ɑː/ ('hot' /hɑːt/), Anh đọc /ɒ/ ('hot' /hɒt/ — gần âm 'o' Việt hơn).",
      ] },

      { kind: "h2", text: "Đặc trưng accent Úc" },
      { kind: "p", text: "Người Úc có 2 đặc điểm rất rõ:" },
      { kind: "list", items: [
        "Họ KÉO DÀI nguyên âm: 'today' nghe gần 'ta-die', 'no' nghe như 'nau'.",
        "Họ lên xuống ngữ điệu mạnh, kể cả ở câu khẳng định — nghe lúc nào cũng như đang hỏi.",
        "Họ rút gọn nhiều từ: 'breakfast' → 'brekkie', 'afternoon' → 'arvo', 'thank you' → 'ta'.",
      ] },

      { kind: "h2", text: "Vậy người Việt nên học accent nào?" },
      { kind: "callout", tone: "tip", title: "Lời khuyên ngắn gọn", text: "Học accent Mỹ. Lý do: 90% tài liệu (phim, YouTube, podcast học tiếng Anh) là Mỹ. Phim Anh-Anh ít hơn nhiều. Sau khi bạn đã thạo Mỹ rồi, học thêm Anh-Anh dễ hơn vì bạn đã có nền tảng." },
      { kind: "p", text: "Trừ khi bạn có mục tiêu cụ thể (làm việc ở Anh, du học UK), thì học Mỹ trước là chiến lược tối ưu." },

      { kind: "h2", text: "Có nên 'bắt chước' accent bản xứ?" },
      { kind: "p", text: "Không cần. Mục tiêu là phát âm CHUẨN — tức là người nghe hiểu rõ — chứ không phải nghe y như Tom Cruise. Người châu Á thành công trong môi trường quốc tế (như Lee Hsien Loong, Sundar Pichai) đều có accent riêng nhưng phát âm CỰC kỳ rõ ràng. Đó mới là điều cần học." },
    ],
    englishSummary: {
      level: "B1",
      paragraphs: [
        "American, British, and Australian English sound different, but the words and grammar are the same. The biggest difference is the 'r' sound at the end of words. Americans pronounce it clearly. British people don't. Australians fall in between.",
        "Another difference is the 't' sound in the middle of words. Americans make it softer, like a 'd'. So 'water' sounds like 'wadder'. British people keep the 't' sharp and clear.",
        "Most students should learn American English first. There are more movies, videos, and podcasts in American English. After you are good at American, learning British is easier.",
      ],
      keyWords: [
        { en: "clear", vi: "rõ ràng" },
        { en: "difference", vi: "sự khác biệt" },
        { en: "middle", vi: "ở giữa" },
        { en: "soft", vi: "nhẹ" },
        { en: "sharp", vi: "sắc, rõ" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 4. GRAMMAR
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "7-loi-ngu-phap-nguoi-viet-hay-mac",
    category: "grammar",
    title: "7 lỗi ngữ pháp người Việt hay mắc (kể cả người học lâu)",
    excerpt: "Thiếu 's' số nhiều, dùng sai 'a/an/the', dịch word-by-word... Đây là 7 lỗi cố thủ ngay cả người học 5 năm vẫn mắc.",
    readingMinutes: 6,
    publishedAt: "2026-05-12",
    content: [
      { kind: "p", text: "Có những lỗi ngữ pháp đặc trưng đến mức người Anh-Mỹ nghe 1 câu là biết bạn người Việt. Đa số là vì tiếng Việt và tiếng Anh khác nhau ở những điểm rất căn bản. Cùng xem 7 lỗi phổ biến nhất:" },

      { kind: "h2", text: "Lỗi 1: Quên 's' số nhiều" },
      { kind: "p", text: "Tiếng Việt không có số nhiều ('1 con mèo' và '5 con mèo' đều dùng 'mèo'). Tiếng Anh BUỘC phải có 's':" },
      { kind: "compare",
        left: { label: "❌ Sai", lines: ["I have 3 book.", "She has many friend.", "I see two cat."] },
        right: { label: "✅ Đúng", lines: ["I have 3 books.", "She has many friends.", "I see two cats."] }
      },

      { kind: "h2", text: "Lỗi 2: Nhầm a / an / the" },
      { kind: "p", text: "Tiếng Việt không có mạo từ. Tiếng Anh có 3 loại, dùng sai là sai cả nghĩa:" },
      { kind: "list", items: [
        "'a' — đứng trước phụ âm: a book, a cat, a university (vì 'u' đọc /juː/, phụ âm)",
        "'an' — đứng trước nguyên âm: an apple, an hour (vì 'h' câm), an MBA",
        "'the' — khi cả hai người nói/nghe đều biết đối tượng cụ thể: 'Close the door' (cánh cửa này, không phải cánh cửa nào)",
      ] },
      { kind: "callout", tone: "tip", text: "Mẹo: nói chung chung dùng 'a/an' lần đầu, lần sau nhắc lại dùng 'the'. Ví dụ: 'I saw a dog yesterday. The dog was brown.'" },

      { kind: "h2", text: "Lỗi 3: Quên 's' ở động từ ngôi thứ 3 số ít" },
      { kind: "p", text: "He/She/It → động từ THÊM 's'. Lỗi này phổ biến đến mức ngay người TOEIC 700 cũng vẫn mắc khi nói nhanh." },
      { kind: "compare",
        left: { label: "❌ Sai", lines: ["He work in Berlin.", "She speak English.", "My mom cook every day."] },
        right: { label: "✅ Đúng", lines: ["He works in Berlin.", "She speaks English.", "My mom cooks every day."] }
      },

      { kind: "h2", text: "Lỗi 4: Dịch word-by-word từ tiếng Việt" },
      { kind: "p", text: "Tiếng Việt có cấu trúc khác hẳn tiếng Anh. Dịch nguyên xi sẽ thành câu sai:" },
      { kind: "vocab", rows: [
        { en: "❌ I very like coffee.", vi: "(dịch từ 'Tôi rất thích cà phê')", note: "✅ I really like coffee. / I like coffee very much." },
        { en: "❌ My English is not good.", vi: "(thực ra OK, nhưng người bản xứ ít nói vậy)", note: "✅ I'm not very good at English." },
        { en: "❌ I'm boring.", vi: "(dịch từ 'Tôi đang chán' - sai nghĩa)", note: "✅ I'm bored. ('boring' = bản thân tôi đáng chán)" },
      ] },

      { kind: "h2", text: "Lỗi 5: Nhầm 'do' và 'make'" },
      { kind: "p", text: "Tiếng Việt cả hai đều là 'làm'. Tiếng Anh khác nhau:" },
      { kind: "list", items: [
        "DO — công việc, nhiệm vụ trừu tượng: do homework, do business, do exercise, do my best",
        "MAKE — tạo ra, sản xuất, kết quả cụ thể: make a cake, make money, make a decision, make a mistake",
      ] },

      { kind: "h2", text: "Lỗi 6: Dùng 'how about you' khi nên dùng 'and you'" },
      { kind: "p", text: "Cả hai đều dịch 'còn bạn?' nhưng dùng khác nhau:" },
      { kind: "list", items: [
        "'And you?' — sau câu hỏi giống nhau: 'I'm fine. And you?'",
        "'How about you?' — gợi ý thêm hoặc hỏi kế hoạch: 'I'm going to the beach. How about you?'",
      ] },

      { kind: "h2", text: "Lỗi 7: Câu hỏi không đảo trợ động từ" },
      { kind: "p", text: "Tiếng Việt hỏi chỉ thêm 'không?' cuối câu. Tiếng Anh phải ĐẢO trợ động từ lên đầu:" },
      { kind: "compare",
        left: { label: "❌ Sai", lines: ["You are tired?", "She has a car?", "He likes pho?"] },
        right: { label: "✅ Đúng", lines: ["Are you tired?", "Does she have a car?", "Does he like pho?"] }
      },
      { kind: "callout", tone: "warn", title: "Lưu ý", text: "Trong giao tiếp thân mật ở Mỹ, người ta CÓ nói 'You are tired?' (lên giọng cuối) — nhưng đó là câu hỏi 'xác nhận' (kiểu 'Mày mệt à?'). Trong viết, kiểm tra, công việc — luôn dùng cấu trúc đảo chuẩn." },
    ],
    englishSummary: {
      level: "A2",
      paragraphs: [
        "Vietnamese students often make grammar mistakes in English because Vietnamese is very different. The most common mistakes are: forgetting 's' for plural nouns, missing 's' on verbs with he/she/it, and confusing 'a', 'an', and 'the'.",
        "Another mistake is translating word-by-word. For example, 'Tôi rất thích cà phê' should not be 'I very like coffee'. The correct way is 'I really like coffee' or 'I like coffee very much'.",
        "Practice these rules until they become natural. Read English sentences out loud. Listen to how native speakers form questions and use 'a' or 'the'.",
      ],
      keyWords: [
        { en: "plural", vi: "số nhiều" },
        { en: "article", vi: "mạo từ (a/an/the)" },
        { en: "translate", vi: "dịch" },
        { en: "natural", vi: "tự nhiên" },
        { en: "rule", vi: "quy tắc" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 5. VOCABULARY
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "cach-nho-100-tu-vung-tuan",
    category: "vocabulary",
    title: "Cách nhớ 100 từ vựng mỗi tuần mà không quên — Spaced Repetition",
    excerpt: "Bí mật của việc học từ vựng không phải là học nhiều, mà là ÔN lại ĐÚNG lúc não sắp quên.",
    readingMinutes: 5,
    publishedAt: "2026-05-10",
    content: [
      { kind: "p", text: "Bạn từng học 30 từ vựng trong một buổi, sang ngày hôm sau chỉ nhớ 5 từ? Đó không phải lỗi của bạn — đó là cách bộ não hoạt động. Nhưng có một phương pháp khoa học giúp bạn nhớ lâu gấp 10 lần: Spaced Repetition." },

      { kind: "h2", text: "Đường cong quên của Ebbinghaus" },
      { kind: "p", text: "Năm 1885, nhà tâm lý học người Đức Hermann Ebbinghaus phát hiện ra một quy luật: sau khi học, chúng ta QUÊN theo đường cong. Sau 1 giờ → quên 50%. Sau 1 ngày → quên 70%. Sau 1 tuần → quên 90%." },
      { kind: "callout", tone: "info", title: "Nghĩa là gì?", text: "Nếu hôm nay bạn học 100 từ và không ôn lại, tuần sau bạn chỉ còn nhớ 10 từ. Học nhiều không bằng học SMART." },

      { kind: "h2", text: "Spaced Repetition — Ôn lại ĐÚNG lúc" },
      { kind: "p", text: "Bí mật: ôn lại NGAY TRƯỚC khi bạn sắp quên. Mỗi lần ôn thành công, khoảng cách giữa các lần ôn TĂNG GẤP ĐÔI. Đây là lịch ôn chuẩn:" },
      { kind: "list", ordered: true, items: [
        "Lần 1: học từ mới (ngày 0)",
        "Lần 2: ôn sau 1 ngày",
        "Lần 3: ôn sau 3 ngày",
        "Lần 4: ôn sau 1 tuần",
        "Lần 5: ôn sau 2 tuần",
        "Lần 6: ôn sau 1 tháng → vào trí nhớ dài hạn",
      ] },
      { kind: "p", text: "Sau 6 lần ôn theo lịch này, từ đó GẦN NHƯ không bao giờ quên." },

      { kind: "h2", text: "Cách áp dụng không cần app" },
      { kind: "p", text: "Bạn không cần Anki hay app phức tạp. Cách đơn giản nhất là dùng bộ flashcard giấy + sổ tay:" },
      { kind: "list", ordered: true, items: [
        "Viết từ mới vào flashcard: mặt trước tiếng Anh + IPA, mặt sau tiếng Việt + câu ví dụ.",
        "Mỗi ngày học 10 từ mới (15 phút).",
        "Mỗi ngày ôn lại flashcard cũ (15 phút). Từ nào nhớ ngay → để khoảng cách dài hơn. Từ nào quên → đưa về đầu hàng đợi.",
        "Tổng cộng: 30 phút/ngày. Mỗi tuần bạn học được 70 từ MỚI + ôn được 200+ từ cũ.",
      ] },

      { kind: "h2", text: "Mẹo nhớ từ vựng nhanh hơn" },
      { kind: "h3", text: "1. Học cụm, đừng học từ rời" },
      { kind: "p", text: "Thay vì học 'make' → học 'make a decision', 'make money', 'make a mistake'. Não nhớ ngữ cảnh tốt hơn nhớ từ đơn lẻ." },

      { kind: "h3", text: "2. Liên tưởng hình ảnh" },
      { kind: "p", text: "Từ 'ambitious' (đầy tham vọng) — tưởng tượng một người leo lên đỉnh núi cắm cờ. Hình ảnh + cảm xúc nhớ gấp 10 lần ghi nhớ khô khan." },

      { kind: "h3", text: "3. Dùng từ ngay trong ngày" },
      { kind: "p", text: "Học xong 'devastating' → viết 1 status, gửi 1 tin nhắn, hoặc kể với bạn 1 câu dùng từ đó. Sử dụng = nhớ." },

      { kind: "h3", text: "4. Học từ chủ đề bạn quan tâm" },
      { kind: "p", text: "Bạn yêu bóng đá → học từ vựng bóng đá tiếng Anh. Bạn làm IT → học vocab công nghệ. Não nhớ tốt hơn khi nội dung có ý nghĩa với bạn." },

      { kind: "h2", text: "Sai lầm cần tránh" },
      { kind: "callout", tone: "warn", title: "Đừng làm những điều này", text: "❌ Học 100 từ trong 1 buổi rồi nghỉ tuần\n❌ Học từ bằng cách chép 10 lần (gần như vô dụng)\n❌ Học từ vựng tách rời khỏi ngữ cảnh\n❌ Học từ không bao giờ dùng (như 'serendipity' khi A2)" },

      { kind: "p", text: "Mỗi ngày 30 phút, đều đặn 3 tháng, bạn sẽ có vốn từ A2 đầy đủ. Đều đặn quan trọng hơn số lượng nhiều." },
    ],
    englishSummary: {
      level: "B1",
      paragraphs: [
        "Most people study many new words in one day and then forget them quickly. This is normal — the brain works that way. But there is a better method called 'spaced repetition'.",
        "The idea is simple: review words at the right time, just before you forget them. Study a new word today. Review it tomorrow. Then in 3 days. Then in 1 week. Each time, the gap gets longer.",
        "After 6 reviews following this schedule, you will remember the word for a long time. You don't need a special app. A small notebook with flashcards is enough. Study 10 new words per day, and review old words. After 3 months, you will know 700+ words.",
      ],
      keyWords: [
        { en: "review", vi: "ôn lại" },
        { en: "forget", vi: "quên" },
        { en: "remember", vi: "nhớ" },
        { en: "method", vi: "phương pháp" },
        { en: "regularly", vi: "đều đặn" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 6. VOCABULARY
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "hoc-tieng-anh-qua-phim",
    category: "vocabulary",
    title: "Học tiếng Anh qua phim — Nên xem phim nào và xem thế nào?",
    excerpt: "Xem phim KHÔNG TỰ ĐỘNG giúp bạn giỏi tiếng Anh. Cách xem mới là điều quan trọng.",
    readingMinutes: 4,
    publishedAt: "2026-05-08",
    content: [
      { kind: "p", text: "Mọi người đều nói 'xem phim Mỹ để học tiếng Anh'. Nhưng nếu bạn ngồi 100 giờ xem Netflix mà không tiến bộ, đó là vì bạn xem sai cách. Phim chỉ có ích nếu bạn biết cách KHAI THÁC nó." },

      { kind: "h2", text: "Phim phù hợp theo trình độ" },
      { kind: "vocab", rows: [
        { en: "A1-A2 (mới bắt đầu)", vi: "Phim hoạt hình cho trẻ em", note: "Bluey, Peppa Pig, Sesame Street — câu ngắn, từ dễ" },
        { en: "A2-B1 (cơ bản)", vi: "Sitcom đời thường", note: "Friends, How I Met Your Mother — đời thường, từ phổ thông" },
        { en: "B1-B2 (trung cấp)", vi: "Phim dài và phim tài liệu", note: "Forrest Gump, The Office (US), David Attenborough docs" },
        { en: "B2+ (khá)", vi: "Phim hành động, thriller, fantasy", note: "Marvel, Game of Thrones — accent nhiều, slang nhiều" },
      ] },

      { kind: "h2", text: "Quy trình xem 4 bước hiệu quả" },
      { kind: "list", ordered: true, items: [
        "Lần 1: Xem cả tập với phụ đề TIẾNG VIỆT — hiểu nội dung trước.",
        "Lần 2: Xem lại với phụ đề TIẾNG ANH — nghe và đọc song song.",
        "Lần 3: Xem KHÔNG phụ đề — thử nghe trần.",
        "Lần 4: Tua lại các đoạn khó, dừng, lặp lại câu thoại của diễn viên.",
      ] },
      { kind: "callout", tone: "tip", title: "Mẹo quan trọng", text: "Chỉ làm bước 1-2 với mỗi tập nếu bạn A1-A2. Bước 3-4 dành cho B1 trở lên. Đừng ép mình quá sớm." },

      { kind: "h2", text: "Học từ vựng từ phim" },
      { kind: "p", text: "Mỗi tập 25 phút sitcom có khoảng 200 từ không trùng lặp. Đừng cố nhớ hết. Chọn 5-10 từ thực dụng nhất rồi viết vào sổ:" },
      { kind: "list", items: [
        "Từ bạn nghe nhiều LẦN trong tập (chắc là từ phổ biến)",
        "Từ có cảm xúc / thú vị (dễ nhớ)",
        "Từ phục vụ tình huống bạn hay gặp (đi làm, hẹn hò, ăn uống...)",
      ] },

      { kind: "h2", text: "Cảnh báo: Đừng xem phim làm chính" },
      { kind: "callout", tone: "warn", text: "Xem phim là PHỤ TRỢ cho việc học tiếng Anh, không thay thế. Bạn vẫn cần luyện ngữ pháp, viết, nói. Đừng dùng 'xem phim' để biện minh cho việc lười học." },

      { kind: "p", text: "Người Việt giỏi tiếng Anh nhờ phim thường có 1 đặc điểm: họ xem CÙNG 1 BỘ PHIM 10-20 lần, không phải xem 20 bộ khác nhau mỗi bộ 1 lần. Lặp lại = thấm vào ngôn ngữ." },
    ],
    englishSummary: {
      level: "B1",
      paragraphs: [
        "Watching movies can help you learn English, but only if you do it the right way. Choose movies that match your level. If you are a beginner, start with cartoons. If you are intermediate, try sitcoms like Friends.",
        "Watch each episode 3 or 4 times. First with Vietnamese subtitles to understand the story. Then with English subtitles to read and listen at the same time. Finally without subtitles to test your listening.",
        "Don't try to memorize every word. Pick 5-10 useful words from each episode and write them in your notebook. Watching the same movie many times is better than watching many different movies once.",
      ],
      keyWords: [
        { en: "subtitle", vi: "phụ đề" },
        { en: "episode", vi: "tập (phim)" },
        { en: "memorize", vi: "ghi nhớ" },
        { en: "notebook", vi: "sổ tay" },
        { en: "repeat", vi: "lặp lại" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 7. IDIOMS
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "10-idiom-nguoi-ban-xu-hay-dung",
    category: "idioms",
    title: "10 idiom tiếng Anh người bản xứ dùng hàng ngày",
    excerpt: "'Break a leg', 'piece of cake', 'spill the beans'... — học để hiểu phim, hiểu người Mỹ, và không bị bối rối khi nghe.",
    readingMinutes: 5,
    publishedAt: "2026-05-05",
    content: [
      { kind: "p", text: "Idiom là cụm từ mà NGHĨA KHÔNG ĐOÁN ĐƯỢC từ các từ riêng lẻ. 'Break a leg' không phải 'gãy chân' — mà là 'chúc may mắn'. Người bản xứ dùng idiom liên tục trong giao tiếp. Học 10 idiom này, bạn sẽ hiểu phim tốt hơn ngay." },

      { kind: "h2", text: "1. Break a leg" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Chúc may mắn (đặc biệt trước khi biểu diễn, phỏng vấn, thi đấu)" },
      { kind: "p", text: "Ví dụ: 'Big interview tomorrow? Break a leg!' (Phỏng vấn lớn ngày mai à? Chúc may mắn!)" },
      { kind: "p", text: "Tại sao nói 'gãy chân' lại là may mắn? Theo niềm tin xưa, nếu chúc 'good luck' thẳng thì sẽ xui. Nên người diễn kịch chúc ngược lại cho an toàn." },

      { kind: "h2", text: "2. Piece of cake" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Dễ như ăn bánh — quá dễ" },
      { kind: "p", text: "Ví dụ: 'Did you pass the test?' — 'Yeah, piece of cake.' (Qua bài kiểm tra không? — Có, dễ ợt.)" },

      { kind: "h2", text: "3. Hit the books" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Bắt đầu học chăm" },
      { kind: "p", text: "Ví dụ: 'I have finals next week. Time to hit the books.' (Tôi có thi cuối kỳ tuần sau. Đến giờ học rồi.)" },

      { kind: "h2", text: "4. Spill the beans" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Tiết lộ bí mật" },
      { kind: "p", text: "Ví dụ: 'Come on, spill the beans! Who's your new girlfriend?' (Thôi nào, kể đi! Bạn gái mới của cậu là ai?)" },

      { kind: "h2", text: "5. Under the weather" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Không khoẻ, ốm nhẹ" },
      { kind: "p", text: "Ví dụ: 'Sorry, I can't come today. I'm feeling under the weather.' (Xin lỗi, hôm nay tôi không đến được. Tôi hơi ốm.)" },

      { kind: "h2", text: "6. Cost an arm and a leg" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Đắt khủng khiếp" },
      { kind: "p", text: "Ví dụ: 'My new iPhone cost an arm and a leg!' (iPhone mới của tôi đắt phát điên!)" },

      { kind: "h2", text: "7. Once in a blue moon" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Cực kỳ hiếm khi" },
      { kind: "p", text: "Ví dụ: 'I only see my cousin once in a blue moon — maybe twice a year.' (Tôi chỉ gặp anh họ thi thoảng — chắc 2 lần/năm.)" },

      { kind: "h2", text: "8. Hit the nail on the head" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Nói ĐÚNG trọng tâm, đúng điểm" },
      { kind: "p", text: "Ví dụ: 'You hit the nail on the head — that's exactly the problem!' (Bạn nói đúng chóc rồi — đó chính xác là vấn đề!)" },

      { kind: "h2", text: "9. Pull someone's leg" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Trêu chọc, đùa ai đó" },
      { kind: "p", text: "Ví dụ: 'Are you serious or are you pulling my leg?' (Cậu nghiêm túc hay đang trêu tôi vậy?)" },

      { kind: "h2", text: "10. Bite the bullet" },
      { kind: "callout", tone: "info", title: "Nghĩa", text: "Chấp nhận làm điều khó / khó chịu" },
      { kind: "p", text: "Ví dụ: 'I hate going to the dentist, but I need to bite the bullet and book an appointment.' (Tôi ghét đi nha sĩ, nhưng phải cắn răng đặt lịch thôi.)" },

      { kind: "h2", text: "Lời khuyên dùng idiom" },
      { kind: "callout", tone: "warn", title: "Cẩn thận", text: "Idiom là vũ khí 2 lưỡi. Dùng đúng → bạn nghe tự nhiên như người bản xứ. Dùng sai → người nghe bối rối hoặc cười bạn. Quy tắc: nếu KHÔNG chắc 100%, đừng dùng. Học để HIỂU khi người khác nói là ưu tiên hàng đầu." },
    ],
    englishSummary: {
      level: "B1",
      paragraphs: [
        "Idioms are phrases where the meaning is not clear from the individual words. 'Break a leg' does not mean to break your leg. It means 'good luck'. Native English speakers use idioms all the time in conversation and movies.",
        "Some useful idioms to know: 'piece of cake' means very easy. 'Spill the beans' means to tell a secret. 'Under the weather' means feeling sick. 'Cost an arm and a leg' means very expensive.",
        "Learn idioms to understand native speakers better. But be careful when you use them. If you are not sure, don't use the idiom. It is better to listen and understand first.",
      ],
      keyWords: [
        { en: "idiom", vi: "thành ngữ" },
        { en: "phrase", vi: "cụm từ" },
        { en: "meaning", vi: "nghĩa" },
        { en: "native speaker", vi: "người bản xứ" },
        { en: "secret", vi: "bí mật" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 8. WORK
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "email-tieng-anh-mau-cau",
    category: "work",
    title: "Email tiếng Anh: 7 mẫu câu nên thuộc lòng",
    excerpt: "Viết email tiếng Anh trang trọng không khó — nhớ 7 cụm này là viết được 90% email công việc.",
    readingMinutes: 5,
    publishedAt: "2026-05-02",
    content: [
      { kind: "p", text: "Email tiếng Anh có cấu trúc cố định: chào hỏi → mục đích → nội dung → kết thúc. Học 7 cụm câu sau, bạn sẽ tự tin viết email công việc bằng tiếng Anh." },

      { kind: "h2", text: "1. Mở đầu — Greeting" },
      { kind: "compare",
        left: { label: "Trang trọng", lines: ["Dear Mr. Smith,", "Dear Ms. Johnson,", "Dear Sir/Madam,"] },
        right: { label: "Bán-trang-trọng (phổ biến)", lines: ["Hi John,", "Hello Sarah,", "Hi team,"] }
      },
      { kind: "callout", tone: "tip", text: "Trong đa số môi trường công sở hiện đại, 'Hi [Tên]' là an toàn. Chỉ dùng 'Dear Mr/Ms' khi gửi email rất trang trọng (khách hàng lần đầu, người lớn tuổi, môi trường luật/tài chính)." },

      { kind: "h2", text: "2. Câu mở đầu — Opening" },
      { kind: "list", items: [
        "'I hope this email finds you well.' — Mong bạn vẫn khoẻ. (Mở đầu lịch sự khi không quen)",
        "'Thanks for your email.' — Cảm ơn email của bạn. (Trả lời email người khác)",
        "'I'm writing to ask about...' — Tôi viết để hỏi về... (Đi thẳng vấn đề)",
        "'Just a quick note to...' — Email ngắn để... (Thân mật, đi thẳng vấn đề)",
      ] },

      { kind: "h2", text: "3. Đề nghị / Yêu cầu" },
      { kind: "vocab", rows: [
        { en: "Could you please send me...?", vi: "Bạn vui lòng gửi tôi...?" },
        { en: "I'd appreciate it if you could...", vi: "Tôi rất biết ơn nếu bạn có thể...", note: "Rất lịch sự" },
        { en: "Would it be possible to...?", vi: "Có khả năng... được không?" },
        { en: "Let me know if you have any questions.", vi: "Cho tôi biết nếu bạn có thắc mắc." },
      ] },

      { kind: "h2", text: "4. Báo tin tốt / xấu" },
      { kind: "compare",
        left: { label: "Tin tốt", lines: ["I'm happy to inform you that...", "I'm pleased to share...", "Great news!"] },
        right: { label: "Tin xấu", lines: ["Unfortunately, ...", "I regret to inform you...", "I'm sorry, but..."] }
      },

      { kind: "h2", text: "5. Xin lỗi / Cảm ơn" },
      { kind: "list", items: [
        "'Sorry for the late reply.' — Xin lỗi vì trả lời muộn.",
        "'Apologies for the delay.' — Xin lỗi vì sự chậm trễ. (Trang trọng hơn)",
        "'Thanks for your patience.' — Cảm ơn sự kiên nhẫn.",
        "'I appreciate your help.' — Tôi cảm kích sự giúp đỡ.",
      ] },

      { kind: "h2", text: "6. Đính kèm / Đề cập" },
      { kind: "vocab", rows: [
        { en: "Please find attached...", vi: "Vui lòng xem tệp đính kèm...", note: "Trang trọng. Hiện nay nhiều người dùng 'I've attached...' đơn giản hơn." },
        { en: "I've attached the report.", vi: "Tôi đã đính kèm báo cáo." },
        { en: "As mentioned, ...", vi: "Như đã đề cập, ..." },
        { en: "Per our discussion, ...", vi: "Theo trao đổi của chúng ta, ..." },
      ] },

      { kind: "h2", text: "7. Kết thúc — Closing" },
      { kind: "compare",
        left: { label: "Trang trọng", lines: ["Best regards,", "Kind regards,", "Sincerely,"] },
        right: { label: "Thân mật hơn", lines: ["Best,", "Thanks,", "Cheers,"] }
      },
      { kind: "callout", tone: "tip", title: "Lời khuyên", text: "Trong môi trường tech / startup: 'Best,' hoặc 'Thanks,' là phổ biến nhất. 'Cheers,' phổ biến ở Anh, Úc, một số người Mỹ. Tránh 'Yours truly' — quá cổ điển." },

      { kind: "h2", text: "Mẫu email hoàn chỉnh" },
      { kind: "quote", text: "Hi Sarah,\n\nThanks for your email. I'm writing to follow up on our discussion about the Q4 project.\n\nCould you please send me the budget estimates by Friday? I'd appreciate it if you could also include the timeline for each phase.\n\nLet me know if you have any questions.\n\nBest regards,\nHuy", cite: "Mẫu email công việc thông dụng" },

      { kind: "callout", tone: "warn", title: "Tránh", text: "❌ 'Dear John' (quá trang trọng giữa đồng nghiệp)\n❌ 'Hey John!!' (quá thân mật trong công việc)\n❌ 'Plz reply ASAP' (không lịch sự)\n❌ Viết toàn chữ HOA — bị coi là QUÁT" },
    ],
    englishSummary: {
      level: "B1",
      paragraphs: [
        "Writing professional emails in English follows a simple pattern. Start with a greeting like 'Hi Sarah' or 'Dear Mr. Smith'. Then write a short opening line, your main message, and a closing.",
        "Important phrases to remember: 'Could you please...' for polite requests, 'Thanks for your patience' to thank someone, 'I'm sorry, but...' for bad news, and 'Best regards' or 'Best' to end the email.",
        "Don't worry about being too formal. In most modern workplaces, 'Hi [Name]' and 'Best' are perfect. Just be clear, polite, and keep it short.",
      ],
      keyWords: [
        { en: "greeting", vi: "lời chào" },
        { en: "polite", vi: "lịch sự" },
        { en: "request", vi: "yêu cầu" },
        { en: "formal", vi: "trang trọng" },
        { en: "professional", vi: "chuyên nghiệp" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 9. WORK
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "phong-van-tieng-anh-cau-hoi-kinh-dien",
    category: "work",
    title: "Phỏng vấn tiếng Anh: 5 câu hỏi kinh điển và cách trả lời",
    excerpt: "'Tell me about yourself', 'Why should we hire you', 'What's your weakness'... Đây là cách trả lời thông minh, không sáo rỗng.",
    readingMinutes: 6,
    publishedAt: "2026-04-28",
    content: [
      { kind: "p", text: "Mỗi cuộc phỏng vấn tiếng Anh đều có 5-7 câu hỏi 'kinh điển'. Người phỏng vấn không expect câu trả lời hoàn hảo — họ muốn xem bạn TƯ DUY thế nào và NÓI bằng tiếng Anh có rõ không. Bài này dạy bạn 5 câu cốt lõi." },

      { kind: "h2", text: "1. 'Tell me about yourself.'" },
      { kind: "p", text: "Câu hỏi đầu tiên 100% buổi nào cũng có. Đừng kể tiểu sử dài. Dùng công thức 'PRESENT - PAST - FUTURE':" },
      { kind: "callout", tone: "info", title: "Cấu trúc 60 giây", text: "PRESENT (hiện tại): Bạn đang làm gì? Ở đâu?\nPAST (quá khứ): Kinh nghiệm liên quan đến vị trí này?\nFUTURE (tương lai): Tại sao bạn muốn công việc này?" },
      { kind: "quote", text: "I'm currently a frontend developer at TechCo, where I build React apps for the past 2 years. Before that, I studied Computer Science at university and worked on several open-source projects. I'm now looking for a senior role where I can lead a team and work on bigger products — which is why I'm excited about this position at your company." },

      { kind: "h2", text: "2. 'Why should we hire you?'" },
      { kind: "p", text: "Đây không phải lúc khiêm tốn. Nhưng cũng đừng khoe khoang. Công thức: 3 SKILL CỤ THỂ + 1 ĐIỂM KHÁC BIỆT." },
      { kind: "quote", text: "I think I'd be a strong fit for three reasons. First, I have 3 years of experience with the exact tech stack you use — React, TypeScript, and Node.js. Second, I've shipped products to over 10,000 users, so I understand what works in production. And third, I'm not just a coder — I love mentoring junior developers, which I see your team needs." },

      { kind: "h2", text: "3. 'What's your biggest weakness?'" },
      { kind: "callout", tone: "warn", title: "Đừng làm", text: "❌ 'I'm a perfectionist' — quá sáo rỗng, người phỏng vấn ghét\n❌ 'I work too hard' — không tin\n❌ 'I have no weaknesses' — chắc chắn rớt" },
      { kind: "p", text: "Cách trả lời thông minh: chọn 1 điểm yếu THẬT nhưng KHÔNG ảnh hưởng đến công việc, kèm theo cách bạn đang cải thiện:" },
      { kind: "quote", text: "I tend to focus too much on details, which sometimes slows me down. I've learned to set time limits for tasks and ask for early feedback from my team. It helps me deliver faster while still maintaining quality." },

      { kind: "h2", text: "4. 'Where do you see yourself in 5 years?'" },
      { kind: "p", text: "Họ muốn biết: (1) bạn có ý định ở lâu không, (2) tham vọng của bạn có phù hợp với công ty không. Trả lời CỤ THỂ về kỹ năng/vai trò, KHÔNG cụ thể về chức vụ:" },
      { kind: "quote", text: "In 5 years, I'd like to grow into a senior role where I can lead technical decisions and mentor a small team. I want to deepen my expertise in distributed systems, which is something your team is working on. I'm not in a rush — I value learning over titles." },

      { kind: "h2", text: "5. 'Do you have any questions for us?'" },
      { kind: "callout", tone: "tip", title: "BẮT BUỘC có câu hỏi", text: "Không hỏi = bạn không quan tâm. Chuẩn bị 3 câu trước khi đi phỏng vấn." },
      { kind: "p", text: "Câu hỏi tốt:" },
      { kind: "list", items: [
        "'What does success look like in this role in the first 6 months?'",
        "'What's the biggest challenge the team is facing right now?'",
        "'How would you describe the team culture?'",
        "'What's the next step in the interview process?'",
      ] },
      { kind: "callout", tone: "warn", title: "Đừng hỏi", text: "❌ Lương / nghỉ phép ở vòng 1 (đợi vòng cuối)\n❌ 'How big is the company?' (Google trước đi)\n❌ 'When do I start?' (quá tự tin trước khi nhận offer)" },

      { kind: "h2", text: "Mẹo chung cho phỏng vấn tiếng Anh" },
      { kind: "list", ordered: true, items: [
        "Luyện NÓI TO câu trả lời trước gương 5 lần — không phải chỉ nghĩ trong đầu.",
        "Nói chậm hơn bạn nghĩ. Người Việt thường nói nhanh khi lo lắng, làm câu mất rõ ràng.",
        "Nếu không hiểu câu hỏi: 'Could you please rephrase that?' — đừng đoán.",
        "Cười khi chào và khi nói lời cảm ơn cuối phỏng vấn — quan trọng hơn bạn nghĩ.",
        "Chuẩn bị 1 câu chuyện thành công + 1 câu chuyện thất bại bạn học được điều gì.",
      ] },
    ],
    englishSummary: {
      level: "B1",
      paragraphs: [
        "Most English interviews have 5 classic questions. The first is 'Tell me about yourself'. Use the PRESENT-PAST-FUTURE structure: what you do now, your past experience, and why you want this job.",
        "For 'Why should we hire you?', give 3 specific skills plus one thing that makes you different. Don't be too modest, but don't brag.",
        "For 'What's your weakness?', pick a real weakness that doesn't affect the job, and explain how you are improving. Don't say 'I'm a perfectionist' — interviewers hate this.",
        "Always have questions to ask at the end. Practice your answers out loud, not just in your head.",
      ],
      keyWords: [
        { en: "interview", vi: "phỏng vấn" },
        { en: "weakness", vi: "điểm yếu" },
        { en: "experience", vi: "kinh nghiệm" },
        { en: "skill", vi: "kỹ năng" },
        { en: "practice", vi: "luyện tập" },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════════
  // 10. IDIOMS / SLANG
  // ═══════════════════════════════════════════════════════════════
  {
    slug: "slang-gen-z-tieng-anh",
    category: "idioms",
    title: "Slang Gen Z tiếng Anh — Hiểu để không bị 'cringe'",
    excerpt: "'No cap', 'lowkey', 'slay', 'vibe check'... — học để hiểu TikTok, hiểu Reddit, hiểu bạn quốc tế tuổi 20.",
    readingMinutes: 4,
    publishedAt: "2026-04-25",
    content: [
      { kind: "p", text: "Slang Gen Z (sinh 1997-2012) đang chiếm sóng internet. Nếu bạn không biết 'no cap' nghĩa là gì, bạn sẽ bị lạc lõng khi xem TikTok hay đọc Twitter. Bài này dạy 12 slang phổ biến nhất 2024-2026." },

      { kind: "callout", tone: "warn", title: "Lưu ý", text: "Slang chỉ dùng trong giao tiếp THÂN MẬT — không bao giờ dùng trong email công việc, phỏng vấn, hay bài viết học thuật. Học để HIỂU là chính." },

      { kind: "h2", text: "1. No cap" },
      { kind: "p", text: "Nghĩa: 'Thật đấy', 'không nói điêu'. (Cap = lie/cường điệu)" },
      { kind: "p", text: "Ví dụ: 'That movie was amazing, no cap.' (Phim đó hay thật, không xạo đâu.)" },

      { kind: "h2", text: "2. Lowkey / Highkey" },
      { kind: "p", text: "Lowkey = âm thầm, hơi hơi. Highkey = hoàn toàn, rõ ràng." },
      { kind: "p", text: "Ví dụ: 'I lowkey want to skip class today.' (Tôi hơi hơi muốn cúp học hôm nay.)" },

      { kind: "h2", text: "3. Slay" },
      { kind: "p", text: "Nghĩa: Làm tốt cực kỳ, rực rỡ. (Dùng cho phong cách, biểu diễn)" },
      { kind: "p", text: "Ví dụ: 'You're slaying that dress!' (Cái váy đó hợp bạn quá đỉnh!)" },

      { kind: "h2", text: "4. Vibe / Vibe check" },
      { kind: "p", text: "Vibe = không khí, cảm giác chung. Vibe check = kiểm tra trạng thái tinh thần." },
      { kind: "p", text: "Ví dụ: 'This cafe has good vibes.' (Cafe này có không khí dễ chịu.)" },

      { kind: "h2", text: "5. Sus" },
      { kind: "p", text: "Nghĩa: Đáng nghi, kỳ kỳ. (Viết tắt của 'suspicious')" },
      { kind: "p", text: "Ví dụ: 'Why is he being so quiet? That's sus.' (Sao nó im lặng vậy? Nghi ghê.)" },

      { kind: "h2", text: "6. Cringe" },
      { kind: "p", text: "Nghĩa: Quê, ngại, gây khó chịu. (Cảm giác như co rúm người lại)" },
      { kind: "p", text: "Ví dụ: 'His TikTok dance was so cringe.' (Điệu nhảy TikTok của nó quê quá.)" },

      { kind: "h2", text: "7. Ghosting / Ghosted" },
      { kind: "p", text: "Nghĩa: Đột nhiên biến mất, không trả lời tin nhắn." },
      { kind: "p", text: "Ví dụ: 'I thought we were dating but he ghosted me.' (Tôi tưởng chúng tôi đang hẹn hò, nhưng anh ấy biến mất.)" },

      { kind: "h2", text: "8. GOAT" },
      { kind: "p", text: "Nghĩa: Greatest Of All Time — vĩ đại nhất mọi thời đại." },
      { kind: "p", text: "Ví dụ: 'Messi is the GOAT.' (Messi là số 1 mọi thời đại.)" },

      { kind: "h2", text: "9. Salty" },
      { kind: "p", text: "Nghĩa: Cay cú, hậm hực sau khi thua hoặc bị nói trúng." },
      { kind: "p", text: "Ví dụ: 'He's been salty since we beat them last match.' (Nó cay cú từ lúc tụi mình thắng nó trận trước.)" },

      { kind: "h2", text: "10. Bet" },
      { kind: "p", text: "Nghĩa: 'OK, ừ, chốt' (đồng ý)" },
      { kind: "p", text: "Ví dụ: 'Want to grab lunch?' — 'Bet.' (Đi ăn trưa không? — Ừ.)" },

      { kind: "h2", text: "11. Mid" },
      { kind: "p", text: "Nghĩa: Tầm thường, không đặc biệt. (Trung bình kém)" },
      { kind: "p", text: "Ví dụ: 'The new restaurant? It's mid.' (Quán mới đó hả? Bình thường thôi.)" },

      { kind: "h2", text: "12. Touch grass" },
      { kind: "p", text: "Nghĩa: 'Đi ra ngoài đi' — bảo ai đó ngừng ngồi máy tính, ra đời thực." },
      { kind: "p", text: "Ví dụ: 'You've been playing games for 12 hours. Go touch grass.' (Mày chơi game 12 tiếng rồi. Đi ra ngoài đi.)" },

      { kind: "h2", text: "Lời khuyên dùng slang" },
      { kind: "callout", tone: "tip", title: "Nhớ", text: "Slang thay đổi RẤT NHANH. 'On fleek' phổ biến năm 2015, giờ dùng là cringe. Đừng cố ép dùng slang nếu không thoải mái — nghe gượng còn tệ hơn không dùng. Mục tiêu hàng đầu là HIỂU, không phải dùng." },
    ],
    englishSummary: {
      level: "B1",
      paragraphs: [
        "Gen Z slang is everywhere on TikTok, Twitter, and Instagram. If you don't know words like 'no cap' or 'lowkey', you might get confused when talking to young people online.",
        "Common slang to know: 'no cap' means 'I'm not lying'. 'Lowkey' means 'a little bit' or 'secretly'. 'Sus' means 'suspicious'. 'Cringe' means 'embarrassing'. 'Ghosting' means suddenly not replying to someone.",
        "Only use slang in casual conversation, never in work emails or interviews. And remember: slang changes very fast. The goal is to understand it, not always to use it.",
      ],
      keyWords: [
        { en: "slang", vi: "tiếng lóng" },
        { en: "casual", vi: "thân mật" },
        { en: "suspicious", vi: "đáng nghi" },
        { en: "embarrassing", vi: "quê, ngại" },
        { en: "online", vi: "trên mạng" },
      ],
    },
  },
];

// Helper functions
export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.category === category);
}

export function getCategoryMeta(id: BlogCategory) {
  return BLOG_CATEGORIES.find((c) => c.id === id)!;
}
