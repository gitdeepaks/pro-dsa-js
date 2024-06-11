// sum of numbers till n

function getSum(value) {
  if (value == 1) {
    return value;
  } else {
    return value + getSum(value - 1);
  }
}
