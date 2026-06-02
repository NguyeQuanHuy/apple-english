import re
with open('components/top-bar.tsx', 'r', encoding='utf-8') as f:
    code = f.read()

logo = '<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 grid place-items-center flex-shrink-0" style={{ boxShadow: "0 3px 0 0 #1d4ed8" }}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="13" r="8" stroke="white" strokeWidth="1.5" fill="none"/><ellipse cx="12" cy="13" rx="3.5" ry="8" stroke="white" strokeWidth="1.2" fill="none"/><line x1="4" y1="13" x2="20" y2="13" stroke="white" strokeWidth="1.2"/><line x1="5.5" y1="9" x2="18.5" y2="9" stroke="white" strokeWidth="1"/><line x1="5.5" y1="17" x2="18.5" y2="17" stroke="white" strokeWidth="1"/><circle cx="15" cy="5" r="3.5" fill="#4ade80"/><path d="M15 3.5 C15.5 2.5 17 2 17 2 C16 2.5 15.5 3.5 15 5 C14 3.5 14 2.5 15 3.5Z" fill="#166534"/><path d="M15 3 C15.5 2 16.5 1.5 17 1.5" stroke="#166534" strokeWidth="0.8" strokeLinecap="round"/></svg></div>'

code = re.sub(r'<div className="w-9 h-9[^>]*>.*?</div>', logo, code, flags=re.DOTALL, count=1)
with open('components/top-bar.tsx', 'w', encoding='utf-8') as f:
    f.write(code)
print('Done!')
