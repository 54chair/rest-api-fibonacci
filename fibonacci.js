const fib = function fib(n) {
  const result = [0, 1];

  for (i = 2; i <= n; i++) {
    const a = BigInt(result[i - 1]);
    const b = BigInt(result[i - 2]);

    result.push(a + b);
  }
  return result[n];
};

module.exports = fib;