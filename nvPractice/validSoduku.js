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

function validList(row) {
  let positions = {};
  for (let pos of row) {
    if (pos === ".") continue;
    positions[pos] = positions[pos] + 1 | 1;

    if (positions[pos] > 1) return false;
  }

  return true;
}

function validSoduku(b) {
  let columns = [...Array(b[0].length).fill([])];
  for (let r = 0; r < b.length; r++) {
    if (!validList(b[r])) return false;
    for (let c = 0; c < b[0].length; c++) {
      const pos = b[r][c];
      // if (c === 0) {
        const bucket = columns[c];
        console.log({ bucket });
      // }
      // console.log({ columns, pos, c })
    }
  }

  console.log({ columns });
  return true;
}

// const res = validSoduku(board); // true
const res2 = validSoduku(board2); // false
console.log({ res2 });


// Test each row - go 1 - through 9,
// Test 