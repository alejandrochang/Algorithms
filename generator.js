// syntax can also looks like: function* numbers()

function *numbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = numbers();
console.log(generator.next()); // { value: 2, done: false }

/*
  The first time we call .next() the generator goes up to the next() statement and 
  returns when it hits the first yield. The second time the generator expects a number. done is false,
  as it hasn't technically completed. The second time you call next(), you can pass any argument. That 
  value will be inserted into the yield block and then executed.

  1) run up to the yield statement and return
  2) take over the yield statement with the argument passed along
  3) It is only done when you reach the last yield statement

 */
console.log(generator.next(10)); // 30


function *list(){
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

let generator2 = list();
console.log(generator2.next()); // { value: 1, done: false }
console.log(generator2.next()); // { value: 2, done: false }
console.log(generator2.next()); // { value: 3, done: false }
console.log(generator2.next()); // { value: 4, done: false }
console.log(generator2.next()); // { value: 5, done: false }
console.log(generator2.next()); // { value: undefined, done: true }
