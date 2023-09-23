console.log("Hello There!");

("use strict");

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
}

function myAge() {
  let ageAns = prompt("I am 21!").toLowerCase();
  if (ageAns === "no") {
    correctAnswer++;
    alert("Yahtzee!");
  } else if (ageAns !== "yes" && ageAns !== "no") {
    myAge(); // Repeat the question if the input is not "yes" or "no"
  } else {
    alert("Wrong!");
  }
}

function myMarriage() {
  let myMarAns = prompt("My wife is called Kelly?").toLowerCase();
  if (myMarAns === "yes") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (myMarAns !== "yes" && myMarAns !== "no") {
    myMarriage(); // Repeat the question if the input is not "yes" or "no"
  } else {
    alert("Wrong!");
  }
}

function mySpurs() {
  let spursAns = prompt("I support Arsenal").toLowerCase();
  if (spursAns === "no") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (spursAns !== "yes" && spursAns !== "no") {
    mySpurs(); // Repeat the question if the input is not "yes" or "no"
  } else {
    alert("Wrong!");
  }
}

function myStarWars() {
  let ansStar = prompt("I bloody love Star Wars.").toLowerCase();
  if (ansStar === "yes") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (ansStar !== "yes" && ansStar !== "no") {
    myStarWars(); // Repeat the question if the input is not "yes" or "no"
  } else {
    alert("Wrong!");
  }
}

function myKofi() {
  let kofiAns = prompt("Kofi is named after an astronaut").toLowerCase();
  if (kofiAns === "no") {
    alert("Yahtzee!");
    correctAnswer++;
  } else if (kofiAns !== "yes" && kofiAns !== "no") {
    myKofi(); // Repeat the question if the input is not "yes" or "no"
  } else {
    alert("Wrong!");
  }
}
