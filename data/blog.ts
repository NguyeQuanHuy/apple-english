export type BlogPost = {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  tags?: string[,
  {
    "slug": "cach-phat-am-tieng-anh-ro-rang",
    "title": "Cách phát âm tiếng Anh rõ ràng",
    "emoji": "🎤",
    "summary": "Phát âm sai khiến người nghe không hiểu dù ngữ pháp đúng. Hướng dẫn từng bước để phát âm chuẩn.",
    "tags": [
      "Phát âm",
      "Phương pháp"
    ],
    "date": "04/06/2026",
    "readingTime": "6 phút đọc",
    "content": [
      {
        "type": "paragraph",
        "text": "Phát âm tốt không có nghĩa là phải nói giọng Mỹ hoàn hảo. Phát âm tốt có nghĩa là người nghe hiểu bạn ngay lần đầu."
      },
      {
        "type": "heading",
        "text": "Lỗi 1: Nuốt âm cuối"
      },
      {
        "type": "paragraph",
        "text": "Người Việt hay nuốt âm cuối vì tiếng Việt ít phụ âm cuối mạnh."
      },
      {
        "type": "compare",
        "left": "I need your hel",
        "right": "I need your help",
        "leftLabel": "❌ Nuốt âm /p/",
        "rightLabel": "✅ Rõ âm cuối"
      },
      {
        "type": "list",
        "items": [
          "/p/ cuối: stop, help — môi chạm nhau",
          "/t/ cuối: cat, not — lưỡi chạm răng trên",
          "/k/ cuối: back, work — ngừng hơi ở họ ngực"
        ]
      },
      {
        "type": "heading",
        "text": "Lỗi 2: Âm /th/ đọc sai"
      },
      {
        "type": "vocab",
        "word": "/th/ không thanh",
        "meaning": "Lưỡi giữa 2 hàng răng, thổi hơi",
        "example": "think, three, thank, thin"
      },
      {
        "type": "vocab",
        "word": "/th/ có thanh",
        "meaning": "Giống trên nhưng dây thanh rung",
        "example": "this, that, the, them"
      },
      {
        "type": "callout",
        "emoji": "💡",
        "text": "Cách luyện: Đặt gương trước mặt. Lưỡi phải thấy giữa 2 hàng răng khi đọc /th/."
      },
      {
        "type": "heading",
        "text": "Lỗi 3: Sai trọng âm"
      },
      {
        "type": "compare",
        "left": "pho-TO-graph",
        "right": "PHO-to-graph",
        "leftLabel": "❌ Sai",
        "rightLabel": "✅ Đúng"
      },
      {
        "type": "list",
        "items": [
          "Danh từ 2 âm tiết: nhấn âm đầu — TA-ble, MO-ney, PEO-ple",
          "Động từ 2 âm tiết: nhấn âm sau — be-GIN, de-CIDE, re-LAX"
        ]
      },
      {
        "type": "heading",
        "text": "Lỗi 4: Không nối âm"
      },
      {
        "type": "paragraph",
        "text": "Người bản ngữ nói nhanh vì họ nối âm giữa các từ. Nếu bạn ngắt từng từ, nghe rất cơ học."
      },
      {
        "type": "vocab",
        "word": "Phụ âm + Nguyên âm",
        "meaning": "Nối liền giữa 2 từ",
        "example": "turn off → tur-NOFF | pick up → pi-CUP | get in → ge-TIN"
      },
      {
        "type": "heading",
        "text": "Lịch luyện 10 phút mỗi ngày"
      },
      {
        "type": "list",
        "items": [
          "Phút 1-2: Đọc to 10 từ có âm cuối khó (stop, help, back, ask)",
          "Phút 3-4: Luyện /th/ — đọc 5 câu có the, this, think, three",
          "Phút 5-6: Shadowing 1 đoạn phim ngắn có phụ đề tiếng Anh",
          "Phút 7-10: Ghi âm bản thân nói 5 câu, nghe lại và so sánh"
        ]
      },
      {
        "type": "callout",
        "emoji": "🌟",
        "text": "Công cụ miễn phí nên dùng: ELSA Speak (app luyện phát âm AI), YouGlish (nghe phát âm trong video thực tế), Forvo (nghe phát âm chuẩn theo từng từ)."
      },
      {
        "type": "quote",
        "text": "Phát âm không cần hoàn hảo — cần đủ rõ để người ta hiểu ngay. Và điều đó chỉ cần 10 phút luyện mỗi ngày trong 1 tháng."
      }
    ]
  }
];
  date?: string;
  readingTime?: string;
  content: object[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tai-sao-hoc-tieng-anh-mai-khong-gioi",
    title: "Tại sao học tiếng Anh mãi mà không giỏi?",
    emoji: "🤔",
    summary: "Bạn học tiếng Anh nhiều năm nhưng vẫn không nói được? Đây là lý do thật sự và cách fix.",
    tags: ["Kinh nghiệm", "Mất gốc"],
    date: "01/06/2026",
    readingTime: "4 phút đọc",
    content: [
      { type: "paragraph", text: "Nhieu nguoi hoc tieng Anh 7-10 nam o truong nhung ra duong gap nguoi nuoc ngoai van... dung hinh. Khong phai vi ban kem, ma vi cach hoc co van de." },
      { type: "heading", text: "1. Hoc de thi, khong hoc de dung" },
      { type: "paragraph", text: "He thong giao duc Viet Nam tap trung vao ngu phap va dich thuat. Ban co the lam bai thi tot nhung khong the noi chuyen duoc vi nao chua quen xu ly tieng Anh theo thoi gian thuc." },
      { type: "callout", emoji: "💡", text: "Fix: Moi ngay danh 10 phut noi to bang tieng Anh, du chi noi mot minh. Nao can luyen phan xa, khong chi ly thuyet." },
      { type: "heading", text: "2. Hoc tung tu rieng le, khong hoc theo ngu canh" },
      { type: "paragraph", text: "Hoc 50 tu vung nhung khong biet dung trong cau nao. Từ vựng can gan voi tinh huong thuc te moi nho lau." },
      { type: "compare", left: "Hoc: happy = vui", right: "Hoc: I feel happy when I eat pho", leftLabel: "De quen", rightLabel: "Nho lau" },
      { type: "heading", text: "3. So sai nen khong dam noi" },
      { type: "paragraph", text: "Nguoi Viet thuong so noi sai bi cuoi. Nhung thuc te, nguoi ban ngu khong quan tam ban sai ngu phap — ho chi can hieu y ban." },
      { type: "quote", text: "Noi sai ma nguoi ta hieu con hon im lang vi so sai." }
    ]
  },
  {
    slug: "10-phut-hoc-tieng-anh-moi-ngay",
    title: "Chỉ cần 10 phút mỗi ngày để cải thiện tiếng Anh",
    emoji: "⏰",
    summary: "Không cần học 2-3 tiếng mỗi ngày. 10 phút đúng cách còn hiệu quả hơn 1 tiếng học sai phương pháp.",
    tags: ["Phương pháp", "Mất gốc"],
    date: "28/05/2026",
    readingTime: "3 phút đọc",
    content: [
      { type: "paragraph", text: "Ban ban di lam, di hoc, khong co thoi gian ngoi hoc 2 tieng moi ngay. Tin tot la ban khong can nhieu den vay." },
      { type: "heading", text: "Lich 10 phut moi ngay" },
      { type: "list", items: ["Phut 1-3: On 5 tu vung hom qua", "Phut 4-6: Hoc 3 tu moi co vi du cau", "Phut 7-9: Doc to 1 doan van ngan hoac lam 1 mini quiz", "Phut 10: Viet 1 cau tieng Anh ve ngay hom nay cua ban"] },
      { type: "callout", emoji: "🔥", text: "Quan trong nhat: lam DUNG GIO DO moi ngay. Sang sau khi thuc day, hoac toi truoc khi ngu. Bien no thanh thoi quen nhu danh rang." },
      { type: "quote", text: "Consistency beats intensity. Hoc it moi ngay thang hoc nhieu mot lan." }
    ]
  },
  {
    slug: "tu-vung-toeic-can-biet",
    title: "100 từ vựng TOEIC người mất gốc cần biết nhất",
    emoji: "📚",
    summary: "Không cần học hết 10.000 từ. Đây là 100 từ xuất hiện nhiều nhất trong đề TOEIC mà bạn nên học trước.",
    tags: ["TOEIC", "Từ vựng"],
    date: "25/05/2026",
    readingTime: "5 phút đọc",
    content: [
      { type: "paragraph", text: "TOEIC co khoang 600-800 tu vung hay xuat hien. Trong do, 100 tu duoi day chiem khoang 40% tan suat. Hoc chung truoc la chien luoc khon ngoan." },
      { type: "heading", text: "Nhom 1: Cong viec van phong" },
      { type: "vocab", word: "schedule", meaning: "lich trinh, sap xep", example: "Please schedule a meeting for Monday." },
      { type: "vocab", word: "deadline", meaning: "han chot", example: "The deadline is this Friday." },
      { type: "vocab", word: "submit", meaning: "nop, gui", example: "Please submit your report by 5 PM." },
      { type: "vocab", word: "approve", meaning: "phe duyet", example: "The manager approved the budget." },
      { type: "heading", text: "Nhom 2: Tai chinh" },
      { type: "vocab", word: "budget", meaning: "ngan sach", example: "We need to cut the budget this quarter." },
      { type: "vocab", word: "invoice", meaning: "hoa don", example: "Please send the invoice to accounting." },
      { type: "vocab", word: "revenue", meaning: "doanh thu", example: "Revenue increased by 20% this year." },
      { type: "callout", emoji: "📝", text: "Meo: Hoc moi tu kem 1 cau vi du. Dung chi hoc nghia. Nao se nho ngu canh tot hon la dinh nghia tran." }
    ]
  },
  {
    slug: "loi-phat-am-nguoi-viet-hay-mac",
    title: "5 lỗi phát âm tiếng Anh người Việt hay mắc nhất",
    emoji: "🗣️",
    summary: "Phát âm sai khien nguoi nghe khong hieu du grammar dung. Kiem tra xem ban co dang mac loi nao khong.",
    tags: ["Phát âm", "Kinh nghiệm"],
    date: "20/05/2026",
    readingTime: "4 phút đọc",
    content: [
      { type: "paragraph", text: "Tieng Viet va tieng Anh co he thong am hoan toan khac nhau. Vi vay nguoi Viet thuong mac mot so loi phat am dac trung ma chinh minh khong nhan ra." },
      { type: "heading", text: "Loi 1: Khong doc am cuoi" },
      { type: "compare", left: "stop doc thanh sto", right: "stop - ro am /p/ cuoi", leftLabel: "Sai", rightLabel: "Dung" },
      { type: "heading", text: "Loi 2: Nham /l/ va /n/ cuoi cau" },
      { type: "compare", left: "final doc thanh finan", right: "final - am /l/ ro rang", leftLabel: "Sai", rightLabel: "Dung" },
      { type: "callout", emoji: "🎯", text: "Cach luyen: Dung truoc guong, tap dat dau luoi cham nhe vao rang tren khi doc th. Lam 5 phut moi ngay trong 1 tuan." }
    ]
  },
  {
    slug: "cach-hoc-ngu-phap-khong-chan",
    title: "Cách học ngữ pháp tiếng Anh mà không bị chán",
    emoji: "✏️",
    summary: "Ngữ pháp khong nham chan neu ban hoc dung cach. Bi quyet la hoc qua cau chuyen, khong hoc qua bang quy tac.",
    tags: ["Ngữ pháp", "Phương pháp"],
    date: "15/05/2026",
    readingTime: "3 phút đọc",
    content: [
      { type: "paragraph", text: "Hau het moi nguoi hoc ngu phap bang cach doc bang quy tac roi lam bai tap dien vao cho trong. Cach nay chan va khong hieu qua." },
      { type: "callout", emoji: "💡", text: "Nao nguoi hoc theo pattern (mau), khong hoc theo quy tac. Khi ban thay du vi du, nao tu rut ra quy tac ma khong can ban co nho." },
      { type: "list", items: ["To be (am/is/are): I am a student. She is happy.", "Simple Present: I work in Germany. He works at a cafe.", "Present Continuous: I am studying English right now."] },
      { type: "quote", text: "Hoc ngu phap du de khong hieu sai, dung hoc de hoan hao. Nguoi ban ngu cung noi sai ngu phap." }
    ]
  },
  {
    slug: "toeic-450-trong-2-thang",
    title: "TOEIC 450 điểm trong 2 tháng — ke hoach on thi thuc te",
    emoji: "🎯",
    summary: "Không cần trung tâm đắt tiền. Day la ke hoach on TOEIC 450 điểm trong 2 tháng danh cho nguoi mat goc.",
    tags: ["TOEIC", "Lộ trình"],
    date: "03/06/2026",
    readingTime: "6 phút đọc",
    content: [
      { type: "paragraph", text: "TOEIC 450 diem la muc diem toi thieu nhieu cong ty Viet Nam yeu cau. Tin tot la: day khong phai muc diem kho neu ban co ke hoach dung va hoc deu dan 2 thang." },
      { type: "callout", emoji: "📌", text: "Bai viet nay danh cho nguoi hien tai chua thi TOEIC bao gio hoac da thi duoi 300 diem. Neu ban dang o 350-400, lo trinh nay van ap dung duoc." },
      { type: "heading", text: "TOEIC 450 can gi?" },
      { type: "paragraph", text: "TOEIC gom 2 phan: Listening (495 diem) va Reading (495 diem). De dat 450 tong, ban can khoang 200-250 moi phan." },
      { type: "list", items: [
        "Listening: 100 cau — Part 1 (anh), Part 2 (hoi-dap), Part 3 (hoi thoai), Part 4 (bai noi)",
        "Reading: 100 cau — Part 5 (dien tu), Part 6 (doan van ngan), Part 7 (doc hieu)",
        "Thoi gian: 2 tieng dong ho thi lien tuc",
        "Muc tieu 450: dung ~45/100 Listening + ~45/100 Reading"
      ]},
      { type: "heading", text: "Thang 1 — Xay nen tang (tuan 1-4)" },
      { type: "list", items: [
        "Tuan 1-2: Hoc 200 tu vung TOEIC co ban. Moi ngay 15 tu.",
        "Tuan 2-3: Luyen nghe Part 1 va Part 2 — day la phan de nhat, phai chac chan lay diem toi da.",
        "Tuan 3-4: Luyen Part 5 (dien tu) — on lai ngu phap co ban."
      ]},
      { type: "callout", emoji: "⏰", text: "Thoi gian hoc thang 1: 30-40 phut/ngay. Quan trong la HOC DEU moi ngay, khong bo ngay nao." },
      { type: "heading", text: "Thang 2 — Luyen de va chien thuat (tuan 5-8)" },
      { type: "list", items: [
        "Tuan 5-6: Lam 2-3 mini test moi tuan, phan tich tung cau sai.",
        "Tuan 6-7: Tap trung Part 3, Part 4 (Listening) va Part 7 (Reading).",
        "Tuan 7-8: Lam 2 full mock test co dong ho bam gio. Tap quan ly thoi gian."
      ]},
      { type: "compare", left: "Doc het bai roi moi doc cau hoi", right: "Doc cau hoi truoc, scan bai tim dap an", leftLabel: "Cham, de het gio", rightLabel: "Tiet kiem 30% thoi gian" },
      { type: "callout", emoji: "🏆", text: "Meo cuoi: Dang ky thi som (truoc 3 tuan). Co deadline thi that se giup ban hoc nghiem tuc hon han." },
      { type: "quote", text: "2 thang x 30 phut/ngay = 60 tieng hoc. Du de dat 450 neu ban hoc dung huong." }
    ]
  },
  {
    slug: "30-thanh-ngu-pho-bien-tieng-anh",
    title: "30 thành ngữ phổ biến nhất trong tiếng Anh",
    emoji: "💬",
    summary: "Người bản ngữ nói chuyện đầy thành ngữ. Hoc 30 cau nay de hieu phim, nhac va giao tiep tu nhien hon hẳn.",
    tags: ["Từ vựng", "Giao tiếp"],
    date: "03/06/2026",
    readingTime: "7 phút đọc",
    content: [
      { type: "paragraph", text: "Neu ban da hoc tieng Anh co ban nhung van thay kho hieu nguoi ban ngu noi — co the ban dang thieu thanh ngu. Day la nhung cum tu co nghia khac hoan toan voi nghia den cua tung tu." },
      { type: "callout", emoji: "💡", text: "Meo: Dung dich thanh ngu theo tung tu. Hay hoc ca cum + nghia + tinh huong su dung. Nao se nho lau hon nhieu." },
      { type: "heading", text: "Nhom 1: Thanh ngu ve cuoc song hang ngay" },
      { type: "vocab", word: "Break a leg", meaning: "Chuc may man! (dung truoc khi bieu dien/thi)", example: "You have an interview today? Break a leg!" },
      { type: "vocab", word: "Hit the sack", meaning: "Di ngu", example: "I am exhausted. Time to hit the sack." },
      { type: "vocab", word: "Bite the bullet", meaning: "Can rang chiu dung, chap nhan viec kho khan", example: "Just bite the bullet and go to the dentist." },
      { type: "vocab", word: "Under the weather", meaning: "Cam thay khong khoe, om yeu", example: "I am feeling a bit under the weather today." },
      { type: "vocab", word: "Beat around the bush", meaning: "Vong vo, khong noi thang vao van de", example: "Stop beating around the bush and tell me the truth." },
      { type: "heading", text: "Nhom 2: Thanh ngu ve cong viec" },
      { type: "vocab", word: "Back to the drawing board", meaning: "Lam lai tu dau", example: "The plan failed. Back to the drawing board." },
      { type: "vocab", word: "Get the ball rolling", meaning: "Bat dau cong viec, khoi dong", example: "Let us get the ball rolling on this project." },
      { type: "vocab", word: "On the same page", meaning: "Hieu y nhau, dong quan diem", example: "Before we start, let us make sure we are on the same page." },
      { type: "vocab", word: "Burn the midnight oil", meaning: "Thuc khuya lam viec hoc bai", example: "I had to burn the midnight oil to finish the report." },
      { type: "vocab", word: "Cut corners", meaning: "Lam qua loa, bo qua buoc de tiet kiem thoi gian", example: "Do not cut corners on safety procedures." },
      { type: "heading", text: "Nhom 3: Thanh ngu ve con nguoi va tinh cach" },
      { type: "vocab", word: "A piece of cake", meaning: "Rat de, khong co gi kho ca", example: "The exam was a piece of cake." },
      { type: "vocab", word: "Couch potato", meaning: "Nguoi luoi, chi ngoi xem TV suot ngay", example: "Do not be a couch potato all weekend." },
      { type: "vocab", word: "Hit the nail on the head", meaning: "Noi dung vao ban chat van de", example: "You hit the nail on the head with that analysis." },
      { type: "vocab", word: "Speak of the devil", meaning: "Vua noi den la xuat hien (nhu co phep)", example: "Speak of the devil — there is John now!" },
      { type: "vocab", word: "Once in a blue moon", meaning: "Rat hiem khi", example: "He only calls me once in a blue moon." },
      { type: "heading", text: "Nhom 4: Thanh ngu ve tien bac va gia tri" },
      { type: "vocab", word: "Cost an arm and a leg", meaning: "Rat dat", example: "That new phone costs an arm and a leg." },
      { type: "vocab", word: "Break the bank", meaning: "Ton rat nhieu tien", example: "We want a vacation that does not break the bank." },
      { type: "vocab", word: "On a shoestring", meaning: "Voi ngan sach rat it", example: "We built this website on a shoestring budget." },
      { type: "vocab", word: "Pay through the nose", meaning: "Phai tra gia cao qua muc", example: "We paid through the nose for the hotel in Paris." },
      { type: "heading", text: "Nhom 5: Thanh ngu ve tinh huong kho khan" },
      { type: "vocab", word: "In hot water", meaning: "Dang gap rac roi, trong tinh trang kho xu", example: "He is in hot water with his boss again." },
      { type: "vocab", word: "Hit rock bottom", meaning: "Cham day, o diem thap nhat", example: "After losing his job he hit rock bottom." },
      { type: "vocab", word: "Bite off more than you can chew", meaning: "Nhan nhieu viec hon kha nang xu ly", example: "I bit off more than I could chew with 3 projects at once." },
      { type: "vocab", word: "Burn bridges", meaning: "Pha vo moi quan he, khong the quay lai", example: "Do not burn bridges with your old employer." },
      { type: "vocab", word: "Caught between a rock and a hard place", meaning: "Tinh huong kho xu, chon gi cung kho", example: "I am caught between a rock and a hard place with this decision." },
      { type: "heading", text: "Nhom 6: Thanh ngu hay gap trong phim va nhac" },
      { type: "vocab", word: "Spill the beans", meaning: "Tiet lo bi mat", example: "Who spilled the beans about the surprise party?" },
      { type: "vocab", word: "Let the cat out of the bag", meaning: "Vo tinh tiet lo bi mat", example: "She let the cat out of the bag about the promotion." },
      { type: "vocab", word: "Kill two birds with one stone", meaning: "Mot muoi hai nham, giai quyet 2 viec cung luc", example: "I will kill two birds with one stone by meeting him at the gym." },
      { type: "vocab", word: "The ball is in your court", meaning: "Den luot ban quyet dinh", example: "I have done my part. The ball is in your court now." },
      { type: "vocab", word: "Bite the dust", meaning: "That bai, chiu thua", example: "Another startup bites the dust this year." },
      { type: "compare", left: "I am under the weather", right: "Toi dang om / khong khoe", leftLabel: "Tieng Anh tu nhien", rightLabel: "Nghia thuc su" },
      { type: "callout", emoji: "🎬", text: "Cach hoc nhanh nhat: Xem phim My/Anh khong phu de, gap thanh ngu nao khong hieu thi dung lai tra ngay. Nao se nho rat lau vi ban gap no trong tinh huong that." },
      { type: "quote", text: "Biet thanh ngu la dau hieu ban da vuot qua nguong hoc tieng Anh co ban — ban dang bat dau tu duy nhu nguoi ban ngu." }
    ]
  }
];
