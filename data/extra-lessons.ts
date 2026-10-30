import type { Lesson } from "./beginner-lessons";

export const EXTRA_LESSONS: Lesson[] = [
  {
    id: "b-11",
    unit: 6,
    order: 1,
    level: "A1",
    xpReward: 30,
    title: "So sánh hơn — Comparative",
    subtitle: "Bigger, faster, more beautiful...",
    steps: [
      { kind: "intro", title: "So sánh trong tiếng Anh", body: "Khi muốn nói A hơn B, ta thêm -er vào tính từ hoặc dùng more. Ví dụ: tall → taller, beautiful → more beautiful." },
      { kind: "vocab", items: [
        { en: "taller", vi: "cao hơn", example: "He is taller than me.", exampleVi: "Anh ấy cao hơn tôi." },
        { en: "faster", vi: "nhanh hơn", example: "Cars are faster than bicycles.", exampleVi: "Xe hơi nhanh hơn xe đạp." },
        { en: "more expensive", vi: "đắt hơn", example: "Gold is more expensive than silver.", exampleVi: "Vàng đắt hơn bạc." },
        { en: "better", vi: "tốt hơn", example: "This is better than that.", exampleVi: "Cái này tốt hơn cái kia." },
        { en: "worse", vi: "tệ hơn", example: "My English is worse than yours.", exampleVi: "Tiếng Anh của tôi tệ hơn của bạn." },
      ]},
      { kind: "grammar", title: "Quy tắc so sánh hơn", explanation: "Tính từ ngắn (1 âm tiết) + er. Tính từ dài (2 âm tiết trở lên) dùng more + tính từ. Bất quy tắc: good → better, bad → worse, far → farther.", examples: [
        { en: "She is smarter than her brother.", vi: "Cô ấy thông minh hơn anh trai." },
        { en: "This phone is more modern than that one.", vi: "Điện thoại này hiện đại hơn cái kia." },
      ]},
      { kind: "quiz", questions: [
        { prompt: "He is ___ than me. (tall)", options: ["more tall", "taller", "tallest", "tall"], correctIndex: 1 },
        { prompt: "This bag is ___ than that one. (expensive)", options: ["expensiver", "more expensive", "most expensive", "expensivest"], correctIndex: 1 },
        { prompt: "So sánh hơn của 'good' là?", options: ["gooder", "more good", "better", "best"], correctIndex: 2 },
      ]},
    ],
  },
  {
    id: "b-12",
    unit: 6,
    order: 2,
    level: "A1",
    xpReward: 30,
    title: "So sánh nhất — Superlative",
    subtitle: "The biggest, the best, the most...",
    steps: [
      { kind: "intro", title: "So sánh nhất", body: "Khi muốn nói A là nhất trong một nhóm, ta dùng the + tính từ + est, hoặc the most + tính từ." },
      { kind: "vocab", items: [
        { en: "the tallest", vi: "cao nhất", example: "She is the tallest in class.", exampleVi: "Cô ấy cao nhất lớp." },
        { en: "the fastest", vi: "nhanh nhất", example: "He is the fastest runner.", exampleVi: "Anh ấy là người chạy nhanh nhất." },
        { en: "the most beautiful", vi: "đẹp nhất", example: "This is the most beautiful city.", exampleVi: "Đây là thành phố đẹp nhất." },
        { en: "the best", vi: "tốt nhất", example: "She is the best student.", exampleVi: "Cô ấy là học sinh giỏi nhất." },
        { en: "the worst", vi: "tệ nhất", example: "This is the worst day ever.", exampleVi: "Đây là ngày tệ nhất từ trước đến nay." },
      ]},
      { kind: "quiz", questions: [
        { prompt: "Mount Everest is ___ mountain. (high)", options: ["higher", "the highest", "most high", "the most high"], correctIndex: 1 },
        { prompt: "She is ___ student in class. (good)", options: ["the goodest", "the most good", "the best", "better"], correctIndex: 2 },
      ]},
    ],
  },
  {
    id: "b-13",
    unit: 7,
    order: 1,
    level: "A1",
    xpReward: 35,
    title: "Hiện tại tiếp diễn — Present Continuous",
    subtitle: "I am eating. She is working.",
    steps: [
      { kind: "intro", title: "Đang làm gì lúc này?", body: "Present Continuous dùng để nói về việc đang xảy ra ngay lúc nói. Công thức: am/is/are + V-ing." },
      { kind: "grammar", title: "Công thức Present Continuous", explanation: "I am + V-ing. He/She/It is + V-ing. We/You/They are + V-ing. Thêm -ing vào động từ: work → working, run → running, sit → sitting.", examples: [
        { en: "I am studying English now.", vi: "Tôi đang học tiếng Anh." },
        { en: "She is cooking dinner.", vi: "Cô ấy đang nấu cơm tối." },
        { en: "They are playing football.", vi: "Họ đang đá bóng." },
      ]},
      { kind: "fill-blank", items: [
        { sentence: "I ___ TV right now. (watch)", answer: "am watching", vi: "Tôi đang xem TV.", hint: "(am + watching)" },
        { sentence: "She ___ to music. (listen)", answer: "is listening", vi: "Cô ấy đang nghe nhạc.", hint: "(is + listening)" },
        { sentence: "They ___ in the park. (run)", answer: "are running", vi: "Họ đang chạy trong công viên.", hint: "(are + running)" },
      ]},
      { kind: "quiz", questions: [
        { prompt: "I ___ dinner now. (cook)", options: ["cook", "am cooking", "is cooking", "are cooking"], correctIndex: 1 },
        { prompt: "She ___ a book. (read)", options: ["read", "reads", "is reading", "are reading"], correctIndex: 2 },
        { prompt: "They ___ football. (play)", options: ["play", "plays", "is playing", "are playing"], correctIndex: 3 },
      ]},
    ],
  },
  {
    id: "b-14",
    unit: 7,
    order: 2,
    level: "A1",
    xpReward: 30,
    title: "Thì tương lai đơn — Will",
    subtitle: "Quyết định tức thì và dự đoán",
    steps: [
      { kind: "intro", title: "Nói về tương lai với Will", body: "Will dùng khi quyết định ngay lúc nói, khi dự đoán, hoặc khi hứa hẹn. Công thức: will + động từ nguyên mẫu." },
      { kind: "vocab", items: [
        { en: "I will call you.", vi: "Tôi sẽ gọi cho bạn.", example: "I will call you tonight.", exampleVi: "Tôi sẽ gọi cho bạn tối nay." },
        { en: "It will rain.", vi: "Trời sẽ mưa.", example: "I think it will rain tomorrow.", exampleVi: "Tôi nghĩ ngày mai trời sẽ mưa." },
        { en: "I won't", vi: "Tôi sẽ không", example: "I won't be late.", exampleVi: "Tôi sẽ không đến muộn." },
        { en: "Will you?", vi: "Bạn có... không?", example: "Will you help me?", exampleVi: "Bạn có giúp tôi không?" },
      ]},
      { kind: "quiz", questions: [
        { prompt: "I ___ help you tomorrow.", options: ["am", "was", "will", "have"], correctIndex: 2 },
        { prompt: "'Will not' viết tắt là?", options: ["willn't", "won't", "will't", "wont"], correctIndex: 1 },
        { prompt: "Dùng will khi nào?", options: ["Kể chuyện quá khứ", "Quyết định tức thì", "Mô tả hiện tại", "Hành động đã hoàn thành"], correctIndex: 1 },
      ]},
    ],
  },
  {
    id: "b-15",
    unit: 8,
    order: 1,
    level: "A1",
    xpReward: 35,
    title: "Động từ khuyết thiếu — Can, Could, Should",
    subtitle: "Khả năng, phép lịch sự, lời khuyên",
    steps: [
      { kind: "intro", title: "Động từ khuyết thiếu", body: "Can = có thể (khả năng ở hiện tại). Could = có thể (lịch sự hơn, hoặc khả năng trong quá khứ). Should = nên (lời khuyên). Sau cả ba đều là động từ nguyên mẫu." },
      { kind: "grammar", title: "Can / Could / Should", explanation: "Can: I can swim. Could: I could swim when I was 5. Should: You should study more. Phủ định: cannot (can't), could not (couldn't), should not (shouldn't).", examples: [
        { en: "Can you speak English?", vi: "Bạn có thể nói tiếng Anh không?" },
        { en: "You should sleep early.", vi: "Bạn nên ngủ sớm." },
        { en: "I could not come yesterday.", vi: "Hôm qua tôi không thể đến." },
      ]},
      { kind: "quiz", questions: [
        { prompt: "I ___ swim very well.", options: ["can", "am", "have", "do"], correctIndex: 0 },
        { prompt: "You ___ eat more vegetables.", options: ["can", "could", "should", "will"], correctIndex: 2 },
        { prompt: "'Cannot' viết tắt là?", options: ["cant", "can't", "cant'", "ca'nt"], correctIndex: 1 },
      ]},
    ],
  },
  {
    id: "b-16",
    unit: 8,
    order: 2,
    level: "A2",
    xpReward: 35,
    title: "Must & Have to",
    subtitle: "Bắt buộc và cần thiết",
    steps: [
      { kind: "intro", title: "Diễn đạt sự bắt buộc", body: "Must và have to đều có nghĩa là 'phải'. Must: bắt buộc do chính mình thấy cần, hoặc do quy định. Have to: do hoàn cảnh bên ngoài bắt buộc." },
      { kind: "vocab", items: [
        { en: "must", vi: "phải (bắt buộc)", example: "You must wear a seatbelt.", exampleVi: "Bạn phải thắt dây an toàn." },
        { en: "have to", vi: "phải (do hoàn cảnh)", example: "I have to work on weekends.", exampleVi: "Tôi phải làm việc cuối tuần." },
        { en: "must not", vi: "không được phép", example: "You must not smoke here.", exampleVi: "Bạn không được hút thuốc ở đây." },
        { en: "do not have to", vi: "không cần thiết", example: "You don't have to come.", exampleVi: "Bạn không cần phải đến." },
      ]},
      { kind: "quiz", questions: [
        { prompt: "Students ___ wear uniforms at school.", options: ["can", "must", "should not", "could"], correctIndex: 1 },
        { prompt: "'Must not' có nghĩa là?", options: ["Không cần", "Không được phép", "Không nên", "Có thể không"], correctIndex: 1 },
        { prompt: "'I don't have to go.' nghĩa là?", options: ["Tôi không được đi", "Tôi không cần phải đi", "Tôi không thể đi", "Tôi phải đi"], correctIndex: 1 },
      ]},
    ],
  },
  {
    id: "b-17",
    unit: 9,
    order: 1,
    level: "A2",
    xpReward: 40,
    title: "Hiện tại hoàn thành — Present Perfect",
    subtitle: "Have you ever...? I have just...",
    steps: [
      { kind: "intro", title: "Hiện tại hoàn thành", body: "Present Perfect dùng khi hành động xảy ra trong quá khứ nhưng còn liên quan đến hiện tại. Công thức: have/has + quá khứ phân từ (V3)." },
      { kind: "grammar", title: "Công thức Present Perfect", explanation: "I/We/You/They + have + V3. He/She/It + has + V3. Hay đi với: just, already, yet, ever, never. Động từ có quy tắc: thêm -ed. Bất quy tắc: go → gone, eat → eaten, see → seen.", examples: [
        { en: "I have just eaten lunch.", vi: "Tôi vừa ăn trưa xong." },
        { en: "She has never been to Japan.", vi: "Cô ấy chưa bao giờ đến Nhật." },
        { en: "Have you ever tried sushi?", vi: "Bạn đã bao giờ ăn sushi chưa?" },
      ]},
      { kind: "quiz", questions: [
        { prompt: "I ___ just finished my homework.", options: ["have", "has", "had", "am"], correctIndex: 0 },
        { prompt: "She ___ never eaten pizza.", options: ["have", "has", "had", "is"], correctIndex: 1 },
        { prompt: "Have you ___ to Paris? (go)", options: ["go", "went", "gone", "going"], correctIndex: 2 },
      ]},
    ],
  },
  {
    id: "b-18",
    unit: 9,
    order: 2,
    level: "A2",
    xpReward: 35,
    title: "Câu bị động — Passive Voice",
    subtitle: "The letter was written by him.",
    steps: [
      { kind: "intro", title: "Câu bị động là gì?", body: "Câu bị động dùng khi hành động quan trọng hơn người làm. Công thức: am/is/are + V3 (hiện tại) hoặc was/were + V3 (quá khứ)." },
      { kind: "grammar", title: "Bị động hiện tại và quá khứ", explanation: "Chủ động: The chef cooks the food. Bị động: The food is cooked by the chef. Bị động quá khứ: The food was cooked by the chef.", examples: [
        { en: "English is spoken worldwide.", vi: "Tiếng Anh được nói trên toàn thế giới." },
        { en: "The letter was written yesterday.", vi: "Bức thư được viết hôm qua." },
        { en: "Mistakes were made.", vi: "Đã có những sai lầm xảy ra." },
      ]},
      { kind: "quiz", questions: [
        { prompt: "The cake ___ by my mother. (make - quá khứ)", options: ["make", "makes", "was made", "is made"], correctIndex: 2 },
        { prompt: "English ___ in many countries. (speak - hiện tại)", options: ["speak", "spoke", "is spoken", "was spoken"], correctIndex: 2 },
      ]},
    ],
  },
  {
    id: "b-19",
    unit: 10,
    order: 1,
    level: "A2",
    xpReward: 40,
    title: "Câu điều kiện — If Clauses",
    subtitle: "If it rains, I will stay home.",
    steps: [
      { kind: "intro", title: "Câu điều kiện loại 1", body: "Dùng cho điều kiện có thể xảy ra trong tương lai. Công thức: If + hiện tại đơn, will + động từ." },
      { kind: "grammar", title: "If clause loại 1", explanation: "If + S + V (hiện tại đơn), S + will + V. Ví dụ: If it rains, I will bring an umbrella. Nếu trời mưa, tôi sẽ mang ô.", examples: [
        { en: "If I study hard, I will pass the exam.", vi: "Nếu tôi học chăm chỉ, tôi sẽ đỗ kỳ thi." },
        { en: "If you are hungry, I will cook for you.", vi: "Nếu bạn đói, tôi sẽ nấu ăn cho bạn." },
        { en: "If it is sunny, we will go to the beach.", vi: "Nếu trời nắng, chúng tôi sẽ đi biển." },
      ]},
      { kind: "sentence-builder", puzzles: [
        { target: "If it rains, I will stay home.", pieces: ["If", "it", "rains,", "I", "will", "stay", "home."], vi: "Nếu trời mưa, tôi sẽ ở nhà." },
        { target: "If you study, you will pass.", pieces: ["If", "you", "study,", "you", "will", "pass."], vi: "Nếu bạn học, bạn sẽ đỗ." },
      ]},
      { kind: "quiz", questions: [
        { prompt: "If I ___ money, I will buy a car.", options: ["have", "had", "will have", "having"], correctIndex: 0 },
        { prompt: "If it rains, she ___ bring an umbrella.", options: ["will", "would", "can", "is"], correctIndex: 0 },
      ]},
    ],
  },
  {
    id: "b-20",
    unit: 10,
    order: 2,
    level: "A2",
    xpReward: 40,
    title: "Kỹ năng viết email cơ bản",
    subtitle: "Dear Sir/Madam, I am writing to...",
    steps: [
      { kind: "intro", title: "Viết email tiếng Anh", body: "Email tiếng Anh có cấu trúc rõ ràng: lời chào (Greeting), nội dung chính (Body), lời kết (Closing). Giữ giọng văn lịch sự và rõ ràng." },
      { kind: "vocab", items: [
        { en: "Dear Sir/Madam", vi: "Kính gửi Ông/Bà", example: "Dear Sir/Madam, I am writing to...", exampleVi: "Kính gửi Ông/Bà, tôi viết email này để..." },
        { en: "I am writing to", vi: "Tôi viết để", example: "I am writing to inquire about...", exampleVi: "Tôi viết để hỏi về..." },
        { en: "I would like to", vi: "Tôi muốn", example: "I would like to apply for...", exampleVi: "Tôi muốn ứng tuyển vị trí..." },
        { en: "Please find attached", vi: "Vui lòng xem tệp đính kèm", example: "Please find attached my CV.", exampleVi: "Vui lòng xem CV đính kèm." },
        { en: "Yours sincerely", vi: "Trân trọng", example: "Yours sincerely, John", exampleVi: "Trân trọng, John" },
        { en: "I look forward to", vi: "Tôi mong chờ", example: "I look forward to hearing from you.", exampleVi: "Tôi mong nhận được hồi âm của bạn." },
      ]},
      { kind: "quiz", questions: [
        { prompt: "Email trang trọng thường kết thúc bằng cụm nào?", options: ["Dear", "Hello", "Yours sincerely", "Hi there"], correctIndex: 2 },
        { prompt: "'I look forward to hearing from you' có nghĩa là?", options: ["Tôi sẽ nghe bạn", "Tôi mong nhận tin từ bạn", "Tôi đã nghe bạn", "Bạn hãy nghe tôi"], correctIndex: 1 },
        { prompt: "Phần mở đầu email gọi là?", options: ["Closing", "Body", "Greeting", "Subject"], correctIndex: 2 },
      ]},
    ],
  },
];

export const EXTRA_PATH = [
  { unit: 6, title: "So sánh", description: "Hơn, nhất — cách mô tả và so sánh", lessonIds: ["b-11", "b-12"] },
  { unit: 7, title: "Thì tiếp diễn và tương lai", description: "Đang làm gì? Sẽ làm gì?", lessonIds: ["b-13", "b-14"] },
  { unit: 8, title: "Động từ khuyết thiếu", description: "Can, should, must — khả năng và bắt buộc", lessonIds: ["b-15", "b-16"] },
  { unit: 9, title: "Thì hoàn thành và bị động", description: "Đã làm gì? Được làm bởi ai?", lessonIds: ["b-17", "b-18"] },
  { unit: 10, title: "Điều kiện và viết email", description: "Câu điều kiện loại 1 và kỹ năng viết email", lessonIds: ["b-19", "b-20"] },
];
