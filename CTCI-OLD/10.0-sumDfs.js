
// Binary Tree Sum


class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.right = right;
    this.left = left;
  }
}

const root = new Node(5, new Node(2, new Node(1)), new Node(7, new Node(6), new Node(9)));

let sum = 0;

function btSum(node) {
  if (!node) return 0;

  if (node.data) {
    sum += node.data;
  }

  btSum(node.left);
  btSum(node.right);

  return sum;
}


let result = btSum(root);
console.log({ result }); // 30


//    5
//  2   7
// 1   6  9


// Total Sum: 30