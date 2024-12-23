import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";
const styles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "100px",
};
function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage">
      <h1>Prim's Algorithm Visualizer</h1>
      <p>
        Prim's Algorithm is a greedy algorithm that builds a minimum spanning
        tree (MST) by adding the smallest edge at each step while avoiding
        cycles.
      </p>
      <div style={styles}>
        <button onClick={() => navigate("/visualizer")}>
          Start Visualizer
        </button>
      </div>
    </div>
  );
}

export default HomePage;
