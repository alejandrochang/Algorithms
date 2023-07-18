// You are given the root of a binary tree containing digits from 0 to 9 only.
// Each root-to-leaf path in the tree represents a number.
// For example, the root-to-leaf path 1 -> 2 -> 3 represents the number 123.
// Return the total sum of all root-to-leaf numbers. Test cases are generated
// so that the answer will fit in a 32-bit integer.


function pathSum2(root) {

  const traverse = (node, num) => {
    if (!node) return;

    num += node.val;

    if (!node.left && !node.right) {
      return +num;
    }

    return traverse(node.left, num) + traverse(node.right, num);
  }


  return traverse(root, '');
}

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1, new Node(2), new Node(3));

const result = pathSum2(root);
console.log({ result }); // 25


/*

  Approach - traverse to depth of the tree
  1. if no node sum of concatenation of string
  2. return dfs of left node + right node of child

  Root to leaf - add all numbers

  Input: root = [1,2,3]
  Output: 25
  Explanation:
  The root-to-leaf path 1->2 represents the number 12.
  The root-to-leaf path 1->3 represents the number 13.
  Therefore, sum = 12 + 13 = 25.
*/