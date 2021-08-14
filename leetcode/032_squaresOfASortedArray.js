/**
 * Given an integer array nums sorted in non-decreasing order,
 * return an array of the squares of each number sorted in
 * non-decreasing order.
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */

let sortedSquares = function(nums) {
  let result = [];
  for (let num of nums) {
    result.push(num * num);
  }
  
  result.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  
  return result;
};
