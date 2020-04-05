





const shortestPath = (board, start, end) => {
  let q = [start];
  let count = 0;
  let visited = { start: true}
  let directions = [[0,1],[1,0],[0,-1],[-1,0]];
  while (q.length > 0) {
    let curr = q.shift();
    for (let i = 0; i < directions.length; i++) {
      let next = [curr[0] + directions[0][i], curr[1] + directions[i][1]];
      if (!visited[next] && next[0] >= 0 && next[1] >= 0 && next[0] < board.length && next[1] < board[0].length) {
        if (board[next[0]][next[1]] === 1) {
          q.push(next);
          visited[next] = true;
          count++
        } 

        if (board[next[0]][next[1]] === 2) {
          count++
          return count;
        } 
      }
    }
  }

  return count;
}






console.log(shortestPath(
  [[0,2,0,0,0,0], 
   [0,1,1,0,0,0], 
   [1,1,1,1,1,0], 
   [1,0,0,0,1,0], 
   [1,1,1,1,1,0], 
   [0,0,2,0,0,0]],
  [0,1], [5,2]))