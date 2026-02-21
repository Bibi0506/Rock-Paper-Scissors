//Game with a Player & BOT
//write a function that randomly returns rock, paper or scissors 

function getComputerChoice(){
    choice = Math.random()
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