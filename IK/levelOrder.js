

function level_order_traversal(root) {
  let result = [];

  let q = [root];
  while (q.length > 0) {
    let size = q.length;
    let levels = [];

    for (let i = 0; i < size; i++) {
      let curr = q.shift();
      levels.push(curr);
      if (curr.left) q.push(curr.left);
      if (curr.right) q.push(curr.right);
    }

    result.push(levels);
  }

  return result;
}

// "root": [2,
// 5, 4,
// 0, 1, 3, 6]


// class Node {
//   constructor(value, left, )
// }

// let result = level_order_traversal()