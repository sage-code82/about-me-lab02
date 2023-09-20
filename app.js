console.log("Hello There!");

("use strict");

let username = prompt("Hello There! What is your name?");
console.log(username); // add a while loop to here to stop them from pressing cancel 20.03.23

let welcome;

function kenobi() {
  welcome = "Hello " + username + " Welcome to the Book of Steve!";
  document.write(welcome);
}
// missing while loop this will force the user to say Yes or No from 20.0.23 recap

function steveQuiz() {
  let correctAnswers = 0;
  let q1 = prompt("Is Steve 41?"); // toLowerCase can also go here change this as over complicating my code

  if (q1.toLowerCase() === "yes" || q1.toLowerCase() === "y") {
    correctAnswers++;
    // console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    // console.log("Wrong!");
    alert("Wrong!");
  }

  let q2 = prompt("Steve's Wife is called Kelly?");

  if (q2.toLowerCase() === "yes" || q2.toLowerCase() === "y") {
    correctAnswers++;
    // console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    // console.log("Wrong!");
    alert("Wrong!");
  }

  let q3 = prompt("Steve supports Arsenal?");

  if (q3.toLowerCase() === "no" || q3.toLowerCase() === "n") {
    correctAnswers++;
    // console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    // console.log("Wrong!");
    alert("Wrong!");
  }

  let q4 = prompt("Steve Bloody Loves Star Wars");

  if (q4.toLowerCase() === "yes" || q4.toLowerCase() === "y") {
    correctAnswers++;
    // console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    // console.log("Wrong!");
    alert("Wrong!");
  }

  let q5 = prompt("Kofi is named after an astronaught?");

  if (q5.toLowerCase() === "no" || q5.toLowerCase() === "n") {
    correctAnswers++;
    // console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    // console.log("Wrong!");
    alert("Wrong!");
  }

  alert(
    username +
      " Well done" +
      ` you got ${correctAnswers} out of 5 correct answers!`
  );
}
