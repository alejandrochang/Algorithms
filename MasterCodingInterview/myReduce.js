


// Create your own reduce funciton

const array = [10, 21, 13, 56];

function add(a, b) {
  return a + b;
}

function foo(a, b) {
  return a.concat(b);
}

Array.prototype.reduce2 = function (fn, start) {
  let result = start !== undefined ? start : this[0];
  for (var i = 0; i < this.length; i++) {
    result = fn(result, this[i]);
  }
  return result;
};

console.log(array.reduce(add)); // 100
console.log(array.reduce(add, 10)); // 110
// console.log(array.reduce(foo, "5"));
// console.log(array.reduce(foo, "X"));


// examples:

const FRUITS = [
  "banana",
  "apple",
  "orange",
  "banana",
  "orange",
  "apple",
  "apple",
  "orange",
  "orange",
  "banana",
  "orange",
  "banana",
];


const totalFruits = FRUITS.reduce((map, fruit) => ({
  ...map,
  [fruit]: (map[fruit] || 0) + 1,
}), {});


 // { banana: 4, apple: 3, orange: 5}


console.log({ totalFruits })