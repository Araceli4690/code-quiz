let timerEl = document.getElementById('countdown');
// let mainEl = document.getElementById('main');
// let startBtn = document.getElementById('start');
let startPage = document.getElementById('start-page');
let quizPage = document.getElementById('quiz-page');
let endPage = document.getElementById('end-page');
let highScores = document.querySelector('#scores-page');
let viewScores = document.querySelector('#viewScores');
let home = document.querySelector('#homePage');
let questionsEl = document.getElementById('questions');
let buttonA = document.getElementById("a");
let buttonB = document.getElementById("b");
let buttonC = document.getElementById("c");
let buttonD = document.getElementById("d");
let formEl = document.querySelector('#submit-score')

let highScore = [];

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
    highScores.style.display = 'none';

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

    let lineBreak = document.querySelector('#lineBreak');
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
    //checking if score is being calculated
    console.log(correctAns);
    //saving score 
    localStorage.setItem('scores', correctAns);
}

//endquiz function
//when questions or timer ends redirect to end-page
function endQuiz() {

    //dispaly endPage but not other pages
    quizPage.style.display = "none";
    startPage.style.display = "none";
    highScores.style.display = 'none';
    endPage.style.display = "block";

    //displaying final score
    document.querySelector('#result').textContent = 'Your final score is ' + correctAns + '/' + questions.length;

    let nameInput = document.querySelector("#name").value;

    //save name to local storage
    localStorage.setItem('name', nameInput);
}

//high score function
function ScoresPage() {
    quizPage.style.display = "none";
    endPage.style.display = "none";
    startPage.style.display = 'none';
    highScores.style.display = 'block';

    //create td element
    //create tr element for name
    //create tr elemnt for score
    //append tr to td
    //retrieve info from local storage and set to high score and name tr elements

}

//start quiz page
function startQuiz() {
    quizPage.style.display = "none";
    endPage.style.display = "none";
    highScores.style.display = 'none';
    startPage.style.display = 'flex';

}


//event listener for looking at high scores
viewScores.addEventListener('click', ScoresPage);

//eventListener to start timer
startPage.addEventListener('click', countdown);
startQuiz();
//event listener for submitting high score
formEl.addEventListener('click', endQuiz);

//event listener to redirect to homepage
home.addEventListener('click', startQuiz);