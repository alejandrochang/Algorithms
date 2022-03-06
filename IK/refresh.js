



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
// let result = bfsHeightOfTree(root);
// console.log({ result });


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
// Input:

const arr = [8, 10, 12, 15, 16, 20, 25];

class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// sort from start to end -> recrusively call that 

function balancedBSTFromSortedArr(array, start, end) {
  if (!array.length) return [];
  if (start > end) return;
  const mid = Math.floor((start + end) / 2);
  const root = new Node(array[mid]);

  root.left = balancedBSTFromSortedArr(array, start, mid - 1);
  root.right = balancedBSTFromSortedArr(array, mid + 1, end);

  return root;
}

let result = balancedBSTFromSortedArr(arr, 0, arr.length - 1);
console.log('sortedArr', JSON.stringify(result, null, 4));



// mid - labeled as root
// root.left = balancedBST(arr, start, end)




// 3.kth smallest element of bst

// Given a binary search tree (BST) and an integer k, find k-th smallest element.


// const rootKth = new Node(2, new Node(1), new Node(3));

// function kthSmallestElBST(root, k) {
//   let order = [];
  
//   const inorder = (node) => {
//     if (!node) return;

//     inorder(node.left);
//     order.push(node.val);
//     inorder(node.right);
//   }

//   inorder(root);

//   return order[k-1];
// }


// let res = kthSmallestElBST(rootKth, 3);
// console.log('kth smallest', { res }); // 3

function all_paths_of_a_binary_tree(root) {
  // Write your code here.
  let result = [];

  dfs(root, '');
  function dfs(node, path) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push(path + node.value);
      return;
    }

    dfs(node.left, path + node.value + ',');
    dfs(node.right, path + node.value + ',');
  }

  // console.log({ result })
  return result.map((str) => str.split(',').map((s) => Number(s)));
}

// const input = [
//   [1, 2, 4],
//   [1, 2, 5],
//   [1, 3, 6],
//   [1, 3, 7],
// ];

// const da_root = new Node(1, new Node(2), new Node(3));
// const da_root = new Node(10, new Node(20), new Node(30));
// [[1, 2], [1, 3]]

// let res = all_paths_of_a_binary_tree(da_root); // [[1, 2], [1, 3]]
// console.log({ res });



function is_bst(root, min = null, max = null) {
  if (!root) return true;
  if (min && root.value <= min) return false;
  if (max && root.value >= max) return false;

  return is_bst(root.left, min, root.value) && is_bst(root.right, root.value, max);
}

const testRoot = new Node(100, new Node(200), new Node(300));
let ressi = is_bst(testRoot);
console.log({ ressi })