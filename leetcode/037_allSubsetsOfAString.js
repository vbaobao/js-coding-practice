const stringSubsets = function(string) {
  const getHash = (string) => {
    return string.split('').reduce((acc, curr) => {
      if (Object.keys(acc).length === 0) acc.word = string;
      if (!acc[curr]) acc[curr] = 0;
      acc[curr] += 1;
      return acc;
    }, {});
  };
  
  const compareHash = (word, subset) => {
    for (const char in subset) {
      if (char !== 'word' && subset[char] > (word[char] || 0)) return false;
    }
    return true;
  };
  
  
  let wordBank = words1.map((word) => getHash(word));
  let subsets = words2.map((word) => getHash(word));
  
  let subsetBank = {};
  for (const hash of subsets) {
    for (const char in hash) {
      if (char !== 'word' && (!subsetBank[char] || subsetBank[char] < hash[char])) subsetBank[char] = hash[char];
    }
  }
    
  let result = [];
  
  for (const word of wordBank) {
    let isUniversal = true;
    for (const char in subsetBank) {
      if (subsetBank[char] > (word[char] || 0)) isUniversal = false;
    }
    if (isUniversal) result.push(word.word);
  }
  
  return result;
};
