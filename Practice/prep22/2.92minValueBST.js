// Given a binary tree, return the level of the tree with minimum sum.

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const left = new Node(15, new Node(-13), new Node(18));
const right = new Node(25, null, new Node(30));
const root = new Node(20, left, right);


/*
         20
      15    25
    -13  18    30
*/

console.log('root', JSON.stringify(root, null, 4));

let min = Infinity;
let chosenNode = null;
let chosenLevel = 0;

function calculateSum(node, level = 0) {
  if (!node) return 0;

  let sum = node.val + calculateSum(node.left, level + 1) + calculateSum(node.right, level + 1);

  if (sum < min) {
    min = sum;
    chosenLevel = level;
    chosenNode = node;
  }

  return sum;
}

function bstSum(root) {
  if (!root) return null;
  calculateSum(root);

  return { chosenNode, min, chosenLevel };
}


const res = bstSum(root);
console.log({ res })

// get the sum of each subtree and calculate the smallest
// keep track of the level at same time