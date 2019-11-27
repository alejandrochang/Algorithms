// Zero Matrix
// Write an algorithm succh that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.


const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const F = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(zeroMatrix(A));
console.log(zeroMatrix(F));