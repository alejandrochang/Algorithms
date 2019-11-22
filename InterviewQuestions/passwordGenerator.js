// We want to create a password generator,
// function, class,
// two inputs (alphabet, passwordLength)
// create a random password 

// 'a..z'
// ['a', 'z'];, 10
// 26 characters of length

const passwordGenerator = (alphabets, passwordLength) => {
  let result = [];
  let keys = Object.keys(alphabets); // ['abcde', '12345'];
  // go through the optional numbers, if they're available
  // add two those result
  for (let i = 0; i < alphabets.length; i++) {
    let string = alphabets[i][0];
    let value = alphabets[i][1];
    for (let j = 0; j < value; j++) {
      let randomIdx = Math.floor(Math.random() * string.length);
      result.push(string[randomIdx]);
    }
  }

  while (result.length !== passwordLength) {
    let allCharacters = keys.join(''); 
    let randomIndex = Math.floor(Math.random() * allCharacters.length);
    result.push(allCharacters[randomIndex]);
  }

  return result.join('');
}


for (let i = 0; i < 10; i++) {
  console.log(passwordGenerator({'abcde': 2, '12345': 0 }, 10));
}

// { 'abcde', 2 };
// minimumNumberSamples = 2
// passwordGenerator = ('abcdef', '12345', 'XYZ', passwordLength) =>;
// passwordGenerator([ 'abcdef', '12345', 'XYZ' ], passlength);

// [psuedo]
// randomize the alphabet
// let storage = {};