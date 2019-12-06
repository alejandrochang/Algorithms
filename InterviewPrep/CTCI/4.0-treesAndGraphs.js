
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

// class BSTNode {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }

//   insert(data) {
//     if (data < this.data && this.left) {
//       this.left.insert(data);
//     } else if (data < this.data) {
//       this.left = new Node(data);
//     } else if (data > this.data && this.right) {
//       this.right.insert(data);
//     } else if (data > this.data) {
//       this.right = new Node(data);
//     }
//   }

//   contains(data) {
//     if (this.data === data) {
//       return this;
//     }

//     if (data < this.data && this.left) {
//       return this.left.contains(data);
//     } else if (data > this.data && this.right) {
//       return this.right.contains(data);
//     }

//     return null;
//   }
// }

// if this.left && this.data < .data
let bst = new BSTNode(5);
tree.root = bst;
bst.insert(6)
bst.insert(7)
bst.insert(8)
console.log({ bst });
bst.insert(2);
bst.insert(4);
// bst.insert(18);
console.log(JSON.stringify(bst, null, 4));



// Implement IOT (In Order Traversal), POT(Pre-Order Traversal) and POT (Post-Order Traversal) for Binary Tree Traversal


