// The height of a tree (Binary or not) os defined by the 
// maximum distance from the root node to any lead node. 

// Write a function to calculate the height of an arbitrary binary tree

const root = require('./BST');

function heightOfTree(root) {
  if (root === null) {
    return 0; // -1 if root doesn't count
  }

  let left = heightOfTree(root.left);
  let right = heightOfTree(root.right);

  if (left > right) {
    return left + 1;
  } else {
    return right + 1;
  }
}

console.log(heightOfTree(root)); // 4

// ask does the root count as 1 or is it 0
