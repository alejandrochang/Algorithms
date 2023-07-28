
class Node {
  constructor(data,left=null,right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

function minDepthBT(root) {
  if (!root) return 0;
  let q = [root];
  let height = 0;
  while (q.length > 0) {
    height += 1;
    let length = q.length;
    for (let i = 0; i < length; i++) {
      let node = q.shift();
      if (!node.left && !node.right) return height;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
  }

  return height;
}

const root = new Node(3, new Node(9), new Node(20, new Node(15), new Node(7)));

const res = minDepthBT(root);
console.log('result', res); // 2