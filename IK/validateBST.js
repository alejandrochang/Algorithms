// Given a binary tree, check if it is a binary search tree (BST).
//  A valid BST does not have to be complete or balanced.

// Consider this definition of a BST:

// All nodes values of left subtree are less than or equal to parent node value.
// All nodes values of right subtree are greater than or equal to parent node value.
// Both left subtree and right subtree must be BSTs.
// NULL tree is a BST.
// Single node trees (including leaf nodes of any tree) are BSTs.


function validBST(node, min=null, max=null) {
  if (!node) return true;
  if (min && node.value <= min) return false;
  if (max && node.value >= max) return false;

  return validBST(node.left, min, node.value) && validBST(node.right, node.value, max);
}


class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(100);
root.left = new Node(200);
root.right = new Node(300);



const root2 = new Node(100);
root2.left = new Node(50);
root2.right = new Node(300);

let result = validBST(root);
// let result2 = validBST(root2);

console.log({ result });
// 
// left subtree has to be node.data < node
// right subtree has to be node.data > node
// 


// inorder traversal
// iterate and see if next number is great than if so return false

function isValidBST(root) {
  if (!root) return true;

  function bstHelper(node, prev) {
    if (!node) return true;
    const isLeftSubtree = bstHelper(node.left, prev);

    if (node.value < prev) return false;
    prev = root.value;

    const isRightSubtree = bstHelper(node.right, prev);

    return (isLeftSubtree && isRightSubtree);
  }

  let min = -Infinity;
  return bstHelper(root, min);
}

let resul = isValidBST(root);
console.log({ resul })