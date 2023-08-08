// 1. PivotX
// The first part contains all elements in lst that are less than x
// The second part contains all elements in lst that are equal to x
// The third part contains all elements in lst that are larger than x
// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].



// 2. Deepest Node

//   a
//    / \
//   b   c
//  /
// d

// Return deepest node: 'd'

class Node {
  constructor(data,left=null,right=null) {
    this.data=data;
    this.left=left;
    this.right=right;
  }
}

const root = new Node('a', new Node('b', new Node('d')), new Node('c')); // d

function deepestNode(root) {
  if (!root) return null;
  let result = { node: null, level: -Infinity };
  const dfs = (node, level) => {
    if (!node) return;

    console.log({ node, level });

    dfs(node.left, level += 1);
    if (level > result.level) {
      result.level = level;
      result.node = node;
    }
    dfs(node.right, level += 1);

  }

  dfs(root, 0);

  return result.node;
}

function deepestNodeHeight(root) {
  const height = (node) => {
    if (!node) return 0;

    const letfHeight = height(node.left);
    const rightHeight = height(node.right);

    return Math.max(letfHeight,rightHeight) + 1;
  }

  return height(root);
}


// TIme: O(n), Space: O(n)

console.log('result', deepestNode(root));
console.log('result', deepestNodeHeight(root));



// 3. Valid Soduku
// Determine if a 9 x 9 Sudoku board is valid. 
// Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
// const board = 
// [["5","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];

// // Output: true

// const board2 = 
// [["8","3",".",".","7",".",".",".","."]
// ,["6",".",".","1","9","5",".",".","."]
// ,[".","9","8",".",".",".",".","6","."]
// ,["8",".",".",".","6",".",".",".","3"]
// ,["4",".",".","8",".","3",".",".","1"]
// ,["7",".",".",".","2",".",".",".","6"]
// ,[".","6",".",".",".",".","2","8","."]
// ,[".",".",".","4","1","9",".",".","5"]
// ,[".",".",".",".","8",".",".","7","9"]];
// Output: false











// 4. Degree Arr
// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.
