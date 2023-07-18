// Given the root of a binary tree and an integer targetSum,
// return true if the tree has a root-to-leaf path such that adding up
// all the values along the path equals targetSum.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.


/*
       5
     4    8 
  11    13  4
7   2        1


target: 22
*/

const getSum = (node) =>{
  let sum = 0;
  function rootToLeaf(node) {
    if (!node) return 0;

    rootToLeaf(node.left);
    rootToLeaf(node.right);
    sum += node.data;
    console.log({ sum })
  }

  rootToLeaf(node);

  return sum;
}

const hasPathSumBFS = (root, targetSum) => {
  let output = false;

  // dfs with value passed in as 0
  const loop = (node, value) => {
    if (node.data || node.data === 0) node.data += value;

    if (!node.left && !node.right && targetSum === node.data) {
      output = true;
    }

    if (node.left) {
      loop(node.left, node.data);
    }

    if (node.right) {
      loop(node.right, node.data);
    }
  }

  loop(root, 0);

  return output;
}



// Has Path to Sum solution for full root -> leaf === target
const hasPathSumToLeaf = (root, targetSum) => {
  if (!root) return 0;
  const left = getSum(root.left) + root.data;
  const right = getSum(root.right) + root.data;
  return (left === targetSum || right === targetSum);
}


class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(5, new Node(4, new Node(11, new Node(7), new Node(2))), new Node(8, new Node(13), new Node(4, null, new Node(1))));

// console.log(JSON.stringify(root, null, 4));

let result = hasPathSumBFS(root, 22);
console.log({ result }); // true