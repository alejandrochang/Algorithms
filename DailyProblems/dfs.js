

class Node {
   constructor(data,left=null,right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
   }
}

const root = new Node(1, new Node(3), new Node(5)); // 9



function totalSum(r) {
  if (!r) return 0;
  let currSum = 0;

  const calSum = (node) => {
    if (!node) return;
    currSum += node.data;

    if (node.left) calSum(node.left, currSum);
    if (node.right) calSum(node.right, currSum);
  }

  calSum(r);
  return currSum;
}

// console.log(totalSum(root)); // 9


function totalSumLeft(r) {
  let solution = 0;
  const calcSum = (node) => {
    if (!node) return;

    solution += node.data;
    if (node.left) calcSum(node.left);
    if (node.right) calcSum(node.right);
  }

  calcSum(r.left);

  return solution;
}

console.log(totalSumLeft(root)); // 3


// postorder

//   1
//  2 3
// 4 5


const root2 = new Node(1, new Node(2, new Node(4), new Node(5)), new Node(3));


function postOrderBFS(root) {
  const rightMost = [[root.data]];
  const postorderTraverse = (node, level) => {
    if (!node) return;
    postorderTraverse(node.left, level++);
    postorderTraverse(node.right, level++);
    console.log({ level, node })
  }

  postorderTraverse(root, 0);

  return rightMost;
}

console.log(postOrderBFS(root2)); // [4,5,2,3,1]