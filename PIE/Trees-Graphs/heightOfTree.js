// The height of a tree (Binary or not) os defined by the 
// maximum distance from the root node to any lead node. 

// Write a function to calculate the height of an arbitrary binary tree
// O(n) as we have to go through each possibility to check the length of each sub-tree

const root = require('./BST');

function heightOfTree(root) {
  if (root === null) {
    return 0; // -1 if root doesn't count
  }

  return 1 + Math.max(heightOfTree(root.left), heightOfTree(root.right));
}

console.log(heightOfTree(root)); // 4

// ask does the root count as 1 or is it 0


// if (root === null) {
//   return 0; // -1 if root doesn't count
// }

// let left = heightOfTree(root.left);
// let right = heightOfTree(root.right);

// if (left > right) {
//   return left + 1;
// } else {
//   return right + 1;
// }