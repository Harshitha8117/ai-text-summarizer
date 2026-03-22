# AI Text Summarizer

## Overview
A simple full-stack app that converts unstructured text into a structured summary using an LLM.

## Tech Stack
- React (frontend)
- Node.js + Express (backend)
- OpenAI API

## Setup

### 1. Clone repo

### 2. Backend
cd server  
npm install  

Create `.env`:
OPENAI_API_KEY=your_key_here  

Run:
npm start  

### 3. Frontend
cd client  
npm install  
npm run dev  

## Features
- One sentence summary
- Three key points
- Sentiment analysis

## Prompt Design
Strict JSON output ensures easy parsing and consistent structure.

## Trade-offs
- Minimal UI
- Single endpoint
- No authentication

## Future Improvements
- File upload support
- Batch processing
- Better UI