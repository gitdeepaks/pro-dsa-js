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

function bfsFS(
  graph: Graf,
  startPoint: string,
  visited: Set<string> = new Set()
) {
  const queue: string[] = [startPoint];
  visited.add(startPoint);

  while (queue.length > 0) {
    const node = queue.shift()!;
    for (const neighbour of graf[node]) {
      if (!visited.has(neighbour)) {
        visited.add(neighbour);
        queue.push(neighbour);
      }
    }
  }
}
