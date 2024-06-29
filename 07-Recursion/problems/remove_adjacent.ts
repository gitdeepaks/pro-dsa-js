// let inputString: string = "aabcc";

// let i: number = 1;

// console.log(inputString.substring(0, i));
// console.log(inputString.substring(i + 1));
// console.log(inputString.substring(0, i) + inputString.substring(i + 1));

function removeAdjacenDuplicate(inputString: string) {
  let res: string = "";

  for (let i = 0; i < inputString.length; i++) {
    if (i === inputString.length - 1 || inputString[i]! == inputString[i + 1]) {
      res += inputString[i];
    }
  }
  return res;
}

// Recursive solution

function recursiveRAD(inputString: string) {
  if (inputString.length <= 1) {
    return inputString;
  }

  if (inputString[0] === inputString[1]) {
    return recursiveRAD(inputString.substring(1));
  } else {
    return recursiveRAD(
      inputString[0] + recursiveRAD(inputString.substring(1))
    );
  }
}
