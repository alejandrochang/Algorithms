// This problem was asked by Dropbox.

// Given the root to a binary search tree, find the second largest node in the tree.
// bst: insert, contains

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
     if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return true;
    }

    if (data < this.left && this.left) {
      return this.left.contains(data);
    } else if (data > this.right && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

let tree = new Node(20);
tree.insert(10);
tree.insert(17);
tree.insert(33);
tree.insert(45);
tree.insert(50);
tree.insert(9);
tree.insert(12);
console.log(tree.right.right); // 45


//          20
//       10    33
//      9 17     45
//       12        50

function secondLargestNode(root) {
  let node = root;
  let secondLargest = root;
  if (!node || !node.right) {
    return null;
  } else if (node.right && !node.right.right) {
    return node;
  }

  while (node.right) {
    secondLargest = node.data;
    node = node.right;
  }

  return secondLargest;
}

console.log('result', secondLargestNode(tree)); // 45
