/*
 * Given an integer n, return an array ans of length n + 1 such that for
 * each i (0 <= i <= n), ans[i] is the number of 1's in the binary
 * representation of i.
 * 
 * To solve this, convert the number to binary, and count the 1's by
 * removing 0s from the string. Length is the sum of the remaining 1s.
 */

let countBits = function(n) {
  return Array(n + 1).fill().map((val,i) => 
      i.toString(2).replace(/0/g, '').length 
  )
};