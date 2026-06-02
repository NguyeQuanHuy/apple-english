# EnglishStart

> Nền tảng học tiếng Anh cho người Việt mất gốc.
> A0 → A2 • TOEIC • Mini Games • Gamified

Một MVP độc lập với SpeakNest. Tech: Next.js 15, TypeScript, Tailwind, Framer Motion, Zustand. **Không cần backend** ở giai đoạn này — toàn bộ tiến độ học lưu ở `localStorage`. Khi muốn lưu cloud, wire vào Supabase sau (đã quen làm rồi).

---

## 🚀 Cài đặt nhanh (GitHub Codespaces)

Bạn đang ở Codespaces — paste lần lượt 4 block lệnh sau vào terminal.

### Bước 1 — Giải nén & vào thư mục

Sau khi tải `englishstart.zip` về và upload vào Codespaces (kéo thả vào file explorer bên trái, hoặc dùng nút Upload), chạy:

```bash
cd /workspaces/$(basename $(pwd))
unzip -q englishstart.zip
cd englishstart
ls
```

Bạn sẽ thấy: `app/`, `components/`, `data/`, `lib/`, `package.json`...

### Bước 2 — Cài dependencies

```bash
npm install
```

Khoảng 30–60 giây. Cảnh báo `peer dependency` có thể bỏ qua.

### Bước 3 — Chạy dev server

```bash
npm run dev
```

Codespaces sẽ tự động hiện popup "Open in Browser" cho port 3000. Bấm vào đó. Không hiện popup thì:
- Mở tab **PORTS** ở thanh dưới VS Code
- Tìm port `3000`, click vào icon "globe" 🌐

Bạn sẽ thấy homepage EnglishStart.

### Bước 4 — Build production (khi muốn deploy)

```bash
npm run build
npm start
```

Hoặc deploy lên Vercel y hệt SpeakNest: push lên GitHub repo mới → import vào Vercel → tự động deploy.

---

## 📂 Cấu trúc dự án

```
englishstart/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout + fonts + theme
│   ├── globals.css               # Tailwind + paper aesthetic
│   ├── page.tsx                  # Homepage
│   ├── learn/
│   │   ├── beginner/             # A0→A2 lộ trình
│   │   │   ├── page.tsx          # Roadmap units + lessons
│   │   │   └── [slug]/page.tsx   # Lesson player
│   │   ├── toeic/                # TOEIC section
│   │   │   ├── page.tsx          # Index
│   │   │   ├── theme/[id]/...    # Flashcard chủ đề
│   │   │   └── test/[id]/...     # Mock test timed
│   │   └── topics/               # Theo chủ đề
│   ├── games/                    # 3 mini games
│   │   ├── match/                # Ghép từ
│   │   ├── sentence/             # Xếp câu
│   │   └── fast-quiz/            # Quiz tốc độ
│   ├── dashboard/                # Tiến độ, achievements
│   └── test/                     # Redirect → TOEIC
├── components/
│   ├── top-bar.tsx               # Navigation + XP/streak indicator
│   ├── theme-provider.tsx        # Dark mode
│   └── lessons/
│       └── lesson-player.tsx     # Intro → Vocab → Grammar → Quiz
├── data/                         # Sample data (mở rộng được)
│   ├── beginner-lessons.ts       # 6 bài học A0–A2
│   ├── toeic.ts                  # 3 themes + 2 mock tests
│   ├── topics.ts                 # 4 chủ đề
│   └── games.ts                  # Word bank cho games
├── lib/
│   ├── store.ts                  # Zustand: XP, streak, achievements
│   └── cn.ts                     # className utility
├── tailwind.config.ts            # Theme tokens (ember, teal, paper)
└── package.json
```

---

## 🎨 Triết lý thiết kế

- **Aesthetic**: "Playful study journal" — paper background + warm orange (ember) + teal accent. Khác Duolingo (xanh lá) để không bị nhầm.
- **Typography**: Fraunces (display, có character) + Plus Jakarta Sans (body)
- **Bump button**: Nút có shadow phía dưới, "ấn xuống" khi click — feeling tactile như Duolingo
- **Mobile-first**: Hoạt động tốt từ 360px

---

## 🧠 Gamification (đã có)

Lưu ở `localStorage` qua Zustand persist middleware.

| Khái niệm | Ghi chú |
|---|---|
| **XP** | +20–35 mỗi bài học, +15 mỗi flashcard set, +10 mỗi câu game đúng, +5 mỗi câu TOEIC đúng + 20 bonus hoàn thành đề |
| **Streak** | Tự +1 khi học bất kỳ ngày mới. Bỏ 1 ngày → reset về 1 |
| **Level** | 5 tier: Beginner (0–200) → Elementary → Pre-Int → Intermediate → Advanced (2400+) |
| **Achievements** | 8 badge, tự unlock dựa trên XP/streak/lessons/tests/games |

Reset toàn bộ tiến độ: vào `/dashboard` → nút **Reset** ở góc phải.

---

## 🛠️ Mở rộng thế nào?

### Thêm bài học mới (A0–A2)
Mở `data/beginner-lessons.ts`, thêm object vào array `BEGINNER_LESSONS`. Sau đó thêm `id` vào `BEGINNER_PATH` để hiển thị trên roadmap. Hỗ trợ 4 loại step: `intro`, `vocab`, `grammar`, `quiz`.

### Thêm đề TOEIC
Mở `data/toeic.ts`. Format giống `toeic-mini-1`. `timeLimitSec` tính bằng giây.

### Thêm Mini game thứ 4
1. Tạo `app/games/your-game/page.tsx`
2. Thêm card vào `app/games/page.tsx`
3. Trong logic, gọi `useProgress().addXp(n)` và `incrementGamesPlayed()`

### Wire vào Supabase (sau này)
File `lib/store.ts` hiện dùng `persist` middleware ghi localStorage. Để đồng bộ Supabase:
1. Sau mỗi action thay đổi state, gọi `supabase.from('user_progress').upsert({...})`
2. Khi mount, fetch từ Supabase và hydrate state
3. Tốt nhất tạo `lib/sync.ts` riêng, không mix vào store

---

## 📋 Những gì còn THIẾU vs spec gốc

Mình thẳng thắn về scope:

| Tính năng | Status | Note |
|---|---|---|
| Homepage + 4 CTA | ✅ Đủ |  |
| Beginner A0→A2 (6 bài) | ✅ Đủ chạy demo | Cần thêm ~30 bài để A2 thực sự |
| TOEIC vocab themes (3) | ✅ |  |
| TOEIC mock test timed (2) | ✅ Đủ | Mỗi đề 5–10 câu, đề thật cần 100 câu |
| Topics (4 chủ đề) | ✅ |  |
| Mini games (3) | ✅ Đủ |  |
| Dashboard + achievements | ✅ |  |
| Dark mode | ✅ |  |
| Mobile responsive | ✅ |  |
| **Pronunciation/audio thật** | ❌ | UI mock, cần TTS hoặc record |
| **Audio listening** | ❌ | Cần file audio TOEIC Part 1–4 |
| **Auth / cloud sync** | ❌ | Cố ý — wire Supabase sau |
| **Leaderboard** | ❌ | Cần backend |
| **Spaced repetition** | ❌ | Cần thuật toán SM-2 |
| **Payment / paywall** | ❌ | Đây là việc tiếp theo nếu muốn ra tiền |

---

## 💰 Bước tiếp theo nếu muốn monetize

Vài góp ý thẳng:

1. **Đừng build thêm features.** Hiện đã đủ để có người dùng test. Việc tiếp theo là **lấy 10 user thật** dùng thử, hỏi họ kẹt ở đâu.
2. **Paywall ở chỗ nào?** Đề xuất: free 3 bài đầu Beginner + 1 đề TOEIC mini + match game không giới hạn. Trả phí mới: full lộ trình + tất cả đề + sentence game + fast-quiz.
3. **Stripe vs Lemon Squeezy?** Ở Đức, Lemon Squeezy handle EU VAT tự động — đỡ đau đầu hơn Stripe nhiều. Người Việt thanh toán bằng thẻ quốc tế hoặc PayPal.
4. **SEO blog (SpeakNest đang làm)** — tận dụng tiếp tục. Mỗi post link sang đây kèm CTA "thử bài học miễn phí". Cùng phễu.

---

## 🆘 Troubleshooting

**Lỗi "Module not found: framer-motion"**
→ `npm install` lại

**Trang trắng, console báo hydration error**
→ Hiếm gặp ở project này (đã handle `mounted` state). Nếu xảy ra: refresh, hoặc xóa localStorage key `englishstart-progress`

**Tailwind không apply style**
→ Check terminal có dòng `tailwindcss` đang watch không. Nếu không, restart `npm run dev`

**Port 3000 đã dùng**
→ `npm run dev -- -p 3001`

---

Build cho Huy — Erfurt, Đức 🇩🇪→🇻🇳
