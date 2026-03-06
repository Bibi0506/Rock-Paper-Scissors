//Game with a Player & BOT
//write a function that randomly returns rock, paper or scissors 
const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

function getComputerChoice(choice){
    choice = Math.floor(Math.random() * 3)
    if ( choice == 0){
        return "rock"
    }else if(choice == 1){
        return "paper"
    }else{
        return "scissors"
    }
}

//take user choice and returns it

function getHumanChoice(){
    return window.prompt()
}


//keep the score

let humanScore = 0
let computerScore = 0

//play a round
/* human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
*/
function playRound(getComputerChoice, getHumanChoice){
    //play single round
    if(getComputerChoice === "rock" && getHumanChoice === "paper"){
        return humanScore += 1
    } else if(getComputerChoice === "scissors" && getHumanChoice === "rock"){
        return humanScore += 1
    }else if (getComputerChoice === "paper" && getHumanChoice === "rock" || getComputerChoice === "rock" && getHumanChoice === "scissors"){
        return computerScore += 1
    }else if(getComputerChoice === getHumanChoice){
        return "Tie!!"
    }
}


playRound(humanSelection, computerSelection)
console.log(humanScore)
console.log(computerScore)
