/** Implementation of Fibonacci
Given an index in the Fibonacci sequence, return the value

Example:
 Fib sequence: 1, 1, 2. 3. 5, 6, 13, 21, 34, 55...
 Given 5
 Expect = 8

 Given 9
 Expect = 55 **/

/**
 * @param {number} index
 * @return {number}
**/

// Iterative solution
function iterFib(index) {
  let array = [1, 1];
  let sum = 1;
  if (index <= 1) {
    return sum;
  } else {
    for (let i = 2; i <= index; i++) {
      array[i] = array[i-2] + array[i-1];
      sum = array[i];
    }
  }
  return sum;
}
console.log(iterFib(9));
