/**
 * Depth first search utilizes a stack.
 * While breadth first search utilizes a queue.
 */

let graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

const dfs = (graph, src) => {
  let stack = [src];
  let result = [];
  while (stack.length > 0) {
    let curr = stack.pop();
    result.push(curr);
    for (const val of graph[curr]) {
      stack.push(val);
    }
  }
  return result;
};

const bfs = (graph, src) => {
  let result = [];
  let queue = [src];
  while (queue.length > 0) {
    let curr = queue.shift();
    result.push(curr);
    for (const val of graph[curr]) {
      queue.push(val);
    }
  }
  return result;
};

let dfs0 = JSON.stringify(dfs(graph, 'a'));
let dfs1 = JSON.stringify(['a','b', 'd', 'f', 'c', 'e']);
let bfs0 = JSON.stringify(bfs(graph, 'a'));
let bfs1 = JSON.stringify(['a', 'c', 'b', 'e', 'd', 'f']);

console.assert(dfs0 === dfs1, {result: dfs0, expected: dfs1});
console.assert(bfs0 === bfs1, {result: bfs0, expected: bfs1});