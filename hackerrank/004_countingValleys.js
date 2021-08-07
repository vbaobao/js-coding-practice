function countingValleys(steps, path) {
  let depth = 0;
  let valleys = 0;
  const doStep = (step) => step === 'U' ? 1 : -1;
  for (const step of path) {
    if (depth < 0 && depth + doStep(step) === 0) valleys++;
    depth += doStep(step);
  }
  return valleys;
}