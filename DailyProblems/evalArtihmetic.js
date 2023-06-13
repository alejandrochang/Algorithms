// Suppose an arithmetic expression is given as a binary tree. 
// Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

// Given the root to such a tree, write a function to evaluate it.

// For example, given the following tree:

//     *
//    / \
//   +    +
//  / \  / \
// 3  2  4  5
// You should return 45, as it is (3 + 2) * (4 + 5).

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function evaluation(root) {
  if (!root) return 0;

  if (!root.left && !root.right) {
    return root.val;
  }

  const leftEval = evaluation(root.left);
  const rightEval = evaluation(root.right);

  if (root.val === '+') {
    return leftEval + rightEval;
  } else if (root.val === '-') {
    return leftEval - rightEval;
  } else if (root.val === '*') {
    return leftEval * rightEval;
  } else if (root.val === '/') {
    return leftEval / rightEval;
  }
}

const root = new Node('*', new Node('+', new Node(3), new Node(2)), new Node('+', new Node(4), new Node(5)));
const res = evaluation(root);

console.log({ res })

// Recursively go through tree
//  if null return 0
//  if !left && !right return int
//  evaluateLeft
//  evaluateRight


// operands logic for each expression: '+', '−', '∗', or '/'.