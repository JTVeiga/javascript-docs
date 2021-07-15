# The Big 'O' Notation

- `Big Oh` denotes "fewer than or the same as" <expression> iterations.

- O(1): Constant
- O(log(n)): Logarithmic
- O(n): Linear
- O(n\*log(n)): Quasilinear
- O(n^2): Quadratic
- O(2^n): Exponential

## Identifying the complexity

- No iteration or recursion
  - O(1)
- Iterating a collection with a simple for loop
  - O(n)
- Iterating two different collections with separate for loops
  - O(n+m)
- Iterating two nested for loops over same collection
  - O(n^2)
- Iterating two nested for loops over different collections
  - O(n\*m)
- Searching a sorted array. Numbers of times a number can be divided by 2 (divides the working area in half with each iteration). Dividing the working area in half is logarithmic.
  - O(log(n))
- Sorting?
  - O(n\*log(n))
