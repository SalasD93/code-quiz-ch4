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

// var q1 = document.createElement("div");
// q1.setAttribute('style', 'display: flex; flex-direction: column; flex-wrap: wrap; align-items: center; margin-top: 10%;');
// body.appendChild(q1);

// var h1El = document.createElement("h1");
// h1El.textContent = 'Coding Quiz Challenge';
// h1El.setAttribute('style', 'margin: 0;' )
// q1.appendChild(h1El);

// var quizP = document.createElement("p");
// quizP.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
// quizP.setAttribute('style', 'text-align: center; margin: 1%; padding-left: 32.25%; padding-right: 32.25%;');
// q1.appendChild(quizP);

// var startBtn = document.createElement("button");
// startBtn.textContent = "START QUIZ";
// startBtn.setAttribute('style', 'border-radius: 10px; background: #0062ff; padding: 0.5%; color: #fff;');
// q1.appendChild(startBtn);

var headerContainer = document.getElementById('header-content');
headerContainer.setAttribute('style', 'display: flex; flex-wrap: wrap; justify-content: space-between;');

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
// when countdown initiated, timer starts, questions displayed === function initiates **** need function for Qs
// when answer clicked, this is set to new object in array; iterate?
var questionEl = document.createElement('div');
var askQuestion = document.createElement('h2');
var listEl = document.createElement('ol');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

questionEl.setAttribute('style', 'display: flex; flex-wrap: wrap; flex-direction: column; align-items: flex-start; margin-top: 10%;');
askQuestion.setAttribute('style', 'padding: 0 33%; font-size: 2.5vw;');
listEl.setAttribute('style', 'margin-left: 33%; margin-top: 2%; text-align: left;');
li1.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%; border-radius: 5px; background: #0062ff; color: #fff;');
li2.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%; border-radius: 5px; background: #0062ff; color: #fff;');
li3.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%;  border-radius: 5px; background: #0062ff; color: #fff;');
li4.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%; border-radius: 5px; background: #0062ff; color: #fff;');

body.appendChild(questionEl);
questionEl.appendChild(askQuestion);
questionEl.appendChild(listEl);
listEl.appendChild(li1);
listEl.appendChild(li2);
listEl.appendChild(li3);
listEl.appendChild(li4);

var questions = [
    {
        q: askQuestion.textContent = 'Commonly used data types DO NOT include:',
        a: li1.textContent = '1. strings',
        a: li2.textContent = '2. booleans',
        a: li3.textContent = '3. alerts',
        a: li4.textContent = '4. numbers',
    },
    {
        q: askQuestion.textContent = 'The condition in and if/else statement is enclosed with _________.',
        a: li1.textContent = '1. quotes',
        a: li2.textContent = '2. curly brackets',
        a: li3.textContent = '3. parenthesis',
        a: li4.textContent = '4. square brackets',
    },
    {
        q: askQuestion.textContent = 'Arrays in JavaScript can be used to store_________.',
        a: li1.textContent = '1. numbers and strings',
        a: li2.textContent = '2. other arrays',
        a: li3.textContent = '3. booleans',
        a: li4.textContent = '4. all of the above',
    },
    {
        q: askQuestion.textContent = 'String values must be enclosed within _____ when being assigned to variables.',
        a: li1.textContent = '1. commas',
        a: li2.textContent = '2. curly brackets',
        a: li3.textContent = '3. quotes',
        a: li4.textContent = '4. parenthesis',
    },
    {
        q: askQuestion.textContent = 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: li1.textContent = '1. JavaScript',
        a: li2.textContent = '2. terminal/bash',
        a: li3.textContent = '3. for loops',
        a: li4.textContent = '4. console.log',
    },
];


// startBtn.onclick = countdown;