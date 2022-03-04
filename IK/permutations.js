
const permutator = (inputArr) => {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        console.log({ curr, next, arr, m });
        permute(curr, m.concat(next));
      }
    }
  };

  permute(inputArr);

  return result;
};


const test = [1, 2, 3];

console.log('permutation solution', permutator(test));