


// Given the root of a binary tree, return all root-to-leaf paths in any order
// A leaf is a node with no children

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function binaryTreePaths(root) {
  let result = [];
  traverse(root, "");

  function traverse(node, path) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push(path + node.val);
      return;
    }

    traverse(node.left, path + node.val + "->");
    traverse(node.right, path + node.val + "->");
  }

  return result;
}

//        1
//    2      3
//      5
const root = new TreeNode(1);
root.left  = new TreeNode(2, null, new TreeNode(5));
root.right  = new TreeNode(3);

// console.log('result', JSON.stringify(root, null, 4));
// console.log("result", binaryTreePaths(root));

// Solution: [ '1->2->5', '1->3']

//      1
// Solution: ['1']


let maxSum = Number.NEGATIVE_INFINITY;
let chosenNode = null;

function rootToLeaves(root) {
  let result = [];
  traverse(root, []);

  function traverse(node, path) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push([...path, node.val]);
    }

    traverse(node.left, [...path, node.val]);
    traverse(node.right, [...path, node.val]);
  }

  return result.map((arr) => arr.join('->'));
}

// dfs all the way down to sum and sorted
// function binaryTreePaths(root) {
//   let result = [];
//   traverse(root, 0);

//   function traverse(node, sum) {
//     if (!node) return;

//     if (!node.left && !node.right) {
//       // sum = sum + node.val
//       result.push(sum + node.val);
//     }

//     traverse(node.left, sum + node.val);
//     traverse(node.right, sum + node.val);
//   }

//   return result;
// }

// console.log("result", binaryTreePaths(root));




function all_paths_of_a_binary_tree(root) {
  // Write your code here.
  let result = [];

  function traverse(node, path) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push([...path, node.val]);
    }

    traverse(node.left, [...path, node.val]);
    traverse(node.right, [...path, node.val]);
  }

  traverse(root, []);

  return result;
}

console.log("plop result", all_paths_of_a_binary_tree(root));
