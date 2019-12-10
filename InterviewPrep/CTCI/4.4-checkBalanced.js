// Implement a function to check if BST is balanced. For the purposes of this question,
// a balanced tree is defined to be a tree such that the heights of 
// the two subtrees of any node  never differ by more than 1


class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

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
}


class Tree {
  constructor(){
    this.root = null;
  }
}

let node = new Node(10);
let tree = new Tree();
tree.root = node;
node.insert(7);
node.insert(12);
node.insert(5);
node.insert(18);

//     10
//    7   12
//  5        18


// console.log(JSON.stringify(node, null, 4));
// console.log(JSON.stringify(tree, null, 4));

const checkBalanced = (node, min = null, max = null) => {
  if (min !== null && node.data < min) {
    return false;
  }

  if (max !== null && node.data > max) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }

  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }


  return true;
}

console.log(checkBalanced(tree.root));

// [pseudo]: how do  we knoe its balanced
// Hold a min, max values for the function
// Go to left and validate the data store the max, should be less than
// Go to right and store the min, should be greter than that
// recursively call functions with node.left and node.right