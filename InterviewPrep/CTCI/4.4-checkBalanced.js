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

  isBalanced() {
    let node = this.root;
    if (!node) return true;
    
    // calculate left and right side heights count
    let leftCount = this.height(node.left);
    let rightCount = this.height(node.right);

    console.log({ leftCount, rightCount });

    // Balanced Tree difference can be 1 or less
    if (Math.abs(leftCount - rightCount) <= 1) {
      return true;
    }

    return false;
  }

  height(node) {
    if (!node) return 0;
    // balanced means could be at most 1 off, get the longest height
    return 1 + Math.max(this.height(node.left), this.height(node.right));
  }
}

let node = new Node(10);
let tree = new Tree();
tree.root = node;
node.insert(7);
node.insert(12);
node.insert(5);
node.insert(18);

// adding a diff of two returns false
// node.insert(100);
// node.insert(10000);

console.log(tree.isBalanced()); // true

//     10
//    7   12
//  5        18


// console.log(JSON.stringify(node, null, 4));
// console.log(JSON.stringify(tree, null, 4));

// console.log(checkBalanced(tree.root));

// [pseudo]: how do we know its balanced
// Hold a min, max values for the function
// Go to left and validate the data store the max, should be less than
// Go to right and store the min, should be greter than that
// recursively call functions with node.left and node.right