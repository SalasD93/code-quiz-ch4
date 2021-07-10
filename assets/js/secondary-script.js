var body = document.body;

var highScoreContainer = document.createElement('div');
var hsH1 = document.createElement('h1');
var hsList = document.createElement('ol');
var hsItem = document.createElement('li');
var buttonsEl = document.createElement('div');
var backBtn = document.createElement('button');
var clearBtn = document.createElement('button');

highScoreContainer.setAttribute('style', 'display: flex; flex-wrap: wrap; flex-direction: column; align-items: flex-start;  margin-top: 10%; margin-left: 35%; font-family: Arial, Helvetica, sans-serif;');
hsList.setAttribute('style', 'background: #e8f0fc; padding: 1% 50% 1% 3%; margin-top: 2%;');
hsItem.setAttribute('id', "high-score");
buttonsEl.setAttribute('style', 'display: flex; flex-wrap: wrap; justify-content: flex-start; width: 40%; margin: 2% 0;');
backBtn.setAttribute('style', 'width: 20%; padding: 1% 0; border: none; border-radius: 5px; background: #0062ff; color: #fff;');
clearBtn.setAttribute('style', 'width: 40%; padding: ; margin-left: 2%; border: none; border-radius: 5px; background: #0062ff; color: #fff;');

hsH1.textContent = 'High Scores';
hsItem.textContent = '';
backBtn.textContent = "Go back";
clearBtn.textContent = "Clear high scores";

body.appendChild(highScoreContainer);
highScoreContainer.appendChild(hsH1);
highScoreContainer.appendChild(hsList);
hsList.appendChild(hsItem);
highScoreContainer.appendChild(buttonsEl);
buttonsEl.appendChild(backBtn);
buttonsEl.appendChild(clearBtn);

var highScore = localStorage.getItem("highscore");
// document.getElementById("high-score").innerHTML = highScore;
var initials = localStorage.getItem("initials");
document.getElementById("high-score").innerHTML = initials + " - " + highScore;
// document.getElementById("high-score").innerHTML

backBtn.addEventListener('click', function() {
    window.location= "./index.html";
});

clearBtn.addEventListener('click', function() {
    document.getElementById("high-score").innerHTML = '';
});
// get local storage initials and score append to li