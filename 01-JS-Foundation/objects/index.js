// // // // const user = {
// // // //   name: "Deepak Sankhayan",
// // // //   age: 26,
// // // //   isTotalltAwesome: true,
// // // // };

// // // // for (key in user) {
// // // //   console.log(user[key]);
// // // // }

// // // // (function (a) {
// // // //   delete a;
// // // //   return a;
// // // // })();
// // // // FAQ

// // // // const obj = {
// // // //   a: "one",
// // // //   b: "two",
// // // //   a: "three",
// // // // };

// // // // console.log(obj);

// // // // let nums = {
// // // //   a: 1000,
// // // //   b: 2000,
// // // //   title: "My Nums",
// // // // };

// // // // multiplyByTwo(nums);

// // // // function multiplyByTwo(obj) {
// // // //   for (key in obj) {
// // // //     if (typeof obj[key] === "number") {
// // // //       obj[key] = obj[key] * 2;
// // // //     }
// // // //   }
// // // // }

// // // // console.log(a[b]);

// // // const a = {};
// // // const b = { key: "b" };
// // // const c = { key: "c" };

// // // a[b] = 123;
// // // a[c] = 456;

// // // console.log(a);

// // // const user = {
// // //   name: "Deepak",
// // //   age: 26,
// // // };

// // // console.log(JSON.stringify(user));

// // const user = { name: "Lolo", age: 21 };
// // const admin = { admin: true, ...user };

// // console.log(admin);

// // const settings = {
// //   username: "Deepak",
// //   level: 19,
// //   health: 90,
// // };

// // const data = JSON.stringify(settings, ["level", "health"]);
// // console.log(data);

// let user = {
//   name: "Deepak",
//   age: 26,
//   fullName: {
//     fName: "Deepak",
//     lName: "Sankhyan",
//   },
// };

// const name = "The Developer";

// const {
//   fullName: { first },
// } = user;

// console.log(fullName);

// console.log({ a: 1 } == { a: 1 });
// console.log({ a: 1 } === { a: 1 });
