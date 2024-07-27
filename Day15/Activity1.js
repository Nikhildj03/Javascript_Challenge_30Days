// Activity 1: Understanding closures

// Task 1: Write a funtcion that return another function , where the inner function accesses a variable from the outer function scope. call the inner function and log the result.

function outerFunction() {
  let date = 27;

  function innerFunction() {
    console.log(`Outer function variable is ${date}`);
  }

  return innerFunction();
}
outerFunction(); // Calling the function

// Task 2: Create a closure that maintains a provate counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
  let count = 0;

  return {
    increment: function () {
      count++;
    },
    getCount: function () {
      return count;
    },
  };
}

// call the function to create a counter Object

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.getCount());
