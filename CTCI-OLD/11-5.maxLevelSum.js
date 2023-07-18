// Input: root = [1,7,0,7,-8,null,null]
// Output: 2
// Explanation: 
// Level 1 sum = 1.
// Level 2 sum = 7 + 0 = 7.
// Level 3 sum = 7 + -8 = -1.
// So we return the level with the maximum sum which is level 2.

//     1
//    7  0
//   7 -8

class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


const root = new Node(1, new Node(7, new Node(7)), new Node(0, new Node(-8)));

function maxLevelSum2(root) {
  if (!root) return 0;
  const q = [root];
  let result = 0;
  let maxSum = -Infinity;
  let level = 0;

  while (q.length > 0) {
    const length = q.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
      const node = q.shift();
      sum += node.data;

      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);

      if (sum > maxSum) {
        maxSum = sum;
        result = level;
      }
    }

    level += 1;
    sum = 0;
  }


  return {result, maxSum };
}

// const result = maxLevelSum(root);
// console.log({ result });



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxLevelSum = function(root) {
    if (!root) return null;

    let result = 0;
    let maxSum = -Infinity;
    let levels = 0;
    const q = [root];
    while (q.length > 0) {
        const length = q.length;
        let sum = 0;
        for (let i = 0; i < length; i++) {
            const curr = q.shift();
            sum += curr.data;
            if (curr.left) {
                q.push(curr.left);
            }
            if (curr.right) {
                q.push(curr.right);
            }

            if (sum > maxSum) {
                maxSum = sum;
                result = levels;
            }
        }

        levels += 1;
        sum = 0;
    }

    return result;
};

const result = maxLevelSum2(root);
console.log({ result });
