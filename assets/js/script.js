let timerEl = document.querySelector('#countdown');
let startPage = document.querySelector('#start-page');
let quizPage = document.querySelector('#quiz-page');
let endPage = document.querySelector('#end-page');
let highScores = document.querySelector('#scores-page');
let viewScores = document.querySelector('#viewScores');
let home = document.querySelector('#homePage');
let questionsEl = document.querySelector('#questions');
let buttonA = document.querySelector("#a");
let buttonB = document.querySelector("#b");
let buttonC = document.querySelector("#c");
let buttonD = document.querySelector("#d");
let formEl = document.querySelector('#submit-score');
let listOfScores = document.querySelector('#listOfScores')

//let highScoreArr;

let timeLeft = 60;
let correctAns = 0;
let questionIndex = 0;

//questions array
let questions = [
    {
        q: "What is the format called that is used for storing and transporting data?",
        A: "a. HTML",
        B: "b. Syntax",
        C: "c. JSON",
        D: "d. Font",
        rightAnswer: 'c'
    },
    {
        q: "What can loops offer JavaScript code as a whole?",
        A: "a. Cross-platform support",
        B: "b. Improved performance",
        C: "c. Cleaner syntax",
        D: "d. Added plug-ins",
        rightAnswer: 'b'
    },
    {
        q: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        A: "a. JSON",
        B: "b. Output",
        C: "c. Scope",
        D: "d. Syntax",
        rightAnswer: 'd'
    },
    {
        q: "What is considered to be the most popular programming language in the world?",
        A: "a. JavaScript",
        B: "b. Swift",
        C: "c. Ruby",
        D: "d. HTML",
        rightAnswer: 'a'
    },
    {
        q: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
        A: "a. Notes",
        B: "b. Comments",
        C: "c. Comparisons",
        D: "d. Quotations",
        rightAnswer: 'b'
    },
    {
        q: "What is the name of the statement that is used to exit or end a loop?",
        A: "a. Conditional statement",
        B: "b. Break statement",
        C: "c. Close statement",
        D: "d. Falter statement",
        rightAnswer: 'b'
    },
    {
        q: "What elements are used to test for TRUE or False values stored in variables?",
        A: "a. Comparison and logical operators",
        B: "b. Conditional statements",
        C: "c. RegExp or Regular Expressions",
        D: "d. Trigger readers",
        rightAnswer: 'a'
    },
    {
        q: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
        A: "a. Strings",
        B: "b. Arrays",
        C: "c. Variables",
        D: "d. Recorders",
        rightAnswer: 'a'
    }
]
// Timer function that runs when start quiz button is clicked
function countdown() {
    startPage.style.display = "none";
    endPage.style.display = "none";
    highScores.style.display = 'none';



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
    quizPage.style.display = 'block';
    //start questions block
    quizQuestions();

}

//generate the quiz questions
function quizQuestions() {

    questionsEl.innerHTML = "<h2>" + questions[questionIndex].q + "</h2>";
    buttonA.innerHTML = questions[questionIndex].A;
    buttonB.innerHTML = questions[questionIndex].B;
    buttonC.innerHTML = questions[questionIndex].C;
    buttonD.innerHTML = questions[questionIndex].D;
}
//function to check answer
function checkAnswer(answer) {

    let lineBreak = document.querySelector('#lineBreak');
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    correct = questions[questionIndex].rightAnswer;
    //if answer is correct add a point to the score
    if (answer === correct) {
        correctAns++;
        answerCheck.textContent = 'Correct!'
    } else {
        timeLeft--;
        answerCheck.textContent = "Incorrect!"
    }
    questionIndex++;
    //if question index is less than the length present the next question
    if (questionIndex < questions.length) {
        quizQuestions();
        //otherwise redirect ti endPage
    } else {
        endQuiz();
    }
    //just checking if score is being calculated
    console.log(correctAns);

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

}

function saveScore() {
    event.preventDefault();
    let nameInput = document.querySelector("#name").value;

    // store scores into local storage
    let savedHighScores = localStorage.getItem("highScoreArray");
    let highScoreArr;

    if (savedHighScores === null) {
        highScoreArr = [];
    } else {
        highScoreArr = JSON.parse(savedHighScores)
    }

    let scoreInfo = {
        name: nameInput,
        score: correctAns
    };

    console.log(scoreInfo);
    highScoreArr.push(scoreInfo);

    // stringify array in order to store in local
    let scoresArrayString = JSON.stringify(highScoreArr);
    window.localStorage.setItem("highScoreArray", scoresArrayString);

    loadScores();
}

//high score function
function loadScores() {
    quizPage.style.display = "none";
    endPage.style.display = "none";
    startPage.style.display = 'none';
    highScores.style.display = 'block';

    let savedHighScores = localStorage.getItem("highScoreArray");

    if (savedHighScores === null) {
        return;
    }

    let storedHighScores = JSON.parse(savedHighScores);

    for (i = 0; i < storedHighScores.length; i++) {
        var newScore = document.createElement("p");
        newScore.innerHTML = storedHighScores[i].name + ": " + storedHighScores[i].score;
        listOfScores.appendChild(newScore);
    }

}

//start quiz page
function startQuiz() {
    //display only start page and none of the other elements
    quizPage.style.display = "none";
    endPage.style.display = "none";
    highScores.style.display = 'none';
    startPage.style.display = 'flex';
}

//event listener for looking at high scores
viewScores.addEventListener('click', loadScores);
//event listener to redirect to homepage
home.addEventListener('click', startQuiz);
//eventListener to start timer
startPage.addEventListener('click', countdown);
startQuiz();
//event listener for submitting high score
formEl.addEventListener('click', saveScore);

