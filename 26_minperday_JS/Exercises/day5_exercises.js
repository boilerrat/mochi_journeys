/*
30 Days of Javascript

Day 5 - Arrays

*/

/*
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]
*/

// Question 1
// Declare an empty array;

const emptyArray = [];

// or

const emptyArr = Array();

// or

let emptyArr2 = new Array();

console.log(emptyArray);
console.log(emptyArr);
console.log(emptyArr2);

// Question 2
// Declare an array with more than 5 number of elemnents

const moreThanFive = [1, 2, 3, 4, 5, 6]
console.log(moreThanFive);

// Question 3

// Find the length of your array

console.log(moreThanFive.length);

// Question 4
// Get the first item, the middle item and the last item of the array

console.log(moreThanFive[0]);
console.log(moreThanFive[moreThanFive.length / 2]);
console.log(moreThanFive[moreThanFive.length - 1]);

// Question 5
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [`Wylde`, `Chris`, 49, true, { country: `Canada`, City: `Point Clark`}, {skills: [`HTML`, `CSS`, `JavaScript`, `React`, `Redux`, `Node`, `MongoDB`]}]
console.log(mixedDataTypes.length);


// Question 6
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = [`Facebook`, `Google`, `Microsoft`, `Apple`, `IBM`, `Oracle`, `Amazon`, `DAOhaus`]

// Question 7
// Print the array using console.log()

console.log(itCompanies);

// Question 8
// Print the number of companies in the array

console.log(itCompanies.length);

// Question 9
// Print the first company, middle and last company

console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length / 2]);
console.log(itCompanies[itCompanies.length - 1]);

// Question 10
// Print out each company 
console.log(itCompanies)

// Question 11
// Change each company name to uppercase one by one and print them out

itCompanies[0] = itCompanies[0].toUpperCase();
itCompanies[1] = itCompanies[1].toUpperCase();
itCompanies[2] = itCompanies[2].toUpperCase();
itCompanies[3] = itCompanies[3].toUpperCase();
itCompanies[4] = itCompanies[4].toUpperCase();
itCompanies[5] = itCompanies[5].toUpperCase();
itCompanies[6] = itCompanies[6].toUpperCase();
itCompanies[7] = itCompanies[7].toUpperCase();

console.log(itCompanies);

// Question 12 
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

console.log(`${itCompanies[0]}, ${itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6], itCompanies[7]} are big IT companies.`)