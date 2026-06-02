const fs = require('fs');
let c = fs.readFileSync('app/learn/toeic/theme/[id]/page.tsx', 'utf8');
c = c.replace('KhÃ´ng tÃ¬m tháº¥y chá»§ Ä\u2019á»\u009e.', 'Kh\u00f4ng t\u00ecm th\u1ea5y ch\u1ee7 \u0111\u1ec1.');
c = c.replace('Báº¥m Ä\u2019á»\u0192 xem nghÄ©a', 'B\u1ea5m \u0111\u1ec3 xem ngh\u0129a');
c = c.replace('TrÆ°á»\u009bc', 'Tr\u01b0\u1edbc');
c = c.replace('HoÃ n thÃ nh (+15 XP)', 'Ho\u00e0n th\u00e0nh (+15 XP)');
c = c.replace('Tá»\u009b tiáº¿p theo', 'T\u1eeb ti\u1ebfp theo');
fs.writeFileSync('app/learn/toeic/theme/[id]/page.tsx', c, 'utf8');
console.log('Done');
