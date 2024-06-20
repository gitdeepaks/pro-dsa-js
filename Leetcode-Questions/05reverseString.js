var reverseWords = function (s) {
  let res = [];
  let length = s.length;

  let word = "";

  for (let i = 0; i < length; i++) {
    if (s[i] !== " ") {
      word += s[i];
    } else if (word.length > 0) {
      res.unshift(word);
      word = "";
    }
  }

  if (word.length > 0) {
    res.unshift(word);
  }
  return res.join(" ");
};

let s = "the sky is blue";
console.log(reverseWords(s));
