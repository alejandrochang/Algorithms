
const permutator = (inputArr) => {
  let result = [];

  function permute(arr, temp) {
    if (arr.length === 0) {
      result.push(temp);
    }

    for (let i = 0; i < arr.length; i++) {
      let curr = arr.splice(i, 1)[0];
      permute(arr, temp.concat(curr));
      // splice one more time with current
      arr.splice(i, 0, curr);
    }
  }

  permute(inputArr, []);

  return result;
};


const test = [1, 2, 3];

console.log('permutation solution', permutator(test));