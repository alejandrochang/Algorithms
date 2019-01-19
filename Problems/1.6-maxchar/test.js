const maxchar = require('./maxchar');

test("Requires a function be called maxchar", () => {
  expect(maxchar).toBeDefined();
})

test("String abcccccccd should equal c", () => {
  expect(maxchar("abcccccccd")).toEqual("c");
});

test("String apple 1231111 should equal 1", () => {
  expect(maxchar("apple 1231111")).toEqual("1");
});

