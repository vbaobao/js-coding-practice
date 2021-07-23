/*
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Follow up: Could you implement a solution using only O(1) extra space
 * complexity and O(n) runtime complexity?
 */

let missingNumber = function(nums) {
  let expected = nums.length * (nums.length + 1)/2;
  let sum = 0;
  for (const num of nums) {
      sum += num;
  }
  return expected - sum;
};