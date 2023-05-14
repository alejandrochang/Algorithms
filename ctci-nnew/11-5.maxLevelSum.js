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

function maxLevelSum(root) {
  if (!root) return 0;

  
}

const result = maxLevelSum(root);
console.log({ result });