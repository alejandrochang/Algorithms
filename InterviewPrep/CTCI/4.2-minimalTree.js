// Given a sorted (increasing oder) array with a unique integer elements, write and
// algorithm to create a bst (binary search tree) with minimal height

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
}

class Tree {
  constructor() {
    this.root = null;
  }
}

let arr = [1, 2, 3, 4, 5];


let bst = new Tree();
// const minimalTree = (tree, arr) => {

// }


console.log(JSON.stringify(bst, null, 4))

// get the middle node,
// recursively call the minimalTree function if the 