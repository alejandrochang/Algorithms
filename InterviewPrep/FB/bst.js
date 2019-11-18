// Build a Binary Search Tree
// insert, contains methods:

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
    } else if (this.right && data > this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (this.left && data < this.data) {
      return this.left.contains(data);
    } else if (this.right && data > this.data) {
      return this.right.contains(data);
    }

    return null;
  }
}