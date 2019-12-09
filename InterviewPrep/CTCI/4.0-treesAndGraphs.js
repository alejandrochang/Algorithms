
// Implement a Node w/ add and remove method
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((node) => {
      return node.data !== data;
    });
  }
}

// Implement a Tree w/ dfs and bfs methods
class Tree {
  constructor() {
    this.root = null;
  }

  // bfs(){}
  // dfs(){}
}

let node = new Node(1);
node.add(6);
node.add(12);
node.children[0].add(4);
node.children[0].add(5);
node.children[1].add(8);
node.children[1].add(22);


let tree = new Tree();
tree.root = node;
// console.log(JSON.stringify(tree, null, 4));
//       1
//    6      12
//  4   5   8  22


// Implement a BST
// left is < right is > then
// Implement: insert, contains methods

class NodeBST {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new NodeBST(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new NodeBST(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;r
    
  }
}

let bst = new NodeBST(5);
let tree2 = new Tree();
tree2.root = bst;
bst.insert(6)
bst.insert(7)
bst.insert(8)
bst.insert(2);
// bst.insert(1);
bst.insert(4);



// console.log(JSON.stringify(bst, null, 4));

// Implement IOT (In Order Traversal), POT(Pre-Order Traversal) and POT (Post-Order Traversal) for Binary Tree Traversal
// IOT: In order Traversal

// from left to root, to right
const inOrderTraversal = (root) => {
  let node = root;

  if (node !== null) {
    inOrderTraversal(node.left);
    console.log(node.data);
    inOrderTraversal(node.right);
  }
}

// console.log(inOrderTraversal(tree2.root)); // 2, 4, 5, 6, 7, 8

// PreOT: Goes from top down left, then down right
const preOrderTraversal = (root) => {
  let node = root;
  if (node !== null) {
    console.log(node.data);
    preOrderTraversal(node.left);
    preOrderTraversal(node.right);
  }
}

// console.log(preOrderTraversal(tree2.root)); // 5, 2, 4, 6, 7, 8

// POT
// Starts at the leftmost leaf, goes up, 
// Rightmost leaf, goes up

const postOrderTraversal = (root) => {
  let node = root;
  if (node !== null) {
    postOrderTraversal(node.left);
    postOrderTraversal(node.right);
    console.log(node.data);
  }
}

// console.log('post', postOrderTraversal(tree2.root)); // 4, 2, 8, 7, 6
