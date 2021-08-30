var startButton = document.getElementById('start-button');
var introContainer = document.getElementById('introduction');
var quizContainer = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerBtns = document.getElementById('answerBtns');
var timerEl = document.getElementById('timer');
var quizQuestions = [
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { text: "Both the <head> section and <body> section are correct", correct: false},
            { text: "The <body> section", correct: true},
            { text: "The <head> section", correct: false},
            { text: "The <footer> section", correct: false},
        ]
    },

    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        answers: [
            { text: "script name ='xxx.js'", correct: false},
            { text: "script href = 'xxx.js", correct: false},
            { text: "script src = 'xxx.js'", correct: true},
            { text: "script put me here = 'xxx.js'", correct: false},
        ]
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: "alert('Hello World')", correct: true},
            { text: "msg('Hello World')", correct: false},
            { text: "msgBox('Hello World')", correct: false},
            { text: "alertBox('Hello World')", correct: false},
        ]
    },

    {
        question: 'How do you create a function in JavaScript?',
        answers: [
            { text: "function:myFunction()", correct: false},
            { text: "Can I get a function, and side of fries?", correct: false},
            { text: "function = myFunction()", correct: false},
            { text: "function MyFunction()", correct: true},
        ]
    },

    {
        question: 'Which one of these are the correct way to write an "if" statement in JavaScript?',
        answers: [
            { text: "if i == 5 then", correct: false},
            { text: "if (i==5)", correct: true}, 
            { text: "if i==5 then", correct: false},
            { text: "if i=5", correct: false},
        ]
    },

    {
        question: 'How do you add a comment in JavaScript?',
        answers: [
            { text: "//This is a comment", correct: true},
            { text: "<!--This is a comment--!>", correct: false},
            { text: "Call the DMV and make them do it", correct: false},
            { text: "'This is a comment'", correct: false},
        ]
    },

    {
        question: 'Which is the right way to write a JavaScript array?',
        answers: [
            { text: "var colors = 'red', 'green', 'blue'", correct: false},
            { text: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", correct: false},
            { text: "var colors = ['red', 'green', 'blue']", correct: true},
            { text: "var colors = (1:'red',2:'green', 3:'blue')", correct: false},
        ]
    },

    {
        question: 'How do you find the number with the highest value of x and y?',
        answers: [
            { text: "ceil(x,y)", correct: false},
            { text: "Math.max(x,y)", correct: true},
            { text: "Mathe.ceil(x,y)", correct: false},
            { text: "Mathe.ceil(x,y)", correct: false},
        ]
    },

    {
        question: 'Is JavaSciprt hard to learn?',
        answers: [
            { text: "Yes, and you should give up after one try.", correct: false},
            { text: "Yes, and you should give up after one try.", correct: false},
            { text: "Is that the same as Java?", correct: false},
            { text: "Yes, but it's totally fulfilling and makes you a confident and capable programmer.", correct: true},
        ]
    }
]

function startGame() {
    introContainer.setAttribute('style', 'display: none');
    quizContainer.setAttribute('style', 'display: block');
    nextQuestion();
}

function nextQuestion() {
    getQuestion(quizQuestions[0]);
    countDown();
}

function getQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button');
        button.setAttribute('style', 'display: flex', 'flex-direction: column')
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', selectAnswer)
        answerBtns.appendChild(button);
    });
}

function resetQuiz () {

}

function selectAnswer() {
    if (answer.correct = true) {
        addEventListener('click', 'style', 'background-color: red');
    }   
}

startButton.addEventListener('click', startGame)

function countDown() {
     var timeLeft = 60;
  
     var timeInterval = setInterval(function() {
       if (timeLeft > 1) {
         timerEl.textContent = 'Time: ' + timeLeft;
         timeLeft--;
       } else if (timeLeft === 1) {
         timerEl.textContent = 'Time: ' + timeLeft;
         timeLeft--;
       } else {
         timerEl.textContent = '';
         clearInterval(timeInterval);
       }
     }, 1000);
   }



//Want a function that's updating the time based on right/wrong questions
// statQuiz, getQuestion, countdown(needs to include wrong and right values for time), endQuiz, clockTick, saveHighScore.

//getQustion called within startQuiz - getQuestion will build logic for all questions. 
//if they get the answer wrong, subtract 15, otherwise, keep as is.
//countdown will set and subract time from question results - Calling to get another question or if run out of time, end quiz
//endQuiz - finalize high score and let user know quiz is over
//clockTick
//saveHighScore stores all high scores - There also needs to be a click even in the top left link.

// Basic Timer function set for 1:00 to complete the quiz
// var endGame = function() {
//     alert('You have run out of time');
// };

// var startCountdown = setTimeout(endGame,60000)   