/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isSubsequence = function(s, t) {
  let sub = 0;
  if (s.length === 0) return true;
  for (const char of t) {
    if (char === s[sub]) sub++;
    if (sub === s.length) return true;
  }
  return false;
};