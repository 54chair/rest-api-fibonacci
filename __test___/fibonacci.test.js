const fib = require("../fibonacci");

describe('The N-th fibonacci number', () => {
  test('The 1st fibonacci number', () => {
    expect(fib(1)).toBe(1n);
  });

  test('The 10th fibonacci number', () => {
    expect(fib(10)).toBe(55n);
  });

  test('The 100th fibonacci number', () => {
    expect(fib(100)).toBe(354224848179261915075n);
  });
});