# AI Text Summarizer

## Overview

A minimal full-stack application that converts unstructured text into a structured summary using a Large Language Model (LLM).
The system extracts a concise one-sentence summary, three key points, and sentiment (positive / neutral / negative).

---

## Demo

* Input: Raw unstructured text
* Output: Structured JSON rendered in a clean UI

---

## Features

* One-sentence summary generation
* Key point extraction (3 bullets)
* Sentiment classification
* Clean and simple UI
* Error handling for API and input validation

---

## Tech Stack

**Frontend**

* React (Vite)

**Backend**

* Node.js
* Express

**LLM**

* Groq API (LLaMA 3.1)

---

## Project Structure

```
assignment-summarizer/

client/
  src/
    App.jsx
    main.jsx
    components/
  index.html
  package.json

server/
  src/
    index.js
    llm.js
    prompt.js
    validate.js
  .env.example
  package.json

README.md
```

---

## Setup Instructions

### 1. Clone the repository

```
git clone https://github.com/YOUR_USERNAME/ai-text-summarizer.git
cd ai-text-summarizer
```

---

### 2. Backend Setup

```
cd server
npm install
```

Create a `.env` file:

```
OPENAI_API_KEY=your_api_key_here
```

Run server:

```
npm start
```

---

### 3. Frontend Setup

```
cd client
npm install
npm run dev
```

---

## API Endpoint

### POST `/api/summarize`

**Request Body**

```json
{
  "text": "your input text here"
}
```

**Response**

```json
{
  "summary": "One sentence summary",
  "keyPoints": ["point 1", "point 2", "point 3"],
  "sentiment": "positive"
}
```

---

## Prompt Design

The application uses a structured prompt to enforce strict JSON output:

* Fixed schema (summary, keyPoints, sentiment)
* Controlled sentiment labels
* No markdown or extra text

This ensures reliable parsing and consistent results.

---

## Error Handling

* Empty input validation
* API failure handling
* Invalid JSON response handling
* Frontend error display

---

## Trade-offs

* Minimal UI to prioritize core functionality
* Single API endpoint for simplicity
* No authentication (not required for assignment scope)

---

## Future Improvements

* File upload support
* Batch processing
* Better UI/UX (design system)
* Model fallback handling
* Response caching

---

## Example Output

```json
{
  "summary": "The meeting lasted one hour and covered project updates.",
  "keyPoints": [
    "Meeting at 10 AM",
    "Discussed timelines",
    "Reviewed progress"
  ],
  "sentiment": "neutral"
}
```

---

## Notes

* Used Groq API for faster inference
* Updated model due to deprecations (LLaMA 3.1)
* Focused on clarity, simplicity, and reliability

---

## Author

Harshitha K
