

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
  const results = [];
  const dfs = (node, currSum, currPath) => {
    if (sum === currSum) {
      results.push(currPath);
      return;
    }

    console.log({ currPath, currSum });
    if (!node) { return }
    dfs(node.left, currSum += node.data, [...currPath, node.data]);
    dfs(node.right, currSum += node.data, [...currPath, node.data]);
  }

  dfs(root, 0, []);
  return results;
}

const res = pathSum2(root, 20);
console.log('res', { res }); // [[5,4,11] [5,6,9]];