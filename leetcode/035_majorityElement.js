/**
 * Given an array nums of size n, return the majority element.
 *
 * The majority element is the element that appears more than
 * ⌊n / 2⌋ times. You may assume that the majority element always
 * exists in the array.
 */
/**
 * @param {number[]} nums
 * @return {number}
 */

const majorityElement = function(nums) {
  // let hash = {};
  // for (const num of nums) {
  //   if (hash[num]) {
  //     hash[num] += 1;
  //   } else {
  //     hash[num] = 1;
  //   }
  //   if (hash[num] > nums.length / 2) return num;
  // }

  // Boyer-Moore solution is linear time and constant space.
  // Though takes more time to run than a hash, it makes up for
  // in saving memory.
  let target = null;
  let count = 0;
  for (const num of nums) {
    if (count === 0) target = num;
    target === num ? count += 1 : count -= 1;
  }
  return target;
};
