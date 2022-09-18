//Player's choice
let playerChoice = {
    selection: null
  };
  //Computer's choice
  let computerChoice = {
    selection: null
  };
  //All options in the game
  const gameOptions = ["Lapis", "Papyrus", "Scalpellus"];
  //Generating a random number and assigning computers choice to that value
  function computerChooses() {
    computerChoice.selection = gameOptions[Math.floor(Math.random() * 3)];
  }
  
  //Taking players click and turning into their selection
  function playerChooses(e) {
    playerChoice.selection = e.target.innerHTML;
    document.querySelector('#play').removeAttribute('disabled')
    document.querySelector('h2').innerHTML = "You have chosen " + playerChoice.selection + ". Press Play to try your luck!";
    computerChooses();
  }
  
  document.querySelector("#lap").addEventListener('click', playerChooses);
  document.querySelector("#pap").addEventListener('click', playerChooses);
  document.querySelector("#sca").addEventListener('click', playerChooses);
  let playerScore = 0;
  let computerScore = 0;
  function updateScoreboard(victor){
    if(victor === "player") {
      playerScore++;
      document.querySelector('#playerScore').innerHTML = playerScore;
    } else {
      computerScore++
      document.querySelector('#computerScore').innerHTML = computerScore;
    }
  }
  
  //Comparing and deciding what happens based on options selected
  function compareChoices() {
    document.querySelector('#play').setAttribute('disabled', 'disabled');
     //If game ends in a tie
    if (playerChoice.selection === computerChoice.selection) {
      //Changing on screen to reflect result
      document.querySelector('#result').innerHTML = "This game is a tie. Both the Player and the Computer chose " + computerChoice.selection;
      //If player picks Lapis and computer picks Papyrus
    } else if (playerChoice.selection === gameOptions[0] && computerChoice.selection === gameOptions[1]) {
      //Reflecting the result on screen
      document.querySelector('#result').innerHTML = "The Computer wins! The Computer chose " + computerChoice.selection + " and the Player chose " + playerChoice.selection + ".";
      updateScoreboard("computer");
      //If player picks Papyrus and computer picks Scalpellus
    } else if (playerChoice.selection === gameOptions[1] && computerChoice.selection === gameOptions[2]) {
      //Reflecting result on screen
      document.querySelector('#result').innerHTML = "The Computer wins! The Computer chose " + computerChoice.selection + " and the Player chose " + playerChoice.selection + ".";
      updateScoreboard("computer");
      //If player picks Scalpellus and computer picks Lapis
    } else if (playerChoice.selection === gameOptions[2] && computerChoice.selection === gameOptions[0]) {
      //Reflecting on screen
      document.querySelector('#result').innerHTML = "The Computer wins! The Computer chose " + computerChoice.selection + " and the Player chose " + playerChoice.selection + ".";
      updateScoreboard("computer");
      //All other scenarios (Player should win)
    } else {
      //Reflecting on screen
      document.querySelector('#result').innerHTML = "The Player wins! The Computer chose " + computerChoice.selection + " and the Player chose " + playerChoice.selection + ".";
      updateScoreboard("player");
    }
  }
  
  //Actually calling on Compare Choices when play button is clicked
    document.querySelector('#play').addEventListener('click', compareChoices);
    
  //compareChoices();
  