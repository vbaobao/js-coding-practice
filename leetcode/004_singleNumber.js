/*
 * Given a non-empty array of integers nums, every element appears twice
 * except for one. Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use
 * only constant extra space.
 */

let singleNumber = function(nums) {
  return 2 * [...new Set(nums)].reduce((sum, num) => sum += num,0) - nums.reduce((sum, num) => sum += num,0);
};