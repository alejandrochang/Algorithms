

class Node {
  constructor(data, left=null, right=null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}


 function convertoBST(arr, start, end) {
   if (start > end) return null;

   const mid = (start + end) / 2;
   const root = new Node(arr[mid]);

   root.left = convertoBST(arr, start, mid - 1);
   root.right = convertoBST(arr, mid + 1, end);

   return root;
 }

 function build_balanced_bst(a) {
   let res = convertoBST(a, 0, a.length - 1);
   return res;
 }


const arr = [8, 10, 12, 15, 16, 20, 25];
let res = build_balanced_bst(arr);
console.log(JSON.stringify(res, null, 4))



