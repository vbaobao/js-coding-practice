/**
 * Given an array of integers nums containing n + 1 integers where
 * each integer is in the range [1, n] inclusive.
 *
 * There is only one repeated number in nums, return this repeated
 * number.
 *
 * You must solve the problem without modifying the array nums and
 * uses only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */

const findDuplicate = function(nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }
  return 0;
};
