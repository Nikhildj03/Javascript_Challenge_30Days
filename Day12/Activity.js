// Activity 1 : Basic Error Handling woth Try-Catch

// Task 1: Write a function that intentionally throws an erro and use a try catch block to handlle the error.

// err();

function err() {
  try {
    throw Error("Error is Coming");
  } catch (error) {
    console.log(error);
  }
}

// task 2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function divideTwoNum(num1, num2) {
  try {
    if (num2 === 0) {
      throw Error("We cannot divide by Zero");
    } else {
      const result = num1 / num2;
      console.log(result);
    }
  } catch (error) {
    console.log(error);
  }
}

divideTwoNum(10, 2);
// divideTwoNum(10, 0);

// Activity 2 : Finally Block

// task 3: Write a script that includes a try-catch block and a finaaly block. Log messages in the try,catch.and finaaly blocks to observe the execution flow.

usingFinally();

function usingFinally() {
  try {
    throw Error("Dev Created Error");
  } catch (error) {
    console.log(error);
  } finally {
    console.log(" It will get execute even if error occurs ");
  }
}

// Activity 3: Custom Error Objects
//Task 4 :Create a Custom error class that extends the built in error class.throw an instance of this custom error in a function and handle it using a try catch block.

class customError extends Error {
  constructor(message) {
    super(message);
    this.name = "customError";
  }
}

console.dir(customError);
console.dir(Error);

function checkValue(value) {
  if (value < 0) {
    throw new customError("number chota hai");
  }
}

try {
  checkValue(-1);
} catch (error) {
  console.log(error);
}

//Task 5 : Write a function that validates user input (e.h Checking if a string is not empty) and throws a custom error if the validation is fails. Handle the custom error using try catch block.

validInput();

validInput("something");

function validInput(string) {
  try {
    if (string === undefined) {
      throw Error("the string is empty");
    } else {
      console.log(string);
    }
  } catch (error) {
    console.log(error);
  }
}

// Activity 4 :Error Handling in promises

//Task 6 :  Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection and log an appropriate message to the console.

const randomPromise = new Promise((resolve, reject) => {
  const num = Math.random();
  if (num < 0.5) {
    throw Error("Small");
  } else {
    console.log("large");
  }
}).catch((error) => {
  console.log(error);
});

//Task 7 : Use try-catch withi an async function to handle error from a promise that randomly resolves or rejects and log the message.

tryCatch();

async function tryCatch() {
  const num = Math.random();
  const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num <= 0.5) {
        reject("lesser");
      } else {
        console.log("greater");
      }
    }, 1000);
  }).catch((error) => {
    console.log(error);
  });
}

// Activity  5 : Graceful Error Handling in Fetch

//Task 8 Use the fetch API to request data from an invalid URL and Handle the error using .catch() Log an appropriate error message to the console.

usingFetch();

async function usingFetch() {
  await fetch("https://invalid").catch(() => {
    console.log("error hai");
  });
}

fetch("http://invalidURL").catch((error) => {
  console.log("url is not valid");
});

//Task 9 : Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

tryCatch();

async function tryCatch() {
  try {
    const data = await fetch("https://jhshjasnask");
    console.log(data);
  } catch (error) {
    console.log("Its all about the error");
  }
}
