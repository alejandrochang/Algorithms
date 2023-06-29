// Given a node in a binary search tree, return the next bigger element,
//  also known as the inorder successor.

// For example, the inorder successor of 22 is 30.

//    10
//   /  \
//  5    30
//      /  \
//    22    35

// You can assume each node has a parent pointer.

function nextBiggerNode(node) {
  if (!root) return;
  const inorderTraverse = (n) => {
    if (!n) return;
    inorderTraverse(n.left);
    if (node.data === n.data) {
      return n.data.parent;
    }
    inorderTraverse(n.right);
  }

  return inorderTraverse(node);
}


class Node {
  constructor(data, left=null, right=null, parent=null) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.parent = parent;
  }
}

const root = new Node(10, new Node(5), new Node(30, new Node(22), new Node(35)));
const chosenNode = new Node(30);
const res = nextBiggerNode(chosenNode);
console.log({ res }); // 22