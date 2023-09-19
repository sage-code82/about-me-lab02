console.log("Hello There!");

let username = prompt("Hello There! What is your name?");
console.log(username);

let welcome;

function kenobi() {
  welcome = "Hello " + username + " Welcome to the Book of Steve!";
  document.write(welcome);
}

function steveQuiz() {
  let q1 = prompt("Is Steve 41?");

  if (q1.toLowerCase() === "yes" || "y") {
    console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    console.log("Wrong!");
    alert("Wrong!");
  }

  let q2 = prompt("Steve's Wife is called Kelly?");

  if (q2.toLowerCase() === "yes" || "y") {
    console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    console.log("Wrong!");
    alert("Wrong!");
  }

  let q3 = prompt("Steve supports Arsenal?");

  if (q3.toLowerCase() === "no" || "n") {
    console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    console.log("Wrong!");
    alert("Wrong!");
  }

  let q4 = prompt("Steve Bloody Loves Star Wars");

  if (q4.toLowerCase() === "yes" || "n") {
    console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    console.log("Wrong!");
    alert("Wrong!");
  }

  let q5 = prompt("Kofi is named after an astronaught?");

  if (q5.toLowerCase() === "no" || "n") {
    console.log("Yahtzee!");
    alert("Yahtzee!");
  } else {
    console.log("Wrong!");
    alert("Wrong!");
  }
}
