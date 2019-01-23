// Lowest Common Ancestor
// Given the value of two nodes in a BST, find the lowest (nearest) common ancestor.
// You may assume that both values already exist in the tree. 

const bst = require('./BST');

function lowestCommonAncestor(root, value1, value2) {
  let data = root.data;
  if (data > value1 && data > value2) {
    return lowestCommonAncestor(root.left);
  } else if (data < value1 && data < value2) {
    return lowestCommonAncestor(root.right);
  }

  return data === null ? null : data;
} 


console.log(lowestCommonAncestor(bst, 9, 17));

//          23
//        15     33
//      12 17    27 100
//     9 

// 9, 17 -> 15

// function lowestCommonAncestor(root, value1, value2) {
//   while (root) {
//     let data = root.data;
//     if (data > value1 && data > value2) {
//       root = root.left;
//     } else if (data < value1 && data < value2) {
//       root = root.right;
//     } else {
//       return root;
//     }
//   }

//   return null;
// } 