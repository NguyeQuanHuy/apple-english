// ──────────────────────────────────────────────────────────────────
// Topics data — 10 chủ đề mở rộng cho người Việt mới học tiếng Anh
// Mỗi topic: 20 từ vựng (10 cơ bản + 10 nâng cao), 5 phrases, 8 quiz, 1 tip
// ──────────────────────────────────────────────────────────────────

export type VocabItem = {
  en: string;
  ipa?: string;
  pos: "n" | "v" | "adj" | "adv" | "phr";
  vi: string;
  example: string;
  exampleVi: string;
};

export type Phrase = {
  en: string;
  vi: string;
  when: string; // khi nào dùng
};

export type QuizQ = {
  prompt: string;
  options: string[];
  correctIndex: number;
  explain?: string;
};

export type Topic = {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  tip: string; // mẹo thực dụng
  basicVocab: VocabItem[];
  advancedVocab: VocabItem[];
  phrases: Phrase[];
  quiz: QuizQ[];
};

export const TOPICS: Topic[] = [
  // ─── 1. TRAVEL ───────────────────────────────────────────────
  {
    id: "travel",
    title: "Du lịch",
    emoji: "✈️",
    tagline: "Sống sót ở sân bay, khách sạn và điểm tham quan",
    tip: "Khi không hiểu, đừng nói 'yes' bừa. Nói 'Sorry, could you repeat that?' — người Anh-Mỹ sẽ kiên nhẫn lặp lại.",
    basicVocab: [
      { en: "passport", ipa: "/ˈpæspɔːrt/", pos: "n", vi: "hộ chiếu", example: "May I see your passport, please?", exampleVi: "Vui lòng cho tôi xem hộ chiếu của bạn?" },
      { en: "ticket", ipa: "/ˈtɪkɪt/", pos: "n", vi: "vé", example: "I lost my ticket.", exampleVi: "Tôi làm mất vé." },
      { en: "luggage", ipa: "/ˈlʌɡɪdʒ/", pos: "n", vi: "hành lý", example: "Where can I leave my luggage?", exampleVi: "Tôi để hành lý ở đâu được?" },
      { en: "hotel", ipa: "/hoʊˈtel/", pos: "n", vi: "khách sạn", example: "The hotel is near the beach.", exampleVi: "Khách sạn gần bãi biển." },
      { en: "map", ipa: "/mæp/", pos: "n", vi: "bản đồ", example: "Do you have a map of the city?", exampleVi: "Bạn có bản đồ thành phố không?" },
      { en: "airport", ipa: "/ˈerpɔːrt/", pos: "n", vi: "sân bay", example: "I'll meet you at the airport.", exampleVi: "Tôi sẽ gặp bạn ở sân bay." },
      { en: "flight", ipa: "/flaɪt/", pos: "n", vi: "chuyến bay", example: "My flight is at 9 PM.", exampleVi: "Chuyến bay của tôi lúc 9 giờ tối." },
      { en: "book", ipa: "/bʊk/", pos: "v", vi: "đặt (chỗ)", example: "I'd like to book a room.", exampleVi: "Tôi muốn đặt một phòng." },
      { en: "tourist", ipa: "/ˈtʊrɪst/", pos: "n", vi: "khách du lịch", example: "Many tourists visit Hanoi.", exampleVi: "Nhiều khách du lịch đến Hà Nội." },
      { en: "trip", ipa: "/trɪp/", pos: "n", vi: "chuyến đi", example: "Have a nice trip!", exampleVi: "Chúc chuyến đi vui vẻ!" },
    ],
    advancedVocab: [
      { en: "boarding pass", ipa: "/ˈbɔːrdɪŋ pæs/", pos: "n", vi: "thẻ lên máy bay", example: "Please show your boarding pass at gate 12.", exampleVi: "Xuất trình thẻ lên máy bay ở cổng 12." },
      { en: "customs", ipa: "/ˈkʌstəmz/", pos: "n", vi: "hải quan", example: "Go through customs after landing.", exampleVi: "Đi qua hải quan sau khi máy bay hạ cánh." },
      { en: "departure", ipa: "/dɪˈpɑːrtʃər/", pos: "n", vi: "khởi hành", example: "Departure is at 7:45 AM.", exampleVi: "Khởi hành lúc 7:45 sáng." },
      { en: "arrival", ipa: "/əˈraɪvl/", pos: "n", vi: "đến nơi", example: "Arrival is delayed by 30 minutes.", exampleVi: "Giờ đến bị trễ 30 phút." },
      { en: "reservation", ipa: "/ˌrezərˈveɪʃn/", pos: "n", vi: "đặt chỗ", example: "I have a reservation under Huy.", exampleVi: "Tôi đã đặt chỗ tên Huy." },
      { en: "exchange", ipa: "/ɪksˈtʃeɪndʒ/", pos: "v", vi: "đổi (tiền)", example: "Where can I exchange money?", exampleVi: "Tôi đổi tiền ở đâu?" },
      { en: "itinerary", ipa: "/aɪˈtɪnəreri/", pos: "n", vi: "lịch trình chuyến đi", example: "I'll send you the itinerary tomorrow.", exampleVi: "Tôi sẽ gửi bạn lịch trình vào ngày mai." },
      { en: "souvenir", ipa: "/ˌsuːvəˈnɪr/", pos: "n", vi: "quà lưu niệm", example: "I bought a souvenir for my mom.", exampleVi: "Tôi mua một món quà lưu niệm cho mẹ." },
      { en: "sightseeing", ipa: "/ˈsaɪtsiːɪŋ/", pos: "n", vi: "tham quan", example: "We went sightseeing in the old town.", exampleVi: "Chúng tôi đi tham quan phố cổ." },
      { en: "currency", ipa: "/ˈkɜːrənsi/", pos: "n", vi: "tiền tệ", example: "The local currency is the Euro.", exampleVi: "Tiền tệ địa phương là Euro." },
    ],
    phrases: [
      { en: "How much is it?", vi: "Bao nhiêu tiền vậy?", when: "Khi hỏi giá ở chợ, taxi, quán" },
      { en: "Could you help me, please?", vi: "Bạn có thể giúp tôi không?", when: "Khi cần nhờ vả lịch sự" },
      { en: "I'm lost.", vi: "Tôi bị lạc.", when: "Khi không biết mình đang ở đâu" },
      { en: "Is there a restroom nearby?", vi: "Gần đây có nhà vệ sinh không?", when: "Câu cứu nguy số 1 khi đi du lịch" },
      { en: "Can I have the bill, please?", vi: "Cho tôi xin hoá đơn được không?", when: "Khi muốn thanh toán ở nhà hàng" },
    ],
    quiz: [
      { prompt: "'passport' nghĩa là gì?", options: ["vé máy bay", "hộ chiếu", "visa", "hành lý"], correctIndex: 1 },
      { prompt: "Đến sân bay, bạn cần làm gì đầu tiên?", options: ["check-in", "boarding", "landing", "customs"], correctIndex: 0, explain: "Check-in là làm thủ tục đầu tiên khi đến sân bay." },
      { prompt: "'How much ___ it?' (Bao nhiêu tiền vậy?)", options: ["are", "is", "do", "does"], correctIndex: 1 },
      { prompt: "'Where can I ___ money?' (đổi tiền)", options: ["change", "exchange", "trade", "swap"], correctIndex: 1, explain: "'Exchange' là từ chuẩn dùng cho đổi tiền tệ." },
      { prompt: "'boarding pass' dùng để làm gì?", options: ["vào khách sạn", "lên máy bay", "qua hải quan", "đặt chỗ"], correctIndex: 1 },
      { prompt: "Khi bị lạc đường, bạn nói gì?", options: ["I'm tired.", "I'm hungry.", "I'm lost.", "I'm late."], correctIndex: 2 },
      { prompt: "'Có nhà vệ sinh gần đây không?' tiếng Anh là?", options: ["Where toilet?", "Is there a restroom nearby?", "Toilet please?", "Where to bathroom?"], correctIndex: 1, explain: "Câu hoàn chỉnh, lịch sự. 'Restroom' phổ biến ở Mỹ; 'toilet' OK ở Anh." },
      { prompt: "'I'd like to ___ a room.' (đặt phòng)", options: ["buy", "book", "rent", "have"], correctIndex: 1, explain: "'Book a room' = đặt trước một phòng khách sạn." },
    ],
  },

  // ─── 2. BUSINESS / WORK ──────────────────────────────────────
  {
    id: "business",
    title: "Công việc",
    emoji: "💼",
    tagline: "Giao tiếp chuyên nghiệp ở văn phòng",
    tip: "Email công việc bắt đầu bằng 'Hi [tên]' thân thiện hơn 'Dear Mr/Ms'. Kết thúc bằng 'Best regards,' hoặc 'Best,' là an toàn nhất.",
    basicVocab: [
      { en: "office", ipa: "/ˈɔːfɪs/", pos: "n", vi: "văn phòng", example: "I work in an office.", exampleVi: "Tôi làm việc ở văn phòng." },
      { en: "boss", ipa: "/bɔːs/", pos: "n", vi: "sếp", example: "My boss is very nice.", exampleVi: "Sếp của tôi rất tốt." },
      { en: "meeting", ipa: "/ˈmiːtɪŋ/", pos: "n", vi: "cuộc họp", example: "We have a meeting at 3 PM.", exampleVi: "Chúng tôi có cuộc họp lúc 3 giờ chiều." },
      { en: "email", ipa: "/ˈiːmeɪl/", pos: "n", vi: "thư điện tử", example: "I'll send you an email tonight.", exampleVi: "Tôi sẽ gửi bạn email tối nay." },
      { en: "team", ipa: "/tiːm/", pos: "n", vi: "đội nhóm", example: "Our team is small but strong.", exampleVi: "Đội của chúng tôi nhỏ nhưng mạnh." },
      { en: "report", ipa: "/rɪˈpɔːrt/", pos: "n", vi: "báo cáo", example: "Please finish the report by Friday.", exampleVi: "Hoàn thành báo cáo trước thứ Sáu nhé." },
      { en: "project", ipa: "/ˈprɑːdʒekt/", pos: "n", vi: "dự án", example: "This project is important.", exampleVi: "Dự án này quan trọng." },
      { en: "client", ipa: "/ˈklaɪənt/", pos: "n", vi: "khách hàng", example: "The client wants changes.", exampleVi: "Khách hàng muốn thay đổi." },
      { en: "salary", ipa: "/ˈsæləri/", pos: "n", vi: "lương", example: "I get my salary on the 1st.", exampleVi: "Tôi nhận lương vào ngày 1." },
      { en: "busy", ipa: "/ˈbɪzi/", pos: "adj", vi: "bận", example: "Sorry, I'm busy right now.", exampleVi: "Xin lỗi, hiện tại tôi đang bận." },
    ],
    advancedVocab: [
      { en: "deadline", ipa: "/ˈdedlaɪn/", pos: "n", vi: "hạn chót", example: "The deadline is next Monday.", exampleVi: "Hạn chót là thứ Hai tới." },
      { en: "schedule", ipa: "/ˈskedʒuːl/", pos: "n", vi: "lịch trình", example: "Let me check my schedule.", exampleVi: "Để tôi kiểm tra lịch trình." },
      { en: "colleague", ipa: "/ˈkɑːliːɡ/", pos: "n", vi: "đồng nghiệp", example: "She is my colleague.", exampleVi: "Cô ấy là đồng nghiệp của tôi." },
      { en: "feedback", ipa: "/ˈfiːdbæk/", pos: "n", vi: "phản hồi", example: "Thanks for your feedback.", exampleVi: "Cảm ơn phản hồi của bạn." },
      { en: "approve", ipa: "/əˈpruːv/", pos: "v", vi: "phê duyệt", example: "The manager approved my request.", exampleVi: "Sếp đã duyệt yêu cầu của tôi." },
      { en: "negotiate", ipa: "/nɪˈɡoʊʃieɪt/", pos: "v", vi: "thương lượng", example: "Let's negotiate the price.", exampleVi: "Chúng ta thương lượng giá nhé." },
      { en: "presentation", ipa: "/ˌpriːzenˈteɪʃn/", pos: "n", vi: "buổi thuyết trình", example: "Her presentation was excellent.", exampleVi: "Buổi thuyết trình của cô ấy rất xuất sắc." },
      { en: "promotion", ipa: "/prəˈmoʊʃn/", pos: "n", vi: "thăng chức", example: "He got a promotion last month.", exampleVi: "Anh ấy được thăng chức tháng trước." },
      { en: "supervisor", ipa: "/ˈsuːpərvaɪzər/", pos: "n", vi: "người giám sát", example: "Talk to your supervisor first.", exampleVi: "Nói chuyện với người giám sát trước." },
      { en: "department", ipa: "/dɪˈpɑːrtmənt/", pos: "n", vi: "phòng ban", example: "She works in the IT department.", exampleVi: "Cô ấy làm ở phòng IT." },
    ],
    phrases: [
      { en: "Could we schedule a meeting?", vi: "Chúng ta có thể xếp lịch họp không?", when: "Yêu cầu họp lịch sự" },
      { en: "I'll get back to you.", vi: "Tôi sẽ phản hồi lại sau.", when: "Khi chưa trả lời được ngay" },
      { en: "Sorry for the late reply.", vi: "Xin lỗi vì trả lời muộn.", when: "Đầu email khi trả lời chậm" },
      { en: "Just a quick question...", vi: "Cho tôi hỏi nhanh một chút...", when: "Mở đầu khi hỏi đồng nghiệp" },
      { en: "Let me know if you have any questions.", vi: "Cho tôi biết nếu bạn có thắc mắc.", when: "Kết thúc email gửi hướng dẫn" },
    ],
    quiz: [
      { prompt: "'deadline' nghĩa là?", options: ["khách hàng", "hạn chót", "lương", "phản hồi"], correctIndex: 1 },
      { prompt: "Sếp tiếng Anh là?", options: ["client", "colleague", "boss", "team"], correctIndex: 2 },
      { prompt: "'Could we ___ a meeting?' (xếp lịch)", options: ["make", "schedule", "do", "have"], correctIndex: 1, explain: "'Schedule a meeting' là cụm chuẩn." },
      { prompt: "'I'll ___ back to you.' (phản hồi sau)", options: ["come", "go", "get", "send"], correctIndex: 2, explain: "'Get back to someone' = trả lời/phản hồi lại sau." },
      { prompt: "Đồng nghiệp tiếng Anh là?", options: ["colleague", "client", "customer", "boss"], correctIndex: 0 },
      { prompt: "'The client ___ changes.' (muốn thay đổi)", options: ["want", "wants", "wanting", "wanted"], correctIndex: 1, explain: "'Client' số ít → thêm 's' ở động từ." },
      { prompt: "'promotion' nghĩa là?", options: ["sa thải", "thăng chức", "nghỉ phép", "tăng lương"], correctIndex: 1 },
      { prompt: "Phần kết email công việc lịch sự nhất?", options: ["Bye!", "Thanks!", "Best regards,", "See ya"], correctIndex: 2 },
    ],
  },

  // ─── 3. DAILY LIFE ───────────────────────────────────────────
  {
    id: "daily",
    title: "Đời sống hàng ngày",
    emoji: "🏠",
    tagline: "Nói về thói quen, sở thích, sinh hoạt",
    tip: "Khi kể thói quen, dùng thì hiện tại đơn (Present Simple): 'I usually wake up at 7.' Không dùng 'I am waking up' (sai!).",
    basicVocab: [
      { en: "morning", ipa: "/ˈmɔːrnɪŋ/", pos: "n", vi: "buổi sáng", example: "I drink coffee in the morning.", exampleVi: "Tôi uống cà phê buổi sáng." },
      { en: "evening", ipa: "/ˈiːvnɪŋ/", pos: "n", vi: "buổi tối", example: "I read in the evening.", exampleVi: "Tôi đọc sách vào buổi tối." },
      { en: "breakfast", ipa: "/ˈbrekfəst/", pos: "n", vi: "bữa sáng", example: "I have breakfast at 7.", exampleVi: "Tôi ăn sáng lúc 7 giờ." },
      { en: "lunch", ipa: "/lʌntʃ/", pos: "n", vi: "bữa trưa", example: "Let's have lunch together.", exampleVi: "Cùng ăn trưa nhé." },
      { en: "dinner", ipa: "/ˈdɪnər/", pos: "n", vi: "bữa tối", example: "Dinner is ready!", exampleVi: "Bữa tối đã sẵn sàng!" },
      { en: "sleep", ipa: "/sliːp/", pos: "v", vi: "ngủ", example: "I sleep 8 hours a night.", exampleVi: "Tôi ngủ 8 tiếng mỗi đêm." },
      { en: "work", ipa: "/wɜːrk/", pos: "v", vi: "làm việc", example: "I work from home.", exampleVi: "Tôi làm việc tại nhà." },
      { en: "study", ipa: "/ˈstʌdi/", pos: "v", vi: "học", example: "I study English every day.", exampleVi: "Tôi học tiếng Anh mỗi ngày." },
      { en: "hobby", ipa: "/ˈhɑːbi/", pos: "n", vi: "sở thích", example: "My hobby is reading.", exampleVi: "Sở thích của tôi là đọc sách." },
      { en: "weekend", ipa: "/ˈwiːkend/", pos: "n", vi: "cuối tuần", example: "What do you do on weekends?", exampleVi: "Cuối tuần bạn làm gì?" },
    ],
    advancedVocab: [
      { en: "neighborhood", ipa: "/ˈneɪbərhʊd/", pos: "n", vi: "khu phố", example: "I live in a quiet neighborhood.", exampleVi: "Tôi sống ở một khu phố yên tĩnh." },
      { en: "routine", ipa: "/ruːˈtiːn/", pos: "n", vi: "thói quen / lịch sinh hoạt", example: "My morning routine is simple.", exampleVi: "Lịch sinh hoạt buổi sáng của tôi đơn giản." },
      { en: "errand", ipa: "/ˈerənd/", pos: "n", vi: "việc lặt vặt", example: "I need to run some errands.", exampleVi: "Tôi cần đi làm vài việc lặt vặt." },
      { en: "grocery", ipa: "/ˈɡroʊsəri/", pos: "n", vi: "đồ tạp hoá", example: "I do my grocery shopping on Saturday.", exampleVi: "Tôi đi mua tạp hoá vào thứ Bảy." },
      { en: "chores", ipa: "/tʃɔːrz/", pos: "n", vi: "việc nhà", example: "I hate doing chores.", exampleVi: "Tôi ghét làm việc nhà." },
      { en: "relax", ipa: "/rɪˈlæks/", pos: "v", vi: "thư giãn", example: "I relax by watching movies.", exampleVi: "Tôi thư giãn bằng cách xem phim." },
      { en: "exercise", ipa: "/ˈeksərsaɪz/", pos: "v", vi: "tập thể dục", example: "I exercise three times a week.", exampleVi: "Tôi tập thể dục 3 lần một tuần." },
      { en: "commute", ipa: "/kəˈmjuːt/", pos: "v", vi: "đi làm/về", example: "I commute by bike.", exampleVi: "Tôi đi làm bằng xe đạp." },
      { en: "appointment", ipa: "/əˈpɔɪntmənt/", pos: "n", vi: "cuộc hẹn", example: "I have an appointment at 4.", exampleVi: "Tôi có cuộc hẹn lúc 4 giờ." },
      { en: "schedule", ipa: "/ˈskedʒuːl/", pos: "n", vi: "lịch trình", example: "My schedule is full this week.", exampleVi: "Lịch tuần này của tôi kín hết." },
    ],
    phrases: [
      { en: "How was your day?", vi: "Hôm nay của bạn thế nào?", when: "Câu hỏi xã giao cuối ngày" },
      { en: "I'm running late.", vi: "Tôi đang bị muộn.", when: "Khi tới trễ một cuộc hẹn" },
      { en: "Let me know.", vi: "Cho tôi biết nhé.", when: "Cuối câu khi chờ phản hồi" },
      { en: "What are you up to?", vi: "Bạn đang làm gì vậy?", when: "Hỏi thân mật 'đang làm gì'" },
      { en: "Take your time.", vi: "Cứ từ từ.", when: "Bảo ai đó không cần vội" },
    ],
    quiz: [
      { prompt: "'breakfast' là bữa nào?", options: ["bữa sáng", "bữa trưa", "bữa tối", "bữa nhẹ"], correctIndex: 0 },
      { prompt: "'I ___ English every day.' (học)", options: ["study", "studies", "studying", "studied"], correctIndex: 0 },
      { prompt: "Câu nào dùng đúng để kể thói quen?", options: ["I am waking up at 7.", "I usually wake up at 7.", "I will wake up at 7.", "I woke up at 7."], correctIndex: 1, explain: "Thói quen → Present Simple. 'I usually wake up at 7.'" },
      { prompt: "'hobby' nghĩa là?", options: ["công việc", "sở thích", "kỳ nghỉ", "thể thao"], correctIndex: 1 },
      { prompt: "'I'm running ___.' (bị muộn)", options: ["late", "fast", "slow", "behind"], correctIndex: 0, explain: "'Run late' = bị trễ giờ." },
      { prompt: "'What are you ___ to?' (đang làm gì)", options: ["going", "doing", "up", "out"], correctIndex: 2, explain: "'What are you up to?' = câu hỏi thân mật 'đang làm gì'." },
      { prompt: "'commute' nghĩa là?", options: ["đi du lịch", "đi làm/về", "đi chợ", "đi học"], correctIndex: 1 },
      { prompt: "Bảo người khác cứ từ từ?", options: ["Hurry up!", "Take your time.", "Be quick.", "Now or never."], correctIndex: 1 },
    ],
  },

  // ─── 4. TECHNOLOGY ───────────────────────────────────────────
  {
    id: "tech",
    title: "Công nghệ",
    emoji: "💻",
    tagline: "Tiếng Anh cho dân IT và người dùng máy tính",
    tip: "Khi máy lỗi: 'It's not working' luôn an toàn. Cụ thể hơn: 'It keeps crashing' (cứ bị crash), 'It froze' (đóng băng), 'It's slow' (chậm).",
    basicVocab: [
      { en: "computer", ipa: "/kəmˈpjuːtər/", pos: "n", vi: "máy tính", example: "My computer is new.", exampleVi: "Máy tính của tôi mới." },
      { en: "phone", ipa: "/foʊn/", pos: "n", vi: "điện thoại", example: "Where is my phone?", exampleVi: "Điện thoại tôi đâu rồi?" },
      { en: "internet", ipa: "/ˈɪntərnet/", pos: "n", vi: "mạng internet", example: "The internet is slow today.", exampleVi: "Mạng hôm nay chậm." },
      { en: "wifi", ipa: "/ˈwaɪfaɪ/", pos: "n", vi: "wifi", example: "What's the wifi password?", exampleVi: "Mật khẩu wifi là gì?" },
      { en: "app", ipa: "/æp/", pos: "n", vi: "ứng dụng", example: "Download the app from the store.", exampleVi: "Tải ứng dụng từ cửa hàng." },
      { en: "email", ipa: "/ˈiːmeɪl/", pos: "n", vi: "email", example: "Send me an email.", exampleVi: "Gửi tôi một email." },
      { en: "password", ipa: "/ˈpæswɜːrd/", pos: "n", vi: "mật khẩu", example: "I forgot my password.", exampleVi: "Tôi quên mật khẩu." },
      { en: "screen", ipa: "/skriːn/", pos: "n", vi: "màn hình", example: "Look at the screen.", exampleVi: "Nhìn lên màn hình." },
      { en: "update", ipa: "/ˈʌpdeɪt/", pos: "v", vi: "cập nhật", example: "Please update your app.", exampleVi: "Vui lòng cập nhật ứng dụng." },
      { en: "download", ipa: "/ˈdaʊnloʊd/", pos: "v", vi: "tải xuống", example: "Download the file here.", exampleVi: "Tải tệp xuống ở đây." },
    ],
    advancedVocab: [
      { en: "settings", ipa: "/ˈsetɪŋz/", pos: "n", vi: "cài đặt", example: "Change this in settings.", exampleVi: "Đổi cái này trong phần cài đặt." },
      { en: "feature", ipa: "/ˈfiːtʃər/", pos: "n", vi: "tính năng", example: "This phone has many features.", exampleVi: "Điện thoại này có nhiều tính năng." },
      { en: "device", ipa: "/dɪˈvaɪs/", pos: "n", vi: "thiết bị", example: "Connect your device to wifi.", exampleVi: "Kết nối thiết bị với wifi." },
      { en: "software", ipa: "/ˈsɔːftwer/", pos: "n", vi: "phần mềm", example: "Install the latest software.", exampleVi: "Cài đặt phần mềm mới nhất." },
      { en: "hardware", ipa: "/ˈhɑːrdwer/", pos: "n", vi: "phần cứng", example: "The hardware is broken.", exampleVi: "Phần cứng bị hỏng." },
      { en: "browser", ipa: "/ˈbraʊzər/", pos: "n", vi: "trình duyệt", example: "Open the browser.", exampleVi: "Mở trình duyệt lên." },
      { en: "crash", ipa: "/kræʃ/", pos: "v", vi: "(máy) treo, lỗi", example: "The app keeps crashing.", exampleVi: "Ứng dụng cứ bị treo." },
      { en: "install", ipa: "/ɪnˈstɔːl/", pos: "v", vi: "cài đặt", example: "Install the program first.", exampleVi: "Cài chương trình trước." },
      { en: "backup", ipa: "/ˈbækʌp/", pos: "n", vi: "sao lưu", example: "Make a backup of your files.", exampleVi: "Sao lưu các tệp của bạn." },
      { en: "charge", ipa: "/tʃɑːrdʒ/", pos: "v", vi: "sạc (pin)", example: "I need to charge my phone.", exampleVi: "Tôi cần sạc điện thoại." },
    ],
    phrases: [
      { en: "It's not working.", vi: "Nó không hoạt động.", when: "Báo lỗi chung khi thiết bị hỏng" },
      { en: "Could you turn it off and on?", vi: "Bạn tắt rồi bật lại được không?", when: "Cách fix kinh điển 80% lỗi" },
      { en: "What's the wifi password?", vi: "Mật khẩu wifi là gì?", when: "Câu đầu tiên ở quán cafe, sân bay" },
      { en: "My battery is dead.", vi: "Pin của tôi hết.", when: "Khi điện thoại sắp tắt" },
      { en: "I'll send it to you.", vi: "Tôi sẽ gửi cho bạn.", when: "Gửi file/link qua chat" },
    ],
    quiz: [
      { prompt: "'password' nghĩa là?", options: ["mã PIN", "mật khẩu", "tài khoản", "đăng nhập"], correctIndex: 1 },
      { prompt: "'I need to ___ my phone.' (sạc)", options: ["charge", "load", "fill", "power"], correctIndex: 0 },
      { prompt: "'The app keeps ___.' (cứ bị treo)", options: ["closing", "crashing", "stopping", "ending"], correctIndex: 1, explain: "'Crash' = treo, đứng máy đột ngột." },
      { prompt: "'settings' là gì?", options: ["tính năng", "ứng dụng", "cài đặt", "tài khoản"], correctIndex: 2 },
      { prompt: "Cách fix kinh điển trong IT?", options: ["Đập máy", "Tắt mở lại", "Mua máy mới", "Gọi sếp"], correctIndex: 1, explain: "'Turn it off and on again' — đùa thì đùa, nhưng fix 80% lỗi thật." },
      { prompt: "'My battery is ___.' (hết pin)", options: ["empty", "dead", "off", "low"], correctIndex: 1, explain: "'Battery is dead' = pin đã hết hoàn toàn." },
      { prompt: "'download' nghĩa là?", options: ["tải lên", "tải xuống", "xoá", "cài đặt"], correctIndex: 1 },
      { prompt: "'It's not ___.' (không hoạt động)", options: ["work", "works", "working", "worked"], correctIndex: 2, explain: "Sau 'is/are not' dùng V-ing." },
    ],
  },

  // ─── 5. FOOD & RESTAURANT ────────────────────────────────────
  {
    id: "food",
    title: "Ăn uống & Nhà hàng",
    emoji: "🍜",
    tagline: "Gọi món, hỏi nguyên liệu, trả tiền",
    tip: "Ở Mỹ/Anh, tip 10-20% là chuẩn ở nhà hàng. Ở Đức, không bắt buộc nhưng làm tròn lên (€18.50 → €20) là lịch sự.",
    basicVocab: [
      { en: "food", ipa: "/fuːd/", pos: "n", vi: "thức ăn", example: "I love Vietnamese food.", exampleVi: "Tôi thích món ăn Việt." },
      { en: "water", ipa: "/ˈwɔːtər/", pos: "n", vi: "nước", example: "A glass of water, please.", exampleVi: "Cho tôi một ly nước." },
      { en: "rice", ipa: "/raɪs/", pos: "n", vi: "cơm/gạo", example: "I eat rice every day.", exampleVi: "Tôi ăn cơm mỗi ngày." },
      { en: "meat", ipa: "/miːt/", pos: "n", vi: "thịt", example: "I don't eat meat.", exampleVi: "Tôi không ăn thịt." },
      { en: "vegetable", ipa: "/ˈvedʒtəbl/", pos: "n", vi: "rau củ", example: "Eat more vegetables.", exampleVi: "Ăn nhiều rau hơn đi." },
      { en: "drink", ipa: "/drɪŋk/", pos: "v", vi: "uống", example: "What do you want to drink?", exampleVi: "Bạn muốn uống gì?" },
      { en: "hungry", ipa: "/ˈhʌŋɡri/", pos: "adj", vi: "đói", example: "I'm hungry.", exampleVi: "Tôi đói." },
      { en: "thirsty", ipa: "/ˈθɜːrsti/", pos: "adj", vi: "khát", example: "Are you thirsty?", exampleVi: "Bạn khát không?" },
      { en: "delicious", ipa: "/dɪˈlɪʃəs/", pos: "adj", vi: "ngon", example: "This soup is delicious!", exampleVi: "Món súp này ngon quá!" },
      { en: "menu", ipa: "/ˈmenjuː/", pos: "n", vi: "thực đơn", example: "Can I see the menu?", exampleVi: "Cho tôi xem thực đơn được không?" },
    ],
    advancedVocab: [
      { en: "order", ipa: "/ˈɔːrdər/", pos: "v", vi: "gọi món", example: "Are you ready to order?", exampleVi: "Bạn đã sẵn sàng gọi món chưa?" },
      { en: "bill", ipa: "/bɪl/", pos: "n", vi: "hoá đơn", example: "Can I have the bill, please?", exampleVi: "Cho tôi xin hoá đơn." },
      { en: "tip", ipa: "/tɪp/", pos: "n", vi: "tiền tip", example: "Don't forget to leave a tip.", exampleVi: "Đừng quên để lại tiền tip." },
      { en: "spicy", ipa: "/ˈspaɪsi/", pos: "adj", vi: "cay", example: "Is this dish spicy?", exampleVi: "Món này có cay không?" },
      { en: "sweet", ipa: "/swiːt/", pos: "adj", vi: "ngọt", example: "This cake is too sweet.", exampleVi: "Bánh này ngọt quá." },
      { en: "salty", ipa: "/ˈsɔːlti/", pos: "adj", vi: "mặn", example: "The soup is salty.", exampleVi: "Súp mặn quá." },
      { en: "allergic", ipa: "/əˈlɜːrdʒɪk/", pos: "adj", vi: "dị ứng", example: "I'm allergic to peanuts.", exampleVi: "Tôi dị ứng đậu phộng." },
      { en: "vegetarian", ipa: "/ˌvedʒəˈteriən/", pos: "adj", vi: "ăn chay", example: "I'm vegetarian.", exampleVi: "Tôi ăn chay." },
      { en: "reservation", ipa: "/ˌrezərˈveɪʃn/", pos: "n", vi: "đặt bàn", example: "I have a reservation for two.", exampleVi: "Tôi đã đặt bàn cho 2 người." },
      { en: "leftover", ipa: "/ˈleftoʊvər/", pos: "n", vi: "đồ ăn thừa", example: "Can I take the leftovers home?", exampleVi: "Tôi mang đồ ăn thừa về được không?" },
    ],
    phrases: [
      { en: "Table for two, please.", vi: "Cho một bàn 2 người.", when: "Khi vào nhà hàng không đặt trước" },
      { en: "I'd like to order...", vi: "Tôi muốn gọi...", when: "Cách gọi món lịch sự" },
      { en: "Could I have the bill, please?", vi: "Cho tôi xin hoá đơn được không?", when: "Khi muốn thanh toán" },
      { en: "I'm allergic to...", vi: "Tôi dị ứng với...", when: "Quan trọng để tránh nguy hiểm" },
      { en: "Can I get this to go?", vi: "Cho tôi mang đi được không?", when: "Mua mang về" },
    ],
    quiz: [
      { prompt: "'I'm ___.' (đói)", options: ["thirsty", "hungry", "tired", "hot"], correctIndex: 1 },
      { prompt: "'menu' nghĩa là?", options: ["hoá đơn", "thực đơn", "món ăn", "đồ uống"], correctIndex: 1 },
      { prompt: "Vào nhà hàng cho 2 người, bạn nói gì?", options: ["Two people!", "Table for two, please.", "I want a table.", "Two seats."], correctIndex: 1 },
      { prompt: "'spicy' nghĩa là?", options: ["ngọt", "mặn", "cay", "chua"], correctIndex: 2 },
      { prompt: "'I'm allergic ___ peanuts.' (dị ứng)", options: ["with", "to", "of", "for"], correctIndex: 1, explain: "'Allergic TO something' — luôn dùng giới từ 'to'." },
      { prompt: "'Can I get this ___?' (mang đi)", options: ["take away", "to go", "for go", "out"], correctIndex: 1, explain: "Ở Mỹ: 'to go'. Ở Anh: 'takeaway'." },
      { prompt: "'I'm vegetarian' nghĩa là?", options: ["Tôi ăn chay", "Tôi đầu bếp", "Tôi ăn rau", "Tôi không thích thịt"], correctIndex: 0 },
      { prompt: "'Could I have ___ bill?' (hoá đơn)", options: ["a", "the", "an", "this"], correctIndex: 1, explain: "Hoá đơn cụ thể của bạn → 'the bill'." },
    ],
  },

  // ─── 6. HEALTH & MEDICAL ─────────────────────────────────────
  {
    id: "health",
    title: "Sức khỏe & Bệnh viện",
    emoji: "🏥",
    tagline: "Khám bệnh, nhà thuốc, mô tả triệu chứng",
    tip: "Ở Đức, đặt lịch khám gọi 'Termin'. Mô tả đau: 'It hurts here' + chỉ tay là cách an toàn nhất khi không biết tên bộ phận.",
    basicVocab: [
      { en: "doctor", ipa: "/ˈdɑːktər/", pos: "n", vi: "bác sĩ", example: "I need to see a doctor.", exampleVi: "Tôi cần đi khám bác sĩ." },
      { en: "hospital", ipa: "/ˈhɑːspɪtl/", pos: "n", vi: "bệnh viện", example: "She works at the hospital.", exampleVi: "Cô ấy làm ở bệnh viện." },
      { en: "sick", ipa: "/sɪk/", pos: "adj", vi: "ốm", example: "I'm sick today.", exampleVi: "Hôm nay tôi ốm." },
      { en: "pain", ipa: "/peɪn/", pos: "n", vi: "đau", example: "I have pain in my back.", exampleVi: "Tôi bị đau lưng." },
      { en: "medicine", ipa: "/ˈmedsn/", pos: "n", vi: "thuốc", example: "Take this medicine twice a day.", exampleVi: "Uống thuốc này 2 lần/ngày." },
      { en: "fever", ipa: "/ˈfiːvər/", pos: "n", vi: "sốt", example: "I have a fever.", exampleVi: "Tôi bị sốt." },
      { en: "headache", ipa: "/ˈhedeɪk/", pos: "n", vi: "đau đầu", example: "I have a bad headache.", exampleVi: "Tôi bị đau đầu nặng." },
      { en: "cough", ipa: "/kɔːf/", pos: "v/n", vi: "ho", example: "I have a cough.", exampleVi: "Tôi bị ho." },
      { en: "rest", ipa: "/rest/", pos: "v", vi: "nghỉ ngơi", example: "You need to rest.", exampleVi: "Bạn cần nghỉ ngơi." },
      { en: "healthy", ipa: "/ˈhelθi/", pos: "adj", vi: "khỏe mạnh", example: "Eat healthy food.", exampleVi: "Ăn đồ ăn lành mạnh." },
    ],
    advancedVocab: [
      { en: "appointment", ipa: "/əˈpɔɪntmənt/", pos: "n", vi: "cuộc hẹn (khám)", example: "I'd like to make an appointment.", exampleVi: "Tôi muốn đặt lịch khám." },
      { en: "prescription", ipa: "/prɪˈskrɪpʃn/", pos: "n", vi: "đơn thuốc", example: "Here's your prescription.", exampleVi: "Đây là đơn thuốc của bạn." },
      { en: "pharmacy", ipa: "/ˈfɑːrməsi/", pos: "n", vi: "nhà thuốc", example: "The pharmacy is open until 8.", exampleVi: "Nhà thuốc mở đến 8 giờ." },
      { en: "symptom", ipa: "/ˈsɪmptəm/", pos: "n", vi: "triệu chứng", example: "What are your symptoms?", exampleVi: "Triệu chứng của bạn là gì?" },
      { en: "allergy", ipa: "/ˈælərdʒi/", pos: "n", vi: "dị ứng", example: "I have a pollen allergy.", exampleVi: "Tôi bị dị ứng phấn hoa." },
      { en: "blood", ipa: "/blʌd/", pos: "n", vi: "máu", example: "I need a blood test.", exampleVi: "Tôi cần xét nghiệm máu." },
      { en: "injury", ipa: "/ˈɪndʒəri/", pos: "n", vi: "chấn thương", example: "It's a minor injury.", exampleVi: "Đó chỉ là chấn thương nhẹ." },
      { en: "emergency", ipa: "/ɪˈmɜːrdʒənsi/", pos: "n", vi: "cấp cứu", example: "Call 911 — it's an emergency!", exampleVi: "Gọi 911 — cấp cứu!" },
      { en: "vaccine", ipa: "/vækˈsiːn/", pos: "n", vi: "vắc-xin", example: "I got my flu vaccine.", exampleVi: "Tôi đã tiêm vắc-xin cúm." },
      { en: "recover", ipa: "/rɪˈkʌvər/", pos: "v", vi: "hồi phục", example: "He's recovering well.", exampleVi: "Anh ấy đang hồi phục tốt." },
    ],
    phrases: [
      { en: "I don't feel well.", vi: "Tôi không khoẻ.", when: "Mở đầu khi mô tả bệnh" },
      { en: "It hurts here.", vi: "Đau ở đây.", when: "Chỉ tay vào chỗ đau" },
      { en: "Can I make an appointment?", vi: "Tôi đặt lịch khám được không?", when: "Gọi điện đến phòng khám" },
      { en: "Is it serious?", vi: "Có nghiêm trọng không?", when: "Hỏi bác sĩ về tình trạng" },
      { en: "How often should I take this?", vi: "Tôi uống cái này bao lâu một lần?", when: "Hỏi liều thuốc" },
    ],
    quiz: [
      { prompt: "'fever' là gì?", options: ["ho", "sốt", "đau đầu", "đau bụng"], correctIndex: 1 },
      { prompt: "'I have ___ headache.' (đau đầu)", options: ["a", "the", "an", "—"], correctIndex: 0, explain: "Headache đếm được số ít → cần 'a'." },
      { prompt: "Đặt lịch khám tiếng Anh?", options: ["make an appointment", "do a meeting", "book a class", "schedule a date"], correctIndex: 0 },
      { prompt: "'pharmacy' là gì?", options: ["bệnh viện", "phòng khám", "nhà thuốc", "phòng cấp cứu"], correctIndex: 2 },
      { prompt: "'I don't ___ well.' (không khoẻ)", options: ["feel", "look", "go", "have"], correctIndex: 0 },
      { prompt: "'It ___ here.' (đau ở đây)", options: ["pain", "hurt", "hurts", "painful"], correctIndex: 2, explain: "It (số ít) → hurts (thêm s)." },
      { prompt: "Cấp cứu tiếng Anh là?", options: ["urgent", "emergency", "fast", "quick"], correctIndex: 1 },
      { prompt: "Bác sĩ kê đơn thuốc, gọi là?", options: ["receipt", "prescription", "report", "ticket"], correctIndex: 1 },
    ],
  },

  // ─── 7. SHOPPING ─────────────────────────────────────────────
  {
    id: "shopping",
    title: "Mua sắm",
    emoji: "🛒",
    tagline: "Hỏi giá, mặc cả, đổi trả hàng",
    tip: "Ở phương Tây, mặc cả KHÔNG phổ biến trong cửa hàng. Ngoại lệ: chợ trời (flea market), tiệm đồ cũ. Online thì 'discount code' là cách hợp lệ duy nhất.",
    basicVocab: [
      { en: "shop", ipa: "/ʃɑːp/", pos: "n", vi: "cửa hàng", example: "There's a shop on the corner.", exampleVi: "Có một cửa hàng ở góc đường." },
      { en: "buy", ipa: "/baɪ/", pos: "v", vi: "mua", example: "I want to buy a jacket.", exampleVi: "Tôi muốn mua một cái áo khoác." },
      { en: "sell", ipa: "/sel/", pos: "v", vi: "bán", example: "Do you sell phones here?", exampleVi: "Ở đây có bán điện thoại không?" },
      { en: "price", ipa: "/praɪs/", pos: "n", vi: "giá", example: "What's the price?", exampleVi: "Giá bao nhiêu?" },
      { en: "cheap", ipa: "/tʃiːp/", pos: "adj", vi: "rẻ", example: "This shirt is cheap.", exampleVi: "Cái áo này rẻ." },
      { en: "expensive", ipa: "/ɪkˈspensɪv/", pos: "adj", vi: "đắt", example: "That bag is too expensive.", exampleVi: "Cái túi đó đắt quá." },
      { en: "money", ipa: "/ˈmʌni/", pos: "n", vi: "tiền", example: "I don't have money.", exampleVi: "Tôi không có tiền." },
      { en: "pay", ipa: "/peɪ/", pos: "v", vi: "trả tiền", example: "How would you like to pay?", exampleVi: "Bạn muốn trả bằng cách nào?" },
      { en: "size", ipa: "/saɪz/", pos: "n", vi: "kích cỡ", example: "Do you have this in size M?", exampleVi: "Có size M không?" },
      { en: "color", ipa: "/ˈkʌlər/", pos: "n", vi: "màu", example: "What colors do you have?", exampleVi: "Có những màu nào?" },
    ],
    advancedVocab: [
      { en: "discount", ipa: "/ˈdɪskaʊnt/", pos: "n", vi: "giảm giá", example: "Is there a discount?", exampleVi: "Có giảm giá không?" },
      { en: "sale", ipa: "/seɪl/", pos: "n", vi: "đợt giảm giá", example: "Everything is on sale!", exampleVi: "Tất cả đều đang giảm giá!" },
      { en: "receipt", ipa: "/rɪˈsiːt/", pos: "n", vi: "biên lai", example: "Keep the receipt.", exampleVi: "Giữ biên lai nhé." },
      { en: "refund", ipa: "/ˈriːfʌnd/", pos: "n", vi: "hoàn tiền", example: "Can I get a refund?", exampleVi: "Tôi có được hoàn tiền không?" },
      { en: "exchange", ipa: "/ɪksˈtʃeɪndʒ/", pos: "v", vi: "đổi (hàng)", example: "I'd like to exchange this.", exampleVi: "Tôi muốn đổi cái này." },
      { en: "fit", ipa: "/fɪt/", pos: "v", vi: "vừa", example: "These shoes don't fit me.", exampleVi: "Đôi giày này không vừa." },
      { en: "try on", ipa: "/traɪ ɑːn/", pos: "phr", vi: "thử (đồ)", example: "Can I try this on?", exampleVi: "Tôi thử cái này được không?" },
      { en: "cash", ipa: "/kæʃ/", pos: "n", vi: "tiền mặt", example: "Do you accept cash?", exampleVi: "Bạn có nhận tiền mặt không?" },
      { en: "credit card", ipa: "/ˈkredɪt kɑːrd/", pos: "n", vi: "thẻ tín dụng", example: "I'll pay by credit card.", exampleVi: "Tôi trả bằng thẻ tín dụng." },
      { en: "warranty", ipa: "/ˈwɔːrənti/", pos: "n", vi: "bảo hành", example: "It comes with a 2-year warranty.", exampleVi: "Sản phẩm có bảo hành 2 năm." },
    ],
    phrases: [
      { en: "How much is this?", vi: "Cái này bao nhiêu?", when: "Hỏi giá một món cụ thể" },
      { en: "Can I try this on?", vi: "Thử được không?", when: "Trước khi mua quần áo" },
      { en: "Do you have a smaller/bigger size?", vi: "Có size nhỏ/lớn hơn không?", when: "Khi không vừa" },
      { en: "I'm just looking, thanks.", vi: "Tôi chỉ xem thôi, cảm ơn.", when: "Khi nhân viên hỏi 'May I help you?'" },
      { en: "I'd like to return this.", vi: "Tôi muốn trả lại cái này.", when: "Quay lại đổi/trả hàng" },
    ],
    quiz: [
      { prompt: "'expensive' nghĩa là?", options: ["rẻ", "đắt", "đẹp", "mới"], correctIndex: 1 },
      { prompt: "'How ___ is this?' (bao nhiêu)", options: ["many", "much", "long", "old"], correctIndex: 1, explain: "Tiền không đếm được → 'much'. 'Many' dùng cho danh từ đếm được." },
      { prompt: "'Can I ___ this on?' (thử đồ)", options: ["wear", "put", "try", "test"], correctIndex: 2 },
      { prompt: "'receipt' nghĩa là?", options: ["biên lai", "hoá đơn", "thẻ tín dụng", "phiếu giảm giá"], correctIndex: 0 },
      { prompt: "Nhân viên hỏi 'May I help you?', bạn không cần giúp:", options: ["Yes, please.", "I'm just looking, thanks.", "No problem.", "Thank you."], correctIndex: 1 },
      { prompt: "'These shoes don't ___ me.' (không vừa)", options: ["wear", "size", "fit", "match"], correctIndex: 2 },
      { prompt: "'refund' nghĩa là?", options: ["giảm giá", "hoàn tiền", "trả góp", "khuyến mãi"], correctIndex: 1 },
      { prompt: "'I'll pay ___ credit card.' (bằng)", options: ["with", "by", "in", "on"], correctIndex: 1, explain: "'Pay BY card / cash / check' — luôn dùng 'by' với phương thức thanh toán." },
    ],
  },

  // ─── 8. FAMILY & RELATIONSHIPS ───────────────────────────────
  {
    id: "family",
    title: "Gia đình & Quan hệ",
    emoji: "👨‍👩‍👧",
    tagline: "Giới thiệu người thân, kể về quan hệ",
    tip: "Tiếng Anh không phân biệt 'anh/em' — đều là 'brother'. Muốn nói rõ: 'older brother' (anh trai) hoặc 'younger brother' (em trai).",
    basicVocab: [
      { en: "family", ipa: "/ˈfæməli/", pos: "n", vi: "gia đình", example: "I love my family.", exampleVi: "Tôi yêu gia đình tôi." },
      { en: "father", ipa: "/ˈfɑːðər/", pos: "n", vi: "bố", example: "My father is a teacher.", exampleVi: "Bố tôi là giáo viên." },
      { en: "mother", ipa: "/ˈmʌðər/", pos: "n", vi: "mẹ", example: "My mother cooks well.", exampleVi: "Mẹ tôi nấu ăn ngon." },
      { en: "brother", ipa: "/ˈbrʌðər/", pos: "n", vi: "anh/em trai", example: "I have one brother.", exampleVi: "Tôi có một anh/em trai." },
      { en: "sister", ipa: "/ˈsɪstər/", pos: "n", vi: "chị/em gái", example: "My sister is older than me.", exampleVi: "Chị gái tôi lớn hơn tôi." },
      { en: "son", ipa: "/sʌn/", pos: "n", vi: "con trai", example: "Their son is 5.", exampleVi: "Con trai họ 5 tuổi." },
      { en: "daughter", ipa: "/ˈdɔːtər/", pos: "n", vi: "con gái", example: "Their daughter studies abroad.", exampleVi: "Con gái họ học ở nước ngoài." },
      { en: "friend", ipa: "/frend/", pos: "n", vi: "bạn", example: "She's my best friend.", exampleVi: "Cô ấy là bạn thân của tôi." },
      { en: "marry", ipa: "/ˈmæri/", pos: "v", vi: "kết hôn", example: "They got married last year.", exampleVi: "Họ kết hôn năm ngoái." },
      { en: "single", ipa: "/ˈsɪŋɡl/", pos: "adj", vi: "độc thân", example: "Are you single?", exampleVi: "Bạn còn độc thân không?" },
    ],
    advancedVocab: [
      { en: "parents", ipa: "/ˈperənts/", pos: "n", vi: "bố mẹ", example: "I live with my parents.", exampleVi: "Tôi sống với bố mẹ." },
      { en: "relatives", ipa: "/ˈrelətɪvz/", pos: "n", vi: "họ hàng", example: "All my relatives came.", exampleVi: "Tất cả họ hàng đều đến." },
      { en: "grandparents", ipa: "/ˈɡrænperənts/", pos: "n", vi: "ông bà", example: "My grandparents live in the countryside.", exampleVi: "Ông bà tôi sống ở quê." },
      { en: "cousin", ipa: "/ˈkʌzn/", pos: "n", vi: "anh/chị em họ", example: "He's my cousin from Berlin.", exampleVi: "Anh ấy là em họ tôi ở Berlin." },
      { en: "couple", ipa: "/ˈkʌpl/", pos: "n", vi: "cặp đôi", example: "They're a cute couple.", exampleVi: "Họ là một cặp đôi đáng yêu." },
      { en: "engaged", ipa: "/ɪnˈɡeɪdʒd/", pos: "adj", vi: "đã đính hôn", example: "We got engaged in May.", exampleVi: "Chúng tôi đính hôn tháng Năm." },
      { en: "relationship", ipa: "/rɪˈleɪʃnʃɪp/", pos: "n", vi: "mối quan hệ", example: "We have a long-distance relationship.", exampleVi: "Chúng tôi yêu xa." },
      { en: "neighbor", ipa: "/ˈneɪbər/", pos: "n", vi: "hàng xóm", example: "My neighbor is very friendly.", exampleVi: "Hàng xóm tôi rất thân thiện." },
      { en: "in-laws", ipa: "/ˈɪnlɔːz/", pos: "n", vi: "gia đình bên chồng/vợ", example: "I visit my in-laws every Sunday.", exampleVi: "Chủ nhật nào tôi cũng đến nhà bố mẹ vợ/chồng." },
      { en: "raise", ipa: "/reɪz/", pos: "v", vi: "nuôi dạy", example: "She's raising two kids alone.", exampleVi: "Cô ấy một mình nuôi hai con." },
    ],
    phrases: [
      { en: "How many siblings do you have?", vi: "Bạn có mấy anh chị em?", when: "Câu hỏi xã giao khi mới quen" },
      { en: "We're related.", vi: "Chúng tôi là họ hàng.", when: "Giải thích quan hệ" },
      { en: "She takes after her mother.", vi: "Cô ấy giống mẹ.", when: "Khi nhận xét giống bố/mẹ" },
      { en: "I'm an only child.", vi: "Tôi là con một.", when: "Khi không có anh chị em" },
      { en: "Are you seeing anyone?", vi: "Bạn đang hẹn hò ai không?", when: "Hỏi tế nhị về tình trạng tình cảm" },
    ],
    quiz: [
      { prompt: "'sister' nghĩa là?", options: ["em trai", "chị/em gái", "mẹ", "cô"], correctIndex: 1 },
      { prompt: "Tiếng Anh, 'anh trai' nói rõ là?", options: ["big brother", "older brother", "elder brother", "Cả 2 và 3 đều đúng"], correctIndex: 3, explain: "'Older' phổ biến hơn ở Mỹ; 'elder' trang trọng hơn." },
      { prompt: "'I'm an ___ child.' (con một)", options: ["alone", "only", "single", "one"], correctIndex: 1 },
      { prompt: "Cha mẹ chồng/vợ tiếng Anh?", options: ["parents", "in-laws", "relatives", "cousins"], correctIndex: 1 },
      { prompt: "'They ___ married last year.' (kết hôn)", options: ["are", "were", "got", "have"], correctIndex: 2, explain: "'Got married' = lễ cưới đã diễn ra. 'Are married' = đang trong tình trạng đã cưới." },
      { prompt: "'cousin' nghĩa là?", options: ["em họ", "anh em ruột", "ông bà", "cháu"], correctIndex: 0 },
      { prompt: "'She ___ after her mother.' (giống mẹ)", options: ["takes", "looks", "comes", "goes"], correctIndex: 0, explain: "'Take after someone' = thừa hưởng đặc điểm từ ai." },
      { prompt: "Hỏi 'Bạn đang yêu ai không?' tế nhị?", options: ["Do you have a boyfriend?", "Are you seeing anyone?", "Are you married?", "Who do you love?"], correctIndex: 1 },
    ],
  },

  // ─── 9. TRANSPORTATION ───────────────────────────────────────
  {
    id: "transport",
    title: "Giao thông & Phương tiện",
    emoji: "🚗",
    tagline: "Đi tàu, taxi, hỏi đường",
    tip: "Ở Đức, hệ thống giao thông công cộng (Bahn, S-Bahn, U-Bahn) rất tốt. Câu cứu nguy: 'Does this train go to ___?' — nhân viên sẽ trả lời yes/no nhanh chóng.",
    basicVocab: [
      { en: "car", ipa: "/kɑːr/", pos: "n", vi: "ô tô", example: "I don't have a car.", exampleVi: "Tôi không có ô tô." },
      { en: "bus", ipa: "/bʌs/", pos: "n", vi: "xe buýt", example: "I take the bus to work.", exampleVi: "Tôi đi xe buýt đi làm." },
      { en: "train", ipa: "/treɪn/", pos: "n", vi: "tàu hoả", example: "The train is fast.", exampleVi: "Tàu hoả thì nhanh." },
      { en: "bike", ipa: "/baɪk/", pos: "n", vi: "xe đạp", example: "I ride my bike every day.", exampleVi: "Tôi đạp xe mỗi ngày." },
      { en: "taxi", ipa: "/ˈtæksi/", pos: "n", vi: "taxi", example: "Let's take a taxi.", exampleVi: "Chúng ta bắt taxi đi." },
      { en: "drive", ipa: "/draɪv/", pos: "v", vi: "lái xe", example: "Can you drive?", exampleVi: "Bạn biết lái xe không?" },
      { en: "walk", ipa: "/wɔːk/", pos: "v", vi: "đi bộ", example: "Let's walk there.", exampleVi: "Chúng ta đi bộ đến đó nhé." },
      { en: "stop", ipa: "/stɑːp/", pos: "n", vi: "điểm dừng", example: "The bus stop is over there.", exampleVi: "Điểm dừng xe buýt ở đằng kia." },
      { en: "road", ipa: "/roʊd/", pos: "n", vi: "đường", example: "This road is busy.", exampleVi: "Con đường này đông." },
      { en: "fast", ipa: "/fæst/", pos: "adj", vi: "nhanh", example: "Don't drive too fast.", exampleVi: "Đừng lái xe nhanh quá." },
    ],
    advancedVocab: [
      { en: "traffic", ipa: "/ˈtræfɪk/", pos: "n", vi: "giao thông", example: "There's a lot of traffic.", exampleVi: "Đường tắc lắm." },
      { en: "station", ipa: "/ˈsteɪʃn/", pos: "n", vi: "ga/trạm", example: "Meet me at the station.", exampleVi: "Gặp tôi ở ga." },
      { en: "platform", ipa: "/ˈplætfɔːrm/", pos: "n", vi: "sân ga", example: "Your train leaves from platform 5.", exampleVi: "Tàu của bạn rời từ sân ga số 5." },
      { en: "ticket", ipa: "/ˈtɪkɪt/", pos: "n", vi: "vé", example: "Where can I buy a ticket?", exampleVi: "Tôi mua vé ở đâu?" },
      { en: "transfer", ipa: "/trænsˈfɜːr/", pos: "v", vi: "đổi chuyến", example: "You need to transfer at Central Station.", exampleVi: "Bạn cần đổi chuyến ở ga trung tâm." },
      { en: "license", ipa: "/ˈlaɪsns/", pos: "n", vi: "bằng lái", example: "I got my driver's license.", exampleVi: "Tôi đã có bằng lái." },
      { en: "parking", ipa: "/ˈpɑːrkɪŋ/", pos: "n", vi: "đỗ xe", example: "Parking is free here.", exampleVi: "Đỗ xe ở đây miễn phí." },
      { en: "rush hour", ipa: "/rʌʃ aʊər/", pos: "n", vi: "giờ cao điểm", example: "Avoid rush hour.", exampleVi: "Tránh giờ cao điểm." },
      { en: "delay", ipa: "/dɪˈleɪ/", pos: "n", vi: "trì hoãn", example: "The train has a 10-minute delay.", exampleVi: "Tàu trễ 10 phút." },
      { en: "directions", ipa: "/dəˈrekʃnz/", pos: "n", vi: "chỉ đường", example: "Can you give me directions?", exampleVi: "Bạn chỉ đường cho tôi được không?" },
    ],
    phrases: [
      { en: "How do I get to ___?", vi: "Đi đến ___ thế nào?", when: "Câu hỏi đường vạn năng" },
      { en: "Does this go to ___?", vi: "Cái này có đi đến ___ không?", when: "Hỏi xe buýt/tàu" },
      { en: "Turn left/right.", vi: "Rẽ trái/phải.", when: "Khi chỉ đường hoặc nghe chỉ đường" },
      { en: "It's straight ahead.", vi: "Đi thẳng phía trước.", when: "Hướng dẫn đi tiếp" },
      { en: "How long does it take?", vi: "Mất bao lâu?", when: "Hỏi thời gian di chuyển" },
    ],
    quiz: [
      { prompt: "'station' nghĩa là?", options: ["bến", "ga/trạm", "sân bay", "bãi đỗ"], correctIndex: 1 },
      { prompt: "'I ___ the bus to work.' (đi xe buýt)", options: ["go", "take", "drive", "ride"], correctIndex: 1, explain: "'Take the bus/train/taxi' = sử dụng phương tiện đó." },
      { prompt: "Giờ cao điểm tiếng Anh là?", options: ["busy time", "hot hour", "rush hour", "peak time"], correctIndex: 2 },
      { prompt: "'Turn ___ at the corner.' (rẽ trái)", options: ["left", "right", "straight", "back"], correctIndex: 0 },
      { prompt: "'How ___ does it take?' (mất bao lâu)", options: ["much", "many", "long", "far"], correctIndex: 2 },
      { prompt: "'transfer' khi đi tàu nghĩa là?", options: ["mua vé", "đổi chuyến", "huỷ vé", "đặt chỗ"], correctIndex: 1 },
      { prompt: "'It's straight ___.' (đi thẳng)", options: ["forward", "ahead", "front", "before"], correctIndex: 1 },
      { prompt: "'Does this train ___ to Berlin?' (đi đến)", options: ["come", "arrive", "go", "leave"], correctIndex: 2, explain: "'Go to' = hướng đến nơi đó." },
    ],
  },

  // ─── 10. WEATHER & SEASONS ───────────────────────────────────
  {
    id: "weather",
    title: "Thời tiết & Mùa",
    emoji: "🌤️",
    tagline: "Nói chuyện về thời tiết — câu mở đầu vạn năng",
    tip: "Người Anh nổi tiếng nói chuyện thời tiết. 'Lovely weather, isn't it?' hoặc 'Bit cold today, isn't it?' là cách mở đầu hội thoại nhẹ nhàng nhất.",
    basicVocab: [
      { en: "weather", ipa: "/ˈweðər/", pos: "n", vi: "thời tiết", example: "How's the weather today?", exampleVi: "Thời tiết hôm nay thế nào?" },
      { en: "sunny", ipa: "/ˈsʌni/", pos: "adj", vi: "nắng", example: "It's sunny today.", exampleVi: "Hôm nay trời nắng." },
      { en: "rainy", ipa: "/ˈreɪni/", pos: "adj", vi: "mưa", example: "It's a rainy day.", exampleVi: "Hôm nay trời mưa." },
      { en: "cloudy", ipa: "/ˈklaʊdi/", pos: "adj", vi: "nhiều mây", example: "It's cloudy this morning.", exampleVi: "Sáng nay trời nhiều mây." },
      { en: "hot", ipa: "/hɑːt/", pos: "adj", vi: "nóng", example: "It's so hot!", exampleVi: "Nóng quá!" },
      { en: "cold", ipa: "/koʊld/", pos: "adj", vi: "lạnh", example: "It's cold outside.", exampleVi: "Bên ngoài lạnh." },
      { en: "wind", ipa: "/wɪnd/", pos: "n", vi: "gió", example: "There's a lot of wind today.", exampleVi: "Hôm nay nhiều gió." },
      { en: "snow", ipa: "/snoʊ/", pos: "n", vi: "tuyết", example: "I love snow.", exampleVi: "Tôi thích tuyết." },
      { en: "umbrella", ipa: "/ʌmˈbrelə/", pos: "n", vi: "ô", example: "Don't forget your umbrella.", exampleVi: "Đừng quên mang ô." },
      { en: "season", ipa: "/ˈsiːzn/", pos: "n", vi: "mùa", example: "What's your favorite season?", exampleVi: "Mùa bạn thích nhất là gì?" },
    ],
    advancedVocab: [
      { en: "spring", ipa: "/sprɪŋ/", pos: "n", vi: "mùa xuân", example: "Flowers bloom in spring.", exampleVi: "Hoa nở vào mùa xuân." },
      { en: "summer", ipa: "/ˈsʌmər/", pos: "n", vi: "mùa hè", example: "We swim in summer.", exampleVi: "Chúng tôi bơi vào mùa hè." },
      { en: "autumn", ipa: "/ˈɔːtəm/", pos: "n", vi: "mùa thu (UK)", example: "Leaves fall in autumn.", exampleVi: "Lá rụng vào mùa thu." },
      { en: "fall", ipa: "/fɔːl/", pos: "n", vi: "mùa thu (US)", example: "I love fall colors.", exampleVi: "Tôi thích màu của mùa thu." },
      { en: "winter", ipa: "/ˈwɪntər/", pos: "n", vi: "mùa đông", example: "Winter in Germany is cold.", exampleVi: "Mùa đông ở Đức lạnh." },
      { en: "forecast", ipa: "/ˈfɔːrkæst/", pos: "n", vi: "dự báo", example: "The forecast says rain.", exampleVi: "Dự báo nói có mưa." },
      { en: "humid", ipa: "/ˈhjuːmɪd/", pos: "adj", vi: "ẩm", example: "Vietnam is humid in summer.", exampleVi: "Việt Nam ẩm vào mùa hè." },
      { en: "freezing", ipa: "/ˈfriːzɪŋ/", pos: "adj", vi: "rét buốt", example: "It's freezing outside!", exampleVi: "Bên ngoài rét buốt!" },
      { en: "storm", ipa: "/stɔːrm/", pos: "n", vi: "bão", example: "A storm is coming.", exampleVi: "Bão đang đến." },
      { en: "temperature", ipa: "/ˈtemprətʃər/", pos: "n", vi: "nhiệt độ", example: "What's the temperature?", exampleVi: "Nhiệt độ là bao nhiêu?" },
    ],
    phrases: [
      { en: "How's the weather?", vi: "Thời tiết thế nào?", when: "Câu hỏi xã giao kinh điển" },
      { en: "It's freezing!", vi: "Rét quá!", when: "Khi trời rất lạnh (dưới 0°C)" },
      { en: "It looks like rain.", vi: "Trông có vẻ sắp mưa.", when: "Dự đoán mưa sắp đến" },
      { en: "Lovely weather, isn't it?", vi: "Thời tiết đẹp nhỉ?", when: "Mở đầu chuyện với người lạ" },
      { en: "Stay warm!", vi: "Giữ ấm nhé!", when: "Chúc khi trời lạnh" },
    ],
    quiz: [
      { prompt: "'sunny' nghĩa là?", options: ["mưa", "nắng", "lạnh", "gió"], correctIndex: 1 },
      { prompt: "'It's ___ today.' (trời nóng)", options: ["hot", "warm", "heat", "summer"], correctIndex: 0 },
      { prompt: "Mùa thu ở Mỹ gọi là?", options: ["autumn", "fall", "leaf", "harvest"], correctIndex: 1, explain: "Mỹ: 'fall'. Anh: 'autumn'. Cả hai đều đúng." },
      { prompt: "'It's freezing!' nghĩa là?", options: ["Mát quá!", "Ấm quá!", "Rét quá!", "Bão rồi!"], correctIndex: 2 },
      { prompt: "Khi nào dùng 'umbrella'?", options: ["trời nắng to", "trời mưa", "trời tuyết", "B và C đều có thể"], correctIndex: 3, explain: "Ô dùng khi mưa, hoặc đôi khi tuyết nhẹ. Khi nắng to → 'parasol' hoặc 'sun umbrella'." },
      { prompt: "'forecast' nghĩa là?", options: ["nhiệt độ", "dự báo", "thời tiết hôm nay", "mùa"], correctIndex: 1 },
      { prompt: "'It ___ like rain.' (trông sắp mưa)", options: ["seems", "looks", "feels", "sounds"], correctIndex: 1, explain: "'Look like + N' = trông có vẻ như..." },
      { prompt: "Chúc người khác giữ ấm khi trời lạnh?", options: ["Be warm!", "Stay warm!", "Have warm!", "Keep hot!"], correctIndex: 1 },
    ],
  },
];
