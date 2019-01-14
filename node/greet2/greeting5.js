let secretSentence = 'Hello World 5';

function greet() {
  console.log(secretSentence);
}

module.exports = {
  greet: greet
}

// good for data encapsulation and protection
// The revealing module pattern