// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// [pseudo]
// Defined the tree and node
// BFS algorithm, go through each floor, and push the length of each stair

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  insert(data) {
    this.children.push(new Node(data));
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

let node = new Node(0);
let tree = new Tree();
tree.root = node;
node.insert(1);
node.insert(2);
node.insert(3);
node.children[0].insert(4);
node.children[2].insert(5);

console.log(JSON.stringify(node, null, 4));

const levelWidth = (node) => {
  let widthArr = [];
  
}


console.log(levelWidth(tree.root)); // [1, 3, 2]

