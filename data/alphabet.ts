export type AlphabetLetter = {
    letter: string;
    lower: string;
    ipa: string;
    viSound: string;
    words: { en: string; vi: string; emoji: string }[];
    tip?: string;
};

export const ALPHABET: AlphabetLetter[] = [
    { letter: "A", lower: "a", ipa: "/eɪ/", viSound: "ây", words: [{ en: "apple", vi: "quả táo", emoji: "🍎" }, { en: "arm", vi: "cánh tay", emoji: "💪" }], tip: "Không đọc là 'a' như tiếng Việt!" },
    { letter: "B", lower: "b", ipa: "/biː/", viSound: "bi", words: [{ en: "book", vi: "quyển sách", emoji: "📚" }, { en: "ball", vi: "quả bóng", emoji: "⚽" }] },
    { letter: "C", lower: "c", ipa: "/siː/", viSound: "xi", words: [{ en: "cat", vi: "con mèo", emoji: "🐱" }, { en: "car", vi: "ô tô", emoji: "🚗" }], tip: "Đọc là 'xi', KHÔNG phải 'cờ'!" },
    { letter: "D", lower: "d", ipa: "/diː/", viSound: "đi", words: [{ en: "dog", vi: "con chó", emoji: "🐶" }, { en: "door", vi: "cửa", emoji: "🚪" }] },
    { letter: "E", lower: "e", ipa: "/iː/", viSound: "i", words: [{ en: "egg", vi: "quả trứng", emoji: "🥚" }, { en: "ear", vi: "cái tai", emoji: "👂" }] },
    { letter: "F", lower: "f", ipa: "/ɛf/", viSound: "eph-phơ", words: [{ en: "fish", vi: "con cá", emoji: "🐟" }, { en: "flower", vi: "bông hoa", emoji: "🌸" }] },
    { letter: "G", lower: "g", ipa: "/dʒiː/", viSound: "gi-i", words: [{ en: "green", vi: "màu xanh lá", emoji: "🟢" }, { en: "guitar", vi: "đàn guitar", emoji: "🎸" }] },
    { letter: "H", lower: "h", ipa: "/eɪtʃ/", viSound: "ếch", words: [{ en: "hat", vi: "cái mũ", emoji: "🎩" }, { en: "house", vi: "ngôi nhà", emoji: "🏠" }], tip: "Tên chữ H đọc là 'ếch', không phải 'hát'" },
    { letter: "I", lower: "i", ipa: "/aɪ/", viSound: "ai", words: [{ en: "ice", vi: "nước đá", emoji: "🧊" }, { en: "island", vi: "hòn đảo", emoji: "🌴" }] },
    { letter: "J", lower: "j", ipa: "/dʒeɪ/", viSound: "gi-ây", words: [{ en: "juice", vi: "nước trái cây", emoji: "🧃" }, { en: "jeans", vi: "quần jean", emoji: "👖" }] },
    { letter: "K", lower: "k", ipa: "/keɪ/", viSound: "kây", words: [{ en: "key", vi: "chìa khóa", emoji: "🔑" }, { en: "king", vi: "nhà vua", emoji: "👑" }] },
    { letter: "L", lower: "l", ipa: "/ɛl/", viSound: "ờl", words: [{ en: "lamp", vi: "đèn", emoji: "💡" }, { en: "lion", vi: "con sư tử", emoji: "🦁" }] },
    { letter: "M", lower: "m", ipa: "/ɛm/", viSound: "ờ-mơ", words: [{ en: "moon", vi: "mặt trăng", emoji: "🌙" }, { en: "milk", vi: "sữa", emoji: "🥛" }] },
    { letter: "N", lower: "n", ipa: "/ɛn/", viSound: "ờn", words: [{ en: "night", vi: "ban đêm", emoji: "🌙" }, { en: "nose", vi: "cái mũi", emoji: "👃" }] },
    { letter: "O", lower: "o", ipa: "/oʊ/", viSound: "ôu", words: [{ en: "orange", vi: "quả cam", emoji: "🍊" }, { en: "ocean", vi: "đại dương", emoji: "🌊" }] },
    { letter: "P", lower: "p", ipa: "/piː/", viSound: "pi", words: [{ en: "pizza", vi: "bánh pizza", emoji: "🍕" }, { en: "pen", vi: "cái bút", emoji: "🖊️" }] },
    { letter: "Q", lower: "q", ipa: "/kjuː/", viSound: "kiu", words: [{ en: "queen", vi: "nữ hoàng", emoji: "👑" }, { en: "question", vi: "câu hỏi", emoji: "❓" }] },
    { letter: "R", lower: "r", ipa: "/ɑːr/", viSound: "âr", words: [{ en: "rainbow", vi: "cầu vồng", emoji: "🌈" }, { en: "rice", vi: "cơm gạo", emoji: "🍚" }] },
    { letter: "S", lower: "s", ipa: "/ɛs/", viSound: "ờs", words: [{ en: "sun", vi: "mặt trời", emoji: "☀️" }, { en: "school", vi: "trường học", emoji: "🏫" }] },
    { letter: "T", lower: "t", ipa: "/tiː/", viSound: "ti", words: [{ en: "tree", vi: "cái cây", emoji: "🌳" }, { en: "tiger", vi: "con hổ", emoji: "🐯" }] },
    { letter: "U", lower: "u", ipa: "/juː/", viSound: "iu", words: [{ en: "umbrella", vi: "cái ô", emoji: "☂️" }, { en: "uniform", vi: "đồng phục", emoji: "👕" }] },
    { letter: "V", lower: "v", ipa: "/viː/", viSound: "vi", words: [{ en: "violin", vi: "đàn violin", emoji: "🎻" }, { en: "van", vi: "xe tải nhỏ", emoji: "🚐" }] },
    { letter: "W", lower: "w", ipa: "/ˈdʌbəl.juː/", viSound: "đắp-bồ-liu", words: [{ en: "water", vi: "nước", emoji: "💧" }, { en: "wind", vi: "gió", emoji: "🌬️" }], tip: "Chữ duy nhất có tên 3 âm tiết!" },
    { letter: "X", lower: "x", ipa: "/ɛks/", viSound: "ờ-xơ", words: [{ en: "xylophone", vi: "đàn mộc cầm", emoji: "🥁" }, { en: "fox", vi: "con cáo", emoji: "🦊" }] },
    { letter: "Y", lower: "y", ipa: "/waɪ/", viSound: "uai", words: [{ en: "yellow", vi: "màu vàng", emoji: "🟡" }, { en: "yoga", vi: "yoga", emoji: "🧘" }] },
    { letter: "Z", lower: "z", ipa: "/ziː/", viSound: "zi", words: [{ en: "zebra", vi: "con ngựa vằn", emoji: "🦓" }, { en: "zero", vi: "số không", emoji: "0️⃣" }] },
];