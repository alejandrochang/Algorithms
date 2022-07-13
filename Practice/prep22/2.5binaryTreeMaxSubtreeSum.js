


class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}


//      10
//   4      20  -> 30


//     5
//  2     8   -> 15

//       1 
//   -10    8
// -12    4   12 -> 24

// let max = Number.NEGATIVE_INFINITY;
// let chosenNode = null;

// function findlargetSum(root) {
//   if (!root) return 0;

//   let currSum = root.val + findlargetSum(root.left) + findlargetSum(root.right);

//   // max = Math.max(max, currSum);
//   if (currSum > max) {
//     max = currSum;
//     chosenNode = root;
//   }

//   return currSum;
// }

// function btSubtreeSum(root) {
//   if (!root) return 0;
//   findlargetSum(root);

//   return { max, chosenNode };
// }

// const left = new Node(2);
// const right = new Node(8);
// const root = new Node(5, new Node(2), new Node(8)); // node: 5
// const root = new Node(10, new Node(4), new Node(20)); // node: 10

let maxSum = Number.NEGATIVE_INFINITY;
let chosenNode = null;

function calculateSum(node) {
  if (!node) return 0;

  let sum = node.val + calculateSum(node.left) + calculateSum(node.right);

  if (sum > maxSum) {
    maxSum = sum;
    chosenNode = node;
  }

  return sum;
}

function btSubtreeSum(root) {
  if (!root) return null;

  calculateSum(root);

  return { maxSum, chosenNode }
}

const newTen = new Node(-10, new Node(-12));
const eight = new Node(8, new Node(4), new Node(12)); // sum = 24, node 8
const root = new Node(1, newTen, eight);

console.log('plop', JSON.stringify(root, null, 4));
console.log('result', btSubtreeSum(root));

// Iput: root
// Output: maxSum Node


// High Level:
// - calculate sum for every node/subtree if > maxSum replace + replace node