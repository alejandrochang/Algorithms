const vowels = require('./vowels');

test("Expect function vowels to be defined", () => {
  expect(vowels).toBeDefined();
});

test("Expect 'Hi There' to have 3 vowels", () => {
  expect(vowels("Hi There")).toEqual(3);
});

test("Expect 'Why do you ask?' to have 4 vowels", () => {
  expect(vowels("Why do you ask?")).toEqual(4);
});

test("Expect 'Why?' to have 0 vowels", () => {
  expect(vowels('Why')).toEqual(0);
});





// function vowels(str) {
//   let vowels = ["a", "e", "i", "o", "u"];
//   let count = 0;
//   for (let char of str.toLowerCase()) {
//     if (vowels.includes(char)) count += 1;
//   }

//   return count;
// }


//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0