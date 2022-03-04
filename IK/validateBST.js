// Given a binary tree, check if it is a binary search tree (BST).
//  A valid BST does not have to be complete or balanced.

// Consider this definition of a BST:

// All nodes values of left subtree are less than or equal to parent node value.
// All nodes values of right subtree are greater than or equal to parent node value.
// Both left subtree and right subtree must be BSTs.
// NULL tree is a BST.
// Single node trees (including leaf nodes of any tree) are BSTs.


function validBST(node, min=null, max=null) {
  if (min && node.data < min) return false;
  if (max && node.data > max) return false;

  if (node.left && !validBST(node.left, min, node.data)) return false;
  if (node.right && !validBST(node.right, node.data, max)) return false;

  return true;
}


class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
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
let result2 = validBST(root2);

console.log({ result, result2 });

// left subtree has to be node.data < node
// right subtree has to be node.data > node
// 