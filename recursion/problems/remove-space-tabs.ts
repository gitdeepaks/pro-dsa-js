function removeTAS(inputStr: string) {
  let res = "";
  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];

    if (char !== " " && char !== "\t") {
      res += char;
    }
  }
  return res;
}

function recursiveRTAS(inputStr: string): string {
  if (inputStr.length === 0) {
    return "";
  }

  let firstChar: string = inputStr[0];
  const restofSTR: string = inputStr.slice(1);

  // Check if firstChar is a space or a tab
  if (firstChar === " " || firstChar === "\t") {
    return recursiveRTAS(restofSTR);
  }

  // Concatenate firstChar with the result of the recursive call
  return firstChar + recursiveRTAS(restofSTR);
}
