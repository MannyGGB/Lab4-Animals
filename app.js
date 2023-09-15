function welcome() {
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
function check() {
  let answer2;
  if (confirm("Do you really like animals?") == true) {
    answer2 = "Cool beans!";
  } else {
    answer2 = "Bummer.";
  }
  document.write(answer2);
}

function userRating() {
  let rating = prompt("How would you rate this website from 1 to 10?");
  while (!(rating >= 0 && rating <= 10)) {
    rating = prompt(
      "Sorry, that's not a valid rating. " +
        "How would you rate this website from 1 to 10?"
    );
  }
  for (i = 1; i <= rating; i++) {
    let counter = i;
    document.write(
      counter +
        "<img class='otter2' src= https://www.ephotozine.com/resize/2020/37/xlrg/325365_1600380227.jpg?RTUdGk5cXyJFAQgJSEc4egtnfAYYGkVUGwBdOh80SxgRBAAhdSMKY1dhB2osTU0LIjUVDw==/>"
    );
  }
  document.write(confirm("Check the bottom of the page!"));
}
