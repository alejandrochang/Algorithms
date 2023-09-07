// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
// its entire row and column are set to 0.


const matrix = [
  [0, 1, 1, 1, 1, 1, 0],
  [1, 1, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0],
];


// result [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 0, 1, 1, 1, 0],
//   [0, 1, 0, 1, 1, 1, 0],
//   [0, 1, 0, 1, 1, 1, 0],
//   [0, 0, 0, 0, 0, 0, 0],
// ];

/*
  [r. c] -> r === 0 || c === 0
  if [r][c] === 0 -> pass that row -> iterate and return 0
  pass that column -> (store col in map -> if col is in map turn to 0)

*/

function transformRow(row) {
  return row.map(() => 0);
}

function zeroMatrix(matrix) {
  const columnMap = {};
  const newMatrix = [...matrix];
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const coord = matrix[r][c];
      if (coord === 0) {
        newMatrix[r] = transformRow(newMatrix[r]);
        columnMap[c] = true;
      }

      if (columnMap[c]) {
        newMatrix[r][c] = 0;
      }
    }
  }

  return newMatrix;
}

const res = zeroMatrix(matrix);
console.log(JSON.stringify(res));

//[[0,0,0,0,0,0,0],
// [0,0,0,0,0,0,0],
// [0,1,0,1,1,1,0],
// [0,1,0,1,1,1,0],
// [0,1,0,1,1,1,0],
// [0,0,0,0,0,0,0]]