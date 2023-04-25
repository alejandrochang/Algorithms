// Good morning! Here's your coding interview problem for today.

// This problem was asked by Google.

// Given the root of a binary search tree, and a target K, return two nodes in the tree whose sum equals K.

// For example, given the following tree and K of 20

//     10
//    /   \
//  5      15
//        /  \
//      11    15
// Return the nodes 5 and 15.


// 1. Construct node data structure
// 2. Func sumToK


class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(10, new Node(5), new Node(15, new Node(11), new Node(15)));

function sumToK(node, k) {
  let arr = [];

  function helper(root) {
    if (!root) return;

    helper(root.left);
    arr.push(root.data);
    helper(root.right);
  }

  // should be sorted array with inorder traversal
  helper(node);
  return arr;
}


let res = sumToK(root, 20);
console.log('result', { res });


/*
  Organization:
  I: root, k
  O: two nodes that sum up to k



*/