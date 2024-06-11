//iterative

function firstOccurance(arr, findMe, currIndex) {
  while (currIndex < arr.length) {
    if (arr[currIndex] == findMe) {
      if (arr[currIndex] == findMe) {
        return currIndex;
      }
      currIndex += 1;
    }
  }
  return -1;
}

// recursive
function recursiveFirstOccurance(arr, findMe, currIndex) {
  if (arr.length === currIndex) {
    return -1;
  }
  if (arr[currIndex] === findMe) {
    return currIndex;
  }

  return recursiveFirstOccurance(arr, findMe, currIndex + 1);
}
