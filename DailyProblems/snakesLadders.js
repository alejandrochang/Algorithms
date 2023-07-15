// Snakes and Ladders is a game played on a 10 x 10 board,
// the goal of which is get from square 1 to square 100.
// On each turn players will roll a six-sided die and move forward 
// a number of spaces equal to the result. If they land on a 
// square that represents a snake or ladder, they will be 
// transported ahead or behind, respectively, to a new square.

// Find the smallest number of turns it takes to play snakes and ladders.
// For convenience, here are the squares representing snakes and ladders, and their outcomes:

const snakes = {16: 6, 48: 26, 49: 11, 56: 53, 62: 19, 64: 60, 87: 24, 93: 73, 95: 75, 98: 78};
const ladders = {1: 38, 4: 14, 9: 31, 21: 42, 28: 84, 36: 44, 51: 67, 71: 91, 80: 100};

// 6 sided die - results in moves/steps made
// const board = Array(10).fill(Array(10).fill([]));


let numberedBoard = [];
for (let i = 1; i <= 100; i++) numberedBoard.push([i]);

function snakesLadders() {
  const q = [numberedBoard.shift()];
  let moves = 0;
  let maxSteps = 6;
  let maxCurrentSteps = -Infinity;

  while (q.length > 0) {
    let length = q.length;
    let curr = q.shift(); // [1]

    // check of reached end
    if (maxCurrentSteps === 100) {
      return moves;
    }

    // check if better number
    // let maxCurrentSteps = -Infinity;
    for (let i = 0; i < maxSteps; i++) {
      let ladderMove = ladders[i];
      if (ladderMove > maxCurrentSteps && ladderMove <= 100) {
        ladderMove = maxCurrentSteps;
      } else if (i) {
        ladderMove = i;
      }
    }

    moves += 1;

    // check snakes + maxMoves
  }

  return null;
}


const result = snakesLadders();
console.log({ result });

/*
  High Level:
  - Matrix of 10x10 board
  - BFS - using snakes/ladders to see which one will get us to 100 the quickest
*/
