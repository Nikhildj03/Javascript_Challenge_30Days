// Activity  5: Enhanced Object Literals

// task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

// let personName = "javascript";
// let personJob = "Developer";

// const enhancesObject = {
//   personName: "javascript",
//   personJob: "developer",

//   f1() {
//     console.log(
//       `I 'm able to access personName: ${personName} and personWork : ${personJob}` // This is not possible without enhanced object literals
//     );
//   },
// };

// enhancesObject.f1();

let personName = "javascript";
let personJob = "Developer";

const enhancesObject = {
  personName,
  personJob,

  f1() {
    console.log(
      `I 'm able to access personName: ${personName} and personWork : ${personJob}` // this is poosible due to enhanced object literals
    );
  },
};

enhancesObject.f1();

// Task 9 : Create an object with computer property names based on variables and log the object to console..

const key = "secondName";
const value = "cena";

const property1 = {
  firstName: "John",
  [key]: value,
};

console.log(property1.secondName);
