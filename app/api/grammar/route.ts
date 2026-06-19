import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { text } = await req.json();
  if (!text) return NextResponse.json({ error: "No text" }, { status: 400 });

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
        content: `Phan tich ngu phap doan tieng Anh sau, tra ve ONLY JSON:\n\n"${text}"\n\n{"sentences":[{"original":"...","structure":"Subject + Verb + Object","vi":"Giai thich bang tieng Viet","errors":[],"corrected":"...hoac null neu dung"}],"summary":"Nhan xet tong the ngan"}`
      }]
    }),
  });

  const data = await res.json();
  const raw = data.content?.map((c: any) => c.text || "").join("") || "";
  const clean = raw.replace(/```json|```/g, "").trim();
  try {
    return NextResponse.json(JSON.parse(clean));
  } catch {
    return NextResponse.json({ error: "Parse error" }, { status: 500 });
  }
}