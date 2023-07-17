// Invert a binary tree.

// For example, given the following tree:

//     a
//    / \
//   b   c
//  / \  /
// d   e f
// should become:

//   a
//  / \
//  c  b
//  \  / \
//   f e  d


// Go through each node - swap left and right,
// go through children swap left and right

function swap(left, right) {
  let temp = left;
  left = right;
  right = temp;
}

function invertBinary(node) {
  const traverse = (node) => {
    if (!node.left && !node.right) return;

    if (node.left) {
      swap(node.left, node.right);
      invertBinary(node.left);
    } else if (node.right) {
      swap(node.left, node.right);
      invertBinary(node.right);
    }

    return node;
  }

  const result = traverse(node);
  return result;
}

class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const node = new Node('a', new Node(''));

const res = invertBinary(node);
console.log({ res });