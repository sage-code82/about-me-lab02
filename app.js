console.log("Hello There!");

("use strict");

let username;
let correctAnswer = 0;

username = prompt("Hello There! What is your name?");
console.log(username);

let welcome;

function kenobi() {
  welcome = "Hello " + username + " Welcome to the Book of Steve!";
  document.write(welcome);
}

function quizButt() {
  let start = confirm("Never tell me the odds! Punch it");

  if (start === true) {
    steveQuiz();
  } else {
    alert("Goodfly!");
    return;
  }
}

function steveQuiz() {
  myAge();
  myMarriage();
  mySpurs();
  myStarWars();
  myKofi();
  numberGuess();
  tableTop();
}

function myAge() {
  let ageAns = prompt("I am 21!").toLowerCase();

  if (ageAns === "no" || ageAns === "n") {
    correctAnswer++;
    alert("Yahtzee!");
  } else if (ageAns === "yes" || ageAns === "y") {
    alert("Wrong!");
  } else {
    alert("This is not the way. Please use 'yes', 'no'");
    myAge();
  }
}

function myMarriage() {
  let myMarAns = prompt("My wife is called Kelly?").toLowerCase();

  if (myMarAns === "yes" || myMarAns === "y") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (myMarAns === "no" || myMarAns === "n") {
    alert("Wrong!");
  } else {
    alert("This is not the way. Please use 'yes', 'no'");
    myMarriage();
  }
}

function mySpurs() {
  let spursAns = prompt("I support Arsenal").toLowerCase();

  if (spursAns === "no" || spursAns === "n") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (spursAns === "yes" || spursAns === "y") {
    alert("Wrong!");
  } else {
    alert("This is not the way. Please use 'yes', 'no'");
    mySpurs();
  }
}

function myStarWars() {
  let ansStar = prompt("I bloody love Star Wars.").toLowerCase();

  if (ansStar === "yes" || ansStar === "y") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (ansStar === "no" || ansStar === "n") {
    alert("Wrong!");
  } else {
    alert("This is not the way. Please use 'yes' or 'no'");
    myStarWars();
  }
}

function myKofi() {
  let kofiAns = prompt("Kofi is named after an astronaut").toLowerCase();

  if (kofiAns === "no" || kofiAns === "n") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (kofiAns === "yes" || kofiAns === "y") {
    alert("Wrong!");
  } else {
    alert("This is not the way. Please use 'yes' or 'no'");
    myKofi();
  }
}

function numberGuess() {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  let guess;

  for (let i = 1; i <= 4; i++) {
    guess = parseInt(
      prompt("Use your Sith Powers to guess what number I am thinking!")
    );

    if (isNaN(guess) || guess < 1 || guess > 10) {
      alert("Guess a number between 1 and 10.");
    } else if (guess < randomNumber) {
      alert("MMOOOORRRREEE");
    } else if (guess > randomNumber) {
      alert("Guess Lower You Must!");
    } else {
      correctAnswer++;
      alert("Goooood Gooooood");
      break;
    }

    if (i === 4) {
      alert(
        `There is still much for you to learn! The correct number was ${randomNumber}.`
      );
    }
  }
}

function tableTop() {
  let myGames = ["shatterpoint ", " infinity ", " age of sigmar ", "warhammer"];

  let gamesAnswer = prompt(
    "I love tabletop games, do you think you could name one of my faves?"
  ).toLowerCase();
  let answerAttempt = 0;

  for (let i = 1; i <= 5; i++) {
    answerAttempt++;
    if (myGames.indexOf(gamesAnswer) < 0) {
      gamesAnswer = prompt("Do you even game bro?").toLowerCase();
    } else {
      correctAnswer++;
      alert("Spot on lets chuck dice some time!");
      break;
    }
  }

  if (answerAttempt > 4) {
    alert(`Whoops! You could of chosen any of these! ${myGames}`);
  }
}
