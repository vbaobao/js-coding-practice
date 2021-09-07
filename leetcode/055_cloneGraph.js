const cloneGraph = function(node) {
  let copy = {};
  
  const traverse = (curr) => {
    if (!curr) return curr;
    if (!copy[curr.val]) {
      copy[curr.val] = new Node(curr.val);
      copy[curr.val].neighbors = curr.neighbors.map(e => traverse(e));
    }
    return copy[curr.val];
  };
  
  return traverse(node);
};
