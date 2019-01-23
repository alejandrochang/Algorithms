const bst = require('./BST');

// O(n) - linear time
function postOrder(root) {
  if (!root) {
    return null;
  }

  postOrder(root.left);
  postOrder(root.right);
  root.printValue();
}

console.log(postOrder(bst));

// print from left to right -> node at the end
// left sub-tree + right sub-tree + root
// from left to right

// 9  12  17  15  27  100  33  23;

//           23
//        15      33
//      12 17    27 100
//     9 

// literally from left to right
// checks bottom half first then goes up
