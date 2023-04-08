console.log('Hello, Mike!')
// open the window with Text "Are you feeling lucky" and default value "sure"
// sign = window.prompt("Would you like to play RockPaperScissors?", "sure"); 
    
// TO DO //
        //RESET //

    // function for user to select object  //this is a silly way to do it but it works
let userChoice;
function rock() {
        document.getElementById("userSelection").innerHTML = "Player Selected: ROCK";
        userChoice = 'rock';
        console.log(`User Selected ${userChoice.toUpperCase()}.`)
        getComputerChoice();
        playRound(userSelection, compSelection);
} 
function paper() {
    userChoice = 'paper';
    document.getElementById("userSelection").innerHTML = "Player Selected: PAPER";
    console.log(`User Selected ${userChoice.toUpperCase()}.`)
    getComputerChoice();
    playRound(userChoice, compChoice);
} 
function scissors() {
    userChoice = 'scissors';
    document.getElementById("userSelection").innerHTML = "Player Selected: SCISSORS";
    console.log(`User Selected ${userChoice.toUpperCase()}.`)
    getComputerChoice();
    playRound(userChoice, compChoice);
} 

// function for computer to select object
// 1 rock, 2 paper, 3 scissors
let compChoice;
let n;
function getComputerChoice () {
    n = Math.floor(Math.random() * 3) + 1;
    if (n == 1) {
         compChoice = 'rock';
    } else if (n == 2) {
        compChoice = 'paper';
    } else /*if (n == 3)*/ {
        compChoice = 'scissors'
    }
    console.log(`Computer Choice is ${compChoice}`);
    console.log(`n is ${n}`);
    document.getElementById("compSelection").innerHTML = `Computer Selected: ${compChoice}`;
}

    // add border at click to images //
    /*/ add border at click to images //***** */
    function mark(el) {
        //puts a blue border around image
        el.style.border = "10px solid blue";
    }
    // function imageBorder(el) {
    //     el.style.border = "2px solid rgb(75, 145, 202)";
    // }
    // function mark(ID) { //creates border
    //     document.getElementById(ID).style.border="4px solid orange";
    // }
    // Change color of text (replacing border idea for now) //
    let loss = false;
    function winnerColor(ID) {
        if (loss == true) {
            document.getElementById(ID).style.color = '#8f3030';
        } else if (loss == false) {
            document.getElementById(ID).style.color = '#4b91ca';
        } else {
            document.getElementById(ID).style.color = '#3f46g4';
        }
    }

     /// Full game function ///
     ///first to 5
     let userScore = 0;
     let compScore = 0;
      function game() { // yes this is silly so be it
        if (userScore == 5) {
            document.getElementById('userSelection').innerHTML = `Player Wins! :D`;
            document.getElementById('userSelection').style.fontSize = '35px';
            document.getElementById('compSelection').style.display = 'none';
            document.getElementById('winnerMessage').style.display = 'none';
            document.getElementById('rockButton').style.display = 'none';
            document.getElementById('paperButton').style.display = 'none';
            document.getElementById('scissorsButton').style.display = 'none';
            document.getElementById('winner').innerHTML = 'Congratulations!';
        } else if (compScore == 5) {
            document.getElementById('compSelection').innerHTML = `Computer Wins! [._.]`;
            document.getElementById('compSelection').style.fontSize = '35px';
            document.getElementById('userSelection').style.display = 'none';
            document.getElementById('winnerMessage').style.display = 'none';
            document.getElementById('rockButton').style.display = 'none';
            document.getElementById('paperButton').style.display = 'none';
            document.getElementById('scissorsButton').style.display = 'none';
            document.getElementById('winner').innerHTML = 'Better Luck Next Time!';
        }
      }

    // function to play one round of game
    //  Compares answers & prints winner
    let currentRound;
    function playRound(userSelection, compSelection) {
        let messageRound = 'The winner is...';
        if (userSelection == compSelection) {
            console.log('Tie!');
            loss = 'tie';
        } else if (userSelection == 'rock' && compSelection == 'paper') {
            console.log('You lose! Paper covers Rock!');
            loss = true;
        } else if (userSelection == 'rock' && compSelection == 'scissors') {
            console.log('You win! Rock crushes Scissors!');
            loss = false;
        }  else if (userSelection == 'paper' && compSelection == 'scissors') {
            console.log('You lose! Scissor cuts Paper!');
            loss = true;
        } else if (userSelection == 'paper' && compSelection == 'rock') {
            console.log('You win! Paper covers Rock!');
            loss = false;
        } else if (userSelection == 'scissors' && compSelection == 'rock') {
            console.log('You Lose! Rock Crushes Scissors');
            loss = true;
        } else if (userSelection == 'scissors' && compSelection == 'paper') {
            console.log('You win! Scissor cuts Paper!');
            loss = false;
        }

        if (loss == true) { //Computer wins
            document.getElementById("winnerMessage").innerHTML = messageRound;
            document.getElementById("winner").innerHTML = "COMPUTER";
            compScore++;
            document.getElementById('compScore').innerHTML = ` ${compScore}`;
            currentRound = userScore + compScore;
            document.getElementById('roundDisplay').innerHTML = `Round ${currentRound}`;
            console.log(`user score = ${userScore}`);
            console.log(`comp Score = ${compScore}`);
            console.log(`loss = ${loss}`);
        } else if (loss == 'tie') { //Tie outcome
            document.getElementById("winnerMessage").innerHTML = "...";
            document.getElementById("winner").innerHTML = "Tie!";
            currentRound = userScore + compScore;
            document.getElementById('roundDisplay').innerHTML = `Round ${currentRound}`;
            console.log(`user score = ${userScore}`);
            console.log(`comp Score = ${compScore}`);
            console.log(`loss = ${loss}`);
        } else { // Player/user wins
            document.getElementById("winnerMessage").innerHTML = messageRound;
            document.getElementById("winner").innerHTML = "YOU!";
            userScore++;
            document.getElementById('userScore').innerHTML = ` ${userScore}`;
            currentRound = userScore + compScore;
            document.getElementById('roundDisplay').innerHTML = `Round ${currentRound}`;
            console.log(`user score = ${userScore}`);
            console.log(`comp Score = ${compScore}`);
            console.log(`loss = ${loss}`);
        }
        game();
        //show reset button end of game 
        document.getElementById('resetButton').style.display = 'block';
    }