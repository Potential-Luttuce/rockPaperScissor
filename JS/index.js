console.log('Hello, Mike!')
// open the window with Text "Are you feeling lucky" and default value "sure"
sign = window.prompt("Would you like to play RockPaperScissors?", "sure"); 

// TO DO //
 // function for computer to select object
// 1 rock, 2 paper, 3 scissors
function getComputerChoice () {
    let n = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (n == 1) {
         choice = 'rock';
    } else if (n == 2) {
        choice = 'paper';
    } else /*if (n == 3)*/ {
        choice = 'scissors'
    }
    console.log(`ComputerChoice is ${choice}`);
         /*console.log(`n is ${n}.`);*/
        // return choice;
}
getComputerChoice();


    // function for user to select object
/*function getUserChoice() {
    let choice = prompt('What will you choose?\n*ROCK~PAPER~SCISSORS*');

    if (choice.toLowerCase() != 'rock' || 'paper' || 'scissors') {
        console.log(`The user chose ${choice.toLowerCase()}`);
    } else {
         getUserChoice();
    }
        
} /* 

/*REVERT TO LAST GIT LOG
    commit c93a41f9cae04b65aebc351561ca251abfd95441 (HEAD -> main)
Author: Mike Cuesta <cuestamichael0@gmail.com>
Date:   Fri Apr 7 01:30:05 2023 -0400*/
//  getUserChoice();

    // function to play one round of game

    function playRound(userSelection, compSelection) {
        getUserChoice();

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

