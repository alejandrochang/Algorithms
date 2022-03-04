

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}


const root = new Node(5); // 
root.children.push(new Node(1)); // 2

console.log({ root });
function heightOfTree(root) {
  let q = [root];
  let depth = 0;

  while (q.length > 0) {
    let size = q.length;
    for (let i = 0; i < size; i++) {
      let curr = q.shift();

      for (let child of curr.children) {
        q.push(child);
      }
    }

    depth++;
  }

  return depth;
}

let result = heightOfTree(root);
// let result2 = heightOfTree(root2);
console.log({ result });



function heightOfTree2(root) {
  if (!root) return 0;
  let depth = 0;
  const dfs = (node, levels) => {
    if (!node) return 0;

    if (levels > depth) depth = levels;
    for (let child of node.children) {
      dfs(child, levels + 1);
    }

    return levels;
  }

  dfs(root, 1);

  return depth;
}

let result2 = heightOfTree2(root);
console.log({ result2 });