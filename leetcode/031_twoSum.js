/**
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add
 * up to target.
 *
 * You may assume that each input would have exactly one
 * solution, and you may not use the same element twice.
 *
 * You can return the answer in any order.
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
  // Brute force
  // if (!nums.length) return [];
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length; j++) {
  //     if (i !== j && nums[i] + nums[j] === target ) return [i, j];
  //   }
  // }
  // return [];

  //Using a hash map
  // if (!nums.length) return [];
  // let map = {};
  // for (let i = 0; i < nums.length; i++) {
  //   let another = target - nums[i];
  //   if (another in map) return [map[another], i];  
  //   map[nums[i]] = i;
  // }
  // return [];

  // improving the hash map method more (runtime is about the same)
  let hash = {};
  for (const [i, val] of Object.entries(nums)) {
    if (hash[target - val]) {
      return [hash[target - val], i];
    } else {
      hash[val] = i;
    }
  }
};
