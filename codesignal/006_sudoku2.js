function isColSudoku (n, grid) {
  for (let col = 0; col < n; col++) {
      let hash = {};
      for (let row = 0; row < n; row++) {
          if (grid[row][col] !== '.' && hash[grid[row][col]]) return false;
          hash[grid[row][col]] = 1;
      }
  }
  return true;
};

function isRowSudoku (n, grid) {
  for (let row = 0; row < n; row++) {
      let hash = {};
      for (let col = 0; col < n; col++) {
          if (grid[row][col] !== '.' && hash[grid[row][col]]) return false;
          hash[grid[row][col]] = 1;
      }
  }
  return true;
};

function isSubGridSudoku (grid) {
  for (let row = 0; row < grid.length; row += 3) {
      for (let col = 0; col < grid.length; col += 3) {
          let row1 = grid[row].slice(col, col + 3);
          let row2 = grid[row + 1].slice(col, col + 3);
          let row3 = grid[row + 2].slice(col, col + 3);
          let regexp = /[.]+/g;
          let slice = [...row1, ...row2, ...row3].join('').replaceAll(regexp, '');
          if ([...new Set(slice)].length !== slice.length) return false;
      }
  }
  return true;
};

function sudoku2(grid) {
  let n = grid.length;
  console.log(isColSudoku(n, grid));
  console.log(isRowSudoku(n, grid));
  console.log(isSubGridSudoku(grid));
  return isColSudoku(n, grid) && isRowSudoku(n, grid) && isSubGridSudoku(grid);
}