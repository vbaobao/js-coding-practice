/**
 * Given two strings s and t, return true if they are equal when
 * both are typed into empty text editors. '#' means a backspace character.
 *
 * Note that after backspacing an empty text, the text will continue empty.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const backspaceCompare = function(s, t) {
  let str1 = [];
  let str2 = [];
  for (const letter of s) {
    letter === '#' ? str1.pop() : str1.push(letter);
  }

  for (const letter of t) {
    letter === '#' ? str2.pop() : str2.push(letter);
  }
  
  return str1.join('') === str2.join('');
};