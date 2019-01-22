// preorder traversal starts at node -> left-sub -> right-sub
// Problem: Perform a preoder traversal on a BST printing out each value of a node

let root = require('./BST');

function preorderTraversal(root) {
  if (root === null) {
    return;
  }

  root.printValue(root.data);
  preorderTraversal(root.left);
  preorderTraversal(root.right);
}


console.log(preorderTraversal(root)); // print from left to right
// 23 15 12 9 17 33 27 100

//          23
//        15     33
//      12 17    27 100
//     9 

// best if you think its on the left side 

// Problem: Perform  preorder traversal on a BST iteratively 
