// rever a string

// iterative
// Hello

function reverseString(str) {
  let rev = "";
  let len = str.length - 1;

  while (len >= 0) {
    rev = rev + str[len];
    len = len - 1;
  }
  return rev;
}

// console.log(reverseString("hello"));

function recursiveReverseString(str) {
  console.log(`current : ${str}`); //winding
  // Base case
  if (str === "") {
    return str;
  }

  let revPart = recursiveReverseString(str.substring(0, str.length - 1));
  console.log(revPart);

  let res = str[str.length - 1] + revPart;
  console.log(
    `Reversing: Last chat ${
      str[str.length - 1]
    } added in front of ${revPart} form res: ${res}`
  );
  return res;
}

console.log(recursiveReverseString("hello"));

const reverseString = (str) =>
  str === "" ? "" : reverseString(str.substr(1)) + str.charAt(0);
//   if (str === "") {
//     return "";
//   }
//   console.log(str.substr(1));
//   return reverseString(str.substr(1)) + str.charAt(0);
