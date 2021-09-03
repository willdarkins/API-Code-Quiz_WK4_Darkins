// Global Variables
var startButton = document.getElementById('start-button');
var introContainer = document.getElementById('introduction');
var quizContainer = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerBtns = document.getElementById('answerBtns');
var timerEl = document.getElementById('timer');
var instantResult = document.getElementById('instant-result');
var quizEndScreen = document.getElementById('finish-screen');
var submitButton = document.getElementById('submit-initials');
var userName = document.getElementById('initials');
var finalScoreMessage = document.getElementById('final-score-message');
var timeLeft = 60;
var questionNumber = 0;
var userScore = 0;
var maxHighScores = 5;

// Array of Quiz Questions as Objects
var quizQuestions = [
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            "Both the <head> section and <body> section are correct",
            "The <body> section",
            "The <head> section",
            "The <footer> section",
        ],
        correct: 1
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            "script name ='xxx.js'",
            "script href = 'xxx.js",
            "script src = 'xxx.js'",
            "script put me here = 'xxx.js'",
        ],
        correct: 2
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            "alert('Hello World')",
            "msg('Hello World')",
            "msgBox('Hello World')",
            "alertBox('Hello World')",
        ],
        correct: 0
    },

    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            "function:myFunction()",
            "Can I get a function, and side of fries?",
            "function = myFunction()",
            "function MyFunction()",
        ],
        correct: 3
    },

    {
        question: 'Which one of these are the correct way to write an "if" statement in JavaScript?',
        answers: [
            "if i == 5 then",
            "if (i==5)",
            "if i==5 then",
            "if i=5",
        ],
        correct: 1
    },

    {
        question: 'How do you add a comment in JavaScript?',
        answers: [
            "//This is a comment",
            "<!--This is a comment--!>",
            "Call the DMV and make them do it",
            "'This is a comment'",
        ],
        correct: 0
    },

    {
        question: 'Which is the right way to write a JavaScript array?',
        answers: [
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = (1:'red',2:'green', 3:'blue')",
        ],
        correct: 2
    },

    {
        question: 'How do you find the number with the highest value of x and y?',
        answers: [
            "ceil(x,y)",
            "Math.max(x,y)",
            "Mathe.ceil(x,y)",
            "Mathe.ceil(x,y)",
        ],
        correct: 1
    },

    {
        question: 'Is JavaSciprt hard to learn?',
        answers: [
            "Yes, and you should give up after one try.",
            "Yes, and you should give up after one try.",
            "Is that the same as Java?",
            "Yes, but it's totally fulfilling and makes you a confident and capable programmer.",
        ],
        correct: 3
    }
]

// Begins game by feeding user question and starting timer
function startGame() {
    introContainer.setAttribute('style', 'display: none');
    quizContainer.setAttribute('style', 'display: block');
    getQuestion();
    countDown();
}

// Feeds user quesions
function getQuestion() {
    questionEl.innerText = quizQuestions[questionNumber].question;
    var answerA = document.getElementById('a');
    var answerB = document.getElementById('b');
    var answerC = document.getElementById('c');
    var answerD = document.getElementById('d');

    answerA.innerText = quizQuestions[questionNumber].answers[0];
    answerB.innerText = quizQuestions[questionNumber].answers[1];
    answerC.innerText = quizQuestions[questionNumber].answers[2];
    answerD.innerText = quizQuestions[questionNumber].answers[3];
    instantResult.textContent = '';

}

// Handles time deduction and user score increase
function selectAnswer(userAnswer) {
    if (userAnswer === quizQuestions[questionNumber].correct) {
        instantResult.textContent = 'Correct!'
        userScore++
    } else {
        timeLeft -= 10;
        instantResult.textContent = 'Wrong!'
    }
    setTimeout(function () {
        questionNumber++
        if (quizQuestions.length > questionNumber) {
            getQuestion();
        }
        else {
            quizEnd();
        }
    }, 1000);
}

// Ends quiz by clearing timer and presenting user with final score
function quizEnd() {
    quizContainer.setAttribute('style', 'display: none');
    instantResult.setAttribute('style', 'display: none');
    quizEndScreen.setAttribute('style', 'display:block');
    timerEl.setAttribute('style', 'display: none');
    clearInterval(countDown());
    finalScoreMessage.textContent = 'Your final score is ' + userScore + ".";
    submitButton.innerText = 'SUBMIT';
}

// Runs countdown clock
function countDown() {
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } else if (timeLeft === 0 || quizQuestions.length > questionNumber) {
            quizEnd();
        }
        else {
            timerEl.textContent = '';
            clearInterval(countDown());
        }
    }, 1000);
}


var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

userName.addEventListener('keyup', function () {
    submitButton.disabled = !userName.value;
})

// Putting user initials and score into local storage
function saveHighScore(e) {
    e.preventDefault();

    var score = {
        score: userScore,
        name: userName.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    localStorage.setItem('highScores', JSON.stringify(highScores));

    location.assign(".//index-high-scores.html");
}


startButton.addEventListener('click', startGame)