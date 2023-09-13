console.log("Hello World!")

//this is a comment
// variables
let myName = "Manuel";
let yourName = "Tim";
let myAge = 900;

//data types
let string = "Anything within quotes";
let number = 10;
let boolean = true; //or False

//prompt
// we ask the user a question
let response = prompt("Hey, what's your favourite animal?");

//we get the answer
console.log(response);

//if
let time = prompt("What is the time in 24h format?");
console.log(time)
if(time < 12) {
    console.log("Good morning");
} else if(time < 18) {
    console.log("Good afternoon");
} else {
    console.log("Good evening");
}

//concatenation
let username = prompt("What is your name?");
console.log("Hello " + username)

let message; // create a variable with no value yet
if(time < 12) {
    message("Good morning");
} else if(time < 18) {
    message("Good afternoon");
} else {
    message("Good evening");
}
message = "Hello " + username + ", " + message; // here we concatenated different prompts to print all the messages together
console.log(message)

// print messages on the page
// you need to add the <script> onto the html (for example, as a <h2>)
document.write(message); 