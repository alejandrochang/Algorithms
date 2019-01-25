// Factorial Operator Solution
// 4 * 3 * 2 * 1 = 24 -> 4!

function factorial(n) {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}



// console.log(factorial(1)); // 1
// console.log(factorial(3)); // 6
// console.log(factorial(4)); // 24

function helper(n) {
  let result = [];

}

function factorialArr(n) {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}

console.log(factorialArr(1)); // [1]
console.log(factorialArr(3)); // [1, 2, 3]
console.log(factorialArr(4)); // [1, 2, 3, 4]
