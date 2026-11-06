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
  { sentence: "He ___ in Germany now.", answer: "works", options: ["work", "works", "working", "worked"], vi: "Bây giờ anh ấy làm việc ở Đức." },
  { sentence: "I ___ coffee every morning.", answer: "drink", options: ["drink", "drinks", "drinking", "drank"], vi: "Tôi uống cà phê mỗi sáng." },
  { sentence: "They ___ to school by bike every day.", answer: "go", options: ["go", "goes", "going", "went"], vi: "Ngày nào họ cũng đi học bằng xe đạp." },
  { sentence: "She ___ English very well.", answer: "speaks", options: ["speak", "speaks", "speaking", "to speak"], vi: "Cô ấy nói tiếng Anh rất giỏi." },
  { sentence: "We ___ football every Sunday.", answer: "play", options: ["play", "plays", "playing", "played"], vi: "Chủ nhật nào chúng tôi cũng đá bóng." },
  { sentence: "I usually ___ tired after work.", answer: "feel", options: ["feel", "feels", "feeling", "felt"], vi: "Tôi thường thấy mệt sau giờ làm." },
  { sentence: "He ___ a book right now.", answer: "is reading", options: ["read", "reads", "is reading", "reading"], vi: "Anh ấy đang đọc sách." },
  // a / an / some / any / much / many
  { sentence: "This is ___ apple.", answer: "an", options: ["a", "an", "some", "much"], vi: "Đây là một quả táo." },
  { sentence: "She is ___ doctor.", answer: "a", options: ["a", "an", "some", "many"], vi: "Cô ấy là bác sĩ." },
  { sentence: "Is there ___ milk in the fridge?", answer: "any", options: ["any", "a", "many", "an"], vi: "Trong tủ lạnh có sữa không?" },
  { sentence: "I'd like ___ water, please.", answer: "some", options: ["some", "any", "a", "many"], vi: "Cho tôi ít nước nhé." },
  { sentence: "How ___ money do you have?", answer: "much", options: ["much", "many", "lot", "few"], vi: "Bạn có bao nhiêu tiền?" },
  { sentence: "How ___ brothers do you have?", answer: "many", options: ["much", "many", "lot", "little"], vi: "Bạn có mấy anh em trai?" },
  { sentence: "There ___ three cats in the garden.", answer: "are", options: ["is", "are", "am", "be"], vi: "Có ba con mèo trong vườn." },
  { sentence: "There ___ a bank near my house.", answer: "is", options: ["is", "are", "am", "be"], vi: "Gần nhà tôi có một ngân hàng." },
  // do / does
  { sentence: "___ you like coffee?", answer: "Do", options: ["Do", "Does", "Are", "Is"], vi: "Bạn có thích cà phê không?" },
  { sentence: "___ your brother live in Hanoi?", answer: "Does", options: ["Do", "Does", "Is", "Are"], vi: "Anh trai bạn có sống ở Hà Nội không?" },
  { sentence: "He ___ like spicy food.", answer: "doesn't", options: ["don't", "doesn't", "isn't", "aren't"], vi: "Anh ấy không thích đồ cay." },
  // in / on / at
  { sentence: "I was born ___ 1998.", answer: "in", options: ["in", "on", "at", "to"], vi: "Tôi sinh năm 1998." },
  { sentence: "The meeting is ___ Monday.", answer: "on", options: ["in", "on", "at", "to"], vi: "Cuộc họp vào thứ Hai." },
  { sentence: "See you ___ 7 o'clock.", answer: "at", options: ["in", "on", "at", "to"], vi: "Hẹn gặp bạn lúc 7 giờ." },
  // past simple
  { sentence: "Yesterday I ___ to the cinema.", answer: "went", options: ["go", "goes", "went", "going"], vi: "Hôm qua tôi đi xem phim." },
  { sentence: "We ___ pizza last night.", answer: "ate", options: ["eat", "eats", "ate", "eating"], vi: "Tối qua chúng tôi ăn pizza." },
  { sentence: "She ___ me a message an hour ago.", answer: "sent", options: ["send", "sends", "sent", "sending"], vi: "Cô ấy nhắn tin cho tôi một tiếng trước." },
  { sentence: "Did you ___ my message?", answer: "see", options: ["see", "saw", "seen", "seeing"], vi: "Bạn đã thấy tin nhắn của tôi chưa?" },
  { sentence: "She ___ watching TV when I called.", answer: "was", options: ["was", "were", "is", "did"], vi: "Lúc tôi gọi, cô ấy đang xem TV." },
  // comparison
  { sentence: "My bag is ___ than yours.", answer: "bigger", options: ["big", "bigger", "biggest", "more big"], vi: "Túi của tôi to hơn túi của bạn." },
  { sentence: "A plane is ___ than a car.", answer: "faster", options: ["fast", "faster", "fastest", "more fast"], vi: "Máy bay nhanh hơn ô tô." },
  { sentence: "This is the ___ day of my life.", answer: "best", options: ["good", "better", "best", "well"], vi: "Đây là ngày tuyệt nhất đời tôi." },
  // future, modals, conditionals
  { sentence: "Look at those clouds! It's ___ rain.", answer: "going to", options: ["going to", "will", "goes to", "go to"], vi: "Nhìn mây kìa! Trời sắp mưa rồi." },
  { sentence: "The phone is ringing. I ___ answer it.", answer: "will", options: ["will", "am", "was", "have"], vi: "Điện thoại reo kìa. Để tôi nghe." },
  { sentence: "If it rains, I ___ stay at home.", answer: "will", options: ["will", "would", "am", "did"], vi: "Nếu trời mưa, tôi sẽ ở nhà." },
  { sentence: "I can ___ English.", answer: "speak", options: ["speak", "speaks", "speaking", "to speak"], vi: "Tôi nói được tiếng Anh." },
  { sentence: "You ___ wear a seatbelt in the car.", answer: "must", options: ["must", "does", "is", "has"], vi: "Bạn phải thắt dây an toàn khi đi ô tô." },
  // present perfect
  { sentence: "She has lived here ___ 2020.", answer: "since", options: ["since", "for", "ago", "during"], vi: "Cô ấy sống ở đây từ năm 2020." },
  { sentence: "I've worked here ___ five years.", answer: "for", options: ["since", "for", "ago", "during"], vi: "Tôi đã làm ở đây được năm năm." },
  // pronouns and questions
  { sentence: "This book is ___.", answer: "mine", options: ["my", "mine", "me", "I"], vi: "Quyển sách này là của tôi." },
  { sentence: "___ do you live?", answer: "Where", options: ["What", "Who", "Where", "Which"], vi: "Bạn sống ở đâu?" },
];