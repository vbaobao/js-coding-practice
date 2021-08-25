/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

const rotate = function(matrix) {
  // This method first transposes across the diagonal
  // Then reverses the rows in place
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = i + 1; j < matrix[0].length; j++) {
  //     let temp = matrix[i][j];
  //     matrix[i][j] = matrix[j][i];
  //     matrix[j][i] = temp;
  //   }
  // }
  // for (let i = 0; i < matrix.length; i++) {
  //   matrix[i].reverse();
  // }

  // Windmill solution
  let n = matrix.length - 1;
  for (let i = 0; i < Math.floor((matrix.length + 1) / 2); i++) {
    for (let j = 0; j < Math.floor(matrix.length / 2); j++) {
      let temp = matrix[n - j][i];
      matrix[n - j][i] = matrix[n - i][n - j];
      matrix[n - i][n - j] = matrix[j][n - i];
      matrix[j][n - i] = matrix[i][j];
      matrix[i][j] = temp;
    }
  }
};
