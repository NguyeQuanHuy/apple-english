// Script: append 3 new themes to TOEIC_THEMES in data/toeic.ts
const fs = require("fs");
const path = "C:/Users/Nguyen Quan Huy/englishstart/data/toeic.ts";

let content = fs.readFileSync(path, "utf8");

// 3 theme mới cần thêm vào cuối TOEIC_THEMES
const newThemes = `,
  {
    id: "idioms",
    title: "Idioms ph\u1ed5 bi\u1ebfn",
    emoji: "\ud83d\udcac",
    description: "Thành ngữ hay gặp trong TOEIC và giao tiếp thực tế",
    words: [
      { en: "a bee in my bonnet", pos: "idiom", vi: "bực bội về một vấn đề cụ thể", example: "He had a bee in his bonnet about the new protocol at work." },
      { en: "add insult to injury", pos: "idiom", vi: "làm tệ hơn một tình huống đã xấu", example: "To add insult to injury, my flight was cancelled after I missed my bus." },
      { en: "a dime a dozen", pos: "idiom", vi: "rất phổ biến, không có gì đặc biệt", example: "Jobs like that are a dime a dozen in this city." },
      { en: "a hard nut to crack", pos: "idiom", vi: "người khó gần, khó hiểu", example: "My boss is a hard nut to crack." },
      { en: "ahead of the pack", pos: "idiom", vi: "dẫn đầu so với người khác", example: "We need to stay ahead of the pack in this market." },
      { en: "hit the books", pos: "idiom", vi: "học bài, ôn tập", example: "Sorry, I can't go out tonight. I have to hit the books." },
      { en: "hit the ground running", pos: "idiom", vi: "bắt đầu và tiến hành nhanh chóng", example: "We need to hit the ground running on this project." },
      { en: "see eye to eye", pos: "idiom", vi: "đồng ý với ai đó", example: "My boss and I don't always see eye to eye." },
      { en: "food for thought", pos: "idiom", vi: "điều đáng suy nghĩ", example: "That article had some food for thought in it." },
      { en: "agree to disagree", pos: "idiom", vi: "thôi không tranh luận nữa khi không thể đồng ý", example: "We finally agreed to disagree on the matter." },
      { en: "second nature", pos: "idiom", vi: "việc dễ dàng vì đã làm quen", example: "Public speaking is second nature to her." },
      { en: "big bucks", pos: "idiom", vi: "lương cao, nhiều tiền", example: "That's why they pay him the big bucks." },
      { en: "for the long haul", pos: "idiom", vi: "về lâu dài", example: "We're in this project for the long haul." },
      { en: "in the red", pos: "idiom", vi: "đang thua lỗ", example: "The company has been in the red for two quarters." },
      { en: "feeling the pinch", pos: "idiom", vi: "gặp khó khăn tài chính", example: "Many small businesses are feeling the pinch." },
      { en: "money to burn", pos: "idiom", vi: "có nhiều tiền dư để tiêu", example: "He acts like he has money to burn." },
      { en: "skyrocketing", pos: "idiom", vi: "tăng nhanh chóng", example: "Housing prices are skyrocketing in this city." },
      { en: "on the backburner", pos: "idiom", vi: "tạm gác lại để xử lý sau", example: "Let's put this plan on the backburner for now." },
      { en: "scale back", pos: "idiom", vi: "giảm quy mô", example: "We need to scale back production this quarter." },
      { en: "a lot on my plate", pos: "idiom", vi: "có nhiều trách nhiệm, rất bận", example: "I have a lot on my plate with these three projects." },
    ],
  },
  {
    id: "phrasal-verbs",
    title: "Phrasal Verbs",
    emoji: "\ud83d\udd17",
    description: "Động từ cụm hay gặp trong TOEIC và giao tiếp công sở",
    words: [
      { en: "goof around", pos: "v.", vi: "đùa giỡn, không nghiêm túc", example: "Stop goofing around — we have work to do." },
      { en: "cut it out", pos: "v.", vi: "dừng lại, thôi đi", example: "Hey, cut it out! That's not funny." },
      { en: "wear down", pos: "v.", vi: "làm mệt mỏi, bào mòn", example: "The long hours are starting to wear me down." },
      { en: "lighten up", pos: "v.", vi: "thư giãn, đừng nghiêm túc quá", example: "Lighten up! It's just a game." },
      { en: "get away with", pos: "v.", vi: "làm sai mà không bị phạt", example: "You can't get away with that in a professional setting." },
      { en: "trade in", pos: "v.", vi: "đổi cái cũ lấy cái mới", example: "I'd like to trade in my old laptop for a newer model." },
      { en: "work something out", pos: "v.", vi: "thỏa thuận, giải quyết", example: "I'm sure we can work something out." },
      { en: "point out", pos: "v.", vi: "chỉ ra, nhấn mạnh", example: "She pointed out several errors in the report." },
      { en: "talk into", pos: "v.", vi: "thuyết phục ai làm gì", example: "He talked me into joining the project." },
      { en: "stick to", pos: "v.", vi: "tuân thủ, không vượt quá", example: "We need to stick to the budget." },
      { en: "look around", pos: "v.", vi: "nhìn xung quanh, xem xét", example: "Let's look around before making a decision." },
      { en: "go down", pos: "v.", vi: "giảm giá, hạ xuống", example: "Can you go down a bit on the price?" },
      { en: "burn out", pos: "v.", vi: "kiệt sức vì làm việc quá nhiều", example: "She burned out after working 70-hour weeks." },
      { en: "wrap up", pos: "v.", vi: "kết thúc, hoàn tất", example: "Let's wrap up the meeting — we're running late." },
      { en: "brush up", pos: "v.", vi: "ôn lại, trau dồi kỹ năng", example: "I need to brush up on my Excel skills." },
      { en: "bring on", pos: "v.", vi: "gây ra, bắt đầu", example: "What brought on this sudden change in strategy?" },
      { en: "break down", pos: "v.", vi: "hỏng hóc / phân tích chi tiết", example: "The machine broke down during the presentation." },
      { en: "give away", pos: "v.", vi: "cho đi / vô tình tiết lộ", example: "Don't give away the surprise!" },
      { en: "cheer on", pos: "v.", vi: "cổ vũ, động viên", example: "The whole team cheered on their colleague." },
      { en: "ask for", pos: "v.", vi: "yêu cầu, xin", example: "Don't be afraid to ask for help when you need it." },
    ],
  },
  {
    id: "collocations",
    title: "Business Collocations",
    emoji: "\ud83e\udd1d",
    description: "Cụm từ kết hợp tự nhiên trong môi trường kinh doanh TOEIC",
    words: [
      { en: "house hunting", pos: "colloc.", vi: "tìm nhà để mua/thuê", example: "We spent the whole weekend house hunting." },
      { en: "down payment", pos: "colloc.", vi: "tiền đặt cọc/trả trước khi mua nhà", example: "You'll need a 20% down payment for the mortgage." },
      { en: "pay off a mortgage", pos: "colloc.", vi: "trả hết nợ vay mua nhà", example: "It took them 25 years to pay off their mortgage." },
      { en: "housewarming party", pos: "colloc.", vi: "tiệc mừng nhà mới", example: "You're invited to our housewarming party next Saturday." },
      { en: "save up", pos: "colloc.", vi: "tiết kiệm dần dần", example: "I'm saving up for a new car." },
      { en: "asking for clarification", pos: "colloc.", vi: "xin làm rõ thêm", example: "She kept asking for clarification on the instructions." },
      { en: "make waves", pos: "colloc.", vi: "gây rắc rối, tạo xáo trộn", example: "He didn't want to make waves at his new job." },
      { en: "play devil's advocate", pos: "colloc.", vi: "lập luận phía đối lập để thảo luận", example: "Let me play devil's advocate here — what if we're wrong?" },
      { en: "take time off", pos: "colloc.", vi: "nghỉ phép", example: "I need to take some time off to recharge." },
      { en: "run a meeting", pos: "colloc.", vi: "điều hành cuộc họp", example: "She runs every Monday meeting efficiently." },
      { en: "meet a deadline", pos: "colloc.", vi: "hoàn thành đúng hạn", example: "The team stayed late to meet the deadline." },
      { en: "close a deal", pos: "colloc.", vi: "ký kết được hợp đồng", example: "He closed the deal after three months of negotiations." },
      { en: "give feedback", pos: "colloc.", vi: "đưa ra nhận xét, phản hồi", example: "Please give feedback on the proposal by Friday." },
      { en: "handle a complaint", pos: "colloc.", vi: "xử lý khiếu nại", example: "She handled the customer complaint professionally." },
      { en: "launch a product", pos: "colloc.", vi: "ra mắt sản phẩm", example: "We plan to launch the product in Q2." },
      { en: "expand into a market", pos: "colloc.", vi: "mở rộng vào một thị trường", example: "The company is expanding into the Asian market." },
      { en: "submit a report", pos: "colloc.", vi: "nộp báo cáo", example: "Please submit your report by end of day." },
      { en: "conduct a survey", pos: "colloc.", vi: "tiến hành khảo sát", example: "We conducted a survey of 500 customers." },
      { en: "negotiate a contract", pos: "colloc.", vi: "đàm phán hợp đồng", example: "Both sides are still negotiating the contract." },
      { en: "reach a target", pos: "colloc.", vi: "đạt mục tiêu", example: "The sales team reached their Q3 target." },
    ],
  }`;

// Tìm vị trí kết thúc của TOEIC_THEMES array
// Tìm ];  sau TOEIC_THEMES
const themesStart = content.indexOf('export const TOEIC_THEMES');
const themesEnd = content.indexOf('\n];', themesStart);

if (themesEnd === -1) {
  console.error("Không tìm thấy kết thúc TOEIC_THEMES");
  process.exit(1);
}

const before = content.slice(0, themesEnd);
const after = content.slice(themesEnd);

const result = before + newThemes + '\n' + after;

fs.writeFileSync(path, result, "utf8");
console.log("Done! Added 3 new themes: idioms, phrasal-verbs, collocations");
