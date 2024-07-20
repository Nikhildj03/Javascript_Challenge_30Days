// Activity 3 : Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes akk elements of an existing array plus additional elemets and log the new array to the console.

let oldArray = ["Nikhil", "Kailas"];

let newArray = [...oldArray, "Kakade", 3366];

console.log(newArray);

// task 6 : Use the rest operator in a function to accept an arbitary numbers of arguments, sum them , and return the result.

function restOperator(...allnumbers) {
  let sum = 0;

  for (const i of allnumbers) {
    sum += i;
  }

  return sum;
}

let n = restOperator(1, 2, 3);
console.log(n);
