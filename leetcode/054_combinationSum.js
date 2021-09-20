const combinationSum = function(candidates, target) {
  let len = candidates.length;
  let set = new Set();
  
  const backtrack = (remain, combo) => {
    if (remain === 0) {
      set.add(JSON.stringify([...combo].sort((a, b) => a - b)));
      return;
    } else if (remain > 0) {
      for (let i = 0; i < len; i++) {
        combo.push(candidates[i]);
        backtrack(remain - candidates[i], combo);
        combo.pop();
      }
    }
    return;
  };
  
  backtrack(target, []);
  return [...set.values()].map(e => JSON.parse(e));
};
