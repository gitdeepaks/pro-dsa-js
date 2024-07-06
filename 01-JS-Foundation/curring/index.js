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

// function evaluate(oparation) {
//   return function (a) {
//     return function (b) {
//       if (oparation === "sum") {
//         return a + b;
//       } else if (oparation === "multiply") {
//         return a * b;
//       } else if (oparation === "divide") {
//         return a / b;
//       } else if (oparation === "substract") return a - b;
//       else return "invalid oparation";
//     };
//   };
// }

// console.log(evaluate("sum")(3)(3));
// console.log(evaluate("multiply")(3)(3));
// console.log(evaluate("divide")(3)(3));

// function add(a) {
//   return function (b, c) {
//     return a + b + c;
//   };
// }

// add()

// function updateElementText(id) {
//   return function (content) {
//     document.querySelector("#" + id).textContent = content;
//   };
// }

// const updateHeader = updateElementText("heading");
// updateHeader("Subscribe please");

function curry(funnc) {
  return function curriesFunction(...args) {
    if (args.length >= funnc.length) {
      return funnc(...args);
    } else {
      return function (...next) {
        return curriesFunction(...args, ...next);
      };
    }
  };
}

console.log(curry((a, b, c, d) => a + b + c + d)(1)(2)(3)(4));
