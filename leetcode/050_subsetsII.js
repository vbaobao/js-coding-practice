/**
 * @param {number[]} nums
 * @return {number[][]}
 */

const subsetsWithDup = function(nums) {
  let map = [[]];
  let set = new Set();
  set.add(JSON.stringify([]));
  for (let i = 0; i < nums.length; i++) {
    let len = map.length;
    for (let j = 0; j < len; j++) {
      let temp = [...map[j], nums[i]].sort((a, b) => a - b);
      set.add(JSON.stringify(temp));
      map = [...set.values()].map(e => JSON.parse(e));
    }
  }
  return [...set.values()].map(e => JSON.parse(e));
};
