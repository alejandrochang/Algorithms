

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
}


const root = new Node(5); // 
root.children.push(new Node(1)); // 2

// console.log({ root });
// bfs approach
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

  return depth - 1;
}

let result = heightOfTree(root);
// let result2 = heightOfTree(root2);
console.log({ result });


// top bottom approach
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

  dfs(root, 0);

  return depth;
}

let result2 = heightOfTree2(root);
console.log({ result2 });




// bottom up approach
function getTreeHeight(root) {
  if (!root) return 0;
  if (!root.children.length) return 0;

  let height = 0;

  for (let child of root.children) {
    let childHeight = getTreeHeight(child) + 1;
    height = Math.max(height, childHeight);
  }

  return height;
}

let result3 = getTreeHeight(root);
console.log({ result3 });