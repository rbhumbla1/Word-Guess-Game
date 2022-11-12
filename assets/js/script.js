var timeRem = document.getElementById('timeRem');
var wordTxt = document.getElementById('word');
var statsTxt = document.getElementById('stats');
var timerBtn = document.querySelector("#timerBtn");
var resetBtn = document.querySelector("#resetBtn");
var winner = document.querySelector("h3");
var timeLeft = 5;
var wLen = 0;
var gTries = 0;
var gWins = 0;
var gLosses = 0;
var counter = 0;

var words = ["string","javascript","html", "stylesheet", "document"];
var word = ""; //hard coding for testing
var wArr = [];
var kArr = [];

function countdown(event) {

  event.stopPropagation();

 

  if(gTries < 5){
    counter = gTries;
  }else{
    counter = gTries % 5;
  }

   //increment tries count
   gTries++;

  console.log(counter);

  word = words[counter];
  wArr = word.split('');

  kArr = Array(wArr.length).fill('-');
  wordTxt.textContent = (kArr.join(""));

  winner.textContent = "";
  
  // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {

    if (timeLeft === 0) {
      console.log("timer done");
      // Stops execution of action at set interval
      clearInterval(timeInterval);
      timeLeft = 5;
      timeRem.textContent = "Press Start button for another round.";
      // Calls function to update stats
      displayResults();
    } else {
      console.log("timer left");
      timeLeft--;
    timeRem.textContent =  timeLeft + " seconds remaining.";
      getUserInput();
    }
  }, 1000);
}

function displayResults() {
  console.log("in displayResults");

  if(kArr.join('') === word){
    gWins++;
  
    winner.dataset.state = "visible";
    winner.textContent = "You Win!🏆";
  }
  else{
    gLosses++;
    winner.textContent = "Game Over";
  }
  //statsTxt.textContent = "Stats:<br />Wins:" + gWins + "<br />Losses:" + gLosses + "<br />Tries:" + gTries;
  document.querySelector('#win').textContent = "Wins: " + gWins;
  document.querySelector('#loss').textContent = "Loses: " + gLosses;
 // document.querySelector('#tries').textContent = "Tries: " + gTries;

}

// capture the key as the user is typing and compare with word.  
//If a character amtch - add it to the screen at the correct position
function getUserInput(event) {
  var key = event.key;

  console.log("in getuserinput");
  event.preventDefault();
    for (var i = 0; i < wArr.length; i++) {
      if (key === wArr[i])
        kArr[i] = key;
    }
    wordTxt.textContent = kArr.join("");

    if(kArr.join('') === word){
      timeLeft = 0;
    }

}

function resetStats(){
  gWins = 0;
  gLosses = 0;

  document.querySelector('#win').textContent = "Wins: " + gWins;
  document.querySelector('#loss').textContent = "Loses: " + gLosses;
  timeRem.textContent = "";
}

wordTxt.textContent = "ja--s-r--t";
timeRem.textContent = "Click Start button to play.";
timerBtn.addEventListener("click", countdown);

resetBtn.addEventListener("click", resetStats);

window.addEventListener("keydown", getUserInput);


