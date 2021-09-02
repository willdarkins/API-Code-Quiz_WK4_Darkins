var goBackButton = document.getElementById('go-back');
goBackButton.innerHTML = "Go Back";
var clearHighScoresButton = document.getElementById('clear-high-scores');
clearHighScoresButton.innerHTML = 'Clear High Scores';
var highScoresList = document.getElementById('high-scores-list');
var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

function showScores() {
    for( var i = 0; i< highScores.length; i++) {
        var node = document.createElement('li');
        node.appendChild(document.createTextNode(highScores[i]));
        highScoresList.appendChild(node);
    }
}

showScores();

goBackButton.addEventListener('click', () => {
    location.assign(".//index.html");
})

clearHighScoresButton.addEventListener('click', () => {
    localStorage.clear();
    highScoresList.setAttribute('style', 'display: none')
})


// var node = document.createElement("LI");
// var textnode = document.createTextNode("Water");
// node.appendChild(textnode);
// document.getElementById("high-scores-list").appendChild(node);

