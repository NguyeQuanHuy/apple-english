export type BlogPost = {
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
    title: "Tại sao học tiếng Anh mãi mà không giỏi?",
    emoji: "🤔",
    summary: "Bạn học tiếng Anh nhiều năm nhưng vẫn không nói được? Đây là 4 lý do thật sự và cách fix từng cái.",
    tags: ["Kinh nghiệm", "Mất gốc"],
    date: "01/06/2026",
    readingTime: "5 phút đọc",
    content: [
      { type: "paragraph", text: "Nhiều người học tiếng Anh 7–10 năm ở trường nhưng ra đường gặp người nước ngoài vẫn... đứng hình. Không phải vì bạn kém — mà vì cách học có vấn đề. Bài viết này phân tích 4 lý do chính và cách fix từng cái." },
      { type: "heading", text: "1. Học để thi, không học để dùng" },
      { type: "paragraph", text: "Hệ thống giáo dục Việt Nam tập trung vào ngữ pháp và dịch thuật. Kết quả là bạn có thể làm bài thi tốt nhưng không thể nói chuyện được — vì não chưa bao giờ được luyện xử lý tiếng Anh theo thời gian thực." },
      { type: "compare", left: "Đọc quy tắc ngữ pháp rồi điền vào chỗ trống", right: "Nghe câu, hiểu ngay, phản hồi tự nhiên", leftLabel: "❌ Học để thi", rightLabel: "✅ Học để dùng" },
      { type: "callout", emoji: "💡", text: "Fix: Mỗi ngày dành 10 phút nói to bằng tiếng Anh — dù chỉ nói một mình. Kể lại ngày hôm nay, mô tả bức ảnh, hoặc đọc to một đoạn văn. Não cần luyện phản xạ, không chỉ lý thuyết." },
      { type: "heading", text: "2. Học từng từ riêng lẻ, không học theo ngữ cảnh" },
      { type: "paragraph", text: "Học 50 từ vựng mỗi tuần nhưng không biết dùng trong câu nào. Não người không hoạt động như từ điển — chúng ta nhớ thứ gắn với cảm xúc và tình huống, không phải danh sách trần." },
      { type: "compare", left: "happy = vui, sad = buồn, angry = tức", right: "I feel happy when I eat phở on a cold morning.", leftLabel: "❌ Dễ quên sau 3 ngày", rightLabel: "✅ Nhớ lâu vì có ngữ cảnh" },
      { type: "callout", emoji: "📝", text: "Fix: Mỗi khi học từ mới, bắt buộc đặt 1 câu ví dụ về cuộc sống của bạn. Càng cá nhân, càng nhớ lâu. 'I was angry when my code did not work' sẽ nhớ lâu hơn 'angry = tức giận' rất nhiều." },
      { type: "heading", text: "3. Sợ sai nên không dám nói" },
      { type: "paragraph", text: "Đây có lẽ là rào cản lớn nhất của người Việt. Chúng ta lớn lên trong môi trường mà nói sai là bị cười. Nhưng trong giao tiếp thực tế, người bản ngữ không quan tâm bạn sai ngữ pháp — họ chỉ cần hiểu ý bạn." },
      { type: "quote", text: "Người học ngôn ngữ giỏi nhất không phải người ít sai nhất — mà là người dám mắc sai lầm nhiều nhất và học từ đó." },
      { type: "callout", emoji: "🎯", text: "Fix: Đặt mục tiêu 'nói sai 10 câu hôm nay' thay vì 'nói đúng'. Thay đổi mindset: sai là bằng chứng bạn đang cố gắng, không phải thất bại." },
      { type: "heading", text: "4. Không có lý do thực sự để học" },
      { type: "paragraph", text: "Học vì 'ai cũng học' hoặc 'để sau này dùng' — đây là motivation yếu nhất. Não bộ chỉ ghi nhớ thứ nó thấy quan trọng. Không có lý do cụ thể, không có cảm giác cấp bách, não sẽ ưu tiên thứ khác." },
      { type: "list", items: ["Tìm 1 lý do cụ thể: phỏng vấn công ty nước ngoài, xem phim không cần phụ đề, du lịch một mình, thi TOEIC.", "Đặt deadline thật: đăng ký thi TOEIC trước 2 tháng, book chuyến đi nước ngoài.", "Kết nối với người học cùng để tạo accountability."] },
      { type: "heading", text: "Tóm lại — bạn cần làm gì ngay bây giờ?" },
      { type: "list", items: ["Ngừng học từ danh sách, bắt đầu học từ theo chủ đề và tình huống thực tế.", "Dành 10 phút mỗi ngày nói to — không cần partner, nói một mình cũng được.", "Chấp nhận sai lầm là một phần của quá trình học.", "Tìm 1 lý do cụ thể và đặt deadline thật sự."] },
      { type: "quote", text: "Bạn không cần học nhiều hơn — bạn cần học đúng hơn. 10 phút mỗi ngày đúng cách còn hiệu quả hơn 2 tiếng học sai phương pháp." }
    ]
  },
  {
    slug: "10-phut-hoc-tieng-anh-moi-ngay",
    title: "Chỉ cần 10 phút mỗi ngày để cải thiện tiếng Anh",
    emoji: "⏰",
    summary: "Không cần học 2-3 tiếng mỗi ngày. 10 phút đúng cách còn hiệu quả hơn 1 tiếng học sai phương pháp.",
    tags: ["Phương pháp", "Mất gốc"],
    date: "28/05/2026",
    readingTime: "3 phút đọc",
    content: [
      { type: "paragraph", text: "Bạn bận đi làm, đi học, không có thời gian ngồi học 2 tiếng mỗi ngày. Tin tốt là bạn không cần nhiều đến vậy — nếu học đúng cách." },
      { type: "heading", text: "Lịch 10 phút mỗi ngày" },
      { type: "list", items: ["Phút 1-3: Ôn 5 từ vựng hôm qua", "Phút 4-6: Học 3 từ mới có ví dụ câu", "Phút 7-9: Đọc to 1 đoạn văn ngắn hoặc làm 1 mini quiz", "Phút 10: Viết 1 câu tiếng Anh về ngày hôm nay của bạn"] },
      { type: "callout", emoji: "🔥", text: "Quan trọng nhất: làm ĐÚNG GIỜ ĐÓ mỗi ngày. Sáng sau khi thức dậy, hoặc tối trước khi ngủ. Biến nó thành thói quen như đánh răng." },
      { type: "paragraph", text: "Sau 30 ngày, bạn sẽ học được khoảng 90 từ vựng mới và có phản xạ đọc tiếng Anh tốt hơn đáng kể. Sau 90 ngày, sự khác biệt sẽ rõ ràng với mọi người xung quanh." },
      { type: "quote", text: "Consistency beats intensity. Học ít mỗi ngày thắng học nhiều một lần." }
    ]
  },
  {
    slug: "tu-vung-toeic-can-biet",
    title: "100 từ vựng TOEIC người mất gốc cần biết nhất",
    emoji: "📚",
    summary: "Không cần học hết 10.000 từ. Đây là 100 từ xuất hiện nhiều nhất trong đề TOEIC mà bạn nên học trước.",
    tags: ["TOEIC", "Từ vựng"],
    date: "25/05/2026",
    readingTime: "5 phút đọc",
    content: [
      { type: "paragraph", text: "TOEIC có khoảng 600-800 từ vựng hay xuất hiện. Trong đó, 100 từ dưới đây chiếm khoảng 40% tần suất. Học chúng trước là chiến lược khôn ngoan." },
      { type: "heading", text: "Nhóm 1: Công việc văn phòng" },
      { type: "vocab", word: "schedule", meaning: "lịch trình, sắp xếp", example: "Please schedule a meeting for Monday." },
      { type: "vocab", word: "deadline", meaning: "hạn chót", example: "The deadline is this Friday." },
      { type: "vocab", word: "submit", meaning: "nộp, gửi", example: "Please submit your report by 5 PM." },
      { type: "vocab", word: "approve", meaning: "phê duyệt", example: "The manager approved the budget." },
      { type: "heading", text: "Nhóm 2: Tài chính" },
      { type: "vocab", word: "budget", meaning: "ngân sách", example: "We need to cut the budget this quarter." },
      { type: "vocab", word: "invoice", meaning: "hóa đơn", example: "Please send the invoice to accounting." },
      { type: "vocab", word: "revenue", meaning: "doanh thu", example: "Revenue increased by 20% this year." },
      { type: "callout", emoji: "📝", text: "Mẹo: Học mỗi từ kèm 1 câu ví dụ. Đừng chỉ học nghĩa. Não sẽ nhớ ngữ cảnh tốt hơn là định nghĩa trần." }
    ]
  },
  {
    slug: "loi-phat-am-nguoi-viet-hay-mac",
    title: "5 lỗi phát âm tiếng Anh người Việt hay mắc nhất",
    emoji: "🗣️",
    summary: "Phát âm sai khiến người nghe không hiểu dù grammar đúng. Kiểm tra xem bạn có đang mắc lỗi nào không.",
    tags: ["Phát âm", "Kinh nghiệm"],
    date: "20/05/2026",
    readingTime: "4 phút đọc",
    content: [
      { type: "paragraph", text: "Tiếng Việt và tiếng Anh có hệ thống âm hoàn toàn khác nhau. Vì vậy người Việt thường mắc một số lỗi phát âm đặc trưng mà chính mình không nhận ra." },
      { type: "heading", text: "Lỗi 1: Không đọc âm cuối" },
      { type: "paragraph", text: "Tiếng Việt ít có phụ âm cuối mạnh, nên người Việt hay nuốt âm cuối trong tiếng Anh." },
      { type: "compare", left: "stop đọc thành sto", right: "stop — rõ âm /p/ cuối", leftLabel: "❌ Sai", rightLabel: "✅ Đúng" },
      { type: "heading", text: "Lỗi 2: Nhầm /l/ và /n/ cuối câu" },
      { type: "compare", left: "final đọc thành finan", right: "final — âm /l/ rõ ràng", leftLabel: "❌ Sai", rightLabel: "✅ Đúng" },
      { type: "callout", emoji: "🎯", text: "Cách luyện: Đứng trước gương, tập đặt đầu lưỡi chạm nhẹ vào răng trên khi đọc th. Làm 5 phút mỗi ngày trong 1 tuần." }
    ]
  },
  {
    slug: "cach-hoc-ngu-phap-khong-chan",
    title: "Cách học ngữ pháp tiếng Anh mà không bị chán",
    emoji: "✏️",
    summary: "Ngữ pháp không nhàm chán nếu bạn học đúng cách. Bí quyết là học qua câu chuyện, không học qua bảng quy tắc.",
    tags: ["Ngữ pháp", "Phương pháp"],
    date: "15/05/2026",
    readingTime: "3 phút đọc",
    content: [
      { type: "paragraph", text: "Hầu hết mọi người học ngữ pháp bằng cách đọc bảng quy tắc rồi làm bài tập điền vào chỗ trống. Cách này chán và không hiệu quả." },
      { type: "callout", emoji: "💡", text: "Não người học theo pattern (mẫu), không học theo quy tắc. Khi bạn thấy đủ ví dụ, não tự rút ra quy tắc mà không cần bạn cố nhớ." },
      { type: "list", items: ["To be (am/is/are): I am a student. She is happy.", "Simple Present: I work in Germany. He works at a cafe.", "Present Continuous: I am studying English right now."] },
      { type: "quote", text: "Học ngữ pháp đủ để không hiểu sai, đừng học để hoàn hảo. Người bản ngữ cũng nói sai ngữ pháp." }
    ]
  },
  {
    slug: "toeic-450-trong-2-thang",
    title: "TOEIC 450 điểm trong 2 tháng — kế hoạch ôn thi thực tế",
    emoji: "🎯",
    summary: "Không cần trung tâm đắt tiền. Đây là kế hoạch ôn TOEIC 450 điểm trong 2 tháng dành cho người mất gốc.",
    tags: ["TOEIC", "Lộ trình"],
    date: "03/06/2026",
    readingTime: "6 phút đọc",
    content: [
      { type: "paragraph", text: "TOEIC 450 điểm là mức điểm tối thiểu nhiều công ty Việt Nam yêu cầu. Tin tốt là: đây không phải mức điểm khó nếu bạn có kế hoạch đúng và học đều đặn 2 tháng." },
      { type: "callout", emoji: "📌", text: "Bài viết này dành cho người hiện tại chưa thi TOEIC bao giờ hoặc đã thi dưới 300 điểm. Nếu bạn đang ở 350-400, lộ trình này vẫn áp dụng được." },
      { type: "heading", text: "TOEIC 450 cần gì?" },
      { type: "paragraph", text: "TOEIC gồm 2 phần: Listening (495 điểm) và Reading (495 điểm). Để đạt 450 tổng, bạn cần khoảng 200-250 mỗi phần — tức là trả lời đúng khoảng 45-50% số câu." },
      { type: "list", items: ["Listening: 100 câu — Part 1 (ảnh), Part 2 (hỏi-đáp), Part 3 (hội thoại), Part 4 (bài nói)", "Reading: 100 câu — Part 5 (điền từ), Part 6 (đoạn văn ngắn), Part 7 (đọc hiểu)", "Thời gian: 2 tiếng đồng hồ thi liên tục", "Mục tiêu 450: đúng ~45/100 Listening + ~45/100 Reading"] },
      { type: "heading", text: "Tháng 1 — Xây nền tảng (tuần 1-4)" },
      { type: "list", items: ["Tuần 1-2: Học 200 từ vựng TOEIC cơ bản. Mỗi ngày 15 từ.", "Tuần 2-3: Luyện nghe Part 1 và Part 2 — đây là phần dễ nhất, phải chắc chắn lấy điểm tối đa.", "Tuần 3-4: Luyện Part 5 (điền từ) — ôn lại ngữ pháp cơ bản: to be, thì hiện tại, quá khứ đơn."] },
      { type: "callout", emoji: "⏰", text: "Thời gian học tháng 1: 30-40 phút/ngày. Quan trọng là HỌC ĐỀU mỗi ngày, không bỏ ngày nào." },
      { type: "heading", text: "Tháng 2 — Luyện đề và chiến thuật (tuần 5-8)" },
      { type: "list", items: ["Tuần 5-6: Làm 2-3 mini test mỗi tuần, phân tích từng câu sai.", "Tuần 6-7: Tập trung Part 3, Part 4 (Listening) và Part 7 (Reading).", "Tuần 7-8: Làm 2 full mock test có đồng hồ bấm giờ. Tập quản lý thời gian."] },
      { type: "compare", left: "Đọc hết bài rồi mới đọc câu hỏi", right: "Đọc câu hỏi trước, scan bài tìm đáp án", leftLabel: "❌ Chậm, dễ hết giờ", rightLabel: "✅ Tiết kiệm 30% thời gian" },
      { type: "callout", emoji: "🏆", text: "Mẹo cuối: Đăng ký thi sớm (trước 3 tuần). Có deadline thi thật sẽ giúp bạn học nghiêm túc hơn hẳn." },
      { type: "quote", text: "2 tháng × 30 phút/ngày = 60 tiếng học. Đủ để đạt 450 nếu bạn học đúng hướng." }
    ]
  },
  {
    slug: "30-thanh-ngu-pho-bien-tieng-anh",
    title: "30 thành ngữ phổ biến nhất trong tiếng Anh",
    emoji: "💬",
    summary: "Người bản ngữ nói chuyện đầy thành ngữ. Học 30 câu này để hiểu phim, nhạc và giao tiếp tự nhiên hơn hẳn.",
    tags: ["Từ vựng", "Giao tiếp"],
    date: "03/06/2026",
    readingTime: "7 phút đọc",
    content: [
      { type: "paragraph", text: "Nếu bạn đã học tiếng Anh cơ bản nhưng vẫn thấy khó hiểu người bản ngữ nói — có thể bạn đang thiếu thành ngữ. Đây là những cụm từ có nghĩa hoàn toàn khác với nghĩa đen của từng chữ." },
      { type: "callout", emoji: "💡", text: "Mẹo: Đừng dịch thành ngữ theo từng chữ. Hãy học cả cụm + nghĩa + tình huống sử dụng. Não sẽ nhớ lâu hơn nhiều." },
      { type: "heading", text: "Nhóm 1: Thành ngữ về cuộc sống hàng ngày" },
      { type: "vocab", word: "Break a leg", meaning: "Chúc may mắn! (dùng trước khi biểu diễn/thi)", example: "You have an interview today? Break a leg!" },
      { type: "vocab", word: "Hit the sack", meaning: "Đi ngủ", example: "I am exhausted. Time to hit the sack." },
      { type: "vocab", word: "Bite the bullet", meaning: "Cắn răng chịu đựng, chấp nhận việc khó khăn", example: "Just bite the bullet and go to the dentist." },
      { type: "vocab", word: "Under the weather", meaning: "Cảm thấy không khỏe, ốm yếu", example: "I am feeling a bit under the weather today." },
      { type: "vocab", word: "Beat around the bush", meaning: "Vòng vo, không nói thẳng vào vấn đề", example: "Stop beating around the bush and tell me the truth." },
      { type: "heading", text: "Nhóm 2: Thành ngữ về công việc" },
      { type: "vocab", word: "Back to the drawing board", meaning: "Làm lại từ đầu", example: "The plan failed. Back to the drawing board." },
      { type: "vocab", word: "Get the ball rolling", meaning: "Bắt đầu công việc, khởi động", example: "Let us get the ball rolling on this project." },
      { type: "vocab", word: "On the same page", meaning: "Hiểu ý nhau, đồng quan điểm", example: "Before we start, let us make sure we are on the same page." },
      { type: "vocab", word: "Burn the midnight oil", meaning: "Thức khuya làm việc học bài", example: "I had to burn the midnight oil to finish the report." },
      { type: "vocab", word: "Cut corners", meaning: "Làm qua loa, bỏ qua bước để tiết kiệm thời gian", example: "Do not cut corners on safety procedures." },
      { type: "heading", text: "Nhóm 3: Thành ngữ về con người và tính cách" },
      { type: "vocab", word: "A piece of cake", meaning: "Rất dễ, không có gì khó cả", example: "The exam was a piece of cake." },
      { type: "vocab", word: "Hit the nail on the head", meaning: "Nói đúng vào bản chất vấn đề", example: "You hit the nail on the head with that analysis." },
      { type: "vocab", word: "Speak of the devil", meaning: "Vừa nói đến là xuất hiện (như có phép)", example: "Speak of the devil — there is John now!" },
      { type: "vocab", word: "Once in a blue moon", meaning: "Rất hiếm khi", example: "He only calls me once in a blue moon." },
      { type: "heading", text: "Nhóm 4: Thành ngữ về tiền bạc và giá trị" },
      { type: "vocab", word: "Cost an arm and a leg", meaning: "Rất đắt", example: "That new phone costs an arm and a leg." },
      { type: "vocab", word: "Break the bank", meaning: "Tốn rất nhiều tiền", example: "We want a vacation that does not break the bank." },
      { type: "vocab", word: "On a shoestring", meaning: "Với ngân sách rất ít", example: "We built this website on a shoestring budget." },
      { type: "heading", text: "Nhóm 5: Thành ngữ về tình huống khó khăn" },
      { type: "vocab", word: "In hot water", meaning: "Đang gặp rắc rối, trong tình trạng khó xử", example: "He is in hot water with his boss again." },
      { type: "vocab", word: "Hit rock bottom", meaning: "Chạm đáy, ở điểm thấp nhất", example: "After losing his job he hit rock bottom." },
      { type: "vocab", word: "Bite off more than you can chew", meaning: "Nhận nhiều việc hơn khả năng xử lý", example: "I bit off more than I could chew with 3 projects at once." },
      { type: "vocab", word: "Burn bridges", meaning: "Phá vỡ mối quan hệ, không thể quay lại", example: "Do not burn bridges with your old employer." },
      { type: "heading", text: "Nhóm 6: Thành ngữ hay gặp trong phim và nhạc" },
      { type: "vocab", word: "Spill the beans", meaning: "Tiết lộ bí mật", example: "Who spilled the beans about the surprise party?" },
      { type: "vocab", word: "Kill two birds with one stone", meaning: "Một mũi hai nhắm, giải quyết 2 việc cùng lúc", example: "I will kill two birds with one stone by meeting him at the gym." },
      { type: "vocab", word: "The ball is in your court", meaning: "Đến lượt bạn quyết định", example: "I have done my part. The ball is in your court now." },
      { type: "vocab", word: "Bite the dust", meaning: "Thất bại, chịu thua", example: "Another startup bites the dust this year." },
      { type: "compare", left: "I am under the weather", right: "Tôi đang ốm / không khỏe", leftLabel: "Tiếng Anh tự nhiên", rightLabel: "Nghĩa thực sự" },
      { type: "callout", emoji: "🎬", text: "Cách học nhanh nhất: Xem phim Mỹ/Anh không phụ đề, gặp thành ngữ nào không hiểu thì dừng lại tra ngay. Não sẽ nhớ rất lâu vì bạn gặp nó trong tình huống thật." },
      { type: "quote", text: "Biết thành ngữ là dấu hiệu bạn đã vượt qua ngưỡng học tiếng Anh cơ bản — bạn đang bắt đầu tư duy như người bản ngữ." }
    ]
  }
];
