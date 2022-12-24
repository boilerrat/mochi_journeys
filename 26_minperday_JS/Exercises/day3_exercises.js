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

const year = new Date();
console.log(year.getFullYear());
const month = new Date();
console.log(month.getMonth() + 1);
const dateToday = new Date();
console.log(dateToday.getDate());
const dayToday = new Date();
console.log(dayToday.getDay());


//Exercise 2

//Question 1

/*
Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

Enter base: 20
Enter height: 10
The area of the triangle is 100
*/

let base = prompt(`Enter Base`, 'Enter Number here');
let heightY = prompt(`Enter height`, `Enter Number Here`);
//let areaY = 0.5 * base * heightY;
//console.log(areaY); 
//or
console.log(0.5 * base * heightY) //first option would be better, as the result can be used in other places.

//Question 2

// Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
Enter side a: 5
Enter side b: 4
Enter side c: 3
The perimeter of the triangle is 12
*/

// let sideA = prompt(`Enter Side A`, `number here`);
// let sideB = prompt(`Enter Side B`, `number here`);
// let sideC = prompt(`Enter Side C`, `number here`);
// let perimeterT = (parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
// console.log(perimeterT);

// maybe something changed here, jvonsole show a result of 543 instead of 12
// should I use parseInt

let sideA = prompt(`Enter Side A`, `number here`);
let sideB = prompt(`Enter Side B`, `number here`);
let sideC = prompt(`Enter Side C`, `number here`);
let perimeterT = parseFloat(sideA) + parseFloat(sideB) + parseFloat(sideC);
console.log(perimeterT);

// Question 3
// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt(`Enter length`, `number goes here`);
let width = prompt(`Enter width`, `number goes here`);
let area = (length * width);
let perimeter = (2 * area);
console.log(`Area is ${area} and the perimiter is: ${perimeter}`);

// Question 4

/*
Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/

let radiusCircle = prompt(`Enter Radius of Circle`, `Enter Number`);
const pi = 3.14;
let area = pi * radiusCircle ** 2;
let circumference = 2 * pi * radiusCircle;
console.log(area);
console.log(circumference);

// Question 5

/*
Calculate the slope, x-intercept and y-intercept of y = 2x -2
*/

const m = 2;
const b = -2;

const slope = m;
const yIntercept = { x:0, y: b};
const x = -b/m;
const xIntercept = {x: x, y: 0};
console.log(`Slope: ${slope}`);
console.log(`x-intercpet: ${xIntercept}`);
console.log(`y-intercept: ${yIntercept}`);

//Question 6
/*
Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
*/

const y2 = 10;
const y1 = 2;
const x2 = 6;
const x1 = 2;
let m1 = (y2 - y1) / (x2 - x1);
console.log(m1);


/* Question 7
Compare the slope of above two questions.
*/

const m = 2;
const b = -2;

const slope = m;
const yIntercept = { x:0, y: b};
const x = -b/m;
const xIntercept = {x: x, y: 0};
console.log(`Slope: ${slope}`);
console.log(`x-intercpet: ${xIntercept}`);
console.log(`y-intercept: ${yIntercept}`);
const y2 = 10;
const y1 = 2;
const x2 = 6;
const x1 = 2;
let m1 = (y2 - y1) / (x2 - x1);
console.log(m1);
console.log(slope === m1);  //true

//Question 8
// Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

const x1 = 0;
let y1 = x1 ** 2 + ((6 * x1) + 9);
console.log(y1); // 9

const x2 = -4;
let y2 = x2 ** 2 + ((6 * x2) + 9);
console.log(y2); //-23

const x3 = 1;
let y3 = x3 ** 2 + ((6 * x3) + 9);
console.log(y3); 

const x4 = .5;
let y4 = x4 ** 2 + ((6 * x4) + 9);
console.log(y4); 

const x5 = -5;
let y5 = x5 ** 2 + ((6 * x5) + 9);
console.log(y5); 

const x6 = -3;
let y6 = x6 ** 2 + ((6 * x6) + 9);
console.log(y6);  // 0 

/* Question 9
Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
*/

var hours = prompt(`Enter Hours`, `number here`);
var payRate = prompt(`Enter Pay Rate`, `number here`);
let pay = hours * payRate;
console.log(`Your pay is: ${pay}`);

/* Question 10
If the length of your name is greater than 7 say, your name is long else say your name is short.
sample I need:
let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  3 is a positive number

num = -3
if (num > 0) {
  console.log(`${num} is a positive number`)
} else {
  console.log(`${num} is a negative number`)
}
//  -3 is a negative number

*/

let nameR = prompt(`Enter you name`, `name here`);
if (nameR.length > 7) {
    console.log(`Your name ${nameR} is long`)
} else {
    console.log(`Your name ${nameR} is short`)
}

/* Question 11
Compare your first name length and your family name length and you should get this output.
let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

Your first name, Asabeneh is longer than your family name, Yetayeh

side note
I'm improving this to make it more complicated

*/

let firstyName = prompt(`Enter First Name`, `Enter Name Here`);
let lastyName = prompt(`Enter Last Name Here`, `Enter Last Name`);

if (firstyName.length > lastyName.length) {
    console.log(`Your first name, ${firstyName} is longer than your family name ${lastyName}.`)
} else {
    console.log(`Your first name ${firstyName} is shorter than your family name ${lastyName}.`)
}

/* Question 12

Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.

let myAge = 250
let yourAge = 25

I am 225 years older than you.

*/

let myAge = 250;
let yourAge = 25;
let diffAge = myAge - yourAge;
console.log(`I am ${diffAge} years older than you.`);

/* Question 13

Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
*/

let driverYear = prompt(`Enter Birth Year`, `Year`);
const now1 = new Date();
let driverAge = now1.getFullYear() - driverYear;
if (driverAge >= 18) {
    console.log(`You are ${driverAge}. You are old enough to drive.`) 
} else {
    var yearsLeft = 18 - driverAge;
    console.log(`You must wait ${yearsLeft} years to drive.`)
}


/* Question 14

Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

*/

let yearsOld = prompt(`Enter Age in Years`, `age`);
const secondsPerYear = 365 * 24 * 60 * 60;
let secondsOld = yearsOld * secondsPerYear;
const secondsInCentury = 100 * secondsPerYear;
let secondsLeft = secondsInCentury - secondsOld;

console.log(`You are ${secondsOld} seconds old and have about ${secondsLeft} seconds to live. Enjoy!`)


/* Question 15


Create a human readable time format using the Date time object

    YYYY-MM-DD HH:mm
    DD-MM-YYYY HH:mm
    DD/MM/YYYY HH:mm

*/

const now = new Date();
const yearFirst = `${now.getFullYear()}-${now.getMonth() +1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}`;
const dayFirstDashes = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
const dayFirstSlashes = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`;
console.log(yearFirst);
console.log(dayFirstDashes);
console.log(dayFirstSlashes);

// Exercise Level 3

/*
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

    YYYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

// get current date and time

const nowZ = new Date();

// get the date and time

const yearZ = nowZ.getFullYear();
const monthZ = nowZ.getMonth() +1;
const dayZ = nowZ.getDate();
const hourZ = nowZ.getHours();
const minZ = nowZ.getMinutes();

if (hourZ < 10) hourZ = `0${hourZ}`;
if (minZ < 10) minZ =`0${minZ}`;

// format that shid

const formDate = `${yearZ}-${monthZ}-${dayZ} ${hourZ}:${minZ}`;

// print it

console.log(formDate);












