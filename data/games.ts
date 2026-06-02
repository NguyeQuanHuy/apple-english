export const GAME_WORDS = [
  { en: "apple", vi: "quả táo" },
  { en: "book", vi: "quyển sách" },
  { en: "cat", vi: "con mèo" },
  { en: "dog", vi: "con chó" },
  { en: "house", vi: "ngôi nhà" },
  { en: "water", vi: "nước" },
  { en: "happy", vi: "vui" },
  { en: "tired", vi: "mệt" },
  { en: "friend", vi: "bạn bè" },
  { en: "school", vi: "trường học" },
  { en: "morning", vi: "buổi sáng" },
  { en: "evening", vi: "buổi tối" },
  { en: "tomorrow", vi: "ngày mai" },
  { en: "yesterday", vi: "hôm qua" },
  { en: "expensive", vi: "đắt" },
  { en: "cheap", vi: "rẻ" },
  { en: "beautiful", vi: "đẹp" },
  { en: "delicious", vi: "ngon" },
];

export const SENTENCE_PUZZLES = [
  {
    target: "I am a student.",
    pieces: ["I", "am", "a", "student."],
    vi: "Tôi là sinh viên.",
  },
  {
    target: "She is my friend.",
    pieces: ["She", "is", "my", "friend."],
    vi: "Cô ấy là bạn tôi.",
  },
  {
    target: "We play football on Sunday.",
    pieces: ["We", "play", "football", "on", "Sunday."],
    vi: "Chúng tôi đá bóng vào Chủ nhật.",
  },
  {
    target: "He works in Germany.",
    pieces: ["He", "works", "in", "Germany."],
    vi: "Anh ấy làm việc ở Đức.",
  },
  {
    target: "I don't like coffee.",
    pieces: ["I", "don't", "like", "coffee."],
    vi: "Tôi không thích cà phê.",
  },
];

export const FAST_QUIZ = [
  { prompt: "'cat' nghĩa là?", options: ["chó", "mèo", "chim", "cá"], correctIndex: 1 },
  { prompt: "'big' nghĩa là?", options: ["nhỏ", "lớn", "đẹp", "xấu"], correctIndex: 1 },
  { prompt: "'fast' nghĩa là?", options: ["chậm", "nhanh", "cao", "thấp"], correctIndex: 1 },
  { prompt: "'happy' nghĩa là?", options: ["buồn", "vui", "tức", "lo"], correctIndex: 1 },
  { prompt: "'morning' nghĩa là?", options: ["tối", "trưa", "sáng", "chiều"], correctIndex: 2 },
  { prompt: "'book' nghĩa là?", options: ["bút", "sách", "vở", "thước"], correctIndex: 1 },
  { prompt: "'I ___ a teacher.'", options: ["am", "is", "are", "be"], correctIndex: 0 },
  { prompt: "'She ___ tall.'", options: ["am", "is", "are", "be"], correctIndex: 1 },
  { prompt: "Số 12 tiếng Anh?", options: ["twelve", "twenty", "twelfth", "ten"], correctIndex: 0 },
  { prompt: "'goodbye' nghĩa là?", options: ["xin chào", "tạm biệt", "cảm ơn", "xin lỗi"], correctIndex: 1 },
];

export const FILL_BLANK = [
  { sentence: "I ___ a student.", answer: "am", options: ["am", "is", "are", "be"], vi: "Tôi là sinh viên." },
  { sentence: "She ___ my friend.", answer: "is", options: ["am", "is", "are", "be"], vi: "Cô ấy là bạn tôi." },
  { sentence: "We ___ happy today.", answer: "are", options: ["am", "is", "are", "be"], vi: "Chúng tôi vui hôm nay." },
  { sentence: "He ___ in Germany.", answer: "works", options: ["work", "works", "working", "worked"], vi: "Anh ấy làm việc ở Đức." },
  { sentence: "I ___ coffee every morning.", answer: "drink", options: ["drink", "drinks", "drinking", "drank"], vi: "Tôi uống cà phê mỗi sáng." },
  { sentence: "They ___ to school by bike.", answer: "go", options: ["go", "goes", "going", "went"], vi: "Họ đi học bằng xe đạp." },
  { sentence: "She ___ English very well.", answer: "speaks", options: ["speak", "speaks", "speaking", "spoke"], vi: "Cô ấy nói tiếng Anh rất giỏi." },
  { sentence: "We ___ football on Sunday.", answer: "play", options: ["play", "plays", "playing", "played"], vi: "Chúng tôi đá bóng vào Chủ nhật." },
  { sentence: "I ___ tired after work.", answer: "feel", options: ["feel", "feels", "feeling", "felt"], vi: "Tôi cảm thấy mệt sau giờ làm." },
  { sentence: "He ___ a book right now.", answer: "is reading", options: ["read", "reads", "is reading", "reading"], vi: "Anh ấy đang đọc sách." },
];