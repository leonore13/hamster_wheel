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
console.log("Iterative fib with 1: ", iterFib(1));
console.log("Iterative fib with 5: ", iterFib(5));
console.log("Iterative fib with 9: ", iterFib(9));

//  Recursive solution
function recurFib(index) {
  if (index <= 1) {
    return 1;
  } else {
    return recurFib(index - 1) + recurFib(index - 2);
  }
}
console.log("Recursive fib with 1: ", recurFib(1));
console.log("Recursive fib with 5: ", recurFib(5));
console.log("Recursive fib with 9: ", recurFib(9));

// Dynamic program solution
function dynFib(index, fibSeq) {
  if (index <= 1) {
    return 1;
  } else {
    fibSeq[index] = recurFib(index - 1, fibSeq) + recurFib(index - 2, fibSeq);
    return fibSeq[index];
  }
}
console.log("Dynamic fib with 1: ", dynFib(1, []));
console.log("Dynamic fib with 5: ", dynFib(5, []));
console.log("Dynamic fib with 9: ", dynFib(9, []));
