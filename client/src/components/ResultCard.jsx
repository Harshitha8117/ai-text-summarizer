function ResultCard({ result }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Summary</h3>
      <p>{result.summary}</p>

      <h3>Key Points</h3>
      <ul>
        {result.keyPoints.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>

      <h3>Sentiment</h3>
      <p>{result.sentiment}</p>
    </div>
  );
}

export default ResultCard;