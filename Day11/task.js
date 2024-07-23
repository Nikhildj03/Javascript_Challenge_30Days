// Activity 1: Understanding Promises
// Task 1: Create a promise that resolve with message after 2 second timeout and log the message to the console.
const promiseNew = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});

promiseNew.then((message) => {
  console.log(message);
});

// Task 2: Create a promise that rejects with an error message after a 2 second timeout and handle the error with catch()
const rejectAfter2Seconds = new Promise((_, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rejected after 2 seconds"));
  }, 2000);
});

rejectAfter2Seconds.catch((error) => {
  console.error(error.message);
});

// Activity 2: Chaining Promises
// Task 3: Create a sequence of promises that simulates fetch data from server. chain the promises to log messages in a specific order.
const fetchData = (message, timeout) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    }, timeout);
  });
};

fetchData("Fetching data...", 1000)
  .then((message) => {
    console.log(message);
    return fetchData("Processing data...", 2000);
  })
  .then((message) => {
    console.log(message);
    return fetchData("Data processed successfully!", 1000);
  })
  .then((message) => {
    console.log(message);
  });

// Activity 3: Using Async/Await
// Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
const asyncFunction = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Promise resolved");
    }, 2000);
  });

  const result = await promise;
  console.log(result);
};

asyncFunction();

// Task 5: Write an async function that handles a rejected promise using try-catch and logs the error messages.
const asyncFunctionWithErrorHandling = async () => {
  const promise = new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("Promise rejected"));
    }, 2000);
  });

  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
};

asyncFunctionWithErrorHandling();

// Activity 4: Fetching Data from an API
// Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

// Task 7: Use the fetch API to get data from a public API and log the response data to the console using Async/await
const fetchDataAsync = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchDataAsync();

// Activity 5: Concurrent Promises

// Task 8: Use Promise.all to wait for multiple promises to resolve and then log all the values.
const promise1 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 1 resolved"), 1000)
);
const promise2 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 2 resolved"), 2000)
);
const promise3 = new Promise((resolve) =>
  setTimeout(() => resolve("Promise 3 resolved"), 3000)
);

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// Task 9: Use Promise.race to log the value of the first promise that resolves among multiple promises.
const promiseA = new Promise((resolve) =>
  setTimeout(() => resolve("Promise A resolved"), 1000)
);
const promiseB = new Promise((resolve) =>
  setTimeout(() => resolve("Promise B resolved"), 2000)
);
const promiseC = new Promise((resolve) =>
  setTimeout(() => resolve("Promise C resolved"), 3000)
);

Promise.race([promiseA, promiseB, promiseC]).then((value) => {
  console.log(value);
});
