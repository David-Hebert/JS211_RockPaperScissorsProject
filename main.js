const rockPaperScissors = (handLeft, handRight) => {
  handRight = document.getElementById("user2-input").value.toLowerCase();
  handLeft = document.getElementById("user-input").value.toLowerCase();
  handRight = document.getElementById("user2-input").value.toLowerCase();


  if (handLeft == "" && handRight == "") {
    document.getElementById("winner").innerHTML = "Enter Rock, Paper, or Scissors";
    document.getElementById("left-hand").innerHTML = "🤜";
    document.getElementById("right-hand").innerHTML = "🤛";

  } else if (handLeft == handRight) {
    document.getElementById("winner").innerHTML = "It's a tie"
    document.getElementById("left-hand").innerHTML = "👁️";
    document.getElementById("right-hand").innerHTML = "👁️";

  } else if (handLeft == "rock") {
    document.getElementById("left-hand").innerHTML = "🤘";

    if (handRight == "scissors") {
      document.getElementById("right-hand").innerHTML = "✂️";
      document.getElementById("winner").innerHTML = "And The Winner Is: Player One"

    } else if (handRight == "paper") {
      document.getElementById("right-hand").innerHTML = "✋"
      document.getElementById("winner").innerHTML = "And The Winner Is: Player Two"
    }

  } else if (handLeft == "paper") {
    document.getElementById("left-hand").innerHTML = "✋";

    if (handRight == "rock") {
      document.getElementById("right-hand").innerHTML = "🤘";
      document.getElementById("winner").innerHTML = "And The Winner Is: Player One"

    } else if (handRight == "scissors") {
      document.getElementById("right-hand").innerHTML = "✋"
      document.getElementById("winner").innerHTML = "And The Winner Is: Player Two"

    }

  } else if (handLeft == "scissors") {
    document.getElementById("left-hand").innerHTML = "✋"

    if (handRight == "paper") {
      document.getElementById("right-hand").innerHTML = "✋"
      document.getElementById("winner").innerHTML = "And The Winner Is: Player One"

    } else if (handRight == "rock") {
      document.getElementById("right-hand").innerHTML = "🤘";
      document.getElementById("winner").innerHTML = "And The Winner Is: Player Two"
    }
};}


// // the first function called in the program to get an input from the user
// // to run the function use the command: node main.js
// // to close it ctrl + C
// function getPrompt() {
//   rl.question('handLeft: ', (answer1) => {
//     rl.question('handRight: ', (answer2) => {
//       console.log( rockPaperScissors(answer1, answer2) );
//       getPrompt();
//     });
//   });
// }

// // Unit Tests
// // You use them run the command: npm test main.js
// // to close them ctrl + C
// if (typeof describe === 'function') {

//   // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
//   describe('#rockPaperScissors()', () => {
//     it('should detect a tie', () => {
//       assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
//       assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
//       assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
//     });
//     it('should detect which hand won', () => {
//       assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
//       assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
//     });
//     it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
//       assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
//       assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
//       assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
//     });
//   });
// } else {

//   // always returns ask the user for another input
//   getPrompt();

// }
