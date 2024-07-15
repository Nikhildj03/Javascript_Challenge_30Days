// Activity 3: Switch Case

// Task 4 : Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.

let day = 1;

switch (day) {
  case 1:
    console.log(`Day is Monday`);
    break;
  case 2:
    console.log(`Day is Tuesday`);
    break;
  case 3:
    console.log(`Day is Wednesday`);
    break;
  case 4:
    console.log(`Day is Thursday`);
    break;
  case 5:
    console.log(`Day is Friday`);
    break;
  case 6:
    console.log(`Day is Saturday`);
    break;
  case 7:
    console.log(`Day is Sunday`);
    break;

  default:
    console.log(`Invalid Input`);
    break;
}

// Task 5  Write a program that uses a switch case to assign a grade ('A' , 'B' , 'C', 'D', 'F') based on a score and log the grade to the console

function grade(marks) {
  let score;

  switch (true) {
    case marks >= 90:
      score = "A";
      break;
    case marks >= 80:
      score = "B";
      break;
    case marks >= 70:
      score = "C";
      break;
    case marks >= 60:
      score = "D";
      break;

    default:
      score = "F";
      break;
  }
  return score;
}

console.log(grade(85));
console.log(grade(45));
