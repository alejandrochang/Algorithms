const sum = require('./sum');

test('properly adds two numbers', () => {
  expect(sum(1, 2)).toBe(3);
  expect(sum(2, 2)).toBe(4);
  expect(sum(6, 4)).toBe(10);
})