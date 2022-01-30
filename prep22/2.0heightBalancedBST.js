


// tree: [-10,-3,0,5,9]
// [0,-3,9,-10,null,5]


class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

// convert arr to height Balanced Tree
function heightBalancedBST(nums, start = 0, end) {
  if (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const root = new Node(nums[mid]);

    root.left = heightBalancedBST(nums, start, mid - 1);
    root.right = heightBalancedBST(nums, mid + 1, end);

    return root;
  }

  return null;
}

const arr = [-10, -3, 0, 5, 9];
console.log("result", heightBalancedBST(arr, 0, arr.length - 1)); // 

//       0
//      /  \
//    -10   5
//       \    \
//       -3     9




// mid: root