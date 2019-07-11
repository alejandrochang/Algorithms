function reverse(str) {
  if (!str || str.length < 2 || typeof str !== 'string') return 'Incorrect input, please make sure its a string';
  return str.split('').reverse().join('');
}


function reverse2(str){
  let result = '';
  for (let ch of str.split('')) {
    result = ch + result;
  }

  return result;
}

function reverse3(str) {
  return [...str].reverse().join('');
}

console.log(reverse('racecar'));
console.log(reverse('hello world'));
console.log(reverse('now! hey'));
console.log(reverse('Hi My name is Andrei.')); // .ierdnA si eman yM iH
console.log(reverse2('Hi My name is Andrei.')); // .ierdnA si eman yM iH
console.log(reverse3('Hi My name is Andrei.')); // .ierdnA si eman yM iH