// power of number

function power(base: number, exponent: number) {
  if (base === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
