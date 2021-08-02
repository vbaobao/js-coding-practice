/**
 * Given a characters array letters that is sorted in non-decreasing
 * order and a character target, return the smallest character in
 * the array that is larger than target.
 *
 * Note that the letters wrap around.
 */

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */

let nextGreatestLetter = function(letters, target) {
  let min = 0;
  let max = letters.length - 1;
  let mid;
  while (min <= max) {
    mid = min + Math.floor((max - min)/2);
    if (target < letters[mid] && target >= letters[mid - 1]) {
        return letters[mid];
    } else if (target >= letters[mid]) {
        min = mid + 1;
    } else {
        max = mid - 1;
    }
  }
  return letters[0];
};