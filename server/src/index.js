import dotenv from "dotenv";
dotenv.config();


import express from "express";
import cors from "cors";
import { summarizeText } from "./llm.js";
import { validateInput } from "./validate.js";


const app = express();

app.use(cors());
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

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});