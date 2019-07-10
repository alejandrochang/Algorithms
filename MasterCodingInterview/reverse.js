function reverse(str) {
  return str.split(' ').reverse().join(' ');
}


function reverse2(str){
  let result = '';
  for (let ch of str) {
    result += ch;
  }
}

console.log(reverse('racecar'))
console.log(reverse('hello world'))
console.log(reverse('now! hey '))
console.log(reverse('Hi! My name is Alejandro. '))