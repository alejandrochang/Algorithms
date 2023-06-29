// Given a node in a binary search tree, return the next bigger element,
//  also known as the inorder successor.

// For example, the inorder successor of 22 is 30.

//    10
//   /  \
//  5    30
//      /  \
//    22    35

// You can assume each node has a parent pointer.

function nextBiggerNode(root) {
  if (!root) return;
}


class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(10, new Node(5), new Node(30, new Node(22), new Node(35)));
const res = nextBiggerNode(root);
console.log({ res }); // 22