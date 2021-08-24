/**
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * @param {number[][]} matrix
 * @return {number[]}
 */

const spiralOrder = function(matrix) {
  const seen = ([row, col]) => {
    matrix[row][col] = 101;
  };
  
  const right = ([row, col]) => {
    let i = col;
    for (i; i < matrix[0].length; i++) {
      if (matrix[row][i] !== 101) {
        results.push(matrix[row][i]);
        matrix[row][i] = 101;
        remaining--;
      } else {
        break;
      }
    }
    return [row + 1, i - 1];
  };
  
  const down = ([row, col]) => {
    let i = row;
    for (i; i < matrix.length; i++) {
      if (matrix[i][col] !== 101) {
        results.push(matrix[i][col]);
        matrix[i][col] = 101;
        remaining--;
      } else {
        break;
      }
    }
    return [i - 1, col - 1];
  };
  
  const left = ([row, col]) => {
    let i = col;
    for (i; i >=0; i--) {
      if (matrix[row][i] !== 101) {
        results.push(matrix[row][i]);
        matrix[row][i] = 101;
        remaining--;
      } else {
        break;
      }
    }
    return [row - 1, i + 1];
  };
  
  const up = ([row, col]) => {
    let i = row;
    for (i; i >= 0; i--) {
      if (matrix[i][col] !== 101) {
        results.push(matrix[i][col]);
        matrix[i][col] = 101;
        remaining--;
      } else {
        break;
      }
    }
    return [i + 1, col + 1];
  };
  
  let results = [];
  let position = [0, 0];
  let remaining = matrix.length * matrix[0].length;
  let dir = [right, down, left, up];
  let dirIn = 0;
  
  while (remaining > 0) {
    position = dir[dirIn](position);
    (dirIn === 3) ? dirIn = 0 : dirIn++;
  }
  return results;
};