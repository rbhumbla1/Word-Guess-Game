var timeRem = document.getElementById('timeRem');
var wordTxt = document.getElementById('word');
var wLen = 0;

var word = "javascript"; //hard coding for testing


function countdown() {
    var timeLeft = 5;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      //
      // YOUR CODE HERE
      //
      timeLeft--;
      timeRem.textContent = timeLeft + " seconds remaining.";
  
      if (timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timeInterval);
        // Calls function to create and append image
        // displayMessage();
      }
    }, 1000);
  }

  function checkResult(){

  }

  function getUserInput(){
    
  }

  countdown();
