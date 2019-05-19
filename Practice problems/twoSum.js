/** Implementation of Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:

Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1]. **/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 // Iterative solution
var twoSum = function(nums, target) {
  let temp = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
      temp = nums[i] + nums[j];
      if (temp === target) {
        let solution = [i, j];
        return solution;
      }
    }
  }
  return ("There are no numbers that sum to the target");
};

console.log(twoSum([1, 2, 3, 4], 7));
console.log(twoSum([1, 2, 3, 4], 10));

// Recursive solution
var recurTwoSum = function(nums, target) {
  // TODO
}

// Memoized solution
var memoTwoSum = function(nums, target, memo) {
  // TODO
}
