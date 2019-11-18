
// using reduce
// const reverse = (str) => {
//   return str.split('').reduce((a, b) => {
//     return [b, ...a];
//   }, []).join('');
// }

// using for loop

const reverse = (str) => {
  let result = '';

  for (let ch of str) {
    result = ch + result;
  }

  return result;
}

// console.log(reverse('hello')); // olleh


// reverse array without reverse method
// swap method
const reverseArr = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let el = arr[i];
    arr[i] = arr[arr.length - i - 1];
    arr[arr.length - 1 - i] = el
  }

  return arr;
}

console.log(reverseArr([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1];

// iterate through half of the array and swap elements first withlast
// last with first and continue moving down the array method

// Time: O(n / 2 ) -> O(n)
// Space: O(1) -> our space constant