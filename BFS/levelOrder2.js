// Level Order Traversal


// Input: root = [3,9,20,null,null,15,7]
// Output: [[15,7],[9,20],[3]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

class Node {
  constructor(data,left=null,right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function levelOrderTraversal(root) {
  if (!root) return [];
  const levels = [];
  const q = [root];

  while (q.length > 0) {
    let length = q.length;
    const level = [];
    for (let i = 0; i < length; i++) {
      let node = q.shift();
      level.push(node.data);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    levels.push(level);
  }

  return levels.reverse();
}

//     3
//   9     20
//       15   7

const root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));

const res = levelOrderTraversal(root);
console.log('result', res); //[[15,7],[9,20],[3]]