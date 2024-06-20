//
const reverseVowels = function (s) {
  const vowels = "aeiouAEIOU";
  const chars = s.split("");

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    while (left < right && vowels.indexOf(chars[left]) === -1) {
      left++;
    }
    while (left < right && vowels.indexOf(chars[right]) === -1) {
      right--;
    }
    //swap
    if (left < right) {
      let temp = chars[left];
      chars[left] = chars[right];
      chars[right] = temp;

      left++;
      right--;
    }
  }
  return chars.join("");
};
