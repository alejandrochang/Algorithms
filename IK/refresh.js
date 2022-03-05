



//   1
// 2 3 5
//     4

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

const root = new TreeNode(1, [new TreeNode(2), new TreeNode(3), new TreeNode(5, [new TreeNode(4)])]);
console.log({ root })
// 1. Height of Tree
// Input: root of TreeNOde
// Output: Depth of Tree

function heightOfTree(root) {
  let depth = 0;

  const dfs = (node, levels) => {
    if (!node) return 0;
    if (levels > depth) depth = levels;
    for (let child of node.children) {
      dfs(child, levels + 1)
    }

    return levels;
  }

  dfs(root, 0)
  return depth;
}


// let result = heightOfTree(root);
let result = bfsHeightOfTree(root);
console.log({ result });


function bfsHeightOfTree(root) {
  let q = [root];
  let depth = 0;

  while (q.length > 0) {
    let qLength = q.length;
    for (let i = 0; i < qLength; i++) {
      let node = q.shift();
      for (let child of node.children) {
        q.push(child);
      }
    }

    depth++;
  }

  return depth - 1;
}







// 2. balancedBSTFromSortedArr







// 3.kth smallest element of bst