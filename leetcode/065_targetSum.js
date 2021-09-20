const findTargetSumWays = function(nums, target) {
  let count = 0;
  
  const dfs = (index, sum) => {
    // if target === 0 and index === nums length - 1 incremenet count
    // if index === nums length but target !== 0 then return
    // if index !== nums length
    // try(index + 1, target + index val);
    // try(index + 1, target - index val);
    if (index === nums.length) {
      if (sum === target) count++;
      return;
    }
    dfs(index + 1, sum + nums[index]);
    dfs(index + 1, sum - nums[index]);
  };
  
  dfs(0, 0);
  return count;
};
