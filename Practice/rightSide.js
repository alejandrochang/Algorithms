
// BT Right Side

//    1
//   /  \
//  2    3
//   \     \
//    5     4



class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1, new Node(2, null, new Node(5)), new Node(3, null, new Node(4)));
// [1,3,4]
const root2 = new Node(1, new Node(2, null, new Node(5, new Node(1))), new Node(3, null, new Node(4)));
// [1,3,4, 1]

// Run BFS - get last node of each level

function btRigthSide(root) {
  if (!root) return [];
  const q = [root];
  const result = [];

  while (q.length > 0) {
    let length = q.length;

    for (let i = 0; i < length; i++) {
      let node = q.shift();
      if (i === length - 1) {
        result.push(node.val)
      }
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return result;
}


let result = btRigthSide(root);
let result2 = btRigthSide(root2);
console.log({ result, result2 });