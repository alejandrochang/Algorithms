// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true
// Explanation: The root-to-leaf path with the target sum is shown.


/*
       5
     4    8 
  11    13  4
7   2        1


target: 22
*/


const hasPathSum = (root, targetSum) => {

}


class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

const root = new Node(5, new Node(4, new Node(11, new Node(7), new Node(2))), new Node(8, new Node(13), new Node(4, null, new Node(1))));

console.log(JSON.stringify(root, null, 4));

let result = hasPathSum(root, 22);
console.log({ result }); // true