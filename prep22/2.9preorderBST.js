// Given an array of numbers, return true if given array can represent preorder traversal 
// of a Binary Search Tree, else return false. Expected time complexity is O(n).

/*

Example1: [2,4,3] // true
Example2: [2,4,1] // false
Example3: [40, 30, 35, 80, 100] // true
Example4: [40, 30, 35, 20, 80, 100] // false

*/

function canRepresentBST(arr) {
  const stack = [];
  let root = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    let currentNum = arr[i];

    if (currentNum < root) return false;

    // if stack top less than currentNum set new root + remove last element
    while (stack.length > 0 && stack[stack.length - 1] < currentNum) {
      root = stack[stack.length - 1];
      stack.pop();
    }

    stack.push(currentNum);
  }


  return true;
}

console.log(canRepresentBST([2, 4, 3])); // true
console.log(canRepresentBST([2, 4, 1])); // false
console.log(canRepresentBST([40, 30, 35, 80, 100])); // true
console.log(canRepresentBST([40, 30, 35, 20, 80, 100])); // false




/*
         20
      15    25
    13  18    30
*/
// DFS - Preorder
// Output: 20, 15, 13, 18, 25, 30


/*

High Level:
- Use a stack to process items, have root set to -Infinity
- iterate, keep removing items smaller than currentNum, 
- make the last removed item new root

*/