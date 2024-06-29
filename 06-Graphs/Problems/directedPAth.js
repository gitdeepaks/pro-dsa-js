function hasPathDFS(graph, start, dest) {
  const stack = [start];
  const visites = new Set();

  while (stack.length > 0) {
    const node = stack.pop();
    if (node === dest) {
      return true;
    }
    if (!visites.has(node)) {
      visites.add(node);
      for (const neighbour of graph[node]) {
        stack.push(neighbour);
      }
    }
  }
  return false;
}

const hasPathBFS = (graph, start, dest) => {
  const queue = [start];
  const visisted = new Set();

  while ((queue, length > 0)) {
    const node = queue.shift();
    if (node === dest) return true;

    if (!visisted.has(node)) {
      visisted.add(node);
      for (const neb of graph[node]) {
        queue.push(neb);
      }
    }
  }
  return false;
};

const hasPathRec = (graph, start, dest) => {
  if (start === dest) return true;

  if (visisted.has(start)) {
    return false;
  }
  visisted.add(start);

  for (const neighbour of graph[start]) {
    if (hasPathRec(graph, neighbour, dest) === true) {
      return true;
    }
  }
  return false;
};
