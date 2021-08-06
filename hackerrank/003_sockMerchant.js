function sockMerchant(n, ar) {
  let socks = {};
  let numPairs = 0;
  for (const sock of ar) {
    if (!socks[sock]) socks[sock] = 0;
    socks[sock]++;
  }
  
  for (const sock in socks) {
    numPairs += Math.floor(socks[sock]/2);
  }
  return numPairs;
}
