// DFS Algoirthms and examples:
// Preorder, Postorder and Inorder Traversals


// Tricks:
// Inorder - middle of left and right recursive call
// preorder - first then left and right recursive call
// postorder - last then left and right recursive call

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const left = new Node(15, new Node(13), new Node(18));
const right = new Node(25, null, new Node(30));
const root = new Node(20, left, right);


/*
         20
      15    25
    13  18    30
*/
// console.log('tree', JSON.stringify(root, null, 4));

// DFS - Inorder
// Output: 13, 15, 18, 20, 25, 30

const inOrderRes = [];
function inOrder(node) {
  node.left && inOrder(node.left);
  // console.log(node.val);
  inOrderRes.push(node.val);
  node.right && inOrder(node.right);
}

inOrder(root); // 
// console.log("inorder res:", inOrderRes);

/*
         20
      15    25
    13  18    30
*/
// DFS - Preorder
// Output: 20, 15, 13, 18, 25, 30
const preOrderRes = [];
function preOrder(node) {
  // console.log(node.val);
  preOrderRes.push(node.val);
  node.left && preOrder(node.left);
  node.right && preOrder(node.right);
}

preOrder(root);
// console.log("inorder res:", preOrderRes);

/*
         20
      15    25
    13  18    30
*/
const postOrder = [];
function postOrder(node) {
  node.left && postOrder(node.left);
  node.right && postOrder(node.right);
  postOrder.push(node.val);
  // console.log(val)
}

console.log('postorder', postOrder); // 13, 18, 15, 30, 25, 20