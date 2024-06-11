// factorial

function fac(n) {
  if (n === 0) {
    return 1;
  }

  return n * fac(n - 1);
}

console.log(fac(5));

// Direct
function prinNUm(min, max) {
  if (min > max) {
    return;
  }

  prinNUm(min + 1, max);
  console.log(min);
}

prinNUm(1, 5);
