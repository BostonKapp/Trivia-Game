// Variables
var timer = 30;
var score = 0;
var timerRunning = false;
var intervalid;




// Functions
// Countdown
function countdown() {
    var timeLeft = (timer == timer--);
    
    setInterval(function () {timeLeft, 1000});

};
// Start Timer
function timerStart() {
    intervalId = setInterval(countdown,1000);
}
// Countsdown Timer
$("#timerButton").on("click", countdown(timer));
// function checks the questions with the answers and increases score
function questionChecker(questions, value) {

    if ("#question1" === "choice1") {
        score++;
    }
    
    if ("#question2" === "choice3") {
        score++;
    }

    if ("#question3" === "choice3") {
        score++;
    }

    if ("#question4" === "choice4") {
        score++;
    }

    alert("You got" + score + "out of 4.")
};
// Submit the page on click
$("#submit").on("click").questionChecker();

// Run out of time
function timeOut() {
    if (timer === 0) {
        questionChecker();
        alert("Game Over")
    };
};