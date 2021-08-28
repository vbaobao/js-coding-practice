/**
 * Find all valid combinations of k numbers that sum up to n such that
 * the following conditions are true:
 *
 * Only numbers 1 through 9 are used.
 * Each number is used at most once.
 * Return a list of all possible valid combinations. The list
 * must not contain the same combination twice, and the combinations
 * may be returned in any order.
 *
* @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

const combinationSum3 = function(k, n) {
  let store = [];
  
  const findSum = (remain, index, combo) => {
    remain = remain - index;
    combo.push(index);
    if (remain === 0 && combo.length === k) {
      store.push(combo);
    } else if (remain > 0 && combo.length < k) {
      for (let i = index + 1; i < 10; i++) {
        findSum(remain, i, [...combo]);
      }
    }
  };
  
  for (let i = 1; i < 10; i++) {
    findSum(n, i, []);
  }
  
  return store;
};