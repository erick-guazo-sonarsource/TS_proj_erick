"use strict";
function executeUserInput(userInput) {
    try {
        eval(userInput); // Potentially dangerous!
    }
    catch (error) {
        console.error("Error executing user input:", error);
    }
}
const userInput = "console.log('Hello from user input!');";
executeUserInput(userInput);
const maliciousInput = "require('fs').unlinkSync('important_file.txt');";
//executeUserInput(maliciousInput); // Don't actually run this unless you know what you are doing.
