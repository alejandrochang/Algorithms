
const sum = (arg1, arg2) => {
  return arg1 + arg2;
}

module.exports = sum;


console.log(sum(2, 3)); // 5
console.log(sum(6, 4)); // 10





// Duplicate 
// Ways: slice, loop, spread operator, concat, Array.from, map

const arr = [1,2,3,4,5];

Array.prototype.nativeDuplicate = function() {
  let res = [];
  for (let i = 0; i < this.length; i++) res.push(this[i]);

  return res;
}

const duplicate = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) result.push(arr[i]);

  return result;
}

const res = duplicate(arr);
// console.log({ arr, res });
// console.log('?', arr === res);



// Map
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [5, 6, 7, 8, 9];

Array.prototype.nativeMap2 = function(cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
}

const nativeMap = (arr, cb) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(cb(arr[i]));
  }

  return res;
}

const callBack = (num) => num * 2;

// console.log("test:", { testArr });
console.log('res:', arr2.nativeMap2(callBack));

console.log("res 1:", nativeMap(arr2, callBack)); // [1, 2, 3, 4, 5];
console.log("res 2:", nativeMap(arr3, callBack)); // [5, 6, 7, 8, 9];



// performance
// let start = + new Date();
// console.log('now', new Date() - start);