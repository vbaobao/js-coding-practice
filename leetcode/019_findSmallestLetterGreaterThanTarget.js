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
  for (const letter of letters) {
    if (letter > target) return letter;
  }
  return letters[0];
};