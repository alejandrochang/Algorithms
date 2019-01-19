const fib = require('./fib');

test("Expect fib function to be defined", () => {
  expect(fib).toBeDefined();
});

test("Expect fib(4) to equal 3", () => {
  expect(fib(4)).toEqual(3);
});

test("Expect fib(5) to equal 5", () => {
  expect(fib(5)).toEqual(5);
});

test("Expect fib(6) to equal 8", () => {
  expect(fib(6)).toEqual(8);
});

test("Expect fib(7) to equal 13", () => {
  expect(fib(7)).toEqual(13);
});

test("Expect fib(20) to equal 6765", () => {
  expect(fib(20)).toEqual(6765);
});





// console.log(fib(4))  // === 3
// console.log(fib(5))  // === 5
// console.log(fib(6))  // === 8
// console.log(fib(7))  // === 13
// console.log(fib(20))  // === 6765




// function fib(n) {
//   let result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     let a = result[i - 1];
//     let b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

// function fib(n) {
//   // exponential time solution
//   if (n < 2) {
//     return n;
//   }

//   return fib(n - 1) + fib(n - 2);
// }