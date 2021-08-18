# Memoization

Memoization using caching to improve performance of functions that use computed reuslts. It saves time when functions need to make recalculations over and over again. One prime example is the Fibbonaci sequence.

> Fibonacci sequence: 0 1 1 2 3 5 ...
> Made up of summing the previous two digits.
> With the exception of the first 2.

```javascript
const fibonacci = (n) => {
  if (n === 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
```

The code above works, but when larger values of is used the performance will tank.

```javascript
const fibonacci = (n => {
  let memo = {};
  
  let recur = (n) => {
    if (n in memo) return memo[n];

    if (n === 0 || n === 1) {
      memo[n] = n;
      return;
    } else {
      memo[n] = recur(n - 1) + recur(n - 2);
      return;
    }
  };

  return f;
})();
```

## Memoize Functions

The previous example modified functions to include memoization. But a general function can be written to apply memoization to any function.

```javascript
const memoize = (func) => {
  let memo = {};
  let slice = Array.prototype.slice;

  return function () {
    let args = slice.call(arguments);
    if (args in memo) return args;
    return (memo[args] = func.apply(this, args));
  };
};
```
