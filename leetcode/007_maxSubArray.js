/*
 * Given an integer array nums, find the contiguous subarray
 * (containing at least one number) which has the largest
 * sum and return its sum.
 *
 * A subarray is a contiguous part of an array.
 */

let maxSubArray = function(nums) {
  let largestSum = null;
  
  for (let i = 0; i < nums.length; i++) {
    if (largestSum === null || nums[i] > largestSum) largestSum = nums[i];
    let subSum = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (subSum + nums[j] > largestSum) largestSum = subSum + nums[j];
      subSum += nums[j];
    }
  }
  return largestSum;
};