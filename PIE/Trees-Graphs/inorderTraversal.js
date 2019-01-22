const bst = require("./BST");

// O(n) - linear time
function inOrderTraversal(root) {
  if (root === null) {
    return;
  }

  inOrderTraversal(root.left);
  root.printValue(root.data);
  inOrderTraversal(root.right);
}


console.log(inOrderTraversal(bst));

// print from left to right -> node at the end
// left sub-tree + root + right sub-tree
// makes the most sense: goes in order from left to parent to child

// 9 12 15 17 23 27 33 100

//            23
//        15     33
//      12 17    27 100
//     9 

// inorder makes most sense for increasing numbers in a BST

// best for avg or taking into consideration that it is ordered