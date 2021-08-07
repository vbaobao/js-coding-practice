function dynamicArray(n, queries) {
  let answer = [];
  let arr = [];
  let lastAnswer = 0;
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  for (const query of queries) {
    let num = query[0];
    let x = query[1];
    let y = query[2];
    let idx = ((x ^ lastAnswer) % n);
    if (num === 1) {
        arr[idx].push(y);
    } else if (num === 2) {
    lastAnswer = arr[idx][y % arr[idx].length];
    answer.push(lastAnswer);
    }
  }
  return answer;
}
