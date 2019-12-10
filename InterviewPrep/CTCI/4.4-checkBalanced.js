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


console.log(JSON.stringify(node, null, 4));






const checkBalanced = () => {

}

