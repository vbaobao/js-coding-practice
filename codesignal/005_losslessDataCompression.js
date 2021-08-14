function losslessDataCompression(inputString, width) {
  let store = '';
  let result = '';
  let window;
  let startIndex;

  // if letter does not exist in window
  // and if store is empty
  // append letter to result
  // append letter to window, check window
  // and if store is not empty
  // append (windowStartIndex + store.indexOf(window), length of store) to result
  // append letter to result
  // store = '';
  // append to window, check window
  // if letter does exist in the window
  // and if window contains the store w/ letter aka window.indexOf(store + letter) is true
  // then add letter to store
  // add letter to window (check window)
  // if store + letter is not in window
  // append (windowStartIndex + store.indexOf(window), length of store)
  // store = letter
  // append to window (check window)

  for (const [index, letter] of Object.entries(inputString)) {
    if (!store.length) {
      startIndex = index - width < 0 ? 0 : index - width;
      window = inputString.slice(startIndex, index);
    }
    if (window.indexOf(letter) < 0) {
      if (!store.length) {
        result += letter;
      } else {
        result += `(${startIndex + window.indexOf(store)},${store.length})`;
        result += letter;
        store = '';
      }
    } else {
      if (window.indexOf(store + letter) >= 0) {
        store += letter;
      } else {
        result += `(${startIndex + window.indexOf(store)},${store.length})`;
        startIndex = index - width < 0 ? 0 : index - width;
        window = inputString.slice(startIndex, index);

        if (window.indexOf(letter) < 0) {
          result += letter;
          store = '';
        } else {
          store = letter;
        }
      }
    }
  }
  if (store.length) result += `(${startIndex + window.indexOf(store)},${store.length})`;
  return result;
}
