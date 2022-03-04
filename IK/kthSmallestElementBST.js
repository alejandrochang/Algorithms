



class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}
// Two approaches:
// Iteratively or recrusively


function kthSmallest(root, k) {
  const sortedArr = [];

  if (!root) return sortedArr;

  const inorder = (node) => {
    if (!node) return;
    inorder(node.left);
    sortedArr.push(node.data);
    inorder(node.right);
  }

  inorder(root)

  return sortedArr[k - 1];
}



const root = new Node(3, new Node(1, null, new Node(2)), new Node(4));
// k = 1, output: 1
console.log({ root })

let res = kthSmallest(root, 1);

console.log({ res });