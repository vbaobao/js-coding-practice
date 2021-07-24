/* Given the head of a singly linked list, return true if it is a palindrome. */

const isPalindrome = function(head) {
  // brute
  // iterate through linked list and store in an array
  // after, get length of array and slice at halfway
  // check index by index for both arrays
  
  let array = [];
  let node = head;
  while (node) {
      array.push(node.val);
      node = node.next;
  }
  let arrayCopy = array.slice(Math.ceil(array.length / 2));
  for (let i = arrayCopy.length - 1, j = 0; i >= 0; i--, j++) {
      if (arrayCopy[i] !== array[j]) return false;
  }
  return true;
};


// This is a O(1) solution, but performance is not much better.
// Runtime is longer, and only saves marginal memory usage.
// const isPalindrome = function(head) {
//   let node = head;
//   let runner = head;
//   let run = false;
//   while (node) {
//       if (run) runner = runner.next;
//       run = !run;
//       node = node.next;
//   }
  
//   let reverseList = null;
//   while (runner) {
//       let temp = reverseList;
//       reverseList = new ListNode(runner.val, temp);
//       runner = runner.next;
//   }

//   node = reverseList;
//   runner = head;
//   while (node) {
//       if (node.val !== runner.val) return false;
//       node = node.next;
//       runner = runner.next;
//   }
//   return true;
// };