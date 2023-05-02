// Given the root to a binary search tree, find the second largest node in the tree.

//       8
//     3     10
//   1  6       14
//     4  7    13


class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(8, new Node(3, new Node(1), new Node(6, new Node(4), new Node(7))), new Node(10, null, new Node(14, new Node(13))));
// console.log('tre', JSON.stringify(root, null, 4));

// Solution: 13
// Time: O(n)
// Space: O(n)

// Inorder traversal -> return second to last node of arr


function secondLargest(root) {
  if (!root) return;
  let sortedList = [];

  function inorderTraverse(node) {
    if (!node) return;

    if (node.left) inorderTraverse(node.left);
    sortedList.push(node.data);
    if (node.right) inorderTraverse(node.right);
  }

  inorderTraverse(root);

  return sortedList[sortedList.length - 2];
}


const result = secondLargest(root);
console.log({ result });