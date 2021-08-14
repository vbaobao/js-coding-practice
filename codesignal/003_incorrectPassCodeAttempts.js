function incorrectPasscodeAttempts(passcode, attempts) {
  let fails = 0;
  for (const attempt of attempts) {
    attempt !== passcode ? fails++ : fails = 0;
    if (fails >= 10) return true;
  }
  return false;
}
