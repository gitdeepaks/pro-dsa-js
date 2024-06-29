function balanceParenthesis(
  array: [],
  startIndex: number = 0,
  currIndex: number = 0
) {
  if (startIndex === array.length) {
    return currIndex == 0;
  }

  if (currIndex < 0) {
    return false;
  }

  if (array[startIndex] === "(") {
    balanceParenthesis(array, startIndex + 1, currIndex + 1);
  } else if (array[startIndex] === ")") {
    balanceParenthesis(array, startIndex + 1, currIndex - 1);
  } else {
    return false;
  }
}
