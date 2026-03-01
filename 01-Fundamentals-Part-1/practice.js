// 1. Values and Variables
// Declare variables called country, continent and population and assign their values according to your own country (population in millions).
//Log their values to the console.

let country = "United States";
let continent = "North Amercica";
let population = 349;

console.log(`The ${country} is located in ${continent}. It has a population of ${population} million according to the latest data.`);

// 2. Data Types
// Declare a variable called isIsland and set its value according to your country. The variable should hold a Boolean value. Also declare a variable language, but don't assign it any value yet.
// Log the types of isIsland, population, country and language to the console.

country = "Dominican Republic";
population = 11.5;
let isIsland = true;
let language;
console.log(`Is the ${country} an island? ${isIsland}`);
console.log(`The ${country} is a part of ${continent} with a population of ${population} million.`);
console.log(language);
language = "Spanish";
console.log(`${language} is the official language of ${country}.`);

// 3. let, const and var
// Using const create 3 variables with a value that will never change and console log them.
const yearOfBirth = 1968;
const placeOfBirth = "Tupelo, Mississippi";
const nameOfMother = "Sarah Doyle";
console.log(`I was born to ${nameOfMother} in ${yearOfBirth} in the small town of ${placeOfBirth}`);

// 4. Basic Operators
// If your country split in half, and each half would contain half the population, then how many people would live in each half?
// Increase the population of your country by 1 and log the result to the console.
// Finland has a population of 6 million. Does your country have more people than Finland?
// The average population of a country is 33 million people. Does you country have less people than the average country?
// Based on the variables you created, create a new variable description which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'.
console.log(population / 2 + " million people.");
population++;
console.log(population);

const finlandPopulation = 6;
console.log(population > finlandPopulation);

const avgPopulation = 33;
console.log(population < avgPopulation);

country = "Portugal";
continent = "Europe";
population = 11;
language = "portuguese";

const description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
