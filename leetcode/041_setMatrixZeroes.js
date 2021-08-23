/**
 * Given an m x n integer matrix matrix, if an element is 0,
 * set its entire row and column to 0's, and return the matrix.
 *
 * You must do it in place.
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const setZeroes = function(matrix) {
  const convert = (row, col) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[0].length; j++) {
        if (row === i || col === j) matrix[i][j] = matrix[i][j].toString();
      }
    }
  }
  
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (Number(matrix[row][col]) === 0) convert(row, col);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (typeof matrix[row][col] === 'string') matrix[row][col] = 0;
    }
  }
};