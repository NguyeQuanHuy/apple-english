export const TOEIC_THEMES: ToeicTheme[] = [
  {
    id: "office",
    title: "Văn phòng",
    emoji: "💼",
    description: "Từ vựng xuất hiện hàng ngày trong môi trường công sở",
    words: [
      { en: "schedule", pos: "n.", vi: "lịch trình", example: "Please check the schedule before the meeting." },
      { en: "deadline", pos: "n.", vi: "hạn chót", example: "The deadline for this report is Friday." },
      { en: "colleague", pos: "n.", vi: "đồng nghiệp", example: "My colleague will help with the project." },
      { en: "agenda", pos: "n.", vi: "chương trình họp", example: "What's on the agenda today?" },
      { en: "approve", pos: "v.", vi: "phê duyệt", example: "The manager approved my request." },
      { en: "submit", pos: "v.", vi: "nộp", example: "Submit your report by 5 PM." },
      { en: "supervisor", pos: "n.", vi: "người giám sát", example: "Talk to your supervisor about the issue." },
      { en: "department", pos: "n.", vi: "phòng ban", example: "She works in the marketing department." },
      { en: "reschedule", pos: "v.", vi: "dời lịch", example: "We need to reschedule the meeting." },
      { en: "memo", pos: "n.", vi: "thông báo nội bộ", example: "Did you read the memo about parking?" },
    ],
  },
  {
    id: "finance",
    title: "Tài chính",
    emoji: "💰",
    description: "Từ TOEIC Part 7 thường xuyên xuất hiện",
    words: [
      { en: "invoice", pos: "n.", vi: "hoá đơn", example: "Please send the invoice by email." },
      { en: "refund", pos: "n./v.", vi: "hoàn tiền", example: "You can request a refund within 14 days." },
      { en: "expense", pos: "n.", vi: "chi phí", example: "Travel expenses will be reimbursed." },
      { en: "revenue", pos: "n.", vi: "doanh thu", example: "Q3 revenue increased by 15%." },
      { en: "budget", pos: "n.", vi: "ngân sách", example: "We need to stay within budget." },
      { en: "discount", pos: "n.", vi: "giảm giá", example: "Members get a 20% discount." },
      { en: "transaction", pos: "n.", vi: "giao dịch", example: "The transaction failed. Please try again." },
      { en: "estimate", pos: "n./v.", vi: "ước tính", example: "Can you give me an estimate by tomorrow?" },
      { en: "purchase", pos: "n./v.", vi: "mua / sự mua hàng", example: "Thank you for your purchase." },
      { en: "warranty", pos: "n.", vi: "bảo hành", example: "The product has a 2-year warranty." },
    ],
  },
  {
    id: "travel",
    title: "Du lịch / Công tác",
    emoji: "✈️",
    description: "TOEIC Part 3 và Part 4 hay xuất hiện ở chủ đề này",
    words: [
      { en: "reservation", pos: "n.", vi: "đặt chỗ", example: "I'd like to make a reservation for two." },
      { en: "boarding pass", pos: "n.", vi: "thẻ lên máy bay", example: "Please show your boarding pass." },
      { en: "luggage", pos: "n.", vi: "hành lý", example: "Your luggage is overweight." },
      { en: "departure", pos: "n.", vi: "khởi hành", example: "Departure is at 9:45 AM." },
      { en: "arrival", pos: "n.", vi: "đến nơi", example: "Estimated arrival: 3:30 PM." },
      { en: "delay", pos: "n./v.", vi: "trì hoãn", example: "Flight 203 has been delayed." },
      { en: "itinerary", pos: "n.", vi: "lịch trình chuyến đi", example: "I'll email you the itinerary." },
      { en: "accommodation", pos: "n.", vi: "chỗ ở", example: "The company will provide accommodation." },
      { en: "confirm", pos: "v.", vi: "xác nhận", example: "Please confirm your booking by Monday." },
      { en: "cancel", pos: "v.", vi: "huỷ", example: "I'd like to cancel my reservation." },
    ],
  },
  {
    id: "technology",
    title: "Công nghệ & Thiết bị",
    emoji: "💻",
    description: "Từ vựng về IT hay gặp trong TOEIC",
    words: [
      { en: "install", pos: "v.", vi: "cài đặt", example: "Please install the latest software update." },
      { en: "upgrade", pos: "v.", vi: "nâng cấp", example: "We need to upgrade the server." },
      { en: "malfunction", pos: "n.", vi: "sự cố kỹ thuật", example: "The printer has a malfunction." },
      { en: "maintenance", pos: "n.", vi: "bảo trì", example: "The system is down for maintenance." },
      { en: "compatible", pos: "adj.", vi: "tương thích", example: "Is this software compatible?" },
      { en: "backup", pos: "n.", vi: "sao lưu", example: "Always make a backup first." },
      { en: "troubleshoot", pos: "v.", vi: "khắc phục sự cố", example: "IT will troubleshoot the issue." },
      { en: "configure", pos: "v.", vi: "cấu hình", example: "Configure the device before use." },
      { en: "bandwidth", pos: "n.", vi: "băng thông", example: "Streaming uses a lot of bandwidth." },
      { en: "encrypted", pos: "adj.", vi: "được mã hóa", example: "All data must be encrypted." },
    ],
  },
  {
    id: "education",
    title: "Giáo dục & Đào tạo",
    emoji: "🎓",
    description: "Từ vựng về đào tạo hay gặp trong TOEIC Part 4–7",
    words: [
      { en: "training", pos: "n.", vi: "đào tạo", example: "All staff must complete training." },
      { en: "seminar", pos: "n.", vi: "hội thảo", example: "We attended a leadership seminar." },
      { en: "certificate", pos: "n.", vi: "chứng chỉ", example: "She received a certificate." },
      { en: "intern", pos: "n.", vi: "thực tập sinh", example: "We are looking for interns." },
      { en: "qualify", pos: "v.", vi: "đủ điều kiện", example: "Do you qualify for this course?" },
      { en: "enroll", pos: "v.", vi: "đăng ký", example: "Enroll online before the deadline." },
      { en: "workshop", pos: "n.", vi: "buổi thực hành", example: "The Excel workshop was useful." },
      { en: "mentor", pos: "n.", vi: "người hướng dẫn", example: "She was assigned a mentor." },
      { en: "prerequisite", pos: "n.", vi: "điều kiện tiên quyết", example: "B1 is a prerequisite." },
      { en: "curriculum", pos: "n.", vi: "chương trình", example: "The curriculum was updated." },
    ],
  },
  {
    id: "health",
    title: "Sức khỏe & Y tế",
    emoji: "🏥",
    description: "Từ vựng về bảo hiểm, bệnh viện hay gặp trong TOEIC",
    words: [
      { en: "insurance", pos: "n.", vi: "bảo hiểm", example: "Does your company provide health insurance?" },
      { en: "prescription", pos: "n.", vi: "đơn thuốc", example: "You need a prescription for this medicine." },
      { en: "symptom", pos: "n.", vi: "triệu chứng", example: "Describe your symptoms to the doctor." },
      { en: "checkup", pos: "n.", vi: "khám định kỳ", example: "The company offers an annual checkup." },
      { en: "pharmacy", pos: "n.", vi: "nhà thuốc", example: "The pharmacy is open until 10 PM." },
      { en: "diagnosis", pos: "n.", vi: "chẩn đoán", example: "The doctor gave a diagnosis." },
      { en: "treatment", pos: "n.", vi: "điều trị", example: "The treatment lasts two weeks." },
      { en: "specialist", pos: "n.", vi: "bác sĩ chuyên khoa", example: "She was referred to a specialist." },
      { en: "emergency", pos: "n.", vi: "cấp cứu", example: "Call 911 in a medical emergency." },
      { en: "recovery", pos: "n.", vi: "sự hồi phục", example: "The patient made a full recovery." },
    ],
  }
,
  {
    id: "shopping",
    title: "Mua sắm & Bán lẻ",
    emoji: "🛒",
    description: "Từ vựng về mua sắm, giá cả hay gặp trong TOEIC Part 1-7",
    words: [
      { en: "purchase", pos: "v.", vi: "mua", example: "She purchased a new laptop online." },
      { en: "discount", pos: "n.", vi: "giảm giá", example: "There is a 20% discount on all items." },
      { en: "receipt", pos: "n.", vi: "biên lai", example: "Please keep your receipt for returns." },
      { en: "refund", pos: "n.", vi: "hoàn tiền", example: "I would like a refund for this product." },
      { en: "exchange", pos: "v.", vi: "đổi hàng", example: "Can I exchange this for a different size?" },
      { en: "retail", pos: "n.", vi: "bán lẻ", example: "The retail price is higher than wholesale." },
      { en: "wholesale", pos: "n.", vi: "bán buôn", example: "They buy wholesale and sell retail." },
      { en: "inventory", pos: "n.", vi: "hàng tồn kho", example: "We need to check the inventory." },
      { en: "checkout", pos: "n.", vi: "thanh toán", example: "Please proceed to the checkout counter." },
      { en: "warranty", pos: "n.", vi: "bảo hành", example: "The product comes with a one-year warranty." },
    ],
  }
,
  {
    id: "hr",
    title: "Nhân sự & Tuyển dụng",
    emoji: "👥",
    description: "Từ vựng về HR, tuyển dụng hay gặp trong TOEIC Part 4-7",
    words: [
      { en: "recruit", pos: "v.", vi: "tuyển dụng", example: "We are recruiting for a new sales manager." },
      { en: "resume", pos: "n.", vi: "hồ sơ xin việc", example: "Please send your resume by Friday." },
      { en: "interview", pos: "n.", vi: "phỏng vấn", example: "She has a job interview tomorrow morning." },
      { en: "candidate", pos: "n.", vi: "ứng viên", example: "We have shortlisted five candidates." },
      { en: "salary", pos: "n.", vi: "lương", example: "The salary will be discussed at the interview." },
      { en: "benefits", pos: "n.", vi: "phúc lợi", example: "The company offers great benefits." },
      { en: "probation", pos: "n.", vi: "thử việc", example: "There is a 3-month probation period." },
      { en: "resignation", pos: "n.", vi: "đơn nghỉ việc", example: "She submitted her resignation last week." },
      { en: "performance", pos: "n.", vi: "hiệu suất làm việc", example: "His performance has improved this quarter." },
      { en: "appraisal", pos: "n.", vi: "đánh giá nhân viên", example: "Annual appraisals help identify areas for growth." },
    ],
  }
,
  {
    id: "equipment",
    title: "Thiết bị & Máy móc",
    emoji: "⚙️",
    description: "Từ vựng về thiết bị, máy móc hay gặp trong TOEIC Part 1-4",
    words: [
      { en: "equipment", pos: "n.", vi: "thiết bị", example: "The factory has modern equipment." },
      { en: "machinery", pos: "n.", vi: "máy móc", example: "The machinery needs regular maintenance." },
      { en: "operate", pos: "v.", vi: "vận hành", example: "Only trained staff can operate this machine." },
      { en: "repair", pos: "v.", vi: "sửa chữa", example: "The technician came to repair the printer." },
      { en: "install", pos: "v.", vi: "lắp đặt", example: "They will install the new system tomorrow." },
      { en: "malfunction", pos: "n.", vi: "sự cố", example: "A malfunction caused the delay in production." },
      { en: "spare parts", pos: "n.", vi: "phụ tùng thay thế", example: "We need to order spare parts for the machine." },
      { en: "assembly", pos: "n.", vi: "lắp ráp", example: "The assembly line runs 24 hours a day." },
      { en: "capacity", pos: "n.", vi: "công suất", example: "The factory is running at full capacity." },
      { en: "inspection", pos: "n.", vi: "kiểm tra, giám sát", example: "A safety inspection is required every month." },
    ],
  }
,
  {
    id: "banking",
    title: "Ngân hàng & Tài khoản",
    emoji: "🏦",
    description: "Từ vựng về ngân hàng, giao dịch hay gặp trong TOEIC Part 4-7",
    words: [
      { en: "deposit", pos: "v.", vi: "gử tiền", example: "I need to deposit this check into my account." },
      { en: "withdraw", pos: "v.", vi: "rút tiền", example: "She withdrew  from the ATM." },
      { en: "transaction", pos: "n.", vi: "giao dịch", example: "All transactions are recorded automatically." },
      { en: "interest rate", pos: "n.", vi: "lãi suất", example: "The interest rate on this loan is 5% per year." },
      { en: "loan", pos: "n.", vi: "khoản vay", example: "He applied for a loan to buy a house." },
      { en: "balance", pos: "n.", vi: "số dư tài khoản", example: "Please check your account balance before transferring." },
      { en: "transfer", pos: "v.", vi: "chuyển khoản", example: "I will transfer the money by end of day." },
      { en: "statement", pos: "n.", vi: "sao kê tài khoản", example: "Your monthly statement is available online." },
      { en: "mortgage", pos: "n.", vi: "vay thế chấp", example: "They took out a mortgage to buy the apartment." },
      { en: "currency", pos: "n.", vi: "tiền tệ", example: "Please exchange your currency before traveling." },
    ],
  }
,
  {
    id: "shipping",
    title: "Vận chuyển & Giao hàng",
    emoji: "🚚",
    description: "Từ vựng về vận chuyển, xuất nhập khẩu hay gặp trong TOEIC Part 4-7",
    words: [
      { en: "shipment", pos: "n.", vi: "lô hàng", example: "The shipment will arrive by Thursday." },
      { en: "freight", pos: "n.", vi: "hàng hóa vận chuyển", example: "Freight costs have increased this year." },
      { en: "customs", pos: "n.", vi: "hải quan", example: "The package is stuck at customs." },
      { en: "tracking", pos: "n.", vi: "theo dõi đơn hàng", example: "You can use the tracking number to locate your order." },
      { en: "dispatch", pos: "v.", vi: "gửi đi, xuất hàng", example: "The order was dispatched yesterday." },
      { en: "warehouse", pos: "n.", vi: "kho hàng", example: "The goods are stored in our warehouse." },
      { en: "invoice", pos: "n.", vi: "hóa đơn", example: "Please attach the invoice to the shipment." },
      { en: "delivery", pos: "n.", vi: "giao hàng", example: "Free delivery is available for orders over ." },
      { en: "import", pos: "v.", vi: "nhập khẩu", example: "They import raw materials from Vietnam." },
      { en: "export", pos: "v.", vi: "xuất khẩu", example: "The company exports goods to 20 countries." },
    ],
  }
,
  {
    id: "weather",
    title: "Thời tiết & Khí hậu",
    emoji: "⛅",
    description: "Từ vựng về thời tiết hay gặp trong TOEIC Part 1-4",
    words: [
      { en: "forecast", pos: "n.", vi: "dự báo thời tiết", example: "The forecast shows rain for the next three days." },
      { en: "temperature", pos: "n.", vi: "nhiệt độ", example: "Temperatures will drop below zero tonight." },
      { en: "humidity", pos: "n.", vi: "độ ẩm", example: "High humidity makes it feel hotter than it is." },
      { en: "precipitation", pos: "n.", vi: "lượng mưa", example: "Heavy precipitation is expected this weekend." },
      { en: "flood", pos: "n.", vi: "lũ lụt", example: "The flood damaged many homes in the area." },
      { en: "drought", pos: "n.", vi: "hạn hán", example: "The drought has affected crop production." },
      { en: "storm", pos: "n.", vi: "bão", example: "A tropical storm is approaching the coast." },
      { en: "visibility", pos: "n.", vi: "tầm nhìn", example: "Poor visibility caused flight delays." },
      { en: "celsius", pos: "n.", vi: "độ C", example: "The temperature is 35 degrees Celsius today." },
      { en: "climate", pos: "n.", vi: "khí hậu", example: "Vietnam has a tropical climate." },
    ],
  }
];

// ─── Mock tests ────────────────────────────────────────────────
export interface ToeicQuestion {
  id: string;
  part: 5 | 6 | 7;
  passage?: string; // for part 6/7
  question: string;
  options: string[];
  correctIndex: number;
  explain?: string;
};

export interface ToeicTest {
  id: string;
  title: string;
  description: string;
  timeLimitSec: number;
  questions: ToeicQuestion[];
};

export const TOEIC_TESTS: ToeicTest[] = [
  {
    id: "toeic-mini-1",
    title: "Mini Test 1 — Part 5 căn bản",
    description: "10 câu Part 5 (incomplete sentences). Thời gian: 8 phút.",
    timeLimitSec: 8 * 60,
    questions: [
      {
        id: "t1-1",
        part: 5,
        question: "The manager ___ the report before sending it to the client.",
        options: ["review", "reviews", "reviewed", "reviewing"],
        correctIndex: 2,
        explain: "Past simple (action completed before another past action).",
      },
      {
        id: "t1-2",
        part: 5,
        question: "All employees must ___ the safety guidelines.",
        options: ["follow", "follows", "following", "followed"],
        correctIndex: 0,
        explain: "After 'must' → bare infinitive (động từ nguyên thể, không thêm s).",
      },
      {
        id: "t1-3",
        part: 5,
        question: "The new policy will take effect ___ January 1st.",
        options: ["in", "at", "on", "by"],
        correctIndex: 2,
        explain: "On + ngày cụ thể.",
      },
      {
        id: "t1-4",
        part: 5,
        question: "Our department is responsible ___ customer support.",
        options: ["for", "of", "to", "with"],
        correctIndex: 0,
        explain: "Collocation: responsible FOR something.",
      },
      {
        id: "t1-5",
        part: 5,
        question: "Please ___ the attached document carefully.",
        options: ["review", "reviewing", "to review", "reviewed"],
        correctIndex: 0,
        explain: "Câu mệnh lệnh dùng động từ nguyên thể.",
      },
      {
        id: "t1-6",
        part: 5,
        question: "The training session was ___ informative.",
        options: ["high", "highly", "height", "higher"],
        correctIndex: 1,
        explain: "Trạng từ (adverb) bổ nghĩa cho tính từ → 'highly'.",
      },
      {
        id: "t1-7",
        part: 5,
        question: "We received many ___ about the new product.",
        options: ["complain", "complained", "complaints", "complaining"],
        correctIndex: 2,
        explain: "Sau 'many' cần danh từ đếm được số nhiều.",
      },
      {
        id: "t1-8",
        part: 5,
        question: "If you have any questions, please ___ contact me.",
        options: ["do not hesitate to", "not hesitate to", "no hesitate", "hesitate not"],
        correctIndex: 0,
        explain: "Cụm cố định công sở: 'do not hesitate to + V'.",
      },
      {
        id: "t1-9",
        part: 5,
        question: "The conference will be held ___ the Hilton Hotel.",
        options: ["in", "at", "on", "to"],
        correctIndex: 1,
        explain: "At + địa điểm cụ thể.",
      },
      {
        id: "t1-10",
        part: 5,
        question: "Sales have increased ___ 20% this quarter.",
        options: ["by", "on", "in", "of"],
        correctIndex: 0,
        explain: "Increase BY + số liệu (mức tăng).",
      },
    ],
  },
  {
    id: "toeic-mini-2",
    title: "Mini Test 2 — Reading Part 7",
    description: "5 câu đọc hiểu một email công việc. Thời gian: 6 phút.",
    timeLimitSec: 6 * 60,
    questions: [
      {
        id: "t2-1",
        part: 7,
        passage:
          "From: Sarah Chen <s.chen@globaltech.com>\nTo: All Marketing Team\nSubject: Q4 Campaign Kickoff Meeting\n\nHi team,\n\nI'd like to schedule our Q4 campaign kickoff meeting for next Thursday, October 28th, at 2:00 PM in Conference Room B. The meeting should last approximately 90 minutes.\n\nPlease come prepared with:\n• Your preliminary campaign ideas\n• Budget estimates from your respective channels\n• A brief update on Q3 performance\n\nIf you cannot attend in person, please join via the Zoom link I'll send tomorrow. Please confirm your attendance by Tuesday EOD.\n\nThanks,\nSarah",
        question: "What is the main purpose of this email?",
        options: [
          "To cancel a meeting",
          "To announce a meeting and request preparation",
          "To report Q3 results",
          "To introduce a new team member",
        ],
        correctIndex: 1,
      },
      {
        id: "t2-2",
        part: 7,
        passage:
          "From: Sarah Chen <s.chen@globaltech.com>\nTo: All Marketing Team\nSubject: Q4 Campaign Kickoff Meeting\n\nHi team,\n\nI'd like to schedule our Q4 campaign kickoff meeting for next Thursday, October 28th, at 2:00 PM in Conference Room B. The meeting should last approximately 90 minutes.\n\nPlease come prepared with:\n• Your preliminary campaign ideas\n• Budget estimates from your respective channels\n• A brief update on Q3 performance\n\nIf you cannot attend in person, please join via the Zoom link I'll send tomorrow. Please confirm your attendance by Tuesday EOD.\n\nThanks,\nSarah",
        question: "When is the meeting scheduled?",
        options: [
          "Tuesday at 2:00 PM",
          "Thursday, October 28th at 2:00 PM",
          "Thursday at 9:00 AM",
          "October 28th at 9:00 PM",
        ],
        correctIndex: 1,
      },
      {
        id: "t2-3",
        part: 7,
        passage:
          "From: Sarah Chen <s.chen@globaltech.com>\nTo: All Marketing Team\nSubject: Q4 Campaign Kickoff Meeting\n\nHi team,\n\nI'd like to schedule our Q4 campaign kickoff meeting for next Thursday, October 28th, at 2:00 PM in Conference Room B. The meeting should last approximately 90 minutes.\n\nPlease come prepared with:\n• Your preliminary campaign ideas\n• Budget estimates from your respective channels\n• A brief update on Q3 performance\n\nIf you cannot attend in person, please join via the Zoom link I'll send tomorrow. Please confirm your attendance by Tuesday EOD.\n\nThanks,\nSarah",
        question: "Which of the following is NOT mentioned as a preparation item?",
        options: [
          "Campaign ideas",
          "Budget estimates",
          "Q3 performance update",
          "Customer feedback report",
        ],
        correctIndex: 3,
      },
      {
        id: "t2-4",
        part: 7,
        passage:
          "From: Sarah Chen <s.chen@globaltech.com>\nTo: All Marketing Team\nSubject: Q4 Campaign Kickoff Meeting\n\nHi team,\n\nI'd like to schedule our Q4 campaign kickoff meeting for next Thursday, October 28th, at 2:00 PM in Conference Room B. The meeting should last approximately 90 minutes.\n\nPlease come prepared with:\n• Your preliminary campaign ideas\n• Budget estimates from your respective channels\n• A brief update on Q3 performance\n\nIf you cannot attend in person, please join via the Zoom link I'll send tomorrow. Please confirm your attendance by Tuesday EOD.\n\nThanks,\nSarah",
        question: "By when must team members confirm attendance?",
        options: ["Monday morning", "Tuesday end of day", "Wednesday", "Thursday before meeting"],
        correctIndex: 1,
        explain: "'EOD' = End of Day = cuối ngày làm việc.",
      },
      {
        id: "t2-5",
        part: 7,
        passage:
          "From: Sarah Chen <s.chen@globaltech.com>\nTo: All Marketing Team\nSubject: Q4 Campaign Kickoff Meeting\n\nHi team,\n\nI'd like to schedule our Q4 campaign kickoff meeting for next Thursday, October 28th, at 2:00 PM in Conference Room B. The meeting should last approximately 90 minutes.\n\nPlease come prepared with:\n• Your preliminary campaign ideas\n• Budget estimates from your respective channels\n• A brief update on Q3 performance\n\nIf you cannot attend in person, please join via the Zoom link I'll send tomorrow. Please confirm your attendance by Tuesday EOD.\n\nThanks,\nSarah",
        question: "What option is given to those who cannot attend in person?",
        options: [
          "Send a written report",
          "Reschedule the meeting",
          "Join via Zoom",
          "Send a colleague",
        ],
        correctIndex: 2,
      },
    ],
  },
];
