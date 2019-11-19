// Given a phrase, capitalize every word.

const capitalize = (str) => {
  let result = [];
  let words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    result.push(words[i][0].toUpperCase() + words[i].slice(1));
  }

  return result.join(' ');
}


console.log(capitalize("hello world")); // "Hello World");
