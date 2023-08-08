// 1. PivotX
// The first part contains all elements in lst that are less than x
// The second part contains all elements in lst that are equal to x
// The third part contains all elements in lst that are larger than x
// Ordering within a part can be arbitrary.

// For example, given x = 10 and lst = [9, 12, 3, 5, 14, 10, 10], one partition may be [9, 3, 5, 10, 10, 12, 14].

function pivotX(list, x) {
  const result = [[],[],[]];

  for (let num of list) {
    // equal ? < than : greater than
    num === x ? result[1].push(num) : num < x ? result[0].push(num) : result[2].push(num);
  }

  return result.flat();
}

const x = 10;
const lst = [9, 12, 3, 5, 14, 10, 10];
// console.log('result', pivotX(lst, x)); // [9, 3, 5, 10, 10, 12, 14].

// 2. Deepest Node

//   a
//    / \
//   b   c
//  /
// d

// Return deepest node: 'd'

class Node {
  constructor(data,left=null,right=null) {
    this.data=data;
    this.left=left;
    this.right=right;
  }
}

const root = new Node('a', new Node('b', new Node('d')), new Node('c')); // d

function deepestNode(root) {
  if (!root) return null;
  let result = { node: null, level: -Infinity };
  const dfs = (node, level) => {
    if (!node) return;

    dfs(node.left, level += 1);
    if (level > result.level) {
      result.level = level;
      result.node = node;
    }
    dfs(node.right, level += 1);

  }

  dfs(root, 0);

  return result.node;
}

function deepestNodeHeight(root) {
  const height = (node) => {
    if (!node) return 0;

    const letfHeight = height(node.left);
    const rightHeight = height(node.right);

    return Math.max(letfHeight,rightHeight) + 1;
  }

  return height(root);
}


// TIme: O(n), Space: O(n)

// console.log('result', deepestNode(root));
// console.log('result', deepestNodeHeight(root));



// 3. Valid Soduku
// Determine if a 9 x 9 Sudoku board is valid. 
// Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.
const board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

// Output: true

const board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];
// Output: false


function validSoduku(b) {
  for (let i = 0; i < b.length; i++) {
    let rowMap = {};
    let colMap = {};
    let boxMap = {};

    for (let j = 0; j < b[i].length; j++) {
      let row = b[i][j];
      let col = b[j][i];
    
      if (row !== '.') {
        if (rowMap[row]) return false;
        rowMap[row] = 1;
      }

      if (col !== '.') {
        if (colMap[col]) return false;
        colMap[col] = 1;
      }

      const box = b[3 * Math.floor(i/3) + Math.floor(j/3)][3 * (i%3) + (j%3)];
      if (box !== '.') {
        if (boxMap[box]) return false;
        boxMap[box] = 1;
      }
    }
  }

  return true;
}


console.log('res', validSoduku(board), validSoduku(board2)); // true | false







// 4. Degree Arr
// Input: nums = [1,2,2,3,1]
// Output: 2
// Given a non-empty array of non-negative integers nums, 
// the degree of this array is defined as the maximum frequency of any one of its elements.
// Your task is to find the smallest possible length of a (
//   contiguous) subarray of nums, that has the same degree as nums.


// High Level: startIndex - endIndex
// numMap = { sI: eI }; continues addition of elements
// if repeated subarray length ties, check both and see which one is the smallest distance (e-s)


function degreeArr(nums) {
  const numMap = {};
  for (let i = 0; i < nums.length; i++) {
    const currentNum = nums[i];
    if (numMap[currentNum]) {
      numMap[currentNum].endIndex = i;
      numMap[currentNum].degree = i - numMap[currentNum].startIndex;
      numMap[currentNum].repeated = numMap[currentNum].repeated + 1;
    } else {
      numMap[currentNum] = { startIndex: i, endIndex: null, degree: null, repeated: 0 };
    }
  }

  let result = { val: null, mostRepeated: 0, degree: 0 };
  for (let key in numMap) {
    let val = numMap[key];
    const degree = val.degree + 1;
    if (result.mostRepeated < val.repeated) {
      result = { degree: degree, mostRepeated: val.repeated, val: key };
    } else if (result.mostRepeated === val.repeated) {
      if (degree < result.degree) {
        result = { degree: degree, mostRepeated: val.repeated, val: key };
      }
    }
  }

  return result;
}


// { 1: { start: 0, end: 4, degree: 4 }};
// { 2: start: 1, end 6, degree: 5 };

const nums = [1,2,2,3,1]; // Output: 2
const nums2 = [1,2,2,3,1,4,2]; // Output :6 (because 2 is repeated 3 times)

// console.log('res', degreeArr(nums), degreeArr(nums2));