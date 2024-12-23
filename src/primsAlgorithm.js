export function runPrimsAlgorithm(graph) {
    const steps = [];
    const visited = new Set();
    const edges = [];
  
    visited.add(graph.nodes[0]);
  
    while (visited.size < graph.nodes.length) {
      const validEdges = graph.edges.filter(
        (edge) => visited.has(edge.from) && !visited.has(edge.to)
      );
  
      const minEdge = validEdges.reduce((min, edge) =>
        edge.weight < min.weight ? edge : min
      );
  
      edges.push(minEdge);
      visited.add(minEdge.to);
  
      steps.push({
        description: `Added edge (${minEdge.from} -> ${minEdge.to}) with weight ${minEdge.weight}`,
        edge: minEdge,
      });
    }
  
    return { steps };
  }
  