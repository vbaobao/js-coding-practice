/*
 * Given an integer array nums, handle multiple queries of the following type:
 *
 * Calculate the sum of the elements of nums between indices left and right
 * inclusive where left <= right.
 * Implement the NumArray class:
 *  - NumArray(int[] nums) Initializes the object with the integer array nums.
 *  - int sumRange(int left, int right) Returns the sum of the elements of
 *    nums between indices left and right inclusive
 *    (i.e. nums[left] + nums[left + 1] + ... + nums[right]).
 * 
 * To solve this we used some math. The NumArray is actually an array of each
 * accumulated sum. To find the range we use subtraction to find the
 * difference between the two positions.
 */

let NumArray = function(nums) {
  this.nums = nums.reduce((array, num) => {
    if (!array.length) {
      array.push(num);
    } else {
      array.push(array[array.length - 1] + num);
    }
    return array;
  },[]);
};

NumArray.prototype.sumRange = function(left, right) {
  let temp = left ? this.nums[left - 1] : 0;
  return this.nums[right] - temp;
};