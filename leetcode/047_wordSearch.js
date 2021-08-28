/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const exist = function(board, word) {
  let canRun = false;
  if (word.length === 0) return true;
  
  // iterate through the cells as possible starting points
  // for each value recursively test possible routes, and backtracking if route is not viable.
  // backtracking function takes row, col, remaining chars
  // checks if current matches the char, pop char if match
  // if yes and char is the last char then canRun = true
  // if yes and not the last char then
  // create list of positions
  // recursively use backtrack function through the list of positions
  // if no
  // return
  
  const getPos = (row, col) => {
    let pos = [];
    if (row - 1 >= 0) pos.push([row - 1, col]);
    if (row + 1 < board.length) pos.push([row + 1, col]);
    if (col - 1 >= 0) pos.push([row, col - 1]);
    if (col + 1 < board[0].length) pos.push([row, col + 1]);
    return pos;
  };
  
  const checkRoute = (row, col, string) => {
    let lastindex = string.length - 1;
    let char = string[lastindex];
    if (board[row][col] !== char || !board[row][col]) return false;
    string = string.substring(0, lastindex);
    if (string.length === 0) return true;
    board[row][col] = false;
    let pos = getPos(row, col);
    for (const coord of pos) {
      if (checkRoute(coord[0], coord[1], string)) return true;
    }
    board[row][col] = char;
  };
  
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (checkRoute(row, col, word)) return true;
    }
  }
  
  return false;
};