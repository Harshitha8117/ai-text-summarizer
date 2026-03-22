export const buildPrompt = (text) => `
You are an assistant that converts unstructured text into STRICT JSON.

Return ONLY valid JSON in this format:

{
  "summary": "exactly one short sentence",
  "keyPoints": ["point 1", "point 2", "point 3"],
  "sentiment": "positive | neutral | negative"
}

Rules:
- summary MUST be one sentence only (max 20 words)
- keyPoints MUST contain exactly 3 short bullet points
- sentiment MUST be one of the allowed values
- DO NOT include explanation
- DO NOT include markdown
- DO NOT include extra text

Text:
${text}
`;