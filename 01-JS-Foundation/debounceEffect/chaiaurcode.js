// // Map

// const number = [1, 2, 3, 4, 5];

// const mul = number.map((num, index, arr) => num * 3 + index);

// console.log(mul);

// // filter
// const moreThanTw0 = number.filter((num) => num > 2);
// console.log(moreThanTw0);

// // Reduce
// const sumOfAllElement = number.reduce((acc, currVal, i, arr) => {
//   return acc + currVal;
// }, 0);

// console.log(sumOfAllElement);

// // Polyfills

// // Array.map((num, i, arr) => {});

// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i], i, this));
//   }
//   return temp;
// };

// const mulMyMap = number.myMap((num, index, arr) => num * 2 + index);
// console.log(mulMyMap);

// // custom filter

// // Array.prototype.myFilter = function (cb) {
// //   let temp = [];
// //   for (let i = 0; i < this.length; i++) {
// //     if (cb(this[i], i, this)) this.push(this[i]);
// //   }
// //   return temp;
// // };

// // const moreThanTw0Custom = number.myFilter((num) => num > 2);
// // console.log(moreThanTw0Custom);

// Array.prototype.myReduce = function (cb, initVal) {
//   let acc = initVal;

//   for (let i = 0; i < this.length; i++) {
//     acc = acc ? cb(acc, this[i], i, this) : this[i];
//   }

//   return acc;
// };

// const sumOfAllElementC = number.myReduce((acc, currVal, i, arr) => {
//   return acc + currVal;
// }, 0);

// console.log(sumOfAllElementC);

let students = [
  {
    name: "Deepak",
    rollNumber: 11,
    marks: 95,
  },
  {
    name: "Jinny",
    rollNumber: 19,
    marks: 98,
  },
  {
    name: "Jonny",
    rollNumber: 20,
    marks: 95,
  },
  {
    name: "John",
    rollNumber: 21,
    marks: 99,
  },
];

let names = [];

for (let i = 0; i < students.length; i++) {
  names.push(students[i].name.toUpperCase());
}

console.log(names);
