const permuteUnique = function(nums) {
  let set = new Set();
  let len = nums.length;
  
  let backtrack = (curr = 0) => {
    if (curr === len) {
      set.add(JSON.stringify(nums));
      return;
    }
    for (let i = curr; i < len; i++) {
      let temp = nums[curr];
      nums[curr] = nums[i];
      nums[i] = temp;
      backtrack(curr + 1);
      temp = nums[curr];
      nums[curr] = nums[i];
      nums[i] = temp;
    }
  };
  
  backtrack();
  return [...set.values()].map((e) => JSON.parse(e));
};
