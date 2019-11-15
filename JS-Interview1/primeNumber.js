// Question: How would you verify a prime number?

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }

  return true;
}

// I: number
// O: bool
// Time:
// Space:

console.log(isPrime(3)); // true
console.log(isPrime(13)); // true
console.log(isPrime(5)); // true
console.log(isPrime(6)); // false
console.log(isPrime(2)); // true
console.log(isPrime(100)); // false

// A prime number is to have 2 positive divisors, 1 and itself