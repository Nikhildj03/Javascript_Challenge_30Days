// Variable Types

// primitive

// string 
// Number
// BigInt
// null
// undefined
// Symbol
// NaN
// Boolean

let str = "Nikhil"
console.log(str);
console.log("Type of String is " + typeof str);


let num = 10.1;
console.log(num);
console.log("Type of Number is " +  typeof num);

let bigint = 10n;
console.log(bigint);
console.log("Type of BigInt is " +  typeof bigint);


let n = null;
console.log(n);
console.log( "Type of Null is " + typeof n); // Object


let i;
console.log(i);
console.log( "Type of Undefined is " + typeof i);

// Non- Primitive data Type

// Array
// function
// Object


let arr = [10,20,30];
console.log(arr);
console.log("Type of Array is" + typeof arr); //object

let fun = () => console.log("Hello world ");
fun(); // Function Calling Statement
console.log( "Type of function is " +  typeof fun);