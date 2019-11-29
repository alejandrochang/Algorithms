// Zero Matrix
// Write an algorithm succh that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.

const checkZeros = (matrix) => {
  let matrixHeight = matrix.length;
  let matrixWidth = matrix[0].length;
  let rowsToZeroify = {}; // use hashtables to remove duplicates
  let colsToZeroify = {};

  for (let i = 0; i < matrixHeight; i++) {
    for (let j = 0; j < matrixWidth; j++) {
      if (matrix[i][j] === 0) {
        rowsToZeroify[i] = true;
        colsToZeroify[j] = true;
      }
    }
  }
  return {
    rowsToZeroify: rowsToZeroify,
    colsToZeroify: colsToZeroify
  };
};

const zeroifyCol = (matrix, col) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
};

const zeroifyCols = (matrix, zeroScan) => {
  for (let col in zeroScan.colsToZeroify) {
    zeroifyCol(matrix, Number(col));  
  }
};

const zeroifyRow = (matrix, row) => {
  for (let i = 0; i < matrix[row].length; i++) {
    matrix[row][i] = 0;
  }
};

const zeroifyRows = (matrix, zeroScan) => {
  for (let row in zeroScan.rowsToZeroify) {
    zeroifyRow(matrix, Number(row));  
  }
};

/* Main Function */
let zeroMatrix = function(matrix) {
  if(matrix.length === 0) return;

  let zeroScan = checkZeros(matrix);

  console.log({ zeroScan });

  zeroifyCols(matrix, zeroScan);
  zeroifyRows(matrix, zeroScan);
};

// Testing
var testMatrix = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]
];

// console.log('before');
// printMatrix(testMatrix);

// zeroMatrix(testMatrix);

// console.log('after');
// printMatrix(testMatrix);

// function should mutate the matrix to the following:
// [
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [0, 0, 0, 0],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1],
//   [1, 0, 1, 1]
// ]
const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

const F = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 8, 9]
]

// console.log(zeroMatrix(A));
console.log(zeroMatrix(testMatrix));