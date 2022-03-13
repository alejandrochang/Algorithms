// Dynamic Programming: Doing recursion without repetition

// Top Down Memoization

function fib(n) {
  if (n === 0 || n === 1) return n;

  return fib(n - 1) + fib(n-2);
}


// will pass a cb
function memoize(fn) {
  let cache = {};
  return (...args) => {
    if (cache[args]) return cache[args];

    let result = fn(args);
    return result;
  }
}
// Fib Sequence: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ]


console.log('1', fib(5)); // 5
console.log('2', fib(10)); // 55


let memoizedFib = memoize(fib);
console.log('3', memoizedFib(5))