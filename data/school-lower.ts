import type { SchoolGrade } from "./school-types";

// THCS: lớp 6–9. Hệ thống thì, so sánh, câu điều kiện, câu bị động, câu tường thuật.
export const LOWER_SECONDARY: SchoolGrade[] = [
  {
    grade: 6,
    focus: "Trường mới, ngôi nhà, bạn bè, thiên nhiên. Phân biệt hiện tại đơn – tiếp diễn, there is/are, so sánh.",
    units: [
      {
        id: "u1", title: "Ngôi trường mới", titleEn: "My new school",
        words: [
          { en: "uniform", vi: "đồng phục", example: "We wear a uniform on Monday." },
          { en: "subject", vi: "môn học", example: "My favourite subject is Science." },
          { en: "timetable", vi: "thời khoá biểu", example: "Let's check the timetable." },
          { en: "library", vi: "thư viện", example: "I read books in the library." },
          { en: "compass", vi: "com-pa", example: "We use a compass in Maths." },
          { en: "classmate", vi: "bạn cùng lớp", example: "My classmates are friendly." },
        ],
        grammar: {
          title: "Hiện tại đơn và hiện tại tiếp diễn",
          explain: "Hiện tại đơn nói về thói quen, sự thật. Hiện tại tiếp diễn (am/is/are + V-ing) nói về việc đang diễn ra lúc nói. Dấu hiệu: every day, usually → hiện tại đơn; now, at the moment, Look! → hiện tại tiếp diễn.",
          forms: ["Hiện tại đơn: S + V(s/es).", "Hiện tại tiếp diễn: S + am/is/are + V-ing."],
          examples: [
            { en: "We have English on Tuesdays.", vi: "Chúng em học tiếng Anh vào thứ Ba." },
            { en: "Look! They are playing football in the yard.", vi: "Nhìn kìa! Các bạn đang đá bóng ngoài sân." },
            { en: "She is reading in the library now.", vi: "Bây giờ bạn ấy đang đọc sách trong thư viện." },
          ],
        },
        quiz: [
          { prompt: "Listen! The teacher ___ to us.", options: ["talks", "is talking", "talk", "talked"], correctIndex: 1, explain: "Listen! → việc đang xảy ra → hiện tại tiếp diễn." },
          { prompt: "We ___ Maths every day.", options: ["have", "are having", "has", "having"], correctIndex: 0, explain: "every day → thói quen → hiện tại đơn, chủ ngữ we → have." },
          { prompt: "Look! My brother ___ his new uniform.", options: ["wear", "is wearing", "wears", "wearing"], correctIndex: 1, explain: "Look! → việc đang diễn ra ngay lúc nói → is wearing." },
          { prompt: "\"Thời khoá biểu\" tiếng Anh là:", options: ["subject", "timetable", "library", "uniform"], correctIndex: 1, explain: "timetable = thời khoá biểu." },
        ],
      },
      {
        id: "u2", title: "Ngôi nhà của em", titleEn: "My house",
        words: [
          { en: "living room", vi: "phòng khách", example: "The TV is in the living room." },
          { en: "kitchen", vi: "nhà bếp", example: "Mum is cooking in the kitchen." },
          { en: "bedroom", vi: "phòng ngủ", example: "My bedroom is small." },
          { en: "sofa", vi: "ghế sofa", example: "The cat is on the sofa." },
          { en: "wardrobe", vi: "tủ quần áo", example: "My clothes are in the wardrobe." },
          { en: "fridge", vi: "tủ lạnh", example: "There is some milk in the fridge." },
        ],
        grammar: {
          title: "There is / There are và giới từ chỉ vị trí",
          explain: "There is + danh từ số ít, There are + danh từ số nhiều: có cái gì ở đâu. Giới từ vị trí: in (trong), on (trên), under (dưới), next to (bên cạnh), behind (phía sau), in front of (phía trước), between (ở giữa).",
          forms: ["There is + a/an + danh từ số ít + nơi chốn.", "There are + danh từ số nhiều + nơi chốn.", "Is there…? / Are there…?"],
          examples: [
            { en: "There is a lamp next to the bed.", vi: "Có một cái đèn bên cạnh giường." },
            { en: "There are two pictures on the wall.", vi: "Có hai bức tranh trên tường." },
            { en: "The cat is under the table.", vi: "Con mèo ở dưới gầm bàn." },
          ],
        },
        quiz: [
          { prompt: "There ___ three bedrooms in my house.", options: ["is", "are", "am", "be"], correctIndex: 1, explain: "three bedrooms là số nhiều → There are." },
          { prompt: "There ___ a sofa in the living room.", options: ["is", "are", "have", "has"], correctIndex: 0, explain: "a sofa là số ít → There is." },
          { prompt: "The lamp is ___ the bed and the wardrobe.", options: ["between", "under", "in", "behind"], correctIndex: 0, explain: "between A and B = ở giữa A và B." },
          { prompt: "\"Tủ lạnh\" tiếng Anh là:", options: ["fridge", "wardrobe", "sofa", "kitchen"], correctIndex: 0, explain: "fridge = tủ lạnh." },
        ],
      },
      {
        id: "u3", title: "Bạn bè của em", titleEn: "My friends",
        words: [
          { en: "kind", vi: "tốt bụng", example: "She is kind to everyone." },
          { en: "clever", vi: "thông minh", example: "He is very clever at Maths." },
          { en: "funny", vi: "vui tính", example: "My best friend is funny." },
          { en: "shy", vi: "nhút nhát", example: "Tom is a bit shy." },
          { en: "confident", vi: "tự tin", example: "She feels confident when she speaks." },
          { en: "curly", vi: "xoăn (tóc)", example: "Lan has curly hair." },
        ],
        grammar: {
          title: "Miêu tả người với be và have",
          explain: "Dùng \"be\" + tính từ để tả tính cách và vóc dáng: She is kind, He is tall. Dùng \"have/has\" + danh từ để tả bộ phận cơ thể: She has long hair. Thứ tự tính từ: dài ngắn, rồi màu sắc: long black hair.",
          forms: ["S + am/is/are + tính từ (kind, tall).", "S + have/has + (tính từ) + danh từ (long black hair, big eyes)."],
          examples: [
            { en: "My friend is tall and funny.", vi: "Bạn mình cao và vui tính." },
            { en: "She has short black hair.", vi: "Bạn ấy có mái tóc đen, ngắn." },
            { en: "He has big brown eyes.", vi: "Bạn ấy có đôi mắt nâu to." },
          ],
        },
        quiz: [
          { prompt: "Mai ___ long curly hair.", options: ["is", "has", "have", "are"], correctIndex: 1, explain: "Tả bộ phận cơ thể → have/has; chủ ngữ Mai → has." },
          { prompt: "He ___ very kind and clever.", options: ["has", "is", "have", "does"], correctIndex: 1, explain: "Tả tính cách bằng be + tính từ → is." },
          { prompt: "Chọn cách sắp xếp đúng:", options: ["black long hair", "long black hair", "hair long black", "black hair long"], correctIndex: 1, explain: "Tính từ dài ngắn đứng trước tính từ màu sắc: long black hair." },
          { prompt: "Người không dám nói trước đám đông thường là:", options: ["confident", "shy", "funny", "clever"], correctIndex: 1, explain: "shy = nhút nhát." },
        ],
      },
      {
        id: "u4", title: "Kỳ quan thiên nhiên", titleEn: "Natural wonders",
        words: [
          { en: "mountain", vi: "núi", example: "Fansipan is a high mountain." },
          { en: "river", vi: "sông", example: "The Mekong is a long river." },
          { en: "desert", vi: "sa mạc", example: "The Sahara is a hot desert." },
          { en: "island", vi: "hòn đảo", example: "Phu Quoc is a beautiful island." },
          { en: "waterfall", vi: "thác nước", example: "Ban Gioc is a famous waterfall." },
          { en: "cave", vi: "hang động", example: "Son Doong is the biggest cave in the world." },
        ],
        grammar: {
          title: "So sánh hơn và so sánh nhất (tính từ ngắn)",
          explain: "Tính từ một âm tiết: so sánh hơn thêm -er + than, so sánh nhất là the + -est. Tận cùng là phụ âm sau một nguyên âm thì gấp đôi phụ âm (big → bigger). Bất quy tắc: good → better → the best, bad → worse → the worst.",
          forms: ["S + be + adj-er + than + N.", "S + be + the + adj-est + (N).", "good → better → the best; bad → worse → the worst."],
          examples: [
            { en: "The Mekong is longer than the Red River.", vi: "Sông Mê Kông dài hơn sông Hồng." },
            { en: "Son Doong is the biggest cave in the world.", vi: "Sơn Đoòng là hang động lớn nhất thế giới." },
            { en: "This beach is better than that one.", vi: "Bãi biển này đẹp hơn bãi kia." },
          ],
        },
        quiz: [
          { prompt: "Fansipan is ___ than Ba Vi Mountain.", options: ["high", "higher", "highest", "the highest"], correctIndex: 1, explain: "So sánh hai thứ, có than → higher." },
          { prompt: "Mount Everest is ___ mountain in the world.", options: ["higher", "the highest", "high", "more high"], correctIndex: 1, explain: "So sánh nhất trong cả thế giới → the highest." },
          { prompt: "This island is ___ than that one.", options: ["big", "biger", "bigger", "biggest"], correctIndex: 2, explain: "big → gấp đôi g → bigger." },
          { prompt: "So sánh nhất của good là:", options: ["the goodest", "the better", "the best", "the most good"], correctIndex: 2, explain: "Bất quy tắc: good → better → the best." },
        ],
      },
    ],
  },
  {
    grade: 7,
    focus: "Sở thích, sống khoẻ, hoạt động cộng đồng, phim ảnh. Học hiện tại hoàn thành, danh từ đếm được – không đếm được, although/however.",
    units: [
      {
        id: "u1", title: "Sở thích", titleEn: "Hobbies",
        words: [
          { en: "collect", vi: "sưu tầm", example: "I collect stamps." },
          { en: "gardening", vi: "làm vườn", example: "My grandpa enjoys gardening." },
          { en: "painting", vi: "vẽ tranh", example: "Painting helps me relax." },
          { en: "jogging", vi: "chạy bộ", example: "She goes jogging every morning." },
          { en: "origami", vi: "gấp giấy", example: "Origami needs patience." },
          { en: "skating", vi: "trượt patin", example: "Skating is fun but difficult." },
        ],
        grammar: {
          title: "like / love / enjoy / hate + V-ing",
          explain: "Sau các động từ chỉ sở thích như like, love, enjoy, hate, dislike, ta dùng động từ thêm -ing. Riêng \"enjoy\" luôn đi với V-ing, không dùng \"to V\".",
          forms: ["S + like/love/enjoy/hate + V-ing.", "Do you like + V-ing? → Yes, I do. / No, I don't."],
          examples: [
            { en: "I enjoy collecting coins.", vi: "Mình thích sưu tầm tiền xu." },
            { en: "My sister hates getting up early.", vi: "Chị mình ghét dậy sớm." },
            { en: "Do you like doing origami?", vi: "Bạn có thích gấp giấy không?" },
          ],
        },
        quiz: [
          { prompt: "My dad enjoys ___ in the garden.", options: ["work", "working", "to work", "works"], correctIndex: 1, explain: "enjoy + V-ing → working." },
          { prompt: "She hates ___ the dishes.", options: ["wash", "washing", "washes", "washed"], correctIndex: 1, explain: "hate + V-ing → washing." },
          { prompt: "Do you like painting? — Yes, I ___.", options: ["like", "do", "am", "does"], correctIndex: 1, explain: "Câu hỏi với Do → trả lời Yes, I do." },
          { prompt: "\"Sưu tầm\" tiếng Anh là:", options: ["collect", "paint", "garden", "jog"], correctIndex: 0, explain: "collect = sưu tầm." },
        ],
      },
      {
        id: "u2", title: "Sống khoẻ mạnh", titleEn: "Healthy living",
        words: [
          { en: "junk food", vi: "đồ ăn vặt không tốt cho sức khoẻ", example: "Eat less junk food." },
          { en: "vegetables", vi: "rau củ", example: "Vegetables are good for you." },
          { en: "exercise", vi: "tập thể dục", example: "Do exercise every day." },
          { en: "sunburn", vi: "cháy nắng", example: "Wear a hat to avoid sunburn." },
          { en: "calorie", vi: "ca-lo", example: "Sweets have a lot of calories." },
          { en: "stay up late", vi: "thức khuya", example: "Don't stay up late." },
        ],
        grammar: {
          title: "Danh từ đếm được, không đếm được và more / less / fewer",
          explain: "Danh từ đếm được có số nhiều (apples, eggs). Danh từ không đếm được không có -s (water, rice, sugar). Muốn nói nhiều hơn dùng \"more\" cho cả hai loại; ít hơn dùng \"fewer\" cho đếm được và \"less\" cho không đếm được.",
          forms: ["more + danh từ (more fruit, more apples).", "fewer + danh từ đếm được số nhiều (fewer sweets).", "less + danh từ không đếm được (less sugar)."],
          examples: [
            { en: "You should eat more vegetables.", vi: "Bạn nên ăn nhiều rau hơn." },
            { en: "Try to eat fewer sweets.", vi: "Cố gắng ăn ít kẹo hơn." },
            { en: "Drink less soda and more water.", vi: "Uống ít nước ngọt và nhiều nước lọc hơn." },
          ],
        },
        quiz: [
          { prompt: "You should eat ___ sweets.", options: ["less", "fewer", "much", "little"], correctIndex: 1, explain: "sweets đếm được, số nhiều → fewer." },
          { prompt: "Put ___ sugar in your tea.", options: ["fewer", "less", "many", "a few"], correctIndex: 1, explain: "sugar không đếm được → less." },
          { prompt: "Danh từ nào KHÔNG đếm được?", options: ["apple", "egg", "water", "banana"], correctIndex: 2, explain: "water không đếm được, không thêm -s." },
          { prompt: "Wear a hat to avoid ___.", options: ["sunburn", "junk food", "calorie", "exercise"], correctIndex: 0, explain: "Đội mũ để tránh cháy nắng: sunburn." },
        ],
      },
      {
        id: "u3", title: "Hoạt động cộng đồng", titleEn: "Community service",
        words: [
          { en: "volunteer", vi: "tình nguyện viên; tình nguyện", example: "I volunteer at a local library." },
          { en: "donate", vi: "quyên góp", example: "We donated books to poor children." },
          { en: "clean up", vi: "dọn dẹp", example: "Let's clean up the beach." },
          { en: "plant trees", vi: "trồng cây", example: "Our class planted trees last spring." },
          { en: "charity", vi: "tổ chức từ thiện", example: "She works for a charity." },
          { en: "the elderly", vi: "người cao tuổi", example: "We visited the elderly in a care home." },
        ],
        grammar: {
          title: "Thì hiện tại hoàn thành",
          explain: "Hiện tại hoàn thành (have/has + V3) nói về việc đã xảy ra nhưng không nói rõ thời điểm, hoặc còn liên quan đến hiện tại. Hay đi với: ever, never, already, yet, since, for. Nếu nói rõ thời điểm trong quá khứ (yesterday, last year) thì dùng quá khứ đơn.",
          forms: ["S + have/has + V3 (done, given, planted).", "Have you ever + V3? → Yes, I have. / No, I haven't.", "since + mốc thời gian, for + khoảng thời gian."],
          examples: [
            { en: "We have planted 200 trees.", vi: "Chúng em đã trồng được 200 cây." },
            { en: "Have you ever volunteered? — Yes, I have.", vi: "Bạn đã từng làm tình nguyện chưa? — Rồi." },
            { en: "She has worked for this charity since 2022.", vi: "Chị ấy làm cho tổ chức từ thiện này từ năm 2022." },
          ],
        },
        quiz: [
          { prompt: "We ___ 300 books so far.", options: ["donated", "have donated", "donate", "are donating"], correctIndex: 1, explain: "so far (tính đến nay) → hiện tại hoàn thành." },
          { prompt: "Have you ever ___ to a care home?", options: ["go", "went", "been", "going"], correctIndex: 2, explain: "Have you ever been to… = bạn đã từng đến… chưa." },
          { prompt: "Our club cleaned up the park ___.", options: ["since 2020", "last Sunday", "for two years", "already"], correctIndex: 1, explain: "Động từ ở quá khứ đơn (cleaned) → đi với thời điểm cụ thể: last Sunday." },
          { prompt: "She has volunteered here ___ three years.", options: ["since", "for", "ago", "in"], correctIndex: 1, explain: "for + khoảng thời gian: for three years." },
        ],
      },
      {
        id: "u4", title: "Phim ảnh", titleEn: "Films",
        words: [
          { en: "comedy", vi: "phim hài", example: "I love watching comedies." },
          { en: "horror film", vi: "phim kinh dị", example: "Horror films scare me." },
          { en: "documentary", vi: "phim tài liệu", example: "We watched a documentary about whales." },
          { en: "actor", vi: "diễn viên", example: "He is a famous actor." },
          { en: "director", vi: "đạo diễn", example: "Who is the director of this film?" },
          { en: "plot", vi: "cốt truyện", example: "The plot was boring." },
        ],
        grammar: {
          title: "Although / though và however",
          explain: "Although (though) nối hai vế trái ngược trong cùng một câu, đứng trước một mệnh đề. However cũng chỉ sự trái ngược nhưng thường mở đầu câu thứ hai và có dấu phẩy phía sau.",
          forms: ["Although + mệnh đề, mệnh đề.", "Mệnh đề. However, mệnh đề."],
          examples: [
            { en: "Although the film was long, we enjoyed it.", vi: "Mặc dù bộ phim dài nhưng chúng mình vẫn thích." },
            { en: "The actors were great. However, the plot was boring.", vi: "Các diễn viên rất giỏi. Tuy nhiên, cốt truyện thì chán." },
            { en: "I watched it though I was tired.", vi: "Mình vẫn xem dù đã mệt." },
          ],
        },
        quiz: [
          { prompt: "___ it was a horror film, my sister wasn't scared.", options: ["However", "Although", "Because", "So"], correctIndex: 1, explain: "Trái ngược, nối hai mệnh đề trong một câu → Although." },
          { prompt: "The film was popular. ___, I didn't like it.", options: ["Although", "However", "Because", "And"], correctIndex: 1, explain: "Đầu câu thứ hai, có dấu phẩy → However." },
          { prompt: "Người chỉ đạo việc làm phim là:", options: ["actor", "director", "plot", "comedy"], correctIndex: 1, explain: "director = đạo diễn." },
          { prompt: "A film about real animals in the ocean is a ___.", options: ["comedy", "horror film", "documentary", "cartoon"], correctIndex: 2, explain: "Phim về sự thật, thế giới thật → documentary." },
        ],
      },
    ],
  },
  {
    grade: 8,
    focus: "Giải trí, nông thôn, môi trường, phong tục. Học so sánh trạng từ, câu điều kiện loại 1, should / have to.",
    units: [
      {
        id: "u1", title: "Hoạt động giải trí", titleEn: "Leisure time",
        words: [
          { en: "hang out", vi: "đi chơi", example: "I hang out with friends at weekends." },
          { en: "surf the net", vi: "lướt mạng", example: "He surfs the net for hours." },
          { en: "DIY", vi: "tự làm đồ thủ công (do it yourself)", example: "My dad loves DIY." },
          { en: "addicted", vi: "nghiện", example: "Don't get addicted to games." },
          { en: "leisure", vi: "thời gian rảnh", example: "What do you do in your leisure time?" },
          { en: "socialise", vi: "giao lưu", example: "Sports help us socialise." },
        ],
        grammar: {
          title: "Động từ + V-ing hay to V",
          explain: "Một số động từ đi với V-ing: enjoy, mind, avoid, finish, practise. Một số đi với to V: want, decide, hope, plan, need. Một số đi với cả hai mà nghĩa gần như không đổi: like, love, hate, prefer, start, begin.",
          forms: ["enjoy / mind / avoid / finish + V-ing.", "want / decide / hope / plan + to V.", "like / love / prefer / start + V-ing hoặc to V."],
          examples: [
            { en: "Would you mind turning down the music?", vi: "Bạn có phiền vặn nhỏ nhạc không?" },
            { en: "We decided to go camping.", vi: "Chúng mình quyết định đi cắm trại." },
            { en: "She prefers reading to watching TV.", vi: "Bạn ấy thích đọc sách hơn xem TV." },
          ],
        },
        quiz: [
          { prompt: "We plan ___ a picnic this weekend.", options: ["have", "having", "to have", "had"], correctIndex: 2, explain: "plan + to V → to have." },
          { prompt: "He finished ___ his model plane.", options: ["make", "making", "to make", "made"], correctIndex: 1, explain: "finish + V-ing → making." },
          { prompt: "You should avoid ___ too much time online.", options: ["spend", "to spend", "spending", "spent"], correctIndex: 2, explain: "avoid + V-ing → spending." },
          { prompt: "\"Nghiện\" (game, mạng) tiếng Anh là:", options: ["leisure", "addicted", "socialise", "hang out"], correctIndex: 1, explain: "addicted (to) = nghiện." },
        ],
      },
      {
        id: "u2", title: "Cuộc sống ở nông thôn", titleEn: "Life in the countryside",
        words: [
          { en: "paddy field", vi: "cánh đồng lúa", example: "The paddy fields are green." },
          { en: "harvest", vi: "mùa gặt; thu hoạch", example: "Farmers harvest rice in autumn." },
          { en: "cattle", vi: "gia súc (bò, trâu)", example: "Children help herd the cattle." },
          { en: "peaceful", vi: "yên bình", example: "Life here is peaceful." },
          { en: "vast", vi: "rộng lớn", example: "There is a vast field behind my house." },
          { en: "convenient", vi: "tiện lợi", example: "City life is more convenient." },
        ],
        grammar: {
          title: "So sánh hơn với trạng từ",
          explain: "Trạng từ một âm tiết (fast, hard, late, early) thêm -er. Trạng từ đuôi -ly dùng more + trạng từ (more slowly, more carefully). Bất quy tắc: well → better, badly → worse.",
          forms: ["S + V + adv-er + than… (faster, harder).", "S + V + more + adv-ly + than… (more peacefully).", "well → better; badly → worse."],
          examples: [
            { en: "People in the countryside live more peacefully.", vi: "Người ở nông thôn sống yên bình hơn." },
            { en: "My brother runs faster than me.", vi: "Anh mình chạy nhanh hơn mình." },
            { en: "She cooks better than her sister.", vi: "Bạn ấy nấu ăn ngon hơn chị." },
          ],
        },
        quiz: [
          { prompt: "Farmers work ___ than office workers.", options: ["hard", "harder", "more hardly", "hardest"], correctIndex: 1, explain: "hard là trạng từ một âm tiết → harder." },
          { prompt: "In the city, people drive ___ than in villages.", options: ["more carefully", "carefuller", "careful", "most carefully"], correctIndex: 0, explain: "carefully đuôi -ly → more carefully." },
          { prompt: "He sings ___ than I do.", options: ["good", "well", "better", "best"], correctIndex: 2, explain: "well → better." },
          { prompt: "Cánh đồng lúa tiếng Anh là:", options: ["paddy field", "cattle", "harvest", "vast"], correctIndex: 0, explain: "paddy field = cánh đồng lúa." },
        ],
      },
      {
        id: "u3", title: "Bảo vệ môi trường", titleEn: "Protecting the environment",
        words: [
          { en: "pollution", vi: "sự ô nhiễm", example: "Air pollution is a big problem." },
          { en: "polluted", vi: "bị ô nhiễm", example: "The river is polluted." },
          { en: "deforestation", vi: "nạn phá rừng", example: "Deforestation destroys animals' homes." },
          { en: "wildlife", vi: "động vật hoang dã", example: "We must protect wildlife." },
          { en: "carbon footprint", vi: "lượng khí thải các-bon (của một người)", example: "Cycling reduces your carbon footprint." },
          { en: "reduce", vi: "giảm", example: "Reduce, reuse, recycle." },
        ],
        grammar: {
          title: "Câu điều kiện loại 1",
          explain: "Câu điều kiện loại 1 nói về điều có thể xảy ra ở hiện tại hoặc tương lai và kết quả của nó. Mệnh đề If dùng hiện tại đơn, mệnh đề chính dùng will + động từ nguyên mẫu. Không dùng will trong mệnh đề If.",
          forms: ["If + S + V (hiện tại đơn), S + will/won't + V.", "S + will + V + if + S + V (hiện tại đơn)."],
          examples: [
            { en: "If we cut down more trees, many animals will lose their homes.", vi: "Nếu chúng ta chặt thêm cây, nhiều động vật sẽ mất nhà." },
            { en: "If you cycle to school, you will reduce pollution.", vi: "Nếu bạn đạp xe đi học, bạn sẽ giảm ô nhiễm." },
            { en: "The river won't be clean if factories dump waste into it.", vi: "Dòng sông sẽ không sạch nếu nhà máy xả thải xuống." },
          ],
        },
        quiz: [
          { prompt: "If we ___ plastic bags, the sea will be cleaner.", options: ["reduce", "will reduce", "reduced", "reducing"], correctIndex: 0, explain: "Mệnh đề If loại 1 dùng hiện tại đơn: reduce." },
          { prompt: "If people keep polluting the air, more people ___ ill.", options: ["get", "will get", "got", "getting"], correctIndex: 1, explain: "Mệnh đề chính loại 1: will + V." },
          { prompt: "The water is ___. Don't drink it.", options: ["pollution", "polluted", "pollute", "polluting"], correctIndex: 1, explain: "Sau be cần tính từ: polluted (bị ô nhiễm)." },
          { prompt: "Nạn phá rừng tiếng Anh là:", options: ["wildlife", "deforestation", "pollution", "carbon footprint"], correctIndex: 1, explain: "deforestation = nạn phá rừng." },
        ],
      },
      {
        id: "u4", title: "Phong tục và truyền thống", titleEn: "Customs and traditions",
        words: [
          { en: "custom", vi: "phong tục", example: "It's a custom to give lucky money at Tet." },
          { en: "tradition", vi: "truyền thống", example: "Making banh chung is a family tradition." },
          { en: "ancestor", vi: "tổ tiên", example: "We worship our ancestors." },
          { en: "lucky money", vi: "tiền lì xì", example: "Children receive lucky money." },
          { en: "festival", vi: "lễ hội", example: "The Mid-Autumn Festival is fun." },
          { en: "table manners", vi: "phép lịch sự khi ăn", example: "Good table manners are important." },
        ],
        grammar: {
          title: "Should và have to",
          explain: "\"should\" dùng để khuyên, nên làm. \"have to\" nghĩa là phải làm vì quy định hay hoàn cảnh. \"don't have to\" là không cần phải làm, khác hẳn \"shouldn't\" là không nên làm.",
          forms: ["S + should / shouldn't + V.", "S + have/has to + V.", "S + don't/doesn't have to + V (không cần)."],
          examples: [
            { en: "You should wear áo dài at the ceremony.", vi: "Bạn nên mặc áo dài trong buổi lễ." },
            { en: "Students have to wear uniforms at my school.", vi: "Ở trường mình, học sinh phải mặc đồng phục." },
            { en: "You don't have to bring a gift.", vi: "Bạn không cần phải mang quà." },
          ],
        },
        quiz: [
          { prompt: "In Japan, you ___ take off your shoes before going into a house.", options: ["have to", "don't have to", "shouldn't", "can't"], correctIndex: 0, explain: "Đây là quy tắc bắt buộc theo phong tục → have to." },
          { prompt: "It's a free event. You ___ pay.", options: ["have to", "don't have to", "should", "must"], correctIndex: 1, explain: "Miễn phí → không cần trả tiền: don't have to." },
          { prompt: "You ___ talk with food in your mouth. It's rude.", options: ["should", "shouldn't", "have to", "has to"], correctIndex: 1, explain: "Thô lỗ → không nên: shouldn't." },
          { prompt: "Tiền lì xì tiếng Anh là:", options: ["lucky money", "custom", "ancestor", "festival"], correctIndex: 0, explain: "lucky money = tiền lì xì." },
        ],
      },
    ],
  },
  {
    grade: 9,
    focus: "Môi trường sống, áp lực tuổi teen, du lịch, phát minh. Ôn thi vào lớp 10 với cụm động từ, câu tường thuật, câu ước, câu bị động.",
    units: [
      {
        id: "u1", title: "Thành phố và làng nghề", titleEn: "Local life",
        words: [
          { en: "craft village", vi: "làng nghề", example: "Bat Trang is a famous craft village." },
          { en: "artisan", vi: "nghệ nhân", example: "The artisans make beautiful pottery." },
          { en: "attraction", vi: "điểm thu hút du khách", example: "The old town is a popular attraction." },
          { en: "skyscraper", vi: "toà nhà chọc trời", example: "There are many skyscrapers in the city." },
          { en: "traffic jam", vi: "tắc đường", example: "We were stuck in a traffic jam." },
          { en: "crowded", vi: "đông đúc", example: "The market is crowded at weekends." },
        ],
        grammar: {
          title: "Cụm động từ (phrasal verbs) thường gặp",
          explain: "Cụm động từ gồm động từ + giới từ hoặc trạng từ, nghĩa thường khác nghĩa từng chữ. Cách học tốt nhất là học cả cụm kèm câu ví dụ.",
          forms: ["look after = chăm sóc", "set up = thành lập", "turn down = từ chối / vặn nhỏ", "find out = tìm ra", "pass down = truyền lại", "close down = đóng cửa (vĩnh viễn)"],
          examples: [
            { en: "The skills are passed down from generation to generation.", vi: "Tay nghề được truyền lại từ đời này sang đời khác." },
            { en: "They set up a new workshop last year.", vi: "Họ đã mở một xưởng mới năm ngoái." },
            { en: "Many small shops have closed down.", vi: "Nhiều cửa hàng nhỏ đã đóng cửa." },
          ],
        },
        quiz: [
          { prompt: "My grandmother ___ my little brother when my parents are at work.", options: ["looks after", "looks for", "sets up", "finds out"], correctIndex: 0, explain: "look after = chăm sóc." },
          { prompt: "The craft has been ___ for over 500 years.", options: ["turned down", "passed down", "closed down", "set up"], correctIndex: 1, explain: "pass down = truyền lại (qua các thế hệ)." },
          { prompt: "Let's ___ what time the museum opens.", options: ["find out", "look after", "turn down", "close down"], correctIndex: 0, explain: "find out = tìm hiểu, tìm ra." },
          { prompt: "Nghệ nhân tiếng Anh là:", options: ["attraction", "artisan", "skyscraper", "craft"], correctIndex: 1, explain: "artisan = nghệ nhân." },
        ],
      },
      {
        id: "u2", title: "Áp lực tuổi học trò", titleEn: "Teen stress",
        words: [
          { en: "stressed", vi: "căng thẳng", example: "I feel stressed before exams." },
          { en: "anxious", vi: "lo lắng", example: "She is anxious about the test." },
          { en: "pressure", vi: "áp lực", example: "Teens face a lot of pressure." },
          { en: "cope with", vi: "đối phó, vượt qua", example: "How do you cope with stress?" },
          { en: "balance", vi: "sự cân bằng", example: "Keep a balance between study and rest." },
          { en: "advice", vi: "lời khuyên", example: "My teacher gave me some advice." },
        ],
        grammar: {
          title: "Câu tường thuật (câu kể)",
          explain: "Khi kể lại lời người khác, ta lùi thì một bậc: hiện tại đơn → quá khứ đơn, will → would, can → could. Đổi đại từ cho phù hợp và đổi trạng từ: now → then, today → that day, tomorrow → the next day.",
          forms: ["S + said (that) + S + V (lùi thì).", "S + told + O + (that) + S + V (lùi thì).", "is → was, will → would, can → could, now → then."],
          examples: [
            { en: "\"I am tired.\" → She said that she was tired.", vi: "\"Tớ mệt.\" → Bạn ấy nói rằng bạn ấy mệt." },
            { en: "\"I will help you.\" → He told me he would help me.", vi: "\"Tớ sẽ giúp cậu.\" → Bạn ấy bảo sẽ giúp mình." },
            { en: "\"I can't sleep.\" → Nam said he couldn't sleep.", vi: "\"Tớ không ngủ được.\" → Nam nói không ngủ được." },
          ],
        },
        quiz: [
          { prompt: "\"I feel stressed.\" → Lan said she ___ stressed.", options: ["feels", "felt", "feel", "will feel"], correctIndex: 1, explain: "Lùi thì: feel (hiện tại) → felt (quá khứ)." },
          { prompt: "\"I will study harder.\" → He said he ___ study harder.", options: ["will", "would", "can", "shall"], correctIndex: 1, explain: "will → would." },
          { prompt: "\"I can't finish it today.\" → She said she couldn't finish it ___.", options: ["today", "that day", "tomorrow", "now"], correctIndex: 1, explain: "today → that day." },
          { prompt: "Chọn câu đúng:", options: ["She said me that she was busy.", "She told me that she was busy.", "She told that she was busy.", "She said to that she was busy."], correctIndex: 1, explain: "tell + người nghe (told me); say không đi trực tiếp với người nghe." },
        ],
      },
      {
        id: "u3", title: "Du lịch", titleEn: "Tourism",
        words: [
          { en: "destination", vi: "điểm đến", example: "Hoi An is a popular destination." },
          { en: "itinerary", vi: "lịch trình chuyến đi", example: "Let's plan our itinerary." },
          { en: "accommodation", vi: "chỗ ở", example: "We booked accommodation online." },
          { en: "sightseeing", vi: "tham quan", example: "We went sightseeing in Hanoi." },
          { en: "souvenir", vi: "quà lưu niệm", example: "I bought a souvenir for my mum." },
          { en: "package tour", vi: "tour trọn gói", example: "A package tour includes hotels and meals." },
        ],
        grammar: {
          title: "Câu ước ở hiện tại (wish)",
          explain: "Câu ước ở hiện tại diễn tả mong muốn trái với thực tế bây giờ. Sau \"wish\" động từ lùi về quá khứ đơn. Với động từ be, dùng \"were\" cho mọi chủ ngữ (văn viết trang trọng).",
          forms: ["S + wish + S + V (quá khứ đơn).", "S + wish + S + were + …", "S + wish + S + could + V."],
          examples: [
            { en: "I wish I had more time to travel.", vi: "Ước gì mình có nhiều thời gian đi du lịch hơn." },
            { en: "She wishes she were on the beach now.", vi: "Bạn ấy ước giờ đang ở bãi biển." },
            { en: "We wish we could visit Japan.", vi: "Chúng mình ước có thể đến thăm Nhật Bản." },
          ],
        },
        quiz: [
          { prompt: "I wish I ___ enough money for the trip.", options: ["have", "had", "will have", "having"], correctIndex: 1, explain: "Câu ước hiện tại: wish + quá khứ đơn → had." },
          { prompt: "He wishes he ___ in Da Lat now.", options: ["is", "were", "be", "will be"], correctIndex: 1, explain: "Câu ước với be → were." },
          { prompt: "They wish they ___ speak Japanese.", options: ["can", "could", "will", "are"], correctIndex: 1, explain: "can → could trong câu ước." },
          { prompt: "Quà lưu niệm tiếng Anh là:", options: ["souvenir", "itinerary", "destination", "accommodation"], correctIndex: 0, explain: "souvenir = quà lưu niệm." },
        ],
      },
      {
        id: "u4", title: "Phát minh và công nghệ", titleEn: "Inventions",
        words: [
          { en: "invention", vi: "phát minh", example: "The phone is a great invention." },
          { en: "invent", vi: "phát minh (động từ)", example: "Who invented the light bulb?" },
          { en: "device", vi: "thiết bị", example: "This device can translate languages." },
          { en: "artificial intelligence", vi: "trí tuệ nhân tạo", example: "Artificial intelligence is changing our lives." },
          { en: "robot", vi: "người máy", example: "Robots can do dangerous jobs." },
          { en: "launch", vi: "ra mắt, phóng", example: "The company launched a new phone." },
        ],
        grammar: {
          title: "Câu bị động (hiện tại đơn và quá khứ đơn)",
          explain: "Câu bị động dùng khi muốn nhấn mạnh sự vật chịu tác động hơn là người làm. Công thức: be + V3. Muốn nói người làm thì thêm \"by + người\".",
          forms: ["Hiện tại đơn: S + am/is/are + V3.", "Quá khứ đơn: S + was/were + V3.", "(by + người/vật thực hiện)."],
          examples: [
            { en: "The telephone was invented by Alexander Graham Bell.", vi: "Điện thoại được Alexander Graham Bell phát minh." },
            { en: "Millions of smartphones are sold every year.", vi: "Hàng triệu điện thoại thông minh được bán ra mỗi năm." },
            { en: "This robot was designed by students.", vi: "Người máy này do học sinh thiết kế." },
          ],
        },
        quiz: [
          { prompt: "The light bulb ___ by Thomas Edison.", options: ["invented", "was invented", "is inventing", "invents"], correctIndex: 1, explain: "Bóng đèn được phát minh (bị động, quá khứ) → was invented." },
          { prompt: "English ___ in many countries.", options: ["speaks", "is spoken", "spoke", "speaking"], correctIndex: 1, explain: "Tiếng Anh được nói (bị động, sự thật hiện tại) → is spoken." },
          { prompt: "These robots ___ in Japan last year.", options: ["were made", "was made", "made", "are made"], correctIndex: 0, explain: "Chủ ngữ số nhiều, last year → were made." },
          { prompt: "Trí tuệ nhân tạo tiếng Anh là:", options: ["artificial intelligence", "device", "invention", "launch"], correctIndex: 0, explain: "artificial intelligence (AI) = trí tuệ nhân tạo." },
        ],
      },
    ],
  },
];
