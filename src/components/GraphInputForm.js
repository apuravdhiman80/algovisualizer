import React, { useState } from "react";
import "./GraphInputForm.css";

function GraphInputForm({ onSubmit }) {
  const [graphData, setGraphData] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const parsedData = JSON.parse(graphData);
      onSubmit(parsedData);
    } catch (err) {
      alert("Invalid JSON! Please check your input.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="graph-input-form">
      <textarea
        value={graphData}
        onChange={(e) => setGraphData(e.target.value)}
        placeholder={`Enter graph data in JSON format. Example:\n\n{
  "nodes": ["A", "B", "C", "D", "E"],
  "edges": [
    { "from": "A", "to": "B", "weight": 4 },
    { "from": "A", "to": "C", "weight": 3 }
  ]
}`}
      />
      <button type="submit">Submit Graph</button>
    </form>
  );
}

export default GraphInputForm;
