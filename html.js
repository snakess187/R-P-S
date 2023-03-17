var wins = 0;
var ties = 0;
var losses = 0;

var options = ["Rock", "Paper", "Scissors"];

const getUserChoice = function (userInput) {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors'){ 
    return userInput; 
  } else {
    console.log('invalid text');
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  
  switch (randomNumber){
    case 0:
      return 'rock' ;
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  } 
};
      
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    ties++;
    return "It was a Tie";
  }   
    
  if (userChoice === 'rock') {
    return (computerChoice === 'paper') ? "The computer won!" : "You won!"
  };
    
  if (userChoice === 'paper') {
    return (computerChoice === 'scissors') ? "The computer won!" : "You won!"
  };
    
  if (userChoice === 'scissors') {
    return (computerChoice === 'rock') ? "The computer won!" : "You won!"
  };
};

console.log(determineWinner(getUserChoice('rock'), getComputerChoice()));

 
    
