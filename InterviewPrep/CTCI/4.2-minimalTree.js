// Given a sorted (increasing oder) array with a unique integer elements, write and
// algorithm to create a bst (binary search tree) with minimal height

class TreeNode {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
}

let arr = [1, 2, 3, 4, 5];


let bst = new Tree();

// const createMinimalBST = (arr)  => {
//   return createMinimalBST(arr, 0, array.length - 1);
// }

// const minimalTree = (tree, arr) => {

// }


console.log(JSON.stringify(bst, null, 4))

// get the middle node,
// recursively call the minimalTree function if the 