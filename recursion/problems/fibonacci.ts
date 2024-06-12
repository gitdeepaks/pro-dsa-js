// iterative

function fibonacci(value: number) {
  let n0 = 0;
  let n1 = 1;

  for (let i = 0; i < value; i++) {
    const temp = n0 + n1;
    n0 = n1;
    n1 = temp;
  }

  return n0;
}

console.log(fibonacci(6));

// recursive
function fib(val: number) {
  if (val <= 1) {
    return val;
  }
  return fib(val - 1) + fib(val - 2);
}
