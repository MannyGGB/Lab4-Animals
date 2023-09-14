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
    message = "Good morning";
} else if(time < 18) {
    message = "Good afternoon";
} else {
    message = "Good evening";
}
message = "Hello " + username + ", " + message; // here we concatenated different prompts to print all the messages together
console.log(message)

// print messages on the page
// you need to add the <script> onto the html (for example, as an <h2>)
document.write(message); 

// functions are used to get an outcome and to save time by not repeating code
function getName () { // here we declare the function and will only run when we call it below
    let username = prompt("What is  your name?");
    document.write("Hello " + username); 
}
// now we invoke (call) the function, so it runs the code in {}
getName();

//we can add js in the HTML using <script>
<script>getName()</script> 

//You can include conditionals in a function
function askTime () {
    let time = prompt("What's the time?")
    let message; // create a variable with no value yet
    if(time < 12) {
        message = "Good morning";
    } else if(time < 18) {
        message = "Good afternoon";
    } else {
        message = "Good evening";
    }
    message = "Hello " + username + ", " + message; // here we concatenated different prompts to print all the messages together
    document.write(message)
}

// return --> we only add return + variable at the end of a function when we need the variable value outside of the function.
// function code only exists indide the function {}
// return is useful when a variable (let) was created only inside the function, but does not exist outside it.

function getPlayerName () {
    let userName = prompt("What's your name?")
    return userName
}

// Operators
+ - * / etc
// Expressions --> when we compare two things and evaluates a value
let a = 1 + 2
let b = 1 * 2
let c = 2 - 1
let d = 1 / 2
let e = 1 ** 2

// Comparators
// == equal to
// != not equal to
>
<
>=
<=
=== strictly equal to
!== strictly not equal to

// Comparisons
// a > b --> false (false is the value after being evaluated)
// </>c <= d
// d >= c

// Parameters
// They are inside the function brackets
function sum(num1, num2) {
    console.log(num1 + num2)
}

let a = prompt("Give me num1")
let b = prompt("Give me num2")

sum(a, b)

//Example of functions with return and parameters
//Parameters are placeholders in the function; arguments are the actual values for those parameters

function sum(a, b) {
    return a + b //here I am returning this parameters to be used outside this function
}

function greet () {
    console.log("You have " + sum(10,5) + " gold") // here I replaced the parameters with the arguments
}