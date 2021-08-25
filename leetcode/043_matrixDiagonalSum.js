/**
 * Given a square matrix mat, return the sum of the matrix diagonals.
 *
 * Only include the sum of all the elements on the primary diagonal
 * and all the elements on the secondary diagonal that are not part
 * of the primary diagonal.
 *
 * @param {number[][]} mat
 * @return {number}
 */

const diagonalSum = function(mat) {
  let end = mat.length - 1;
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    if (i !== end - i) {
      sum += mat[i][end - i];
    }
    sum += mat[i][i];
  }
  return sum;
};
