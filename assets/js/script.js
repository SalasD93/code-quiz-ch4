var body = document.body;
// var remove = document.removeChild();

var q1 = document.createElement("div");
var h1El = document.createElement("h1");
var quizP = document.createElement("p");
var startBtn = document.createElement("button");

var penalty = 10;


h1El.textContent = 'Coding Quiz Challenge';
quizP.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!';
startBtn.textContent = "START QUIZ";


q1.setAttribute('style', 'display: flex; flex-direction: column; flex-wrap: wrap; align-items: center; margin-top: 10%;');
h1El.setAttribute('style', 'margin: 0;' )
quizP.setAttribute('style', 'text-align: center; margin: 1%; padding-left: 32.25%; padding-right: 32.25%;');
startBtn.setAttribute('style', 'border: none;border-radius: 10px; background: #0062ff; padding: 0.5%; color: #fff;');

body.appendChild(q1);
q1.appendChild(h1El);
q1.appendChild(quizP);
q1.appendChild(startBtn);


var headerContainer = document.getElementById('header-content');
headerContainer.setAttribute('style', 'display: flex; flex-wrap: wrap; justify-content: space-between;');

var highscoreEl = document.getElementById('highscores');
highscoreEl.setAttribute('style', 'margin-right: 40%; margin-left: 1%;');

var timerEl = document.getElementById('timer');
timerEl.textContent = 'Time: 75';
timerEl.setAttribute('style', 'margin-left: 40%; margin-right: 1%;');

var questionEl = document.createElement('div');
var askQuestion = document.createElement('h2');
var listEl = document.createElement('ol');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');
var li4 = document.createElement('li');

var message = document.createElement('div');
// var messageI = document.createElement('div');

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

// to display messages later when answer confirmed
// function displayMessageC() {
//     var messageDiv = document.createElement('div');
//     messageDiv.setAttribute('id', "message-c");
//     messageDiv.textContent("Correct!");
//     questionEl.appendChild(messageDiv);
// }

// function displayMessageI() {
//     var messageDiv = document.createElement('div');
//     messageDiv.setAttribute('id', "message-i");
//     messageDiv.textContent("Incorrect!");
//     questionEl.appendChild(messageDiv);
// }

// creates questions
var questionObjects = [
    {
        q: 'Commonly used data types DO NOT include:',
        a: ['1. strings', '2. booleans', '3. alerts', '4. numbers'],
        // a1: '1. strings',
        // a2: '2. booleans',
        // a3: '3. alerts',
        // a4: '4. numbers',
        // changed
        correctAnswer: '3. alerts',
    },
    {
        q: 'The condition in an if/else statement is enclosed with _________.',
        a: ['1. quotes', '2. curly brackets', '3. parenthesis', '4. square brackets'],
        // a1: '1. quotes',
        // a2: '2. curly brackets',
        // a3: '3. parenthesis',
        // a4: '4. square brackets',
        correctAnswer: '3. parenthesis',
    },
    {
        q: 'Arrays in JavaScript can be used to store_________.',
        a: ['1. numbers and strings', '2. other arrays', '3. booleans', '4. all of the above'],
        // a1: '1. numbers and strings',
        // a2: '2. other arrays',
        // a3: '3. booleans',
        // a4: '4. all of the above',
        correctAnswer: '4. all of the above',
    },
    {
        q: 'String values must be enclosed within _____ when being assigned to variables.',
        a: ['1. commas', '2. quotes', '3. curly brackets', '4. parenthesis'],
        // a1: '1. commas',
        // a2: '2. quotes',
        // a3: '3. curly brackets',
        // a4: '4. parenthesis',
        correctAnswer: '2. quotes',
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a: ['1. console.log', '2. terminal/bash', '3. for loops', '4. JavaScript'],
        // a1: '1. console.log',
        // a2: '2. terminal/bash',
        // a3: '3. for loops',
        // a4: '4. JavaScript',
        correctAnswer: '1. console.log',
    },
    // if (li1 

];console.log(questionObjects);
if (questionObjects[0].a[2] === questionObjects[0].correctAnswer) {
    console.log('correct!');
} else {
    console.log('incorrect!');
}


endH2.textContent = 'All done!';
// endP.textContent = '';
initialsLabel.textContent = 'Enter Initials:';
initialsBtn.textContent = "Submit";

// removes main display to start questions
function removeStart() {
    body.removeChild(q1);
}

// moves to next question when answer clicked
// var i = 0
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
    // body.removeChild(questionEl);
    // body.removeChild(q1);
    body.appendChild(endQuizEl);
    endQuizEl.appendChild(endH2);
    endQuizEl.appendChild(endP);
    endQuizEl.appendChild(initialsForm);
    initialsForm.appendChild(initialsLabel);
    initialsForm.appendChild(initialsInput);
    initialsForm.appendChild(initialsBtn);
}


function countdown() {
    var timeLeft = 75;
    // var penalty = 5;
    // var highScore = endP.textContent;
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
            endQuiz();
        }
        
    }, 1000);

    if (timeLeft >= 0) {
        removeStart();      
        displayQuestion();
        nextQuestion();
        // body.removeChild(q1);
        // body.removeChild(endQuizEl);
    }
    
    if (timeLeft === 0) {
        endQuiz();
        removeQuestions();
    }

    // makes li clickable for answering
    listEl.addEventListener('click', function(event) {
        // call answer fuction-correct vs incorrect
        question++;
        // call function to display new question
        // displayMessage();
        answerQuestion();
        console.log('Hello');
        // if (questionObjects[question].a == questionObjects[question].correctAnswer) {
        //     console.log('correct!');
        //     // displayMessageC();
        // } else {
        //     console.log('incorrect!');
        //     // displayMessageI();
        //     timeLeft = timeLeft - penalty;
        // }

        // // return questionObjects[question].a;
        // var userAnswer = event.target;
        // var g = questionObjects[question].correctAnswer
        // // var correctAnswer = questionObjects[question].correctAnswer;
        // if (userAnswer.matches('li'/g)) {
        //     var displayMessage = document.createElement('div');
        //     displayMessage.setAttribute('id', "display-message");
        //     if (userAnswer.textContent == questionObjects[question].correctAnswer) {
        //         displayMessage.textContent = "Correct!";
        //     }
        // } else {
        //     // if (timeLeft >=0) {
        //     //     timeLeft = timeLeft - penalty;
        //     // }
        //     var displayMessage = document.createElement('div');
        //     displayMessage.setAttribute('id', "display-message");
        //     displayMessage.textContent = "Incorrect!";
        // }
        // console.log('it works');
        
    });
}

// let button store initials
initialsBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var initials = document.getElementById("initials-input").value;
    localStorage.setItem("initials", initials);
    localStorage.getItem("initials");

    window.location.replace("./highscores.html");
    return false; 
});


startBtn.onclick = countdown;