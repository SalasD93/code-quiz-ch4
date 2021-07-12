var body = document.body;
// creates quiz intro
var q1 = document.createElement("div");
var h1El = document.createElement("h1");
var quizP = document.createElement("p");
var startBtn = document.createElement("button");
// sets text for quiz intro
h1El.textContent = 'Coding Quiz Challenge';
quizP.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
startBtn.textContent = "START QUIZ";
// styles quiz intro
q1.setAttribute('style', 'display: flex; flex-direction: column; flex-wrap: wrap; align-items: center; margin-top: 10%;');
h1El.setAttribute('style', 'margin: 0;' )
quizP.setAttribute('style', 'text-align: center; margin: 1%; padding-left: 32.25%; padding-right: 32.25%;');
startBtn.setAttribute('style', 'border: none;border-radius: 10px; background: #0062ff; padding: 0.5%; color: #fff;');
// adds quiz intro to page
body.appendChild(q1);
q1.appendChild(h1El);
q1.appendChild(quizP);
q1.appendChild(startBtn);
// contains high score link and timer
var headerContainer = document.getElementById('header-content');
headerContainer.setAttribute('style', 'display: flex; flex-wrap: wrap; justify-content: space-between;');
var highscoreEl = document.getElementById('highscores');
highscoreEl.setAttribute('style', 'margin-right: 40%; margin-left: 1%;');
var timerEl = document.getElementById('timer');
timerEl.textContent = 'Time: 75';
timerEl.setAttribute('style', 'margin-left: 40%; margin-right: 1%;');
// creates questions
var questionEl = document.createElement('div');
var askQuestion = document.createElement('h2');
var listEl = document.createElement('ol');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

var message = document.createElement('div');
// creates high score end of quiz and initials input
var endQuizEl = document.createElement('div');
var endH2 = document.createElement('h2');
var endP = document.createElement('p');
endP.setAttribute('id', "high-score");
console.log(endP);
var initialsForm = document.createElement('form');
var initialsLabel = document.createElement('label');
var initialsInput = document.createElement('input');
// onlcick localStorage initials
var initialsBtn = document.createElement('button');
// styles questions
questionEl.setAttribute('style', 'display: flex; flex-wrap: wrap; flex-direction: column; align-items: flex-start; margin-top: 10%;');
askQuestion.setAttribute('style', 'padding: 0 33%; font-size: 2.5vw;');
listEl.setAttribute('style', 'margin-left: 33%; margin-top: 2%; text-align: left;');
listEl.setAttribute('id', "answer-list");
li1.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%; border-radius: 5px; background: #0062ff; color: #fff;');
li1.setAttribute('id', 'user-answer');
console.log(li1);
li2.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%; border-radius: 5px; background: #0062ff; color: #fff;');
li2.setAttribute('id', 'user-answer');
li3.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%;  border-radius: 5px; background: #0062ff; color: #fff;');
li3.setAttribute('id', 'user-answer');
li4.setAttribute('style', 'margin: 2% 0; padding: 3% 0 3% 10%; width: 125%; border-radius: 5px; background: #0062ff; color: #fff;');
li4.setAttribute('id', 'user-answer');
// styles high score at quiz end
endQuizEl.setAttribute('style', 'display: flex; flex-wrap: wrap; flex-direction: column; align-items: flex-start;  margin-top: 10%; margin-left: 35%; font-family:Arial, Helvetica, sans-serif;');
endH2.setAttribute('style', 'margin: 1% 0; font-size: 2.5vw;');
endP.setAttribute('style', 'margin: 1% 0;');
initialsForm.setAttribute('style', 'margin: 1% 0; width: 40%;');
initialsInput.setAttribute('style', 'margin: 0 1%;');
initialsInput.setAttribute('id', "initials-input");
initialsBtn.setAttribute('style', 'padding: 1%; width: 15%; border: none; border-radius: 5px; background: #0062ff; color: #fff;');

// removes questions from main page when all questions answered
function removeQuestions() {
    body.removeChild(questionEl);
} 

// variable to add clicks for next question
var question = 0;

// function to move to next question
function answerQuestion() {
    if (question >= questionObjects.length) {
        removeQuestions();
        endQuiz();
    }  else {
        nextQuestion();
    }
}

// creates questions
var questionObjects = [
    {
        q: 'Commonly used data types DO NOT include:',
        a: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        correctAnswer: '3. alerts',
    },
    {
        q: 'The condition in an if/else statement is enclosed with _________.',
        a: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        correctAnswer: '3. parenthesis',
    },
    {
        q: 'Arrays in JavaScript can be used to store_________.',
        a: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        correctAnswer: '4. all of the above',
    },
    {
        q: 'String values must be enclosed within _____ when being assigned to variables.',
        a: ['1. commas', '2. quotes', '3. curly brackets', '4. parenthesis'],
        correctAnswer: '2. quotes',
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: ['1. console.log', '2. terminal/bash', '3. for loops', '4. JavaScript'],
        correctAnswer: '1. console.log',
    },
];
console.log(questionObjects);
// if (questionObjects[0].a[2] === questionObjects[0].correctAnswer) {
//     console.log('correct!');
// } else {
//     console.log('incorrect!');
// }
// sets text for end of quiz
endH2.textContent = 'All done!';
initialsLabel.textContent = 'Enter Initials:';
initialsBtn.textContent = "Submit";

// removes quiz intro to start questions
function removeStart() {
    body.removeChild(q1);
}

// moves to next question when answer clicked
function nextQuestion() {
    askQuestion.textContent = questionObjects[question].q
    li1.textContent = questionObjects[question].a[0]
    li2.textContent = questionObjects[question].a[1]
    li3.textContent = questionObjects[question].a[2]
    li4.textContent = questionObjects[question].a[3]
}

// displays questions
function displayQuestion() {
    body.appendChild(questionEl);
    questionEl.appendChild(askQuestion);
    questionEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
}

// displays end of quiz high score and initials input
function endQuiz() {
    body.appendChild(endQuizEl);
    endQuizEl.appendChild(endH2);
    endQuizEl.appendChild(endP);
    endQuizEl.appendChild(initialsForm);
    initialsForm.appendChild(initialsLabel);
    initialsForm.appendChild(initialsInput);
    initialsForm.appendChild(initialsBtn);
}

// function for timer, penalty, and message
function countdown() {
    var timeLeft = 75;
    var penalty = 10;
    // sets interval for timer
    var timeInterval = setInterval(function() {
        if (timeLeft >= 1 && question < questionObjects.length) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
            endP.textContent = 'Your final score is ' + timeLeft + '.';
            localStorage.setItem("highscore", timeLeft);
            localStorage.getItem("highscore");
        } else {
            timerEl.textContent = 'Time: ' + timeLeft;
            clearInterval(timeInterval);
            // input call function to clear questions
            // removeQuestions();
            endP.textContent = 'Your final score is ' + timeLeft + '.';
            localStorage.setItem("highscore", timeLeft);
            localStorage.getItem("highscore");
            removeQuestions();
            endQuiz();
        } 
    }, 1000);

    if (timeLeft >= 0) {
        removeStart();      
        displayQuestion();
        nextQuestion();
    }

    // makes li clickable for answering
    var message = document.createElement("div");
    message.setAttribute('id', "message");
    message.setAttribute('style', "margin-left: 33%; padding-right: 15%; opacity: 25%; border-bottom: solid 2px #b8b8b8;")
    listEl.addEventListener('click', function(event) {
        var answer = event.target;
        if (answer.matches("li")) {
            // Correct condition
            if (answer.textContent == questionObjects[question].correctAnswer) {
                questionEl.appendChild(message);
                message.textContent = "Correct!";
                console.log("correct");
            }
            // Incorrect condition
            else {
                // deduct 10 seconds off time for incorrect answers
                if (timeLeft >= 0) {
                    timeLeft = timeLeft - penalty;
                    timeLeft = Math.max(0, timeLeft);
                }
                questionEl.appendChild(message);
                message.textContent = "Incorrect!";
                console.log("Incorrect!");
            }
            console.log(timeLeft);
        }
        // go to next question when answer selected
        question++;
        // call function to display new question
        answerQuestion();
    });
}

// lets button store initials
initialsBtn.addEventListener('click', function(event) {
    event.preventDefault();
    // retrieves the value to be stored
    var initials = document.getElementById("initials-input").value;
    localStorage.setItem("initials", initials);
    localStorage.getItem("initials");
    // allows button to go to high score html
    window.location.replace("./highscores.html");
    return false; 
});

// starts the quiz
startBtn.onclick = countdown;