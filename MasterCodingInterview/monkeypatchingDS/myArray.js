class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(data) {
    this.data[this.length] = data;
    this.length++;
  }

  pop() {
    delete this.data[this.length-1];
    this.length--;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    delete this.data[this.length - 1];
    this.length--;
  }
}

// get, push pop methods for arrays
const array = new MyArray();
array.push(9)
array.push(3)
array.push(12)
array.push(22) // gone
array.push(132)

// console.log(array.get(2)) // undefined
array.delete(3);
console.log({ array }) // { array: MyArray { length: 2, data: { '0': 9, '1': 3 } } }
