interface Graph {
  [key: string]: string[];
}

const graph: Graph = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function depthFirstSearchIterative(graph: Graph, startPoint: string) {
  const stack: string[] = [startPoint];
  const visited: Set<string> = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (node && !visited.has(node)) {
      visited.add(node);
      const neighbours = graph[node];
      for (const neighbour of neighbours) {
        if (!visited.has(neighbour)) {
          stack.push(neighbour);
        }
      }
    }
  }
}

function depthFirstSearchRecursive(
  graph: Graph,
  startPoint: string,
  visited = new Set()
) {
  if (!visited.has(startPoint)) {
    visited.add(startPoint);

    for (const neighbour of graph[startPoint]) {
      depthFirstSearchRecursive(graph, neighbour, visited);
    }
  }
}
