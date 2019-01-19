const reverseInt = require('./reverseInt');

test('Reverse Integer function exists', () => {
  expect(reverseInt).toBeDefined();
});

test('ReverseInt reverses positive numbers', () => {
  expect(reverseInt(15)).toEqual(51);
});

test('ReverseInt reverses numbers with 0 correctly', () => {
  expect(reverseInt(500)).toEqual(5);
});

test('Reverse Integers reverses negative numbers', () => {
  expect(reverseInt(-90)).toEqual(-9);
});

test('Reverse Integers reverses negative numbers', () => {
  expect(reverseInt(-15)).toEqual(-51);
});
