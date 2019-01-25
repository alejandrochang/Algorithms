// Factorial Operator Solution
// 4 * 3 * 2 * 1 = 24 -> 4!

function factorial(n) {
  if (n === 1) {
    return n;
  }

  return n * factorial(n - 1);
}



console.log(factorial(1)); // 1
console.log(factorial(3)); // 6
console.log(factorial(4)); // 24
