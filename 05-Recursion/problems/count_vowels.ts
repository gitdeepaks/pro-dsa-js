// count vowels in a string

function isVowel(char: string) {
  let loweChar = char.toLowerCase();
  let vowels = "aeiou";

  //   vowels.indexOf(loweChar);
  if (vowels.indexOf(loweChar) != -1) {
    return true;
  } else {
    return false;
  }
}

function countVowels(str: string) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count += 1;
    }
  }
  return count;
}

function recursiveCountVowels(str: string, strLength: number) {
  console.log(
    `Length: ${strLength}, current String: ${str.substring(0, strLength)}`
  );
  if (strLength === 1) {
    console.log("Base case got hit hare");

    console.log(`base case ${Number(isVowel(str[0]))}`);
    return Number(isVowel(str[0]));
  }
  //   return (
  //     recursiveCountVowels(str, str.length - 1) + isVowel(str[strLength - 1])

  //   );

  let res =
    recursiveCountVowels(str, strLength - 1) + isVowel(str[strLength - 1]);
  console.log(`count after checking: ${str[strLength - 1]} : ${res}`);
  return res;
}
let myString: string = "Hello";
console.log(recursiveCountVowels(myString, myString.length));
