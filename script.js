// Rock Paper Scissors 

function rpsGame(yourChoice) {
    console.log (yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('computer Choice:', botChoice);
    results = decideWinner(humanChoice, botChoice); //[0,1] human lost | bot won.
    console.log(results);
    //massage = finalMassage(results);// {'massage' : 'you won!', 'color': 'green'}
    //rpsFrontEnd(yourChoice.id, botChoice, massage);
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