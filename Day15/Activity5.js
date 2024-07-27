// Activty 5: Memoization

// Task 7: Write a function that memorizes the results of another function. Use a closure to store the results of presious computations.

function memorize(func) {
  const cache = {};

  return function (arg) {
    if (cache[arg] === undefined) {
      cache[arg] = func(arg);
    }

    return cache[arg];
  };
}

function square(n) {
  console.log(`Computing the square of ${n}`);
  return n * n;
}

const memorizedSquare = memorize(square);

console.log(memorizedSquare(5));

// Task 8: Create a memorized version of a function that calculates the factorial of a numbers

function factorial(n) {
  let fact = 1;

  for (let i = 1; i <= n; i++) {
    fact *= i;
  }

  return fact;
}

const memorizeFactorial = memorize(factorial);

console.log(memorizeFactorial(5));
