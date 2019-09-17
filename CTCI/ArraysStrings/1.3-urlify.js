// URLify

// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the
// "true" length of the string. (Note: If implementing in Java, please use a character array so that 
// you can perform this operation in place);

const urlify = (str) => {
  let result = '';
  for (let ch of str) {
    if (ch === ' ') {
      result += '%20';
    } else {
      result += ch;
    }
  }

  return result;
}

const urlify2 = (str) => {
  return str.split(' ').join('%20').toString();
}

console.log(urlify2('hello world')); // 'hello%20world'
console.log(urlify2('that how it works !   ')); // 'that%20how%20it%20works%20!'

// I: string
// O: string
// time: O(n)
// space: O(n)


// psuedo code: 
// iterating through the string and replacing blank spaces with '%20'

