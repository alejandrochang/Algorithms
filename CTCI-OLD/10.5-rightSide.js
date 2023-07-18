/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];

    const q = [root];
    while (q.length > 0) {
        let size = q.length;
        for (let i = 0; i < size; i++) {
            const current = q.shift();
            if (i === size - 1) result.push(current.val);
            if (current.left !== null) q.push(current.left);
            if (current.right !== null) q.push(current.right);
        }
    }

    console.log({ result })
    return result;
};

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]

class Node {
  constructor(val, left=null, right=null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(1, new Node(2, null, new Node(5)), new Node(3, null, new Node(4)));


const result = rightSideView(root);
console.log({ result });



// Run a BFS: get last element of each level
// append each el into result and return


// var rightSideView = function(root) {
//     if(!root) return [];
//     const q = [root];
//     const result = [];
//     while(q.length){
//         const size = q.length;
//         result.push(q[size-1].val);
//         for(let i=0; i<size; i++){
//             const node = q.shift();
//             node.left && q.push(node.left);
//             node.right && q.push(node.right);
//         }
//     }
//     return result;
// };