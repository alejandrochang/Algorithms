// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.


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
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  dfs(cb) {
    let node = this.root;
    cb(node)
    node.left.dfs(cb);
    node.right.dfs(cb);
  }

  bfs() {

  }
}

let node = new Node(25);
node.insert(5);
node.insert(15);
node.insert(425);
node.insert(7);
node.insert(2);
node.insert(35);

// console.log(node.contains(35));  // Node { data: 35, left: null, right: null }
// console.log(node.left.left.data); // 2
// console.log(node.left.right.left.data); // 7

let tree = new Tree();
tree.root = node;
; // 25, 5, 2,15, 7, 425, 35

//           25
//      5         425
//    2   15    35
//       7
