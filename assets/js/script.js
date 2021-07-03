// startBtn onclick **** need to add eventListener
    // timer starts ===> present question

// use object array to hold each question and their answers
    // use odered list (ol) and list items (li) for answers(4)
    // use event listeners for selected question
        // ???listener on list or list item???
// use create element and apend to html ***** need a place in html doc to append to
// style with javascript with set attribute **** need to assign classes and ids in create elements
// answer question
    // present new question **** iteration for loop

// answer question incorrectly
    // time-- from clock **** var subtractTime = 5
        // all questions answered === true || timer === 0
        // ********* timer can't go negative Math.max?
            // game over
                // save initials and score

// timer and high score link in flexbox(html, css)
    // j-c space-between and HS padding/margin right with timer padding/margin left
    // link high score from a different page **** need to use localStorage and set them to a div in hs.html

// make mobile friendly with @media in .css

// onlick 'go back' === call on function to display coding quiz start
    // onclick clear highscore === clear highscore localStorage


var body = document.body;

var q1 = document.createElement("div");
q1.setAttribute('style', 'display: flex; flex-direction: column; flex-wrap: wrap; align-items: center; margin-top: 10%;');
body.appendChild(q1);

var h1El = document.createElement("h1");
h1El.textContent = 'Coding Quiz Challenge';
h1El.setAttribute('style', 'margin: 0;' )
q1.appendChild(h1El);

var quizP = document.createElement("p");
quizP.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
quizP.setAttribute('style', 'text-align: center; margin: 1%; padding-left: 32.25%; padding-right: 32.25%;');
q1.appendChild(quizP);

var startBtn = document.createElement("button");
startBtn.textContent = "START QUIZ";
startBtn.setAttribute('style', 'border-radius: 10px; background: #0062ff; padding: 0.5%; color: #fff;');
q1.appendChild(startBtn);

var headerContainer = document.getElementById('header-content');
headerContainer.setAttribute('style', 'display: flex; justify-content: space-between;');

var highscoreEl = document.getElementById('highscores');
highscoreEl.setAttribute('style', 'margin-right: 40; margin-left: 1%;')

var timerEl = document.getElementById('timer');
timerEl.textContent = 'Time: 75';
timerEl.setAttribute('style', 'margin-left: 40%; margin-right: 1%;');
// timerEl.appendChild(timerEl.textContent);

function countdown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        if (timeLeft >= 1) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
        } 
            // else if (timeLeft === 1) {
            //     timerEl.textContent = 'Time: ' + timeLeft;
            //     timeLeft--;
            // } 
        else {
            timerEl.textContent = 'Time: ' + timeLeft;
            // timerEl.textContent = 'Time: 0';
            clearInterval(timeInterval);
        }
    }, 1000);
}

startBtn.onclick = countdown;