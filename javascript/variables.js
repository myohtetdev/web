let someVariableName = "Hello";
console.log(someVariableName);

let age = 72;
age = age + 1;
console.log(age);

// variables naming
// camel case
let numOfGoods = 10;

// Unary Operators
let score = 0;
score = score + 10;
score += 1;
score += 10;
score -= 10;
console.log("score = " + score);

let bonusMult = 3;
score *= bonusMult;
console.log("BonusMult = " + score);

let counter = 0;
counter++;
counter++;
counter++;
console.log("Counting to positive: " + counter);
counter--;
counter--;
console.log("Counting to negative: " + counter);

// CONST
// const works just like let, except you CANNOT change the value

const year = 1973;
// year += 1; error
console.log(year);

const peopleCount = 10;
// let peopleCount = 3; // error

// VAR
// Before let & const, var was the only way of declaring variables.
var eggs = 12;
eggs++;
eggs = 0;
console.log(eggs);

// BOOLEAN
let isLoggedIn = true;
let gameOver = false;
const isWaterWet = true;

let isHungry = true;
isHungry = false;
console.log("Is Hungry? " + isHungry);

let isAngry = false;
// don't do that
isAngry = 1234;
console.log(isAngry);
