let timerEl = document.getElementById('countdown');
let mainEl = document.getElementById('main');
let startBtn = document.getElementById('start');
let startPage = document.getElementById('start-page');
let quizPage = document.getElementById('quiz-page');
let endPage = document.getElementById('end-page');
let questionsEl = document.getElementById('questions');
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
let score = 0;
let correctAns = 0;
let questionIndex = 0;

let questions = [
    {
        q: "test",
        A: "test",
        B: "test",
        C: "test",
        D: "test",
        rightAnswer: 'a'
    },
    {
        q: "test2",
        A: "test2",
        B: "test2",
        C: "test2",
        D: "test2",
        rightAnswer: 'a'
    },
    {
        q: "test3",
        A: "test3",
        B: "test3",
        C: "test3",
        D: "test3",
        rightAnswer: 'a'
    },
    {
        q: "test",
        A: "test",
        B: "test",
        C: "test",
        D: "test",
        rightAnswer: 'a'
    }
]
// Timer that counts down 
function countdown() {
    startPage.style.display = "none";
    endPage.style.display = "none";

    let timeLeft = 5;

    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    let timeInterval = setInterval(function () {
        // As long as the `timeLeft` is greater than 1
        if (timeLeft > 1) {
            // Set the `textContent` of `timerEl` to show the remaining seconds
            timerEl.textContent = 'Time: ' + timeLeft;
            // Decrement `timeLeft` by 1
            timeLeft--;
        } else if (timeLeft <= 0 || questionIndex < questions.length) {
            // Once `timeLeft` gets to 0, set `timerEl` to an empty string
            timerEl.textContent = 'Time: 0';
            // Use `clearInterval()` to stop the timer
            clearInterval(timeInterval);
            //redirect to endPage
            endQuiz();

        }
    }, 1000);
    quizPage.style.display = "block";
    //start questions block
    quizQuestions();

}

//generate the quiz questiond
function quizQuestions() {


    questionsEl.innerHTML = "<h2>" + questions[questionIndex].q + "</h2>";
    buttonA.innerHTML = questions[questionIndex].A;
    buttonB.innerHTML = questions[questionIndex].B;
    buttonC.innerHTML = questions[questionIndex].C;
    buttonD.innerHTML = questions[questionIndex].D;
}
//check answer
function checkAnswer(answer) {
    let lineBreak = document.getElementById('lineBreak');
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    correct = questions[questionIndex].rightAnswer;

    if (answer === correct) {
        correctAns++;
        answerCheck.textContent = 'Correct!'
    } else {
        answerCheck.textContent = "Incorrect!"
    }
    questionIndex++;
    if (questionIndex < questions.length) {
        quizQuestions();
    } else {
        endQuiz();
    }
}

//endquiz function
//when questions or timer ends redirect to end-page
function endQuiz() {

}

//high score function


//start quiz page
function startQuiz() {
    quizPage.style.display = "none";
    endPage.style.display = "none";
}

//event listener to submitting high score
//event listener for looking at high scores
startPage.addEventListener('click', countdown);
startQuiz();