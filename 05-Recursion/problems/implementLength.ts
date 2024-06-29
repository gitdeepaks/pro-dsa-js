function recurLength(str: string) {
  if (str === "") {
    return 0;
  } else {
    return 1 + recurLength(str.substring(1));
  }
}

// iterative
function iterLength(str: string): number {
  let length = 0;
  for (let i = 0; i < str.length; i++) {
    length++;
  }
  return length;
}
