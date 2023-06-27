// Given a 2D matrix of characters and a target word, write a function
//  that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.
// For example, given the following matrix:

// and the target word 'FOAM', you should return true,
// since it's the leftmost column. Similarly, given the target word 'MASS',
// you should return true, since it's the last row.


// left-to-right, or up-to-down
const m = [['F', 'A', 'C', 'I'],
 ['O', 'B', 'Q', 'P'],
 ['A', 'N', 'O', 'B'],
 ['M', 'A', 'S', 'S']];

 // [faci, obqp, anob, mass]
 // [foam. abna. cqos, ipbs]

 // if its a substring of this word return true;


// faci, foam

// [0,0] - +1 y axis - [0,1]
// [0,0] - +1 x axis - [1,0]

// every char added we check to see if its the word

const test = 'FOAM';
const test2 = 'MASS';

function foundInMatrix(word) {
  let result = [];
  for (let x = 0; x < m.length; x++) {
    const chars = m[x];
    const row = chars.join('');
    // handle left to right (word and substring)
    if (row === word) return true;

    for (let i = 0; i < chars.length; i++) {
      result[i] ? result[i].push(chars[i]) : result[i] = [chars[i]];
    }
  }

  // handle top to bottom
  const resp = result.some((arr) => arr.join('') === word);
  return resp;
}

let res = foundInMatrix(test);
let res2 = foundInMatrix(test2);

console.log({ res, res2 });

// High Level Approach:
// Go through each char,


