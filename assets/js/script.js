var timeRem = document.getElementById('timeRem');
var wordTxt = document.getElementById('word');
var statsTxt = document.getElementById('stats');
var timerBtn = document.querySelector("#timerBtn");
var winner = document.querySelector("h3");
var timeLeft = 5;
var wLen = 0;
var gTries = 0;
var gWins = 0;
var gLosses = 0;

var word = "string"; //hard coding for testing
var wArr = word.split(''); //array of words characters
var kArr = [];

function countdown(event) {

  event.stopPropagation();

  //increment tries count
  gTries++;
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
      timeRem.textContent = "Done. Start timer for another round.";
      // Calls function to update stats
      displayResults();
    } else {
      console.log("timer left");
      timeLeft--;
    timeRem.textContent = "Start typing. " + timeLeft + " seconds remaining.";
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
    winner.textContent = "";
  }
  //statsTxt.textContent = "Stats:<br />Wins:" + gWins + "<br />Losses:" + gLosses + "<br />Tries:" + gTries;
  document.querySelector('#win').textContent = "Wins: " + gWins;
  document.querySelector('#loss').textContent = "Loses: " + gLosses;
  document.querySelector('#tries').textContent = "Tries: " + gTries;

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

timerBtn.addEventListener("click", countdown);

window.addEventListener("keydown", getUserInput);


