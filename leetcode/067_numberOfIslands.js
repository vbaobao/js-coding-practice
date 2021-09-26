const numIslands = function(grid) {
  let count = 0;
  let visited = grid.map((row) => new Array(row.length).fill(0));
  
  const traverseIsland = (row, col) => {
    if (visited[row][col]) return;
    visited[row][col] = 1;
    if (grid[row][col] === "0") return;
    if (row - 1 >= 0) traverseIsland(row - 1, col);
    if (row + 1 < grid.length) traverseIsland(row + 1, col);
    if (col - 1 >= 0) traverseIsland(row, col - 1);
    if (col + 1 < grid[0].length) traverseIsland(row, col + 1);
  };
  
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (visited[row][col]) continue;
      if (visited[row][col] === 0 && grid[row][col] === "1") {
        count++;
        traverseIsland(row, col);
      }
    }
  }
  return count;
};