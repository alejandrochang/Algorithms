# Must Know Concepts for Interviews

1. Bit Manipulation
JS uses 32 bits Bitwise Operands. (Bitwise AND, Bitwise OR and Bitwise XOR)

- Bitwise AND: When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.
Ex:
0 & 0 -> 0
1 & 0 -> 0
0 & 1 -> 0
1 & 1 -> 1

- Bitwise OR: When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits is 1.
Ex.
0 | 0	-> 0
0 | 1	-> 1 
1 | 0	-> 1
1 | 1	-> 1

- Bitwise XOR: When a bitwise XOR is performed on bits, it returns 1 if the bits are different.
Ex.
0 ^ 0	-> 0
0 ^ 1	-> 1 
1 ^ 0	-> 1
1 ^ 1	-> 0 


2. Memory (Stack vs. Heap)


3. Recursion

4. Dynamic Programming
DP is a technique used for solving complex operations by dividing them into various smaller problems, and solving each of them only once. Dynamic programming is a technique for solving problems of recursive nature, iteratively and is applicable when the computations of the subproblems overlap.

Memoization is a term describing an optimization technique where you cache previously computed results, and return the cached result when the same computation is needed again. Can easily overlap with caching systems. 
 
Tabulation is solving the problem bottom up, while memoization is solving the problem top down. i.e., by solving all related sub-problems first, typically by filling up an n-dimensional table. Based on the results in the table.

5. Big O Time & Space Complexity