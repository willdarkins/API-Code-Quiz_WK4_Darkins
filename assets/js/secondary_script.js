var goBackButton = document.getElementById('go-back');
goBackButton.innerHTML = "Go Back";
var clearHighScoresButton = document.getElementById('clear-high-scores');
clearHighScoresButton.innerHTML = 'Clear High Scores';
var highScoresList = document.getElementById('high-scores-list');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

// Displays high scores from users
function showScores() {
    for( var i = 0; i< highScores.length; i++) {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(highScores[i].name + " - " + highScores[i].score));
        highScoresList.appendChild(node);
    }
}
showScores();

// Button takes user back to start screen
goBackButton.addEventListener('click', () => {
    location.assign(".//index.html");
})

// Button clears high scores from local storage, and screen
clearHighScoresButton.addEventListener('click', () => {
    localStorage.clear();
    highScoresList.setAttribute('style', 'display: none')
})


