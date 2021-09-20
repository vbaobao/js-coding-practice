var combine = function(n, k) {
  // 1, 2, 3, 4, ... n
  // combo = [] with length of k
  let results = [];
  let combo = [];
  let backtrack = (curr = 1) => {
    if (combo.length === k) {
      results.push([...combo]);
      return;
    }
    for (let i = curr; i <= n; i++) {
      combo.push(i);
      backtrack(i + 1);
      combo.pop();
    }
  };
  backtrack();
  return results;
};