import { NextRequest, NextResponse } from "next/server";

const IPA: Record<string, string> = {
  "a":"/æ/","about":"/əˈbaʊt/","after":"/ˈæftər/","again":"/əˈɡɛn/","all":"/ɔːl/","am":"/æm/","an":"/æn/","and":"/ænd/","any":"/ˈɛni/","apple":"/ˈæpəl/","are":"/ɑːr/","arm":"/ɑːrm/","as":"/æz/","at":"/æt/",
  "back":"/bæk/","bad":"/bæd/","ball":"/bɔːl/","be":"/biː/","because":"/bɪˈkɔːz/","been":"/bɪn/","big":"/bɪɡ/","book":"/bʊk/","but":"/bʌt/","buy":"/baɪ/","by":"/baɪ/",
  "call":"/kɔːl/","can":"/kæn/","car":"/kɑːr/","cat":"/kæt/","city":"/ˈsɪti/","come":"/kʌm/","computer":"/kəmˈpjuːtər/","could":"/kʊd/","country":"/ˈkʌntri/",
  "day":"/deɪ/","did":"/dɪd/","do":"/duː/","dog":"/dɔːɡ/","door":"/dɔːr/","down":"/daʊn/",
  "ear":"/ɪr/","eat":"/iːt/","egg":"/ɛɡ/","end":"/ɛnd/","english":"/ˈɪŋɡlɪʃ/","every":"/ˈɛvri/",
  "face":"/feɪs/","family":"/ˈfæməli/","feel":"/fiːl/","find":"/faɪnd/","first":"/fɜːrst/","fish":"/fɪʃ/","flower":"/ˈflaʊər/","food":"/fuːd/","for":"/fɔːr/","friend":"/frɛnd/","from":"/frəm/",
  "get":"/ɡɛt/","give":"/ɡɪv/","go":"/ɡoʊ/","good":"/ɡʊd/","great":"/ɡreɪt/","green":"/ɡriːn/","guitar":"/ɡɪˈtɑːr/",
  "hand":"/hænd/","happy":"/ˈhæpi/","hat":"/hæt/","have":"/hæv/","he":"/hiː/","hello":"/həˈloʊ/","help":"/hɛlp/","her":"/hɜːr/","here":"/hɪr/","hi":"/haɪ/","him":"/hɪm/","his":"/hɪz/","home":"/hoʊm/","house":"/haʊs/","how":"/haʊ/",
  "i":"/aɪ/","ice":"/aɪs/","if":"/ɪf/","in":"/ɪn/","is":"/ɪz/","island":"/ˈaɪlənd/","it":"/ɪt/",
  "jeans":"/dʒiːnz/","job":"/dʒɔːb/","juice":"/dʒuːs/","just":"/dʒʌst/",
  "keep":"/kiːp/","key":"/kiː/","king":"/kɪŋ/","know":"/noʊ/",
  "lamp":"/læmp/","last":"/læst/","learn":"/lɜːrn/","like":"/laɪk/","lion":"/ˈlaɪən/","live":"/lɪv/","long":"/lɔːŋ/","look":"/lʊk/","love":"/lʌv/",
  "make":"/meɪk/","man":"/mæn/","many":"/ˈmɛni/","me":"/miː/","milk":"/mɪlk/","moon":"/muːn/","more":"/mɔːr/","morning":"/ˈmɔːrnɪŋ/","much":"/mʌtʃ/","my":"/maɪ/",
  "name":"/neɪm/","new":"/njuː/","next":"/nɛkst/","night":"/naɪt/","no":"/noʊ/","nose":"/noʊz/","not":"/nɔːt/","now":"/naʊ/",
  "of":"/əv/","on":"/ɔːn/","one":"/wʌn/","only":"/ˈoʊnli/","or":"/ɔːr/","orange":"/ˈɔːrɪndʒ/","our":"/aʊər/","out":"/aʊt/","over":"/ˈoʊvər/",
  "pen":"/pɛn/","people":"/ˈpiːpəl/","phone":"/foʊn/","pizza":"/ˈpiːtsə/","place":"/pleɪs/","play":"/pleɪ/","please":"/pliːz/","put":"/pʊt/",
  "question":"/ˈkwɛstʃən/",
  "rainbow":"/ˈreɪnboʊ/","rice":"/raɪs/","right":"/raɪt/","run":"/rʌn/",
  "said":"/sɛd/","say":"/seɪ/","school":"/skuːl/","see":"/siː/","she":"/ʃiː/","should":"/ʃʊd/","so":"/soʊ/","some":"/sʌm/","speak":"/spiːk/","study":"/ˈstʌdi/","sun":"/sʌn/",
  "take":"/teɪk/","talk":"/tɔːk/","thank":"/θæŋk/","thanks":"/θæŋks/","that":"/ðæt/","the":"/ðə/","their":"/ðɛr/","them":"/ðɛm/","then":"/ðɛn/","there":"/ðɛr/","they":"/ðeɪ/","think":"/θɪŋk/","this":"/ðɪs/","tiger":"/ˈtaɪɡər/","time":"/taɪm/","to":"/tuː/","today":"/təˈdeɪ/","too":"/tuː/","tree":"/triː/",
  "umbrella":"/ʌmˈbrɛlə/","under":"/ˈʌndər/","up":"/ʌp/","us":"/ʌs/",
  "van":"/væn/","very":"/ˈvɛri/","violin":"/ˌvaɪəˈlɪn/",
  "want":"/wɔːnt/","was":"/wɔːz/","water":"/ˈwɔːtər/","we":"/wiː/","well":"/wɛl/","what":"/wɔːt/","when":"/wɛn/","where":"/wɛr/","which":"/wɪtʃ/","who":"/huː/","why":"/waɪ/","will":"/wɪl/","wind":"/wɪnd/","with":"/wɪð/","work":"/wɜːrk/","world":"/wɜːrld/","would":"/wʊd/",
  "year":"/jɪr/","yes":"/jɛs/","you":"/juː/","your":"/jʊr/",
  "zebra":"/ˈziːbrə/","zero":"/ˈzɪroʊ/"
};

function wordToIPA(word: string): string {
  const w = word.toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return "";
  if (IPA[w]) return IPA[w];
  return "/" + w + "/";
}

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  if (!text) return NextResponse.json({ error: "No text" }, { status: 400 });

  const tokens = text.match(/[a-zA-Z]+/g) || [];
  const words = tokens.map((w: string) => ({ word: w, ipa: wordToIPA(w) }));
  const fullIPA = words.map((w: { word: string; ipa: string }) => w.ipa.replace(/\//g, "")).join(" ");

  const hardSounds = words
    .filter((w: { word: string; ipa: string }) =>
      w.ipa.includes("θ") || w.ipa.includes("ð") || w.ipa.includes("ŋ") || w.ipa.includes("ʃ") || w.ipa.includes("dʒ")
    )
    .map((w: { word: string; ipa: string }) => w.word);

  const explanation =
    hardSounds.length > 0
      ? "Âm khó: " + hardSounds.join(", ") + ". Chú ý /θ/ (think), /ð/ (the), /ŋ/ (sing) khác tiếng Việt."
      : "Các âm phổ biến — luyện đọc chậm rồi tăng dần tốc độ.";

  return NextResponse.json({ words, fullIPA: "/" + fullIPA + "/", explanation });
}