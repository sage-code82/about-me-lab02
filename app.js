console.log("Hello There!");

let username = prompt("Hello There! What is your name?");
console.log(username);

let welcome;

function kenobi() {
  welcome = "Hello " + username + " Welcome to the Book of Steve!";
  document.write(welcome);
}
function steveQuiz() {
  let q1 = Prompt("Is Steve 41?");

  if (q1 === true) {
    console.log("Yes!");
  } else {
    console.log("Wrong!");
  }

  let q2 = Prompt("Steve's Wife is called Kelly?");

  if (q2 === true) {
    console.log("Yes!");
  } else {
    console.log("Wrong!");
  }

  let q3 = Prompt("Steve supports Arsenal?");

  if (q3 === true) {
    console.log("Yes!");
  } else {
    console.log("Wrong!");
  }

  let q4 = Prompt("Steve Bloody Loves Star Wars");

  if (q4 === true) {
    console.log("Yes!");
  } else {
    console.log("Wrong!");
  }

  let q5 = Prompt("Kofi is named after an astronaught?");

  if (q5 === true) {
    console.log("Yes!");
  } else {
    console.log("Wrong!");
  }
}
