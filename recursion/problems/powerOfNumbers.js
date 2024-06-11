// power of number

function power(base, exponent) {
  if (base === 0) {
    return 1;
  }
  return base * power(base, exponent - 1);
}
