class Node {
  constructor(value, left=null, right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}


const root = new Node(10, new Node(25, null, new Node(45)), new Node(30, new Node(40), new Node(50)));

//       10
//     25  30
//   45   40  50


// Question 1: Root To Leaf (Print)

function rootToLeaf(root) {
  let paths = [];

  function getPath(node, path) {
    if (!node) return;

    if (!node.left && !node.right) {
      paths.push(path + node.value);
    }

    getPath(node.left, path + node.value + '-');
    getPath(node.right, path + node.value + '-');
  }

  getPath(root, '');

  return paths;
}


console.log("rootToLead:", rootToLeaf(root));

// Question 2: Print All Paths That Sum To K

function printPathsSumtoK(root, k) {
  let result = [];
  function getPathSum(node, path, sum) {
    if (!node) return;

    if (!node.left && !node.right) {
      result.push({ path: path.concat(node.value), sum: sum + node.value });
      return;
    }

    getPathSum(node.left, path.concat(node.value), sum + node.value);
    getPathSum(node.right, path.concat(node.value), sum + node.value);
  }

  getPathSum(root, [], 0);


  const filteredResults = result.filter(({ sum }) => sum === k).map(({ path }) => path);
  return filteredResults;
}

console.log("printPathsSumtoK:", printPathsSumtoK(root, 80));

// Solution: [[10, 25, 45][(10, 30, 40)]];
