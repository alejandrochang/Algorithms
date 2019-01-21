
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    })
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBFS(fn) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  traverseDFS(fn) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}
