// solution 1
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

console.log(reverse2('racecar')); // racecar
console.log(reverse2('hello')); // olleh
console.log(reverse2('buybye')); // eybyub