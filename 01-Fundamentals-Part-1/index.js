/*
let js = "Oh so funky!";
//if (js === "Oh so funky!") alert("I love JavaScript!");

// values
console.log(40 + 8 * 5);
console.log("Mike");
console.log(56);

// variables
let firstName = "Susan";
firstName = "Betty";
console.log(firstName);
console.log(`${firstName} is a very beautiful woman.`);

let superHero = "Hulk";
let color = "green";
console.log(`The ${superHero} is a mean ${color} smashing machine!`);

let firstJob = "graphic artist";
console.log(`${firstName} got her first real job as a ${firstJob} out of college.`);

// 7 primative data types
let age = 16; // number
let city = "Puerto Plata"; // string
let fullName = true; // boolean
let place; // undefined
// null
// symbol (ES2015)
// bigint (ES20)
let javaScriptIsFun = true;
console.log(typeof javaScriptIsFun);
console.log(typeof age);
console.log(typeof city);
console.log(city.length);

javaScriptIsFun = "YES!";
console.log(`Do you like JavaScript? ${javaScriptIsFun}`);
console.log(place);
console.log(typeof place);

place = "St. Louis, MO";
console.log(`I left my heart in ${place}.`);
console.log(typeof place);


// let, const, var
// let allows you to change the value later.
let favFood;
favFood = "pizza";

// const does not allow the value to be changed nor can they be empty.
// Unless you have a variable that will change later, always use const.
const countryOfBirth = "United States";
const person = "Silent Steve";

// var has been phased ou and no longer used.
var currentCareer = "Web Developer";
currentCareer = "Ninja";

console.log(`${person} was born in the ${countryOfBirth}. Not many know he is a ${currentCareer} who loves deep dish ${favFood}.`);


// Math Operators
const now = 2036;
const mikeAge = now - 1968;
const marieAge = now - 1978;
console.log(`Mike turned ${mikeAge} today.`);
console.log(`Mike is ${mikeAge} and Marie is ${marieAge}.`);
console.log(now * (mikeAge + marieAge));
console.log(now / 2 + 10);

const firstName = "High Lord";
const lastName = "Jhiaxus";
console.log(firstName + " " + lastName);

// Assignment Operators
let x = 30 - 10; // 20
x += 15; // x + 15
x++; // adds 1
console.log(x);

let y = 5 * 5; // 25
y *= 2;
y--;
console.log(y);

// Comparison Operators
console.log(mikeAge > marieAge);
console.log(marieAge > now);

const ofLegalAge = 21;
console.log(marieAge >= ofLegalAge);

const shielaAge = now - 2020;
console.log(shielaAge <= ofLegalAge);


// Strings and Template Literals

const firstName = "Mike";
const occupation = "web developer";
const birthYear = 1968;
const currentYear = 2026;

const michael = `Hello. I'm ${firstName} a ${currentYear - birthYear} year old ${occupation}.`;
console.log(michael);

console.log(`A string
  with multiple
  lines.`);
  
// If/Else Statements
const age = 18;

if (age >= 20) {
  console.log(`Betty is old enough to get her driver's license.`);
} else {
  const yearsLeft = 21 - age;
  console.log(`Betty can get her driver's license in ${yearsLeft} years.`);
}

const birthYear = 2004;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);
*/

// Type Conversion
const inputYear = "2004";
console.log(Number(inputYear));
console.log(Number(inputYear) + 16);

console.log(String(35));

// Type Coercion
console.log(`I am 57 years old.`);
console.log("15" - "5" + 20);
console.log("50" * 4);

let n = "5" * 2;
n = n - 2;
console.log(n); // 8

let x = "5" + 5;
x = x - 5;
console.log(x); // 50
