
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
const test2 = 'a1z';

console.log('permutation solution', permutator(test));
console.log("permutation solution 2", letterCasePermutations(test2));


function letterCasePermutations(str) {
  // let result = [];

  // function permute(str, temp) {
  //   if (str.length === 0) {
  //     result.push(temp);
  //   }

  //   for (let i = 0; i < str.length; i++) {
  //     let curr = str.slice(i, 1)[0];
  //     let currCap = curr.toUpperCase();
  //     let currLow = curr.toLowerCase();

  //     permute(str, temp.concat(currCap));
  //     str.splice(i, 0, curr);
  //     permute(str, temp.concat(currLow));
  //     str.splice(i, 0, curr);
  //   }
  // }

  // permute(str, []);

  // return result;
}