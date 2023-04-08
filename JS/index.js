console.log('Hello, Mike!')
// open the window with Text "Are you feeling lucky" and default value "sure"
// sign = window.prompt("Would you like to play RockPaperScissors?", "sure"); 

// TO DO //
 // function for computer to select object
// 1 rock, 2 paper, 3 scissors
let compchoice;
let n;
function getComputerChoice () {
    n = Math.floor(Math.random() * 3) + 1;
    if (n == 1) {
         compChoice = 'rock';
         return 'rock';
    } else if (n == 2) {
        compChoice = 'paper';
    } else /*if (n == 3)*/ {
        compChoice = 'scissors'
    }
    console.log(`Computer Choice is ${compChoice}`);
         /*console.log(`n is ${n}.`);*/
        // return choice;
}
// getComputerChoice();

    // function for user to select object
    //this is a silly way to do it but it works
let userChoice;
function rock() {
        // one user clicks button
        document.getElementById("userSelection").innerHTML = "Player Selected ROCK";
        userChoice = 'rock';
        console.log(`User Selected ${userChoice}.`)
        getComputerChoice();
        playRound(userChoice, compChoice);
} 
function paper() {
    // one user clicks button
    userChoice = 'paper';
    document.getElementById("userSelection").innerHTML = "Player Selected PAPER";
    console.log(`User Selected ${userChoice}.`)
    getComputerChoice();
    playRound(userChoice, compChoice);
} 
function scissors() {
    // one user clicks button
    userChoice = 'scissors';
    document.getElementById("userSelection").innerHTML = "Player Selected SCISSORS";
    getComputerChoice();
    playRound(userChoice, compChoice);
} 

    // Display Choices function //
  
    // function to play one round of game

    function playRound(userSelection, compSelection) {

        if (userSelection == compSelection) {
            console.log('Tie!');
        } else if (userSelection == 'rock' && compSelection == 'paper') {
            console.log('You lose! Paper covers Rock!');
        } else if (userSelection == 'rock' && compSelection == 'scissors') {
            console.log('You win! Rock crushes Scissors!');
        }  else if (userSelection == 'paper' && compSelection == 'scissors') {
            console.log('You lose! Scissor cuts Paper!');
        } else if (userSelection == 'paper' && compSelection == 'rock') {
            console.log('You win! Paper covers Rock!');
        } else if (userSelection == 'scissors' && compSelection == 'rock') {
            console.log('You Lose! Rock Crushes Scissors');
        } else if (userSelection == 'scissors' && compSelection == 'paper') {
            console.log('You win! Scissor cuts Paper!');
        }
    }
    //  Compares answers & prints winner

