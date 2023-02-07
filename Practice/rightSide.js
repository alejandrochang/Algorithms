
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


// Run BFS - get last node of each level