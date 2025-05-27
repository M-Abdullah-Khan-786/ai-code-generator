import OpenAI from "openai";
import { NextResponse } from "next/server";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "user", content: `Generate a code snippet for: ${prompt}` },
      ],
      temperature: 0.7,
    });

    const code =
      chatCompletion.choices[0].message?.content || "No code generated.";
    return NextResponse.json({ result: code });
  } catch (error: any) {
    console.error("OpenAI error:", error);
    return NextResponse.json(
      { error: error?.message || "Internal Server Error" },
      { status: error?.status || 500 }
    );
  }
}
