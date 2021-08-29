/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsets = function(nums) {
  let subs = [[]];
  for (const num of nums) {
    let len = subs.length;
    for (let i = 0; i < len; i++) {
      subs.push([...subs[i], num]);
    }
  }
  return subs;
};
