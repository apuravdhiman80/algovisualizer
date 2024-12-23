import React, { useState, useEffect } from "react";
import GraphInputForm from "./GraphInputForm";
import { runPrimsAlgorithm } from "../primsAlgorithm";
import "./Visualizer.css";

function Visualizer() {
  const [graph, setGraph] = useState(null);
  const [result, setResult] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);

  const handleGraphSubmit = (data) => {
    setGraph(data);
    const result = runPrimsAlgorithm(data);
    setResult(result.steps);
    setCurrentStep(0);
  };

  useEffect(() => {
    if (currentStep < result.length) {
      const timer = setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentStep, result]);

  const getNodePosition = (node) => {
    const index = graph.nodes.indexOf(node);
    return {
      x: 100 + index * 150,
      y: 150 + (index % 2 === 0 ? 50 : -50),
    };
  };

  return (
    <div className="visualizer">
      {!graph ? (
        <GraphInputForm onSubmit={handleGraphSubmit} />
      ) : (
        <div className="visualization-area">
          <svg className="graph">
            {graph.edges.map((edge, index) => {
              const fromPos = getNodePosition(edge.from);
              const toPos = getNodePosition(edge.to);

              const isActive = result
                .slice(0, currentStep)
                .some((step) => step.edge.from === edge.from && step.edge.to === edge.to);

              return (
                <line
                  key={index}
                  x1={fromPos.x}
                  y1={fromPos.y}
                  x2={toPos.x}
                  y2={toPos.y}
                  className={`edge ${isActive ? "active" : ""}`}
                />
              );
            })}

            {graph.nodes.map((node, index) => {
              const { x, y } = getNodePosition(node);
              return (
                <g key={node} className="node" transform={`translate(${x}, ${y})`}>
                  <circle r="20" />
                  <text x="0" y="5" textAnchor="middle">
                    {node}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      )}
    </div>
  );
}

export default Visualizer;
