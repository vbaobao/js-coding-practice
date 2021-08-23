/**
 * Count the number of prime numbers less than a non-negative number, n.
 * @param {number} n
 * @return {number}
 */

const countPrimes = function(n) {
  if (n < 2) return 0;
  let primes = new Array(n);
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!primes[i]) {
      for (let j = i * i; j < n; j += i) {
        primes[j] = true;
      }
    }
  }
  
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (!primes[i]) count++;
  }
  return count;
};
