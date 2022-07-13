// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

// BST -- THINK RECURSIVE!!!

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data) {
      return this;
    }

    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}

const root = new Node(1);
root.left = new Node(7);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right = new Node(3);

console.log('data', JSON.stringify(root, null, 4));


const countElementsBT = (root) => {
  if (!root) return;
  const q = [root];
  let count = 0;
  while (q.length) {
    const curr = q.pop();
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);

    count += 1;
  }

  return count;
}

const sumElementBT = (root) => {
  if (!root) return;
  const q = [root];
  let sum = 0;
  while (q.length) {
    const curr = q.pop();
    sum += curr.data;
    if (curr.left) q.push(curr.left);
    if (curr.right) q.push(curr.right);
  }

  return sum;
}

const heightofBT = (root) => {
  if (!root) return;
  let q = [root];
  let height = 0;
  while (q.length) {
    const curr = q.pop();
    const temp = [];
    if (curr.left) temp.push(curr.left);
    if (curr.right) temp.push(curr.right);

    height += 1;
    q = temp;
  }

  return height;
}


// console.log('result', countElementsBT(root)); // 5 count 
// console.log('result 2', sumElementBT(root)); // sum count  20
console.log("result3", heightofBT(root)); // 2