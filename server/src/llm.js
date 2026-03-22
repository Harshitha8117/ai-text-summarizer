import OpenAI from "openai";
import { buildPrompt } from "./prompt.js";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: "https://api.groq.com/openai/v1"
});

console.log("MODEL USED: llama-3.1-8b-instant");

export async function summarizeText(text) {
  const prompt = buildPrompt(text);

  try {
    const response = await client.chat.completions.create({
  model: "llama-3.1-8b-instant",
  messages: [{ role: "user", content: prompt }],
  temperature: 0
});

    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error("Empty response from model");
    }

    return JSON.parse(content);
  } catch (err) {
    console.error("LLM Error:", err.message);
    throw new Error("Failed to process text");
  }
}