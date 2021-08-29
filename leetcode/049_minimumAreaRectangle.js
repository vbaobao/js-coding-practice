/**
 * @param {number[][]} points
 * @return {number}
 */

const minAreaRect = function(points) {
  // note: if no rectangle, return 0
  // create a hash of the coordinates
  let hash = {};
  for (const coord of points) {
    if (hash[coord[0]] === undefined) hash[coord[0]] = {};
    hash[coord[0]][coord[1]] = 1;
  }
  // var for min area
  let minArea = 0;
  
  // backtracking function called isRectangle
  const isRectangleMin = (index, x, y) => {
    let min = 0;
    // iterate to find a valid diagonal
    // need to track if diagonal x1 value is greater/less, y2 val is greater/less
    // if both greater, then remaining points will be (x, y + h), (x + l, y)
    // if both less, then remianing points will be (x, y - h), (x - l, y)
    // if x is greater, then missing vals (x + l, ?) (x, ?)
    // if y is greater then vals (?, y + h) (?, y)
    // x or y is fixed to original pos
    for (let i = index + 1; i < points.length; i++) {
      let x2 = points[i][0];
      let y2 = points[i][1];
      let x2Greater = x2 > x;
      let y2Greater = y2 > y;
      let l = x2Greater ? x2 - x : Math.abs(x - x2) * -1;
      let h = y2Greater ? y2 - y : Math.abs(y - y2) * -1;
      if (l !== 0 && h !== 0 && hash[x][y + h] && hash[x + l][y]) {
        min = min !== 0 ? Math.min(Math.abs(l * h), min) : Math.abs(l * h);
      }
    }
    return min;
  };
  
  // iterate through the array of points
  for (let i = 0; i < points.length; i++) {
    // for each point, use backtracking function to check whether there is a matching rectangle
    // if the remaining points is less than 4, then exit
    let rectangleArea = isRectangleMin(i, points[i][0], points[i][1]);
    if (rectangleArea) {
      minArea = minArea !== 0 ? Math.min(rectangleArea, minArea) : rectangleArea;
    }
  }
  return minArea;
};
