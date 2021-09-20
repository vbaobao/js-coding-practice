const findMin = function(nums) {
  let min = 0;
  let max = nums.length - 1;
  let mid = min + Math.floor((max - min)/2);
  if (nums.length === 1 || nums[min] < nums[max]) return nums[0];
  
  while (min <= max) {
    mid = min + Math.floor((max - min)/2);
    if (nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    } else if (nums[mid] < nums[mid - 1]) {
      return nums[mid];
    } else if (nums[0] < nums[mid]) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
};
