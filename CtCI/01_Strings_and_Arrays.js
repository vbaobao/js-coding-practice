const assert = (expected, actual, name) => {
  if (expected === actual) return console.log(`PASSED test: ${name}`);
  return console.log(`FAILED test: ${name}\nExpected ${expected}, but got ${actual} instead.`);
};

/* isUnique: implement an algorithm to determine if a string
 * has all unique characters.
 * Cannot use additional data structures.
 */

const isUnique = (string) => {
  string = string.toLowerCase();
  for (const [i, character] of Object.entries(string)) {
    for (const unit of string.slice(0, i) + string.slice(i + 1)) {
      if (character === unit && character !== ' ') return false;
    }
  }
  return true;
};

// assert(false, isUnique('hello'), 'hello');
// assert(true, isUnique('cat'), 'cat');
// assert(true, isUnique('i dot knbw'), 'i dot know');
// assert(true, isUnique(''), 'no string');
// Completed in 9m 30s

/* checkPermutation: given 2 strings, write a method to
 * decide if one is a permutation of the other.
 */

const checkPermutation = (str1, str2) => {
  let store = {};
  if (str1.length !== str2.length) return false;
  for (const char of str1) {
    if (store[char] === undefined) store[char] = 0;
    store[char] += 1;
  }

  for (const char of str2) {
    if (!store[char]) return false;
    store[char] -= 1;
  }
  return true;
};

// assert(true, checkPermutation('hello', 'helol'), 'hello vs helol');
// assert(false, checkPermutation('cat', 'cate'), 'cat vs cate');
// assert(false, checkPermutation('hello', 'heloo'), 'hello vs heloo');
// Completed in 12m

/* URLify: write a method to replace all spaces in a string
 * with '%20'.
 */

const URLify = (string) => {
  // iterate through string
  // push char to aray
  // if the character is a space, push '%20'
  // after loop join and return result
  let result = [];
  for (const char of string) {
    if (char === ' ') {
      result.push('%20');
    } else {
      result.push(char);
    }
  }
  return result.join('');
};

// assert('%20hello%20%20', URLify(' hello  '), ' hello  ');
// assert('%20', URLify(' '), 'single space');
// assert('what%20is%20up?', URLify('what is up?'), 'what is up?');
// Completed 9m 20s

/* palindromePermutation: given a string, write a function to
 * check if it is a permutation of a palindrome.
 * Can ignore casing and non-alphabeetical chars.
 */

const palindromePermutation = (string) => {
  // store chars in an object
  // iterate through the string and store the characters and count
  // there can only be 1 character at most that has an odd number
  // if the objects has all pairs with exception of 1 then return true
  let store = {};
  let hasOddChar = false;
  for (const char of string) {
    if (store[char] === undefined) store[char] = 0;
    store[char] += 1;
  }
  for (const char in store) {
    if (store[char]%2 !== 0 && !hasOddChar) {
      hasOddChar = true;
    } else if (store[char]%2 !== 0 && hasOddChar) {
      return false;
    }
  }
  return true;
};

// assert(true, palindromePermutation('racecarisis'), 'racecarisis');
// assert(false, palindromePermutation('whatever'), 'whatever');
// Completed 9m 45s

/* oneAway: write a function to check if 2 strings are one
 * edit away from each other. An edit may be insertion, deletion,
 * or replacement of one char.
 */

const oneAway = (str1, str2) => {
  let store1 = {};
  let store2 = {};

  if (Math.abs(str1.length - str2.length) > 1) return false;

  // Store strings in objects
  // compare string lengths
  // compare the objects
  // if insertion
  // the strings would match but length would be 1 difference
  // if deletion
  // the strings would match if length is 1 difference 
  // if hasReplacement
  // the strings would match length but has 1 non-matching char
  for (const char of str1) {
    if(store1[char] === undefined) store1[char] = 0;
    store1[char] += 1;
  }

  for (const char of str2) {
    if(store2[char] === undefined) store2[char] = 0;
    store2[char] += 1;
  }

  if (str1.length === str2.length) {
    for (const key in store1) {
      if (store1[key] !== store2[key]) return false;
    }
  } else {
    let hasOneDiff = false;
    for (const key in store1) {
      if (store1[key] !== store2[key] && !hasOneDiff) {
        hasOneDiff = true;
      } else if (store1[key] !== store2[key] && hasOneDiff) {
        return false;
      }
    }
  }
  return true;
};

// assert(true, oneAway('cate', 'cat'), 'cat, cate');
// assert(true, oneAway('cate', 'catea'), 'cat, catea');
// assert(true, oneAway('ca', 'cat'), 'ca, cate');
// assert(false, oneAway('caate', 'cat'), 'caate, cate');
// assert(false, oneAway('caate', 'catu'), 'caate, catu');
// Completed 13m 30s

/* stringCompression: implement a method to perform basic string
 * compression using the counts of repeated characters.
 * e.g. 'aabcccaa' -> 'a2bc3a2'
 */

const stringCompression = (string) => {
  // store string in an array of array
  // iterate through string to push char conditionally
  // push an array with the char and count
  // if next char is not the same and count is 1, then push char to result
  // if next char is not the same and count is not 1, then join array and push to result
  // return result
  let result = [];
  let currentChar = '';
  for (const char of string) {
    if (currentChar.length === 0 || currentChar !== char) {
      currentChar = char;
      result.push([char, 1]);
    } else {
      result[result.length -1][1] += 1;
    }
  }
  for (let i = 0; i < result.length; i++) {
    if (result[i][1] === 1) {
      result[i] = result[i][0];
    } else {
      result[i] = result[i].join('');
    }
  }
  return result.join('');
};

// assert('a2bc3a2', stringCompression('aabcccaa'), 'aabcccaa -> a2bc3a2');
// Over 15 minutes. Distracted by YT video. Maybe took 17 minutes or more.

/* rotateMatrix: given an image represented by n x n matrix, and
 * each pixel of the image is represented by an integer, write a
 * method to rotate the imge by 90 degrees. Do it in place.
 */

const rotateMatrix = (matrix) => {
  const getRow = (row, col) => col;
  const getCol = (row, col) => matrix.length - 1 - row;
  let maxCols = matrix.length - 1;
  const maxRows = matrix.length;

  for (let i = 0; i < maxRows/2; i++) {
    let depth = 0;
    let temp;
    for (let j = 0 + depth; j < maxCols - depth; j++) {
      let newRow = getRow(i, j);
      let newCol = getCol(i, j);
      let movedVal = matrix[i][j];
      for (let sides = 0; sides < 4; sides++) {
        temp = matrix[newRow][newCol];
        matrix[newRow][newCol] = movedVal;
        movedVal = temp;
        oldRow = newRow;
        oldCol = newCol;
        newRow = getRow(oldRow, oldCol);
        newCol = getCol(oldRow, oldCol);
      }
      depth++;
    }
  }

  return matrix;
};

// let matrix = new Array(4);
// let count = 0;
// for (let i = 0; i < matrix.length; i++ ) {
//   matrix[i] = [];
//   matrix[i].push(++count);
//   matrix[i].push(++count);
//   matrix[i].push(++count);
//   matrix[i].push(++count);
// }
// console.log(matrix);
// console.log(rotateMatrix(matrix));

// Stopped time at 8 minutes. Think this will need extra time.
// Could not do it in place.

/* zeroMatrix: write an algo such that if an element m x n is 0.
 * its entire row and column are set to 0.
 */

const zeroMatrix = (matrix) => {
  // store rows
  // store cols
  // helper function to convert row to 0
  // helper function to convert cols to 0

  // iterate through matrix to store 0s

  let rows = [];
  let cols = [];

  const convertRows = (row) => {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[row][col] = 0;
    }
  };
  const convertCols = (col) => {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][col] = 0;
    }
  };

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        rows.push(row);
        cols.push(col);
      }
    }
  }

  for (const row of rows) convertRows(row);
  for (const col of cols) convertCols(col);

  return matrix;
};

let matrix = [
  [1,2,3,5,9,0],
  [3,3,3,3,3,3],
  [0,2,4,6,0,1],
  [1,1,1,1,1,1]
];

zeroMatrix(matrix);
console.log(matrix);
// Completed 9m 34s

/* stringRotation: assume you have a method isSubstring() that
 * checks if a word is a substring of another. Given 2 strings,
 * s1 and s2, check if s2 is a rotation of s1 using only one
 * call to isSubstring().
 */

const stringRotation = (s1, s2) => {
  return isSubstring(s1.toLowerCase().split('').sort().join(''), s2.toLowerCase().split('').sort().join(''));
};
// Completed 3m