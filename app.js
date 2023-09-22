console.log("Hello There!");

("use strict");

let username = prompt("Hello There! What is your name?");
console.log(username);

let welcome;

function kenobi() {
  welcome = "Hello " + username + " Welcome to the Book of Steve!";
  document.write(welcome);
}

function steveQuiz() {
  let correctAnswers = 0;

  let yayOrNay = false;
  while (!yayOrNay) {
    let q1 = prompt("Is Steve 41?").toLowerCase();

    if (q1 === "yes" || q1 === "y") {
      correctAnswers++;
      alert("Yahtzee!");
      yayOrNay = true;
    } else if (q1 === "no" || q1 === "n") {
      alert("Wrong!");
      yayOrNay = true;
    } else {
      alert("This is not the way. Please enter 'yes' or 'no'.");
    }
  }
  yayOrNay = false;
  while (!yayOrNay) {
    let q2 = prompt("Steve's Wife is called Kelly?").toLowerCase();

    if (q2 === "yes" || q2 === "y") {
      correctAnswers++;
      alert("Yahtzee!");
      yayOrNay = true;
    } else if (q2 === "no" || q2 === "n") {
      alert("Wrong!");
      yayOrNay = true;
    } else {
      alert("This is not the way. Please enter 'yes' or 'no'.");
    }
  }
  yayOrNay = false;
  while (!yayOrNay) {
    let q3 = prompt("Steve supports Arsenal?").toLowerCase();
    if (q3 === "no" || q3 === "n") {
      correctAnswers++;
      alert("Yahtzee!");
      yayOrNay = true;
    } else if (q3 === "yes" || q3 === "y") {
      alert("Wrong!");
      yayOrNay = true;
    } else {
      alert("This is not the way. Please enter 'yes' or 'no'.");
    }
  }

  yayOrNay = false;
  while (!yayOrNay) {
    let q4 = prompt("Steve Bloody Loves Star Wars").toLowerCase();
    if (q4 === "yes" || q4 === "y") {
      correctAnswers++;
      alert("Yahtzee!");
      yayOrNay = true;
    } else if (q4 === "no" || q4 === "n") {
      alert("Wrong!");
      yayOrNay = true;
    } else {
      alert("This is not the way. Please enter 'yes' or 'no'.");
    }
  }

  yayOrNay = false;
  while (!yayOrNay) {
    let q5 = prompt("Kofi is named after an astronaught?").toLowerCase();

    if (q5 === "no" || q5 === "n") {
      correctAnswers++;
      alert("Yahtzee!");
      yayOrNay = true;
    } else if (q5 === "yes" || q5 === "y") {
      alert("Wrong!");
      yayOrNay = true;
    } else {
      alert("This is not the way. Please enter 'yes' or 'no'.");
    }
  }

  let kofiAge = parseInt(prompt("Take a guess... How old is my son Kofi?"));
  let userAttempts = 0;

  for (let i = 1; i < 4; i++) {
    userAttempts++;
    if (kofiAge > 3) {
      kofiAge = parseInt(prompt("Not quite, my Padawan is a bit younger"));
    } else if (kofiAge < 3) {
      kofiAge = parseInt(prompt("MOOOORRRRREEEE"));
    } else {
      correctAnswers++;
      alert("Good Gooooood ");
      break;
    }
  }

  if (userAttempts === 3 && kofiAge !== 3) {
    alert("You have failed me for the last time! The correct answer is 3.");
  } // if i type in the correct answer on the last guess it says it is wrong.

  let wineVisit = ["chile", "usa", "portugal", "france"];

  let wineQuestion = prompt(
    "While working in the Wine Industry I got to travel a bit, try and take a guess at any of the places I visited."
  ).toLowerCase();

  let wineAnswer = 0;

  for (let i = 1; i < 6; i++) {
    if (wineVisit.includes(wineQuestion)) {
      correctAnswers++;
      alert("Noice! Good job");
      break;
    } else {
      wineQuestion = prompt("Never heard of it").toLowerCase();
      wineAnswer++;
    }
  }

  if (wineAnswer === 5) {
    alert("Unlucky! I managed to visit this 4 places." + wineVisit.join(", "));
  } //if i type in the correct answer on the last guess it says it is wrong

  alert(
    username +
      " Well done" +
      ` you got ${correctAnswers} out of 7 correct answers!`
  );
}
