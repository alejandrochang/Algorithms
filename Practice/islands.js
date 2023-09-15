/*
  High Level Approach: 
  1. DFS approach from starting position, traverse every node

*/


function islands(board) {

}

const grid1 = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]; // Output: 1

const grid2 = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
];

// console.log('res', islandCount(grid1)); // 1
console.log('res 2', islands(grid2)); // 3
console.log('res 2', islands(grid1)); // 1
