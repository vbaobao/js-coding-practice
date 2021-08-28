/**
 * @param {string} s
 * @return {string[]}
 */

const letterCasePermutation = function(s) {
  let collection = [];
  s= s.toLowerCase();
  // iterate through string by char
  // add up and lower case to char if char is alpahbetical
  for (const char of s) {
    if (collection.length === 0) {
      if (char.charCodeAt() >= 'a'.charCodeAt() && char.charCodeAt() <= 'z'.charCodeAt()) {
        collection.push(char.toLowerCase());
        collection.push(char.toUpperCase());
        } else {
          collection.push(char);
        }
    } else {
      let max = collection.length;
      for (let i = 0; i < max; i++) {
        if (char.charCodeAt() >= 'a'.charCodeAt() && char.charCodeAt() <= 'z'.charCodeAt()) {
          collection.push(collection[i] + char.toLowerCase());
          collection[i] = collection[i] + char.toUpperCase();
        } else {
          collection[i] = collection[i] + char;
        }
      }
    }
  }
  return collection;
};