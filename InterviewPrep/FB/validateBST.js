// Validate a BST

// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

// Go recursively down tree, if its left is less continue, if its right its greater continue, else, return false

const Node = require('./bst');
let tree = new Node(5);
tree.insert(2);
tree.insert(15);
tree.insert(11);
tree.insert(4);
tree.insert(25);
tree.insert(100);

// console.log(JSON.stringify(tree, null, 4));
// think about what breaks the rule

const validate = (node, min = null, max = null) => {
  if (min !== null && node.data < min) return false;
  if (max !== null && node.data > max) return false;

  if (node.left && !validate(node.left, min, node.data)) return false;
  if (node.right && !validate(node.right, node.data, max)) return false;

  return true;
}


const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);
// console.log(JSON.stringify(n, null, 4));

const s = new Node(10);
s.insert(5);
s.insert(15);
s.insert(0);
s.insert(20);
s.left.left.right = new Node(999);

// TEST
console.log(validate(n)); // true
console.log(validate(s)); // false


//          10
//       5       15
//   0               20


// [pseudo]
// as we traverse the tree, the data to the left has to be less than,
// the data to the right has to be greater than.
// first go through left side, swap the max as the number passing by,

// if we keep going down the tree, and theres a node.data < min
// or node.data > max, its false as is not a BST