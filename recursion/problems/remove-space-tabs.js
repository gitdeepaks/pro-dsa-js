function removeTAS(inputStr) {
  let res = "";
  for (let i = 0; i < inputStr.length; i++) {
    let char = inputStr[i];

    if (char !== " " && char !== "\t") {
      res += char;
    }
  }
  return res;
}

function recursiveRTAS(inputStr) {
  if (inputStr.length === 0) {
    return "";
  }

  const firstChar = inputStr[0];
  const restofSTR = inputStr.slice(1);

  if ((firstChar === " ") & (firstChar === "\t")) {
    return recursiveRTAS(restofSTR);
  }

  return (firstChar = recursiveRTAS(restofSTR));
}
