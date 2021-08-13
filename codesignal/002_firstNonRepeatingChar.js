function firstNotRepeatingCharacter(s) {
  let hash = {};
  for (const letter of s) {
      if (!hash[letter]) hash[letter] = 0;
      hash[letter] += 1;
  }
  
  for (const letter of s) {
      if (hash[letter] < 2) return letter; 
  }
  return '_';
}
