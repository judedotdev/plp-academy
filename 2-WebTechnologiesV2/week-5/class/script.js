// CONTROL STRUCTURES

// A. CONDITIONAL STATEMENTS

let age = 21;

// 1. if statement
if (age >= 18) {
    console.log('You are an adult');
}


// 2. if ... else
let gender = 'Male'
if (gender === 'Male') {
    // true outcome
    console.log('You are an man.');
} else {
    // false outcome
    console.log('You are a woman.');
}

// 3. Ternary Operator (Short Hand of the IF ... ELSE)

// var message = (condition) ? "true" : "false";
var message = (age < 18) ? "You are a minor" : "You are an adult";
console.log(message);

// 4. if .. else if statement
let score = 50;
if (score > 20 && score <= 40) {
    // true outcome based on the condition
    console.log('Poor Performance');
} else if (score > 40 && score <= 60) {
    // true outcome based on the condition
    console.log('Average performance');
} else if (score > 60 && score <= 80) {
    // true outcome based on the condition
    console.log('Good performance');
} else if (score > 80) {
    // true outcome based on the condition
    console.log('Excellent performance');
} else {
    // false outcome
    console.log('You have failed');
}

// 5. switch statement
let fruit = "apple";

switch (fruit) {
    case "apple":
        console.log("You have an apple");
        break;
    case "banana":
        console.log("You have a banana");
        break;
    case "orange":
        console.log("You have an orange");
        break;
    default:
        console.log("Unknown fruit");
        break;
}


function getDay(day) {
    switch (day) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default:
            return "Unknown day"
    }
}
console.log(getDay(0));
console.log(getDay(2));
console.log(getDay(8));

// B. LOOPS

// 1. For Loop
let array = [];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
}

let myName = "Jude";
for (let i = 0; i < myName.length; i++) {
    console.log(myName[i]);
}

// 2. While Loop
let a = 0;
while (a < 10) {
    console.log(a);
    a++;
}

while (a < 10) {
    console.log(a);
    if (a == 5) { break }
    a++;
}

/**
 * 3. Do-While Loop
 * This is an exit controlled loop - the condition comes after the code execution
 * Gurantees that your code / statement will be executed at least once,
 * even if the statement is false (condition fails)
 * because the code comes after the execution
 * The do...while loop will execute the code block once before checking the condition,
 * and then continue as long as the condition is true.
 */


let b = 5;
// b = 0; --> console shows 0 - 4
do {
    console.log(`Loop Number: ${b}`);
    b++;
} while (b < 5);

/**
 * During your free time check:
 * for ... in
 * for ... of
 */


/**
 * LET'S REVISIT ARRAYS
 * Methods:
 * push() - add an item to the end of an array
 * unshift() - add an item to the beginning
 * pop() - removes item from end
 * shift() - removes item from beginning
 * Access items in an array by using the index
 * forEach() - loops through all the items in the array
 */

let cutlery = ['spoon', 'fork']
console.log(cutlery)
cutlery.push('knife')
console.log(cutlery)
cutlery.unshift('spatula')
console.log(cutlery)
cutlery.pop()
console.log(cutlery)
cutlery.shift()
console.log(cutlery)

// forEach()
cutlery.forEach(function(item) {
    console.log(item);
})

/**
 * Find odd numbers in an array
 * 1. Loop through array items
 * 2. modulus operator - item % 2 === 0 ? even number : odd number
 * Note: modulus returns the remainder of the division
 */
