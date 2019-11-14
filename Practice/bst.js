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
    if (this.left && data < this.left) {
      this.left.insert(data);
    } else if (data < this.left) {
      this.left = new Node(data);
    } else if (this.right && data > this.right) {
      this.right.insert(data);
    } else if (data > this.right) {
      this.right = new Node(data);
    }
  }

  contains(data) {

  }
}

// Creating a BST, 

//         5
//     2      21
//  -4   3  19  25

// Trick:

// [pseudo]
// check if theres a left && data is less than left -> there is go down the left tree
// check if data is less than node, insert Node
// check if theres a right && data is greater than right -> there is go down the right tree
// check if data is greater than right, insert Node