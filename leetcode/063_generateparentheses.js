const generateParenthesis = function(n) {
  const results = [];
  const isBalanced = (string) => {
    const stack = [];
    const parens = { '(': ')' };

    for (const char of string) {
      if (char === '(') stack.push(parens[char]);
      if (char === ')') {
        if (char === stack[stack.length - 1]) {
          stack.pop();
        } else {
          return false;
        }
      } 
    }
    return stack.length === 0;
  };
  
  const paren = (parens, left, right) => {
    // if not balanced return
    // if both avails are 0 push to results
    // else
    // push ( in paren(), modify avail and string
    // push ) in paren()
    if (left === 0 && right === 0) {
      if (isBalanced(parens)) results.push(parens);
      return;
    }
    if (left > 0) paren(parens + '(', left - 1, right);
    if (right > 0) paren(parens + ')', left, right - 1);
  };
  
  paren('', n, n);
  return results;
};
