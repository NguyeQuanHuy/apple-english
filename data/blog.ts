export type BlogPost = {
  slug: string;
  title: string;
  emoji: string;
  summary: string;
  tags?: string[];
  date?: string;
  readingTime?: string;
  content: object[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "tai-sao-hoc-tieng-anh-mai-khong-gioi",
    title: "Tai sao hoc tieng Anh mai ma khong gioi?",
    emoji: "🤔",
    summary: "Ban hoc tieng Anh nhieu nam nhung van khong noi duoc? Day la ly do that su va cach fix.",
    tags: ["Kinh nghiem", "Mat goc"],
    date: "01/06/2026",
    readingTime: "4 phut doc",
    content: [
      { type: "paragraph", text: "Nhieu nguoi hoc tieng Anh 7-10 nam o truong nhung ra duong gap nguoi nuoc ngoai van... dung hinh. Khong phai vi ban kem, ma vi cach hoc co van de." },
      { type: "heading", text: "1. Hoc de thi, khong hoc de dung" },
      { type: "paragraph", text: "He thong giao duc Viet Nam tap trung vao ngu phap va dich thuat. Ban co the lam bai thi tot nhung khong the noi chuyen duoc vi nao chua quen xu ly tieng Anh theo thoi gian thuc." },
      { type: "callout", emoji: "💡", text: "Fix: Moi ngay danh 10 phut noi to bang tieng Anh, du chi noi mot minh. Nao can luyen phan xa, khong chi ly thuyet." },
      { type: "heading", text: "2. Hoc tung tu rieng le, khong hoc theo ngu canh" },
      { type: "paragraph", text: "Hoc 50 tu vung nhung khong biet dung trong cau nao. Tu vung can gan voi tinh huong thuc te moi nho lau." },
      { type: "compare", left: "Hoc: happy = vui", right: "Hoc: I feel happy when I eat pho", leftLabel: "De quen", rightLabel: "Nho lau" },
      { type: "heading", text: "3. So sai nen khong dam noi" },
      { type: "paragraph", text: "Nguoi Viet thuong so noi sai bi cuoi. Nhung thuc te, nguoi ban ngu khong quan tam ban sai ngu phap — ho chi can hieu y ban." },
      { type: "quote", text: "Noi sai ma nguoi ta hieu con hon im lang vi so sai." }
    ]
  },
  {
    slug: "10-phut-hoc-tieng-anh-moi-ngay",
    title: "Chi can 10 phut moi ngay de cai thien tieng Anh",
    emoji: "⏰",
    summary: "Khong can hoc 2-3 tieng moi ngay. 10 phut dung cach con hieu qua hon 1 tieng hoc sai phuong phap.",
    tags: ["Phuong phap", "Mat goc"],
    date: "28/05/2026",
    readingTime: "3 phut doc",
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
    title: "100 tu vung TOEIC nguoi mat goc can biet nhat",
    emoji: "📚",
    summary: "Khong can hoc het 10.000 tu. Day la 100 tu xuat hien nhieu nhat trong de TOEIC ma ban nen hoc truoc.",
    tags: ["TOEIC", "Tu vung"],
    date: "25/05/2026",
    readingTime: "5 phut doc",
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
    title: "5 loi phat am tieng Anh nguoi Viet hay mac nhat",
    emoji: "🗣️",
    summary: "Phat am sai khien nguoi nghe khong hieu du grammar dung. Kiem tra xem ban co dang mac loi nao khong.",
    tags: ["Phat am", "Kinh nghiem"],
    date: "20/05/2026",
    readingTime: "4 phut doc",
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
    title: "Cach hoc ngu phap tieng Anh ma khong bi chan",
    emoji: "✏️",
    summary: "Ngu phap khong nham chan neu ban hoc dung cach. Bi quyet la hoc qua cau chuyen, khong hoc qua bang quy tac.",
    tags: ["Ngu phap", "Phuong phap"],
    date: "15/05/2026",
    readingTime: "3 phut doc",
    content: [
      { type: "paragraph", text: "Hau het moi nguoi hoc ngu phap bang cach doc bang quy tac roi lam bai tap dien vao cho trong. Cach nay chan va khong hieu qua." },
      { type: "callout", emoji: "💡", text: "Nao nguoi hoc theo pattern (mau), khong hoc theo quy tac. Khi ban thay du vi du, nao tu rut ra quy tac ma khong can ban co nho." },
      { type: "list", items: ["To be (am/is/are): I am a student. She is happy.", "Simple Present: I work in Germany. He works at a cafe.", "Present Continuous: I am studying English right now."] },
      { type: "quote", text: "Hoc ngu phap du de khong hieu sai, dung hoc de hoan hao. Nguoi ban ngu cung noi sai ngu phap." }
    ]
  },
  {
    slug: "toeic-450-trong-2-thang",
    title: "TOEIC 450 diem trong 2 thang — ke hoach on thi thuc te",
    emoji: "🎯",
    summary: "Khong can trung tam dat tien. Day la ke hoach on TOEIC 450 diem trong 2 thang danh cho nguoi mat goc, hoc duoc ngay hom nay.",
    tags: ["TOEIC", "Lo trinh"],
    date: "03/06/2026",
    readingTime: "6 phut doc",
    content: [
      { type: "paragraph", text: "TOEIC 450 diem la muc diem toi thieu nhieu cong ty Viet Nam yeu cau. Tin tot la: day khong phai muc diem kho neu ban co ke hoach dung va hoc deu dan 2 thang." },
      { type: "callout", emoji: "📌", text: "Bai viet nay danh cho nguoi hien tai chua thi TOEIC bao gio hoac da thi duoi 300 diem. Neu ban dang o 350-400, lo trinh nay van ap dung duoc." },
      { type: "heading", text: "TOEIC 450 can gi?" },
      { type: "paragraph", text: "TOEIC gom 2 phan: Listening (495 diem) va Reading (495 diem). De dat 450 tong, ban can khoang 200-250 moi phan — tuc la tra loi dung khoang 45-50% so cau." },
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
        "Tuan 3-4: Luyen Part 5 (dien tu) — on lai ngu phap co ban: to be, thi hien tai, qua khu don."
      ]},
      { type: "callout", emoji: "⏰", text: "Thoi gian hoc thang 1: 30-40 phut/ngay. Khong can nhieu hon. Quan trong la HOC DEU moi ngay." },
      { type: "heading", text: "Thang 2 — Luyen de va chien thuat (tuan 5-8)" },
      { type: "list", items: [
        "Tuan 5-6: Lam 2-3 mini test moi tuan, phan tich tung cau sai.",
        "Tuan 6-7: Tap trung Part 3, Part 4 (Listening) va Part 7 (Reading).",
        "Tuan 7-8: Lam 2 full mock test co dong ho bam gio. Tap quan ly thoi gian."
      ]},
      { type: "heading", text: "Chien thuat lam bai quan trong" },
      { type: "vocab", word: "Part 5 — Dien tu", meaning: "Doc ca cau truoc, xac dinh loai tu can dien, roi moi nhin dap an.", example: "The meeting was ___. (postponed/postpone/postponing) — can qua khu phan tu — postponed" },
      { type: "compare", left: "Doc het bai roi moi doc cau hoi", right: "Doc cau hoi truoc, scan bai tim dap an", leftLabel: "Cham, de het gio", rightLabel: "Tiet kiem 30% thoi gian" },
      { type: "callout", emoji: "🏆", text: "Meo cuoi: Dang ky thi som (truoc 3 tuan). Co deadline thi that se giup ban hoc nghiem tuc hon han." },
      { type: "quote", text: "2 thang x 30 phut/ngay = 60 tieng hoc. Du de dat 450 neu ban hoc dung huong." }
    ]
  }
];
