/**
 * @param {number[][]} points
 * @return {number}
 */

const minAreaRect = function(points) {
  // create a hash of the coordinates
  let hash = {};
  for (const coord of points) {
    if (hash[coord[0]] === undefined) hash[coord[0]] = {};
    hash[coord[0]][coord[1]] = 1;
  }

  let minArea = 0;  
  // iterate through the array of points to find diagonal and matching points
  for (const [x, y] of points) {
    for (const [x1, y1] of points) {
      let l = Math.abs(x1 - x);
      let h = Math.abs(y1 - y);
      if (l !== 0 && h !== 0 && hash[x][y1] && hash[x1][y]) minArea = minArea !== 0 ? Math.min(l * h, minArea) : l * h;
    }
  }
  return minArea;
};
