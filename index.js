import readline from 'readline';
import zip from './zip.js';
import parser from './parser.js';
import mailsender from './mailsender.js';

console.log('Start page parsing...');
parser();

console.log('Zipping file..');
zip();


console.log('Preparing to send file via email...');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your email recipement: ", (answer) => mailsender(answer));