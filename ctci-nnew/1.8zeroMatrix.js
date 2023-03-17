// Zero Matrix: Write an algorithm such that if an element in an MxN matrix is 0,
//  its entire row and column are set to 0.

// Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
// Output:         [[1,0,1],[0,0,0],[1,0,1]]

/*
  [
    [1,1,1],
    [1,0,1],
    [1,1,1]
  ]

  [     c0: c1: c2:
    r0: [1,0,1],
    r1: [0,0,0],
    r2: [1,0,1]
  ]
*/

// left, right, up, down
// [1,1] == value === 0
// row 1
// column 1

const board = [[1,1,1],[1,0,1],[1,1,1]]; // [[1,0,1],[0,0,0],[1,0,1]]

function zeroMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        console.log("hits", { matrix })
        traverse(i, j, matrix);
      }
    }
  }

  return matrix;
}

function traverse(i, j) {
  // console.log('hu', board)
  // console.log({ i, j, board })
  if (i < 0 && j < 0 && i <= board.length && j <= board[i].length) {
    return;
  }
    board[i][j] = 0;
    traverse(i - 1, j);
    traverse(i + 1, j);
    traverse(i, j - 1);
    traverse(i, j + 1);
}

const result = zeroMatrix(board);
console.log({ result });