/**
 * Given an integer array nums of length n where all the integers of nums
 * are in the range [1, n] and each integer appears once or twice, return
 * an array of all the integers that appears twice.

You must write an algorithm that runs in O(n) time and uses only constant
extra space.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

const findDuplicates = function(nums) {
  // let result = [];
  // nums.sort((a, b) => {
  //   if (a - b > 0) return 1;
  //   return -1;
  // });
  // for (let i = 0 ; i < nums.length - 1; i++) {
  //   if (nums[i] === nums[i + 1]) result.push(nums[i]);
  // }
  // return result;

  let result = [];
  for (let i = 0 ; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) result.push(Math.abs(nums[i]));
    nums[index] *= -1;
  }
  return result;
};