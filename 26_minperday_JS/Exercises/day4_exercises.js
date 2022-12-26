/* 30 Days of Javascript - Day 4 Conditionals

 Exercises Level 1


 Question 1

 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

 Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.
*/

// answer
let age = prompt('Enter Age', 'Age is just a number');
let ageInt = parseInt(age);
if (ageInt >= 18) {
    console.log('You are old enough to drive');
}
else {
    console.log('You still have ' + (18 - ageInt) + ' years to drive');
}

/*
Question 2
Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.

*/

let myAge = prompt('Enter Age', 'Age is just a number');
let myAgeInt = parseInt(myAge);
let yourAge = prompt('Enter Age', 'Age is just a number');
let yourAgeInt = parseInt(yourAge);
if (myAgeInt > yourAgeInt) {
    console.log('I am ' + (myAgeInt - yourAgeInt) + ' years older than you');
}
else if (myAgeInt < yourAgeInt) {
    console.log('You are ' + (yourAgeInt - myAgeInt) + ' years older than me');  
}
else if (myAgeInt == yourAgeInt) {
    console.log('We are the same age');
}

// Question 3

/*
If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

    using if else
    ternary operator.

      let a = 4
      let b = 3

        4 is greater than 3
*/
// first way

let a = prompt('Enter a number', 'number');
let aInt = parseInt(a);
let b = prompt('Enter a number', 'number');
let bInt = parseInt(b);
if (aInt > bInt) {
    console.log("A is Greater than B")
}
else {
    console.log('A is less than B');
}

// second way

let aA = prompt('Enter a number', 'number');
let aAInt = parseInt(aA);
let bB = prompt('Enter a number', 'number');
let bBInt = parseInt(bB);
const result = aAInt > bBInt
    ? 'A is Greater than B'
    : 'A is less than B';
console.log(result);

// Question 4

/*
Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript? 

*/

let number = prompt('Enter a number', 'number');
let numberInt = parseInt(number);
if (numberInt % 2 === 0) {
    console.log('Number is even');
}
else {
    console.log('Number is odd');
}


// Exercises Level 2
/* Question 1
Write a code which can give grades to students according to their scores:

    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
*/
let grade = prompt('Enter a number', 'number');
let gradeInt = parseInt(grade);
switch(true) {
    case (gradeInt >= 80 && gradeInt <= 100):
        console.log('Your Grade is A');
        break;
    case (gradeInt >= 70 && gradeInt <= 79):
        console.log('Your grade is B');
        break;
    case (gradeInt >= 60 && gradeInt <= 69):
        console.log('Your Grade is C');
        break;
    case (gradeInt >= 50 && gradeInt <= 59):
        console.log('Your Grade is D');
        break;
    case (gradeInt >= 0 && gradeInt <= 49):
        console.log('You Failed');
        break;
    default:
        console.log('Entered value was not a valid grade');
}


// Question 2

/*
Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
*/


let monthInput = prompt('Enter a month', 'month');
let month = monthInput.toLowerCase();
switch (month) {
    case 'september':
    case 'october':
    case 'november':
        console.log('The season is Autumn');
        break;
    case 'december':
    case 'january':
    case 'february':
        console.log('The season is Winter');
        break;
    case 'march':
    case 'april':
    case 'may':
        console.log('The season is Spring');
        break;
    case 'june':
    case 'july':
    case 'august':
        console.log('The season is Summer');
        break;
    default:
        console.log('Enter a valid month');
}
                  
// Question 3

/* 
Check if a day is weekend day or a working day. Your script will take day as an input.

    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.

 */

 let dayInput = prompt('Enter a day', 'day');
 let day = dayInput.toLowerCase();
 switch (day) {
     case 'saturday':
     case 'sunday':
         console.log(`${day} is a weekend day`);
         break;
     case 'monday':
     case 'tuesday':
     case 'wednesday':
     case 'thursday':
     case 'friday':
         console.log(`${day} is a working day`);
         break;
     default:
         console.log('Enter a valid day');
 }  
 
 // Exercises: Level 3

 // Question 1

/*
Write a program which tells the number of days in a month.

Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.

  */

const month = prompt('Enter a month').toLowerCase();

let days;

switch (month) {
  case 'january':
  case 'march':
  case 'may':
  case 'july':
  case 'august':
  case 'october':
  case 'december':
    days = 31;
    break;
  case 'april':
  case 'june':
  case 'september':
  case 'november':
    days = 30;
    break;
  case 'february':
    days = 28;
    break;
  default:
    console.log(`Invalid month`);
}

if (days) {
  console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} has ${days} days.`);
}

// Question 2

/*
Write a program which tells the number of days in a month, now consider leap year.
*/

const month = prompt('Enter a month').toLowerCase();
const year = prompt('Enter a year');

const date = new Date(year, month);
const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

console.log(`${month.charAt(0).toUpperCase() + month.slice(1)} ${year} has ${daysInMonth} days.`);
