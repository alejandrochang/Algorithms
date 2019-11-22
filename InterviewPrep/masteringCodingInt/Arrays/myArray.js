

class myArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
  }
}

const newArray = new myArray();
newArray.push('hello');
newArray.push('more data');
newArray.push('25');
newArray.push('wtf');
console.log(newArray);