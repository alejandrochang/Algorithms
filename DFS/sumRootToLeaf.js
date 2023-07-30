// Input: root = [1,2,3]
// Output: 25
// Explanation:
// The root-to-leaf path 1->2 represents the number 12.
// The root-to-leaf path 1->3 represents the number 13.
// Therefore, sum = 12 + 13 = 25.



// Input: root = [4,9,0,5,1]
// Output: 1026
// Explanation:
// The root-to-leaf path 4->9->5 represents the number 495.
// The root-to-leaf path 4->9->1 represents the number 491.
// The root-to-leaf path 4->0 represents the number 40.
// Therefore, sum = 495 + 491 + 40 = 1026.


class Node {
  constructor(data, left=null, right=null) {
    this.data=data;
    this.left=left;
    this.right=right;
  }
}

const root = new Node(1, new Node(2), new Node(3)); // 12 + 13 = 25

function sumRootToLeaf(root) {

}

const result = sumRootToLeaf(root);
console.log({ result });
