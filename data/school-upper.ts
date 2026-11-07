import type { SchoolGrade } from "./school-types";

// THPT: lớp 10–12. Ngữ pháp nâng cao và từ vựng học thuật, hướng tới kỳ thi tốt nghiệp.
export const UPPER_SECONDARY: SchoolGrade[] = [
  {
    grade: 10,
    focus: "Gia đình, môi trường, bình đẳng, tình nguyện. Củng cố tương lai, bị động với động từ khuyết thiếu, to V / V-ing, mệnh đề quan hệ.",
    units: [
      {
        id: "u1", title: "Cuộc sống gia đình", titleEn: "Family life",
        words: [
          { en: "household chores", vi: "việc nhà", example: "We share the household chores." },
          { en: "breadwinner", vi: "người trụ cột kiếm tiền", example: "My mother is the main breadwinner." },
          { en: "homemaker", vi: "người nội trợ", example: "Being a homemaker is hard work." },
          { en: "do the laundry", vi: "giặt giũ", example: "I do the laundry on Sundays." },
          { en: "responsibility", vi: "trách nhiệm", example: "Children should have some responsibilities." },
          { en: "gratitude", vi: "lòng biết ơn", example: "Show gratitude to your parents." },
        ],
        grammar: {
          title: "Will và be going to",
          explain: "\"will\" dùng cho quyết định ngay lúc nói, lời hứa, lời đề nghị và dự đoán theo ý kiến. \"be going to\" dùng cho dự định đã có từ trước và dự đoán dựa trên dấu hiệu nhìn thấy ở hiện tại.",
          forms: ["S + will + V: quyết định tức thì, hứa hẹn, dự đoán chủ quan.", "S + am/is/are going to + V: kế hoạch có sẵn, dự đoán có căn cứ."],
          examples: [
            { en: "The phone's ringing. — I'll answer it.", vi: "Điện thoại reo. — Để con nghe." },
            { en: "We're going to clean the house this weekend.", vi: "Cuối tuần này cả nhà định dọn nhà." },
            { en: "Look at those clouds! It's going to rain.", vi: "Nhìn mây kìa! Trời sắp mưa rồi." },
          ],
        },
        quiz: [
          { prompt: "\"There's no milk left.\" — \"Oh, I ___ go and buy some.\"", options: ["will", "am going to", "go", "went"], correctIndex: 0, explain: "Quyết định ngay lúc nói → will." },
          { prompt: "I've already bought the paint. I ___ paint my room tomorrow.", options: ["will", "am going to", "paint", "painted"], correctIndex: 1, explain: "Đã chuẩn bị sẵn (mua sơn) → kế hoạch có trước → am going to." },
          { prompt: "Look at the sky! It ___ rain.", options: ["will", "is going to", "rains", "rained"], correctIndex: 1, explain: "Dự đoán dựa vào dấu hiệu nhìn thấy → is going to." },
          { prompt: "Người kiếm tiền chính trong gia đình là:", options: ["homemaker", "breadwinner", "responsibility", "chores"], correctIndex: 1, explain: "breadwinner = trụ cột kinh tế." },
        ],
      },
      {
        id: "u2", title: "Bảo vệ môi trường", titleEn: "Humans and the environment",
        words: [
          { en: "global warming", vi: "sự nóng lên toàn cầu", example: "Global warming causes sea levels to rise." },
          { en: "renewable energy", vi: "năng lượng tái tạo", example: "Solar power is renewable energy." },
          { en: "sustainable", vi: "bền vững", example: "We need a sustainable lifestyle." },
          { en: "endangered", vi: "có nguy cơ tuyệt chủng", example: "Tigers are endangered animals." },
          { en: "habitat", vi: "môi trường sống", example: "Forests are the habitat of many species." },
          { en: "emission", vi: "khí thải", example: "Cars produce harmful emissions." },
        ],
        grammar: {
          title: "Câu bị động với động từ khuyết thiếu",
          explain: "Khi câu có động từ khuyết thiếu (can, must, should, will, may), câu bị động có dạng modal + be + V3. Động từ \"be\" luôn ở nguyên mẫu sau modal.",
          forms: ["S + can/must/should/will/may + be + V3.", "S + can't/mustn't/shouldn't + be + V3."],
          examples: [
            { en: "Plastic waste should be recycled.", vi: "Rác thải nhựa nên được tái chế." },
            { en: "Endangered animals must be protected.", vi: "Động vật có nguy cơ tuyệt chủng phải được bảo vệ." },
            { en: "Energy can be saved by turning off lights.", vi: "Có thể tiết kiệm năng lượng bằng cách tắt đèn." },
          ],
        },
        quiz: [
          { prompt: "More trees should ___ in our city.", options: ["plant", "be planted", "planted", "be plant"], correctIndex: 1, explain: "Cây được trồng (bị động) sau should → be planted." },
          { prompt: "Harmful emissions must ___.", options: ["reduce", "be reduced", "reduced", "being reduced"], correctIndex: 1, explain: "Khí thải phải được giảm → must be reduced." },
          { prompt: "Solar energy ___ used to make electricity.", options: ["can", "can be", "can being", "is can"], correctIndex: 1, explain: "Bị động với can → can be + V3." },
          { prompt: "Môi trường sống của loài vật là:", options: ["habitat", "emission", "sustainable", "endangered"], correctIndex: 0, explain: "habitat = môi trường sống." },
        ],
      },
      {
        id: "u3", title: "Bình đẳng giới", titleEn: "Gender equality",
        words: [
          { en: "equality", vi: "sự bình đẳng", example: "Gender equality benefits everyone." },
          { en: "discrimination", vi: "sự phân biệt đối xử", example: "Discrimination at work is illegal." },
          { en: "opportunity", vi: "cơ hội", example: "Girls should have equal opportunities." },
          { en: "workforce", vi: "lực lượng lao động", example: "More women are joining the workforce." },
          { en: "salary", vi: "tiền lương", example: "Men and women should get equal salaries." },
          { en: "stereotype", vi: "định kiến", example: "We should challenge gender stereotypes." },
        ],
        grammar: {
          title: "Động từ theo sau bởi to V và V-ing (nâng cao)",
          explain: "Một số động từ thay đổi nghĩa tuỳ theo đi với to V hay V-ing. remember/forget + to V: nhớ/quên phải làm việc gì (chưa làm). remember/forget + V-ing: nhớ/quên đã làm việc gì. stop + to V: dừng lại để làm việc khác; stop + V-ing: thôi không làm nữa.",
          forms: ["remember / forget + to V (việc cần làm) / + V-ing (việc đã làm).", "stop + to V (dừng để làm việc khác) / + V-ing (thôi không làm).", "try + to V (cố gắng) / + V-ing (thử)."],
          examples: [
            { en: "Remember to lock the door.", vi: "Nhớ khoá cửa nhé." },
            { en: "I remember meeting her at the conference.", vi: "Tôi nhớ đã gặp cô ấy ở hội nghị." },
            { en: "He stopped smoking last year.", vi: "Anh ấy đã bỏ thuốc lá từ năm ngoái." },
          ],
        },
        quiz: [
          { prompt: "Don't forget ___ the application form before Friday.", options: ["to send", "sending", "send", "sent"], correctIndex: 0, explain: "Việc cần làm trong tương lai → forget + to V." },
          { prompt: "I'll never forget ___ my first speech about equality.", options: ["to give", "giving", "give", "gave"], correctIndex: 1, explain: "Việc đã làm trong quá khứ → forget + V-ing." },
          { prompt: "She was tired, so she stopped ___ a short rest.", options: ["to take", "taking", "take", "took"], correctIndex: 0, explain: "Dừng việc đang làm để nghỉ một chút → stop + to V (dừng lại để làm việc khác)." },
          { prompt: "Sự phân biệt đối xử tiếng Anh là:", options: ["equality", "discrimination", "opportunity", "workforce"], correctIndex: 1, explain: "discrimination = sự phân biệt đối xử." },
        ],
      },
      {
        id: "u4", title: "Tình nguyện vì cộng đồng", titleEn: "Volunteering",
        words: [
          { en: "non-profit", vi: "phi lợi nhuận", example: "She works for a non-profit organisation." },
          { en: "donation", vi: "sự quyên góp", example: "Thank you for your donation." },
          { en: "fundraise", vi: "gây quỹ", example: "We fundraised for flood victims." },
          { en: "disadvantaged", vi: "thiệt thòi, khó khăn", example: "We teach disadvantaged children." },
          { en: "contribute", vi: "đóng góp", example: "Everyone can contribute to society." },
          { en: "remote area", vi: "vùng sâu vùng xa", example: "They built a school in a remote area." },
        ],
        grammar: {
          title: "Mệnh đề quan hệ với who, which, that",
          explain: "Mệnh đề quan hệ bổ sung thông tin cho danh từ đứng trước. who thay cho người, which thay cho vật, that thay được cho cả người và vật (trong mệnh đề xác định).",
          forms: ["N (người) + who/that + V…", "N (vật) + which/that + V…", "N + who/which/that + S + V… (làm tân ngữ, có thể lược bỏ)."],
          examples: [
            { en: "Volunteers who work here are students.", vi: "Các tình nguyện viên làm việc ở đây là sinh viên." },
            { en: "This is the school which we built last summer.", vi: "Đây là ngôi trường chúng tôi xây hè năm ngoái." },
            { en: "The money that we raised went to the hospital.", vi: "Số tiền chúng tôi quyên được đã chuyển cho bệnh viện." },
          ],
        },
        quiz: [
          { prompt: "The girl ___ organised the event is my classmate.", options: ["who", "which", "where", "whose"], correctIndex: 0, explain: "Thay cho người (the girl), làm chủ ngữ → who." },
          { prompt: "The books ___ we donated were new.", options: ["who", "which", "whom", "whose"], correctIndex: 1, explain: "Thay cho vật (the books) → which." },
          { prompt: "Children ___ live in remote areas need more support.", options: ["which", "who", "whose", "what"], correctIndex: 1, explain: "Thay cho người (children) → who." },
          { prompt: "\"Gây quỹ\" tiếng Anh là:", options: ["donation", "fundraise", "contribute", "non-profit"], correctIndex: 1, explain: "fundraise = gây quỹ." },
        ],
      },
    ],
  },
  {
    grade: 11,
    focus: "Khoảng cách thế hệ, lối sống lành mạnh, đô thị tương lai, biến đổi khí hậu. Học hoàn thành tiếp diễn, danh động từ, tương lai tiếp diễn, câu điều kiện loại 2.",
    units: [
      {
        id: "u1", title: "Khoảng cách thế hệ", titleEn: "The generation gap",
        words: [
          { en: "generation gap", vi: "khoảng cách thế hệ", example: "The generation gap causes misunderstandings." },
          { en: "extended family", vi: "gia đình nhiều thế hệ", example: "I live in an extended family." },
          { en: "nuclear family", vi: "gia đình hạt nhân (bố mẹ và con)", example: "Nuclear families are more common in cities." },
          { en: "conflict", vi: "mâu thuẫn", example: "There are some conflicts between us." },
          { en: "privacy", vi: "sự riêng tư", example: "Teenagers need privacy." },
          { en: "open-minded", vi: "cởi mở", example: "My grandparents are quite open-minded." },
        ],
        grammar: {
          title: "Hiện tại hoàn thành và hiện tại hoàn thành tiếp diễn",
          explain: "Hiện tại hoàn thành (have + V3) nhấn mạnh kết quả, số lượng đã làm được. Hiện tại hoàn thành tiếp diễn (have been + V-ing) nhấn mạnh quá trình kéo dài liên tục đến hiện tại, thường đi với for/since và câu hỏi How long.",
          forms: ["S + have/has + V3: kết quả, số lần (I've read three books).", "S + have/has been + V-ing: quá trình kéo dài (I've been reading for two hours)."],
          examples: [
            { en: "My grandparents have lived here since 1970.", vi: "Ông bà tôi đã sống ở đây từ năm 1970." },
            { en: "I've been waiting for you for an hour.", vi: "Tôi đã đợi bạn suốt một tiếng." },
            { en: "She has written three letters this morning.", vi: "Sáng nay cô ấy đã viết được ba lá thư." },
          ],
        },
        quiz: [
          { prompt: "I'm tired because I ___ for the exam all day.", options: ["have studied", "have been studying", "studied", "study"], correctIndex: 1, explain: "Nhấn mạnh quá trình kéo dài cả ngày, gây ra mệt → have been studying." },
          { prompt: "She ___ five essays so far this term.", options: ["has written", "has been writing", "writes", "wrote"], correctIndex: 0, explain: "Nhấn mạnh số lượng đã hoàn thành → has written." },
          { prompt: "How long ___ you been learning English?", options: ["have", "has", "did", "are"], correctIndex: 0, explain: "How long have you been + V-ing?" },
          { prompt: "Gia đình gồm ông bà, bố mẹ và con cháu là:", options: ["nuclear family", "extended family", "generation gap", "privacy"], correctIndex: 1, explain: "extended family = gia đình nhiều thế hệ." },
        ],
      },
      {
        id: "u2", title: "Sống khoẻ, sống lâu", titleEn: "Healthy life and longevity",
        words: [
          { en: "longevity", vi: "sự sống lâu", example: "A healthy diet can increase longevity." },
          { en: "life expectancy", vi: "tuổi thọ trung bình", example: "Life expectancy in Vietnam has risen." },
          { en: "balanced diet", vi: "chế độ ăn cân bằng", example: "Eat a balanced diet." },
          { en: "work out", vi: "tập luyện", example: "I work out three times a week." },
          { en: "nutrition", vi: "dinh dưỡng", example: "Good nutrition is important for teenagers." },
          { en: "check-up", vi: "khám sức khoẻ định kỳ", example: "Have a check-up every year." },
        ],
        grammar: {
          title: "Danh động từ làm chủ ngữ và sau giới từ",
          explain: "Danh động từ (V-ing) có thể đứng đầu câu làm chủ ngữ, khi đó động từ chia số ít. Sau giới từ (in, on, at, of, about, before, after, without…) động từ luôn ở dạng V-ing.",
          forms: ["V-ing + V (số ít) + … (Swimming is good for you.)", "giới từ + V-ing (interested in learning, before going to bed)."],
          examples: [
            { en: "Eating fruit every day is good for your health.", vi: "Ăn trái cây mỗi ngày tốt cho sức khoẻ." },
            { en: "She is interested in learning about nutrition.", vi: "Cô ấy thích tìm hiểu về dinh dưỡng." },
            { en: "Stretch before working out.", vi: "Khởi động trước khi tập luyện." },
          ],
        },
        quiz: [
          { prompt: "___ regularly helps you stay fit.", options: ["Exercise", "Exercising", "To exercising", "Exercised"], correctIndex: 1, explain: "Chủ ngữ là một hành động → danh động từ: Exercising." },
          { prompt: "Avoid eating late at night. It's bad for ___.", options: ["sleep", "sleeping", "to sleep", "slept"], correctIndex: 1, explain: "Sau giới từ for → V-ing: sleeping." },
          { prompt: "He's good at ___ healthy meals.", options: ["cook", "cooking", "to cook", "cooks"], correctIndex: 1, explain: "Sau giới từ at → V-ing." },
          { prompt: "Doing exercise every day ___ you live longer.", options: ["help", "helps", "helping", "are helping"], correctIndex: 1, explain: "Danh động từ làm chủ ngữ → động từ số ít: helps." },
        ],
      },
      {
        id: "u3", title: "Thành phố của tương lai", titleEn: "Cities of the future",
        words: [
          { en: "urban", vi: "thuộc đô thị", example: "Urban areas are growing fast." },
          { en: "infrastructure", vi: "cơ sở hạ tầng", example: "The city needs better infrastructure." },
          { en: "smart city", vi: "thành phố thông minh", example: "In a smart city, traffic lights use AI." },
          { en: "overcrowded", vi: "quá đông đúc", example: "Many cities are overcrowded." },
          { en: "public transport", vi: "giao thông công cộng", example: "Use public transport to reduce traffic." },
          { en: "green space", vi: "không gian xanh", example: "Parks provide green space for residents." },
        ],
        grammar: {
          title: "Thì tương lai tiếp diễn",
          explain: "Tương lai tiếp diễn (will be + V-ing) diễn tả hành động sẽ đang diễn ra tại một thời điểm xác định trong tương lai.",
          forms: ["S + will be + V-ing + thời điểm tương lai (at this time tomorrow, in 2050…).", "S + won't be + V-ing."],
          examples: [
            { en: "In 2050, people will be living in smart cities.", vi: "Vào năm 2050, con người sẽ đang sống trong các thành phố thông minh." },
            { en: "At this time tomorrow, I will be taking my exam.", vi: "Giờ này ngày mai tôi đang làm bài thi." },
            { en: "We won't be using petrol cars in the future.", vi: "Trong tương lai chúng ta sẽ không còn dùng xe chạy xăng." },
          ],
        },
        quiz: [
          { prompt: "At 8 p.m. tonight, I ___ my favourite show.", options: ["will be watching", "watch", "watched", "have watched"], correctIndex: 0, explain: "Hành động đang diễn ra tại một thời điểm xác định trong tương lai → will be watching." },
          { prompt: "This time next year, I ___ at university.", options: ["will study", "will be studying", "study", "studied"], correctIndex: 1, explain: "Hành động đang diễn ra tại một thời điểm tương lai (this time next year) → will be studying." },
          { prompt: "In the future, robots ___ many jobs for us.", options: ["will be doing", "are doing", "did", "have done"], correctIndex: 0, explain: "Tương lai xa, hành động đang diễn ra → will be doing." },
          { prompt: "Cơ sở hạ tầng tiếng Anh là:", options: ["infrastructure", "urban", "overcrowded", "green space"], correctIndex: 0, explain: "infrastructure = cơ sở hạ tầng." },
        ],
      },
      {
        id: "u4", title: "Biến đổi khí hậu", titleEn: "Climate change",
        words: [
          { en: "fossil fuel", vi: "nhiên liệu hoá thạch", example: "Coal and oil are fossil fuels." },
          { en: "drought", vi: "hạn hán", example: "The drought destroyed the crops." },
          { en: "flood", vi: "lũ lụt", example: "The flood damaged many houses." },
          { en: "carbon dioxide", vi: "khí CO2", example: "Trees absorb carbon dioxide." },
          { en: "sea level", vi: "mực nước biển", example: "Sea levels are rising." },
          { en: "extreme weather", vi: "thời tiết cực đoan", example: "Extreme weather is more common now." },
        ],
        grammar: {
          title: "Câu điều kiện loại 2",
          explain: "Câu điều kiện loại 2 nói về điều không có thật hoặc khó xảy ra ở hiện tại. Mệnh đề If dùng quá khứ đơn (be dùng were cho mọi chủ ngữ), mệnh đề chính dùng would + V.",
          forms: ["If + S + V (quá khứ đơn), S + would/could + V.", "If I were you, I would + V (lời khuyên)."],
          examples: [
            { en: "If people used less energy, there would be less pollution.", vi: "Nếu mọi người dùng ít năng lượng hơn thì sẽ ít ô nhiễm hơn." },
            { en: "If I were the mayor, I would plant more trees.", vi: "Nếu tôi là thị trưởng, tôi sẽ trồng thêm cây." },
            { en: "We could stop climate change if every country worked together.", vi: "Chúng ta có thể ngăn biến đổi khí hậu nếu mọi quốc gia cùng hành động." },
          ],
        },
        quiz: [
          { prompt: "If I ___ a lot of money, I would invest in solar energy.", options: ["have", "had", "will have", "would have"], correctIndex: 1, explain: "Điều kiện không có thật ở hiện tại → If + quá khứ đơn: had." },
          { prompt: "If I were you, I ___ take the bus instead of driving.", options: ["will", "would", "am", "did"], correctIndex: 1, explain: "Lời khuyên If I were you → would." },
          { prompt: "If there ___ no fossil fuels, we would need other energy sources.", options: ["are", "were", "will be", "be"], correctIndex: 1, explain: "Loại 2 với be → were." },
          { prompt: "Hạn hán tiếng Anh là:", options: ["flood", "drought", "sea level", "fossil fuel"], correctIndex: 1, explain: "drought = hạn hán." },
        ],
      },
    ],
  },
  {
    grade: 12,
    focus: "Tiểu sử, đô thị hoá, sống xanh, nghề nghiệp. Ôn thi tốt nghiệp với quá khứ tiếp diễn, câu điều kiện loại 3, câu tường thuật dạng hỏi, mệnh đề quan hệ không xác định.",
    units: [
      {
        id: "u1", title: "Câu chuyện cuộc đời", titleEn: "Life stories",
        words: [
          { en: "biography", vi: "tiểu sử", example: "I'm reading a biography of Ho Chi Minh." },
          { en: "achievement", vi: "thành tựu", example: "Winning the prize was a great achievement." },
          { en: "admire", vi: "ngưỡng mộ", example: "I admire her courage." },
          { en: "devote", vi: "cống hiến", example: "He devoted his life to science." },
          { en: "talented", vi: "tài năng", example: "She is a talented musician." },
          { en: "legacy", vi: "di sản (để lại cho đời sau)", example: "His legacy lives on." },
        ],
        grammar: {
          title: "Quá khứ đơn và quá khứ tiếp diễn",
          explain: "Quá khứ tiếp diễn (was/were + V-ing) diễn tả hành động đang diễn ra trong quá khứ thì có hành động khác (quá khứ đơn) xen vào. \"when\" thường đi với quá khứ đơn, \"while\" thường đi với quá khứ tiếp diễn.",
          forms: ["S + was/were + V-ing + when + S + V (quá khứ đơn).", "While + S + was/were + V-ing, S + V (quá khứ đơn)."],
          examples: [
            { en: "She was studying in Paris when she met her husband.", vi: "Bà đang du học ở Paris thì gặp chồng." },
            { en: "While he was working in the lab, he made an important discovery.", vi: "Trong lúc làm việc ở phòng thí nghiệm, ông đã có một phát hiện quan trọng." },
            { en: "He wrote his first book in 1950.", vi: "Ông viết cuốn sách đầu tiên năm 1950." },
          ],
        },
        quiz: [
          { prompt: "What ___ you doing at 9 p.m. yesterday?", options: ["were", "did", "are", "was"], correctIndex: 0, explain: "Hỏi việc đang làm tại một thời điểm trong quá khứ → quá khứ tiếp diễn; chủ ngữ you → were." },
          { prompt: "While she ___ her novel, she became ill.", options: ["wrote", "was writing", "writes", "is writing"], correctIndex: 1, explain: "while + quá khứ tiếp diễn." },
          { prompt: "Marie Curie ___ the Nobel Prize twice.", options: ["was winning", "won", "wins", "is winning"], correctIndex: 1, explain: "Sự kiện đã hoàn thành trong quá khứ → won." },
          { prompt: "Cuốn sách kể về cuộc đời một người là:", options: ["biography", "legacy", "achievement", "novel"], correctIndex: 0, explain: "biography = tiểu sử." },
        ],
      },
      {
        id: "u2", title: "Đô thị hoá", titleEn: "Urbanisation",
        words: [
          { en: "urbanisation", vi: "sự đô thị hoá", example: "Urbanisation is happening fast in Asia." },
          { en: "migrate", vi: "di cư", example: "Many young people migrate to cities." },
          { en: "rural", vi: "thuộc nông thôn", example: "Rural areas need more investment." },
          { en: "overload", vi: "quá tải", example: "Hospitals in big cities are overloaded." },
          { en: "slum", vi: "khu ổ chuột", example: "Many migrants live in slums." },
          { en: "job opportunity", vi: "cơ hội việc làm", example: "Cities offer more job opportunities." },
        ],
        grammar: {
          title: "Câu điều kiện loại 3",
          explain: "Câu điều kiện loại 3 nói về điều không có thật trong quá khứ, thường để tiếc nuối hoặc trách móc. Mệnh đề If dùng quá khứ hoàn thành (had + V3), mệnh đề chính dùng would have + V3.",
          forms: ["If + S + had + V3, S + would/could have + V3."],
          examples: [
            { en: "If the city had planned better, there wouldn't have been so many traffic jams.", vi: "Nếu thành phố quy hoạch tốt hơn thì đã không có nhiều vụ tắc đường như vậy." },
            { en: "If he had stayed in his village, he would have become a farmer.", vi: "Nếu anh ấy ở lại quê thì đã trở thành nông dân." },
            { en: "We could have caught the train if we had left earlier.", vi: "Chúng tôi đã có thể kịp tàu nếu đi sớm hơn." },
          ],
        },
        quiz: [
          { prompt: "If they ___ more schools in rural areas, fewer people would have moved to the city.", options: ["built", "had built", "have built", "would build"], correctIndex: 1, explain: "Loại 3: If + had + V3 → had built." },
          { prompt: "If I had known about the job, I ___ for it.", options: ["would apply", "would have applied", "applied", "will apply"], correctIndex: 1, explain: "Mệnh đề chính loại 3: would have + V3." },
          { prompt: "Câu nào là điều kiện loại 3?", options: ["If it rains, I'll stay home.", "If I were rich, I'd travel.", "If I had studied, I would have passed.", "If you heat ice, it melts."], correctIndex: 2, explain: "had studied … would have passed → không có thật trong quá khứ → loại 3." },
          { prompt: "\"Di cư\" tiếng Anh là:", options: ["migrate", "overload", "rural", "slum"], correctIndex: 0, explain: "migrate = di cư." },
        ],
      },
      {
        id: "u3", title: "Sống xanh", titleEn: "Green living",
        words: [
          { en: "eco-friendly", vi: "thân thiện với môi trường", example: "Use eco-friendly products." },
          { en: "single-use", vi: "dùng một lần", example: "Avoid single-use plastic." },
          { en: "compost", vi: "phân ủ hữu cơ; ủ phân", example: "We compost our food waste." },
          { en: "energy-efficient", vi: "tiết kiệm năng lượng", example: "LED bulbs are energy-efficient." },
          { en: "reusable", vi: "tái sử dụng được", example: "Bring a reusable bag." },
          { en: "carbon footprint", vi: "lượng khí thải các-bon", example: "Flying increases your carbon footprint." },
        ],
        grammar: {
          title: "Câu tường thuật dạng câu hỏi",
          explain: "Khi tường thuật câu hỏi, câu trở về trật tự câu khẳng định (chủ ngữ trước động từ) và lùi thì. Câu hỏi Yes/No dùng if/whether; câu hỏi có từ để hỏi giữ nguyên từ để hỏi (what, where, how…). Không dùng dấu chấm hỏi.",
          forms: ["S + asked (+ O) + if/whether + S + V (lùi thì).", "S + asked (+ O) + Wh-word + S + V (lùi thì)."],
          examples: [
            { en: "\"Do you recycle?\" → She asked me if I recycled.", vi: "\"Bạn có tái chế không?\" → Cô ấy hỏi tôi có tái chế không." },
            { en: "\"Where do you buy reusable bags?\" → He asked where I bought reusable bags.", vi: "\"Bạn mua túi tái sử dụng ở đâu?\" → Anh ấy hỏi tôi mua túi tái sử dụng ở đâu." },
            { en: "\"Will you join us?\" → They asked whether I would join them.", vi: "\"Bạn sẽ tham gia chứ?\" → Họ hỏi tôi có tham gia không." },
          ],
        },
        quiz: [
          { prompt: "\"Do you use plastic bags?\" → She asked me ___ plastic bags.", options: ["do I use", "if I used", "if did I use", "that I used"], correctIndex: 1, explain: "Câu hỏi Yes/No → if + trật tự khẳng định + lùi thì: if I used." },
          { prompt: "\"What are you doing?\" → He asked me what ___.", options: ["was I doing", "I was doing", "am I doing", "I am doing"], correctIndex: 1, explain: "Trật tự khẳng định + lùi thì: what I was doing." },
          { prompt: "\"Can you help us?\" → They asked if I ___ help them.", options: ["can", "could", "will", "do"], correctIndex: 1, explain: "can → could." },
          { prompt: "\"Thân thiện với môi trường\" tiếng Anh là:", options: ["eco-friendly", "single-use", "compost", "reusable"], correctIndex: 0, explain: "eco-friendly = thân thiện với môi trường." },
        ],
      },
      {
        id: "u4", title: "Thế giới nghề nghiệp", titleEn: "The world of work",
        words: [
          { en: "career", vi: "sự nghiệp", example: "She has a successful career in law." },
          { en: "apprenticeship", vi: "học nghề", example: "He started an apprenticeship after school." },
          { en: "qualification", vi: "bằng cấp, trình độ", example: "You need good qualifications." },
          { en: "CV", vi: "sơ yếu lí lịch", example: "Send your CV to the company." },
          { en: "interview", vi: "buổi phỏng vấn", example: "I have a job interview tomorrow." },
          { en: "soft skills", vi: "kỹ năng mềm", example: "Teamwork is an important soft skill." },
        ],
        grammar: {
          title: "Mệnh đề quan hệ không xác định và whose, where",
          explain: "Mệnh đề quan hệ không xác định chỉ thêm thông tin phụ, được ngăn bởi dấu phẩy, và không dùng \"that\". whose thay cho sở hữu (của ai đó), where thay cho nơi chốn.",
          forms: ["N, who/which + …, … (có dấu phẩy, không dùng that).", "N + whose + danh từ + …", "N (nơi chốn) + where + S + V…"],
          examples: [
            { en: "My uncle, who is an engineer, works in Germany.", vi: "Chú tôi, một kỹ sư, làm việc ở Đức." },
            { en: "She is the student whose CV impressed the company.", vi: "Đó là bạn học sinh có bản CV gây ấn tượng với công ty." },
            { en: "This is the factory where I did my apprenticeship.", vi: "Đây là nhà máy nơi tôi học nghề." },
          ],
        },
        quiz: [
          { prompt: "Mr. Hung, ___ teaches us English, used to work abroad.", options: ["that", "who", "which", "whose"], correctIndex: 1, explain: "Mệnh đề không xác định (có dấu phẩy), thay cho người → who. Không dùng that." },
          { prompt: "The company ___ I applied to has offices in Hanoi.", options: ["who", "which", "whose", "where"], correctIndex: 1, explain: "Thay cho vật (the company), sau động từ applied to → which." },
          { prompt: "He's the candidate ___ experience is the best.", options: ["who", "whose", "which", "where"], correctIndex: 1, explain: "Sở hữu (kinh nghiệm của ứng viên) → whose." },
          { prompt: "This is the office ___ I had my interview.", options: ["which", "where", "who", "whose"], correctIndex: 1, explain: "Nơi chốn, sau đó là mệnh đề đầy đủ (I had my interview) → where." },
        ],
      },
    ],
  },
];
