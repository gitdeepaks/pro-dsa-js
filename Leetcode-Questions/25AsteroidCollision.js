const asteroidCollision = function (asteroids) {
  let stack = [];

  for (let astroid of asteroids) {
    let explode = false;

    while (stack.length > 0 && astroid < 0 && stack[stack.length - 1] > 0) {
      const rightAstriod = stack.pop();
      if (Math.abs(astroid) === rightAstriod) {
        explode = true;
        break;
      } else if (Math.abs(astroid) < rightAstriod) {
        astroid = 0;
        stack.push(rightAstriod);
        break;
      }
    }
    if (!explode && astroid !== 0) {
      stack.push(astroid);
    }
  }
  return stack;
};
