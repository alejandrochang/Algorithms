// solution 1 - reverse() helper
function reverse(str) {
  return str.split('').reverse().join('');
}

// solution 2
function reverse2(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }

  return result;
}

function reverse3(str) { // ES6
  let reversed = '';

  for (let character of str) {
    reversed = character + reversed; // adding the char to the end of the reversed string
  }

  return reversed;
}

console.log(reverse3('racecar')); // racecar
console.log(reverse3('hello')); // olleh
console.log(reverse3('buybye')); // eybyub