const assert = (expected, actual, name) => {
  if (expected === actual) return console.log(`PASSED test: ${name}`);
  return console.log(`FAILED test: ${name}\nExpected ${expected}, but got ${actual} instead.`);
};

function Stack() {
  this.stack = [];
}

Stack.prototype.push = function(value) {
  this.stack.push(value);
  return this.stack;
};

Stack.prototype.pop = function() {
  this.stack.pop();
  return this.stack;
};

Stack.prototype.size = function() {
  return this.stack.length;
};

/* threeInOne: describe how you could use a single array to implement three stacks. */

const threeInOne = (array) => {
  // split array into 3
  // push to 3 stacks
  let two = array.length / 3
  let three = array.length * 2 / 3
  let stacks = {
    one: new Stack(),
    two: new Stack(),
    three: new Stack()
  };

  for (let i = 0; i < array.length; i++) {
    if (i < two) {
      stacks.one.push(array[i]);
    } else if (i < three) {
      stacks.two.push(array[i]);
    } else {
      stacks.three.push(array[i]);
    }
  }
  return stacks;
};

/* stackMin: how would you design a stack which, in addition to push and pop, has a
 * function min() which returns the minimum element? All should be O(1) time.
 */

function stackMin() {
  this.stack = [];
  this.min = [];
}

stackMin.prototype.push = function(value) {
  this.stack.push(value);
  if (this.min.length === 0 || this.min[this.min.length - 1] > value) {
    this.min.push(value);
  } else {
    this.min.push(this.min[this.min.length - 1]);
  }
  return this.stack;
};

stackMin.prototype.pop = function() {
  let popped = this.stack.pop();
  this.min.pop();
  return popped;
};

stackMin.prototype.min = function() {
  return this.min[length - 1];
};

/* stackOfPlates/setOfStacks: imagine a literal stack of plates. If the stack gets too high
 * it might topple. Once it reaches a certain threshold we would create a new
 * stack. Implement a data structure setOfStacks that mimics this.
 * setOfStacks should be composed of several stacks and should create a new stack
 * once the previous one reaches max capacity. push() and pop() should still work
 * like a single stack.
 * 
 * Bonus: implement popAt(index) which pops at a specific stack.
 */

function setOfStacks(threshold) {
  this.stacks = [];
  this.threshold = threshold;
  this.lastStack = null;
}

setOfStacks.prototype.push = function(value) {
  if (!this.stacks.length || this.stacks[this.lastStack].length >= this.threshold) {
    this.stacks.push([value]);
    this.lastStack = this.stacks.length - 1;
  } else {
    this.stacks[this.lastStack].push(value);
  }
};

setOfStacks.prototype.pop = function() {
  let popped;
  if (!this.stacks.length) return null;
  if (this.stacks[this.lastStack].length === 1) {
    popped = this.stacks[lastStack].pop();
    this.lastStack = this.lastStack - 1;
  } else {
    popped = this.stacks[lastStack].pop();
  }
  return popped;
};

setOfStacks.prototype.popAt = function(stackNum) {
  let popped;
  if (!this.stacks.length || !this.stacks[stackNum]) return null;
  if (this.stacks[stackNum].length === 1) {
    popped = this.stacks[stackNum].pop();
    if (stackNum === this.lastStack) this.lastStack = this.lastStack - 1;
  } else {
    popped = this.stacks[stackNum].pop();
  }
  return popped;
};

/* queueViaStacks/myQueue: implement a myQueue class which implements a queue
 * using 2 stacks. */

class myQueue {
  constructor() {
    this.queue = new Stack();
    this.stack2 = new Stack();
  }

  push(value) {
    if (!this.queue.length) {
      this.queue.push(value);
    } else {
      while (!this.queue.length) {
        this.stack2.push(this.queue.pop());
      }
      this.stack2.push(value);
      while (!this.stack2.length) {
        this.queue.push(this.stack2.pop());
      }
    }
  }

  unshift() {
    return this.stack1.pop();
  }
}

/* sortStack: write a program to sort a stack such that the smallest items
 * are on the top. You can use an additional temp stack, but you may not
 * copy the elements into any other data structure (e.g. array). The
 * stack supports the following ops: push, pop, peek, and isEmpty.
 */

const sortStack = (stack) => {};

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
