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
        playRound(userChoice, compChoice);
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
         compChoice = 'ROCK';
    } else if (n == 2) {
        compChoice = 'PAPER';
    } else /*if (n == 3)*/ {
        compChoice = 'SCISSORS'
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
    // function to play one round of game
    function playRound(userSelection, compSelection) {
        userSelection = userSelection.toLowerCase();
        compSelection = compSelection.toLowerCase();
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

        if (loss == true) {
            document.getElementById("winnerMessage").innerHTML = messageRound;
            document.getElementById("winner").innerHTML = "COMPUTER";
        } else if (loss == 'tie') {
            document.getElementById("winnerMessage").innerHTML = "...";
            document.getElementById("winner").innerHTML = "Tie!";
        } else {
            document.getElementById("winnerMessage").innerHTML = messageRound;
            document.getElementById("winner").innerHTML = "YOU!";
        }
    }
    //  Compares answers & prints winner