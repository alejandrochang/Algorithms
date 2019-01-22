// methods include insert and contains


class Node {
  constructor(data, left = null, right= null){
    this.data = data;
    this.left = left;
    this.right = right;
  }

  insert(data) {
    if (data <= this.data && this.left) {
      this.left.insert(data);
    } else if (data <= this.data) {
      this.left = new Node(data);
    } else if (data >= this.data && this.right) {
      this.right.insert(data);
    } else if (data >= this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (this.data === data){
      return this;
    }

    if (data <= this.data && this.left) {
      return this.left.contains(data);
    } else if (data >= this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }

  printValue() {
    console.log(this.data);
  }
}

let bst = new Node(23);
bst.insert(15);
bst.insert(33);
bst.insert(27);
bst.insert(100);
bst.insert(12);
bst.insert(17);
bst.insert(9);

module.exports = bst;

// console.log(bst.right.left.data); // 27
// console.log(bst.right.right.data); // 100
// console.log(bst.left.right.data); // 17

//          23
//        15     33
//      12 17    27 100
//     9 

