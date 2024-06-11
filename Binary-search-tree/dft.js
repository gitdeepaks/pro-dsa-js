// class Node {
//   constructor(key) {
//     this.key = key;
//     this.left = left;
//     this.right = right;
//   }
// }

const depthFirstTraversal = (root) => {
  if (root === null) {
    return; //return a message or empty arr
  }

  const values = [];
  const stack = [root];

  while (stack.length > 0) {
    const node = stack.pop();
    values.push(node.key);

    if (node.right !== null) {
      stack.push(node.right);
    }

    if (node.left !== null) {
      stack.push(node.left);
    }
  }
};

const recursiveDFS = (root) => {
  if (root === null) {
    return;
  }
  const leftVal = recursiveDFS(root.left);

  const rightVal = recursiveDFS(root.right);

  //   return [root.key, leftVal, rightVal];
  return [root.key, ...leftVal, ...rightVal];
};
