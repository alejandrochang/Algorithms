
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

  breadthFirstSearch(cb) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.push(...node.children);
      cb(node);
    }
  }
}

let tree = new Tree;
let node = new Node(100);
tree.root = node;
tree.root.add(50);
tree.root.add(25);
tree.root.children[0].add(12);
tree.root.children[0].add(6);
tree.root.children[1].add(3);
tree.root.children[1].add(17);

tree.breadthFirstSearch(node => {
  console.log(node.data);
})

//              100
//           50     25
//         12  6   3  17
