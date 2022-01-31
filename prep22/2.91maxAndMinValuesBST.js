// Finding the maximum or minimum node in the binary search tree is a very common task.

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const left = new Node(15, new Node(13), new Node(18));
const right = new Node(25, null, new Node(30));
const root = new Node(20, left, right);


/*
         20
      15    25
    13  18    30
*/

// console.log('tree', JSON.stringify(root, null, 4));
// min: 13, max: 30

function findMin(node) {
  if (!node) return;

  while (node.left) {
    node = node.left;
  }

  return node;
}

// console.log('Min:', findMin(root)); // Node { 13 };

function findMax(node) {
  if (!node) return;

  while (node.right) {
    node = node.right;
  }

  return node;
}

// console.log("Max:", findMax(root)); // Node { 30 };

