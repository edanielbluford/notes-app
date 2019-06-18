const add = require("./utils.js");

const sum = add(4, -2);

console.log(sum);

// Challenge.  Define and use a function in a new file.
//
//Create a new file called notes.js
//Create a getNotes function that returns "Your notes...."
//Export Get Notes function
//From app.js, load in and call the function printing a message to the console

const getNotes = require("./notes.js");

const msg = getNotes();

console.log(msg);

//
//Challenge: Use the chalk library in your project
//1. Install version 2.4.1 of chalk.
//2. Load Chalk into app.js
//3. Use it to print the sting "Success" to the console in green.
//4. Test your work

//
//Bonus: Use docs to mess around with other string styles. Make text bold and inversed.
const chalk = require("chalk");
const greenMsg = chalk.green("Success!");
const boldMsg = chalk.bold("Hello!");
const inverseMsg = chalk.inverse("Spooky!");
const inverseMsg2 = chalk.inverse(greenMsg);
console.log(greenMsg);
console.log(boldMsg);
console.log(inverseMsg);
console.log(inverseMsg2);
