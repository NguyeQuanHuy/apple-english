import type { BlogPost } from "./blog.d";

/** Newer posts. A post here with the same slug as one in blog.ts replaces it. */
export const BLOG_EXTRA: BlogPost[] = [
  // ─────────────────────────────────────────────────────────────
  {
    slug: "30-thanh-ngu-pho-bien-tieng-anh",
    title: "30 thành ngữ phổ biến nhất trong tiếng Anh",
    emoji: "💬",
    summary: "30 thành ngữ người bản xứ dùng hằng ngày, chia theo tình huống, kèm nghĩa tiếng Việt và câu ví dụ để nghe đọc mẫu.",
    tags: ["Từ vựng", "Giao tiếp"],
    date: "03/06/2026",
    readingTime: "8 phút đọc",
    content: [
      { type: "paragraph", text: "Thành ngữ (idiom) là cụm từ có nghĩa khác hẳn nghĩa của từng chữ. \"It's raining cats and dogs\" không có con mèo hay con chó nào cả, nó chỉ có nghĩa là trời mưa rất to. Đây là lý do bạn hiểu từng từ trong phim mà vẫn không hiểu câu." },
      { type: "paragraph", text: "Tin tốt là người bản xứ chỉ dùng đi dùng lại một nhóm thành ngữ không lớn. 30 thành ngữ dưới đây xuất hiện rất thường xuyên trong phim, podcast, email công việc và nói chuyện hằng ngày." },
      { type: "callout", emoji: "🎧", text: "Bấm nút loa để nghe từng thành ngữ và câu ví dụ. Học thuộc cả câu ví dụ thay vì chỉ học nghĩa, vì thành ngữ khó dùng sai khi bạn nhớ nó trong một câu hoàn chỉnh." },

      { type: "heading", text: "Đời sống hằng ngày" },
      { type: "vocab", word: "A piece of cake", meaning: "Rất dễ", example: "The exam was a piece of cake." },
      { type: "vocab", word: "Hit the sack", meaning: "Đi ngủ", example: "I'm exhausted. Time to hit the sack." },
      { type: "vocab", word: "Under the weather", meaning: "Hơi mệt, hơi ốm", example: "I'm feeling a bit under the weather today." },
      { type: "vocab", word: "Cost an arm and a leg", meaning: "Rất đắt", example: "That new phone costs an arm and a leg." },
      { type: "vocab", word: "Spill the beans", meaning: "Lỡ tiết lộ bí mật", example: "Who spilled the beans about the party?" },
      { type: "vocab", word: "Once in a blue moon", meaning: "Rất hiếm khi", example: "I only eat fast food once in a blue moon." },
      { type: "vocab", word: "It's raining cats and dogs", meaning: "Mưa như trút nước", example: "Take an umbrella. It's raining cats and dogs." },
      { type: "vocab", word: "Hit the road", meaning: "Lên đường, rời đi", example: "It's getting late. Let's hit the road." },
      { type: "vocab", word: "Break the ice", meaning: "Phá vỡ không khí ngượng ngùng", example: "He told a joke to break the ice." },
      { type: "vocab", word: "Keep an eye on", meaning: "Để mắt tới, trông chừng", example: "Can you keep an eye on my bag?" },

      { type: "heading", text: "Ở chỗ làm" },
      { type: "vocab", word: "On the same page", meaning: "Hiểu ý nhau, thống nhất", example: "Let's make sure we're all on the same page." },
      { type: "vocab", word: "Back to the drawing board", meaning: "Làm lại từ đầu", example: "The client said no. Back to the drawing board." },
      { type: "vocab", word: "The ball is in your court", meaning: "Đến lượt bạn quyết định", example: "I've made my offer. The ball is in your court." },
      { type: "vocab", word: "Call it a day", meaning: "Nghỉ thôi, dừng việc hôm nay", example: "We've done enough. Let's call it a day." },
      { type: "vocab", word: "Get the ball rolling", meaning: "Bắt đầu một việc", example: "Let's get the ball rolling with a quick introduction." },
      { type: "vocab", word: "Think outside the box", meaning: "Suy nghĩ sáng tạo, khác lối mòn", example: "We need to think outside the box on this project." },
      { type: "vocab", word: "Cut corners", meaning: "Làm ẩu cho nhanh, đốt cháy giai đoạn", example: "Don't cut corners with safety checks." },
      { type: "vocab", word: "Learn the ropes", meaning: "Học việc, làm quen công việc mới", example: "It takes a few weeks to learn the ropes." },
      { type: "vocab", word: "Up in the air", meaning: "Chưa chắc chắn, chưa quyết", example: "Our travel plans are still up in the air." },
      { type: "vocab", word: "Pull your weight", meaning: "Làm tròn phần việc của mình", example: "Everyone on the team has to pull their weight." },

      { type: "heading", text: "Cảm xúc và tình huống" },
      { type: "vocab", word: "Break a leg", meaning: "Chúc may mắn (trước buổi diễn, buổi thi)", example: "You have an interview today? Break a leg!" },
      { type: "vocab", word: "Over the moon", meaning: "Vui sướng tột độ", example: "She was over the moon about her new job." },
      { type: "vocab", word: "Feel blue", meaning: "Cảm thấy buồn", example: "I always feel a bit blue on Sunday evenings." },
      { type: "vocab", word: "Get cold feet", meaning: "Chùn bước vào phút chót", example: "He got cold feet before the presentation." },
      { type: "vocab", word: "Let off steam", meaning: "Xả stress, giải toả", example: "I go running to let off steam." },
      { type: "vocab", word: "Beat around the bush", meaning: "Nói vòng vo", example: "Stop beating around the bush and tell me." },
      { type: "vocab", word: "Bite the bullet", meaning: "Cắn răng làm việc khó", example: "I hate the dentist, but I'll bite the bullet." },
      { type: "vocab", word: "In hot water", meaning: "Gặp rắc rối", example: "He's in hot water for missing the deadline." },
      { type: "vocab", word: "Don't cry over spilt milk", meaning: "Đừng tiếc nuối chuyện đã rồi", example: "You lost the match, but don't cry over spilt milk." },
      { type: "vocab", word: "Hang in there", meaning: "Cố lên, đừng bỏ cuộc", example: "The first months are hard. Hang in there!" },

      { type: "heading", text: "Học thành ngữ thế nào cho nhớ?" },
      { type: "list", items: [
        "Mỗi ngày chỉ học 3 thành ngữ, đọc to câu ví dụ 5 lần.",
        "Tự đặt một câu về chính cuộc sống của bạn, ví dụ: \"Learning English is not a piece of cake for me.\"",
        "Khi xem phim có phụ đề, để ý xem thành ngữ nào trong danh sách này xuất hiện.",
        "Đừng cố nhét thành ngữ vào mọi câu. Dùng đúng lúc mới tự nhiên.",
      ] },
      { type: "quote", text: "Biết thành ngữ là dấu hiệu bạn đã vượt qua ngưỡng học tiếng Anh cơ bản." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "cach-gioi-thieu-ban-than-bang-tieng-anh",
    title: "Cách giới thiệu bản thân bằng tiếng Anh: mẫu câu cho người mới bắt đầu",
    emoji: "👋",
    summary: "Công thức 4 phần để giới thiệu bản thân trong 30 giây, ba bài mẫu cho lúc làm quen, ở công ty và khi phỏng vấn, cùng 5 lỗi người Việt hay mắc.",
    tags: ["Giao tiếp", "Mất gốc"],
    date: "07/11/2026",
    readingTime: "6 phút đọc",
    content: [
      { type: "paragraph", text: "Giới thiệu bản thân là câu chuyện bạn sẽ kể nhiều nhất bằng tiếng Anh: ngày đầu đi làm, lớp học mới, buổi phỏng vấn, hay khi gặp bạn bè quốc tế. Nắm chắc phần này, bạn có ngay một đoạn nói trôi chảy để tự tin mở lời." },
      { type: "heading", text: "Công thức 4 phần: Ai, Ở đâu, Làm gì, Thích gì" },
      { type: "paragraph", text: "Bạn không cần nói dài. Một đoạn giới thiệu tốt chỉ khoảng 4 đến 6 câu, đi theo đúng thứ tự dưới đây." },
      { type: "vocab", word: "My name is Minh.", meaning: "Tên tôi là Minh. (Hoặc ngắn gọn: I'm Minh.)", example: "Hi, I'm Minh. Nice to meet you." },
      { type: "vocab", word: "I'm from Vietnam.", meaning: "Tôi đến từ Việt Nam.", example: "I'm from Da Nang, a city in central Vietnam." },
      { type: "vocab", word: "I work as a nurse.", meaning: "Tôi làm y tá.", example: "I work as a software developer at a small company." },
      { type: "vocab", word: "I'm a student.", meaning: "Tôi là sinh viên.", example: "I'm a second-year student at Hanoi University." },
      { type: "vocab", word: "In my free time, I like cooking.", meaning: "Lúc rảnh tôi thích nấu ăn.", example: "In my free time, I like playing football and watching films." },
      { type: "vocab", word: "I'm learning English because…", meaning: "Tôi đang học tiếng Anh vì…", example: "I'm learning English because I want to work abroad." },

      { type: "heading", text: "Bài mẫu 1: Làm quen bạn mới" },
      { type: "callout", emoji: "🙂", text: "Hi, I'm Lan. I'm from Hanoi, but I live in Berlin now. I work in a restaurant. In my free time, I love taking photos and trying new food. Nice to meet you!" },
      { type: "paragraph", text: "Giọng thân mật, câu ngắn. Dùng \"I'm\" thay vì \"My name is\" cho tự nhiên. Kết thúc bằng \"Nice to meet you!\" và hỏi lại người kia: \"What about you?\"" },

      { type: "heading", text: "Bài mẫu 2: Ngày đầu ở công ty" },
      { type: "callout", emoji: "💼", text: "Hello everyone, my name is Tuan. I've just joined the IT team as a system administrator. Before this, I worked for three years at a bank in Ho Chi Minh City. I'm looking forward to working with you all." },
      { type: "paragraph", text: "Ở công ty, nói rõ vị trí (as a…), kinh nghiệm trước đó, và kết bằng một câu thể hiện thiện chí như \"I'm looking forward to working with you.\"" },

      { type: "heading", text: "Bài mẫu 3: Khi phỏng vấn xin việc" },
      { type: "callout", emoji: "🎯", text: "I'm Hoa, and I have four years of experience in customer service. In my last job, I handled around fifty customer calls a day and helped reduce complaints by twenty percent. I'm good at staying calm under pressure, and I'm excited about this role because I want to grow in an international company." },
      { type: "paragraph", text: "Khi phỏng vấn, đừng kể sở thích hay gia đình trước. Tập trung vào kinh nghiệm, một thành tích có con số cụ thể, điểm mạnh, và lý do bạn muốn vị trí này." },

      { type: "heading", text: "5 lỗi người Việt hay mắc" },
      { type: "compare", leftLabel: "Chưa đúng", left: "My name's is Minh.", rightLabel: "Đúng", right: "My name is Minh. / My name's Minh." },
      { type: "compare", leftLabel: "Chưa đúng", left: "I am 25 years.", rightLabel: "Đúng", right: "I am 25 years old. / I'm 25." },
      { type: "compare", leftLabel: "Chưa đúng", left: "I am work in a bank.", rightLabel: "Đúng", right: "I work in a bank." },
      { type: "compare", leftLabel: "Chưa đúng", left: "I like play football.", rightLabel: "Đúng", right: "I like playing football. / I like to play football." },
      { type: "compare", leftLabel: "Chưa đúng", left: "I come from Vietnamese.", rightLabel: "Đúng", right: "I come from Vietnam. / I'm Vietnamese." },
      { type: "paragraph", text: "Lỗi thứ ba rất phổ biến: tiếng Việt nói \"tôi là làm ở ngân hàng\" nên ta hay thêm \"am\" trước động từ. Nhớ quy tắc: đã có động từ thường (work, live, like) thì không cần \"am, is, are\"." },

      { type: "heading", text: "Luyện thế nào cho trôi chảy?" },
      { type: "list", items: [
        "Viết đoạn giới thiệu của riêng bạn theo công thức 4 phần.",
        "Đọc to 10 lần, rồi tập nói mà không nhìn giấy.",
        "Tự ghi âm, nghe lại và so với câu mẫu ở trên.",
        "Chuẩn bị sẵn hai bản: một bản thân mật, một bản cho công việc.",
      ] },
      { type: "quote", text: "Một đoạn giới thiệu được tập kỹ sẽ giúp bạn vượt qua 30 giây khó khăn nhất của mọi cuộc trò chuyện." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "phan-biet-hien-tai-don-va-hien-tai-tiep-dien",
    title: "Phân biệt thì hiện tại đơn và hiện tại tiếp diễn trong 5 phút",
    emoji: "⏱️",
    summary: "Khi nào nói \"I work\", khi nào nói \"I'm working\"? Cách phân biệt dễ nhớ, dấu hiệu nhận biết và những động từ không bao giờ thêm -ing.",
    tags: ["Ngữ pháp", "Mất gốc"],
    date: "06/11/2026",
    readingTime: "5 phút đọc",
    content: [
      { type: "paragraph", text: "Tiếng Việt không chia thì: \"tôi làm việc\" và \"tôi đang làm việc\" chỉ khác nhau một chữ \"đang\". Tiếng Anh thì phân biệt rõ ràng, và đây là hai thì bạn dùng nhiều nhất mỗi ngày. Hiểu đúng hai thì này là nền móng cho mọi thì khác." },
      { type: "heading", text: "Ý chính: thói quen hay ngay lúc này?" },
      { type: "compare", leftLabel: "Hiện tại đơn: thói quen, sự thật", left: "I drink coffee every morning. (Sáng nào tôi cũng uống cà phê.)", rightLabel: "Hiện tại tiếp diễn: đang diễn ra", right: "I'm drinking coffee right now. (Tôi đang uống cà phê.)" },
      { type: "compare", leftLabel: "Hiện tại đơn", left: "She works in a hospital. (Công việc lâu dài của cô ấy.)", rightLabel: "Hiện tại tiếp diễn", right: "She's working from home this week. (Tạm thời, chỉ tuần này.)" },

      { type: "heading", text: "Công thức" },
      { type: "list", items: [
        "Hiện tại đơn: I / You / We / They + động từ (I work). He / She / It + động từ thêm -s hoặc -es (She works, He watches).",
        "Phủ định hiện tại đơn: don't / doesn't + động từ nguyên mẫu (She doesn't work on Sundays).",
        "Hiện tại tiếp diễn: am / is / are + động từ thêm -ing (I am working, They are playing).",
        "Phủ định hiện tại tiếp diễn: am not / isn't / aren't + động từ thêm -ing (He isn't sleeping).",
      ] },

      { type: "heading", text: "Dấu hiệu nhận biết" },
      { type: "paragraph", text: "Nhìn trạng từ trong câu là đoán được thì gần như ngay lập tức." },
      { type: "vocab", word: "always, usually, often, sometimes, never", meaning: "Luôn luôn, thường, hay, thỉnh thoảng, không bao giờ → hiện tại đơn", example: "I usually take the bus to work." },
      { type: "vocab", word: "every day, every week, on Mondays", meaning: "Mỗi ngày, mỗi tuần, vào các thứ Hai → hiện tại đơn", example: "We play football every Saturday." },
      { type: "vocab", word: "now, right now, at the moment", meaning: "Bây giờ, ngay lúc này → hiện tại tiếp diễn", example: "I'm cooking dinner at the moment." },
      { type: "vocab", word: "Look! Listen!", meaning: "Nhìn kìa! Nghe kìa! → hiện tại tiếp diễn", example: "Look! It's snowing." },
      { type: "vocab", word: "this week, these days, currently", meaning: "Tuần này, dạo này, hiện tại → hiện tại tiếp diễn (tạm thời)", example: "I'm learning German these days." },

      { type: "heading", text: "Bẫy lớn nhất: động từ chỉ trạng thái" },
      { type: "paragraph", text: "Một số động từ diễn tả cảm giác, suy nghĩ hay sở hữu, không phải hành động, nên gần như không dùng ở dạng -ing, kể cả khi nói về ngay lúc này." },
      { type: "list", items: [
        "Cảm xúc: like, love, hate, want, need, prefer",
        "Suy nghĩ: know, understand, believe, remember, mean",
        "Sở hữu: have (khi nghĩa là sở hữu), own, belong",
        "Giác quan: see, hear, smell, taste (khi tự cảm nhận được)",
      ] },
      { type: "compare", leftLabel: "Chưa đúng", left: "I'm knowing the answer. / I'm wanting a coffee.", rightLabel: "Đúng", right: "I know the answer. / I want a coffee." },
      { type: "callout", emoji: "💡", text: "Mẹo nhớ: nếu không thể \"đang\" làm việc đó trong vài giây rồi dừng lại, thì đó thường là động từ trạng thái. Bạn có thể đang chạy, đang ăn, nhưng không thể \"đang biết\"." },

      { type: "heading", text: "Tự kiểm tra nhanh" },
      { type: "list", items: [
        "My brother ___ (live) in Hanoi. → lives (sự thật lâu dài)",
        "Be quiet! The baby ___ (sleep). → is sleeping (ngay lúc này)",
        "I ___ (not understand) this word. → don't understand (động từ trạng thái)",
        "They ___ (watch) a film right now. → are watching",
      ] },
      { type: "paragraph", text: "Muốn luyện thêm, vào game Điền từ hoặc bài \"Hiện tại tiếp diễn\" trong lộ trình mất gốc. Làm đều 10 câu mỗi ngày, sau một tuần bạn sẽ chọn đúng thì theo phản xạ." },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    slug: "phong-van-xin-viec-bang-tieng-anh",
    title: "Phỏng vấn xin việc bằng tiếng Anh: 10 câu hỏi thường gặp và cách trả lời",
    emoji: "🤝",
    summary: "10 câu hỏi gần như buổi phỏng vấn nào cũng có, nghĩa tiếng Việt, câu trả lời mẫu để luyện nói, và những câu nên tránh.",
    tags: ["Giao tiếp", "Kinh nghiệm"],
    date: "05/11/2026",
    readingTime: "7 phút đọc",
    content: [
      { type: "paragraph", text: "Phỏng vấn bằng tiếng Anh đáng sợ chủ yếu vì ta không biết sẽ bị hỏi gì. Thực tế, phần lớn buổi phỏng vấn đều xoay quanh khoảng 10 câu hỏi quen thuộc. Chuẩn bị trước câu trả lời cho từng câu, bạn sẽ bước vào phòng với tâm thế khác hẳn." },
      { type: "callout", emoji: "🎧", text: "Mỗi mục dưới đây gồm câu hỏi, nghĩa tiếng Việt và một câu trả lời mẫu. Bấm loa để nghe, rồi thay thông tin của chính bạn vào để luyện nói." },

      { type: "heading", text: "Câu hỏi về bản thân" },
      { type: "vocab", word: "Tell me about yourself.", meaning: "Hãy giới thiệu về bản thân bạn.", example: "I have three years of experience in IT support, and I'm currently training as a system administrator." },
      { type: "vocab", word: "What are your strengths?", meaning: "Điểm mạnh của bạn là gì?", example: "I'm a fast learner, and I stay calm when things go wrong." },
      { type: "vocab", word: "What is your biggest weakness?", meaning: "Điểm yếu lớn nhất của bạn là gì?", example: "My English presentations used to be weak, so I now practise every week." },
      { type: "vocab", word: "Where do you see yourself in five years?", meaning: "Bạn thấy mình ở đâu sau năm năm nữa?", example: "I'd like to lead a small team and take on more responsibility." },

      { type: "heading", text: "Câu hỏi về kinh nghiệm" },
      { type: "vocab", word: "Why did you leave your last job?", meaning: "Vì sao bạn nghỉ công việc trước?", example: "I wanted new challenges and the chance to work internationally." },
      { type: "vocab", word: "Tell me about a problem you solved.", meaning: "Kể về một vấn đề bạn đã giải quyết.", example: "Our network kept going down, so I found the faulty switch and replaced it." },
      { type: "vocab", word: "How do you handle stress?", meaning: "Bạn xử lý áp lực thế nào?", example: "I make a list, start with the most urgent task and take short breaks." },

      { type: "heading", text: "Câu hỏi về công ty và vị trí" },
      { type: "vocab", word: "Why do you want to work here?", meaning: "Vì sao bạn muốn làm ở đây?", example: "I like your focus on training, and your products are used by millions of people." },
      { type: "vocab", word: "Why should we hire you?", meaning: "Vì sao chúng tôi nên tuyển bạn?", example: "I have the technical skills you need, and I learn quickly." },
      { type: "vocab", word: "Do you have any questions for us?", meaning: "Bạn có câu hỏi nào cho chúng tôi không?", example: "Yes. What does a typical day look like in this role?" },

      { type: "heading", text: "Mẹo trả lời: công thức STAR" },
      { type: "paragraph", text: "Với câu hỏi \"Kể về một lần bạn…\", hãy trả lời theo 4 bước để câu chuyện rõ ràng và có kết quả cụ thể." },
      { type: "list", items: [
        "Situation: bối cảnh. In my last job, our website was very slow.",
        "Task: nhiệm vụ của bạn. I had to find the cause.",
        "Action: bạn đã làm gì. I checked the logs and optimised the database.",
        "Result: kết quả, nên có con số. The page loaded twice as fast.",
      ] },

      { type: "heading", text: "Những câu nên tránh" },
      { type: "compare", leftLabel: "Nên tránh", left: "I don't have any weaknesses.", rightLabel: "Nên nói", right: "One thing I'm working on is…" },
      { type: "compare", leftLabel: "Nên tránh", left: "My last boss was terrible.", rightLabel: "Nên nói", right: "I was looking for a better fit for my skills." },
      { type: "compare", leftLabel: "Nên tránh", left: "No, I don't have any questions.", rightLabel: "Nên nói", right: "Yes, what are the next steps in the process?" },

      { type: "heading", text: "Khi không nghe rõ câu hỏi" },
      { type: "paragraph", text: "Không hiểu câu hỏi là chuyện bình thường, kể cả với người bản xứ. Hỏi lại một cách lịch sự còn tốt hơn trả lời sai ý." },
      { type: "vocab", word: "Sorry, could you repeat the question?", meaning: "Xin lỗi, anh/chị nhắc lại câu hỏi được không?", example: "Sorry, could you repeat the question, please?" },
      { type: "vocab", word: "Do you mean…?", meaning: "Ý anh/chị là…?", example: "Do you mean my experience with customers?" },
      { type: "vocab", word: "That's a good question. Let me think.", meaning: "Câu hỏi hay. Để tôi suy nghĩ một chút.", example: "That's a good question. Let me think for a moment." },
      { type: "quote", text: "Nhà tuyển dụng không chờ tiếng Anh hoàn hảo. Họ muốn thấy bạn giao tiếp được, tự tin và chuẩn bị kỹ." },
    ],
  },
];
