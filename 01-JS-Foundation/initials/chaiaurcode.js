// // // Map

// // const number = [1, 2, 3, 4, 5];

// // const mul = number.map((num, index, arr) => num * 3 + index);

// // console.log(mul);

// // // filter
// // const moreThanTw0 = number.filter((num) => num > 2);
// // console.log(moreThanTw0);

// // // Reduce
// // const sumOfAllElement = number.reduce((acc, currVal, i, arr) => {
// //   return acc + currVal;
// // }, 0);

// // console.log(sumOfAllElement);

// // // Polyfills

// // // Array.map((num, i, arr) => {});

// // Array.prototype.myMap = function (cb) {
// //   let temp = [];
// //   for (let i = 0; i < this.length; i++) {
// //     temp.push(cb(this[i], i, this));
// //   }
// //   return temp;
// // };

// // const mulMyMap = number.myMap((num, index, arr) => num * 2 + index);
// // console.log(mulMyMap);

// // // custom filter

// // // Array.prototype.myFilter = function (cb) {
// // //   let temp = [];
// // //   for (let i = 0; i < this.length; i++) {
// // //     if (cb(this[i], i, this)) this.push(this[i]);
// // //   }
// // //   return temp;
// // // };

// // // const moreThanTw0Custom = number.myFilter((num) => num > 2);
// // // console.log(moreThanTw0Custom);

// // Array.prototype.myReduce = function (cb, initVal) {
// //   let acc = initVal;

// //   for (let i = 0; i < this.length; i++) {
// //     acc = acc ? cb(acc, this[i], i, this) : this[i];
// //   }

// //   return acc;
// // };

// // const sumOfAllElementC = number.myReduce((acc, currVal, i, arr) => {
// //   return acc + currVal;
// // }, 0);

// // console.log(sumOfAllElementC);

// let students = [
//   {
//     name: "Deepak",
//     rollNumber: 11,
//     marks: 95,
//   },
//   {
//     name: "Jinny",
//     rollNumber: 19,
//     marks: 98,
//   },
//   {
//     name: "Jonny",
//     rollNumber: 20,
//     marks: 95,
//   },
//   {
//     name: "John",
//     rollNumber: 21,
//     marks: 99,
//   },
// ];

// // Q1 - Return only the names of students in capital

// // Solution 1 : Traditional for() loop
// let names = [];
// for (let index = 0; index < studentRecords.length; index++) {
//   names.push(students[index].name.toUpperCase());
// }

// console.log(names);

// // Solution 2 : forEach()
// let names = [];
// students.forEach((student) => {
//   names.push(student.name.toUpperCase());
// });

// console.log(names);

// // Solution 3 : map()
// let names = students.map((stu) => stu.name.toUpperCase());
// console.log(names);

// // Q2 - we want to get the details of students who scored more than 60 marks.

// let names = students.filter((stu) => stu.marks > 60);
// console.log(names);

// // Q3 - Get the details of students who scored more than 60 marks and have rollNumber greater than 15.

// let names = students.filter((stu) => stu.marks > 60 && stu.rollNumber > 20);
// console.log(names);

// // Q4 - Sum total of the marks of the students

// let totalMarks = students.reduce((acc, emp) => acc + emp.marks, 0);
// console.log(totalMarks);

// // Q5 - Get only the names of the students who scored more than 60 marks

// let names = students.filter((stu) => stu.marks > 50).map((stu) => stu.name);
// console.log(names);

// // Q6 - print the total marks of the students with marks greater than 60 after 20 marks has been added to those students who scored less than 60.

// let totalMarkss = studentRecords
//   .map(function (stu) {
//     if (stu.marks < 60) {
//       stu.marks += 20;
//     }
//     return stu;
//   })
//   .filter((stu) => stu.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);

// console.log(names);

// Functions

// function square(num) {
//   return num * num;
// }

// const square2 = function (num) {
//   // anonymous functions
//   return num * num;
// };

// square(5);

// (function (x) {
//   return (function (y) {
//     console.log(x);
//   })(2);
// })(1);

// callback functions

//Arrow function

// const add = (fName, sName) => {
//   return fName + sName;
// };

// closures and lexical scopes

// var username = "Deepak";
// function local() {
//   console.log(username);
// }

// closures
// function createBase(num) {
//   return function (innerNum) {
//     console.log(innerNum + num);
//   };
// }

// const addSix = createBase(6);
// addSix(10);
// addSix(21);

// Block Scope and setTimeout
// function a(params) {
//   for (var i = 0; i < 3; i++) {
//     function inner(i) {
//       setTimeout(function log() {
//         console.log(i); // what is logged ?
//       }, i * 1000);
//     }
//   }
//   inner(i);
// }

// a();

// how to use closure to create  a private counter ?

// function counter() {
//   var _counter = 0;

//   function add(increment) {
//     _counter += increment;
//   }

//   function retrive() {
//     return "Counter  = " + _counter;
//   }

//   return {
//     add,
//     retrive,
//   };
// }

// const c = counter();
// c.add(5);
// c.add(10);

// Module Pattern

// var Module = (function () {
//   function privateMethod() {
//     //do something
//     console.log("private");
//   }

//   return {
//     publicMethod: function () {
//       //can call privateMethod()
//       console.log("public");
//     },
//   };
// })();

// Module.publicMethod();
// Module.privateMethod();

// Make this run inly once
let view;

function likeThis() {
  let called = 0;
}
