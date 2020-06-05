// Rock Paper Scissors 

function rpsGame(yourChoice) {
    console.log (yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('computer Choice:', botChoice);
    
    results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won.
    console.log(results);
    
    massage = finalMassage(results);// {'massage' : 'you won!', 'color': 'green'}
    console.log(massage);
    
    rpsFrontEnd(yourChoice.id, botChoice, massage);
}

function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ["rock", "paper", "scissors"] [number];
}

function decideWinner (yourChoice, computerChoice) {
    var rpsDatabase = {
        'rock' : {'scissors' : 1, 'rock' : 0.5, 'paper' : 0},
        'paper' : {'scissors' : 0, 'rock' : 1, 'paper' : 0.5},
        'scissors' : {'scissors' : 0.5, 'rock' : 0, 'paper' : 1},
    };
    
    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    
    return [yourScore, computerChoice];
}

function finalMassage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'massage': 'You lost!', 'color': 'red'};        
    } else if (yourScore === 0.5) {
        return {'massage': 'You Tied!', 'color': 'yellow'};
    } else {
        return {'massage': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMassage) {
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src 
    }
//remove all images.    
    document.getElementById('rock').remove(); 
    document.getElementById('paper').remove(); 
    document.getElementById('scissors').remove(); 

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var massageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + " ' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
  botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + " ' height=150 width=150 style= 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
      
  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}










