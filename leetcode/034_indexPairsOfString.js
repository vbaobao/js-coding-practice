/**
 * Given a string text and an array of strings words,
 * return an array of all index pairs [i, j] so that
 * the substring text[i...j] is in words.
 *
 * Return the pairs [i, j] in sorted order (i.e.,
 * sort them by their first coordinate, and in case
 * of ties sort them by their second coordinate).
 */

/**
 * @param {string} text
 * @param {string[]} words
 * @return {number[][]}
 */
const indexPairs = function(text, words) {
  let results = [];
  
  for (const word of words) {
    for (let i = 0; i < text.length; i++) {
      let compare = text.substring(i, i + word.length);
      if (word === compare) results.push([i, i + word.length - 1]);
    }
  }
  
  results.sort((a, b) => {
    if (a[0] > b[0]) return 1;
    if (a[0] === b[0] && a[1] > b[1]) return 1;
    return -1;
  });
  
  return results;
};
