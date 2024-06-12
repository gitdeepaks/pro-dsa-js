// sum of numbers till n

function getSum(value: number) {
  if (value == 1) {
    return value;
  } else {
    return value + getSum(value - 1);
  }
}
