// Zero Matrix
// Write an algorithm succh that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.


const zeroMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][j] === 0) {
        // if equals zero call helper functions
    }
  }
}

// [row][col]

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

// iterate through two for loops
// get to the inside o