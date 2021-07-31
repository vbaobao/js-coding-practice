/**
 * Given an array of integers nums which is sorted in ascending order,
 * and an integer target, write a function to search target in nums.
 * If target exists, then return its index. Otherwise, return -1.
 *
 * You must write an algorithm with O(log n) runtime complexity.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let search = function(nums, target) {
  let min = 0;
  let max = nums.length - 1;
  let mid;
  while (min <= max) {
    mid = min + Math.floor((max - min)/2)
    if (nums[mid] === target) return mid;
    if (target > nums[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
  return -1;
};