var goBackButton = document.getElementById('go-back');
goBackButton.innerHTML = "Go Back";
var clearHighScoresButton = document.getElementById('clear-high-scores');
clearHighScoresButton.innerHTML = 'Clear High Scores';
var highScoresList = document.getElementById('high-scores-list');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function highScoresList () {
    var node = document.createElement("LI");
    var textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("high-scores-list").appendChild(node);
}

function clear() {
    storage.clear();
}


