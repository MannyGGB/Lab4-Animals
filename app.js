let answer = prompt("Welcome! What's your name?");
console.log(answer);
let message;
let animal = prompt("Do you like animals?");
if (animal == "Yes") {
   message = "you'll love it here!";
} else if (animal == "No") {
   message = "get out of here!";
}
message = "Hello " + answer + ", " + message;
document.write(message);

let answer2;
if (confirm("Do you really like animals?") == true) {
  answer2 = "Cool beans!";
} else {
  answer2 = "Bummer.";
}
console.log(answer2)
