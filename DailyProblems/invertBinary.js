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


function invertBinary(node) {

}

class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const node = new Node('a');

const res = invertBinary(node);
console.log({ res });