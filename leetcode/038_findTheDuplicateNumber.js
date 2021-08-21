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
  // nums.sort((a, b) => a - b);
  // for (let i = 0; i < nums.length; i++) {
  //   if (nums[i] === nums[i + 1]) return nums[i];
  // }
  // return 0;
  
  let high = nums.length - 1;
  let low = 0;
  let dup = -1;
  
  while (high >= low) {
    let count = 0;
    let mid = low + Math.floor((high - low)/2);
    for (const num of nums) {
      if (num <= mid) {
        count++;
      }
    }
    if (count > mid) {
      dup = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return dup;
};
