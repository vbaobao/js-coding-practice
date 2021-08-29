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
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      let x = points[i][0];
      let y = points[i][1];
      let x1 = points[j][0];
      let y1 = points[j][1];
      let l = Math.abs(x - x1);
      let h = Math.abs(y - y1);
      if (l !== 0 && h !== 0 && hash[x][y1] && hash[x1][y]) minArea = minArea !== 0 ? Math.min(l * h, minArea) : l * h;
    }
  }
  return minArea;
};
