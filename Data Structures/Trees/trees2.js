// Trees 

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
  constructor(){
    this.root = null;
  }

  bfs(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }

  dfs(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

const node = new Node(1);
const tree = new Tree();
tree.root = node;

node.add(6);
node.add(12);
node.add(77);
// console.log(tree.root); // Node { data: 1, children: [] }

let sum = 0;
const sumFn = (node) => sum += node.data;

tree.bfs(sumFn)
// 
console.log({ sum })