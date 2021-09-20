const permute = function(nums) {
  let result = [];
  
  const backtrack = (curr) => {
    if (curr === n) results.push([...nums]);
    for (let i = curr; i < n; i++) {
      let temp = nums[curr];
      nums[curr] = nums[i];
      nums[i] = temp;
      backtrack(curr + 1);
      temp = nums[curr];
      nums[curr] = nums[i];
      nums[i] = temp;
    }
  };
  
  let n = nums.length;
  results = [];
  backtrack(0);
  return results;
};
