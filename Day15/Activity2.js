// Activity 2 : Practical Closures

// Task 3 : Write a function that generates uniques IDs. Use a closure to keep track of the last generated Id and increament it with each call.

function uniqueIdGenerator() {
  let oldId = 0;

  return function () {
    let newId = ++oldId;

    return newId;
  };
}

let ids = uniqueIdGenerator();

console.log(ids());

console.log(ids());

// Task 4. Create a closure that captures a user's Name and returns a function thet greets the user by name.

function captureName(name) {
  return function () {
    console.log(`Hello ${name} how are you`);
  };
}

let name1 = captureName("Nikhil");

console.log(name1());
