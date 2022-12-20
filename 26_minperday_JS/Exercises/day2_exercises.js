//30 Days of Javascript


//Day 2

// Exercise 1

let challenge = '30 Days of Javascript'
console.log(challenge)
console.log(challenge.length) //count the chaaracters in the string
console.log(challenge.toUpperCase()) //30 DAYS OF JAVASCRIPT
console.log(challenge.toLowerCase()) //30 days of javascript
console.log(challenge.subStr(0,2)) //30 
console.log(challenge.subString(3)) // slice out the phrase 'Days of Javascript'
console.log(challenge.includes('Script')) //check to see if the word 'Script' is in the string
console.log(challenge.split('')) //split the string into an array
let media = 'Facebook, Google, Microsoft, Apple, Oracle, Amazon'
console.log(media.split(',')) // split an array
console.log(challenge.replace('Javascript', 'Python')) //replace Javascript with Python in the string
console.log(challenge.charCodeAt(11)) //Ascii character of J, 11th index position
console.log(challenge.indexOf('a')) // determines the first occurence of 'a'
let because = 'You cannot end a sentence with because because because is a conjunction' // declare a new string
console.log(because.lastIndexOf('because')) //find first because
console.log(because.lastIndexOf('because')) //find last because
console.log(challenge.trim(' ')) //trim space from end of string
console.log(challenge.startsWith('3'))
console.log(challenge.endsWith('t'))
console.log(challenge.match('a'))
joined.concat('30 Days of', 'JavaScript')
console.log(joined.repeat(2))

//Exercise 2

let johnHolmes = 'The quote \"There is no exercise better for the heart than reaching down and lifting people up.\" by John Holmes teaches us to help one another.'
console.log(johnHolmes) //Q1 print that statement to console
let motherT = '\"Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same -- with charity you give love, so don\'t just give money but reach out your hand instead.\"'
console.log(typeof '10') // checks to see if '10' is = to 10

// question 3
// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.

let num = '10'   // next few lines changes '10' the string to 10 the number
let numInt = parseInt(num)  // finds the number in the string
console.log(numInit)  //10
console.log(parseFloat(9.18))

// question 4
// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

let numb = '9.8'
let numFloat = parseFloat(num) 
console.log(numFloat) //9.8
console.log(Math.round(numFloat))  //10

// question 5

// Check if 'on' is found in both python and jargon

let onOne = 'python'
let onTwo = 'jargon'
console.log(onOne.includes('on'))
console.log (onTwo.includes('on'))

//question 6

// I hope this course is not full of jargon. Check if jargon is in the sentence.

let jarg = "I hope this course is not full of jargon. Check if jargon is in the sentence."
console.log(jarg.includes('jargon'))  // yes

//question 7

let randomNumber = Math.random()
let zerToOneHundy = randomNumber * 101.01
console.log(zerToOneHundy)

//question 8
//Generate a random number between 50 and 100 inclusively.

const min = 50;
const max = 100;
const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randNum);

// question 9
// Generate a random number between 0 and 255 inclusively

let twoFiveSix = Math.round(Math.random() * 256)
console.log(twoFiveSix)

// question 10
// Access the 'JavaScript' string characters using a random number

let stringChar = 'JavaScript'
let charPos = Math.floor(Math.random() * stringChar.length)
let randChar = stringChar.charAt(charPos)
console.log(randChar)

//question 11

// Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/

console.log('1\t1\t1\t1\t1');
console.log('2\t1\t2\t4\t8');
console.log('3\t1\t3\t9\t27');
console.log('4\t1\t4\t16\t64');
console.log('5\t1\t5\t25\t125');


//question 12

//Use substr to slice out the phrase because because because from the following sentence:
//'You cannot end a sentence with because because because is a conjunction'

let beeCh = 'You cannot end a sentence with because because because is a conjunction'
console.log(beeCh.subStr(30, 24))

// Exercise Level 3

// Question 1

// 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

let loveString = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
let loveZero = 'love'
let splitWords = loveString.split(" ");
let matches = splitWords.filter(function(w) {
    return w.toLowerCase() == loveZero.toLowerCase();
    });
let counting = matches.length;
console.log(counting);


// question 2

// Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
/*
The match() method searches the string for a specified pattern and returns an array of all the matches. 
In this case, the pattern is /because/g, which matches the word "because" globally (g flag). 
The length property of the array gives us the number of matches.
*/

let becauseString = 'You cannot end a sentence with because because because is a conjunction';
let countBecause = becauseString.match(/because/g).length;
console.log(countBecause);

// question 3
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentencePer = sentence.replace(/);


// question 4
// Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

const salaryString = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let income = 0; //gotta start somewhere

const salMatch = salaryString.match(/\d+ euro from salary per month/); //find th 5000 euro
if (salMatch) {
    income += parseInt(salMatch[0]) * 12;
}
const bonusMatch = salaryString.match(/\d+ euro annual bonus/); //find 10000 annual bonus
if (bonusMatch) {
    income += parseInt(bonusMatch[0]);
}
const onlineMatch = salaryString.match(\/d+ euro online courses per month/); //find 15k per month
if (onlineMatch) {
    income += parseInit(onlineMatch[0]);
} 

console.log(income);  //total amount 80k