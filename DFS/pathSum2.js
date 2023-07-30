

class Node {
  constructor(data,left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

//       5
//     4   6
//   11     9


// TotalSum = 20 (both sides) - [5,4,11] [5,6,9]


const root = new Node(5, new Node(4, new Node(11)), new Node(6, null, new Node(9)));

function pathSum2(root, sum) {
  if (!root) return [];
  const dfs = (node, targetSum, paths = [], rootToLeaf = []) => {
    if (node) {
      const remaining = targetSum - node.data;
      rootToLeaf.push(node.data);

      if (!node.left && !node.right && remaining === 0) paths.push([...rootToLeaf]);

      dfs(node.left, remaining, paths, rootToLeaf);
      dfs(node.right, remaining, paths, rootToLeaf);

      rootToLeaf.pop();
    }

    return paths;
  }

  return dfs(root, sum);
}

const res = pathSum2(root, 20);
console.log('res', { res }); // [[5,4,11] [5,6,9]];