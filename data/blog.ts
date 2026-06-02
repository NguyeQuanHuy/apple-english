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
    summary: "Bạn học tiếng Anh nhiều năm nhưng vẫn không nói được? Đây là lý do thật sự và cách fix.",
    tags: ["Kinh nghiệm", "Mất gốc"],
    date: "01/06/2026",
    readingTime: "4 phút đọc",
    content: [
      { type: "paragraph", text: "Nhiều người học tiếng Anh 7-10 năm ở trường nhưng ra đường gặp người nước ngoài vẫn... đứng hình. Không phải vì bạn kém, mà vì cách học có vấn đề." },
      { type: "heading", text: "1. Học để thi, không học để dùng" },
      { type: "paragraph", text: "Hệ thống giáo dục Việt Nam tập trung vào ngữ pháp và dịch thuật. Bạn có thể làm bài thi tốt nhưng không thể nói chuyện được vì não chưa quen xử lý tiếng Anh theo thời gian thực." },
      { type: "callout", emoji: "💡", text: "Fix: Mỗi ngày dành 10 phút nói to bằng tiếng Anh, dù chỉ nói một mình. Não cần luyện phản xạ, không chỉ lý thuyết." },
      { type: "heading", text: "2. Học từng từ riêng lẻ, không học theo ngữ cảnh" },
      { type: "paragraph", text: "Học 50 từ vựng nhưng không biết dùng trong câu nào. Từ vựng cần gắn với tình huống thực tế mới nhớ lâu." },
      { type: "compare", left: "Học: 'happy = vui'", right: "Học: 'I feel happy when I eat pho'", leftLabel: "❌ Dễ quên", rightLabel: "✅ Nhớ lâu" },
      { type: "heading", text: "3. Sợ sai nên không dám nói" },
      { type: "paragraph", text: "Đây là lý do lớn nhất. Người Việt thường sợ nói sai bị cười. Nhưng thực tế, người bản ngữ không quan tâm bạn sai ngữ pháp — họ chỉ cần hiểu ý bạn." },
      { type: "quote", text: "Nói sai mà người ta hiểu còn hơn im lặng vì sợ sai." },
    ],
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
      { type: "paragraph", text: "Bạn bận đi làm, đi học, không có thời gian ngồi học 2 tiếng mỗi ngày. Tin tốt là bạn không cần nhiều đến vậy." },
      { type: "heading", text: "Lịch 10 phút mỗi ngày" },
      { type: "list", items: ["Phút 1-3: Ôn 5 từ vựng hôm qua", "Phút 4-6: Học 3 từ mới có ví dụ câu", "Phút 7-9: Đọc to 1 đoạn văn ngắn hoặc làm 1 mini quiz", "Phút 10: Viết 1 câu tiếng Anh về ngày hôm nay của bạn"] },
      { type: "callout", emoji: "🔥", text: "Quan trọng nhất: làm ĐÚNG GIỜ ĐÓ mỗi ngày. Sáng sau khi thức dậy, hoặc tối trước khi ngủ. Biến nó thành thói quen như đánh răng." },
      { type: "paragraph", text: "Sau 30 ngày, bạn sẽ học được khoảng 90 từ vựng mới và có phản xạ đọc tiếng Anh tốt hơn đáng kể." },
      { type: "quote", text: "Consistency beats intensity. Học ít mỗi ngày thắng học nhiều một lần." },
    ],
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
      { type: "callout", emoji: "📝", text: "Mẹo: Học mỗi từ kèm 1 câu ví dụ. Đừng chỉ học nghĩa. Não sẽ nhớ ngữ cảnh tốt hơn là định nghĩa trần." },
    ],
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
      { type: "compare", left: "\"stop\" đọc thành \"sto\"", right: "\"stop\" — rõ âm /p/ cuối", leftLabel: "❌ Sai", rightLabel: "✅ Đúng" },
      { type: "heading", text: "Lỗi 2: Nhầm /l/ và /n/ cuối câu" },
      { type: "compare", left: "\"final\" đọc thành \"finan\"", right: "\"final\" — âm /l/ rõ ràng", leftLabel: "❌ Sai", rightLabel: "✅ Đúng" },
      { type: "heading", text: "Lỗi 3: Đọc 'th' thành 't' hoặc 'd'" },
      { type: "vocab", word: "th (có thanh)", meaning: "đặt lưỡi giữa 2 hàng răng, thổi hơi — như 'this', 'that'", example: "This is my friend." },
      { type: "callout", emoji: "🎯", text: "Cách luyện: Đứng trước gương, tập đặt đầu lưỡi chạm nhẹ vào răng trên khi đọc 'th'. Làm 5 phút mỗi ngày trong 1 tuần." },
    ],
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
      { type: "heading", text: "Học ngữ pháp qua ví dụ thực tế" },
      { type: "paragraph", text: "Thay vì học 'Simple Present = V/V+s', hãy học qua tình huống: 'I drink coffee every morning. She drinks tea.' — Rồi tự hỏi tại sao she dùng 'drinks' còn I dùng 'drink'?" },
      { type: "callout", emoji: "💡", text: "Não người học theo pattern (mẫu), không học theo quy tắc. Khi bạn thấy đủ ví dụ, não tự rút ra quy tắc mà không cần bạn cố nhớ." },
      { type: "heading", text: "3 cấu trúc nền tảng cần nắm trước" },
      { type: "list", items: ["To be (am/is/are): I am a student. She is happy.", "Simple Present: I work in Germany. He works at a cafe.", "Present Continuous: I am studying English right now."] },
      { type: "quote", text: "Học ngữ pháp đủ để không hiểu sai, đừng học để hoàn hảo. Người bản ngữ cũng nói sai ngữ pháp." },
    ],
  },
];
