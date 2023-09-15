let matrix = [
  [0, 2, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 2, 0, 1, 0]
];

let start = [0, 1];
let end = [4, 2];

/*
  High Level:
  1. Do BFS keep track of the visited nodes, use the start as the indicator and process queue
  2. Break when you reach the 'end' 
  3. Backtrack the positions you stored in map via visited
*/

function shortestPath(board) {
  if (!board.length) return;

  let visited = {};

  const q = [start];
  while (q.length > 0) {
    let [r,c] = q.shift(); // [0,1]
    let coord = `${r}_${c}`;

    visited[coord] = 1;
    let d = [[0,1],[1,0],[-1,0],[0,-1]];

    for (let i = 0; i < d.length; i++) {
      // const next = []
    }


  }


}


const res = shortestPath(matrix, start, end);
console.log({ res });