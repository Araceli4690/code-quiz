let timerEl = document.getElementById('countdown');
let mainEl = document.getElementById('main');
let startBtn = document.getElementById('start');
let startPage = document.getElementById('start-page');
let quizPage = document.getElementById('quiz-page');
let endPage = document.getElementById('end-page')

// Timer that counts down 
function countdown() {

    let timeLeft = 5;
    displayQuestions();
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time: ' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'Time: 0';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);

        }
    }, 1000);

}

//display questions function 
function displayQuestions() {
    startPage.style.display = "none";
    endPage.style.display = "none";
}

startBtn.onclick = countdown;
