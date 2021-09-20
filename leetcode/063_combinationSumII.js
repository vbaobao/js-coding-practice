const combinationSum2 = function(candidates, target) {
  const set = new Set();
  candidates.sort((a, b) => a - b);
  
  const backtrack = (index, sums, target) => {
    if (target < 0) return;
    if (target === 0) set.add(JSON.stringify([...sums].sort((a, b) => a - b)));
    
    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] === candidates[i - 1]) continue;
      sums.push(candidates[i]);
      backtrack(i + 1, sums, target - candidates[i]);
      sums.pop();
    }
  };
  
  backtrack(0, [], target);
  
  return [...set.values()].map((e) => JSON.parse(e));
};
