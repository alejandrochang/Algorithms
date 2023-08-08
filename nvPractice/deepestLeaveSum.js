

class Node {
  constructor(data,left=null,right=null) {
    this.data=data;
    this.left=left;
    this.right=right;
  }
}

const root = new Node(1,
  new Node(2, new Node(4, new Node(7)), new Node(5)),
  new Node(3, null, new Node(6, null, new Node(8))));


// console.log('struct', JSON.stringify(root, null, 4)); // 15

function deepestLeaveSum(root) {
  if (!root) return 0;
  const q = [root];
  let res = [];

  while (q.length > 0) {
    let length = q.length;
    let levels = [];
    for (let i = 0; i < length; i++) {
      let curr = q.shift();
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
      levels.push(curr.data);
    }

    res.push(levels);
  }

  const last = res[res.length - 1];
  return last.reduce((acc, curr) => acc += curr, 0);
}


const res = deepestLeaveSum(root);
console.log({ res }); // 15