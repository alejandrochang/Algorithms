

// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// MOVE ZEROES TO FRONT STRATEGY
const moveZeroes = (arr) => {
  let k = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i]; // number that is not 0
      arr[i] = arr[k]; // set whatever is not a numebr to that variable
      arr[k] = temp; // push the number to the front
      k++;
    }
  }

  return arr;
}

const arr = [0, 1, 0, 3, 12];
console.log(moveZeroes(arr)); // [ 1, 3, 12, 0, 0 ]

// iterate through array check to see if curr element is 0
// keep temp variable, swap curr  variable for set variable
// index into the k element of the arr -> ex, push to the front