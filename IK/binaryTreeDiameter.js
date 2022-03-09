



// Diameter Of A Binary Tree

class Node {
    constructor(value, left=null, right=null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const root = new Node(0, new Node(1, new Node(3), new Node(4)), new Node(2));
const root2 = new Node(0, new Node(1, new Node(2, new Node(4)), new Node(3, null, new Node(5))));


function diameterBT(root) {

}


let res1 = diameterBT(root);
let res2 = diameterBT(root2);

console.log({ res1, res2 }); // { 3, 4 };