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
  when: string;
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
  tip: string;
  basicVocab: VocabItem[];
  advancedVocab: VocabItem[];
  phrases: Phrase[];
  quiz: QuizQ[];
};

export const TOPICS: Topic[] = [
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
      { prompt: "Đến sân bay, bạn cần làm gì đầu tiên?", options: ["check-in", "boarding", "landing", "customs"], correctIndex: 0 },
      { prompt: "'How much ___ it?' (Bao nhiêu tiền vậy?)", options: ["are", "is", "do", "does"], correctIndex: 1 },
      { prompt: "'Where can I ___ money?' (đổi tiền)", options: ["change", "exchange", "trade", "swap"], correctIndex: 1 },
      { prompt: "'boarding pass' dùng để làm gì?", options: ["vào khách sạn", "lên máy bay", "qua hải quan", "đặt chỗ"], correctIndex: 1 },
      { prompt: "Khi bị lạc đường, bạn nói gì?", options: ["I'm tired.", "I'm hungry.", "I'm lost.", "I'm late."], correctIndex: 2 },
      { prompt: "'Có nhà vệ sinh gần đây không?' tiếng Anh là?", options: ["Where toilet?", "Is there a restroom nearby?", "Toilet please?", "Where to bathroom?"], correctIndex: 1 },
      { prompt: "'I'd like to ___ a room.' (đặt phòng)", options: ["buy", "book", "rent", "have"], correctIndex: 1 },
    ],
  },
  {
    id: "business",
    title: "Công việc",
    emoji: "💼",
    tagline: "Giao tiếp chuyên nghiệp ở văn phòng",
    tip: "Email công việc bắt đầu bằng 'Hi [tên]' thân thiện hơn 'Dear Mr/Ms'. Kết thúc bằng 'Best regards,' là an toàn nhất.",
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
      { en: "colleague", ipa: "/ˈkɔːliːɡ/", pos: "n", vi: "đồng nghiệp", example: "She is my colleague.", exampleVi: "Cô ấy là đồng nghiệp của tôi." },
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
      { prompt: "'Could we ___ a meeting?' (xếp lịch)", options: ["make", "schedule", "do", "have"], correctIndex: 1 },
      { prompt: "'I'll ___ back to you.' (phản hồi sau)", options: ["come", "go", "get", "send"], correctIndex: 2 },
      { prompt: "Đồng nghiệp tiếng Anh là?", options: ["colleague", "client", "customer", "boss"], correctIndex: 0 },
      { prompt: "'promotion' nghĩa là?", options: ["sa thải", "thăng chức", "nghỉ phép", "tăng lương"], correctIndex: 1 },
      { prompt: "Phần kết email công việc lịch sự nhất?", options: ["Bye!", "Thanks!", "Best regards,", "See ya"], correctIndex: 2 },
      { prompt: "'The client ___ changes.' (muốn thay đổi)", options: ["want", "wants", "wanting", "wanted"], correctIndex: 1 },
    ],
  },
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
      { prompt: "'hobby' nghĩa là?", options: ["công việc", "sở thích", "kỳ nghỉ", "thể thao"], correctIndex: 1 },
      { prompt: "Câu nào dùng đúng để kể thói quen?", options: ["I am waking up at 7.", "I usually wake up at 7.", "I will wake up at 7.", "I woke up at 7."], correctIndex: 1 },
      { prompt: "'I'm running ___.' (bị muộn)", options: ["late", "fast", "slow", "behind"], correctIndex: 0 },
      { prompt: "'commute' nghĩa là?", options: ["đi du lịch", "đi làm/về", "đi chợ", "đi học"], correctIndex: 1 },
      { prompt: "Bảo người khác cứ từ từ?", options: ["Hurry up!", "Take your time.", "Be quick.", "Now or never."], correctIndex: 1 },
      { prompt: "'What are you ___ to?' (đang làm gì)", options: ["going", "doing", "up", "out"], correctIndex: 2 },
      { prompt: "'I ___ English every day.' (học)", options: ["study", "studies", "studying", "studied"], correctIndex: 0 },
    ],
  },
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
      { prompt: "'The app keeps ___.' (cứ bị treo)", options: ["closing", "crashing", "stopping", "ending"], correctIndex: 1 },
      { prompt: "'settings' là gì?", options: ["tính năng", "ứng dụng", "cài đặt", "tài khoản"], correctIndex: 2 },
      { prompt: "'My battery is ___.' (hết pin)", options: ["empty", "dead", "off", "low"], correctIndex: 1 },
      { prompt: "'download' nghĩa là?", options: ["tải lên", "tải xuống", "xoá", "cài đặt"], correctIndex: 1 },
      { prompt: "'It's not ___.' (không hoạt động)", options: ["work", "works", "working", "worked"], correctIndex: 2 },
      { prompt: "Cách fix kinh điển trong IT?", options: ["Đập máy", "Tắt mở lại", "Mua máy mới", "Gọi sếp"], correctIndex: 1 },
    ],
  },
];
