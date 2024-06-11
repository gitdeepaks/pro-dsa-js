const breadthFirstSearchh = (root) => {
  if (root === null) {
    return; // return empty array
  }

  const values = [];
  const queue = [];

  while (queue.length > 0) {
    const node = queue.shift();
    values.push(node.key);

    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return;
};
