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
    // recursively go down tree left or right side, until empty spot
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
    // check to see if data = current node, go down left side if less than
    // go down right side if greater than
    if (data === this.data) {
      return this.data;
    }

    if (this.left && data < this.data) {
      return this.left.contains(data);
    } else if (this.right && data > this.data) {
      return this.right.contains(data);
    }
  }
}

const node = new Node(5);
// node.insert(5);
// node.insert(15);
// node.insert(17);
node.insert(2)
node.insert(21)
node.insert(-4)
node.insert(3)
node.insert(19)
node.insert(25)

console.log(JSON.stringify(node, null, 4));

// Creating a BST, 

//         5
//     2      21
//  -4   3  19  25

// Trick:
// recursively go down left  or right side, if less than or greater than
// insert Node if nothing left to go either side

// [pseudo]
// check if theres a left && data is less than left -> there is go down the left tree
// check if data is less than node, insert Node
// check if theres a right && data is greater than right -> there is go down the right tree
// check if data is greater than right, insert Node


// Whata data should look like: 
// {
//     "data": 5,
//     "left": {
//         "data": 2,
//         "left": {
//             "data": -4,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "data": 3,
//             "left": null,
//             "right": null
//         }
//     },
//     "right": {
//         "data": 21,
//         "left": {
//             "data": 19,
//             "left": null,
//             "right": null
//         },
//         "right": {
//             "data": 25,
//             "left": null,
//             "right": null
//         }
//     }
// }