// count vowels in a string

function isVowel(char) {
  let loweChar = char.toLowerCase();
  let vowels = "aeiou";

  //   vowels.indexOf(loweChar);
  if (vowels.indexOf(loweChar) != -1) {
    return true;
  } else {
    return false;
  }
}

function countVowels(str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (isVowel(str[i])) {
      count += 1;
    }
  }
  return count;
}
console.log(countVowels("jello"));
