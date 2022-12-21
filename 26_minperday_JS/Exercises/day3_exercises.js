// Question 1
// Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Boiler';
const lastName = 'rat';
const country = 'Canada';
const city = 'Point Clark';
const age = 21;
const isMarried = true;
const now = new Date();
const year = now.getFullYear();

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);


//bonus
console.log(`My name is ${firstName}${lastName}. I live in ${city} ${country}. I am a ${isMarried}ly married man, the age of ${age} in this year of ${year}`);

// Question 2
// Check if type of '10' is equal to 10

let string10 = '10';
let num10 = 10;
console.log(string10 === num10); //false equal in value but not equal type
console.log(string10 == num10); //true equal in value

// Question 3
// Check if parseInt('9.8') is equal to 10
let numNinePoint = parseInt('9.8');
console.log(numNinePoint == 10) //false
console.log(numNinePoint) //nine

// Question 4
/* Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/

//Truthy statements

let isSnowing = true;
let isRaining = false;
let ageDiff = 49 > 27; //true
let isSun = 49 < 27; //false

// Falsy Values

let nothingToSee
let nothingToHear = null;
let nothingToRead = '',

// Question 5
/*
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'

//question 6

Find the length of python and jargon and make a falsy comparison statement.
*/

let firstQ = 4 > 3; //true
console.log(firstQ);
let secondQ = 4 >= 3; //true
console.log(secondQ);
let thirdQ = 4 < 3; //false
console.log(thirdQ);
let fourthQ = 4 <= 3; //false
console.log(fourthQ);
let fifthQ = 4 == 4; //true
console.log(fifthQ);
let sixthQ = 4 === 4; //true
console.log(sixthQ);
let seventhQ = 4 != 4; //false
console.log(seventhQ);
let eightQ = 4 !== 4; //false
console.log(eigthQ);
let ninthQ = 4 != '4'; // false
console.log(ninthQ);
let tenthQ = 4 == '4'; //true
console.log(tenthQ);
let eleventhQ = 4 === '4'; //false
console.log(eleventhQ);

let python = 'python';
let jargon = 'jargon';
console.log(python.length);
console.log(jargon.length);
console.log(python.length > jargon.length);


// question 7
/*
Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now.
*/

let year = new Date();
console.log(year.getFullYear);
let month = new Date();
console.log(month.getMonth);
let dateToday = new Date();
console.log(dateToday.getDate);
let dayToday = new.Date();
console.log(dayToday.getDay);




//Exercise 2

//Question 1

//Question 2


// Question 3
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt(`Enter length`, `number goes here`);
let width = prompt(`Enter width`, `number goes here`);
let area = (length * width);
let perimeter = (2 * area);
console.log(`Area is ${area} and the perimiter is: ${perimeter}`);

