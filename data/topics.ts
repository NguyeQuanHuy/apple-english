// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Topics data â€” 10 chá»§ Ä‘á» má»Ÿ rá»™ng cho ngÆ°á»i Viá»‡t má»›i há»c tiáº¿ng Anh
// Má»—i topic: 20 tá»« vá»±ng (10 cÆ¡ báº£n + 10 nÃ¢ng cao), 5 phrases, 8 quiz, 1 tip
// â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

export type VocabItem = {
  en: string;
  ipa?: string;
  pos: "n" | "v" | "adj" | "adv" | "phr";
  vi: string;
  example: string;
  exampleVi: string;
};

export type Phrase = {
  en: string;
  vi: string;
  when: string; // khi nÃ o dÃ¹ng
};

export type QuizQ = {
  prompt: string;
  options: string[];
  correctIndex: number;
  explain?: string;
};

export type Topic = {
  id: string;
  title: string;
  emoji: string;
  tagline: string;
  tip: string; // máº¹o thá»±c dá»¥ng
  basicVocab: VocabItem[];
  advancedVocab: VocabItem[];
  phrases: Phrase[];
  quiz: QuizQ[];
};

export const TOPICS: Topic[] = [
  // â”€â”€â”€ 1. TRAVEL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "travel",
    title: "Du lá»‹ch",
    emoji: "âœˆï¸",
    tagline: "Sá»‘ng sÃ³t á»Ÿ sÃ¢n bay, khÃ¡ch sáº¡n vÃ  Ä‘iá»ƒm tham quan",
    tip: "Khi khÃ´ng hiá»ƒu, Ä‘á»«ng nÃ³i 'yes' bá»«a. NÃ³i 'Sorry, could you repeat that?' â€” ngÆ°á»i Anh-Má»¹ sáº½ kiÃªn nháº«n láº·p láº¡i.",
    basicVocab: [
      { en: "passport", ipa: "/ËˆpÃ¦spÉ”Ërt/", pos: "n", vi: "há»™ chiáº¿u", example: "May I see your passport, please?", exampleVi: "Vui lÃ²ng cho tÃ´i xem há»™ chiáº¿u cá»§a báº¡n?" },
      { en: "ticket", ipa: "/ËˆtÉªkÉªt/", pos: "n", vi: "vÃ©", example: "I lost my ticket.", exampleVi: "TÃ´i lÃ m máº¥t vÃ©." },
      { en: "luggage", ipa: "/ËˆlÊŒÉ¡ÉªdÊ’/", pos: "n", vi: "hÃ nh lÃ½", example: "Where can I leave my luggage?", exampleVi: "TÃ´i Ä‘á»ƒ hÃ nh lÃ½ á»Ÿ Ä‘Ã¢u Ä‘Æ°á»£c?" },
      { en: "hotel", ipa: "/hoÊŠËˆtel/", pos: "n", vi: "khÃ¡ch sáº¡n", example: "The hotel is near the beach.", exampleVi: "KhÃ¡ch sáº¡n gáº§n bÃ£i biá»ƒn." },
      { en: "map", ipa: "/mÃ¦p/", pos: "n", vi: "báº£n Ä‘á»“", example: "Do you have a map of the city?", exampleVi: "Báº¡n cÃ³ báº£n Ä‘á»“ thÃ nh phá»‘ khÃ´ng?" },
      { en: "airport", ipa: "/ËˆerpÉ”Ërt/", pos: "n", vi: "sÃ¢n bay", example: "I'll meet you at the airport.", exampleVi: "TÃ´i sáº½ gáº·p báº¡n á»Ÿ sÃ¢n bay." },
      { en: "flight", ipa: "/flaÉªt/", pos: "n", vi: "chuyáº¿n bay", example: "My flight is at 9 PM.", exampleVi: "Chuyáº¿n bay cá»§a tÃ´i lÃºc 9 giá» tá»‘i." },
      { en: "book", ipa: "/bÊŠk/", pos: "v", vi: "Ä‘áº·t (chá»—)", example: "I'd like to book a room.", exampleVi: "TÃ´i muá»‘n Ä‘áº·t má»™t phÃ²ng." },
      { en: "tourist", ipa: "/ËˆtÊŠrÉªst/", pos: "n", vi: "khÃ¡ch du lá»‹ch", example: "Many tourists visit Hanoi.", exampleVi: "Nhiá»u khÃ¡ch du lá»‹ch Ä‘áº¿n HÃ  Ná»™i." },
      { en: "trip", ipa: "/trÉªp/", pos: "n", vi: "chuyáº¿n Ä‘i", example: "Have a nice trip!", exampleVi: "ChÃºc chuyáº¿n Ä‘i vui váº»!" },
    ],
    advancedVocab: [
      { en: "boarding pass", ipa: "/ËˆbÉ”ËrdÉªÅ‹ pÃ¦s/", pos: "n", vi: "tháº» lÃªn mÃ¡y bay", example: "Please show your boarding pass at gate 12.", exampleVi: "Xuáº¥t trÃ¬nh tháº» lÃªn mÃ¡y bay á»Ÿ cá»•ng 12." },
      { en: "customs", ipa: "/ËˆkÊŒstÉ™mz/", pos: "n", vi: "háº£i quan", example: "Go through customs after landing.", exampleVi: "Äi qua háº£i quan sau khi mÃ¡y bay háº¡ cÃ¡nh." },
      { en: "departure", ipa: "/dÉªËˆpÉ‘ËrtÊƒÉ™r/", pos: "n", vi: "khá»Ÿi hÃ nh", example: "Departure is at 7:45 AM.", exampleVi: "Khá»Ÿi hÃ nh lÃºc 7:45 sÃ¡ng." },
      { en: "arrival", ipa: "/É™ËˆraÉªvl/", pos: "n", vi: "Ä‘áº¿n nÆ¡i", example: "Arrival is delayed by 30 minutes.", exampleVi: "Giá» Ä‘áº¿n bá»‹ trá»… 30 phÃºt." },
      { en: "reservation", ipa: "/ËŒrezÉ™rËˆveÉªÊƒn/", pos: "n", vi: "Ä‘áº·t chá»—", example: "I have a reservation under Huy.", exampleVi: "TÃ´i Ä‘Ã£ Ä‘áº·t chá»— tÃªn Huy." },
      { en: "exchange", ipa: "/ÉªksËˆtÊƒeÉªndÊ’/", pos: "v", vi: "Ä‘á»•i (tiá»n)", example: "Where can I exchange money?", exampleVi: "TÃ´i Ä‘á»•i tiá»n á»Ÿ Ä‘Ã¢u?" },
      { en: "itinerary", ipa: "/aÉªËˆtÉªnÉ™reri/", pos: "n", vi: "lá»‹ch trÃ¬nh chuyáº¿n Ä‘i", example: "I'll send you the itinerary tomorrow.", exampleVi: "TÃ´i sáº½ gá»­i báº¡n lá»‹ch trÃ¬nh vÃ o ngÃ y mai." },
      { en: "souvenir", ipa: "/ËŒsuËvÉ™ËˆnÉªr/", pos: "n", vi: "quÃ  lÆ°u niá»‡m", example: "I bought a souvenir for my mom.", exampleVi: "TÃ´i mua má»™t mÃ³n quÃ  lÆ°u niá»‡m cho máº¹." },
      { en: "sightseeing", ipa: "/ËˆsaÉªtsiËÉªÅ‹/", pos: "n", vi: "tham quan", example: "We went sightseeing in the old town.", exampleVi: "ChÃºng tÃ´i Ä‘i tham quan phá»‘ cá»•." },
      { en: "currency", ipa: "/ËˆkÉœËrÉ™nsi/", pos: "n", vi: "tiá»n tá»‡", example: "The local currency is the Euro.", exampleVi: "Tiá»n tá»‡ Ä‘á»‹a phÆ°Æ¡ng lÃ  Euro." },
    ],
    phrases: [
      { en: "How much is it?", vi: "Bao nhiÃªu tiá»n váº­y?", when: "Khi há»i giÃ¡ á»Ÿ chá»£, taxi, quÃ¡n" },
      { en: "Could you help me, please?", vi: "Báº¡n cÃ³ thá»ƒ giÃºp tÃ´i khÃ´ng?", when: "Khi cáº§n nhá» váº£ lá»‹ch sá»±" },
      { en: "I'm lost.", vi: "TÃ´i bá»‹ láº¡c.", when: "Khi khÃ´ng biáº¿t mÃ¬nh Ä‘ang á»Ÿ Ä‘Ã¢u" },
      { en: "Is there a restroom nearby?", vi: "Gáº§n Ä‘Ã¢y cÃ³ nhÃ  vá»‡ sinh khÃ´ng?", when: "CÃ¢u cá»©u nguy sá»‘ 1 khi Ä‘i du lá»‹ch" },
      { en: "Can I have the bill, please?", vi: "Cho tÃ´i xin hoÃ¡ Ä‘Æ¡n Ä‘Æ°á»£c khÃ´ng?", when: "Khi muá»‘n thanh toÃ¡n á»Ÿ nhÃ  hÃ ng" },
    ],
    quiz: [
      { prompt: "'passport' nghÄ©a lÃ  gÃ¬?", options: ["vÃ© mÃ¡y bay", "há»™ chiáº¿u", "visa", "hÃ nh lÃ½"], correctIndex: 1 },
      { prompt: "Äáº¿n sÃ¢n bay, báº¡n cáº§n lÃ m gÃ¬ Ä‘áº§u tiÃªn?", options: ["check-in", "boarding", "landing", "customs"], correctIndex: 0, explain: "Check-in lÃ  lÃ m thá»§ tá»¥c Ä‘áº§u tiÃªn khi Ä‘áº¿n sÃ¢n bay." },
      { prompt: "'How much ___ it?' (Bao nhiÃªu tiá»n váº­y?)", options: ["are", "is", "do", "does"], correctIndex: 1 },
      { prompt: "'Where can I ___ money?' (Ä‘á»•i tiá»n)", options: ["change", "exchange", "trade", "swap"], correctIndex: 1, explain: "'Exchange' lÃ  tá»« chuáº©n dÃ¹ng cho Ä‘á»•i tiá»n tá»‡." },
      { prompt: "'boarding pass' dÃ¹ng Ä‘á»ƒ lÃ m gÃ¬?", options: ["vÃ o khÃ¡ch sáº¡n", "lÃªn mÃ¡y bay", "qua háº£i quan", "Ä‘áº·t chá»—"], correctIndex: 1 },
      { prompt: "Khi bá»‹ láº¡c Ä‘Æ°á»ng, báº¡n nÃ³i gÃ¬?", options: ["I'm tired.", "I'm hungry.", "I'm lost.", "I'm late."], correctIndex: 2 },
      { prompt: "'CÃ³ nhÃ  vá»‡ sinh gáº§n Ä‘Ã¢y khÃ´ng?' tiáº¿ng Anh lÃ ?", options: ["Where toilet?", "Is there a restroom nearby?", "Toilet please?", "Where to bathroom?"], correctIndex: 1, explain: "CÃ¢u hoÃ n chá»‰nh, lá»‹ch sá»±. 'Restroom' phá»• biáº¿n á»Ÿ Má»¹; 'toilet' OK á»Ÿ Anh." },
      { prompt: "'I'd like to ___ a room.' (Ä‘áº·t phÃ²ng)", options: ["buy", "book", "rent", "have"], correctIndex: 1, explain: "'Book a room' = Ä‘áº·t trÆ°á»›c má»™t phÃ²ng khÃ¡ch sáº¡n." },
    ],
  },

  // â”€â”€â”€ 2. BUSINESS / WORK â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "business",
    title: "CÃ´ng viá»‡c",
    emoji: "ðŸ’¼",
    tagline: "Giao tiáº¿p chuyÃªn nghiá»‡p á»Ÿ vÄƒn phÃ²ng",
    tip: "Email cÃ´ng viá»‡c báº¯t Ä‘áº§u báº±ng 'Hi [tÃªn]' thÃ¢n thiá»‡n hÆ¡n 'Dear Mr/Ms'. Káº¿t thÃºc báº±ng 'Best regards,' hoáº·c 'Best,' lÃ  an toÃ n nháº¥t.",
    basicVocab: [
      { en: "office", ipa: "/ËˆÉ”ËfÉªs/", pos: "n", vi: "vÄƒn phÃ²ng", example: "I work in an office.", exampleVi: "TÃ´i lÃ m viá»‡c á»Ÿ vÄƒn phÃ²ng." },
      { en: "boss", ipa: "/bÉ”Ës/", pos: "n", vi: "sáº¿p", example: "My boss is very nice.", exampleVi: "Sáº¿p cá»§a tÃ´i ráº¥t tá»‘t." },
      { en: "meeting", ipa: "/ËˆmiËtÉªÅ‹/", pos: "n", vi: "cuá»™c há»p", example: "We have a meeting at 3 PM.", exampleVi: "ChÃºng tÃ´i cÃ³ cuá»™c há»p lÃºc 3 giá» chiá»u." },
      { en: "email", ipa: "/ËˆiËmeÉªl/", pos: "n", vi: "thÆ° Ä‘iá»‡n tá»­", example: "I'll send you an email tonight.", exampleVi: "TÃ´i sáº½ gá»­i báº¡n email tá»‘i nay." },
      { en: "team", ipa: "/tiËm/", pos: "n", vi: "Ä‘á»™i nhÃ³m", example: "Our team is small but strong.", exampleVi: "Äá»™i cá»§a chÃºng tÃ´i nhá» nhÆ°ng máº¡nh." },
      { en: "report", ipa: "/rÉªËˆpÉ”Ërt/", pos: "n", vi: "bÃ¡o cÃ¡o", example: "Please finish the report by Friday.", exampleVi: "HoÃ n thÃ nh bÃ¡o cÃ¡o trÆ°á»›c thá»© SÃ¡u nhÃ©." },
      { en: "project", ipa: "/ËˆprÉ‘ËdÊ’ekt/", pos: "n", vi: "dá»± Ã¡n", example: "This project is important.", exampleVi: "Dá»± Ã¡n nÃ y quan trá»ng." },
      { en: "client", ipa: "/ËˆklaÉªÉ™nt/", pos: "n", vi: "khÃ¡ch hÃ ng", example: "The client wants changes.", exampleVi: "KhÃ¡ch hÃ ng muá»‘n thay Ä‘á»•i." },
      { en: "salary", ipa: "/ËˆsÃ¦lÉ™ri/", pos: "n", vi: "lÆ°Æ¡ng", example: "I get my salary on the 1st.", exampleVi: "TÃ´i nháº­n lÆ°Æ¡ng vÃ o ngÃ y 1." },
      { en: "busy", ipa: "/ËˆbÉªzi/", pos: "adj", vi: "báº­n", example: "Sorry, I'm busy right now.", exampleVi: "Xin lá»—i, hiá»‡n táº¡i tÃ´i Ä‘ang báº­n." },
    ],
    advancedVocab: [
      { en: "deadline", ipa: "/ËˆdedlaÉªn/", pos: "n", vi: "háº¡n chÃ³t", example: "The deadline is next Monday.", exampleVi: "Háº¡n chÃ³t lÃ  thá»© Hai tá»›i." },
      { en: "schedule", ipa: "/ËˆskedÊ’uËl/", pos: "n", vi: "lá»‹ch trÃ¬nh", example: "Let me check my schedule.", exampleVi: "Äá»ƒ tÃ´i kiá»ƒm tra lá»‹ch trÃ¬nh." },
      { en: "colleague", ipa: "/ËˆkÉ‘ËliËÉ¡/", pos: "n", vi: "Ä‘á»“ng nghiá»‡p", example: "She is my colleague.", exampleVi: "CÃ´ áº¥y lÃ  Ä‘á»“ng nghiá»‡p cá»§a tÃ´i." },
      { en: "feedback", ipa: "/ËˆfiËdbÃ¦k/", pos: "n", vi: "pháº£n há»“i", example: "Thanks for your feedback.", exampleVi: "Cáº£m Æ¡n pháº£n há»“i cá»§a báº¡n." },
      { en: "approve", ipa: "/É™ËˆpruËv/", pos: "v", vi: "phÃª duyá»‡t", example: "The manager approved my request.", exampleVi: "Sáº¿p Ä‘Ã£ duyá»‡t yÃªu cáº§u cá»§a tÃ´i." },
      { en: "negotiate", ipa: "/nÉªËˆÉ¡oÊŠÊƒieÉªt/", pos: "v", vi: "thÆ°Æ¡ng lÆ°á»£ng", example: "Let's negotiate the price.", exampleVi: "ChÃºng ta thÆ°Æ¡ng lÆ°á»£ng giÃ¡ nhÃ©." },
      { en: "presentation", ipa: "/ËŒpriËzenËˆteÉªÊƒn/", pos: "n", vi: "buá»•i thuyáº¿t trÃ¬nh", example: "Her presentation was excellent.", exampleVi: "Buá»•i thuyáº¿t trÃ¬nh cá»§a cÃ´ áº¥y ráº¥t xuáº¥t sáº¯c." },
      { en: "promotion", ipa: "/prÉ™ËˆmoÊŠÊƒn/", pos: "n", vi: "thÄƒng chá»©c", example: "He got a promotion last month.", exampleVi: "Anh áº¥y Ä‘Æ°á»£c thÄƒng chá»©c thÃ¡ng trÆ°á»›c." },
      { en: "supervisor", ipa: "/ËˆsuËpÉ™rvaÉªzÉ™r/", pos: "n", vi: "ngÆ°á»i giÃ¡m sÃ¡t", example: "Talk to your supervisor first.", exampleVi: "NÃ³i chuyá»‡n vá»›i ngÆ°á»i giÃ¡m sÃ¡t trÆ°á»›c." },
      { en: "department", ipa: "/dÉªËˆpÉ‘ËrtmÉ™nt/", pos: "n", vi: "phÃ²ng ban", example: "She works in the IT department.", exampleVi: "CÃ´ áº¥y lÃ m á»Ÿ phÃ²ng IT." },
    ],
    phrases: [
      { en: "Could we schedule a meeting?", vi: "ChÃºng ta cÃ³ thá»ƒ xáº¿p lá»‹ch há»p khÃ´ng?", when: "YÃªu cáº§u há»p lá»‹ch sá»±" },
      { en: "I'll get back to you.", vi: "TÃ´i sáº½ pháº£n há»“i láº¡i sau.", when: "Khi chÆ°a tráº£ lá»i Ä‘Æ°á»£c ngay" },
      { en: "Sorry for the late reply.", vi: "Xin lá»—i vÃ¬ tráº£ lá»i muá»™n.", when: "Äáº§u email khi tráº£ lá»i cháº­m" },
      { en: "Just a quick question...", vi: "Cho tÃ´i há»i nhanh má»™t chÃºt...", when: "Má»Ÿ Ä‘áº§u khi há»i Ä‘á»“ng nghiá»‡p" },
      { en: "Let me know if you have any questions.", vi: "Cho tÃ´i biáº¿t náº¿u báº¡n cÃ³ tháº¯c máº¯c.", when: "Káº¿t thÃºc email gá»­i hÆ°á»›ng dáº«n" },
    ],
    quiz: [
      { prompt: "'deadline' nghÄ©a lÃ ?", options: ["khÃ¡ch hÃ ng", "háº¡n chÃ³t", "lÆ°Æ¡ng", "pháº£n há»“i"], correctIndex: 1 },
      { prompt: "Sáº¿p tiáº¿ng Anh lÃ ?", options: ["client", "colleague", "boss", "team"], correctIndex: 2 },
      { prompt: "'Could we ___ a meeting?' (xáº¿p lá»‹ch)", options: ["make", "schedule", "do", "have"], correctIndex: 1, explain: "'Schedule a meeting' lÃ  cá»¥m chuáº©n." },
      { prompt: "'I'll ___ back to you.' (pháº£n há»“i sau)", options: ["come", "go", "get", "send"], correctIndex: 2, explain: "'Get back to someone' = tráº£ lá»i/pháº£n há»“i láº¡i sau." },
      { prompt: "Äá»“ng nghiá»‡p tiáº¿ng Anh lÃ ?", options: ["colleague", "client", "customer", "boss"], correctIndex: 0 },
      { prompt: "'The client ___ changes.' (muá»‘n thay Ä‘á»•i)", options: ["want", "wants", "wanting", "wanted"], correctIndex: 1, explain: "'Client' sá»‘ Ã­t â†’ thÃªm 's' á»Ÿ Ä‘á»™ng tá»«." },
      { prompt: "'promotion' nghÄ©a lÃ ?", options: ["sa tháº£i", "thÄƒng chá»©c", "nghá»‰ phÃ©p", "tÄƒng lÆ°Æ¡ng"], correctIndex: 1 },
      { prompt: "Pháº§n káº¿t email cÃ´ng viá»‡c lá»‹ch sá»± nháº¥t?", options: ["Bye!", "Thanks!", "Best regards,", "See ya"], correctIndex: 2 },
    ],
  },

  // â”€â”€â”€ 3. DAILY LIFE â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "daily",
    title: "Äá»i sá»‘ng hÃ ng ngÃ y",
    emoji: "ðŸ ",
    tagline: "NÃ³i vá» thÃ³i quen, sá»Ÿ thÃ­ch, sinh hoáº¡t",
    tip: "Khi ká»ƒ thÃ³i quen, dÃ¹ng thÃ¬ hiá»‡n táº¡i Ä‘Æ¡n (Present Simple): 'I usually wake up at 7.' KhÃ´ng dÃ¹ng 'I am waking up' (sai!).",
    basicVocab: [
      { en: "morning", ipa: "/ËˆmÉ”ËrnÉªÅ‹/", pos: "n", vi: "buá»•i sÃ¡ng", example: "I drink coffee in the morning.", exampleVi: "TÃ´i uá»‘ng cÃ  phÃª buá»•i sÃ¡ng." },
      { en: "evening", ipa: "/ËˆiËvnÉªÅ‹/", pos: "n", vi: "buá»•i tá»‘i", example: "I read in the evening.", exampleVi: "TÃ´i Ä‘á»c sÃ¡ch vÃ o buá»•i tá»‘i." },
      { en: "breakfast", ipa: "/ËˆbrekfÉ™st/", pos: "n", vi: "bá»¯a sÃ¡ng", example: "I have breakfast at 7.", exampleVi: "TÃ´i Äƒn sÃ¡ng lÃºc 7 giá»." },
      { en: "lunch", ipa: "/lÊŒntÊƒ/", pos: "n", vi: "bá»¯a trÆ°a", example: "Let's have lunch together.", exampleVi: "CÃ¹ng Äƒn trÆ°a nhÃ©." },
      { en: "dinner", ipa: "/ËˆdÉªnÉ™r/", pos: "n", vi: "bá»¯a tá»‘i", example: "Dinner is ready!", exampleVi: "Bá»¯a tá»‘i Ä‘Ã£ sáºµn sÃ ng!" },
      { en: "sleep", ipa: "/sliËp/", pos: "v", vi: "ngá»§", example: "I sleep 8 hours a night.", exampleVi: "TÃ´i ngá»§ 8 tiáº¿ng má»—i Ä‘Ãªm." },
      { en: "work", ipa: "/wÉœËrk/", pos: "v", vi: "lÃ m viá»‡c", example: "I work from home.", exampleVi: "TÃ´i lÃ m viá»‡c táº¡i nhÃ ." },
      { en: "study", ipa: "/ËˆstÊŒdi/", pos: "v", vi: "há»c", example: "I study English every day.", exampleVi: "TÃ´i há»c tiáº¿ng Anh má»—i ngÃ y." },
      { en: "hobby", ipa: "/ËˆhÉ‘Ëbi/", pos: "n", vi: "sá»Ÿ thÃ­ch", example: "My hobby is reading.", exampleVi: "Sá»Ÿ thÃ­ch cá»§a tÃ´i lÃ  Ä‘á»c sÃ¡ch." },
      { en: "weekend", ipa: "/ËˆwiËkend/", pos: "n", vi: "cuá»‘i tuáº§n", example: "What do you do on weekends?", exampleVi: "Cuá»‘i tuáº§n báº¡n lÃ m gÃ¬?" },
    ],
    advancedVocab: [
      { en: "neighborhood", ipa: "/ËˆneÉªbÉ™rhÊŠd/", pos: "n", vi: "khu phá»‘", example: "I live in a quiet neighborhood.", exampleVi: "TÃ´i sá»‘ng á»Ÿ má»™t khu phá»‘ yÃªn tÄ©nh." },
      { en: "routine", ipa: "/ruËËˆtiËn/", pos: "n", vi: "thÃ³i quen / lá»‹ch sinh hoáº¡t", example: "My morning routine is simple.", exampleVi: "Lá»‹ch sinh hoáº¡t buá»•i sÃ¡ng cá»§a tÃ´i Ä‘Æ¡n giáº£n." },
      { en: "errand", ipa: "/ËˆerÉ™nd/", pos: "n", vi: "viá»‡c láº·t váº·t", example: "I need to run some errands.", exampleVi: "TÃ´i cáº§n Ä‘i lÃ m vÃ i viá»‡c láº·t váº·t." },
      { en: "grocery", ipa: "/ËˆÉ¡roÊŠsÉ™ri/", pos: "n", vi: "Ä‘á»“ táº¡p hoÃ¡", example: "I do my grocery shopping on Saturday.", exampleVi: "TÃ´i Ä‘i mua táº¡p hoÃ¡ vÃ o thá»© Báº£y." },
      { en: "chores", ipa: "/tÊƒÉ”Ërz/", pos: "n", vi: "viá»‡c nhÃ ", example: "I hate doing chores.", exampleVi: "TÃ´i ghÃ©t lÃ m viá»‡c nhÃ ." },
      { en: "relax", ipa: "/rÉªËˆlÃ¦ks/", pos: "v", vi: "thÆ° giÃ£n", example: "I relax by watching movies.", exampleVi: "TÃ´i thÆ° giÃ£n báº±ng cÃ¡ch xem phim." },
      { en: "exercise", ipa: "/ËˆeksÉ™rsaÉªz/", pos: "v", vi: "táº­p thá»ƒ dá»¥c", example: "I exercise three times a week.", exampleVi: "TÃ´i táº­p thá»ƒ dá»¥c 3 láº§n má»™t tuáº§n." },
      { en: "commute", ipa: "/kÉ™ËˆmjuËt/", pos: "v", vi: "Ä‘i lÃ m/vá»", example: "I commute by bike.", exampleVi: "TÃ´i Ä‘i lÃ m báº±ng xe Ä‘áº¡p." },
      { en: "appointment", ipa: "/É™ËˆpÉ”ÉªntmÉ™nt/", pos: "n", vi: "cuá»™c háº¹n", example: "I have an appointment at 4.", exampleVi: "TÃ´i cÃ³ cuá»™c háº¹n lÃºc 4 giá»." },
      { en: "schedule", ipa: "/ËˆskedÊ’uËl/", pos: "n", vi: "lá»‹ch trÃ¬nh", example: "My schedule is full this week.", exampleVi: "Lá»‹ch tuáº§n nÃ y cá»§a tÃ´i kÃ­n háº¿t." },
    ],
    phrases: [
      { en: "How was your day?", vi: "HÃ´m nay cá»§a báº¡n tháº¿ nÃ o?", when: "CÃ¢u há»i xÃ£ giao cuá»‘i ngÃ y" },
      { en: "I'm running late.", vi: "TÃ´i Ä‘ang bá»‹ muá»™n.", when: "Khi tá»›i trá»… má»™t cuá»™c háº¹n" },
      { en: "Let me know.", vi: "Cho tÃ´i biáº¿t nhÃ©.", when: "Cuá»‘i cÃ¢u khi chá» pháº£n há»“i" },
      { en: "What are you up to?", vi: "Báº¡n Ä‘ang lÃ m gÃ¬ váº­y?", when: "Há»i thÃ¢n máº­t 'Ä‘ang lÃ m gÃ¬'" },
      { en: "Take your time.", vi: "Cá»© tá»« tá»«.", when: "Báº£o ai Ä‘Ã³ khÃ´ng cáº§n vá»™i" },
    ],
    quiz: [
      { prompt: "'breakfast' lÃ  bá»¯a nÃ o?", options: ["bá»¯a sÃ¡ng", "bá»¯a trÆ°a", "bá»¯a tá»‘i", "bá»¯a nháº¹"], correctIndex: 0 },
      { prompt: "'I ___ English every day.' (há»c)", options: ["study", "studies", "studying", "studied"], correctIndex: 0 },
      { prompt: "CÃ¢u nÃ o dÃ¹ng Ä‘Ãºng Ä‘á»ƒ ká»ƒ thÃ³i quen?", options: ["I am waking up at 7.", "I usually wake up at 7.", "I will wake up at 7.", "I woke up at 7."], correctIndex: 1, explain: "ThÃ³i quen â†’ Present Simple. 'I usually wake up at 7.'" },
      { prompt: "'hobby' nghÄ©a lÃ ?", options: ["cÃ´ng viá»‡c", "sá»Ÿ thÃ­ch", "ká»³ nghá»‰", "thá»ƒ thao"], correctIndex: 1 },
      { prompt: "'I'm running ___.' (bá»‹ muá»™n)", options: ["late", "fast", "slow", "behind"], correctIndex: 0, explain: "'Run late' = bá»‹ trá»… giá»." },
      { prompt: "'What are you ___ to?' (Ä‘ang lÃ m gÃ¬)", options: ["going", "doing", "up", "out"], correctIndex: 2, explain: "'What are you up to?' = cÃ¢u há»i thÃ¢n máº­t 'Ä‘ang lÃ m gÃ¬'." },
      { prompt: "'commute' nghÄ©a lÃ ?", options: ["Ä‘i du lá»‹ch", "Ä‘i lÃ m/vá»", "Ä‘i chá»£", "Ä‘i há»c"], correctIndex: 1 },
      { prompt: "Báº£o ngÆ°á»i khÃ¡c cá»© tá»« tá»«?", options: ["Hurry up!", "Take your time.", "Be quick.", "Now or never."], correctIndex: 1 },
    ],
  },

  // â”€â”€â”€ 4. TECHNOLOGY â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "tech",
    title: "CÃ´ng nghá»‡",
    emoji: "ðŸ’»",
    tagline: "Tiáº¿ng Anh cho dÃ¢n IT vÃ  ngÆ°á»i dÃ¹ng mÃ¡y tÃ­nh",
    tip: "Khi mÃ¡y lá»—i: 'It's not working' luÃ´n an toÃ n. Cá»¥ thá»ƒ hÆ¡n: 'It keeps crashing' (cá»© bá»‹ crash), 'It froze' (Ä‘Ã³ng bÄƒng), 'It's slow' (cháº­m).",
    basicVocab: [
      { en: "computer", ipa: "/kÉ™mËˆpjuËtÉ™r/", pos: "n", vi: "mÃ¡y tÃ­nh", example: "My computer is new.", exampleVi: "MÃ¡y tÃ­nh cá»§a tÃ´i má»›i." },
      { en: "phone", ipa: "/foÊŠn/", pos: "n", vi: "Ä‘iá»‡n thoáº¡i", example: "Where is my phone?", exampleVi: "Äiá»‡n thoáº¡i tÃ´i Ä‘Ã¢u rá»“i?" },
      { en: "internet", ipa: "/ËˆÉªntÉ™rnet/", pos: "n", vi: "máº¡ng internet", example: "The internet is slow today.", exampleVi: "Máº¡ng hÃ´m nay cháº­m." },
      { en: "wifi", ipa: "/ËˆwaÉªfaÉª/", pos: "n", vi: "wifi", example: "What's the wifi password?", exampleVi: "Máº­t kháº©u wifi lÃ  gÃ¬?" },
      { en: "app", ipa: "/Ã¦p/", pos: "n", vi: "á»©ng dá»¥ng", example: "Download the app from the store.", exampleVi: "Táº£i á»©ng dá»¥ng tá»« cá»­a hÃ ng." },
      { en: "email", ipa: "/ËˆiËmeÉªl/", pos: "n", vi: "email", example: "Send me an email.", exampleVi: "Gá»­i tÃ´i má»™t email." },
      { en: "password", ipa: "/ËˆpÃ¦swÉœËrd/", pos: "n", vi: "máº­t kháº©u", example: "I forgot my password.", exampleVi: "TÃ´i quÃªn máº­t kháº©u." },
      { en: "screen", ipa: "/skriËn/", pos: "n", vi: "mÃ n hÃ¬nh", example: "Look at the screen.", exampleVi: "NhÃ¬n lÃªn mÃ n hÃ¬nh." },
      { en: "update", ipa: "/ËˆÊŒpdeÉªt/", pos: "v", vi: "cáº­p nháº­t", example: "Please update your app.", exampleVi: "Vui lÃ²ng cáº­p nháº­t á»©ng dá»¥ng." },
      { en: "download", ipa: "/ËˆdaÊŠnloÊŠd/", pos: "v", vi: "táº£i xuá»‘ng", example: "Download the file here.", exampleVi: "Táº£i tá»‡p xuá»‘ng á»Ÿ Ä‘Ã¢y." },
    ],
    advancedVocab: [
      { en: "settings", ipa: "/ËˆsetÉªÅ‹z/", pos: "n", vi: "cÃ i Ä‘áº·t", example: "Change this in settings.", exampleVi: "Äá»•i cÃ¡i nÃ y trong pháº§n cÃ i Ä‘áº·t." },
      { en: "feature", ipa: "/ËˆfiËtÊƒÉ™r/", pos: "n", vi: "tÃ­nh nÄƒng", example: "This phone has many features.", exampleVi: "Äiá»‡n thoáº¡i nÃ y cÃ³ nhiá»u tÃ­nh nÄƒng." },
      { en: "device", ipa: "/dÉªËˆvaÉªs/", pos: "n", vi: "thiáº¿t bá»‹", example: "Connect your device to wifi.", exampleVi: "Káº¿t ná»‘i thiáº¿t bá»‹ vá»›i wifi." },
      { en: "software", ipa: "/ËˆsÉ”Ëftwer/", pos: "n", vi: "pháº§n má»m", example: "Install the latest software.", exampleVi: "CÃ i Ä‘áº·t pháº§n má»m má»›i nháº¥t." },
      { en: "hardware", ipa: "/ËˆhÉ‘Ërdwer/", pos: "n", vi: "pháº§n cá»©ng", example: "The hardware is broken.", exampleVi: "Pháº§n cá»©ng bá»‹ há»ng." },
      { en: "browser", ipa: "/ËˆbraÊŠzÉ™r/", pos: "n", vi: "trÃ¬nh duyá»‡t", example: "Open the browser.", exampleVi: "Má»Ÿ trÃ¬nh duyá»‡t lÃªn." },
      { en: "crash", ipa: "/krÃ¦Êƒ/", pos: "v", vi: "(mÃ¡y) treo, lá»—i", example: "The app keeps crashing.", exampleVi: "á»¨ng dá»¥ng cá»© bá»‹ treo." },
      { en: "install", ipa: "/ÉªnËˆstÉ”Ël/", pos: "v", vi: "cÃ i Ä‘áº·t", example: "Install the program first.", exampleVi: "CÃ i chÆ°Æ¡ng trÃ¬nh trÆ°á»›c." },
      { en: "backup", ipa: "/ËˆbÃ¦kÊŒp/", pos: "n", vi: "sao lÆ°u", example: "Make a backup of your files.", exampleVi: "Sao lÆ°u cÃ¡c tá»‡p cá»§a báº¡n." },
      { en: "charge", ipa: "/tÊƒÉ‘ËrdÊ’/", pos: "v", vi: "sáº¡c (pin)", example: "I need to charge my phone.", exampleVi: "TÃ´i cáº§n sáº¡c Ä‘iá»‡n thoáº¡i." },
    ],
    phrases: [
      { en: "It's not working.", vi: "NÃ³ khÃ´ng hoáº¡t Ä‘á»™ng.", when: "BÃ¡o lá»—i chung khi thiáº¿t bá»‹ há»ng" },
      { en: "Could you turn it off and on?", vi: "Báº¡n táº¯t rá»“i báº­t láº¡i Ä‘Æ°á»£c khÃ´ng?", when: "CÃ¡ch fix kinh Ä‘iá»ƒn 80% lá»—i" },
      { en: "What's the wifi password?", vi: "Máº­t kháº©u wifi lÃ  gÃ¬?", when: "CÃ¢u Ä‘áº§u tiÃªn á»Ÿ quÃ¡n cafe, sÃ¢n bay" },
      { en: "My battery is dead.", vi: "Pin cá»§a tÃ´i háº¿t.", when: "Khi Ä‘iá»‡n thoáº¡i sáº¯p táº¯t" },
      { en: "I'll send it to you.", vi: "TÃ´i sáº½ gá»­i cho báº¡n.", when: "Gá»­i file/link qua chat" },
    ],
    quiz: [
      { prompt: "'password' nghÄ©a lÃ ?", options: ["mÃ£ PIN", "máº­t kháº©u", "tÃ i khoáº£n", "Ä‘Äƒng nháº­p"], correctIndex: 1 },
      { prompt: "'I need to ___ my phone.' (sáº¡c)", options: ["charge", "load", "fill", "power"], correctIndex: 0 },
      { prompt: "'The app keeps ___.' (cá»© bá»‹ treo)", options: ["closing", "crashing", "stopping", "ending"], correctIndex: 1, explain: "'Crash' = treo, Ä‘á»©ng mÃ¡y Ä‘á»™t ngá»™t." },
      { prompt: "'settings' lÃ  gÃ¬?", options: ["tÃ­nh nÄƒng", "á»©ng dá»¥ng", "cÃ i Ä‘áº·t", "tÃ i khoáº£n"], correctIndex: 2 },
      { prompt: "CÃ¡ch fix kinh Ä‘iá»ƒn trong IT?", options: ["Äáº­p mÃ¡y", "Táº¯t má»Ÿ láº¡i", "Mua mÃ¡y má»›i", "Gá»i sáº¿p"], correctIndex: 1, explain: "'Turn it off and on again' â€” Ä‘Ã¹a thÃ¬ Ä‘Ã¹a, nhÆ°ng fix 80% lá»—i tháº­t." },
      { prompt: "'My battery is ___.' (háº¿t pin)", options: ["empty", "dead", "off", "low"], correctIndex: 1, explain: "'Battery is dead' = pin Ä‘Ã£ háº¿t hoÃ n toÃ n." },
      { prompt: "'download' nghÄ©a lÃ ?", options: ["táº£i lÃªn", "táº£i xuá»‘ng", "xoÃ¡", "cÃ i Ä‘áº·t"], correctIndex: 1 },
      { prompt: "'It's not ___.' (khÃ´ng hoáº¡t Ä‘á»™ng)", options: ["work", "works", "working", "worked"], correctIndex: 2, explain: "Sau 'is/are not' dÃ¹ng V-ing." },
    ],
  },

  // â”€â”€â”€ 5. FOOD & RESTAURANT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "food",
    title: "Ä‚n uá»‘ng & NhÃ  hÃ ng",
    emoji: "ðŸœ",
    tagline: "Gá»i mÃ³n, há»i nguyÃªn liá»‡u, tráº£ tiá»n",
    tip: "á»ž Má»¹/Anh, tip 10-20% lÃ  chuáº©n á»Ÿ nhÃ  hÃ ng. á»ž Äá»©c, khÃ´ng báº¯t buá»™c nhÆ°ng lÃ m trÃ²n lÃªn (â‚¬18.50 â†’ â‚¬20) lÃ  lá»‹ch sá»±.",
    basicVocab: [
      { en: "food", ipa: "/fuËd/", pos: "n", vi: "thá»©c Äƒn", example: "I love Vietnamese food.", exampleVi: "TÃ´i thÃ­ch mÃ³n Äƒn Viá»‡t." },
      { en: "water", ipa: "/ËˆwÉ”ËtÉ™r/", pos: "n", vi: "nÆ°á»›c", example: "A glass of water, please.", exampleVi: "Cho tÃ´i má»™t ly nÆ°á»›c." },
      { en: "rice", ipa: "/raÉªs/", pos: "n", vi: "cÆ¡m/gáº¡o", example: "I eat rice every day.", exampleVi: "TÃ´i Äƒn cÆ¡m má»—i ngÃ y." },
      { en: "meat", ipa: "/miËt/", pos: "n", vi: "thá»‹t", example: "I don't eat meat.", exampleVi: "TÃ´i khÃ´ng Äƒn thá»‹t." },
      { en: "vegetable", ipa: "/ËˆvedÊ’tÉ™bl/", pos: "n", vi: "rau cá»§", example: "Eat more vegetables.", exampleVi: "Ä‚n nhiá»u rau hÆ¡n Ä‘i." },
      { en: "drink", ipa: "/drÉªÅ‹k/", pos: "v", vi: "uá»‘ng", example: "What do you want to drink?", exampleVi: "Báº¡n muá»‘n uá»‘ng gÃ¬?" },
      { en: "hungry", ipa: "/ËˆhÊŒÅ‹É¡ri/", pos: "adj", vi: "Ä‘Ã³i", example: "I'm hungry.", exampleVi: "TÃ´i Ä‘Ã³i." },
      { en: "thirsty", ipa: "/ËˆÎ¸ÉœËrsti/", pos: "adj", vi: "khÃ¡t", example: "Are you thirsty?", exampleVi: "Báº¡n khÃ¡t khÃ´ng?" },
      { en: "delicious", ipa: "/dÉªËˆlÉªÊƒÉ™s/", pos: "adj", vi: "ngon", example: "This soup is delicious!", exampleVi: "MÃ³n sÃºp nÃ y ngon quÃ¡!" },
      { en: "menu", ipa: "/ËˆmenjuË/", pos: "n", vi: "thá»±c Ä‘Æ¡n", example: "Can I see the menu?", exampleVi: "Cho tÃ´i xem thá»±c Ä‘Æ¡n Ä‘Æ°á»£c khÃ´ng?" },
    ],
    advancedVocab: [
      { en: "order", ipa: "/ËˆÉ”ËrdÉ™r/", pos: "v", vi: "gá»i mÃ³n", example: "Are you ready to order?", exampleVi: "Báº¡n Ä‘Ã£ sáºµn sÃ ng gá»i mÃ³n chÆ°a?" },
      { en: "bill", ipa: "/bÉªl/", pos: "n", vi: "hoÃ¡ Ä‘Æ¡n", example: "Can I have the bill, please?", exampleVi: "Cho tÃ´i xin hoÃ¡ Ä‘Æ¡n." },
      { en: "tip", ipa: "/tÉªp/", pos: "n", vi: "tiá»n tip", example: "Don't forget to leave a tip.", exampleVi: "Äá»«ng quÃªn Ä‘á»ƒ láº¡i tiá»n tip." },
      { en: "spicy", ipa: "/ËˆspaÉªsi/", pos: "adj", vi: "cay", example: "Is this dish spicy?", exampleVi: "MÃ³n nÃ y cÃ³ cay khÃ´ng?" },
      { en: "sweet", ipa: "/swiËt/", pos: "adj", vi: "ngá»t", example: "This cake is too sweet.", exampleVi: "BÃ¡nh nÃ y ngá»t quÃ¡." },
      { en: "salty", ipa: "/ËˆsÉ”Ëlti/", pos: "adj", vi: "máº·n", example: "The soup is salty.", exampleVi: "SÃºp máº·n quÃ¡." },
      { en: "allergic", ipa: "/É™ËˆlÉœËrdÊ’Éªk/", pos: "adj", vi: "dá»‹ á»©ng", example: "I'm allergic to peanuts.", exampleVi: "TÃ´i dá»‹ á»©ng Ä‘áº­u phá»™ng." },
      { en: "vegetarian", ipa: "/ËŒvedÊ’É™ËˆteriÉ™n/", pos: "adj", vi: "Äƒn chay", example: "I'm vegetarian.", exampleVi: "TÃ´i Äƒn chay." },
      { en: "reservation", ipa: "/ËŒrezÉ™rËˆveÉªÊƒn/", pos: "n", vi: "Ä‘áº·t bÃ n", example: "I have a reservation for two.", exampleVi: "TÃ´i Ä‘Ã£ Ä‘áº·t bÃ n cho 2 ngÆ°á»i." },
      { en: "leftover", ipa: "/ËˆleftoÊŠvÉ™r/", pos: "n", vi: "Ä‘á»“ Äƒn thá»«a", example: "Can I take the leftovers home?", exampleVi: "TÃ´i mang Ä‘á»“ Äƒn thá»«a vá» Ä‘Æ°á»£c khÃ´ng?" },
    ],
    phrases: [
      { en: "Table for two, please.", vi: "Cho má»™t bÃ n 2 ngÆ°á»i.", when: "Khi vÃ o nhÃ  hÃ ng khÃ´ng Ä‘áº·t trÆ°á»›c" },
      { en: "I'd like to order...", vi: "TÃ´i muá»‘n gá»i...", when: "CÃ¡ch gá»i mÃ³n lá»‹ch sá»±" },
      { en: "Could I have the bill, please?", vi: "Cho tÃ´i xin hoÃ¡ Ä‘Æ¡n Ä‘Æ°á»£c khÃ´ng?", when: "Khi muá»‘n thanh toÃ¡n" },
      { en: "I'm allergic to...", vi: "TÃ´i dá»‹ á»©ng vá»›i...", when: "Quan trá»ng Ä‘á»ƒ trÃ¡nh nguy hiá»ƒm" },
      { en: "Can I get this to go?", vi: "Cho tÃ´i mang Ä‘i Ä‘Æ°á»£c khÃ´ng?", when: "Mua mang vá»" },
    ],
    quiz: [
      { prompt: "'I'm ___.' (Ä‘Ã³i)", options: ["thirsty", "hungry", "tired", "hot"], correctIndex: 1 },
      { prompt: "'menu' nghÄ©a lÃ ?", options: ["hoÃ¡ Ä‘Æ¡n", "thá»±c Ä‘Æ¡n", "mÃ³n Äƒn", "Ä‘á»“ uá»‘ng"], correctIndex: 1 },
      { prompt: "VÃ o nhÃ  hÃ ng cho 2 ngÆ°á»i, báº¡n nÃ³i gÃ¬?", options: ["Two people!", "Table for two, please.", "I want a table.", "Two seats."], correctIndex: 1 },
      { prompt: "'spicy' nghÄ©a lÃ ?", options: ["ngá»t", "máº·n", "cay", "chua"], correctIndex: 2 },
      { prompt: "'I'm allergic ___ peanuts.' (dá»‹ á»©ng)", options: ["with", "to", "of", "for"], correctIndex: 1, explain: "'Allergic TO something' â€” luÃ´n dÃ¹ng giá»›i tá»« 'to'." },
      { prompt: "'Can I get this ___?' (mang Ä‘i)", options: ["take away", "to go", "for go", "out"], correctIndex: 1, explain: "á»ž Má»¹: 'to go'. á»ž Anh: 'takeaway'." },
      { prompt: "'I'm vegetarian' nghÄ©a lÃ ?", options: ["TÃ´i Äƒn chay", "TÃ´i Ä‘áº§u báº¿p", "TÃ´i Äƒn rau", "TÃ´i khÃ´ng thÃ­ch thá»‹t"], correctIndex: 0 },
      { prompt: "'Could I have ___ bill?' (hoÃ¡ Ä‘Æ¡n)", options: ["a", "the", "an", "this"], correctIndex: 1, explain: "HoÃ¡ Ä‘Æ¡n cá»¥ thá»ƒ cá»§a báº¡n â†’ 'the bill'." },
    ],
  },

  // â”€â”€â”€ 6. HEALTH & MEDICAL â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "health",
    title: "Sá»©c khá»e & Bá»‡nh viá»‡n",
    emoji: "ðŸ¥",
    tagline: "KhÃ¡m bá»‡nh, nhÃ  thuá»‘c, mÃ´ táº£ triá»‡u chá»©ng",
    tip: "á»ž Äá»©c, Ä‘áº·t lá»‹ch khÃ¡m gá»i 'Termin'. MÃ´ táº£ Ä‘au: 'It hurts here' + chá»‰ tay lÃ  cÃ¡ch an toÃ n nháº¥t khi khÃ´ng biáº¿t tÃªn bá»™ pháº­n.",
    basicVocab: [
      { en: "doctor", ipa: "/ËˆdÉ‘ËktÉ™r/", pos: "n", vi: "bÃ¡c sÄ©", example: "I need to see a doctor.", exampleVi: "TÃ´i cáº§n Ä‘i khÃ¡m bÃ¡c sÄ©." },
      { en: "hospital", ipa: "/ËˆhÉ‘ËspÉªtl/", pos: "n", vi: "bá»‡nh viá»‡n", example: "She works at the hospital.", exampleVi: "CÃ´ áº¥y lÃ m á»Ÿ bá»‡nh viá»‡n." },
      { en: "sick", ipa: "/sÉªk/", pos: "adj", vi: "á»‘m", example: "I'm sick today.", exampleVi: "HÃ´m nay tÃ´i á»‘m." },
      { en: "pain", ipa: "/peÉªn/", pos: "n", vi: "Ä‘au", example: "I have pain in my back.", exampleVi: "TÃ´i bá»‹ Ä‘au lÆ°ng." },
      { en: "medicine", ipa: "/Ëˆmedsn/", pos: "n", vi: "thuá»‘c", example: "Take this medicine twice a day.", exampleVi: "Uá»‘ng thuá»‘c nÃ y 2 láº§n/ngÃ y." },
      { en: "fever", ipa: "/ËˆfiËvÉ™r/", pos: "n", vi: "sá»‘t", example: "I have a fever.", exampleVi: "TÃ´i bá»‹ sá»‘t." },
      { en: "headache", ipa: "/ËˆhedeÉªk/", pos: "n", vi: "Ä‘au Ä‘áº§u", example: "I have a bad headache.", exampleVi: "TÃ´i bá»‹ Ä‘au Ä‘áº§u náº·ng." },
      { en: "cough", ipa: "/kÉ”Ëf/", pos: "v", vi: "ho", example: "I have a cough.", exampleVi: "TÃ´i bá»‹ ho." },
      { en: "rest", ipa: "/rest/", pos: "v", vi: "nghá»‰ ngÆ¡i", example: "You need to rest.", exampleVi: "Báº¡n cáº§n nghá»‰ ngÆ¡i." },
      { en: "healthy", ipa: "/ËˆhelÎ¸i/", pos: "adj", vi: "khá»e máº¡nh", example: "Eat healthy food.", exampleVi: "Ä‚n Ä‘á»“ Äƒn lÃ nh máº¡nh." },
    ],
    advancedVocab: [
      { en: "appointment", ipa: "/É™ËˆpÉ”ÉªntmÉ™nt/", pos: "n", vi: "cuá»™c háº¹n (khÃ¡m)", example: "I'd like to make an appointment.", exampleVi: "TÃ´i muá»‘n Ä‘áº·t lá»‹ch khÃ¡m." },
      { en: "prescription", ipa: "/prÉªËˆskrÉªpÊƒn/", pos: "n", vi: "Ä‘Æ¡n thuá»‘c", example: "Here's your prescription.", exampleVi: "ÄÃ¢y lÃ  Ä‘Æ¡n thuá»‘c cá»§a báº¡n." },
      { en: "pharmacy", ipa: "/ËˆfÉ‘ËrmÉ™si/", pos: "n", vi: "nhÃ  thuá»‘c", example: "The pharmacy is open until 8.", exampleVi: "NhÃ  thuá»‘c má»Ÿ Ä‘áº¿n 8 giá»." },
      { en: "symptom", ipa: "/ËˆsÉªmptÉ™m/", pos: "n", vi: "triá»‡u chá»©ng", example: "What are your symptoms?", exampleVi: "Triá»‡u chá»©ng cá»§a báº¡n lÃ  gÃ¬?" },
      { en: "allergy", ipa: "/ËˆÃ¦lÉ™rdÊ’i/", pos: "n", vi: "dá»‹ á»©ng", example: "I have a pollen allergy.", exampleVi: "TÃ´i bá»‹ dá»‹ á»©ng pháº¥n hoa." },
      { en: "blood", ipa: "/blÊŒd/", pos: "n", vi: "mÃ¡u", example: "I need a blood test.", exampleVi: "TÃ´i cáº§n xÃ©t nghiá»‡m mÃ¡u." },
      { en: "injury", ipa: "/ËˆÉªndÊ’É™ri/", pos: "n", vi: "cháº¥n thÆ°Æ¡ng", example: "It's a minor injury.", exampleVi: "ÄÃ³ chá»‰ lÃ  cháº¥n thÆ°Æ¡ng nháº¹." },
      { en: "emergency", ipa: "/ÉªËˆmÉœËrdÊ’É™nsi/", pos: "n", vi: "cáº¥p cá»©u", example: "Call 911 â€” it's an emergency!", exampleVi: "Gá»i 911 â€” cáº¥p cá»©u!" },
      { en: "vaccine", ipa: "/vÃ¦kËˆsiËn/", pos: "n", vi: "váº¯c-xin", example: "I got my flu vaccine.", exampleVi: "TÃ´i Ä‘Ã£ tiÃªm váº¯c-xin cÃºm." },
      { en: "recover", ipa: "/rÉªËˆkÊŒvÉ™r/", pos: "v", vi: "há»“i phá»¥c", example: "He's recovering well.", exampleVi: "Anh áº¥y Ä‘ang há»“i phá»¥c tá»‘t." },
    ],
    phrases: [
      { en: "I don't feel well.", vi: "TÃ´i khÃ´ng khoáº».", when: "Má»Ÿ Ä‘áº§u khi mÃ´ táº£ bá»‡nh" },
      { en: "It hurts here.", vi: "Äau á»Ÿ Ä‘Ã¢y.", when: "Chá»‰ tay vÃ o chá»— Ä‘au" },
      { en: "Can I make an appointment?", vi: "TÃ´i Ä‘áº·t lá»‹ch khÃ¡m Ä‘Æ°á»£c khÃ´ng?", when: "Gá»i Ä‘iá»‡n Ä‘áº¿n phÃ²ng khÃ¡m" },
      { en: "Is it serious?", vi: "CÃ³ nghiÃªm trá»ng khÃ´ng?", when: "Há»i bÃ¡c sÄ© vá» tÃ¬nh tráº¡ng" },
      { en: "How often should I take this?", vi: "TÃ´i uá»‘ng cÃ¡i nÃ y bao lÃ¢u má»™t láº§n?", when: "Há»i liá»u thuá»‘c" },
    ],
    quiz: [
      { prompt: "'fever' lÃ  gÃ¬?", options: ["ho", "sá»‘t", "Ä‘au Ä‘áº§u", "Ä‘au bá»¥ng"], correctIndex: 1 },
      { prompt: "'I have ___ headache.' (Ä‘au Ä‘áº§u)", options: ["a", "the", "an", "â€”"], correctIndex: 0, explain: "Headache Ä‘áº¿m Ä‘Æ°á»£c sá»‘ Ã­t â†’ cáº§n 'a'." },
      { prompt: "Äáº·t lá»‹ch khÃ¡m tiáº¿ng Anh?", options: ["make an appointment", "do a meeting", "book a class", "schedule a date"], correctIndex: 0 },
      { prompt: "'pharmacy' lÃ  gÃ¬?", options: ["bá»‡nh viá»‡n", "phÃ²ng khÃ¡m", "nhÃ  thuá»‘c", "phÃ²ng cáº¥p cá»©u"], correctIndex: 2 },
      { prompt: "'I don't ___ well.' (khÃ´ng khoáº»)", options: ["feel", "look", "go", "have"], correctIndex: 0 },
      { prompt: "'It ___ here.' (Ä‘au á»Ÿ Ä‘Ã¢y)", options: ["pain", "hurt", "hurts", "painful"], correctIndex: 2, explain: "It (sá»‘ Ã­t) â†’ hurts (thÃªm s)." },
      { prompt: "Cáº¥p cá»©u tiáº¿ng Anh lÃ ?", options: ["urgent", "emergency", "fast", "quick"], correctIndex: 1 },
      { prompt: "BÃ¡c sÄ© kÃª Ä‘Æ¡n thuá»‘c, gá»i lÃ ?", options: ["receipt", "prescription", "report", "ticket"], correctIndex: 1 },
    ],
  },

  // â”€â”€â”€ 7. SHOPPING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "shopping",
    title: "Mua sáº¯m",
    emoji: "ðŸ›’",
    tagline: "Há»i giÃ¡, máº·c cáº£, Ä‘á»•i tráº£ hÃ ng",
    tip: "á»ž phÆ°Æ¡ng TÃ¢y, máº·c cáº£ KHÃ”NG phá»• biáº¿n trong cá»­a hÃ ng. Ngoáº¡i lá»‡: chá»£ trá»i (flea market), tiá»‡m Ä‘á»“ cÅ©. Online thÃ¬ 'discount code' lÃ  cÃ¡ch há»£p lá»‡ duy nháº¥t.",
    basicVocab: [
      { en: "shop", ipa: "/ÊƒÉ‘Ëp/", pos: "n", vi: "cá»­a hÃ ng", example: "There's a shop on the corner.", exampleVi: "CÃ³ má»™t cá»­a hÃ ng á»Ÿ gÃ³c Ä‘Æ°á»ng." },
      { en: "buy", ipa: "/baÉª/", pos: "v", vi: "mua", example: "I want to buy a jacket.", exampleVi: "TÃ´i muá»‘n mua má»™t cÃ¡i Ã¡o khoÃ¡c." },
      { en: "sell", ipa: "/sel/", pos: "v", vi: "bÃ¡n", example: "Do you sell phones here?", exampleVi: "á»ž Ä‘Ã¢y cÃ³ bÃ¡n Ä‘iá»‡n thoáº¡i khÃ´ng?" },
      { en: "price", ipa: "/praÉªs/", pos: "n", vi: "giÃ¡", example: "What's the price?", exampleVi: "GiÃ¡ bao nhiÃªu?" },
      { en: "cheap", ipa: "/tÊƒiËp/", pos: "adj", vi: "ráº»", example: "This shirt is cheap.", exampleVi: "CÃ¡i Ã¡o nÃ y ráº»." },
      { en: "expensive", ipa: "/ÉªkËˆspensÉªv/", pos: "adj", vi: "Ä‘áº¯t", example: "That bag is too expensive.", exampleVi: "CÃ¡i tÃºi Ä‘Ã³ Ä‘áº¯t quÃ¡." },
      { en: "money", ipa: "/ËˆmÊŒni/", pos: "n", vi: "tiá»n", example: "I don't have money.", exampleVi: "TÃ´i khÃ´ng cÃ³ tiá»n." },
      { en: "pay", ipa: "/peÉª/", pos: "v", vi: "tráº£ tiá»n", example: "How would you like to pay?", exampleVi: "Báº¡n muá»‘n tráº£ báº±ng cÃ¡ch nÃ o?" },
      { en: "size", ipa: "/saÉªz/", pos: "n", vi: "kÃ­ch cá»¡", example: "Do you have this in size M?", exampleVi: "CÃ³ size M khÃ´ng?" },
      { en: "color", ipa: "/ËˆkÊŒlÉ™r/", pos: "n", vi: "mÃ u", example: "What colors do you have?", exampleVi: "CÃ³ nhá»¯ng mÃ u nÃ o?" },
    ],
    advancedVocab: [
      { en: "discount", ipa: "/ËˆdÉªskaÊŠnt/", pos: "n", vi: "giáº£m giÃ¡", example: "Is there a discount?", exampleVi: "CÃ³ giáº£m giÃ¡ khÃ´ng?" },
      { en: "sale", ipa: "/seÉªl/", pos: "n", vi: "Ä‘á»£t giáº£m giÃ¡", example: "Everything is on sale!", exampleVi: "Táº¥t cáº£ Ä‘á»u Ä‘ang giáº£m giÃ¡!" },
      { en: "receipt", ipa: "/rÉªËˆsiËt/", pos: "n", vi: "biÃªn lai", example: "Keep the receipt.", exampleVi: "Giá»¯ biÃªn lai nhÃ©." },
      { en: "refund", ipa: "/ËˆriËfÊŒnd/", pos: "n", vi: "hoÃ n tiá»n", example: "Can I get a refund?", exampleVi: "TÃ´i cÃ³ Ä‘Æ°á»£c hoÃ n tiá»n khÃ´ng?" },
      { en: "exchange", ipa: "/ÉªksËˆtÊƒeÉªndÊ’/", pos: "v", vi: "Ä‘á»•i (hÃ ng)", example: "I'd like to exchange this.", exampleVi: "TÃ´i muá»‘n Ä‘á»•i cÃ¡i nÃ y." },
      { en: "fit", ipa: "/fÉªt/", pos: "v", vi: "vá»«a", example: "These shoes don't fit me.", exampleVi: "ÄÃ´i giÃ y nÃ y khÃ´ng vá»«a." },
      { en: "try on", ipa: "/traÉª É‘Ën/", pos: "phr", vi: "thá»­ (Ä‘á»“)", example: "Can I try this on?", exampleVi: "TÃ´i thá»­ cÃ¡i nÃ y Ä‘Æ°á»£c khÃ´ng?" },
      { en: "cash", ipa: "/kÃ¦Êƒ/", pos: "n", vi: "tiá»n máº·t", example: "Do you accept cash?", exampleVi: "Báº¡n cÃ³ nháº­n tiá»n máº·t khÃ´ng?" },
      { en: "credit card", ipa: "/ËˆkredÉªt kÉ‘Ërd/", pos: "n", vi: "tháº» tÃ­n dá»¥ng", example: "I'll pay by credit card.", exampleVi: "TÃ´i tráº£ báº±ng tháº» tÃ­n dá»¥ng." },
      { en: "warranty", ipa: "/ËˆwÉ”ËrÉ™nti/", pos: "n", vi: "báº£o hÃ nh", example: "It comes with a 2-year warranty.", exampleVi: "Sáº£n pháº©m cÃ³ báº£o hÃ nh 2 nÄƒm." },
    ],
    phrases: [
      { en: "How much is this?", vi: "CÃ¡i nÃ y bao nhiÃªu?", when: "Há»i giÃ¡ má»™t mÃ³n cá»¥ thá»ƒ" },
      { en: "Can I try this on?", vi: "Thá»­ Ä‘Æ°á»£c khÃ´ng?", when: "TrÆ°á»›c khi mua quáº§n Ã¡o" },
      { en: "Do you have a smaller/bigger size?", vi: "CÃ³ size nhá»/lá»›n hÆ¡n khÃ´ng?", when: "Khi khÃ´ng vá»«a" },
      { en: "I'm just looking, thanks.", vi: "TÃ´i chá»‰ xem thÃ´i, cáº£m Æ¡n.", when: "Khi nhÃ¢n viÃªn há»i 'May I help you?'" },
      { en: "I'd like to return this.", vi: "TÃ´i muá»‘n tráº£ láº¡i cÃ¡i nÃ y.", when: "Quay láº¡i Ä‘á»•i/tráº£ hÃ ng" },
    ],
    quiz: [
      { prompt: "'expensive' nghÄ©a lÃ ?", options: ["ráº»", "Ä‘áº¯t", "Ä‘áº¹p", "má»›i"], correctIndex: 1 },
      { prompt: "'How ___ is this?' (bao nhiÃªu)", options: ["many", "much", "long", "old"], correctIndex: 1, explain: "Tiá»n khÃ´ng Ä‘áº¿m Ä‘Æ°á»£c â†’ 'much'. 'Many' dÃ¹ng cho danh tá»« Ä‘áº¿m Ä‘Æ°á»£c." },
      { prompt: "'Can I ___ this on?' (thá»­ Ä‘á»“)", options: ["wear", "put", "try", "test"], correctIndex: 2 },
      { prompt: "'receipt' nghÄ©a lÃ ?", options: ["biÃªn lai", "hoÃ¡ Ä‘Æ¡n", "tháº» tÃ­n dá»¥ng", "phiáº¿u giáº£m giÃ¡"], correctIndex: 0 },
      { prompt: "NhÃ¢n viÃªn há»i 'May I help you?', báº¡n khÃ´ng cáº§n giÃºp:", options: ["Yes, please.", "I'm just looking, thanks.", "No problem.", "Thank you."], correctIndex: 1 },
      { prompt: "'These shoes don't ___ me.' (khÃ´ng vá»«a)", options: ["wear", "size", "fit", "match"], correctIndex: 2 },
      { prompt: "'refund' nghÄ©a lÃ ?", options: ["giáº£m giÃ¡", "hoÃ n tiá»n", "tráº£ gÃ³p", "khuyáº¿n mÃ£i"], correctIndex: 1 },
      { prompt: "'I'll pay ___ credit card.' (báº±ng)", options: ["with", "by", "in", "on"], correctIndex: 1, explain: "'Pay BY card / cash / check' â€” luÃ´n dÃ¹ng 'by' vá»›i phÆ°Æ¡ng thá»©c thanh toÃ¡n." },
    ],
  },

  // â”€â”€â”€ 8. FAMILY & RELATIONSHIPS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "family",
    title: "Gia Ä‘Ã¬nh & Quan há»‡",
    emoji: "ðŸ‘¨â€ðŸ‘©â€ðŸ‘§",
    tagline: "Giá»›i thiá»‡u ngÆ°á»i thÃ¢n, ká»ƒ vá» quan há»‡",
    tip: "Tiáº¿ng Anh khÃ´ng phÃ¢n biá»‡t 'anh/em' â€” Ä‘á»u lÃ  'brother'. Muá»‘n nÃ³i rÃµ: 'older brother' (anh trai) hoáº·c 'younger brother' (em trai).",
    basicVocab: [
      { en: "family", ipa: "/ËˆfÃ¦mÉ™li/", pos: "n", vi: "gia Ä‘Ã¬nh", example: "I love my family.", exampleVi: "TÃ´i yÃªu gia Ä‘Ã¬nh tÃ´i." },
      { en: "father", ipa: "/ËˆfÉ‘ËÃ°É™r/", pos: "n", vi: "bá»‘", example: "My father is a teacher.", exampleVi: "Bá»‘ tÃ´i lÃ  giÃ¡o viÃªn." },
      { en: "mother", ipa: "/ËˆmÊŒÃ°É™r/", pos: "n", vi: "máº¹", example: "My mother cooks well.", exampleVi: "Máº¹ tÃ´i náº¥u Äƒn ngon." },
      { en: "brother", ipa: "/ËˆbrÊŒÃ°É™r/", pos: "n", vi: "anh/em trai", example: "I have one brother.", exampleVi: "TÃ´i cÃ³ má»™t anh/em trai." },
      { en: "sister", ipa: "/ËˆsÉªstÉ™r/", pos: "n", vi: "chá»‹/em gÃ¡i", example: "My sister is older than me.", exampleVi: "Chá»‹ gÃ¡i tÃ´i lá»›n hÆ¡n tÃ´i." },
      { en: "son", ipa: "/sÊŒn/", pos: "n", vi: "con trai", example: "Their son is 5.", exampleVi: "Con trai há» 5 tuá»•i." },
      { en: "daughter", ipa: "/ËˆdÉ”ËtÉ™r/", pos: "n", vi: "con gÃ¡i", example: "Their daughter studies abroad.", exampleVi: "Con gÃ¡i há» há»c á»Ÿ nÆ°á»›c ngoÃ i." },
      { en: "friend", ipa: "/frend/", pos: "n", vi: "báº¡n", example: "She's my best friend.", exampleVi: "CÃ´ áº¥y lÃ  báº¡n thÃ¢n cá»§a tÃ´i." },
      { en: "marry", ipa: "/ËˆmÃ¦ri/", pos: "v", vi: "káº¿t hÃ´n", example: "They got married last year.", exampleVi: "Há» káº¿t hÃ´n nÄƒm ngoÃ¡i." },
      { en: "single", ipa: "/ËˆsÉªÅ‹É¡l/", pos: "adj", vi: "Ä‘á»™c thÃ¢n", example: "Are you single?", exampleVi: "Báº¡n cÃ²n Ä‘á»™c thÃ¢n khÃ´ng?" },
    ],
    advancedVocab: [
      { en: "parents", ipa: "/ËˆperÉ™nts/", pos: "n", vi: "bá»‘ máº¹", example: "I live with my parents.", exampleVi: "TÃ´i sá»‘ng vá»›i bá»‘ máº¹." },
      { en: "relatives", ipa: "/ËˆrelÉ™tÉªvz/", pos: "n", vi: "há» hÃ ng", example: "All my relatives came.", exampleVi: "Táº¥t cáº£ há» hÃ ng Ä‘á»u Ä‘áº¿n." },
      { en: "grandparents", ipa: "/ËˆÉ¡rÃ¦nperÉ™nts/", pos: "n", vi: "Ã´ng bÃ ", example: "My grandparents live in the countryside.", exampleVi: "Ã”ng bÃ  tÃ´i sá»‘ng á»Ÿ quÃª." },
      { en: "cousin", ipa: "/ËˆkÊŒzn/", pos: "n", vi: "anh/chá»‹ em há»", example: "He's my cousin from Berlin.", exampleVi: "Anh áº¥y lÃ  em há» tÃ´i á»Ÿ Berlin." },
      { en: "couple", ipa: "/ËˆkÊŒpl/", pos: "n", vi: "cáº·p Ä‘Ã´i", example: "They're a cute couple.", exampleVi: "Há» lÃ  má»™t cáº·p Ä‘Ã´i Ä‘Ã¡ng yÃªu." },
      { en: "engaged", ipa: "/ÉªnËˆÉ¡eÉªdÊ’d/", pos: "adj", vi: "Ä‘Ã£ Ä‘Ã­nh hÃ´n", example: "We got engaged in May.", exampleVi: "ChÃºng tÃ´i Ä‘Ã­nh hÃ´n thÃ¡ng NÄƒm." },
      { en: "relationship", ipa: "/rÉªËˆleÉªÊƒnÊƒÉªp/", pos: "n", vi: "má»‘i quan há»‡", example: "We have a long-distance relationship.", exampleVi: "ChÃºng tÃ´i yÃªu xa." },
      { en: "neighbor", ipa: "/ËˆneÉªbÉ™r/", pos: "n", vi: "hÃ ng xÃ³m", example: "My neighbor is very friendly.", exampleVi: "HÃ ng xÃ³m tÃ´i ráº¥t thÃ¢n thiá»‡n." },
      { en: "in-laws", ipa: "/ËˆÉªnlÉ”Ëz/", pos: "n", vi: "gia Ä‘Ã¬nh bÃªn chá»“ng/vá»£", example: "I visit my in-laws every Sunday.", exampleVi: "Chá»§ nháº­t nÃ o tÃ´i cÅ©ng Ä‘áº¿n nhÃ  bá»‘ máº¹ vá»£/chá»“ng." },
      { en: "raise", ipa: "/reÉªz/", pos: "v", vi: "nuÃ´i dáº¡y", example: "She's raising two kids alone.", exampleVi: "CÃ´ áº¥y má»™t mÃ¬nh nuÃ´i hai con." },
    ],
    phrases: [
      { en: "How many siblings do you have?", vi: "Báº¡n cÃ³ máº¥y anh chá»‹ em?", when: "CÃ¢u há»i xÃ£ giao khi má»›i quen" },
      { en: "We're related.", vi: "ChÃºng tÃ´i lÃ  há» hÃ ng.", when: "Giáº£i thÃ­ch quan há»‡" },
      { en: "She takes after her mother.", vi: "CÃ´ áº¥y giá»‘ng máº¹.", when: "Khi nháº­n xÃ©t giá»‘ng bá»‘/máº¹" },
      { en: "I'm an only child.", vi: "TÃ´i lÃ  con má»™t.", when: "Khi khÃ´ng cÃ³ anh chá»‹ em" },
      { en: "Are you seeing anyone?", vi: "Báº¡n Ä‘ang háº¹n hÃ² ai khÃ´ng?", when: "Há»i táº¿ nhá»‹ vá» tÃ¬nh tráº¡ng tÃ¬nh cáº£m" },
    ],
    quiz: [
      { prompt: "'sister' nghÄ©a lÃ ?", options: ["em trai", "chá»‹/em gÃ¡i", "máº¹", "cÃ´"], correctIndex: 1 },
      { prompt: "Tiáº¿ng Anh, 'anh trai' nÃ³i rÃµ lÃ ?", options: ["big brother", "older brother", "elder brother", "Cáº£ 2 vÃ  3 Ä‘á»u Ä‘Ãºng"], correctIndex: 3, explain: "'Older' phá»• biáº¿n hÆ¡n á»Ÿ Má»¹; 'elder' trang trá»ng hÆ¡n." },
      { prompt: "'I'm an ___ child.' (con má»™t)", options: ["alone", "only", "single", "one"], correctIndex: 1 },
      { prompt: "Cha máº¹ chá»“ng/vá»£ tiáº¿ng Anh?", options: ["parents", "in-laws", "relatives", "cousins"], correctIndex: 1 },
      { prompt: "'They ___ married last year.' (káº¿t hÃ´n)", options: ["are", "were", "got", "have"], correctIndex: 2, explain: "'Got married' = lá»… cÆ°á»›i Ä‘Ã£ diá»…n ra. 'Are married' = Ä‘ang trong tÃ¬nh tráº¡ng Ä‘Ã£ cÆ°á»›i." },
      { prompt: "'cousin' nghÄ©a lÃ ?", options: ["em há»", "anh em ruá»™t", "Ã´ng bÃ ", "chÃ¡u"], correctIndex: 0 },
      { prompt: "'She ___ after her mother.' (giá»‘ng máº¹)", options: ["takes", "looks", "comes", "goes"], correctIndex: 0, explain: "'Take after someone' = thá»«a hÆ°á»Ÿng Ä‘áº·c Ä‘iá»ƒm tá»« ai." },
      { prompt: "Há»i 'Báº¡n Ä‘ang yÃªu ai khÃ´ng?' táº¿ nhá»‹?", options: ["Do you have a boyfriend?", "Are you seeing anyone?", "Are you married?", "Who do you love?"], correctIndex: 1 },
    ],
  },

  // â”€â”€â”€ 9. TRANSPORTATION â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "transport",
    title: "Giao thÃ´ng & PhÆ°Æ¡ng tiá»‡n",
    emoji: "ðŸš—",
    tagline: "Äi tÃ u, taxi, há»i Ä‘Æ°á»ng",
    tip: "á»ž Äá»©c, há»‡ thá»‘ng giao thÃ´ng cÃ´ng cá»™ng (Bahn, S-Bahn, U-Bahn) ráº¥t tá»‘t. CÃ¢u cá»©u nguy: 'Does this train go to ___?' â€” nhÃ¢n viÃªn sáº½ tráº£ lá»i yes/no nhanh chÃ³ng.",
    basicVocab: [
      { en: "car", ipa: "/kÉ‘Ër/", pos: "n", vi: "Ã´ tÃ´", example: "I don't have a car.", exampleVi: "TÃ´i khÃ´ng cÃ³ Ã´ tÃ´." },
      { en: "bus", ipa: "/bÊŒs/", pos: "n", vi: "xe buÃ½t", example: "I take the bus to work.", exampleVi: "TÃ´i Ä‘i xe buÃ½t Ä‘i lÃ m." },
      { en: "train", ipa: "/treÉªn/", pos: "n", vi: "tÃ u hoáº£", example: "The train is fast.", exampleVi: "TÃ u hoáº£ thÃ¬ nhanh." },
      { en: "bike", ipa: "/baÉªk/", pos: "n", vi: "xe Ä‘áº¡p", example: "I ride my bike every day.", exampleVi: "TÃ´i Ä‘áº¡p xe má»—i ngÃ y." },
      { en: "taxi", ipa: "/ËˆtÃ¦ksi/", pos: "n", vi: "taxi", example: "Let's take a taxi.", exampleVi: "ChÃºng ta báº¯t taxi Ä‘i." },
      { en: "drive", ipa: "/draÉªv/", pos: "v", vi: "lÃ¡i xe", example: "Can you drive?", exampleVi: "Báº¡n biáº¿t lÃ¡i xe khÃ´ng?" },
      { en: "walk", ipa: "/wÉ”Ëk/", pos: "v", vi: "Ä‘i bá»™", example: "Let's walk there.", exampleVi: "ChÃºng ta Ä‘i bá»™ Ä‘áº¿n Ä‘Ã³ nhÃ©." },
      { en: "stop", ipa: "/stÉ‘Ëp/", pos: "n", vi: "Ä‘iá»ƒm dá»«ng", example: "The bus stop is over there.", exampleVi: "Äiá»ƒm dá»«ng xe buÃ½t á»Ÿ Ä‘áº±ng kia." },
      { en: "road", ipa: "/roÊŠd/", pos: "n", vi: "Ä‘Æ°á»ng", example: "This road is busy.", exampleVi: "Con Ä‘Æ°á»ng nÃ y Ä‘Ã´ng." },
      { en: "fast", ipa: "/fÃ¦st/", pos: "adj", vi: "nhanh", example: "Don't drive too fast.", exampleVi: "Äá»«ng lÃ¡i xe nhanh quÃ¡." },
    ],
    advancedVocab: [
      { en: "traffic", ipa: "/ËˆtrÃ¦fÉªk/", pos: "n", vi: "giao thÃ´ng", example: "There's a lot of traffic.", exampleVi: "ÄÆ°á»ng táº¯c láº¯m." },
      { en: "station", ipa: "/ËˆsteÉªÊƒn/", pos: "n", vi: "ga/tráº¡m", example: "Meet me at the station.", exampleVi: "Gáº·p tÃ´i á»Ÿ ga." },
      { en: "platform", ipa: "/ËˆplÃ¦tfÉ”Ërm/", pos: "n", vi: "sÃ¢n ga", example: "Your train leaves from platform 5.", exampleVi: "TÃ u cá»§a báº¡n rá»i tá»« sÃ¢n ga sá»‘ 5." },
      { en: "ticket", ipa: "/ËˆtÉªkÉªt/", pos: "n", vi: "vÃ©", example: "Where can I buy a ticket?", exampleVi: "TÃ´i mua vÃ© á»Ÿ Ä‘Ã¢u?" },
      { en: "transfer", ipa: "/trÃ¦nsËˆfÉœËr/", pos: "v", vi: "Ä‘á»•i chuyáº¿n", example: "You need to transfer at Central Station.", exampleVi: "Báº¡n cáº§n Ä‘á»•i chuyáº¿n á»Ÿ ga trung tÃ¢m." },
      { en: "license", ipa: "/ËˆlaÉªsns/", pos: "n", vi: "báº±ng lÃ¡i", example: "I got my driver's license.", exampleVi: "TÃ´i Ä‘Ã£ cÃ³ báº±ng lÃ¡i." },
      { en: "parking", ipa: "/ËˆpÉ‘ËrkÉªÅ‹/", pos: "n", vi: "Ä‘á»— xe", example: "Parking is free here.", exampleVi: "Äá»— xe á»Ÿ Ä‘Ã¢y miá»…n phÃ­." },
      { en: "rush hour", ipa: "/rÊŒÊƒ aÊŠÉ™r/", pos: "n", vi: "giá» cao Ä‘iá»ƒm", example: "Avoid rush hour.", exampleVi: "TrÃ¡nh giá» cao Ä‘iá»ƒm." },
      { en: "delay", ipa: "/dÉªËˆleÉª/", pos: "n", vi: "trÃ¬ hoÃ£n", example: "The train has a 10-minute delay.", exampleVi: "TÃ u trá»… 10 phÃºt." },
      { en: "directions", ipa: "/dÉ™ËˆrekÊƒnz/", pos: "n", vi: "chá»‰ Ä‘Æ°á»ng", example: "Can you give me directions?", exampleVi: "Báº¡n chá»‰ Ä‘Æ°á»ng cho tÃ´i Ä‘Æ°á»£c khÃ´ng?" },
    ],
    phrases: [
      { en: "How do I get to ___?", vi: "Äi Ä‘áº¿n ___ tháº¿ nÃ o?", when: "CÃ¢u há»i Ä‘Æ°á»ng váº¡n nÄƒng" },
      { en: "Does this go to ___?", vi: "CÃ¡i nÃ y cÃ³ Ä‘i Ä‘áº¿n ___ khÃ´ng?", when: "Há»i xe buÃ½t/tÃ u" },
      { en: "Turn left/right.", vi: "Ráº½ trÃ¡i/pháº£i.", when: "Khi chá»‰ Ä‘Æ°á»ng hoáº·c nghe chá»‰ Ä‘Æ°á»ng" },
      { en: "It's straight ahead.", vi: "Äi tháº³ng phÃ­a trÆ°á»›c.", when: "HÆ°á»›ng dáº«n Ä‘i tiáº¿p" },
      { en: "How long does it take?", vi: "Máº¥t bao lÃ¢u?", when: "Há»i thá»i gian di chuyá»ƒn" },
    ],
    quiz: [
      { prompt: "'station' nghÄ©a lÃ ?", options: ["báº¿n", "ga/tráº¡m", "sÃ¢n bay", "bÃ£i Ä‘á»—"], correctIndex: 1 },
      { prompt: "'I ___ the bus to work.' (Ä‘i xe buÃ½t)", options: ["go", "take", "drive", "ride"], correctIndex: 1, explain: "'Take the bus/train/taxi' = sá»­ dá»¥ng phÆ°Æ¡ng tiá»‡n Ä‘Ã³." },
      { prompt: "Giá» cao Ä‘iá»ƒm tiáº¿ng Anh lÃ ?", options: ["busy time", "hot hour", "rush hour", "peak time"], correctIndex: 2 },
      { prompt: "'Turn ___ at the corner.' (ráº½ trÃ¡i)", options: ["left", "right", "straight", "back"], correctIndex: 0 },
      { prompt: "'How ___ does it take?' (máº¥t bao lÃ¢u)", options: ["much", "many", "long", "far"], correctIndex: 2 },
      { prompt: "'transfer' khi Ä‘i tÃ u nghÄ©a lÃ ?", options: ["mua vÃ©", "Ä‘á»•i chuyáº¿n", "huá»· vÃ©", "Ä‘áº·t chá»—"], correctIndex: 1 },
      { prompt: "'It's straight ___.' (Ä‘i tháº³ng)", options: ["forward", "ahead", "front", "before"], correctIndex: 1 },
      { prompt: "'Does this train ___ to Berlin?' (Ä‘i Ä‘áº¿n)", options: ["come", "arrive", "go", "leave"], correctIndex: 2, explain: "'Go to' = hÆ°á»›ng Ä‘áº¿n nÆ¡i Ä‘Ã³." },
    ],
  },

  // â”€â”€â”€ 10. WEATHER & SEASONS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  {
    id: "weather",
    title: "Thá»i tiáº¿t & MÃ¹a",
    emoji: "ðŸŒ¤ï¸",
    tagline: "NÃ³i chuyá»‡n vá» thá»i tiáº¿t â€” cÃ¢u má»Ÿ Ä‘áº§u váº¡n nÄƒng",
    tip: "NgÆ°á»i Anh ná»•i tiáº¿ng nÃ³i chuyá»‡n thá»i tiáº¿t. 'Lovely weather, isn't it?' hoáº·c 'Bit cold today, isn't it?' lÃ  cÃ¡ch má»Ÿ Ä‘áº§u há»™i thoáº¡i nháº¹ nhÃ ng nháº¥t.",
    basicVocab: [
      { en: "weather", ipa: "/ËˆweÃ°É™r/", pos: "n", vi: "thá»i tiáº¿t", example: "How's the weather today?", exampleVi: "Thá»i tiáº¿t hÃ´m nay tháº¿ nÃ o?" },
      { en: "sunny", ipa: "/ËˆsÊŒni/", pos: "adj", vi: "náº¯ng", example: "It's sunny today.", exampleVi: "HÃ´m nay trá»i náº¯ng." },
      { en: "rainy", ipa: "/ËˆreÉªni/", pos: "adj", vi: "mÆ°a", example: "It's a rainy day.", exampleVi: "HÃ´m nay trá»i mÆ°a." },
      { en: "cloudy", ipa: "/ËˆklaÊŠdi/", pos: "adj", vi: "nhiá»u mÃ¢y", example: "It's cloudy this morning.", exampleVi: "SÃ¡ng nay trá»i nhiá»u mÃ¢y." },
      { en: "hot", ipa: "/hÉ‘Ët/", pos: "adj", vi: "nÃ³ng", example: "It's so hot!", exampleVi: "NÃ³ng quÃ¡!" },
      { en: "cold", ipa: "/koÊŠld/", pos: "adj", vi: "láº¡nh", example: "It's cold outside.", exampleVi: "BÃªn ngoÃ i láº¡nh." },
      { en: "wind", ipa: "/wÉªnd/", pos: "n", vi: "giÃ³", example: "There's a lot of wind today.", exampleVi: "HÃ´m nay nhiá»u giÃ³." },
      { en: "snow", ipa: "/snoÊŠ/", pos: "n", vi: "tuyáº¿t", example: "I love snow.", exampleVi: "TÃ´i thÃ­ch tuyáº¿t." },
      { en: "umbrella", ipa: "/ÊŒmËˆbrelÉ™/", pos: "n", vi: "Ã´", example: "Don't forget your umbrella.", exampleVi: "Äá»«ng quÃªn mang Ã´." },
      { en: "season", ipa: "/ËˆsiËzn/", pos: "n", vi: "mÃ¹a", example: "What's your favorite season?", exampleVi: "MÃ¹a báº¡n thÃ­ch nháº¥t lÃ  gÃ¬?" },
    ],
    advancedVocab: [
      { en: "spring", ipa: "/sprÉªÅ‹/", pos: "n", vi: "mÃ¹a xuÃ¢n", example: "Flowers bloom in spring.", exampleVi: "Hoa ná»Ÿ vÃ o mÃ¹a xuÃ¢n." },
      { en: "summer", ipa: "/ËˆsÊŒmÉ™r/", pos: "n", vi: "mÃ¹a hÃ¨", example: "We swim in summer.", exampleVi: "ChÃºng tÃ´i bÆ¡i vÃ o mÃ¹a hÃ¨." },
      { en: "autumn", ipa: "/ËˆÉ”ËtÉ™m/", pos: "n", vi: "mÃ¹a thu (UK)", example: "Leaves fall in autumn.", exampleVi: "LÃ¡ rá»¥ng vÃ o mÃ¹a thu." },
      { en: "fall", ipa: "/fÉ”Ël/", pos: "n", vi: "mÃ¹a thu (US)", example: "I love fall colors.", exampleVi: "TÃ´i thÃ­ch mÃ u cá»§a mÃ¹a thu." },
      { en: "winter", ipa: "/ËˆwÉªntÉ™r/", pos: "n", vi: "mÃ¹a Ä‘Ã´ng", example: "Winter in Germany is cold.", exampleVi: "MÃ¹a Ä‘Ã´ng á»Ÿ Äá»©c láº¡nh." },
      { en: "forecast", ipa: "/ËˆfÉ”ËrkÃ¦st/", pos: "n", vi: "dá»± bÃ¡o", example: "The forecast says rain.", exampleVi: "Dá»± bÃ¡o nÃ³i cÃ³ mÆ°a." },
      { en: "humid", ipa: "/ËˆhjuËmÉªd/", pos: "adj", vi: "áº©m", example: "Vietnam is humid in summer.", exampleVi: "Viá»‡t Nam áº©m vÃ o mÃ¹a hÃ¨." },
      { en: "freezing", ipa: "/ËˆfriËzÉªÅ‹/", pos: "adj", vi: "rÃ©t buá»‘t", example: "It's freezing outside!", exampleVi: "BÃªn ngoÃ i rÃ©t buá»‘t!" },
      { en: "storm", ipa: "/stÉ”Ërm/", pos: "n", vi: "bÃ£o", example: "A storm is coming.", exampleVi: "BÃ£o Ä‘ang Ä‘áº¿n." },
      { en: "temperature", ipa: "/ËˆtemprÉ™tÊƒÉ™r/", pos: "n", vi: "nhiá»‡t Ä‘á»™", example: "What's the temperature?", exampleVi: "Nhiá»‡t Ä‘á»™ lÃ  bao nhiÃªu?" },
    ],
    phrases: [
      { en: "How's the weather?", vi: "Thá»i tiáº¿t tháº¿ nÃ o?", when: "CÃ¢u há»i xÃ£ giao kinh Ä‘iá»ƒn" },
      { en: "It's freezing!", vi: "RÃ©t quÃ¡!", when: "Khi trá»i ráº¥t láº¡nh (dÆ°á»›i 0Â°C)" },
      { en: "It looks like rain.", vi: "TrÃ´ng cÃ³ váº» sáº¯p mÆ°a.", when: "Dá»± Ä‘oÃ¡n mÆ°a sáº¯p Ä‘áº¿n" },
      { en: "Lovely weather, isn't it?", vi: "Thá»i tiáº¿t Ä‘áº¹p nhá»‰?", when: "Má»Ÿ Ä‘áº§u chuyá»‡n vá»›i ngÆ°á»i láº¡" },
      { en: "Stay warm!", vi: "Giá»¯ áº¥m nhÃ©!", when: "ChÃºc khi trá»i láº¡nh" },
    ],
    quiz: [
      { prompt: "'sunny' nghÄ©a lÃ ?", options: ["mÆ°a", "náº¯ng", "láº¡nh", "giÃ³"], correctIndex: 1 },
      { prompt: "'It's ___ today.' (trá»i nÃ³ng)", options: ["hot", "warm", "heat", "summer"], correctIndex: 0 },
      { prompt: "MÃ¹a thu á»Ÿ Má»¹ gá»i lÃ ?", options: ["autumn", "fall", "leaf", "harvest"], correctIndex: 1, explain: "Má»¹: 'fall'. Anh: 'autumn'. Cáº£ hai Ä‘á»u Ä‘Ãºng." },
      { prompt: "'It's freezing!' nghÄ©a lÃ ?", options: ["MÃ¡t quÃ¡!", "áº¤m quÃ¡!", "RÃ©t quÃ¡!", "BÃ£o rá»“i!"], correctIndex: 2 },
      { prompt: "Khi nÃ o dÃ¹ng 'umbrella'?", options: ["trá»i náº¯ng to", "trá»i mÆ°a", "trá»i tuyáº¿t", "B vÃ  C Ä‘á»u cÃ³ thá»ƒ"], correctIndex: 3, explain: "Ã” dÃ¹ng khi mÆ°a, hoáº·c Ä‘Ã´i khi tuyáº¿t nháº¹. Khi náº¯ng to â†’ 'parasol' hoáº·c 'sun umbrella'." },
      { prompt: "'forecast' nghÄ©a lÃ ?", options: ["nhiá»‡t Ä‘á»™", "dá»± bÃ¡o", "thá»i tiáº¿t hÃ´m nay", "mÃ¹a"], correctIndex: 1 },
      { prompt: "'It ___ like rain.' (trÃ´ng sáº¯p mÆ°a)", options: ["seems", "looks", "feels", "sounds"], correctIndex: 1, explain: "'Look like + N' = trÃ´ng cÃ³ váº» nhÆ°..." },
      { prompt: "ChÃºc ngÆ°á»i khÃ¡c giá»¯ áº¥m khi trá»i láº¡nh?", options: ["Be warm!", "Stay warm!", "Have warm!", "Keep hot!"], correctIndex: 1 },
    ],
  },
];

