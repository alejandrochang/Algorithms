


// Given a binary tree, count th enumber of univalue subtrees
// BFS - per level basis
// DFS - top down dfs -> or bottom up dfs

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(5, new Node(5), new Node(5)); // 3


function singleValueTree(root) {
  let count = 0;

  function helper(node) {
    if (!node) return true;

    // booleans for left and right
    const isLeftBool = helper(node.left, count);
    const isRightBool = helper(node.right, count);

    console.log({ node, isLeftBool, isRightBool });

    if (
      (node.left === null || (isLeftBool && node.left.value === node.value)) &&
      (node.right === null || (isRightBool && node.right.value === node.value))
    ) {
      console.log("hitting?");
      count++;
      return true;
    } else {
      return false;
    }
  }

  helper(root)

  return count;
}


let result = singleValueTree(root);
console.log({ result })

// Global: COunt # of unival subtrees
// Unival subtree has the same value as children


// compute whether I am unival and return to the parent - based on the node I"m looking at
// If unival add a 1 to the global box

// dfs + valyue


// if left || right exists && left value === 