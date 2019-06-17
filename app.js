const fs = require("fs");

//fs.writeFileSync("notes.txt", "My Name is Ernest.");

//Challenge Append a message to notes.txt
//
//1. Use appendFileSync to append the file.
//2. Run the Script
//3. Check your work.

fs.appendFileSync("notes.txt", "Learning Node.js!");
