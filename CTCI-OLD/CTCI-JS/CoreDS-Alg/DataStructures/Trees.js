// Tree implementation with dfs and bfs

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return data !== node.data
    })
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  bfs(cb) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.push(...node.children);
      cb(node); // do whatever we want
    }
  }

  dfs(cb) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.unshift(...node.children);
      cb(node); // do whatever we want
    }
  }
}

let node = new Node(50);
let tree = new Tree;

tree.root = node;
tree.root.add(25);
tree.root.add(100);
tree.root.children[0].add(12);
tree.root.children[0].add(37);
tree.root.children[1].add(75);
tree.root.children[1].add(125);

tree.bfs((node) => {
  console.log('bfs', node.data)
})

tree.dfs((node) => {
  console.log('dfs', node.data)
})

// A tree is a graph that has no cycles 

// Terminology:

// Root is the topmost node of the tree
// Edge is the link between two nodes
// Child is a node that has a parent node
// Parent is a node that has an edge to a child node
// Leaf is a node that does not have a child node in the tree
// Height is the length of the longest path to a leaf
// Depth is the length of the path to its root