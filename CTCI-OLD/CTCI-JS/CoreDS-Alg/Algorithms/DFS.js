// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter((child) => {
      return child.data !== data;
    })
  }
}

class Tree {
  constructor(){
    this.root = null;
  }

  depthFirstSearch(cb) {
    const arr = [this.root];
    while (arr.length) {
      let node = arr.shift();
      arr.unshift(...node.children);
      cb(node);
    }
  }
}


let node = new Node(10);
let tree = new Tree;

tree.root = node;
tree.root.add(9);
tree.root.add(8);
tree.root.children[0].add(7);
tree.root.children[0].add(6);
tree.root.children[1].add(5);

tree.depthFirstSearch(node => {[]
  console.log('change', node.data + 1);
})

// change 11  -> gets 10, 9 - all of their children, 8 -> all of their children
// change 10
// change 8
// change 7
// change 9
// change 6

// console.log(tree.root.children);
// [Node { data: 9, children: [[Node - 7], [Node - 6]] },
//   Node { data: 8, children: [[Node - 5]] }]