let matrix = [
  [0, 2, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [1, 0, 0, 1, 0],
  [1, 1, 1, 1, 0],
  [0, 2, 0, 1, 0]
];

let start = [0, 1];
let end = [4, 2];
// all possible directions
let directions = [[1,0],[0,1],[-1,0],[0,-1]];

const backtrace = (node, map) => {
  console.log({ node, map  })
  let result = [node];
  if (map[`${node[0]}_${node[1]}`]) {
      result.push(map[`${node[0]}_${node[1]}`]);
  };

  return result
}

const shortestpath = (start, end) => {
  let queue = [];
  let visitedMap = { [`${start[0]}_${start[1]}`]: 1 };
  queue.push(start);

  while (queue.length > 0) {
    let current = queue.shift();

    // check every possible direction
    for (let i = 0; i < directions.length; i++) {
      let next = [current[0] + directions[i][0], current[1] + directions[i][1]]
      let key = `${next[0]}_${next[1]}`;

      // check if it equals one, check if its in map, check if its equal to 2 and return
      if (!visitedMap[key] && next[0] >= 0 && next[1] >= 0 && next[0] < matrix.length && next[1] < matrix[0].length) {
        if (matrix[next[0]][next[1]] === 1) {
          queue.push(next);
          visitedMap[key] = next;
        }

        if (matrix[next[0]][next[1]] === 2) {
          visitedMap[key] = next;
          return backtrace(next, visitedMap);
        }
      }
    }
  }

  return -1;
}



console.log(shortestpath(start, end)); // [[0,1],[1, 1],[1,0],[2,0],[3,0],[3, 1],[4, 2]]

// pseudo
// DFS + Map (store visited path) -> save the extension of the path as the key -> value as path
// 