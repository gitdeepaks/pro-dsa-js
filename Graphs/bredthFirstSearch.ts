interface Graf {
  [key: string]: string[];
}

const graf: Graf = {
  a: ["b", "c"],
  b: ["a", "c", "d"],
  c: ["a", "b", "d"],
  d: ["b", "c"],
  e: ["f"],
  f: ["e"],
};

function bfsFS(graph: Graf, startPoint: string, visited = new Set()) {
  const queue = [startPoint];

  while (queue.length > 0) {
    const node: any = queue.shift();
    for (const neighbour of graf[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
}
