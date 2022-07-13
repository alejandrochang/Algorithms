const grid1 = [
  ["Q", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
  ["0", "0", "0", "0", "Q"],
  ["0", "0", "Q", "0", "0"],
]; // Output: true - queen 

const grid2 = [
  ["0", "0", "0", "0", "Q"],
  ["Q", "0", "0", "0", "0"],
  ["0", "Q", "0", "0", "Q"],
  ["0", "0", "0", "0", "0"],
]; // false


// Input: matrix
// Output: boolean

function queenValid(grid) {
  if (!grid.length || grid === null) return;

  let valid = true;

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;

    // set to visited 
    grid[i][j] = '0';

    if (grid[i][j] === 'Q') { 
      // console.log('hit here?')
      valid = false;
      return false;
    }

    // left, right, up, down
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);

    // adjacent
    dfs(i + 1, j + 1);
    dfs(i + 1, j - 1);
    dfs(i - 1, j + 1);
    dfs(i - 1, j - 1);
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 'Q') {
        dfs(i, j)
      }
    }
  }

  console.log({ grid })

  return valid;
}

let res1 = queenValid(grid1);
let res2 = queenValid(grid2);



console.log({ res1, res2 });