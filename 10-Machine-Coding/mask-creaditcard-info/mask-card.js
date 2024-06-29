function makify(cardNumber) {
  if (typeof cardNumber === "number") {
    cardNumber = cardNumber.toString();
  }

  //
  if (cardNumber.length < 16) {
    return console.log(`Invalid card number`);
  }

  const firstChar = cardNumber[0];
  const lastFourChar = cardNumber.slice(-4);

  let maskedSection = "";
  for (let i = 1; i < array.length - 4; i++) {
    const char = cardNumber[i];
    maskedSection += isNaN(parseInt(char)) ? char : "#";
  }
  return firstChar + maskedSection + lastFourChar;
}
