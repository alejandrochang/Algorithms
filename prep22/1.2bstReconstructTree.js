// For example, given the sequence 2, 4, 3, 8, 7, 5, you should construct the following tree:

//     5
//    / \
//   3   7
//  / \   \
// 2   4   8



class Node {
  constructor(data) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const list = [2, 4, 3, 8, 7, 5];
function reconstructTree(list) {
  const root = new Node(rootNode);
  const q = [rootNode];

  while (q.length > 1) {
    const node = q.pop();
    let next = q.pop();
    if (node.data > next) {
      root.right = new Node(next);
    } else if (node.data < next) {
      root.left = new Node(next);
    }
    // let next = q.pop();

    // 5
    // insert as root - > check next item 
    // if > then right side -> if < then left side
  }
  
}


// while in node -> if < node.data
// 

console.log("result", reconstructTree(list));


// left side: node < root.data
// right side: node > root.data
// root -> root.data



// All nodes which are in range
// {key..max} will go in right subtree,
// and first such node will be root of
// right subtree
