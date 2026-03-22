import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";
import { summarizeText } from "./llm.js";
import { validateInput } from "./validate.js";


const app = express();

app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.post("/api/summarize", async (req, res) => {
  const { text } = req.body;

  const error = validateInput(text);
  if (error) {
    return res.status(400).json({ error });
  }

  try {
    const result = await summarizeText(text);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to summarize text" });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});