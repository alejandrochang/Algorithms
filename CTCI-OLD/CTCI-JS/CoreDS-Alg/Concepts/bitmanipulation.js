// Bit Manipulation Examples

/* 
Positive Integers:
  Number: 583 
  base10:     5 * 10^2 + 8 * 10^1 + 3 * 10^0

  Number: 101
  base2:      1 * 2^2 + 0 * 2^1 + 1 * 2^0

  101 + 011 -> 1000 (base 2)
  5 + 3 -> 8 (base 10)

Negative Integers:
  Negative Integers are stored in two's complement.


Ex. Base 10: 
  18 -> 00010010
 -18 -> 11101110

  Steps for converting to negative binary numberL
  1. Convert 18 to binary
  2. Invert bits
  3. Add 1

  In Javascript
  (255).toString(2); // "11111111" (radix 2, i.e. binary)

  123 -> '0 1111011'
  -123 -> '1 0000101'

*/