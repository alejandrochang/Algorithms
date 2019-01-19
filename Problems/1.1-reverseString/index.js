// solutions 


function reverse(str) {
  let result = '';

  for (let char of str) { // 'abc'
    result = char + result;
  }

  return result;
}

// solution 2
// return str.split('').reverse().join('');

// function reverse5(str) {
//   str.split('').reduce((reverse, char) => char + reverse, '');
// }


module.exports = reverse;