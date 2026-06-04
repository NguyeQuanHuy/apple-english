const fs = require('fs');
let buf = fs.readFileSync('data/toeic.ts');
if (buf[0] === 0xEF && buf[1] === 0xBB && buf[2] === 0xBF) buf = buf.slice(3);
let c = buf.toString('utf8');

// Xoa toeic-mini-3 khoi THEMES
const start = c.indexOf(',\n  {\n    id: "toeic-mini-3"');
const end = c.indexOf('\n  }', start) + 4;
console.log('Removing from:', start, 'to:', end);
console.log('Sample:', c.slice(start, start+50));
c = c.slice(0, start) + c.slice(end);

// Them vao TOEIC_TESTS
const newTest = [
  ',',
  '  {',
  '    id: "toeic-mini-3",',
  '    title: "Mini Test 3 \u2014 Listening Part 2",',
  '    description: "10 c\u00e2u h\u1ecfi \u0111\u00e1p ng\u1eafn (Part 2). Th\u1eddi gian: 6 ph\u00fat.",',
  '    timeLimitSec: 360,',
  '    questions: [',
  '      { id: "t3-1", part: 5, question: "Where is the meeting room?", options: ["It starts at 3 PM.", "It is on the second floor.", "There are 10 people.", "Yes, I will attend."], correctIndex: 1, explain: "Where \u2192 tr\u1ea3 l\u1eddi v\u1ecb tr\u00ed." },',
  '      { id: "t3-2", part: 5, question: "When will the package arrive?", options: ["By tomorrow morning.", "At the post office.", "From the supplier.", "It weighs 5 kg."], correctIndex: 0, explain: "When \u2192 tr\u1ea3 l\u1eddi th\u1eddi gian." },',
  '      { id: "t3-3", part: 5, question: "Who is responsible for the budget?", options: ["Last quarter.", "The finance team.", "In the main office.", "Yes, it was approved."], correctIndex: 1, explain: "Who \u2192 tr\u1ea3 l\u1eddi ng\u01b0\u1eddi/b\u1ed9 ph\u1eadn." },',
  '      { id: "t3-4", part: 5, question: "How did you get to the conference?", options: ["It was very informative.", "I took the subway.", "Next Monday.", "About 200 people."], correctIndex: 1, explain: "How \u2192 tr\u1ea3 l\u1eddi c\u00e1ch th\u1ee9c." },',
  '      { id: "t3-5", part: 5, question: "Could you send me the report?", options: ["Yes, I will email it now.", "It is on my desk.", "No, I did not write it.", "The report was late."], correctIndex: 0, explain: "Could you...? \u2192 Yes/No + h\u00e0nh \u0111\u1ed9ng." },',
  '      { id: "t3-6", part: 5, question: "Why was the meeting postponed?", options: ["In the conference room.", "Because the manager is traveling.", "At 2 PM tomorrow.", "For one hour."], correctIndex: 1, explain: "Why \u2192 tr\u1ea3 l\u1eddi l\u00fd do." },',
  '      { id: "t3-7", part: 5, question: "Have you reviewed the contract yet?", options: ["Yes, I finished it this morning.", "The contract is 10 pages.", "No, the meeting is tomorrow.", "It was signed last week."], correctIndex: 0, explain: "Have you...yet? \u2192 Yes/No + k\u1ebft qu\u1ea3." },',
  '      { id: "t3-8", part: 5, question: "Which printer should I use?", options: ["It needs more paper.", "Use the one on the third floor.", "I printed 50 copies.", "The printer was repaired."], correctIndex: 1, explain: "Which \u2192 l\u1ef1a ch\u1ecdn c\u1ee5 th\u1ec3." },',
  '      { id: "t3-9", part: 5, question: "Do you know when Mr. Kim will be back?", options: ["He went to Seoul.", "He should return by Friday.", "Yes, he called this morning.", "His office is on the 5th floor."], correctIndex: 1, explain: "H\u1ecfi th\u1eddi gian \u2192 tr\u1ea3 l\u1eddi th\u1eddi gian c\u1ee5 th\u1ec3." },',
  '      { id: "t3-10", part: 5, question: "Is there a parking lot near the office?", options: ["Yes, just around the corner.", "I drive to work every day.", "The office opens at 9.", "No, I do not have a car."], correctIndex: 0, explain: "Yes/No v\u1ec1 v\u1ecb tr\u00ed \u2192 Yes/No + th\u00f4ng tin b\u1ed5 sung." },',
  '    ]',
  '  }',
].join('\n');

c = c.replace('];', newTest + '\n];');
fs.writeFileSync('data/toeic.ts', c, 'utf8');
console.log('toeic-mini-3 in TESTS:', c.includes('toeic-mini-3'));
