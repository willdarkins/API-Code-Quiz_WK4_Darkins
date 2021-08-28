var quizContainer = document.getElementById('question-container');
var answerBts = document.getElementById('answerBts');
var resultContainer = document.getElementById('results');
var startButton = document.getElementById('start-button');
var introContainer = document.getElementById('introduction');
var timerEl = document.getElementById('timer');
var instantResult = document.getElementById('results')
var quizQuestions = [
    {
        q: 'Inside which HTML element do we put the JavaScript?',
        c: {
            1: "<js>",
            2: "<javascript>",
            3: "<scripting>",
            4: "<script>",

        },
        a: "4"
    },

    {
        q: 'Where is the correct place to insert a JavaScript?',
        c: {
            1: "Both the <head> section and <body> section are correct",
            2: "The <body> section",
            3: "The <head> section",
            4: "The <footer> section",
        },
        a: "2"
    },

    {
        q: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        c: {
            1: "script name ='xxx.js'",
            2: "script href = 'xxx.js",
            3: "script src = 'xxx.js'",
            4: "script put me here = 'xxx.js'",
        },
        a: "3"
    },

    {
        q: 'How do you write "Hello World" in an alert box?',
        c: {
            1: "alert('Hello World')",
            2: "msg('Hello World')",
            3: "msgBox('Hello World')",
            4: "alertBox('Hello World')",
        },
        a: "1"
    },

    {
        q: 'How do you create a function in JavaScript?',
        c: {
            1: "function:myFunction()",
            2: "Can I get a function, and side of fries?",
            3: "function = myFunction()",
            4: "function MyFunction()",
        },
        a: "4"
    },

    {
        q: 'Which one of these are the correct way to write an "if" statement in JavaScript?',
        c: {
            1: "if i == 5 then",
            2: "if (i==5)",
            3: "if i==5 then",
            4: "if i=5",
        },
        a: "2"
    },

    {
        q: 'How do you add a comment in JavaScript?',
        c: {
            1: "//This is a comment",
            2: "<!--This is a comment--!>",
            3: "Call the DMV and make them do it",
            4: "'This is a comment'",
        },
        a: "1"
    },

    {
        q: 'Which is the right way to write a JavaScript array?',
        c: {
            1: "var colors = 'red', 'green', 'blue'",
            2: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
            3: "var colors = ['red', 'green', 'blue']",
            4: "var colors = (1:'red',2:'green', 3:'blue')",
        },
        a: "3"
    },

    {
        q: 'How do you find the number with the highest value of x and y?',
        c: {
            1: "ceil(x,y)",
            2: "Math.max(x,y)",
            3: "Mathe.ceil(x,y)",
            4: "Count on your fingers and toes!",
        },
        a: "2"
    },

    {
        q: 'Is JavaSciprt hard to learn?',
        c: {
            1: "Yes, and you should give up after one try.",
            2: "No, and you should set aside 15 minute to master it.",
            3: "Is that the same as Java?",
            4: "Yes, but it's totally fulfilling and makes you a confident and capable programmer.",
        },
        a: "2"
    },
]

startButton.addEventListener('click', function() {
    quizContainer.setAttribute('style', 'display: block');
    introContainer.setAttribute('style', 'display: none');
    countdown();
});

function countdown() {
    var timeLeft = 60;
  
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
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





// Basic Timer function set for 1:00 to complete the quiz
// var endGame = function() {
//     alert('You have run out of time');
// };

// var startCountdown = setTimeout(endGame,60000)