    //Creating Rock, Paper, Scissor Game
    
    let playerScore = 0;
    let computerScore = 0;
    let drawScore = 0;

    while (playerScore < 3 && computerScore < 3) {   

    let compChoice = ['ROCK', 'PAPER', 'SCISSOR'];
    let playerChoice;
    
    function getComputerChoice(){ //getting Computer choice
      let randomNumber = Math.floor(Math.random() * compChoice.length); 
      compChoice = compChoice[randomNumber];
      //console.log("Computer selected: " + `${compChoice}`);
    }

    function getPlayerChoice(){ //getting Player choice
      playerChoice = prompt("Please choose between Rock, Paper or Scissor ");
      playerChoice = playerChoice.toUpperCase();
      //console.log("You selected: " + `${playerChoice}`);
    }

    let winner = function playRound(playerChoice, compChoice) { //play round
      if (playerChoice === compChoice) {
      console.log("It's a Draw");
      drawScore++
    }
      else {
        if ((playerChoice === 'ROCK' && compChoice === 'SCISSOR') ||
        (playerChoice === 'SCISSOR' && compChoice === 'PAPER') ||
        (playerChoice === 'PAPER' && compChoice === 'ROCK')){
        console.log("You Win! " + `${playerChoice}` + " beats " + `${compChoice}`);
        playerScore++
    } 
      
      else {
        console.log("You Lose! " + `${compChoice}` + " beats " +  `${playerChoice}`);
        computerScore++
      }   
    }
   } 

      getComputerChoice();
      getPlayerChoice();

      winner(playerChoice, compChoice);
   
}
   
      console.log("It was draw " + `${drawScore}` + " time(s)");

   if (playerScore == 3) { //declare a final winner
        console.log("You are a winner, you scored: " + `${playerScore}`);
   } else {    
        console.log("Computer win, he scored: " + `${computerScore}`);
   } 
