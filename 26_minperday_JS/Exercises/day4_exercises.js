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