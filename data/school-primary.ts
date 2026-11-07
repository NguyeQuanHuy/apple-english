import type { SchoolGrade } from "./school-types";

// Tiểu học: lớp 3–5. Câu ngắn, chủ đề gần gũi, mẫu câu hỏi – đáp.
export const PRIMARY: SchoolGrade[] = [
  {
    grade: 3,
    focus: "Chào hỏi, đồ dùng học tập, màu sắc, gia đình. Làm quen với mẫu câu hỏi – đáp ngắn.",
    units: [
      {
        id: "u1", title: "Chào hỏi và làm quen", titleEn: "Hello, friends!",
        words: [
          { en: "hello", vi: "xin chào", example: "Hello, I'm Mai." },
          { en: "goodbye", vi: "tạm biệt", example: "Goodbye, see you tomorrow." },
          { en: "name", vi: "tên", example: "My name is Nam." },
          { en: "friend", vi: "bạn", example: "This is my friend Linh." },
          { en: "teacher", vi: "giáo viên", example: "Good morning, teacher!" },
          { en: "fine", vi: "khoẻ, ổn", example: "I'm fine, thank you." },
        ],
        grammar: {
          title: "Hỏi tên và hỏi thăm sức khoẻ",
          explain: "Khi gặp bạn mới, ta hỏi tên bằng \"What's your name?\" và trả lời \"My name's…\" hoặc \"I'm…\". Hỏi thăm sức khoẻ bằng \"How are you?\".",
          forms: ["What's your name? → My name's + tên. / I'm + tên.", "How are you? → I'm fine, thank you."],
          examples: [
            { en: "What's your name? — I'm Phong.", vi: "Bạn tên là gì? — Mình là Phong." },
            { en: "How are you? — I'm fine, thanks.", vi: "Bạn khoẻ không? — Mình khoẻ, cảm ơn." },
            { en: "Nice to meet you.", vi: "Rất vui được gặp bạn." },
          ],
        },
        quiz: [
          { prompt: "What's your ___? — My name's Lan.", options: ["name", "friend", "fine", "hello"], correctIndex: 0, explain: "Hỏi tên: What's your name?" },
          { prompt: "How are you? — I'm ___, thank you.", options: ["name", "fine", "goodbye", "Lan"], correctIndex: 1, explain: "Trả lời câu hỏi thăm: I'm fine, thank you." },
          { prompt: "Chọn câu chào khi ra về:", options: ["Hello!", "Goodbye!", "Nice to meet you.", "How are you?"], correctIndex: 1, explain: "Goodbye = tạm biệt, dùng khi chia tay." },
          { prompt: "\"Giáo viên\" tiếng Anh là:", options: ["friend", "teacher", "name", "pupil"], correctIndex: 1, explain: "teacher = giáo viên." },
        ],
      },
      {
        id: "u2", title: "Đồ dùng học tập", titleEn: "My school things",
        words: [
          { en: "pen", vi: "bút mực", example: "This is my pen." },
          { en: "pencil", vi: "bút chì", example: "Is this your pencil?" },
          { en: "ruler", vi: "thước kẻ", example: "My ruler is long." },
          { en: "eraser", vi: "cục tẩy", example: "That is an eraser." },
          { en: "book", vi: "quyển sách", example: "Open your book, please." },
          { en: "school bag", vi: "cặp sách", example: "My school bag is blue." },
        ],
        grammar: {
          title: "This is / That is và câu hỏi Is this…?",
          explain: "\"This\" chỉ vật ở gần, \"That\" chỉ vật ở xa. Trước danh từ số ít dùng \"a\"; nếu danh từ bắt đầu bằng nguyên âm (a, e, i, o, u) thì dùng \"an\".",
          forms: ["This is + a/an + danh từ.", "That is + a/an + danh từ.", "Is this/that + a/an + danh từ? → Yes, it is. / No, it isn't."],
          examples: [
            { en: "This is a pencil.", vi: "Đây là một cái bút chì." },
            { en: "That is an eraser.", vi: "Kia là một cục tẩy." },
            { en: "Is this your book? — Yes, it is.", vi: "Đây có phải sách của bạn không? — Đúng vậy." },
          ],
        },
        quiz: [
          { prompt: "That is ___ eraser.", options: ["a", "an", "the", "two"], correctIndex: 1, explain: "eraser bắt đầu bằng nguyên âm e → dùng an." },
          { prompt: "This is ___ ruler.", options: ["an", "a", "is", "this"], correctIndex: 1, explain: "ruler bắt đầu bằng phụ âm r → dùng a." },
          { prompt: "Is this your pen? — Yes, ___.", options: ["it is", "it isn't", "I am", "this is"], correctIndex: 0, explain: "Trả lời đồng ý: Yes, it is." },
          { prompt: "\"Cặp sách\" tiếng Anh là:", options: ["book", "school bag", "ruler", "pen"], correctIndex: 1, explain: "school bag = cặp sách." },
        ],
      },
      {
        id: "u3", title: "Màu sắc và con số", titleEn: "Colours and numbers",
        words: [
          { en: "red", vi: "màu đỏ", example: "My pen is red." },
          { en: "blue", vi: "màu xanh dương", example: "The sky is blue." },
          { en: "green", vi: "màu xanh lá", example: "The tree is green." },
          { en: "yellow", vi: "màu vàng", example: "I like yellow." },
          { en: "five", vi: "số năm", example: "I have five pencils." },
          { en: "ten", vi: "số mười", example: "There are ten books." },
        ],
        grammar: {
          title: "Hỏi màu sắc và số lượng",
          explain: "Hỏi màu dùng \"What colour is it?\". Hỏi số lượng dùng \"How many + danh từ số nhiều?\". Từ hai trở lên, danh từ thêm -s: one pen, two pens.",
          forms: ["What colour is it? → It's + màu.", "How many + danh từ số nhiều? → số lượng."],
          examples: [
            { en: "What colour is your bag? — It's green.", vi: "Cặp của bạn màu gì? — Màu xanh lá." },
            { en: "How many pens? — Three pens.", vi: "Có bao nhiêu cái bút? — Ba cái." },
            { en: "I have two rulers.", vi: "Mình có hai cái thước." },
          ],
        },
        quiz: [
          { prompt: "What ___ is it? — It's red.", options: ["colour", "name", "many", "number"], correctIndex: 0, explain: "Hỏi màu: What colour is it?" },
          { prompt: "How many ___ do you have?", options: ["pen", "pens", "a pen", "an pen"], correctIndex: 1, explain: "Sau How many dùng danh từ số nhiều: pens." },
          { prompt: "I have three ___.", options: ["book", "books", "a book", "booking"], correctIndex: 1, explain: "Từ hai trở lên thêm -s: three books." },
          { prompt: "\"Màu vàng\" tiếng Anh là:", options: ["green", "yellow", "blue", "red"], correctIndex: 1, explain: "yellow = màu vàng." },
        ],
      },
      {
        id: "u4", title: "Gia đình của em", titleEn: "My family",
        words: [
          { en: "father", vi: "bố", example: "This is my father." },
          { en: "mother", vi: "mẹ", example: "My mother is a teacher." },
          { en: "brother", vi: "anh/em trai", example: "My brother is eight." },
          { en: "sister", vi: "chị/em gái", example: "She's my sister." },
          { en: "grandfather", vi: "ông", example: "My grandfather is kind." },
          { en: "grandmother", vi: "bà", example: "I love my grandmother." },
        ],
        grammar: {
          title: "Who's this? He's / She's…",
          explain: "Hỏi người trong ảnh dùng \"Who's this?\". Trả lời bằng \"He's\" cho nam và \"She's\" cho nữ. \"my\" nghĩa là \"của em, của tôi\".",
          forms: ["Who's this? → He's my + người (nam). / She's my + người (nữ).", "How old is he/she? → He's/She's + tuổi."],
          examples: [
            { en: "Who's this? — He's my father.", vi: "Đây là ai? — Đó là bố em." },
            { en: "Who's that? — She's my sister.", vi: "Kia là ai? — Đó là chị em." },
            { en: "How old is your brother? — He's nine.", vi: "Em trai bạn mấy tuổi? — Chín tuổi." },
          ],
        },
        quiz: [
          { prompt: "Who's this? — ___ my mother.", options: ["He's", "She's", "It's", "I'm"], correctIndex: 1, explain: "mother là nữ → She's." },
          { prompt: "Who's that? — He's my ___.", options: ["sister", "mother", "grandfather", "grandmother"], correctIndex: 2, explain: "He's dùng cho nam → grandfather." },
          { prompt: "How old ___ your sister?", options: ["is", "are", "am", "be"], correctIndex: 0, explain: "your sister là số ít → is." },
          { prompt: "\"Bà\" tiếng Anh là:", options: ["grandfather", "grandmother", "mother", "sister"], correctIndex: 1, explain: "grandmother = bà." },
        ],
      },
    ],
  },
  {
    grade: 4,
    focus: "Thời gian, nghề nghiệp, khả năng, đồ ăn. Bắt đầu dùng can và would like.",
    units: [
      {
        id: "u1", title: "Ngày trong tuần và giờ", titleEn: "Days and time",
        words: [
          { en: "Monday", vi: "thứ Hai", example: "I have English on Monday." },
          { en: "Wednesday", vi: "thứ Tư", example: "Today is Wednesday." },
          { en: "Saturday", vi: "thứ Bảy", example: "I play football on Saturday." },
          { en: "Sunday", vi: "Chủ nhật", example: "We visit Grandma on Sunday." },
          { en: "o'clock", vi: "giờ đúng", example: "It's seven o'clock." },
          { en: "morning", vi: "buổi sáng", example: "I go to school in the morning." },
        ],
        grammar: {
          title: "Hỏi thứ và hỏi giờ",
          explain: "Hỏi hôm nay là thứ mấy: \"What day is it today?\". Hỏi giờ: \"What time is it?\". Trước thứ trong tuần dùng \"on\", trước buổi trong ngày dùng \"in\".",
          forms: ["What day is it today? → It's + thứ.", "What time is it? → It's + giờ + o'clock.", "on + thứ (on Monday), in + buổi (in the morning)."],
          examples: [
            { en: "What day is it today? — It's Tuesday.", vi: "Hôm nay thứ mấy? — Thứ Ba." },
            { en: "What time is it? — It's eight o'clock.", vi: "Mấy giờ rồi? — Tám giờ." },
            { en: "I have Maths on Friday.", vi: "Thứ Sáu mình có môn Toán." },
          ],
        },
        quiz: [
          { prompt: "I play football ___ Saturday.", options: ["in", "on", "at", "of"], correctIndex: 1, explain: "Trước thứ trong tuần dùng on." },
          { prompt: "What ___ is it? — It's nine o'clock.", options: ["day", "time", "colour", "name"], correctIndex: 1, explain: "Hỏi giờ: What time is it?" },
          { prompt: "I go to school ___ the morning.", options: ["on", "in", "at", "to"], correctIndex: 1, explain: "in the morning = vào buổi sáng." },
          { prompt: "Ngày sau thứ Sáu là:", options: ["Thursday", "Saturday", "Sunday", "Monday"], correctIndex: 1, explain: "Friday → Saturday (thứ Bảy)." },
        ],
      },
      {
        id: "u2", title: "Nghề nghiệp", titleEn: "Jobs",
        words: [
          { en: "doctor", vi: "bác sĩ", example: "My aunt is a doctor." },
          { en: "farmer", vi: "nông dân", example: "The farmer works in the field." },
          { en: "nurse", vi: "y tá", example: "She is a nurse." },
          { en: "driver", vi: "tài xế", example: "My uncle is a bus driver." },
          { en: "worker", vi: "công nhân", example: "He is a factory worker." },
          { en: "hospital", vi: "bệnh viện", example: "She works in a hospital." },
        ],
        grammar: {
          title: "What does he/she do?",
          explain: "Hỏi nghề của người khác dùng \"What does he/she do?\". Trả lời \"He's/She's a + nghề\". Hỏi nơi làm việc: \"Where does he/she work?\".",
          forms: ["What does he/she do? → He's/She's a + nghề.", "Where does he/she work? → He/She works in/at + nơi."],
          examples: [
            { en: "What does your father do? — He's a driver.", vi: "Bố bạn làm nghề gì? — Bố mình là tài xế." },
            { en: "Where does she work? — She works in a hospital.", vi: "Cô ấy làm ở đâu? — Ở bệnh viện." },
            { en: "I want to be a doctor.", vi: "Em muốn làm bác sĩ." },
          ],
        },
        quiz: [
          { prompt: "What ___ your mother do?", options: ["do", "does", "is", "are"], correctIndex: 1, explain: "Chủ ngữ số ít (your mother) → does." },
          { prompt: "She's ___ nurse.", options: ["a", "an", "the", "two"], correctIndex: 0, explain: "nurse bắt đầu bằng phụ âm → a." },
          { prompt: "He works ___ a farm.", options: ["on", "to", "of", "from"], correctIndex: 0, explain: "Cụm cố định: work on a farm (làm việc ở trang trại)." },
          { prompt: "Người chăm sóc bệnh nhân cùng bác sĩ là:", options: ["driver", "nurse", "farmer", "worker"], correctIndex: 1, explain: "nurse = y tá." },
        ],
      },
      {
        id: "u3", title: "Em có thể làm gì?", titleEn: "What can you do?",
        words: [
          { en: "swim", vi: "bơi", example: "I can swim." },
          { en: "sing", vi: "hát", example: "She can sing well." },
          { en: "dance", vi: "nhảy", example: "Can you dance?" },
          { en: "cook", vi: "nấu ăn", example: "My mum can cook." },
          { en: "ride a bike", vi: "đi xe đạp", example: "He can ride a bike." },
          { en: "play the guitar", vi: "chơi đàn ghi-ta", example: "I can't play the guitar." },
        ],
        grammar: {
          title: "Can / can't nói về khả năng",
          explain: "\"can\" nghĩa là có thể, \"can't\" (cannot) là không thể. Sau can/can't luôn là động từ nguyên mẫu, không thêm -s dù chủ ngữ là he/she.",
          forms: ["Chủ ngữ + can/can't + động từ.", "Can + chủ ngữ + động từ? → Yes, I can. / No, I can't."],
          examples: [
            { en: "I can swim, but I can't dance.", vi: "Em biết bơi nhưng không biết nhảy." },
            { en: "Can your brother cook? — No, he can't.", vi: "Anh bạn có biết nấu ăn không? — Không." },
            { en: "She can play the piano.", vi: "Cô ấy chơi được đàn piano." },
          ],
        },
        quiz: [
          { prompt: "She can ___ very well.", options: ["sings", "sing", "singing", "to sing"], correctIndex: 1, explain: "Sau can là động từ nguyên mẫu: sing." },
          { prompt: "Can you swim? — Yes, I ___.", options: ["can", "can't", "do", "am"], correctIndex: 0, explain: "Trả lời đồng ý: Yes, I can." },
          { prompt: "He ___ ride a bike. He is too young.", options: ["can", "can't", "does", "is"], correctIndex: 1, explain: "Còn quá nhỏ → không thể: can't." },
          { prompt: "\"Nấu ăn\" tiếng Anh là:", options: ["cook", "swim", "dance", "sing"], correctIndex: 0, explain: "cook = nấu ăn." },
        ],
      },
      {
        id: "u4", title: "Đồ ăn và thức uống", titleEn: "Food and drinks",
        words: [
          { en: "rice", vi: "cơm, gạo", example: "I eat rice every day." },
          { en: "bread", vi: "bánh mì", example: "I'd like some bread." },
          { en: "milk", vi: "sữa", example: "Milk is good for you." },
          { en: "juice", vi: "nước ép", example: "Orange juice, please." },
          { en: "chicken", vi: "thịt gà", example: "My favourite food is chicken." },
          { en: "noodles", vi: "mì, bún, phở", example: "We have noodles for breakfast." },
        ],
        grammar: {
          title: "What would you like? I'd like…",
          explain: "\"would like\" là cách nói lịch sự của \"want\". \"I'd like\" là viết tắt của \"I would like\". Hỏi món yêu thích: \"What's your favourite food?\".",
          forms: ["What would you like to eat/drink? → I'd like + món.", "What's your favourite food? → It's + món."],
          examples: [
            { en: "What would you like to drink? — I'd like some milk.", vi: "Bạn muốn uống gì? — Mình muốn uống sữa." },
            { en: "What's your favourite food? — It's fish.", vi: "Món bạn thích nhất là gì? — Là cá." },
            { en: "Would you like some bread? — Yes, please.", vi: "Bạn ăn bánh mì không? — Có, cảm ơn." },
          ],
        },
        quiz: [
          { prompt: "What would you ___ to eat?", options: ["like", "likes", "liking", "to like"], correctIndex: 0, explain: "Cấu trúc: would like to + động từ." },
          { prompt: "I'd like ___ milk, please.", options: ["a", "some", "an", "many"], correctIndex: 1, explain: "milk không đếm được → some milk." },
          { prompt: "Would you like some milk? — Yes, ___.", options: ["please", "I like", "it is", "I can"], correctIndex: 0, explain: "Đồng ý lời mời: Yes, please." },
          { prompt: "\"Bánh mì\" tiếng Anh là:", options: ["rice", "bread", "noodles", "milk"], correctIndex: 1, explain: "bread = bánh mì." },
        ],
      },
    ],
  },
  {
    grade: 5,
    focus: "Thói quen hằng ngày, kỳ nghỉ đã qua, kế hoạch sắp tới, sức khoẻ. Làm quen thì hiện tại đơn, quá khứ đơn và tương lai.",
    units: [
      {
        id: "u1", title: "Một ngày của em", titleEn: "My daily routine",
        words: [
          { en: "get up", vi: "thức dậy", example: "I get up at six." },
          { en: "brush my teeth", vi: "đánh răng", example: "I brush my teeth after breakfast." },
          { en: "have breakfast", vi: "ăn sáng", example: "We have breakfast at home." },
          { en: "do homework", vi: "làm bài tập về nhà", example: "I do my homework in the evening." },
          { en: "go to bed", vi: "đi ngủ", example: "I go to bed at nine." },
          { en: "usually", vi: "thường thường", example: "I usually walk to school." },
        ],
        grammar: {
          title: "Thì hiện tại đơn và trạng từ tần suất",
          explain: "Hiện tại đơn dùng cho thói quen, việc lặp lại hằng ngày. Với he/she/it, động từ thêm -s hoặc -es. Trạng từ always, usually, often, sometimes, never đứng trước động từ thường.",
          forms: ["I/You/We/They + động từ.", "He/She/It + động từ + s/es (goes, watches, does).", "always > usually > often > sometimes > never."],
          examples: [
            { en: "I always get up at six.", vi: "Em luôn dậy lúc sáu giờ." },
            { en: "She often goes to school by bike.", vi: "Bạn ấy thường đi học bằng xe đạp." },
            { en: "He never watches TV in the morning.", vi: "Bạn ấy không bao giờ xem TV buổi sáng." },
          ],
        },
        quiz: [
          { prompt: "She ___ up at half past six.", options: ["get", "gets", "getting", "got"], correctIndex: 1, explain: "Chủ ngữ she → thêm -s: gets." },
          { prompt: "My brother ___ his homework after dinner.", options: ["do", "does", "doing", "did"], correctIndex: 1, explain: "Chủ ngữ số ít → does." },
          { prompt: "Chọn câu đúng:", options: ["I go always to school.", "I always go to school.", "Always I go school.", "I go to school always go."], correctIndex: 1, explain: "Trạng từ tần suất đứng trước động từ thường: I always go." },
          { prompt: "\"Không bao giờ\" tiếng Anh là:", options: ["always", "often", "never", "usually"], correctIndex: 2, explain: "never = không bao giờ." },
        ],
      },
      {
        id: "u2", title: "Kỳ nghỉ vừa qua", titleEn: "My last holiday",
        words: [
          { en: "went", vi: "đã đi (quá khứ của go)", example: "I went to Da Nang." },
          { en: "visited", vi: "đã thăm", example: "We visited our grandparents." },
          { en: "saw", vi: "đã nhìn thấy (quá khứ của see)", example: "I saw a big ship." },
          { en: "swam", vi: "đã bơi (quá khứ của swim)", example: "We swam in the sea." },
          { en: "took photos", vi: "đã chụp ảnh", example: "Dad took a lot of photos." },
          { en: "bought", vi: "đã mua (quá khứ của buy)", example: "I bought a hat." },
        ],
        grammar: {
          title: "Thì quá khứ đơn",
          explain: "Quá khứ đơn kể việc đã xảy ra và đã kết thúc. Động từ có quy tắc thêm -ed (visit → visited). Động từ bất quy tắc phải học thuộc (go → went, see → saw). Câu hỏi dùng \"Did\" và động từ trở về nguyên mẫu.",
          forms: ["Chủ ngữ + động từ quá khứ (visited, went).", "Did + chủ ngữ + động từ nguyên mẫu? → Yes, I did. / No, I didn't.", "Where did you go? → I went to…"],
          examples: [
            { en: "Where did you go last summer? — I went to Ha Long Bay.", vi: "Hè năm ngoái bạn đi đâu? — Mình đi vịnh Hạ Long." },
            { en: "Did you swim? — Yes, I did.", vi: "Bạn có đi bơi không? — Có." },
            { en: "We visited a museum yesterday.", vi: "Hôm qua chúng mình đi thăm bảo tàng." },
          ],
        },
        quiz: [
          { prompt: "Last summer, I ___ to Hue.", options: ["go", "goes", "went", "going"], correctIndex: 2, explain: "last summer → quá khứ; go → went." },
          { prompt: "Did you ___ the zoo?", options: ["visit", "visited", "visits", "visiting"], correctIndex: 0, explain: "Sau Did, động từ trở về nguyên mẫu: visit." },
          { prompt: "We ___ a lot of animals there.", options: ["see", "saw", "seed", "sees"], correctIndex: 1, explain: "see là động từ bất quy tắc → saw." },
          { prompt: "Did you buy a present? — No, I ___.", options: ["don't", "didn't", "doesn't", "not"], correctIndex: 1, explain: "Câu hỏi với Did → trả lời No, I didn't." },
        ],
      },
      {
        id: "u3", title: "Kế hoạch mùa hè", titleEn: "Summer plans",
        words: [
          { en: "beach", vi: "bãi biển", example: "We're going to the beach." },
          { en: "countryside", vi: "vùng quê", example: "I'll visit the countryside." },
          { en: "museum", vi: "bảo tàng", example: "They're going to visit a museum." },
          { en: "camp", vi: "cắm trại", example: "We'll camp in the forest." },
          { en: "relatives", vi: "họ hàng", example: "I'm going to visit my relatives." },
          { en: "trip", vi: "chuyến đi", example: "It will be a great trip." },
        ],
        grammar: {
          title: "Be going to và will",
          explain: "\"be going to\" dùng cho kế hoạch đã định trước. \"will\" dùng khi đoán trước hoặc quyết định ngay lúc nói. Sau cả hai là động từ nguyên mẫu.",
          forms: ["Chủ ngữ + am/is/are + going to + động từ.", "Chủ ngữ + will + động từ.", "What are you going to do? → I'm going to…"],
          examples: [
            { en: "I'm going to visit my grandparents this summer.", vi: "Hè này mình sẽ về thăm ông bà." },
            { en: "It will be sunny tomorrow.", vi: "Ngày mai trời sẽ nắng." },
            { en: "What are you going to do? — I'm going to learn to swim.", vi: "Bạn định làm gì? — Mình sẽ học bơi." },
          ],
        },
        quiz: [
          { prompt: "We're going ___ visit the museum.", options: ["to", "for", "at", "in"], correctIndex: 0, explain: "Cấu trúc: be going to + động từ." },
          { prompt: "She ___ going to camp with her friends.", options: ["am", "is", "are", "be"], correctIndex: 1, explain: "Chủ ngữ she → is going to." },
          { prompt: "I think it ___ rain tomorrow.", options: ["will", "is", "does", "did"], correctIndex: 0, explain: "Phỏng đoán tương lai → will." },
          { prompt: "\"Họ hàng\" tiếng Anh là:", options: ["relatives", "friends", "beach", "trip"], correctIndex: 0, explain: "relatives = họ hàng." },
        ],
      },
      {
        id: "u4", title: "Sức khoẻ của em", titleEn: "Staying healthy",
        words: [
          { en: "headache", vi: "đau đầu", example: "I have a headache." },
          { en: "toothache", vi: "đau răng", example: "She has a toothache." },
          { en: "fever", vi: "sốt", example: "He has a fever." },
          { en: "cold", vi: "cảm lạnh", example: "I have a cold." },
          { en: "rest", vi: "nghỉ ngơi", example: "You should rest." },
          { en: "dentist", vi: "nha sĩ", example: "You should go to the dentist." },
        ],
        grammar: {
          title: "What's the matter? và lời khuyên với should",
          explain: "Hỏi ai đó bị làm sao: \"What's the matter?\". Trả lời \"I have a + bệnh\". Khuyên ai đó nên hay không nên làm gì dùng should / shouldn't + động từ nguyên mẫu.",
          forms: ["What's the matter (with you)? → I have a + bệnh.", "You should + động từ. / You shouldn't + động từ."],
          examples: [
            { en: "What's the matter? — I have a stomach ache.", vi: "Bạn bị sao vậy? — Mình bị đau bụng." },
            { en: "You should go to the doctor.", vi: "Bạn nên đi khám bác sĩ." },
            { en: "You shouldn't eat too many sweets.", vi: "Bạn không nên ăn quá nhiều kẹo." },
          ],
        },
        quiz: [
          { prompt: "What's the ___? — I have a fever.", options: ["matter", "name", "time", "colour"], correctIndex: 0, explain: "Hỏi bị làm sao: What's the matter?" },
          { prompt: "She has a toothache. She should go to the ___.", options: ["teacher", "dentist", "farmer", "driver"], correctIndex: 1, explain: "Đau răng → đi nha sĩ (dentist)." },
          { prompt: "You ___ eat a lot of sweets.", options: ["should", "shouldn't", "can", "are"], correctIndex: 1, explain: "Ăn nhiều kẹo không tốt → shouldn't." },
          { prompt: "You should ___ more water.", options: ["drink", "drinks", "drinking", "to drink"], correctIndex: 0, explain: "Sau should là động từ nguyên mẫu: drink." },
        ],
      },
    ],
  },
];
