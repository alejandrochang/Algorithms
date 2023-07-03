// Recall that a full binary tree is one in which each node is either a leaf node,
// or has two children. Given a binary tree,
// convert it to a full one by removing nodes with only one child.

// For example, given the following tree:

//          0
//       /     \
//     1         2
//   /            \
// 3                 4
//   \             /   \
//     5          6     7
// You should convert it to:

//      0
//   /     \
// 5         4
//         /   \
//        6     7

// I: root node
// O: binary tree

// High level:
// OK: If left and right (ok) + if (left and right === null)
// Remove: if left | right (remove) - if

function convertFullBinaryTree(root){
  if (!root) return;
  let bucketArr = [];
  const dfs = (node) => {
    if (!node) return;
    if (node.left && node.right || (!node.left && !node.right)) bucketArr.push(node.data);

    
  }


}

class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(0,
  new Node(1, new Node(3, new Node(5))),
  new Node(2, new Node(4, new Node(4), new Node(7)))
);

const result = convertFullBinaryTree(root);
console.log({ result });