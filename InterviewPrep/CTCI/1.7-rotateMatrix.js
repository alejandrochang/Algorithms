// Rotate Matrix
// Given an image represented by a N x N matrix,
// where eaxch pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees?
// Can you do this in place?

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

const rotate = (matrix) => {
  const x = Math.floor(matrix.length / 2);
  const y = matrix.length - 1;

  for (let i = 0; i < x; i++) {
    
  }
}

// function rotate(matrix) {
//   const n = matrix.length;
//   const x = Math.floor(n/ 2);
//   const y = n - 1;
//   for (let i = 0; i < x; i++) {
//      for (let j = i; j < y - i; j++) {
//         k = matrix[i][j];
//         matrix[i][j] = matrix[y - j][i];
//         matrix[y - j][i] = matrix[y - i][y - j];
//         matrix[y - i][y - j] = matrix[j][y - i]
//         matrix[j][y - i] = k
//      }
//   }
// }
rotate(A);
console.log(A);



// Input: 
// const A = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16]
// ]

// Solution:
// [ [ 13, 9, 5, 1 ],
//   [ 14, 10, 6, 2 ],
//   [ 15, 11, 7, 3 ],
//   [ 16, 12, 8, 4 ] ]