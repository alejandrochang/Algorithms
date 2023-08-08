// Determine if a 9 x 9 Sudoku board is valid. 
// Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

// Output: true

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
// Output: false
// Explanation: Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid.

function validSoduku(b) {
  for (let i = 0; i < b.length ; i++) {
    let rowMap = {};
    let colMap = {};
    let boxMap = {};

    for (let j = 0; j < b[i].length; j++) {
      const row = b[i][j];
      const col = b[j][i];

      if (row !== '.') {
        if (rowMap[row]) return false;
        rowMap[row] = 1;
      }

      if (col !== '.') {
        if (colMap[col]) return false;
        colMap[col] = 1;
      }

      // 3x3 formula (3 * Math.floor(i/3) + Math.floor(j/3))][3 * (i % 3) + (j % 3)]
      const board = b[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i % 3) + (j % 3)];
      if (board !== '.') {
        if (boxMap[board]) return false;
        boxMap[board] = 1;
      }
    }
  }

  return true;
}

// const res = validSoduku(board); // true
const res2 = validSoduku(board); // false
console.log({ res2 });


// Test each row - go 1 - through 9,
// Test 