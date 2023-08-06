//   a
//    / \
//   b   c
//  /
// d

// Return deepest node: 'd'

class Node {
  constructor(data,left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node('a', new Node('b', new Node('d')), new Node('c'));


function deepestNode(node) {
  let deepest = 0;
  const dfs = (node, l) => {
    if (!node) {
      deepest = l;
      return;
    }

    if (!node.left && !node.right) {
      deepest = l;
      return;
    }

    dfs(node.left, l++);
    dfs(node.right, l++);

    if (l > deepest) deepest = l;
  }

  dfs(node, 0)

  return deepest;
}

const res = deepestNode(root);
console.log({ res });