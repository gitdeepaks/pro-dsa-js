// curring in JS

//Example f(a,b) into f(a)(b)

// function f(a, b) {
//   console.log(a, b);
// }

// function f(a) {
//   return function (b) {
//     return `${a} ${b}`;
//   };
// }

// console.log(f(5)(6));

// function sum(a, b, c) {
//   return a + b + c;
// }

// console.log(sum(2, 6, 1));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

function evaluate(oparation) {
  return function (a) {
    return function (b) {
      if (oparation === "sum") {
        return a + b;
      } else if (oparation === "multiply") {
        return a * b;
      } else if (oparation === "divide") {
        return a / b;
      } else if (oparation === "substract") return a - b;
      else return "invalid oparation";
    };
  };
}

console.log(evaluate("sum")(3)(3));
console.log(evaluate("multiply")(3)(3));
console.log(evaluate("divide")(3)(3));
