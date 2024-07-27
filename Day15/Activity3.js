// Activity 3 : Closure in Loops

// Task 5 : Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function createFunctionArray() {
  const functions = [];

  //   Loop to create functions

  for (let i = 0; i < 5; i++) {
    functions.push(((index) => {
      return function () {
        console.log(index);
      };
    })(i));
  }

  return functions;
}

// call the functions to create an array of functions
const functionArray = createFunctionArray();

functionArray.forEach((func) => func());
