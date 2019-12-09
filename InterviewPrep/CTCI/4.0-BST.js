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

  // check if left and data < left data
  // check data < left data
  // check if right data > right data
  // check data > right data

  insert(data) {
    if (this.left && data < this.data) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (this.right && data > this.data) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    }

    if (this.left && data < this.data) {
      return this.left.contains(data);
    } else if (this.right && data > this.data) {
      return this.right.contains(data);
    }
  }
}

let node = new Node(5)
node.insert(6);
node.insert(7);
node.insert(8)
node.insert(2)
node.insert(4)

console.log(node.contains(2)); // return Node 8


console.log(JSON.stringify(node, null, 4));