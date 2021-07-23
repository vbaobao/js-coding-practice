/*
 * You are climbing a staircase. It takes n steps to reach the top.
 * 
 * Each time you can either climb 1 or 2 steps. In how many
 * distinct ways can you climb to the top?
 */

let climbStairs = function(n) {  
  let memo = [];
  const recurse = (n, memo) => {
      if (n === 0) {
      return 1;
      } else if ( n < 0) {
          return 0;
      } else if (memo[n] > 0) {
          return memo[n];
      }
      memo[n] = recurse(n - 1, memo) + recurse(n - 2, memo);
      return memo[n];
  };
  return recurse(n, memo);
};