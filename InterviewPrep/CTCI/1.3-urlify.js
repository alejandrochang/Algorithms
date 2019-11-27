// URLify

// Write a method to replace all spaces in a string with '%20'. You may assume that the string
// has sufficient space at the end to hold the additional characters, and that you are given the
// "true" length of the string. (Note: If implementing in Java, please use a character array so that 
// you can perform this operation in place);


const urlify = (str) => {
  return str.trim().split(' ').join('%20');
}

// trim removes extra spaces on back and end

console.log(urlify('hello world')); // 'hello%20world'
console.log(urlify('that how it works !   ')); // 'that%20how%20it%20works%20!'


// [pseudo]
// iterate through string, if its a space append the %20
// if the last is %20 and the current is a space, continue

// Time: O(n)
// Spacee: O(n)

// go backwards and check if we have hit our first char