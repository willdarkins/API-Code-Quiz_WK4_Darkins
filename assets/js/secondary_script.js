var goBackButton = document.getElementById('go-back');
goBackButton.innerHTML = "Go Back";
var clearHighScoresButton = document.getElementById('clear-high-scores');
clearHighScoresButton.innerHTML = 'Clear High Scores';

var highScoresList = getElementById('high-scores-list');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScores);