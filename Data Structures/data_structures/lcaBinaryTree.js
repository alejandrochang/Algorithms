


// function ]\\\\

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function leastCommonDenominator(root, p, q) {
  // Base case to return recursive call
  if (!root || p === root || q === root) return root;

  const left = leastCommonDenominator(root.left, p, q);
  const right = leastCommonDenominator(root.right, p, q);
  return (left && right) ? root : (left || right);
}


const root = new TreeNode(3);
const zero = new TreeNode(0);
const eight = new TreeNode(8);
const one = new TreeNode(1, zero, eight);
const six = new TreeNode(6);
const seven = new TreeNode(7);
const four = new TreeNode(4);
const two = new TreeNode(2, seven, four);
const five = new TreeNode(5, six, two);
root.left = five;
root.right = one;


console.log('tree', JSON.stringify(root, null, 4));

console.log('result', leastCommonDenominator(root));