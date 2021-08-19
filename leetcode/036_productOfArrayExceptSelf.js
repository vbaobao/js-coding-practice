/**
 * Given an integer array nums, return an array answer such that answer[i]
 * is equal to the product of all the elements of nums except nums[i].
 *
 * The product of any prefix or suffix of nums is guaranteed to fit in a
 * 32-bit integer.
 *
 * You must write an algorithm that runs in O(n) time and without using the
 * division operation.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function(nums) {
  // Split into two arrays and multiply the products of the left
  // and right arrays
  let right = new Array(nums.length);
  let left = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    i === 0 ? left[i] = nums[i] : left[i] = nums[i] * left[i - 1];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    i === nums.length - 1 ? right[i] = nums[i] : right[i] = nums[i] * right[i + 1];
  }

  let results = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    if ( i === 0) {
      results[i] = right[i + 1];
    } else if (i === nums.length - 1) {
      results[i] = left[i - 1];
    } else {
      results[i] = left[i - 1] * right[i + 1];
    }
  }
  return results;
};
