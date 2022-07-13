


const input = [-10, -3, 0, 5, 9];

function TreeNode(val, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function sortedArrToBST(arr) {
  if (!arr.length) return null;
  // set root node
  const mid = Math.floor(arr.length / 2);
  const root = new TreeNode(arr[mid]);

  // sorted - if left
  root.left = sortedArrToBST(arr.slice(0, mid));
  root.right = sortedArrToBST(arr.slice(mid + 1));

  return root;
}

// Time: O(n)
// Space: O(h) - h height of the tree

//     0
//   -3  9 
// -10  5

console.log('result', sortedArrToBST(input));
// Output: [0,-3,9,-10,null,5] in tree node format

// I: arr
// O: tree


// const test = new TreeNode(5)