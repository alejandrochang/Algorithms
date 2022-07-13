


//  * function TreeNode(val, left, right) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.left = (left===undefined ? null : left)
//  *     this.right = (right===undefined ? null : right)
//  * }


function levelOrder(root) {
  if (!root) return [];
  const q = [root];
  const levels = [];

  while (q.length > 0) {
    let qLength = q.length;
    const currentLevel = [];
    for (let i = 0; i < qLength; i++) {
      const current = q.shift();
      if (current.left) q.push(curr.left);
      if (current.right) q.push(curr.right);

      currentLevel.push(current.val);
    }

    levels.push(currentLevel);
  }

  return levels;
}



// Run a BFS 
// get all items of the queue and its children
// process the nodes to a temp arr and go from there