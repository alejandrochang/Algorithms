// Recover BST


//     1
//  3
//    2

// Valid:
//    3
//  1
//    2

class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1, new Node(3), new Node(2));

function recoverBST(root) {
  if (!root) return null;

  
}

const res = recoverBST(root);
console.log('res', { res });