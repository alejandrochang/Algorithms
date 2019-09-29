// Rotate Matrix
// Given an image represented by a N x N matrix,
// where eaxch pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees?
// Can you do this in place?

const rotateMatrix = (m) => {
  let n = m.length;

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = 0; j < n - (2 * i) - 1; j++) {
      let t = m[i + j][n - 1 - i];
      m[i + j][n - 1 - i] = m[i][i + j];
      m[i][i + j] = t;

      t = m[n - 1 - i][n - 1 - i - j];
      m[n - 1 - i][n - 1 - i - j] = m[i][i + j];
      m[i][i + j] = t;

      t = m[n - 1 - i - j][i];
      m[n - 1 - i - j][i] = m[i][i + j];
      m[i][i + j] = t;
    }
  }
  return m;
};

// I: matrix nxn 
// O: rotated matrix 90 degrees (clockwise)
// Constraints: rotate matrix in place, optimize
// Edge case: empty matrix, even and odd values for n

// 1 2 3       7 4 1      0 1 2
// 4 5 6   ->  8 5 2 -->  3 4 5 
// 7 8 9       9 6 3      6  7 8 


  console.log(rotateMatrix(JSON.stringify([[1, 2], [3, 4]])));
  // console.log(rotateMatrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]), [[7, 4, 1], [8, 5, 2], [9, 6, 3]]);
  // console.log(rotateMatrix([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]),
  //                         [[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]);
  // console.log(rotateMatrix([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]), 
  //                         [[21, 16, 11, 6, 1], [22, 17, 12, 7, 2], [23, 18, 13, 8, 3], [24, 19, 14, 9, 4], [25, 20, 15, 10, 5]]);
  // console.log(rotateMatrix([]), []),
  console.log(rotateMatrix([[]])),
  console.log(rotateMatrix([[1]]))