const capitalize = require('./capitalize');

test("Expect capitalzie function to be Declared", () => {
  expect(capitalize).toBeDefined();
});

test("Expect 'a short sentence' to equal to 'A Short Sentence'", () => {
  expect(capitalize("a short sentence")).toEqual("A Short Sentence");
});

test("Expect 'a short sentence' to equal to 'A Lazy Fox'", () => {
  expect(capitalize("a lazy fox")).toEqual("A Lazy Fox");
});

test("Expect 'look, it is working!' to equal to 'Look, It Is Working!'", () => {
  expect(capitalize("look, it is working!")).toEqual("Look, It Is Working!");
});

// function capitalize(str) {
//   let words = str.split(' ');

//   for (let i = 0; i < words.length; i++) {
//     words[i] = words[i][0].toUpperCase() + words[i].slice(1);
//   }

//   return words.join(' ');
// }

// function capitalize(str) {
//   let words = [];

//   for (let word of str.split(" ")) {
//     words.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return words.join(" ");
// }
