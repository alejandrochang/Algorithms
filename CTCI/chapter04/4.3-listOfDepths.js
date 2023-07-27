// List of Depths: Given a binary tree, 
// design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D,
// you'll have D linked lists).

const LinkedList = require('../chapter02/2.0-LinkedList');
// const ll = new LinkedList();

class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(10, new Node(5, new Node(1)), new Node(15, new Node(12), new Node(27)));

/*
      10
    5     15
  1      12  27

  Res: L1: 10, L2: 5,15 L3: 1,12,27
*/

function listofDepths(node) {
  const lists = [];

  const q = [node];
  while (q.length > 0) {
    let length = q.length;
    let ll = new LinkedList();
    for (let i = 0; i < length; i++) {
      let curr = q.shift();
      ll.insertFirst(curr.data);

      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    lists.push(ll);
    ll = new LinkedList();
  }

  return lists;
}

const res = listofDepths(root);
console.log(JSON.stringify(res, null, 4));