/*
 * Given an array nums of n integers where nums[i] is in the range [1, n],
 * return an array of all the integers in the range [1, n] that do not
 * appear in nums.
 * 
 * o: array of missing ints
 * i: array of ints from 1 -> n
 * c: O(n) runtime, O(1) space (Not sure how to do space since returning an array)
 * e: no nums
 * 
 * Iterate through the array and when a number is visited turn it into a negative
 * to signify it was seen. Ones that remain positive are disappeared numbers.
 */

let findDisappearedNumbers = function(nums) {
  for (const num of nums) {
    nums[Math.abs(num) - 1] = Math.abs(nums[Math.abs(num) - 1]) * -1;
  }

  return nums.reduce((array, num, index) => {
    if (num > 0) array.push(index + 1);
    return array;
  }, []);
};
