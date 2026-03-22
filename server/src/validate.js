export function validateInput(text) {
  if (!text || typeof text !== "string" || text.trim() === "") {
    return "Input text is required";
  }
  return null;
}