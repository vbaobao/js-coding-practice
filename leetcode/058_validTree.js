const validTree = function(n, edges) {
  if (edges.length !== n - 1) return false;
  if (edges.length === 0) return true;
  
  const graph = {};
  for (const edge of edges) {
    if (!graph[edge[0]]) graph[edge[0]] = [];
    if (!graph[edge[1]]) graph[edge[1]] = [];
    graph[edge[0]].push(edge[1]);
    graph[edge[1]].push(edge[0]);
  }

  const parent = {};
  const stack = [Number(Object.keys(graph)[0])];
  while (stack.length > 0) {
    let current = stack.pop();
    for (const val of graph[current]) {
      if (parent[current] === val) continue;
      if (parent[val]) return false;
      stack.push(val);
      parent[val] = current;
    }
  }
  
  return Object.keys(parent).length === n - 1;
};
