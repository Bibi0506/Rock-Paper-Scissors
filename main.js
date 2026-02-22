//Game with a Player & BOT
//write a function that randomly returns rock, paper or scissors 

function getComputerChoice(){
    let choice = Math.random()
    if ( choice <= 0.33){
        return "rock"
    }else if(choice <=0.66){
        return "paper"
    }else if(choice > 0.66){
        return "scissors"
    }else{
        return "Choose between Rock, Paper, Scissors"
    }
}

console.log(getComputerChoice())

//take user choice and returns it

function getHumanChoice(){
    return window.prompt()
}

console.log(getHumanChoice())

//keep the score

let humanScore = 0
let computerScore = 0

//play a round
/* human and computer player choices as arguments, plays a single round, increments the round winner’s score and logs a winner announcement.
*/
function playRound(getComputerChoice, getHumanChoice){
    //play single round
    if(getComputerChoice == "rock" && getHumanChoice == "paper" || getComputerChoice == "scissors" && getHumanChoice == "rock"){
        return humanScore += 1
    }else if (getComputerChoice == "paper" && getHumanChoice == "rock" || getComputerChoice == "rock" && getHumanChoice == "scissors"){
        return computerScore += 1
    }else if(getComputerChoice == getHumanChoice){
        return "Tie!!"
    }

}
playRound()
console.log(humanScore)