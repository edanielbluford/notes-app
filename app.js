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

const myNote = getNotes();

console.log(myNote);
