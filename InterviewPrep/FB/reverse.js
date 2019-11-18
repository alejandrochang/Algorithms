
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

console.log(reverse('hello')); // olleh