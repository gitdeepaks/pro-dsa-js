// madam
// ada

function palindrome(str: string) {
  if (str.length <= 1) {
    return true;
  }

  if (str[0] === str[str.length - 1]) {
    return palindrome(str.substring(1, str.length - 1));
  } else {
    return false;
  }
}
