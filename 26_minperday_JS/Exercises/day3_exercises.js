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

