function welcome () {
  let answer = prompt("Welcome! What's your name?"); 
let message;
let animal = prompt("Do you like animals?");
if (animal == "Yes") {
   message = "you'll love it here!";
} else if (animal == "No") {
   message = "get out of here!";
} else {
  prompt("Error! Please, answer Yes or No (use capital letters).");
  message = "Thank you!";
}

message = "Hello " + answer + ", " + message;
document.write(message);
}
function check () {
let answer2;
if (confirm("Do you really like animals?") == true) {
  answer2 = "Cool beans!";
} else {
  answer2 = "Bummer.";
}
document.write(answer2)
}
