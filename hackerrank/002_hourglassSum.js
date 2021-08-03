function hourglassSum(arr) {
  let maxSum = null;
  const addIndices = (i, j) => {
    if (arr[i + 2][j + 2] === null) return 0;
    return arr[i][j] + arr[i][j + 1] + arr[i][j + 2] + arr[i + 1][j + 1] + arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];
  };
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      let hourglass = addIndices(i, j);
      if (maxSum === null || hourglass > maxSum) maxSum = hourglass;
    }
  }
  return maxSum;
}