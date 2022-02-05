// Finding the maximum or minimum node in the binary search tree is a very common task.

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
// min: 13, max: 30

function findMin(node) {
  if (!node) return;

  while (node.left) {
    node = node.left;
  }

  return node;
}

// console.log('Min:', findMin(root)); // Node { 13 };

function findMax(node) {
  if (!node) return;

  while (node.right) {
    node = node.right;
  }

  return node;
}

// console.log("Max:", findMax(root)); // Node { 30 };


let arr = [];

// inOrder gets left side first, ends right side last

function inorder(node) {
  node.left && inorder(node.left);
  arr.push(node.val);
  node.right && inorder(node.right);
}

inorder(root);

// console.log('min:', arr[0], 'max:', arr[arr.length - 1]); // 13, 30


// function isSamTree(root1, root2) {
//   return JSON.stringify(root1) === JSON.stringify(root2);
// }



const left2 = new Node(15, new Node(13), new Node(18));
const right2 = new Node(25, null, new Node(30));
const root2 = new Node(20, left2, right2);

const left3 = new Node(15, new Node(13), new Node(22));
const right3 = new Node(25, null, new Node(30));
const root3 = new Node(20, left3, right3);


// if root1 !== roor2 return false
// isSameTree(left, left)
// isSameTree(right, right)


// if tree1 && tree2 reutnr true
// if tree1 || tree2 reutnr false
// check value + more

function isSameTree(tree1, tree2) {
  if (!tree1 && !tree2) return true;
  if (!tree1 || !tree2) return false;

  return (
    tree1.val === tree2.val && isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
  )
}

// console.log('same tree', isSameTree(root, root2)); // true
// console.log("same tree", isSameTree(root, root3)); // false