const palindrome = require('./palindrome');

test('Require palindrome function to exists', () => {
  expect(palindrome).toBeDefined();
});

test('Checking palindrom of racecar ===  true', () => {
  expect(palindrome('racecar')).toEqual(true);
});

test("Checking palindrom of abba ===  true", () => {
  expect(palindrome("abcdefg")).toEqual(false);
});

test("Checking palindrom of racecar ===  racecar", () => {
  expect(palindrome("abba")).toEqual(true);
});

test("Checking palindrom of racecar ===  racecar", () => {
  expect(palindrome("habss")).toEqual(false);
});

test("Checking palindrom of racecar ===  racecar", () => {
  expect(palindrome("habas")).toEqual(false);
});

