// syntax can also looks like: function* numbers()

//Ex. 1
function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
generator.next(); // { value: 2, done: false }

/*
  The first time we call .next() the generator goes up to the next() statement and 
  returns when it hits the first yield. The second time the generator expects a number. done is false,
  as it hasn't technically completed. The second time you call next(), you can pass any argument. That 
  value will be inserted into the yield block and then executed.

  1) run up to the yield statement and return
  2) take over the yield statement with the argument passed along
  3) It is only done when you reach the last yield statement

 */
generator.next(10); // 30


function *list(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

const generator2 = list();
//Ex. 2
// console.log(generator2.next()); // { value: 1, done: false }
// console.log(generator2.next()); // { value: 2, done: false }
// console.log(generator2.next()); // { value: 3, done: false }
// console.log(generator2.next()); // { value: 4, done: false }
// console.log(generator2.next()); // { value: 5, done: false }
// console.log(generator2.next()); // { value: undefined, done: true }


// Ex.3
const numbersArr = [];
for (let value of generator2) {
  numbersArr.push(value);
}

console.log('numbers', numbersArr); // numbers [ 1, 2, 3, 4, 5 ]

// Ex.4

function *otherList() {
  yield 1;
  yield 2;
  yield* MoreList();
  yield 6;
  yield 7;
}

function *MoreList(){
  yield 3;
  yield 4;
  yield 5;
}

const generator3 = otherList();
let values = [];

for (let val of generator3) {
  values.push(val);
}

console.log('values', values); // values [ 1, 2, 3, 4, 5, 6, 7 ]


//Ex. 5 (more real practical example)
class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  *printValues(){
    yield this.value;
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

// DFS -> [1, 2, 4, 3]
const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3)
]); 

const values2 = [];
for (let val of tree.printValues()) {
  values2.push(val);
}

console.log('tree values', values2); // tree values [ 1, 2, 4, 3 ]


console.log('tree', tree.printValues().next()); // tree { value: 1, done: false }
