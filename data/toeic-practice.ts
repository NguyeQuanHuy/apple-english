// Practice banks for the TOEIC practice rooms: Part 2 listening and Part 5 grammar.
// Every item has exactly one correct option and a Vietnamese explanation.

export type Part2Item = {
  id: string;
  question: string;
  options: [string, string, string];
  correctIndex: 0 | 1 | 2;
  explain: string;
};

export const PART2: Part2Item[] = [
  // Where / When / Who
  { id: "p2-01", question: "Where is the nearest post office?", options: ["It opens at nine.", "Just around the corner.", "I posted it yesterday."], correctIndex: 1, explain: "Hỏi Where → cần nơi chốn. \"It opens at nine\" trả lời When. \"posted\" là bẫy từ gần âm với \"post office\"." },
  { id: "p2-02", question: "When is the report due?", options: ["By Friday afternoon.", "In the meeting room.", "Yes, it's ready."], correctIndex: 0, explain: "Hỏi When → cần thời gian: \"By Friday afternoon\". Câu hỏi WH không bao giờ trả lời bằng Yes/No." },
  { id: "p2-03", question: "Who's in charge of the new project?", options: ["It's in the top drawer.", "Ms. Tanaka, I think.", "The project starts in May."], correctIndex: 1, explain: "Hỏi Who → cần người: \"Ms. Tanaka\". \"The project starts in May\" lặp lại từ \"project\" để đánh lừa nhưng lại trả lời When." },
  { id: "p2-04", question: "Where did you put the invoices?", options: ["On your desk.", "About two hundred dollars.", "I'll pay them tomorrow."], correctIndex: 0, explain: "Hỏi Where → nơi chốn: \"On your desk\". \"pay\" liên quan nghĩa \"invoices\" nhưng không trả lời câu hỏi." },
  { id: "p2-05", question: "When will the new printer arrive?", options: ["On the third floor.", "Next Tuesday.", "Black and white only."], correctIndex: 1, explain: "Hỏi When → thời gian. \"On the third floor\" là bẫy nơi chốn." },
  { id: "p2-06", question: "Who should I send the application to?", options: ["The human resources manager.", "Before the end of the month.", "Yes, I applied last week."], correctIndex: 0, explain: "Hỏi Who → người nhận: \"The human resources manager\". \"Before the end of the month\" trả lời When; \"Yes, I applied…\" dùng Yes cho câu hỏi WH và lặp từ \"applied\"." },
  // Why / How / What / Which
  { id: "p2-07", question: "Why was the meeting cancelled?", options: ["In conference room B.", "The manager is sick.", "At ten o'clock."], correctIndex: 1, explain: "Hỏi Why → cần lý do. Lý do có thể không có \"because\": \"The manager is sick\" vẫn là lý do." },
  { id: "p2-08", question: "How do I get to the train station?", options: ["Take the number five bus.", "It was a long trip.", "About fifteen trains a day."], correctIndex: 0, explain: "How do I get to… hỏi cách đi → chỉ phương tiện: \"Take the number five bus\". \"About fifteen trains a day\" chỉ lặp từ \"train\"." },
  { id: "p2-09", question: "How long will the repairs take?", options: ["About two hours.", "The repair shop on Main Street.", "It's twenty meters long."], correctIndex: 0, explain: "How long + take → hỏi mất bao lâu: \"About two hours\". \"It's twenty meters long\" bẫy từ \"long\" theo nghĩa chiều dài." },
  { id: "p2-10", question: "What time does the store close?", options: ["It's very close to here.", "At eight p.m.", "We sell clothes."], correctIndex: 1, explain: "What time → giờ cụ thể: \"At eight p.m.\". \"very close to here\" bẫy \"close\" (gần, đọc /kloʊs/) khác \"close\" (đóng cửa, đọc /kloʊz/); \"clothes\" bẫy âm gần giống." },
  { id: "p2-11", question: "Which hotel are you staying at?", options: ["For three nights.", "The one near the airport.", "Yes, it's comfortable."], correctIndex: 1, explain: "Which → chọn một trong nhiều thứ: \"The one near the airport\". Cụm \"the one…\" rất hay là đáp án của Which." },
  { id: "p2-12", question: "How much does the conference cost?", options: ["It's free for members.", "Many people attended.", "In the main hall."], correctIndex: 0, explain: "How much → giá tiền. Đáp án không nhất thiết có con số: \"It's free for members\" vẫn trả lời đúng." },
  // Yes / No and auxiliary questions
  { id: "p2-13", question: "Have you finished the sales report?", options: ["Not yet, but almost.", "The sales were good.", "I'll report to Mr. Kim."], correctIndex: 0, explain: "Câu hỏi Yes/No → \"Not yet\" là cách nói No tự nhiên. Hai đáp án còn lại lặp \"sales\" và \"report\" — bẫy lặp từ kinh điển." },
  { id: "p2-14", question: "Is this seat taken?", options: ["No, go ahead.", "I took the bus.", "It's a comfortable chair."], correctIndex: 0, explain: "\"No, go ahead\" = chưa ai ngồi, cứ ngồi đi. \"I took the bus\" bẫy \"took\" (quá khứ của take, gần âm \"taken\")." },
  { id: "p2-15", question: "Did you call the client back?", options: ["She's waiting in the lobby.", "Yes, this morning.", "Back to the office."], correctIndex: 1, explain: "Yes + thông tin bổ sung: \"Yes, this morning\". \"Back to the office\" lặp từ \"back\" nhưng không trả lời câu hỏi." },
  { id: "p2-16", question: "Are you going to the trade show?", options: ["I haven't decided yet.", "It was a great show.", "Trading starts at nine."], correctIndex: 0, explain: "Không phải lúc nào cũng có Yes/No: \"I haven't decided yet\" là câu trả lời gián tiếp rất hay gặp." },
  // Choice questions
  { id: "p2-17", question: "Would you like tea or coffee?", options: ["Yes, please.", "Coffee, thanks.", "In the kitchen."], correctIndex: 1, explain: "Câu hỏi lựa chọn A or B → chọn một trong hai. \"Yes, please\" sai vì không thể trả lời Yes cho câu hỏi chọn." },
  { id: "p2-18", question: "Should we meet today or tomorrow?", options: ["Either is fine with me.", "I met him yesterday.", "Yes, at the café."], correctIndex: 0, explain: "\"Either is fine\" (cái nào cũng được) là đáp án rất hay gặp cho câu hỏi lựa chọn." },
  { id: "p2-19", question: "Do you want the window seat or the aisle seat?", options: ["I'd prefer the aisle.", "The window is open.", "Please have a seat."], correctIndex: 0, explain: "Chọn một trong hai: \"I'd prefer the aisle\". Hai đáp án còn lại chỉ lặp \"window\" và \"seat\"." },
  // Suggestions, requests, offers
  { id: "p2-20", question: "Why don't we take a short break?", options: ["Because it's broken.", "That's a good idea.", "It takes two hours."], correctIndex: 1, explain: "\"Why don't we…?\" là lời đề nghị, không phải hỏi lý do. Không trả lời bằng Because. \"Because it's broken\" còn là bẫy âm: \"broken\" nghe gần \"break\"." },
  { id: "p2-21", question: "Could you help me carry these boxes?", options: ["Sure, where do they go?", "They're made of paper.", "Yes, I carried it."], correctIndex: 0, explain: "Lời nhờ vả → đồng ý hoặc từ chối. \"Sure, where do they go?\" đồng ý và hỏi thêm." },
  { id: "p2-22", question: "Would you like me to book a taxi?", options: ["That would be great.", "I read that book.", "It's a long drive."], correctIndex: 0, explain: "Lời đề nghị giúp → \"That would be great\". \"I read that book\" bẫy \"book\" theo nghĩa quyển sách (trong câu hỏi là đặt xe)." },
  { id: "p2-23", question: "Let's order lunch from the Italian place.", options: ["I had pasta yesterday.", "In alphabetical order.", "It's on the second floor."], correctIndex: 0, explain: "Câu đề nghị dạng khẳng định → đáp án có thể là phản hồi gián tiếp: \"I had pasta yesterday\" ngầm ý muốn ăn món khác. \"In alphabetical order\" bẫy \"order\" theo nghĩa thứ tự." },
  // Statements and indirect answers
  { id: "p2-24", question: "The printer on our floor isn't working.", options: ["Use the one downstairs.", "He works on the fifth floor.", "Print two copies."], correctIndex: 0, explain: "Câu trần thuật nêu vấn đề → đáp án đưa ra giải pháp: \"Use the one downstairs\". \"He works…\" bẫy \"working\"; \"Print two copies\" lặp \"print\"." },
  { id: "p2-25", question: "I can't find my security badge.", options: ["Did you check your car?", "It's a secure building.", "Find the nearest exit."], correctIndex: 0, explain: "Phản hồi bằng một câu hỏi gợi ý (\"Did you check your car?\") là kiểu đáp án rất hay gặp ở Part 2. \"secure building\" bẫy âm gần \"security\"." },
  { id: "p2-26", question: "When does the flight to Tokyo leave?", options: ["Let me check the schedule.", "Turn left at the corner.", "I've never been to Tokyo."], correctIndex: 0, explain: "Câu trả lời gián tiếp như \"Let me check…\", \"I'm not sure\" có thể đúng với mọi loại câu hỏi. \"Turn left\" bẫy \"left\" gần âm \"leave\"." },
  { id: "p2-27", question: "Who's going to lead the training session?", options: ["It hasn't been decided.", "A two-day session.", "He trained in London."], correctIndex: 0, explain: "\"It hasn't been decided\" — chưa quyết định — là câu trả lời gián tiếp đúng. \"He trained in London\" lặp từ \"trained\"." },
  // Tag and negative questions
  { id: "p2-28", question: "You've worked here for five years, haven't you?", options: ["Actually, it's been six.", "Five dollars each.", "He doesn't work here."], correctIndex: 0, explain: "Câu hỏi đuôi xác nhận thông tin → \"Actually, it's been six\" là đính chính hợp lý." },
  { id: "p2-29", question: "Isn't the store open on Sundays?", options: ["Only in December.", "I store files online.", "Open the window, please."], correctIndex: 0, explain: "Câu hỏi phủ định trả lời như câu hỏi thường. \"Only in December\" = chỉ mở Chủ nhật vào tháng 12. \"I store files online\" bẫy nghĩa khác của \"store\"." },
  { id: "p2-30", question: "The new manager starts on Monday, doesn't she?", options: ["That's what I heard.", "It starts at nine.", "She managed it well."], correctIndex: 0, explain: "\"That's what I heard\" = tôi cũng nghe vậy → xác nhận. \"It starts at nine\" lặp \"starts\"; \"She managed it well\" bẫy \"managed\"." },
];

export type Part5Category = "word-form" | "tense" | "preposition" | "conjunction" | "pronoun" | "vocabulary";

export const PART5_CATEGORIES: { id: Part5Category; title: string; desc: string }[] = [
  { id: "word-form", title: "Từ loại", desc: "Danh từ, tính từ, trạng từ, động từ" },
  { id: "tense", title: "Thì & dạng động từ", desc: "Thì, bị động, to V / V-ing" },
  { id: "preposition", title: "Giới từ", desc: "in, on, at, by, until, during…" },
  { id: "conjunction", title: "Liên từ", desc: "although, because, despite, unless…" },
  { id: "pronoun", title: "Đại từ", desc: "their, themselves, who, which…" },
  { id: "vocabulary", title: "Từ vựng & cụm từ", desc: "Cụm từ cố định trong văn phòng" },
];

export type Part5Item = {
  id: string;
  category: Part5Category;
  question: string;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explain: string;
};

export const PART5: Part5Item[] = [
  // ── Từ loại
  { id: "p5-wf-1", category: "word-form", question: "Please read the instructions ___ before using the machine.", options: ["careful", "carefully", "care", "carefulness"], correctIndex: 1, explain: "Bổ nghĩa cho động từ \"read\" → cần trạng từ (thường đuôi -ly): carefully." },
  { id: "p5-wf-2", category: "word-form", question: "The company made a significant ___ in new technology.", options: ["invest", "invested", "investment", "investor"], correctIndex: 2, explain: "Sau tính từ \"significant\" cần danh từ. \"investor\" là danh từ chỉ người, không hợp nghĩa \"made a … in technology\"." },
  { id: "p5-wf-3", category: "word-form", question: "Our new software is very ___ to use.", options: ["easy", "easily", "ease", "easiness"], correctIndex: 0, explain: "Sau \"be very\" cần tính từ: easy to use. Trạng từ không đứng sau \"be\" để mô tả chủ ngữ." },
  { id: "p5-wf-4", category: "word-form", question: "Ms. Lee has been ___ promoted to sales director.", options: ["recent", "recently", "recentness", "more recent"], correctIndex: 1, explain: "Vị trí giữa \"has been\" và \"promoted\" (giữa trợ động từ và động từ chính) → trạng từ." },
  { id: "p5-wf-5", category: "word-form", question: "All ___ must register at the front desk.", options: ["visit", "visits", "visitors", "visited"], correctIndex: 2, explain: "Sau \"All\" và trước động từ \"must register\" cần danh từ làm chủ ngữ. Người đăng ký → visitors." },
  { id: "p5-wf-6", category: "word-form", question: "The hotel offers ___ rooms at reasonable prices.", options: ["comfort", "comfortable", "comfortably", "comforts"], correctIndex: 1, explain: "Trước danh từ \"rooms\" cần tính từ: comfortable rooms." },
  { id: "p5-wf-7", category: "word-form", question: "The manager asked for a detailed ___ of the costs.", options: ["analyze", "analytical", "analysis", "analytically"], correctIndex: 2, explain: "Sau mạo từ \"a\" + tính từ \"detailed\" cần danh từ. Đuôi -sis là danh từ: analysis." },
  { id: "p5-wf-8", category: "word-form", question: "The event was ___ successful, with over 500 guests.", options: ["extreme", "extremely", "extremity", "extremes"], correctIndex: 1, explain: "Bổ nghĩa cho tính từ \"successful\" → trạng từ: extremely successful." },
  // ── Thì & dạng động từ
  { id: "p5-t-1", category: "tense", question: "The new branch ___ next month.", options: ["opened", "has opened", "will open", "was opening"], correctIndex: 2, explain: "\"next month\" là dấu hiệu tương lai → will open." },
  { id: "p5-t-2", category: "tense", question: "Mr. Park ___ for this company since 2018.", options: ["works", "has worked", "worked", "is working"], correctIndex: 1, explain: "\"since + mốc thời gian\" → hiện tại hoàn thành: has worked." },
  { id: "p5-t-3", category: "tense", question: "The contract ___ by both parties yesterday.", options: ["signed", "was signed", "is signing", "has signed"], correctIndex: 1, explain: "Hợp đồng không tự ký được → câu bị động. \"yesterday\" → quá khứ: was signed." },
  { id: "p5-t-4", category: "tense", question: "We look forward to ___ from you soon.", options: ["hear", "hearing", "heard", "be heard"], correctIndex: 1, explain: "\"look forward to\" — \"to\" ở đây là giới từ nên theo sau là V-ing: hearing. Cụm cực hay gặp trong email." },
  { id: "p5-t-5", category: "tense", question: "The manager decided ___ the meeting until Friday.", options: ["postpone", "postponing", "to postpone", "postponed"], correctIndex: 2, explain: "\"decide\" + to V: decided to postpone." },
  { id: "p5-t-6", category: "tense", question: "If sales ___ next quarter, we will hire more staff.", options: ["increase", "will increase", "increased", "increasing"], correctIndex: 0, explain: "Câu điều kiện loại 1: If + hiện tại đơn, will + V. Mệnh đề If không dùng will." },
  { id: "p5-t-7", category: "tense", question: "All employees are required ___ the safety training.", options: ["complete", "completing", "to complete", "completed"], correctIndex: 2, explain: "\"be required to + V\" (được yêu cầu làm gì): to complete." },
  { id: "p5-t-8", category: "tense", question: "The package ___ to the wrong address last week.", options: ["delivered", "was delivered", "delivers", "is delivering"], correctIndex: 1, explain: "Gói hàng được giao (bị động), \"last week\" → quá khứ bị động: was delivered." },
  // ── Giới từ
  { id: "p5-pr-1", category: "preposition", question: "The seminar will take place ___ March 15.", options: ["in", "on", "at", "by"], correctIndex: 1, explain: "Ngày cụ thể dùng \"on\": on March 15. Tháng, năm dùng \"in\"; giờ dùng \"at\"." },
  { id: "p5-pr-2", category: "preposition", question: "Please submit your report ___ Friday at the latest.", options: ["by", "until", "since", "during"], correctIndex: 0, explain: "\"by\" = hạn chót, trước hoặc đúng lúc đó. \"until\" dùng cho hành động kéo dài tới một thời điểm." },
  { id: "p5-pr-3", category: "preposition", question: "The office is closed ___ the holidays.", options: ["while", "during", "for", "since"], correctIndex: 1, explain: "\"during + danh từ\" = trong suốt khoảng thời gian. \"while\" là liên từ, phải đi với mệnh đề." },
  { id: "p5-pr-4", category: "preposition", question: "The store is open ___ 9 a.m. to 6 p.m.", options: ["between", "from", "since", "at"], correctIndex: 1, explain: "Cấu trúc cố định: from … to … \"between\" phải đi với \"and\"." },
  { id: "p5-pr-5", category: "preposition", question: "Ms. Garcia has been with the company ___ ten years.", options: ["since", "for", "during", "in"], correctIndex: 1, explain: "\"for + khoảng thời gian\" (ten years); \"since + mốc thời gian\" (2015)." },
  { id: "p5-pr-6", category: "preposition", question: "The meeting will continue ___ all items have been discussed.", options: ["by", "until", "during", "within"], correctIndex: 1, explain: "Sau chỗ trống là một mệnh đề (all items have been discussed). Chỉ \"until\" vừa là giới từ vừa là liên từ. \"by\", \"during\", \"within\" không đi với mệnh đề." },
  { id: "p5-pr-7", category: "preposition", question: "Employees can park ___ the building.", options: ["behind", "among", "between", "into"], correctIndex: 0, explain: "behind the building = phía sau toà nhà. \"among\" dùng cho nhóm từ ba thứ trở lên; \"between\" cần hai đối tượng." },
  { id: "p5-pr-8", category: "preposition", question: "Refunds are available ___ 30 days of purchase.", options: ["within", "during", "since", "until"], correctIndex: 0, explain: "\"within + khoảng thời gian\" = trong vòng: within 30 days of purchase." },
  // ── Liên từ
  { id: "p5-c-1", category: "conjunction", question: "___ the weather was bad, the event was a success.", options: ["Despite", "Although", "Because", "Unless"], correctIndex: 1, explain: "Hai vế trái ngược + sau chỗ trống là mệnh đề → Although. \"Despite\" chỉ đi với danh từ hoặc V-ing." },
  { id: "p5-c-2", category: "conjunction", question: "___ the heavy traffic, Mr. Brown arrived on time.", options: ["Although", "Despite", "Because", "Since"], correctIndex: 1, explain: "Sau chỗ trống là cụm danh từ (the heavy traffic), ý trái ngược → Despite. Although cần mệnh đề." },
  { id: "p5-c-3", category: "conjunction", question: "The flight was delayed ___ a technical problem.", options: ["because", "because of", "although", "so"], correctIndex: 1, explain: "Sau chỗ trống là cụm danh từ (a technical problem) → because of. \"because\" cần mệnh đề." },
  { id: "p5-c-4", category: "conjunction", question: "You cannot enter the lab ___ you have a security pass.", options: ["unless", "if", "because", "so that"], correctIndex: 0, explain: "unless = if not: không được vào trừ khi có thẻ. Dùng \"if\" sẽ ngược nghĩa." },
  { id: "p5-c-5", category: "conjunction", question: "Please call me ___ you arrive at the airport.", options: ["as soon as", "despite", "in order to", "due to"], correctIndex: 0, explain: "Nối hai mệnh đề về thời gian: as soon as = ngay khi. Các lựa chọn còn lại không đi với mệnh đề." },
  { id: "p5-c-6", category: "conjunction", question: "The product is not only cheap ___ reliable.", options: ["and", "but also", "or", "so"], correctIndex: 1, explain: "Cấu trúc cặp: not only … but also …" },
  { id: "p5-c-7", category: "conjunction", question: "You can pay either by credit card ___ in cash.", options: ["and", "nor", "or", "but"], correctIndex: 2, explain: "Cặp cố định: either … or … (neither đi với nor)." },
  { id: "p5-c-8", category: "conjunction", question: "Mr. Lim left early ___ he could catch the last train.", options: ["so that", "because of", "despite", "even"], correctIndex: 0, explain: "so that + mệnh đề = để mà (chỉ mục đích): rời sớm để kịp chuyến tàu cuối." },
  // ── Đại từ
  { id: "p5-pn-1", category: "pronoun", question: "The employees must submit ___ timesheets by Friday.", options: ["they", "them", "their", "theirs"], correctIndex: 2, explain: "Trước danh từ \"timesheets\" cần tính từ sở hữu: their." },
  { id: "p5-pn-2", category: "pronoun", question: "Ms. Kim prepared the presentation by ___.", options: ["she", "her", "hers", "herself"], correctIndex: 3, explain: "by + đại từ phản thân = tự mình làm: by herself." },
  { id: "p5-pn-3", category: "pronoun", question: "The candidate ___ we interviewed yesterday has accepted the offer.", options: ["which", "whom", "whose", "what"], correctIndex: 1, explain: "Thay cho người và làm tân ngữ (we interviewed him) → whom (hoặc who, that). \"which\" chỉ vật." },
  { id: "p5-pn-4", category: "pronoun", question: "This is the report ___ the director requested.", options: ["who", "which", "whose", "where"], correctIndex: 1, explain: "Thay cho vật (the report) → which (hoặc that)." },
  { id: "p5-pn-5", category: "pronoun", question: "Mr. Patel, ___ office is on the fifth floor, is our new advisor.", options: ["who", "whom", "whose", "which"], correctIndex: 2, explain: "Chỉ sở hữu (văn phòng của ông ấy) → whose + danh từ: whose office." },
  { id: "p5-pn-6", category: "pronoun", question: "If you have any questions, please contact ___ at extension 204.", options: ["I", "me", "my", "mine"], correctIndex: 1, explain: "Sau động từ \"contact\" cần đại từ tân ngữ: me." },
  { id: "p5-pn-7", category: "pronoun", question: "Our prices are lower than ___ of our competitors.", options: ["that", "those", "this", "these"], correctIndex: 1, explain: "Thay cho danh từ số nhiều đã nhắc (prices) → those. Số ít thì dùng that." },
  { id: "p5-pn-8", category: "pronoun", question: "___ of the applicants has a strong background in finance.", options: ["Each", "All", "Many", "Both"], correctIndex: 0, explain: "Động từ \"has\" ở số ít → Each of + danh từ số nhiều + động từ số ít. All, Many, Both đi với \"have\"." },
  // ── Từ vựng & cụm từ
  { id: "p5-v-1", category: "vocabulary", question: "Our team worked late to ___ the deadline.", options: ["meet", "make", "do", "reach out"], correctIndex: 0, explain: "Cụm cố định: meet a deadline = kịp hạn chót." },
  { id: "p5-v-2", category: "vocabulary", question: "Customers can ___ an order online 24 hours a day.", options: ["make", "place", "do", "put"], correctIndex: 1, explain: "Cụm cố định: place an order = đặt hàng." },
  { id: "p5-v-3", category: "vocabulary", question: "Please ___ the attached form and return it to HR.", options: ["fill out", "fill up", "fill on", "fill off"], correctIndex: 0, explain: "fill out a form (Mỹ) / fill in a form (Anh) = điền vào mẫu đơn. \"fill up\" là làm đầy (bình xăng, ly)." },
  { id: "p5-v-4", category: "vocabulary", question: "The company will ___ a new marketing campaign next week.", options: ["launch", "throw", "open up", "begin up"], correctIndex: 0, explain: "launch a campaign / launch a product = ra mắt, khởi động." },
  { id: "p5-v-5", category: "vocabulary", question: "All staff must ___ the meeting on Monday.", options: ["attend", "join to", "participate", "go"], correctIndex: 0, explain: "attend + tân ngữ (không giới từ). \"participate\" phải có \"in\"; \"go\" phải có \"to\"." },
  { id: "p5-v-6", category: "vocabulary", question: "Mr. Chen is ___ for managing the new budget.", options: ["responsible", "charge", "capable", "able"], correctIndex: 0, explain: "be responsible for = chịu trách nhiệm về. \"in charge of\" cũng đúng nghĩa nhưng phải đủ cụm." },
  { id: "p5-v-7", category: "vocabulary", question: "The new policy will take ___ on January 1.", options: ["effect", "affect", "place", "action"], correctIndex: 0, explain: "take effect = có hiệu lực. \"take place\" = diễn ra (sự kiện), không dùng cho chính sách." },
  { id: "p5-v-8", category: "vocabulary", question: "Please ___ us know if you need further assistance.", options: ["let", "make", "tell", "allow"], correctIndex: 0, explain: "Cụm rất hay gặp trong email: let us know = cho chúng tôi biết. \"tell\" và \"allow\" không đi với \"us know\"." },
];

/** Vietnamese explanations for the three mini tests in toeic.ts, keyed by question id. */
export const MINI_TEST_EXPLAIN: Record<string, string> = {
  "t1-1": "Hành động đã xong trong quá khứ, trước một hành động khác (sending it) → quá khứ đơn: reviewed.",
  "t1-2": "Sau động từ khuyết thiếu \"must\" luôn là động từ nguyên mẫu, không chia: must follow.",
  "t1-3": "Ngày cụ thể dùng \"on\": on January 1st. Cụm \"take effect\" = có hiệu lực.",
  "t1-4": "Cụm cố định: be responsible for = chịu trách nhiệm về.",
  "t1-5": "Câu bắt đầu bằng \"Please\" là câu mệnh lệnh lịch sự → động từ nguyên mẫu: review.",
  "t1-6": "Bổ nghĩa cho tính từ \"informative\" → trạng từ: highly informative (rất bổ ích).",
  "t1-7": "Sau \"many\" cần danh từ đếm được số nhiều: complaints (lời phàn nàn).",
  "t1-8": "Cụm rất hay gặp cuối email: Please do not hesitate to contact me = đừng ngần ngại liên hệ.",
  "t1-9": "Địa điểm cụ thể (tên khách sạn, toà nhà) dùng \"at\": at the Hilton Hotel.",
  "t1-10": "increase by + con số = tăng thêm bao nhiêu: increased by 20%.",
  "t2-1": "Câu hỏi mục đích → đọc câu đầu email: \"I'd like to schedule our Q4 campaign kickoff meeting\", rồi liệt kê những gì cần chuẩn bị.",
  "t2-2": "Thông tin nằm ngay câu đầu: \"next Thursday, October 28th, at 2:00 PM\". Các lựa chọn khác trộn lẫn ngày giờ để gây nhầm.",
  "t2-3": "Câu hỏi NOT: dò danh sách gạch đầu dòng — có campaign ideas, budget estimates, Q3 update. Không có customer feedback.",
  "t2-4": "\"Please confirm your attendance by Tuesday EOD.\" EOD = End of Day, cuối ngày làm việc.",
  "t2-5": "\"If you cannot attend in person, please join via the Zoom link\" → tham gia qua Zoom.",
  "t3-1": "Hỏi Where → nơi chốn: on the second floor. \"Yes, I will attend\" sai vì câu hỏi WH không trả lời bằng Yes.",
  "t3-2": "Hỏi When → thời gian: by tomorrow morning. \"At the post office\" là bẫy nơi chốn.",
  "t3-3": "Hỏi Who → người hoặc bộ phận: the finance team.",
  "t3-4": "How did you get to… → hỏi phương tiện: I took the subway.",
  "t3-5": "Lời nhờ vả → đồng ý và nói sẽ làm: Yes, I will email it now. Hai đáp án cuối lặp từ \"report\" để đánh lừa.",
  "t3-6": "Hỏi Why → lý do: because the manager is traveling.",
  "t3-7": "Câu hỏi Yes/No về việc đã làm chưa → Yes, I finished it this morning.",
  "t3-8": "Which → chọn một cái cụ thể: Use the one on the third floor. Cụm \"the one…\" rất hay là đáp án của Which.",
  "t3-9": "Câu hỏi gián tiếp \"Do you know when…\" thực chất hỏi When → He should return by Friday.",
  "t3-10": "Câu hỏi Yes/No về sự tồn tại → Yes, just around the corner.",
};
