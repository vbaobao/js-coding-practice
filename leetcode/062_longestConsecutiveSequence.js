const longestConsecutive = function(nums) {
  nums.sort((a, b) => a - b);
  let max = 0;
  let current = 0;
  let prev;
  console.log(nums);
  for (const num of nums) {
    if (prev === undefined || num > prev + 1) {
      console.log('Skipped or not defined: ', num, prev);
      if (current > max) max = current;
      prev = num;
      current = 1;
    } else if (num - 1 === prev) {
      console.log('continued');
      current++;
      prev = num;
    }
  }
  return Math.max(max, current);
};