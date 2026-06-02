export type VocabWord = {
  en: string;
  vi: string;
  ipa?: string;
  example?: string;
  exampleVi?: string;
};

export type QuizQ = {
  prompt: string;
  options: string[];
  correctIndex: number;
  explain?: string;
};

export type FillBlankItem = {
  // Use ___ in sentence to mark blank
  sentence: string;
  answer: string; // accepted answer (single word/phrase)
  alts?: string[]; // alternative accepted answers
  hint?: string; // e.g. "(be động từ)"
  vi: string; // Vietnamese translation
};

export type SentencePuzzle = {
  target: string; // "I am a student."
  pieces: string[]; // ["I", "am", "a", "student."]
  vi: string;
  hint?: string;
};

export type PronounceItem = {
  text: string;
  vi: string;
  tip?: string; // e.g. "Chú ý âm /θ/ ở 'think'"
};

export type LessonStep =
  | { kind: "intro"; title: string; body: string }
  | { kind: "vocab"; items: VocabWord[] }
  | { kind: "grammar"; title: string; explanation: string; examples: { en: string; vi: string }[] }
  | { kind: "quiz"; questions: QuizQ[] }
  | { kind: "fill-blank"; items: FillBlankItem[] }
  | { kind: "sentence-builder"; puzzles: SentencePuzzle[] }
  | { kind: "pronounce"; items: PronounceItem[] };

export type Lesson = {
  id: string;
  unit: number;
  order: number;
  title: string;
  subtitle: string;
  level: "A0" | "A1" | "A2";
  xpReward: number;
  steps: LessonStep[];
};

export const BEGINNER_LESSONS: Lesson[] = [
  // ════════════════════════════════════════════════════════════
  // UNIT 1 — KHỞI ĐỘNG (A0)
  // ════════════════════════════════════════════════════════════
  {
    id: "b-01",
    unit: 1,
    order: 1,
    title: "Bảng chữ cái và cách đọc",
    subtitle: "Học 26 chữ cái và âm cơ bản",
    level: "A0",
    xpReward: 20,
    steps: [
      {
        kind: "intro",
        title: "Chào mừng đến với tiếng Anh!",
        body: "Tiếng Anh có 26 chữ cái, giống bảng chữ cái Latin. Khác với tiếng Việt: không có dấu, nhưng cách đọc thì khác. Bài này dạy bạn đọc đúng từng chữ.\n\nBấm vào nút loa 🔊 để nghe phát âm chuẩn — đây là tính năng quan trọng nhất, dùng thường xuyên.",
      },
      {
        kind: "vocab",
        items: [
          { en: "A", vi: "ây", ipa: "/eɪ/", example: "apple", exampleVi: "quả táo" },
          { en: "B", vi: "bi", ipa: "/biː/", example: "book", exampleVi: "quyển sách" },
          { en: "C", vi: "xi", ipa: "/siː/", example: "cat", exampleVi: "con mèo" },
          { en: "D", vi: "đi", ipa: "/diː/", example: "dog", exampleVi: "con chó" },
          { en: "E", vi: "i", ipa: "/iː/", example: "egg", exampleVi: "quả trứng" },
          { en: "H", vi: "ếch", ipa: "/eɪtʃ/", example: "hat", exampleVi: "cái mũ" },
          { en: "J", vi: "giây", ipa: "/dʒeɪ/", example: "juice", exampleVi: "nước trái cây" },
          { en: "W", vi: "đắp-bồ-liu", ipa: "/ˈdʌbəl.juː/", example: "water", exampleVi: "nước" },
        ],
      },
      {
        kind: "pronounce",
        items: [
          { text: "apple", vi: "quả táo", tip: "Chữ A đọc gần âm 'e' tiếng Việt, không phải 'a'." },
          { text: "cat", vi: "con mèo", tip: "Chữ C đọc /k/ — 'cờ'. Khác với khi đứng một mình (đọc 'xi')." },
          { text: "water", vi: "nước", tip: "Chữ W đọc thành /w/ — môi tròn." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          {
            prompt: "Chữ 'C' đọc là gì khi đứng một mình?",
            options: ["xi", "ki", "cờ", "chi"],
            correctIndex: 0,
            explain: "Chữ C khi đứng một mình đọc /siː/ — 'xi'. Khi trong từ thì khác (vd: 'cat' → /k/).",
          },
          {
            prompt: "Chữ nào đọc là 'đắp-bồ-liu'?",
            options: ["V", "W", "U", "Y"],
            correctIndex: 1,
            explain: "W là chữ duy nhất có tên 2 âm tiết: 'double-u'.",
          },
          {
            prompt: "'apple' bắt đầu bằng âm gì?",
            options: ["a (như tiếng Việt)", "ây", "e", "ô"],
            correctIndex: 2,
            explain: "Trong 'apple', chữ A đọc gần âm 'e' chứ không phải 'a' Việt.",
          },
        ],
      },
    ],
  },

  {
    id: "b-02",
    unit: 1,
    order: 2,
    title: "Chào hỏi cơ bản",
    subtitle: "Hello, Hi, Goodbye và cách giới thiệu",
    level: "A0",
    xpReward: 25,
    steps: [
      {
        kind: "intro",
        title: "Câu chào quan trọng nhất",
        body: "Người Anh-Mỹ chào hỏi rất nhiều. Học 8 câu này là bạn đã sống sót được trong 80% tình huống xã giao.",
      },
      {
        kind: "vocab",
        items: [
          { en: "Hello", vi: "Xin chào", ipa: "/heˈloʊ/", example: "Hello, I'm Huy.", exampleVi: "Xin chào, tôi là Huy." },
          { en: "Hi", vi: "Chào (thân mật)", ipa: "/haɪ/", example: "Hi! Nice to meet you.", exampleVi: "Chào! Rất vui được gặp bạn." },
          { en: "Good morning", vi: "Chào buổi sáng", ipa: "/ɡʊd ˈmɔːrnɪŋ/", example: "Good morning, teacher.", exampleVi: "Chào buổi sáng, thầy/cô." },
          { en: "Good night", vi: "Chúc ngủ ngon", ipa: "/ɡʊd naɪt/", example: "Good night, mom.", exampleVi: "Chúc mẹ ngủ ngon." },
          { en: "Goodbye", vi: "Tạm biệt", ipa: "/ɡʊdˈbaɪ/", example: "Goodbye, see you tomorrow.", exampleVi: "Tạm biệt, hẹn gặp lại ngày mai." },
          { en: "Bye", vi: "Bai (thân mật)", ipa: "/baɪ/", example: "Bye! Have a nice day.", exampleVi: "Bai! Chúc một ngày tốt lành." },
          { en: "Nice to meet you", vi: "Rất vui được gặp bạn", ipa: "/naɪs tə miːt juː/", example: "I'm Anna. Nice to meet you!", exampleVi: "Tôi là Anna. Rất vui được gặp bạn!" },
          { en: "How are you?", vi: "Bạn khỏe không?", ipa: "/haʊ ər juː/", example: "Hi John, how are you?", exampleVi: "Chào John, bạn khỏe không?" },
        ],
      },
      {
        kind: "grammar",
        title: "Tự giới thiệu: I am / I'm",
        explanation: "Để giới thiệu bản thân, dùng 'I am' hoặc viết tắt 'I'm' + tên. Đây là cấu trúc đầu tiên bạn cần thuộc lòng.",
        examples: [
          { en: "I am Huy.", vi: "Tôi là Huy." },
          { en: "I'm a student.", vi: "Tôi là sinh viên." },
          { en: "I'm from Vietnam.", vi: "Tôi đến từ Việt Nam." },
        ],
      },
      {
        kind: "pronounce",
        items: [
          { text: "Hello, I'm Huy.", vi: "Xin chào, tôi là Huy.", tip: "Nói chậm, rõ từng từ. 'I'm' đọc nối liền /aɪm/." },
          { text: "Nice to meet you.", vi: "Rất vui được gặp bạn.", tip: "'to meet you' đọc nhanh, nối: /tə miːt jə/." },
          { text: "How are you?", vi: "Bạn khỏe không?", tip: "Lên giọng ở cuối — đây là câu hỏi." },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "___ , I'm Huy.", answer: "Hello", alts: ["Hi"], hint: "(Lời chào)", vi: "Xin chào, tôi là Huy." },
          { sentence: "Good ___ , teacher.", answer: "morning", hint: "(buổi sáng)", vi: "Chào buổi sáng, thầy/cô." },
          { sentence: "I ___ a student.", answer: "am", alts: ["'m"], hint: "(to be với 'I')", vi: "Tôi là sinh viên." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "Buổi sáng gặp người Anh, bạn nói gì?", options: ["Good night", "Good morning", "Goodbye", "Good evening"], correctIndex: 1 },
          { prompt: "'Nice to meet you' nghĩa là?", options: ["Tạm biệt", "Bạn khỏe không", "Rất vui được gặp bạn", "Hẹn gặp lại"], correctIndex: 2 },
          { prompt: "Cách giới thiệu đúng?", options: ["I Huy.", "I am Huy.", "Me Huy.", "My Huy."], correctIndex: 1, explain: "Phải có 'am' (động từ to be) giữa I và tên." },
        ],
      },
    ],
  },

  {
    id: "b-03",
    unit: 1,
    order: 3,
    title: "Số đếm 1–20",
    subtitle: "Đếm số bằng tiếng Anh",
    level: "A0",
    xpReward: 25,
    steps: [
      {
        kind: "intro",
        title: "Đếm số — kỹ năng sống sót",
        body: "Bạn cần số để hỏi giá, thời gian, số tuổi, đường... Học 20 số đầu tiên cho chắc, các số khác xây từ đây.",
      },
      {
        kind: "vocab",
        items: [
          { en: "one", vi: "1", ipa: "/wʌn/" },
          { en: "two", vi: "2", ipa: "/tuː/" },
          { en: "three", vi: "3", ipa: "/θriː/" },
          { en: "four", vi: "4", ipa: "/fɔːr/" },
          { en: "five", vi: "5", ipa: "/faɪv/" },
          { en: "six", vi: "6", ipa: "/sɪks/" },
          { en: "seven", vi: "7", ipa: "/ˈsevən/" },
          { en: "eight", vi: "8", ipa: "/eɪt/" },
          { en: "nine", vi: "9", ipa: "/naɪn/" },
          { en: "ten", vi: "10", ipa: "/ten/" },
          { en: "eleven", vi: "11", ipa: "/ɪˈlevən/" },
          { en: "twelve", vi: "12", ipa: "/twelv/" },
          { en: "thirteen", vi: "13", ipa: "/ˌθɜːrˈtiːn/" },
          { en: "twenty", vi: "20", ipa: "/ˈtwenti/" },
        ],
      },
      {
        kind: "pronounce",
        items: [
          { text: "three", vi: "3", tip: "Âm /θ/ — đặt lưỡi giữa hai răng cửa, thổi nhẹ. Không phải 'th-ri' kiểu Việt." },
          { text: "twelve", vi: "12", tip: "Đọc /twelv/ — chú ý âm 'lv' cuối." },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "I am ___ years old. (25 tuổi)", answer: "twenty-five", alts: ["25"], hint: "Số tuổi của bạn", vi: "Tôi 25 tuổi." },
          { sentence: "There are ___ days in a week.", answer: "seven", alts: ["7"], hint: "(số 7)", vi: "Một tuần có 7 ngày." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "Số 7 trong tiếng Anh?", options: ["six", "seven", "eight", "nine"], correctIndex: 1 },
          { prompt: "'twelve' là số bao nhiêu?", options: ["10", "11", "12", "20"], correctIndex: 2 },
          { prompt: "Từ 13 đến 19 đều kết thúc bằng gì?", options: ["-ty", "-teen", "-ten", "-een"], correctIndex: 1, explain: "13–19: thirteen, fourteen, fifteen... Tất cả có đuôi '-teen'." },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // UNIT 2 — CÂU ĐẦU TIÊN (A1)
  // ════════════════════════════════════════════════════════════
  {
    id: "b-04",
    unit: 2,
    order: 1,
    title: "To be: am / is / are",
    subtitle: "Động từ quan trọng nhất tiếng Anh",
    level: "A1",
    xpReward: 30,
    steps: [
      {
        kind: "grammar",
        title: "Quy tắc động từ TO BE",
        explanation: "Tiếng Anh có 1 động từ siêu quan trọng: TO BE. Nó có 3 dạng tuỳ chủ ngữ:\n• I + am\n• He / She / It + is\n• You / We / They + are\n\nNếu bạn nói sai chỗ này, người Anh-Mỹ sẽ hiểu nhưng sẽ biết bạn mới học.",
        examples: [
          { en: "I am happy.", vi: "Tôi vui." },
          { en: "She is my friend.", vi: "Cô ấy là bạn tôi." },
          { en: "We are students.", vi: "Chúng tôi là sinh viên." },
          { en: "They are from Germany.", vi: "Họ đến từ Đức." },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "I ___ happy.", answer: "am", alts: ["'m"], hint: "(to be với I)", vi: "Tôi vui." },
          { sentence: "She ___ a teacher.", answer: "is", alts: ["'s"], hint: "(to be với She)", vi: "Cô ấy là giáo viên." },
          { sentence: "We ___ from Vietnam.", answer: "are", alts: ["'re"], hint: "(to be với We)", vi: "Chúng tôi đến từ Việt Nam." },
          { sentence: "They ___ tired.", answer: "are", alts: ["'re"], hint: "(to be với They)", vi: "Họ mệt." },
          { sentence: "He ___ my brother.", answer: "is", alts: ["'s"], hint: "(to be với He)", vi: "Anh ấy là anh trai tôi." },
        ],
      },
      {
        kind: "sentence-builder",
        puzzles: [
          { target: "I am a student.", pieces: ["I", "am", "a", "student."], vi: "Tôi là sinh viên." },
          { target: "She is my friend.", pieces: ["She", "is", "my", "friend."], vi: "Cô ấy là bạn tôi." },
          { target: "They are from Germany.", pieces: ["They", "are", "from", "Germany."], vi: "Họ đến từ Đức." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "Chọn câu đúng:", options: ["I is happy.", "I am happy.", "I are happy.", "I be happy."], correctIndex: 1 },
          { prompt: "Câu nào SAI?", options: ["He is tall.", "They are friends.", "You is nice.", "I am Vietnamese."], correctIndex: 2, explain: "'You' luôn đi với 'are', không bao giờ 'is'." },
        ],
      },
    ],
  },

  {
    id: "b-05",
    unit: 2,
    order: 2,
    title: "Đồ vật trong nhà",
    subtitle: "20 từ vựng cơ bản về đồ vật",
    level: "A1",
    xpReward: 25,
    steps: [
      {
        kind: "vocab",
        items: [
          { en: "table", vi: "cái bàn", ipa: "/ˈteɪbl/", example: "The book is on the table.", exampleVi: "Quyển sách ở trên bàn." },
          { en: "chair", vi: "cái ghế", ipa: "/tʃer/", example: "She sits on a chair.", exampleVi: "Cô ấy ngồi trên ghế." },
          { en: "bed", vi: "giường", ipa: "/bed/", example: "I sleep in my bed.", exampleVi: "Tôi ngủ trên giường của tôi." },
          { en: "door", vi: "cửa", ipa: "/dɔːr/", example: "Close the door, please.", exampleVi: "Vui lòng đóng cửa." },
          { en: "window", vi: "cửa sổ", ipa: "/ˈwɪndoʊ/", example: "Open the window.", exampleVi: "Mở cửa sổ ra." },
          { en: "lamp", vi: "đèn", ipa: "/læmp/", example: "Turn on the lamp.", exampleVi: "Bật đèn lên." },
          { en: "book", vi: "quyển sách", ipa: "/bʊk/", example: "This is my English book.", exampleVi: "Đây là sách tiếng Anh của tôi." },
          { en: "pen", vi: "bút", ipa: "/pen/", example: "Can I borrow your pen?", exampleVi: "Tôi mượn bút của bạn được không?" },
          { en: "phone", vi: "điện thoại", ipa: "/foʊn/", example: "My phone is new.", exampleVi: "Điện thoại tôi mới." },
          { en: "key", vi: "chìa khoá", ipa: "/kiː/", example: "Where is my key?", exampleVi: "Chìa khoá tôi đâu?" },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "Please close the ___.", answer: "door", hint: "(cửa ra vào)", vi: "Vui lòng đóng cửa." },
          { sentence: "My ___ is on the table.", answer: "book", alts: ["pen", "phone", "key"], hint: "(đồ vật bất kỳ)", vi: "Đồ của tôi ở trên bàn." },
          { sentence: "Where is my ___?", answer: "phone", alts: ["key", "pen", "book"], hint: "(đồ vật bất kỳ)", vi: "Đồ của tôi đâu rồi?" },
        ],
      },
      {
        kind: "sentence-builder",
        puzzles: [
          { target: "The book is on the table.", pieces: ["The", "book", "is", "on", "the", "table."], vi: "Quyển sách ở trên bàn." },
          { target: "Open the window please.", pieces: ["Open", "the", "window", "please."], vi: "Vui lòng mở cửa sổ." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "'chair' là gì?", options: ["bàn", "ghế", "giường", "cửa"], correctIndex: 1 },
          { prompt: "'cửa sổ' tiếng Anh là?", options: ["door", "wall", "window", "gate"], correctIndex: 2 },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // UNIT 3 — THÌ HIỆN TẠI (A2)
  // ════════════════════════════════════════════════════════════
  {
    id: "b-06",
    unit: 3,
    order: 1,
    title: "Hiện tại đơn — Present Simple",
    subtitle: "Diễn tả thói quen, sự thật",
    level: "A2",
    xpReward: 35,
    steps: [
      {
        kind: "grammar",
        title: "Khi nào dùng Present Simple?",
        explanation: "Dùng khi nói về:\n• Thói quen: I drink coffee every morning.\n• Sự thật: The sun rises in the east.\n• Lịch trình cố định: The train leaves at 8 AM.\n\nQuy tắc S+s/es: He, She, It → động từ thêm 's'. Ví dụ: He works → có 's'.",
        examples: [
          { en: "I work in Germany.", vi: "Tôi làm việc ở Đức." },
          { en: "She speaks Vietnamese.", vi: "Cô ấy nói tiếng Việt." },
          { en: "We play football on Sunday.", vi: "Chúng tôi đá bóng vào Chủ nhật." },
          { en: "He doesn't like coffee.", vi: "Anh ấy không thích cà phê. (phủ định)" },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "He ___ English every day. (study)", answer: "studies", hint: "(He + V-s/es)", vi: "Anh ấy học tiếng Anh mỗi ngày." },
          { sentence: "I ___ coffee in the morning. (drink)", answer: "drink", hint: "(I + V)", vi: "Tôi uống cà phê buổi sáng." },
          { sentence: "She ___ in Berlin. (live)", answer: "lives", hint: "(She + V-s)", vi: "Cô ấy sống ở Berlin." },
          { sentence: "They ___ football. (play)", answer: "play", hint: "(They + V)", vi: "Họ chơi bóng đá." },
        ],
      },
      {
        kind: "sentence-builder",
        puzzles: [
          { target: "I drink coffee every morning.", pieces: ["I", "drink", "coffee", "every", "morning."], vi: "Tôi uống cà phê mỗi sáng." },
          { target: "She works in a hospital.", pieces: ["She", "works", "in", "a", "hospital."], vi: "Cô ấy làm việc ở bệnh viện." },
          { target: "We don't like spicy food.", pieces: ["We", "don't", "like", "spicy", "food."], vi: "Chúng tôi không thích đồ cay." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "He ___ English every day.", options: ["study", "studies", "studys", "studying"], correctIndex: 1, explain: "Sau 'He', động từ thêm '-s'. 'study' kết thúc bằng 'y' → đổi thành 'ies'." },
          { prompt: "Câu phủ định đúng?", options: ["I no like tea.", "I don't like tea.", "I am not like tea.", "I doesn't like tea."], correctIndex: 1 },
          { prompt: "She ___ football. (không đá bóng)", options: ["don't play", "doesn't play", "doesn't plays", "not play"], correctIndex: 1, explain: "She/He/It dùng 'doesn't' và động từ KHÔNG thêm s." },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // UNIT 4 — GIAO TIẾP HÀNG NGÀY (A1-A2)
  // ════════════════════════════════════════════════════════════
  {
    id: "b-07",
    unit: 4,
    order: 1,
    title: "Hỏi và trả lời thông tin cá nhân",
    subtitle: "What's your name? Where are you from?",
    level: "A1",
    xpReward: 30,
    steps: [
      {
        kind: "intro",
        title: "5 câu hỏi sống còn khi gặp người mới",
        body: "Khi mới quen ai đó, bạn sẽ nghe (và phải trả lời) 5 câu này. Học thuộc lòng cả câu hỏi và mẫu trả lời.",
      },
      {
        kind: "vocab",
        items: [
          { en: "What's your name?", vi: "Bạn tên gì?", ipa: "/wɒts jɔːr neɪm/", example: "Hi! What's your name?", exampleVi: "Chào! Bạn tên gì?" },
          { en: "My name is...", vi: "Tôi tên là...", ipa: "/maɪ neɪm ɪz/", example: "My name is Huy.", exampleVi: "Tôi tên là Huy." },
          { en: "Where are you from?", vi: "Bạn từ đâu đến?", ipa: "/wer ər juː frʌm/", example: "Where are you from, John?", exampleVi: "John, bạn từ đâu đến?" },
          { en: "I'm from Vietnam.", vi: "Tôi đến từ Việt Nam.", ipa: "/aɪm frʌm ˌvjetˈnɑːm/", example: "I'm from Vietnam, but I live in Germany.", exampleVi: "Tôi đến từ Việt Nam nhưng sống ở Đức." },
          { en: "How old are you?", vi: "Bạn bao nhiêu tuổi?", ipa: "/haʊ oʊld ər juː/", example: "How old are you, Anna?", exampleVi: "Anna, bạn bao nhiêu tuổi?" },
          { en: "I'm 25 years old.", vi: "Tôi 25 tuổi.", ipa: "/aɪm ˈtwenti faɪv jɪrz oʊld/", example: "I'm 25 years old.", exampleVi: "Tôi 25 tuổi." },
          { en: "What do you do?", vi: "Bạn làm nghề gì?", ipa: "/wɒt duː juː duː/", example: "Nice to meet you. What do you do?", exampleVi: "Rất vui gặp bạn. Bạn làm nghề gì?" },
          { en: "I'm a student.", vi: "Tôi là sinh viên.", ipa: "/aɪm ə ˈstuːdənt/", example: "I'm a student at TU Berlin.", exampleVi: "Tôi là sinh viên ở TU Berlin." },
        ],
      },
      {
        kind: "pronounce",
        items: [
          { text: "What's your name?", vi: "Bạn tên gì?", tip: "'What's' nói nhanh /wɒts/, không tách ra 'what is'." },
          { text: "Where are you from?", vi: "Bạn từ đâu đến?", tip: "Lên giọng cuối câu — đây là câu hỏi." },
          { text: "I'm from Vietnam.", vi: "Tôi đến từ Việt Nam.", tip: "'Vietnam' đọc /ˌvjetˈnɑːm/ — nhấn âm cuối." },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "What's your ___ ?", answer: "name", hint: "(tên)", vi: "Bạn tên gì?" },
          { sentence: "I'm ___ Vietnam.", answer: "from", hint: "(từ đâu)", vi: "Tôi đến từ Việt Nam." },
          { sentence: "How ___ are you?", answer: "old", hint: "(tuổi)", vi: "Bạn bao nhiêu tuổi?" },
        ],
      },
      {
        kind: "sentence-builder",
        puzzles: [
          { target: "My name is Huy.", pieces: ["My", "name", "is", "Huy."], vi: "Tôi tên Huy." },
          { target: "I'm from Vietnam.", pieces: ["I'm", "from", "Vietnam."], vi: "Tôi đến từ Việt Nam." },
          { target: "I'm 25 years old.", pieces: ["I'm", "25", "years", "old."], vi: "Tôi 25 tuổi." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "Hỏi tên ai đó:", options: ["What you name?", "Who is name?", "What's your name?", "Where is name?"], correctIndex: 2 },
          { prompt: "'I'm from Vietnam' nghĩa là?", options: ["Tôi tên Việt Nam", "Tôi đến từ Việt Nam", "Tôi ở Việt Nam", "Tôi yêu Việt Nam"], correctIndex: 1 },
          { prompt: "Tự giới thiệu nghề:", options: ["I student.", "I am student.", "I'm a student.", "My student."], correctIndex: 2, explain: "Cần 'a' trước nghề nghiệp đếm được số ít." },
        ],
      },
    ],
  },

  {
    id: "b-08",
    unit: 4,
    order: 2,
    title: "Thời gian — Hỏi giờ và ngày",
    subtitle: "What time is it? What day is today?",
    level: "A1",
    xpReward: 25,
    steps: [
      {
        kind: "vocab",
        items: [
          { en: "Monday", vi: "Thứ Hai", ipa: "/ˈmʌndeɪ/" },
          { en: "Tuesday", vi: "Thứ Ba", ipa: "/ˈtuːzdeɪ/" },
          { en: "Wednesday", vi: "Thứ Tư", ipa: "/ˈwenzdeɪ/", example: "I have a meeting on Wednesday.", exampleVi: "Tôi có cuộc họp vào thứ Tư." },
          { en: "Thursday", vi: "Thứ Năm", ipa: "/ˈθɜːrzdeɪ/" },
          { en: "Friday", vi: "Thứ Sáu", ipa: "/ˈfraɪdeɪ/" },
          { en: "Saturday", vi: "Thứ Bảy", ipa: "/ˈsætərdeɪ/" },
          { en: "Sunday", vi: "Chủ Nhật", ipa: "/ˈsʌndeɪ/" },
          { en: "What time is it?", vi: "Mấy giờ rồi?", ipa: "/wɒt taɪm ɪz ɪt/", example: "Excuse me, what time is it?", exampleVi: "Xin lỗi, mấy giờ rồi?" },
          { en: "It's 3 o'clock.", vi: "Đúng 3 giờ.", ipa: "/ɪts θriː əˈklɒk/", example: "It's 3 o'clock now.", exampleVi: "Bây giờ là 3 giờ." },
          { en: "half past", vi: "rưỡi", ipa: "/hæf pæst/", example: "It's half past two.", exampleVi: "Bây giờ là 2 giờ rưỡi." },
        ],
      },
      {
        kind: "pronounce",
        items: [
          { text: "Wednesday", vi: "Thứ Tư", tip: "Đừng đọc 'wed-nes-day'! Đúng là /ˈwenzdeɪ/ — chữ 'd' đầu câm." },
          { text: "Thursday", vi: "Thứ Năm", tip: "Âm /θ/ ở đầu — lưỡi giữa 2 răng, thổi hơi." },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "What ___ is it?", answer: "time", hint: "(giờ)", vi: "Mấy giờ rồi?" },
          { sentence: "It's 3 ___ .", answer: "o'clock", alts: ["oclock"], hint: "(đúng giờ)", vi: "Đúng 3 giờ." },
          { sentence: "Today is ___ . (Thứ Hai)", answer: "Monday", hint: "(Mon...)", vi: "Hôm nay là Thứ Hai." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "'Wednesday' là thứ mấy?", options: ["Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm"], correctIndex: 2 },
          { prompt: "Hỏi 'mấy giờ rồi?'", options: ["What clock?", "How time?", "What time is it?", "When time?"], correctIndex: 2 },
          { prompt: "'half past two' nghĩa là?", options: ["2:00", "2:15", "2:30", "2:45"], correctIndex: 2, explain: "'half past' = rưỡi (30 phút sau giờ)." },
        ],
      },
    ],
  },

  // ════════════════════════════════════════════════════════════
  // UNIT 5 — A2 NÂNG CAO
  // ════════════════════════════════════════════════════════════
  {
    id: "b-09",
    unit: 5,
    order: 1,
    title: "Quá khứ đơn — Past Simple",
    subtitle: "Kể lại việc đã xảy ra",
    level: "A2",
    xpReward: 35,
    steps: [
      {
        kind: "grammar",
        title: "Khi nào dùng Past Simple?",
        explanation: "Dùng khi nói về hành động đã hoàn thành trong quá khứ:\n• Yesterday I went to school. (Hôm qua tôi đi học.)\n• She studied English last year.\n\nĐộng từ thêm '-ed' (regular): work → worked, play → played\nMột số đổi hoàn toàn (irregular): go → went, eat → ate, see → saw\n\nPhủ định: didn't + V nguyên thể (KHÔNG thêm ed).",
        examples: [
          { en: "I worked yesterday.", vi: "Hôm qua tôi đi làm." },
          { en: "She went to Paris last week.", vi: "Cô ấy đi Paris tuần trước." },
          { en: "We didn't eat lunch.", vi: "Chúng tôi đã không ăn trưa." },
          { en: "Did you call him?", vi: "Bạn đã gọi anh ấy chưa?" },
        ],
      },
      {
        kind: "vocab",
        items: [
          { en: "yesterday", vi: "hôm qua", ipa: "/ˈjestərdeɪ/", example: "I called my mom yesterday.", exampleVi: "Hôm qua tôi gọi mẹ." },
          { en: "last week", vi: "tuần trước", ipa: "/læst wiːk/", example: "We met last week.", exampleVi: "Chúng tôi gặp nhau tuần trước." },
          { en: "ago", vi: "trước đây", ipa: "/əˈɡoʊ/", example: "He left 5 minutes ago.", exampleVi: "Anh ấy rời đi 5 phút trước." },
          { en: "went", vi: "đã đi (go)", ipa: "/went/", example: "I went home early.", exampleVi: "Tôi về nhà sớm." },
          { en: "ate", vi: "đã ăn (eat)", ipa: "/eɪt/", example: "She ate pho for breakfast.", exampleVi: "Cô ấy ăn phở bữa sáng." },
          { en: "saw", vi: "đã thấy (see)", ipa: "/sɔː/", example: "I saw him at the park.", exampleVi: "Tôi thấy anh ấy ở công viên." },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "Yesterday I ___ to school. (go)", answer: "went", hint: "(go → went)", vi: "Hôm qua tôi đi học." },
          { sentence: "She ___ pho for lunch. (eat)", answer: "ate", hint: "(eat → ate)", vi: "Cô ấy đã ăn phở bữa trưa." },
          { sentence: "I ___ English last year. (study)", answer: "studied", hint: "(study → studied)", vi: "Năm ngoái tôi học tiếng Anh." },
          { sentence: "We ___ go to the party. (didn't)", answer: "didn't", alts: ["did not"], hint: "(phủ định)", vi: "Chúng tôi không đi dự tiệc." },
        ],
      },
      {
        kind: "sentence-builder",
        puzzles: [
          { target: "I went to school yesterday.", pieces: ["I", "went", "to", "school", "yesterday."], vi: "Hôm qua tôi đi học." },
          { target: "She didn't call me.", pieces: ["She", "didn't", "call", "me."], vi: "Cô ấy không gọi tôi." },
          { target: "We saw a movie last week.", pieces: ["We", "saw", "a", "movie", "last", "week."], vi: "Tuần trước chúng tôi xem phim." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "Past simple của 'go':", options: ["goed", "went", "gone", "going"], correctIndex: 1, explain: "'go' là động từ bất quy tắc: go → went → gone." },
          { prompt: "Câu phủ định đúng?", options: ["I didn't went.", "I didn't go.", "I not went.", "I no went."], correctIndex: 1, explain: "Sau 'didn't', dùng động từ NGUYÊN THỂ. KHÔNG thêm -ed." },
          { prompt: "'I ate pho yesterday' nghĩa là?", options: ["Tôi ăn phở mỗi ngày", "Hôm qua tôi ăn phở", "Tôi sẽ ăn phở", "Tôi đang ăn phở"], correctIndex: 1 },
        ],
      },
    ],
  },

  {
    id: "b-10",
    unit: 5,
    order: 2,
    title: "Tương lai với 'will' và 'going to'",
    subtitle: "Nói về kế hoạch và dự đoán",
    level: "A2",
    xpReward: 35,
    steps: [
      {
        kind: "grammar",
        title: "Will vs. Going to — Khác nhau thế nào?",
        explanation: "Cả hai đều nói về tương lai, nhưng dùng khác nhau:\n\n• 'WILL' — quyết định ngay lúc nói, hoặc dự đoán:\n  → I will help you. (vừa quyết định)\n  → It will rain tomorrow. (dự đoán)\n\n• 'GOING TO' — kế hoạch đã định trước:\n  → I'm going to visit my mom next week. (đã lên kế hoạch)\n  → She's going to study abroad. (đã quyết từ trước)",
        examples: [
          { en: "I will call you later.", vi: "Tôi sẽ gọi bạn sau." },
          { en: "It will be hot tomorrow.", vi: "Ngày mai trời sẽ nóng." },
          { en: "I'm going to learn German.", vi: "Tôi định học tiếng Đức." },
          { en: "We're going to move to Berlin.", vi: "Chúng tôi sẽ chuyển đến Berlin." },
        ],
      },
      {
        kind: "fill-blank",
        items: [
          { sentence: "I ___ call you tomorrow. (sẽ - quyết định ngay)", answer: "will", alts: ["'ll"], hint: "(quyết định ngay)", vi: "Tôi sẽ gọi bạn ngày mai." },
          { sentence: "She is ___ to study in Berlin. (đã định trước)", answer: "going", hint: "(kế hoạch)", vi: "Cô ấy sẽ đi học ở Berlin." },
          { sentence: "It ___ rain later. (dự đoán)", answer: "will", alts: ["'ll"], hint: "(dự đoán)", vi: "Lát sẽ mưa." },
        ],
      },
      {
        kind: "sentence-builder",
        puzzles: [
          { target: "I will call you tomorrow.", pieces: ["I", "will", "call", "you", "tomorrow."], vi: "Tôi sẽ gọi bạn ngày mai." },
          { target: "We are going to Berlin.", pieces: ["We", "are", "going", "to", "Berlin."], vi: "Chúng tôi sẽ đi Berlin." },
          { target: "It will be sunny tomorrow.", pieces: ["It", "will", "be", "sunny", "tomorrow."], vi: "Ngày mai trời sẽ nắng." },
        ],
      },
      {
        kind: "pronounce",
        items: [
          { text: "I will call you.", vi: "Tôi sẽ gọi bạn.", tip: "Người bản xứ hay nói 'I'll call you' — viết tắt /aɪl/." },
          { text: "I'm going to study.", vi: "Tôi sẽ học.", tip: "Trong giao tiếp nhanh: 'I'm gonna study' /aɪm ˈɡənə/." },
        ],
      },
      {
        kind: "quiz",
        questions: [
          { prompt: "Vừa quyết định gọi bạn, bạn nói:", options: ["I going to call you.", "I will call you.", "I'm calling you.", "I call you."], correctIndex: 1, explain: "Quyết định ngay lúc nói → 'will'." },
          { prompt: "Đã lên kế hoạch đi Đức từ lâu, bạn nói:", options: ["I will go to Germany.", "I'm going to go to Germany.", "I go to Germany.", "I went to Germany."], correctIndex: 1, explain: "Kế hoạch đã định trước → 'going to'." },
          { prompt: "'I'll' là viết tắt của?", options: ["I am", "I will", "I would", "I had"], correctIndex: 1 },
        ],
      },
    ],
  },
];

// Learning path: organized into Units for the roadmap UI
export const BEGINNER_PATH = [
  {
    unit: 1,
    title: "Khởi động",
    description: "Làm quen chữ cái, chào hỏi, số đếm",
    lessonIds: ["b-01", "b-02", "b-03"],
  },
  {
    unit: 2,
    title: "Câu đầu tiên",
    description: "Động từ TO BE và từ vựng nhà cửa",
    lessonIds: ["b-04", "b-05"],
  },
  {
    unit: 3,
    title: "Thì hiện tại",
    description: "Diễn tả thói quen mỗi ngày",
    lessonIds: ["b-06"],
  },
  {
    unit: 4,
    title: "Giao tiếp hàng ngày",
    description: "Hỏi-đáp thông tin cá nhân, thời gian",
    lessonIds: ["b-07", "b-08"],
  },
  {
    unit: 5,
    title: "Quá khứ & Tương lai",
    description: "Kể chuyện, lên kế hoạch",
    lessonIds: ["b-09", "b-10"],
  },
];
