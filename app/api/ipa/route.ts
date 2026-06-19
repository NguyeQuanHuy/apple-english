import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return NextResponse.json({ error: "No API key" }, { status: 500 });

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: "claude-sonnet-4-6",
      max_tokens: 1000,
      messages: [{
        role: "user",
        content: `Bạn là chuyên gia ngôn ngữ. Phân tích IPA cho đoạn sau, trả về ONLY JSON:

"${text}"

{"words":[{"word":"hello","ipa":"/həˈloʊ/"}],"fullIPA":"/full ipa/","explanation":"giải thích ngắn tiếng Việt về âm khó, tối đa 2 câu"}`
      }]
    }),
  });

  const data = await res.json();
  const raw = data.content?.map((c: any) => c.text || "").join("") || "";
  const clean = raw.replace(/```json|```/g, "").trim();
  try {
    return NextResponse.json(JSON.parse(clean));
  } catch {
    return NextResponse.json({ error: "Parse error", raw }, { status: 500 });
  }
}