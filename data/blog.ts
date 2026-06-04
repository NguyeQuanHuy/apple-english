export type BlogPost = {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  tags?: string[,
  {
    slug: "hoc-tieng-anh-khi-bi-khuyet-tat-giong-noi",
    title: "Học tiếng Anh khi bị khiếm khuyết về giọng nói — bạn vẫn làm được",
    emoji: "📝",
    summary: "Không nói được hoặc nói khó khăn không có nghĩa là bạn không học được tiếng Anh. Hướng dẫn đầy đủ cho người khó khăn về ngôn ngữ, âm thanh, đam mê.",
    tags: ["Kinh nghiệm", "Phương pháp"],
    date: "04/06/2026",
    readingTime: "7 phút đọc",
    content: [
      { type: "paragraph", text: "Tiếng Anh không chỉ là ngôn ngữ nói. Đó là một hệ thống giao tiếp đa dạng — viết, đọc, nghe, ký hiệu, công nghệ hỗ trợ. Bạn có thể học và sử dụng tiếng Anh dù không nói được một tiếng nào." },
      { type: "callout", emoji: "💙", text: "Bài viết này dành cho: người ngu tật nói (stuttering), bại não ảnh hưởng giọng nói, khó nói do yết hầu, người không có thanh quản, và bất kỳ ai cảm thấy nói tiếng Anh là rào cản quá lớn." },
      { type: "heading", text: "Tiếng Anh viết và đọc hiểu — cánh cửa rộng mở nhất" },
      { type: "paragraph", text: "Nhiều người tưởng tiếng Anh = nói tiếng Anh. Nhưng trong thế giới công việc hiện đại, 70-80% giao tiếp tiếng Anh xảy ra qua email, chat, văn bản, báo cáo. Viết tốt là kỹ năng quan trọng nhất." },
      { type: "list", items: ["Email công việc với đồng nghiệp quốc tế", "Chat trên Slack, Teams với team nước ngoài", "Viết code comments và documentation", "Tham gia cộng đồng kỹ thuật trên GitHub, Stack Overflow", "Học khóa học online bằng tiếng Anh"] },
      { type: "callout", emoji: "💼", text: "Thực tế: Nhiều kỹ sư phần mềm Việt Nam làm việc cho công ty Mỹ, Âu mà chưa bắo giờ phải gọi điện hay gặp trực tiếp. Toàn bộ giao tiếp qua text." },
      { type: "heading", text: "Nếu bạn bị nói lắp (stuttering)" },
      { type: "paragraph", text: "Nói lắp không ảnh hưởng khả năng tư duy hay vốn từ của bạn. Nhiều người nói lắp có vốn tiếng Anh rất phong phú và viết rất xuất sắc." },
      { type: "list", items: ["Tập trung vào reading và writing trước — xây vốn từ mạnh.", "Nếu muốn luyện nói: tập đọc to một mình — không có áp lực xã hội.", "Slow speech therapy + tiếng Anh: đọc chậm rõ từng từ, không cần tốc độ.", "App ELSA Speak có chế độ luyện phát âm từng từ đơn lẻ, rất phù hợp.", "Giao tiếp văn bản qua HelloTalk — không cần voice call."] },
      { type: "heading", text: "Nếu bạn không có thanh quản hoặc dùng thiết bị hỗ trợ giọng nói" },
      { type: "paragraph", text: "Công nghệ AAC (Augmentative and Alternative Communication) ngày nay hỗ trợ tiếng Anh rất tốt. Nhiều người dùng thiết bị này giao tiếp thành công với cả thế giới." },
      { type: "list", items: ["Stephen Hawking — nhà vật lý vĩ đại — giao tiếp toàn bộ bằng thiết bị điệu khiển bằng cơ mặt.", "Thiết bị AAC tiếng Anh: Proloquo2Go, TouchChat, Snap Core First.", "Text-to-speech iOS/Android hỗ trợ tiếng Anh có thể làm voice output.", "Tập giao tiếp qua text trước — xây vốn từ và tự tin trước."] },
      { type: "heading", text: "Nếu bạn bị khó khăn phát âm do bại não hoặc bệnh lý" },
      { type: "paragraph", text: "Dysarthria (khó phát âm do tổn thương thần kinh) nhưng không ảnh hưởng trí tuệ. Rất nhiều người có dysarthria đọc tiếng Anh rất tốt." },
      { type: "list", items: ["Học ngữ pháp và từ vựng không cần nói — chỉ cần đọc và viết.", "Speech therapy bằng tiếng Anh: có nhiều app luyện đặc biệt.", "Tập trung vào TOEIC Reading — không yêu cầu nói.", "Nghe podcast chậm — luyện nghe hiểu mà không cần nói lại."] },
      { type: "heading", text: "Các công cụ công nghệ hỗ trợ" },
      { type: "vocab", word: "Google Voice Typing", meaning: "Chuyển giọng nói thành văn bản — hỗ trợ tiếng Anh", example: "Phù hợp cho người có thể nói nhưng gõ phím khó" },
      { type: "vocab", word: "Microsoft Dictate", meaning: "Ra lệnh bằng giọng nói trong Word/Outlook", example: "Viết email tiếng Anh bằng giọng nói" },
      { type: "vocab", word: "Otter.ai", meaning: "Ghi chép tự động cuộc họn bằng tiếng Anh", example: "Dùng trong cuộc họn video call, không cần tự nhiều" },
      { type: "vocab", word: "Read&Write", meaning: "Hỗ trợ đọc văn bản tiếng Anh bằng giọng nói", example: "Phù hợp cho người khó đọc" },
      { type: "heading", text: "Lộ trình học đề xuất" },
      { type: "list", items: ["Tháng 1-2: Xây vốn từ cơ bản qua flashcard (Anki, Quizlet) — không cần nói.", "Tháng 3-4: Luyện đọc hiểu — bài báo đơn giản, blog, news.", "Tháng 5-6: Luyện viết — bắt đầu từ 3 câu/ngày, tăng dần.", "Tháng 7+: Giao tiếp văn bản với người thật — HelloTalk, Reddit, forum."] },
      { type: "compare", left: "Không nói được nên không học", right: "Học viết, đọc, nghe — vẫn đạt TOEIC, làm việc quốc tế", leftLabel: "❌ Suy nghĩ sai", rightLabel: "✅ Thực tế" },
      { type: "callout", emoji: "🌟", text: "Nguồn lực miễn phí: National Stuttering Association (stutter.org), AAC Learning Center, YouTube channel "Stutter With Me", "Disability After Dark"." },
      { type: "quote", text: "Ngôn ngữ là cầu nối — không chỉ qua âm thanh mà còn qua chữ viết, ánh mắt, tay, và công nghệ. Bạn có quyền kết nối với thế giới theo cách của mình." }
    ]
  }
];
  date?: string;
  readingTime?: string;
  content: object[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tai-sao-hoc-tieng-anh-mai-khong-gioi",
    title: "Tại sao học tiếng Anh mãi mà không giỏi?",
    emoji: "🤔",
    summary: "4 lý do thật sự khiến bạn học mãi không giỏi.",
    tags: ["Kinh nghiệm", "Mất gốc"],
    date: "01/06/2026",
    readingTime: "5 phút đọc",
    content: [
      { type: "paragraph", text: "Nhiều người học tiếng Anh 7–10 năm nhưng vẫn đứng hình." },
      { type: "heading", text: "1. Học để thi, không học để dùng" },
      { type: "callout", emoji: "💡", text: "Fix: Mỗi ngày 10 phút nói to bằng tiếng Anh." },
      { type: "heading", text: "2. Học từng từ riêng lẻ, không học theo ngữ cảnh" },
      { type: "callout", emoji: "📝", text: "Fix: Mỗi từ mới bắt buộc đặt 1 câu về cuộc sống của bạn." },
      { type: "heading", text: "3. Sợ sai nên không dám nói" },
      { type: "quote", text: "Người học giỏi nhất là người dám mắc sai lầm nhiều nhất." },
      { type: "heading", text: "4. Không có lý do thực sự" },
      { type: "list", items: ["Tìm 1 lý do cụ thể: phỏng vấn công ty nước ngoài, xem phim không phụ đề.", "Đặt deadline thật: đăng ký thi TOEIC trước 2 tháng."] },
      { type: "quote", text: "Bạn không cần học nhiều hơn — bạn cần học đúng hơn." }
    ]
  },
  {
    slug: "10-phut-hoc-tieng-anh-moi-ngay",
    title: "Chỉ cần 10 phút mỗi ngày để cải thiện tiếng Anh",
    emoji: "⏰",
    summary: "10 phút đúng cách còn hiệu quả hơn 1 tiếng học sai phương pháp.",
    tags: ["Phương pháp", "Mất gốc"],
    date: "28/05/2026",
    readingTime: "3 phút đọc",
    content: [
      { type: "paragraph", text: "Bạn bận đi làm, không có thời gian ngồi học 2 tiếng mỗi ngày. Tin tốt là bạn không cần nhiều đến vậy." },
      { type: "list", items: ["Phút 1-3: Ôn 5 từ vựng hôm qua", "Phút 4-6: Học 3 từ mới có ví dụ câu", "Phút 7-9: Đọc to 1 đoạn văn", "Phút 10: Viết 1 câu tiếng Anh về ngày hôm nay"] },
      { type: "callout", emoji: "🔥", text: "Quan trọng nhất: làm ĐÚNG GIờ ĐÓ mỗi ngày. Biến nó thành thói quen như đánh răng." },
      { type: "quote", text: "Consistency beats intensity. Học ít mỗi ngày thắng học nhiều một lần." }
    ]
  },
  {
    slug: "tu-vung-toeic-can-biet",
    title: "100 từ vựng TOEIC người mất gốc cần biết nhất",
    emoji: "📚",
    summary: "100 từ xuất hiện nhiều nhất trong đề TOEIC.",
    tags: ["TOEIC", "Từ vựng"],
    date: "25/05/2026",
    readingTime: "5 phút đọc",
    content: [
      { type: "paragraph", text: "TOEIC có khoảng 600-800 từ vựng hay xuất hiện." },
      { type: "vocab", word: "schedule", meaning: "lịch trình", example: "Please schedule a meeting for Monday." },
      { type: "vocab", word: "deadline", meaning: "hạn chật", example: "The deadline is this Friday." },
      { type: "vocab", word: "submit", meaning: "nộp, gửi", example: "Please submit your report by 5 PM." },
      { type: "vocab", word: "budget", meaning: "ngân sách", example: "We need to cut the budget this quarter." },
      { type: "vocab", word: "invoice", meaning: "hóa đơn", example: "Please send the invoice to accounting." },
      { type: "callout", emoji: "📝", text: "Mẹo: Học mỗi từ kèm 1 câu ví dụ. Não sẽ nhớ ngữ cảnh tốt hơn định nghĩa trần." }
    ]
  },
  {
    slug: "loi-phat-am-nguoi-viet-hay-mac",
    title: "5 lỗi phát âm tiếng Anh người Việt hay mắc nhất",
    emoji: "🗣️",
    summary: "Phát âm sai khiến người nghe không hiểu dù grammar đúng.",
    tags: ["Phát âm", "Kinh nghiệm"],
    date: "20/05/2026",
    readingTime: "4 phút đọc",
    content: [
      { type: "paragraph", text: "Tiếng Việt và tiếng Anh có hệ thống âm hoàn toàn khác nhau." },
      { type: "compare", left: "stop đọc thành sto", right: "stop — rõ âm /p/ cuối", leftLabel: "❌ Sai", rightLabel: "✅ Đúng" },
      { type: "compare", left: "final đọc thành finan", right: "final — âm /l/ rõ ràng", leftLabel: "❌ Sai", rightLabel: "✅ Đúng" },
      { type: "callout", emoji: "🎯", text: "Cách luyện: Tập trước gương, đặt đầu lưỡi chạm nhẹ vào răng trên khi đọc th." }
    ]
  },
  {
    slug: "cach-hoc-ngu-phap-khong-chan",
    title: "Cách học ngữ pháp tiếng Anh mà không bị chán",
    emoji: "✏️",
    summary: "Ngữ pháp không nhàm chán nếu bạn học đúng cách.",
    tags: ["Ngữ pháp", "Phương pháp"],
    date: "15/05/2026",
    readingTime: "3 phút đọc",
    content: [
      { type: "paragraph", text: "Hầu hết mọi người học ngữ pháp bằng cách đọc bảng quy tắc rồi làm bài tập điền vào chỗ trống." },
      { type: "callout", emoji: "💡", text: "Não người học theo pattern, không học theo quy tắc." },
      { type: "list", items: ["To be: I am a student. She is happy.", "Simple Present: I work in Germany.", "Present Continuous: I am studying English right now."] },
      { type: "quote", text: "Học ngữ pháp đủ để không hiểu sai, đừng học để hoàn hảo." }
    ]
  },
  {
    slug: "toeic-450-trong-2-thang",
    title: "TOEIC 450 điểm trong 2 tháng — kế hoạch ôn thi thực tế",
    emoji: "🎯",
    summary: "Kế hoạch ôn TOEIC 450 trong 2 tháng dành cho người mất gốc.",
    tags: ["TOEIC", "Lộ trình"],
    date: "03/06/2026",
    readingTime: "6 phút đọc",
    content: [
      { type: "paragraph", text: "TOEIC 450 là mức điểm tối thiểu nhiều công ty Việt Nam yêu cầu." },
      { type: "heading", text: "Tháng 1 — Xây nền tảng" },
      { type: "list", items: ["Tuần 1-2: Học 200 từ vựng TOEIC cơ bản.", "Tuần 3-4: Luyện Part 1, 2 và Part 5."] },
      { type: "heading", text: "Tháng 2 — Luyện đề và chiến thuật" },
      { type: "list", items: ["Tuần 5-6: Làm 2-3 mini test mỗi tuần.", "Tuần 7-8: Làm 2 full mock test có đồng hồ bấm giờ."] },
      { type: "quote", text: "2 tháng x 30 phút/ngày = 60 tiếng học. Đủ để đạt 450 nếu học đúng hướng." }
    ]
  },
  {
    slug: "30-thanh-ngu-pho-bien-tieng-anh",
    title: "30 thành ngữ phổ biến nhất trong tiếng Anh",
    emoji: "💬",
    summary: "Học 30 thành ngữ này để hiểu phim, nhạc và giao tiếp tự nhiên hơn.",
    tags: ["Từ vựng", "Giao tiếp"],
    date: "03/06/2026",
    readingTime: "7 phút đọc",
    content: [
      { type: "vocab", word: "Break a leg", meaning: "Chúc may mắn!", example: "You have an interview? Break a leg!" },
      { type: "vocab", word: "Hit the sack", meaning: "Đi ngủ", example: "I am exhausted. Time to hit the sack." },
      { type: "vocab", word: "Under the weather", meaning: "Cảm thấy ốm", example: "I am feeling under the weather today." },
      { type: "vocab", word: "Beat around the bush", meaning: "Vòng vo, không nói thẳng", example: "Stop beating around the bush." },
      { type: "vocab", word: "Back to the drawing board", meaning: "Làm lại từ đầu", example: "The plan failed. Back to the drawing board." },
      { type: "vocab", word: "On the same page", meaning: "Hiểu ý nhau", example: "Let us make sure we are on the same page." },
      { type: "vocab", word: "A piece of cake", meaning: "Rất dễ", example: "The exam was a piece of cake." },
      { type: "vocab", word: "Cost an arm and a leg", meaning: "Rất đắt", example: "That phone costs an arm and a leg." },
      { type: "vocab", word: "Spill the beans", meaning: "Tiết lộ bí mật", example: "Who spilled the beans?" },
      { type: "vocab", word: "The ball is in your court", meaning: "Đến lượt bạn quyết định", example: "The ball is in your court now." },
      { type: "quote", text: "Biết thành ngữ là dấu hiệu bạn đã vượt qua ngưỡng học tiếng Anh cơ bản." }
    ]
  },
  {
    slug: "cach-phat-am-tieng-anh-ro-rang",
    title: "Cách phát âm tiếng Anh rõ ràng",
    emoji: "🎤",
    summary: "Phát âm sai khiến người nghe không hiểu. Hướng dẫn từng bước để phát âm chuẩn.",
    tags: ["Phát âm", "Phương pháp"],
    date: "04/06/2026",
    readingTime: "6 phút đọc",
    content: [
      { type: "paragraph", text: "Phát âm tốt không có nghĩa là giọng Mỹ hoàn hảo. Cần đủ rõ để người ta hiểu ngay lần đầu." },
      { type: "heading", text: "Lỗi 1: Nuốt âm cuối" },
      { type: "compare", left: "I need your hel", right: "I need your help", leftLabel: "❌ Nuốt âm /p/", rightLabel: "✅ Rõ âm cuối" },
      { type: "list", items: ["/p/ cuối: stop, help — môi chạm nhau", "/t/ cuối: cat, not — lưỡi chạm răng trên", "/k/ cuối: back, work — ngừng hơi"] },
      { type: "heading", text: "Lỗi 2: Âm /th/ đọc sai" },
      { type: "vocab", word: "/th/ không thanh", meaning: "Lưỡi giữa 2 hàng răng, thổi hơi", example: "think, three, thank" },
      { type: "vocab", word: "/th/ có thanh", meaning: "Dây thanh rung", example: "this, that, the, them" },
      { type: "heading", text: "Lỗi 3: Sai trọng âm" },
      { type: "compare", left: "pho-TO-graph", right: "PHO-to-graph", leftLabel: "❌ Sai", rightLabel: "✅ Đúng" },
      { type: "heading", text: "Lịch luyện 10 phút/ngày" },
      { type: "list", items: ["Phút 1-2: Đọc to 10 từ có âm cuối khó", "Phút 3-4: Luyện /th/ 5 câu", "Phút 5-6: Shadowing 1 đoạn phim", "Phút 7-10: Ghi âm bản thân, nghe lại"] },
      { type: "callout", emoji: "🌟", text: "Công cụ miễn phí: ELSA Speak, YouGlish, Forvo." },
      { type: "quote", text: "Phát âm không cần hoàn hảo — cần đủ rõ để người ta hiểu ngay." }
    ]
  }
];