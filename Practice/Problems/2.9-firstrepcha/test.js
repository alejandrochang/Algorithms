const firstRepeatingCharacter = require("./firstrepchar");

test("Expect function vowels to be defined", () => {
  expect(firstRepeatingCharacter).toBeDefined();
});

test("expect dbcaba ", () => {
  expect(vowels(firstRepeatingCharacter("dbcaba"))).toEqual("b");
});

