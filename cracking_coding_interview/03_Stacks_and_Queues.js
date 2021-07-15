const assert = (expected, actual, name) => {
  if (expected === actual) return console.log(`PASSED test: ${name}`);
  return console.log(`FAILED test: ${name}\nExpected ${expected}, but got ${actual} instead.`);
};

/* threeInOne: describe how you could use a single array to implement three stacks. */

const threeInOne = () => {};

/* stackMin: how would you design a stack which, in addition to push and pop, has a
 * function min() which returns the minimum element? All should be O(1) time.
 */

function Stack() {}

Stack.prototype.push = function() {};

Stack.prototype.pop = function() {};

Stack.prototype.min = function() {};

/* stackOfPlates/setOfStacks: imagine a literal stack of plates. If the stack gets too high
 * it might topple. Once it reaches a certain threshold we would create a new
 * stack. Implement a data structure setOfStacks that mimics this.
 * setOfStacks should be composed of several stacks and should create a new stack
 * once the previous one reaches max capacity. push() and pop() should still work
 * like a single stack.
 * 
 * Bonus: implement popAt(index) which pops at a specific stack.
 */

function setOfStacks() {}

setOfStacks.prototype.push = function() {};

setOfStacks.prototype.pop = function() {};

setOfStacks.prototype.popAt = function() {};

/* queueViaStacks/myQueue: implement a myQueue class which implements a queue
 * using 2 stacks. */

class myQueue {
  constructor() {}

  push() {}

  unshift() {}
}

/* sortStack: write a program to sort a stack such that the smallest items
 * are on the top. You can use an additional temp stack, but you may not
 * copy the elements into any other data structure (e.g. array). The
 * stack supports the following ops: push, pop, peek, and isEmpty.
 */

class sortStack {
  constructor() {}

  push() {}

  pop() {}

  peek() {}

  isEmpty() {}
}

/* animalShelter: an animal shelter, which only holds dogs and cats,
 * operates on "first in, first out" basis. Peple must either adopt
 * the "oldest" of all animals at the shelter, or they can select
 * whether they would prefer a dog or a cat (they will recieve the
 * oldest of that animal type). They cannot select which specific
 * animal they would like. Create data structures to maintain this
 * system and implement enqueue, dequeueAny, dequeueDog, and
 * dequeueCat.
 */

class animalShelter {
  constructor() {}

  enqueue() {}

  dequeueAny() {}

  dequeueDog() {}

  dequeueCat() {}
}
