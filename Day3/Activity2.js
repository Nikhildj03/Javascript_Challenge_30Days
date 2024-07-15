// Activity 2 : Nested If-Else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 60;
let num3 = 8;

if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is greatest Number`);
}else if(num2 > num3){
    console.log(`${num2} is greatest Number`);
}else{
    console.log(`${num3} is the greatest Number`);
}