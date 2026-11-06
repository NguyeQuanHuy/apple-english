import type { Phrase } from "./topics";

/** Ready-to-use sentences and one practical tip for each topic, keyed by topic id. */
export const TOPIC_EXTRAS: Record<string, { tip: string; phrases: Phrase[] }> = {
  travel: {
    tip: "Ở quầy check-in và hải quan, nhân viên thường hỏi rất nhanh nhưng câu hỏi lặp lại gần như giống nhau. Học thuộc 4 câu trả lời: mục đích chuyến đi, ở bao lâu, ở đâu, có gì cần khai báo không — là đủ qua cửa.",
    phrases: [
      { en: "I'd like to check in, please.", vi: "Tôi muốn làm thủ tục nhận phòng / lên máy bay.", when: "Ở quầy khách sạn hoặc quầy hãng bay" },
      { en: "I'm here on holiday for two weeks.", vi: "Tôi đến đây du lịch hai tuần.", when: "Khi hải quan hỏi mục đích chuyến đi" },
      { en: "Could I have a window seat?", vi: "Cho tôi ghế cạnh cửa sổ được không?", when: "Khi làm thủ tục lên máy bay" },
      { en: "My luggage hasn't arrived.", vi: "Hành lý của tôi chưa tới.", when: "Ở quầy hành lý thất lạc" },
      { en: "How do I get to the city centre?", vi: "Đi vào trung tâm thành phố bằng cách nào?", when: "Hỏi đường khi vừa tới nơi" },
      { en: "Is breakfast included?", vi: "Giá phòng đã gồm bữa sáng chưa?", when: "Khi đặt hoặc nhận phòng" },
    ],
  },
  business: {
    tip: "Người bản xứ hay làm mềm câu ở công sở. Thay vì \"Send me the report\", hãy nói \"Could you send me the report when you have a moment?\". Thêm could, would, when you have a moment là câu nghe lịch sự ngay.",
    phrases: [
      { en: "Could we schedule a quick call?", vi: "Mình hẹn một cuộc gọi ngắn được không?", when: "Muốn trao đổi nhanh với đồng nghiệp" },
      { en: "Let me get back to you on that.", vi: "Để tôi kiểm tra rồi trả lời anh/chị sau.", when: "Khi chưa có câu trả lời ngay" },
      { en: "Just to clarify, do you mean…?", vi: "Cho tôi hỏi lại cho rõ, ý anh/chị là…?", when: "Khi chưa hiểu chắc ý người khác" },
      { en: "I'll keep you posted.", vi: "Tôi sẽ cập nhật cho anh/chị.", when: "Kết thúc email hoặc cuộc họp" },
      { en: "Sorry, could you say that again?", vi: "Xin lỗi, anh/chị nói lại được không?", when: "Khi nghe không kịp trong cuộc họp" },
      { en: "Please find the file attached.", vi: "Tôi gửi kèm tệp trong email này.", when: "Khi gửi tài liệu qua email" },
    ],
  },
  daily: {
    tip: "Khi được hỏi \"How are you?\", đừng chỉ đáp \"I'm fine, thank you, and you?\" như sách giáo khoa. Thử \"Not bad, thanks!\" hoặc \"Pretty good, a bit tired today\" — nghe tự nhiên và mở ra câu chuyện.",
    phrases: [
      { en: "What do you usually do at the weekend?", vi: "Cuối tuần bạn thường làm gì?", when: "Bắt chuyện, làm quen" },
      { en: "I'm into football and cooking.", vi: "Tôi thích bóng đá và nấu ăn.", when: "Nói về sở thích" },
      { en: "I live with my wife and two kids.", vi: "Tôi sống cùng vợ và hai con.", when: "Giới thiệu gia đình" },
      { en: "I usually get up at six.", vi: "Tôi thường dậy lúc sáu giờ.", when: "Kể về thói quen hằng ngày" },
      { en: "Not bad, thanks. How about you?", vi: "Cũng ổn, cảm ơn. Còn bạn thì sao?", when: "Trả lời câu How are you?" },
      { en: "Nice to meet you. I'm Lan.", vi: "Rất vui được gặp bạn. Mình là Lan.", when: "Lần đầu gặp ai đó" },
    ],
  },
  tech: {
    tip: "Từ IT thường được đọc theo kiểu Anh, không theo chữ viết. Chú ý: Wi-Fi /ˈwaɪ.faɪ/, router /ˈruː.tə/ (Anh) hoặc /ˈraʊ.tɚ/ (Mỹ), cache /kæʃ/ đọc giống cash, GUI /ˈɡuː.i/ đọc là gu-i.",
    phrases: [
      { en: "Have you tried restarting it?", vi: "Bạn đã thử khởi động lại chưa?", when: "Câu đầu tiên khi hỗ trợ kỹ thuật" },
      { en: "My laptop keeps freezing.", vi: "Máy tính của tôi cứ bị treo.", when: "Báo lỗi cho bộ phận IT" },
      { en: "I can't connect to the Wi-Fi.", vi: "Tôi không kết nối được Wi-Fi.", when: "Gặp sự cố mạng" },
      { en: "Could you share your screen?", vi: "Bạn chia sẻ màn hình được không?", when: "Trong cuộc họp trực tuyến" },
      { en: "I forgot my password.", vi: "Tôi quên mật khẩu.", when: "Cần đặt lại tài khoản" },
      { en: "The update will take about ten minutes.", vi: "Bản cập nhật mất khoảng mười phút.", when: "Thông báo thời gian chờ" },
    ],
  },
  health: {
    tip: "Khi khám bệnh, nói rõ ba điều: đau ở đâu, đau từ khi nào, đau thế nào. Ví dụ: \"I've had a headache since yesterday. It's a sharp pain.\" Bác sĩ sẽ hỏi tiếp từ đó.",
    phrases: [
      { en: "I'd like to make an appointment.", vi: "Tôi muốn đặt lịch khám.", when: "Gọi điện cho phòng khám" },
      { en: "I've had a fever since Monday.", vi: "Tôi bị sốt từ thứ Hai.", when: "Mô tả triệu chứng" },
      { en: "It hurts here.", vi: "Tôi đau ở chỗ này.", when: "Chỉ vào chỗ đau" },
      { en: "I'm allergic to penicillin.", vi: "Tôi bị dị ứng penicillin.", when: "Báo cho bác sĩ, dược sĩ" },
      { en: "How often should I take this?", vi: "Thuốc này uống mấy lần một ngày?", when: "Hỏi dược sĩ cách dùng thuốc" },
      { en: "Do I need a prescription for this?", vi: "Thuốc này có cần đơn bác sĩ không?", when: "Mua thuốc ở nhà thuốc" },
    ],
  },
  food: {
    tip: "Gọi món bằng \"I'd like…\" hoặc \"Could I have…\" thay vì \"I want…\". \"I want\" không sai ngữ pháp nhưng nghe hơi cộc khi nói với nhân viên phục vụ.",
    phrases: [
      { en: "A table for two, please.", vi: "Cho tôi một bàn hai người.", when: "Vừa vào nhà hàng" },
      { en: "Could I see the menu, please?", vi: "Cho tôi xem thực đơn được không?", when: "Khi ngồi vào bàn" },
      { en: "What do you recommend?", vi: "Bạn gợi ý món gì?", when: "Chưa biết gọi gì" },
      { en: "I'd like the chicken, please.", vi: "Cho tôi món gà.", when: "Gọi món" },
      { en: "Is this dish spicy?", vi: "Món này có cay không?", when: "Hỏi về món ăn" },
      { en: "Could we have the bill, please?", vi: "Cho chúng tôi thanh toán.", when: "Ăn xong, muốn trả tiền" },
    ],
  },
  shopping: {
    tip: "Ở Anh nói \"bill\" và \"queue\", ở Mỹ nói \"check\" và \"line\". Khi đổi trả hàng, luôn giữ \"receipt\" (hoá đơn) — nhiều cửa hàng không nhận đổi nếu thiếu nó.",
    phrases: [
      { en: "I'm just looking, thanks.", vi: "Tôi chỉ xem thôi, cảm ơn.", when: "Khi nhân viên hỏi có cần giúp không" },
      { en: "Do you have this in a smaller size?", vi: "Cái này có cỡ nhỏ hơn không?", when: "Mua quần áo, giày" },
      { en: "Can I try it on?", vi: "Tôi mặc thử được không?", when: "Muốn thử đồ" },
      { en: "How much is this?", vi: "Cái này bao nhiêu tiền?", when: "Hỏi giá" },
      { en: "Can I pay by card?", vi: "Tôi trả bằng thẻ được không?", when: "Ở quầy thanh toán" },
      { en: "I'd like to return this, please.", vi: "Tôi muốn trả lại món này.", when: "Đổi trả hàng" },
    ],
  },
  education: {
    tip: "Muốn hỏi giảng viên mà không ngại, dùng câu mở đầu \"Sorry to bother you, but…\". Và đừng sợ nói \"I don't understand\" — ở trường, hỏi lại được xem là chủ động, không phải kém.",
    phrases: [
      { en: "Could you explain that again, please?", vi: "Thầy/cô giải thích lại được không ạ?", when: "Khi chưa hiểu bài" },
      { en: "When is the deadline for the assignment?", vi: "Hạn nộp bài tập là khi nào?", when: "Hỏi về bài tập" },
      { en: "What does this word mean?", vi: "Từ này nghĩa là gì?", when: "Gặp từ mới" },
      { en: "How do you pronounce this?", vi: "Từ này đọc thế nào?", when: "Hỏi cách phát âm" },
      { en: "Can I hand it in tomorrow?", vi: "Em nộp vào ngày mai được không?", when: "Xin gia hạn nộp bài" },
      { en: "I'm revising for my exam.", vi: "Tôi đang ôn thi.", when: "Kể về việc học" },
    ],
  },
  sport: {
    tip: "Người Anh gọi môn này là \"football\", người Mỹ gọi là \"soccer\". Tỷ số đọc theo kiểu \"two-nil\" (Anh) hoặc \"two to nothing\" (Mỹ); hoà là \"a draw\" hoặc \"a tie\".",
    phrases: [
      { en: "Who's playing tonight?", vi: "Tối nay đội nào đá?", when: "Hỏi lịch thi đấu" },
      { en: "What's the score?", vi: "Tỷ số bao nhiêu rồi?", when: "Đang xem trận đấu" },
      { en: "That was never a penalty!", vi: "Như thế mà cũng phạt đền!", when: "Bình luận tình huống" },
      { en: "Do you fancy a game this weekend?", vi: "Cuối tuần đá một trận không?", when: "Rủ bạn chơi thể thao" },
      { en: "I go to the gym three times a week.", vi: "Tôi đi tập gym ba lần một tuần.", when: "Nói về thói quen tập luyện" },
      { en: "We won two-one.", vi: "Chúng tôi thắng hai một.", when: "Kể kết quả trận đấu" },
    ],
  },
  emotion: {
    tip: "Chú ý cặp tính từ -ed và -ing: \"I'm bored\" là tôi thấy chán, còn \"I'm boring\" là tôi là người nhàm chán. Cảm giác của mình dùng -ed (tired, excited, interested); thứ gây ra cảm giác dùng -ing.",
    phrases: [
      { en: "I'm a bit stressed at the moment.", vi: "Dạo này tôi hơi căng thẳng.", when: "Chia sẻ tâm trạng" },
      { en: "I'm so excited about the trip!", vi: "Tôi háo hức về chuyến đi lắm!", when: "Thể hiện sự mong chờ" },
      { en: "That must be frustrating.", vi: "Chắc bực mình lắm nhỉ.", when: "Đồng cảm với người khác" },
      { en: "I'm really proud of you.", vi: "Tôi thật sự tự hào về bạn.", when: "Khen ngợi, động viên" },
      { en: "Don't worry, it happens.", vi: "Đừng lo, chuyện thường mà.", when: "An ủi ai đó" },
      { en: "I feel much better now.", vi: "Giờ tôi thấy khá hơn nhiều rồi.", when: "Nói mình đã ổn" },
    ],
  },
  environment: {
    tip: "Ở Đức và nhiều nước châu Âu, phân loại rác là chuyện hằng ngày. Ba từ hay gặp nhất: \"recycling\" (tái chế), \"general waste\" (rác thường), \"organic waste\" (rác hữu cơ).",
    phrases: [
      { en: "Where does this go — recycling or general waste?", vi: "Cái này bỏ thùng tái chế hay rác thường?", when: "Phân loại rác" },
      { en: "I try to use less plastic.", vi: "Tôi cố gắng dùng ít nhựa hơn.", when: "Nói về thói quen sống xanh" },
      { en: "Turn off the lights when you leave.", vi: "Tắt đèn khi ra khỏi phòng nhé.", when: "Nhắc tiết kiệm điện" },
      { en: "The air quality is bad today.", vi: "Hôm nay chất lượng không khí kém.", when: "Nói về ô nhiễm" },
      { en: "I cycle to work to save energy.", vi: "Tôi đạp xe đi làm để tiết kiệm năng lượng.", when: "Kể về cách đi lại" },
      { en: "Climate change affects everyone.", vi: "Biến đổi khí hậu ảnh hưởng tới tất cả mọi người.", when: "Thảo luận về môi trường" },
    ],
  },
  money: {
    tip: "Đọc số tiền: £5.50 là \"five pounds fifty\", $1,200 là \"one thousand two hundred dollars\" hoặc \"twelve hundred dollars\". Cẩn thận với \"billion\" — tiếng Anh là một tỷ, không phải một nghìn tỷ.",
    phrases: [
      { en: "I'd like to open a bank account.", vi: "Tôi muốn mở tài khoản ngân hàng.", when: "Ở ngân hàng" },
      { en: "Is there a fee for this transfer?", vi: "Chuyển khoản này có mất phí không?", when: "Chuyển tiền" },
      { en: "I'm saving up for a new laptop.", vi: "Tôi đang để dành tiền mua laptop mới.", when: "Nói về kế hoạch tiết kiệm" },
      { en: "Can I pay in instalments?", vi: "Tôi trả góp được không?", when: "Mua món đồ đắt tiền" },
      { en: "It's out of my budget.", vi: "Cái đó vượt ngân sách của tôi.", when: "Từ chối vì quá đắt" },
      { en: "My card was declined.", vi: "Thẻ của tôi bị từ chối.", when: "Thanh toán không thành công" },
    ],
  },
  transport: {
    tip: "Mua vé thì nói \"single\" (một chiều) hoặc \"return\" (khứ hồi) ở Anh; ở Mỹ là \"one-way\" và \"round-trip\". Hỏi tàu đi đâu: \"Does this train go to…?\" — câu ngắn mà dùng được ở mọi nhà ga.",
    phrases: [
      { en: "A single to Berlin, please.", vi: "Cho tôi một vé một chiều đi Berlin.", when: "Mua vé tàu, xe" },
      { en: "Does this train go to the airport?", vi: "Tàu này có đi sân bay không?", when: "Hỏi trước khi lên tàu" },
      { en: "Which platform does it leave from?", vi: "Tàu chạy từ sân ga nào?", when: "Tìm đúng sân ga" },
      { en: "How long does it take?", vi: "Đi mất bao lâu?", when: "Hỏi thời gian di chuyển" },
      { en: "Could you tell me when to get off?", vi: "Bạn báo giúp tôi khi nào xuống được không?", when: "Đi xe buýt ở chỗ lạ" },
      { en: "The train is delayed by twenty minutes.", vi: "Tàu bị trễ hai mươi phút.", when: "Nghe thông báo ở nhà ga" },
    ],
  },
  housing: {
    tip: "Trước khi ký hợp đồng thuê nhà, luôn hỏi ba điều: tiền thuê đã gồm \"utilities\" (điện, nước, sưởi) chưa, \"deposit\" bao nhiêu và khi nào được trả lại, và báo trước bao lâu khi muốn chuyển đi (\"notice period\").",
    phrases: [
      { en: "Is the flat still available?", vi: "Căn hộ còn cho thuê không?", when: "Liên hệ chủ nhà lần đầu" },
      { en: "Are utilities included in the rent?", vi: "Tiền thuê đã gồm điện nước chưa?", when: "Hỏi về chi phí" },
      { en: "When can I move in?", vi: "Khi nào tôi dọn vào được?", when: "Bàn ngày nhận nhà" },
      { en: "The heating isn't working.", vi: "Hệ thống sưởi bị hỏng.", when: "Báo hỏng cho chủ nhà" },
      { en: "How much is the deposit?", vi: "Tiền đặt cọc là bao nhiêu?", when: "Trước khi ký hợp đồng" },
      { en: "What's the notice period?", vi: "Phải báo trước bao lâu khi chuyển đi?", when: "Hỏi về điều khoản hợp đồng" },
    ],
  },
};
