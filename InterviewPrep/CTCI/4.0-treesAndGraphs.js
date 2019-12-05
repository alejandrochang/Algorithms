
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
console.log(JSON.stringify(tree, null, 4));
//       1
//    6      12
//  4   5   8  22


// Implement a BST
// left is < right is > then
// Implement: insert, contains methods
class BSTNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  // insert(data) {
  //   if ()
  // }

  // constains(data) {
  // }
}
// Implement IOT (In Order Traversal), POT(Pre-Order Traversal) and POT (Post-Order Traversal) for Binary Tree Traversal


