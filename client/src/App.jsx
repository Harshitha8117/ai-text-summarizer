import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Dynamic API URL (IMPORTANT for deployment)
  const API_URL =
    import.meta.env.VITE_API_URL || "http://localhost:5000";

  const handleSubmit = async () => {
    if (!text.trim()) {
      setError("Please enter some text");
      return;
    }

    setError("");
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(`${API_URL}/api/summarize`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setResult(data);
    } catch (err) {
      setError("Failed to connect to server");
    }

    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>AI Summarizer</h1>

      <textarea
        rows="6"
        placeholder="Paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={styles.textarea}
      />

      <button onClick={handleSubmit} style={styles.button}>
        {loading ? "Analyzing..." : "Summarize"}
      </button>

      {error && <p style={styles.error}>{error}</p>}

      {result && (
        <div style={styles.card}>
          <h3>Summary</h3>
          <p>{result.summary}</p>

          <h3>Key Points</h3>
          <ul>
            {result.keyPoints?.length > 0 ? (
              result.keyPoints.map((p, i) => (
                <li key={i}>{p}</li>
              ))
            ) : (
              <li>No key points generated</li>
            )}
          </ul>

          <h3>Sentiment</h3>
          <span
            style={{
              ...styles.badge,
              backgroundColor:
                result.sentiment === "positive"
                  ? "#4CAF50"
                  : result.sentiment === "negative"
                  ? "#f44336"
                  : "#9e9e9e"
            }}
          >
            {result.sentiment}
          </span>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "700px",
    margin: "40px auto",
    fontFamily: "Arial, sans-serif"
  },
  title: {
    textAlign: "center"
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "15px",
    fontSize: "14px"
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#007bff",
    color: "white",
    cursor: "pointer",
    marginBottom: "20px"
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "#fff"
  },
  badge: {
    padding: "6px 12px",
    borderRadius: "20px",
    color: "white",
    fontWeight: "bold"
  },
  error: {
    color: "red",
    marginTop: "10px"
  }
};

export default App;