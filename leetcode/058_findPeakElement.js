const findPeakElement = (nums) => {
  // find and element that is greater than its neighbors
  // binary search through array
  // identify min, max
  if (nums.length < 2) return 0;
  let left = 0;
  let right = nums.length - 1;
  // iterate through the array by looking at halves
  // get midpoint
  // if midpoint is a peak, return peak
  // if midpoint is less than either of their side value, the greater side determines next "chunk"
  // if left is greater, then left = mid - 1
  // if right is greater, then right = mid + 1
  
  while (left <= right) {
    let mid = left + Math.floor((right - left)/2);
    if (mid - 1 < 0 && mid + 1 > nums.length - 1) {
      return mid;
    } else if ((nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) ||
      (nums[mid] > nums[mid - 1] && !nums[mid + 1]) ||
      (!nums[mid - 1] && nums[mid] > nums[mid + 1])) {
      return mid;
    } else if (nums[mid] < nums[mid - 1]) {
      right = mid - 1;
    } else if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    }
  }
};