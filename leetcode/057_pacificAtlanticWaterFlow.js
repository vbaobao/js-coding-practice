const pacificAtlantic = function(heights) {
  // BFS which uses a queue
  // search for all that is Pacific
  // Search for all that is Atlantic
  const pacific = heights.map(e => new Array(e.length));
  const atlantic = heights.map(e => new Array(e.length));
  const results = [];
  
  // check pacific
  for (let col = 0; col < heights[0].length; col++) {
    explore(0, col, heights, pacific);
  }
  for (let row = 0; row < heights.length; row++) {
    explore(row, 0, heights, pacific);
  }
    
  //check atlantic
  for (let col = 0; col < heights[0].length; col++) {
    explore(heights.length - 1, col, heights, atlantic);
  }
  for (let row = 0; row < heights.length; row++) {
    explore(row, heights[0].length - 1, heights, atlantic);
  }

  //check crossover
  for (let row = 0; row < pacific.length; row ++) {
    for (let col = 0; col < pacific[0].length; col++) {
      if (pacific[row][col] && atlantic[row][col]) results.push([row, col]);
    }
  }
  return results;
};

const explore = (row, col, topo, matrix) => {
  matrix[row][col] = true;
  if (row - 1 >= 0 && !matrix[row - 1][col] && topo[row][col] <= topo[row - 1][col]) explore(row - 1, col, topo, matrix);
  if (row + 1 < topo.length && !matrix[row + 1][col] && topo[row][col] <= topo[row + 1][col]) explore(row + 1, col, topo, matrix);
  if (col - 1 >= 0 && !matrix[row][col - 1] && topo[row][col] <= topo[row][col - 1]) explore(row, col - 1, topo, matrix);
  if (col + 1 < topo[0].length && !matrix[row][col + 1] && topo[row][col] <= topo[row][col + 1]) explore(row, col + 1, topo, matrix);
};
