import generateGreeting from "./greeting.js";
import fs from 'fs';
import readline from 'readline';

function updateFile(data) {
    // Read the contents of the file asynchronously
    fs.writeFile("output.txt", data, (err) => {
        if (err) {
            console.error("Error writing the file:", err);
            return;
        }
        // Display the file contents
        console.log("File contents: ", fs.readFileSync("output.txt", "utf8"));
    });
}

export default function app() {
    let fileData = fs.readFileSync("output.txt", "utf8")

    let rl = readline.createInterface(process.stdin, process.stdout);
    rl.setPrompt("Enter the name: ");
    rl.prompt();
    let message = "";
    rl.on('line', (age) => {
        message = generateGreeting(age);
        console.log(message)
        fileData = fileData + "\n" + message;
        updateFile(fileData)
        rl.close();
    })
};