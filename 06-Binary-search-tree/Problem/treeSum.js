// breadth first search

const sumWithBFS = (root) => {
  if (root === null) {
    return 0;
  }

  const queue = [root];

  let sum = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    sum += node.key;

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }
};

const sumWithDFS = (root) => {
  if (root === null) {
    return 0;
  }

  return root.key + sumWithDFS(root.left) + sumWithDFS(root.right);
};
