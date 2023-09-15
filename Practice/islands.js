/*
  High Level Approach: 
  1. DFS approach from starting position, traverse every node
  2. see if left, right, up, down is equal to 1
*/


function islands(grid) {
  if (!grid.length) return 0;

  function dfs(i, j) {
    // Base case for out of bounds or if equal to 0
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;

    grid[i][j] = '0';

    // traverse four directions
    dfs(i-1,j);
    dfs(i+1,j);
    
    dfs(i,j-1);
    dfs(i,j+1);
  }

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // only traverse when we have the island
      if (grid[i][j] === '1') {
        count += 1;
        dfs(i, j)
      }
    }
  }

  return count;
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
