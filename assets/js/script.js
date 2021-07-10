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
// var remove = document.removeChild();

var q1 = document.createElement("div");
var h1El = document.createElement("h1");
var quizP = document.createElement("p");
var startBtn = document.createElement("button");


h1El.textContent = 'Coding Quiz Challenge',
quizP.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!',
startBtn.textContent = "START QUIZ",


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
highscoreEl.setAttribute('style', 'margin-right: 40%; margin-left: 1%;')

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

//******************************************************************************************************************* */

//******************************************************************************************* */

function removeQuestions() {
    body.removeChild(questionEl);
} 
var question = 0;
// var message = setInterval(answerQuestion, 1000);
// questionObjects[question].q
// addEventLister to the list item answers to make this clickable for functions
var answer1 = li1.addEventListener('click', function() {
    // call answer fuction-correct vs incorrect
    question++;
    // call function to display new question
    // displayMessage();
    answerQuestion();
    console.log('Hello');
});
var answer2 = li2.addEventListener('click', function() {
    // call answer fuction-correct vs incorrect
    question++;
    // displayMessage();
    // call function to display new question
    answerQuestion();
    console.log('Hello');
});
var answer3 = li3.addEventListener('click', function() {
    // call answer fuction-correct vs incorrect
    question++;
    // displayMessage();
    // call function to display new question
    answerQuestion();
    console.log('Hello');
});
var answer4 = li4.addEventListener('click', function() {
    // call answer fuction-correct vs incorrect
    question++;
    // displayMessage();
    // call function to display new question
    answerQuestion();
    console.log('Hello');
});


function answerQuestion() {
    if (question >= questionObjects.length) {
        removeQuestions();
        endQuiz();
    // } else if(question === questionObjects.length) {
    //     // displayMessage();
    //     endQuiz();
    }  else {
        // displayMessage();
        nextQuestion();
    }
}


// function displayMessage() {
    
//     if (answer1 === questionObjects[question].correctAnswer && questionObjects[question].a1 === questionObjects[question].correctAnswer); {
//         message.textContent = "Correct!";
//         body.appendChild(message);        
//     } else {
//       message.textContent = "Inorrect!";
//       body.appendChild(message);  
//     }
// }
var questionObjects = [
    {
        q: 'Commonly used data types DO NOT include:',
        a1: '1. strings',
        a2: '2. booleans',
        a3: '3. alerts',
        a4: '4. numbers',
        // changed
        correctAnswer: '3. alerts',
    },
    {
        q: 'The condition in an if/else statement is enclosed with _________.',
        a1: '1. quotes',
        a2: '2. curly brackets',
        a3: '3. parenthesis',
        a4: '4. square brackets',
        correctAnswer: '3. parenthesis',
    },
    {
        q: 'Arrays in JavaScript can be used to store_________.',
        a1: '1. numbers and strings',
        a2: '2. other arrays',
        a3: '3. booleans',
        a4: '4. all of the above',
        correctAnswer: '4. all of the above',
    },
    {
        q: 'String values must be enclosed within _____ when being assigned to variables.',
        a1: '1. commas',
        a2: '2. quotes',
        a3: '3. curly brackets',
        a4: '4. parenthesis',
        correctAnswer: '2. quotes',
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        a1: '1. console.log',
        a2: '2. terminal/bash',
        a3: '3. for loops',
        a4: '4. JavaScript',
        correctAnswer: '1. console.log',
    },
    // if (li1 
    // console.log(clicked)
];

    
// var messageC = 'Correct!';
// var massageI = 'Incorrect!';
// function displayMessage() {
//     // var messageInterval = setInterval( function() { 
//         // let userAnswer = questionObjects[question].a1 || questionObjects[question].a2 || questionObjects[question].a3 || questionObjects[question].a4;
//         let userAnswer = answer1;
//         let answer = questionObjects[question].correctAnswer;
//         if (userAnswer == answer) {
//             message.textContent = "Correct!";
//             body.appendChild(message);  
//             // clearInterval(messageInterval);
//         // if (questionObjects[question].a1 === questionObjects[question].correctAnswer 
//         //     || questionObjects[question].a2 === questionObjects[question].correctAnswer || questionObjects[question].a3 === questionObjects[question].correctAnswer || questionObjects[question].a4 === questionObjects[question].correctAnswer
//         //     ) {
//         //     messageC.textContent = "Correct!";
//         //     body.appendChild(messageC);        
//         // } else if (answer2 === true && questionObjects[question].a2 === questionObjects[question].correctAnswer) {
//         //     messageC.textContent = 'Correct!';
//         //     body.appendChild(messageC); 
//         // } else if (answer3 === true && questionObjects[question].a3 === questionObjects[question].correctAnswer) {
//         //     messageC.textContent = 'Correct!';
//         //     body.appendChild(messageC); 
//         // } else if (answer4 === true && questionObjects[question].a4 === questionObjects[question].correctAnswer) {
//         //     messageC.textContent = 'Correct!';
//         //     body.appendChild(messageC); 
//         } else {
//             message.textContent = "Incorrect!";
//             body.appendChild(message);
//             // clearInterval(messageInterval);        
//         }
//     // }, 20);
// }

endH2.textContent = 'All done!';
// endP.textContent = '';
initialsLabel.textContent = 'Enter Initials:';
initialsBtn.textContent = "Submit";




function removeStart() {
    body.removeChild(q1);
}

function nextQuestion() {
    askQuestion.textContent = questionObjects[question].q
    li1.textContent = questionObjects[question].a1
    li2.textContent = questionObjects[question].a2
    li3.textContent = questionObjects[question].a3
    li4.textContent = questionObjects[question].a4
}

function displayQuestion() {
    body.appendChild(questionEl);
    questionEl.appendChild(askQuestion);
    questionEl.appendChild(listEl);
    listEl.appendChild(li1);
    listEl.appendChild(li2);
    listEl.appendChild(li3);
    listEl.appendChild(li4);
}

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
    var timeLeft = 10;
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
        removeStart()        
        displayQuestion();
        nextQuestion();
        // body.removeChild(q1);
        // body.removeChild(endQuizEl);
    }
    
}

// function openHighScores() {
//     var url = "./highscores.html";
//     var win = window.open(url, '_parent');
//         win.focus();
// }


initialsBtn.addEventListener('click', function(event) {
    event.preventDefault();

    var initials = document.getElementById("initials-input").value;
    localStorage.setItem("initials", initials);
    localStorage.getItem("initials");

    window.location.replace("./highscores.html");
    return false; 
    // openHighScores();
    // var initialPage = "./index.html";
    // location.replace("./highscores.html/#" + "_parent");
    // window.location.href("./highscores.html");
    // , "_parent";
});


// function storeScore() {
//     localStorage.setItem("highScore", timeLeft);
//     console.log(storeScore());
// }
// function recallScore() {
//     var highScore = localStorage.getItem("highscore");


//     console.log(highScore);
// }

// function logHighScore 

startBtn.onclick = countdown;

// need to figure out how to compare my clicked answers with my answers
// need to figure out how to display correct or incorrect message
// need to figure out how to 
// need to figure out how to remove null from highscores when page reloads

// need to figure out how to have initials button open highscores.html DONE

// need to render localStorage setItem highscore and initials DONE
// need to recall localStorage getItems hs and init DONE
// need to add a function to clear localStorage to clear button DONE

// *******************************************************************************************************************************************

// when countdown initiated, timer starts, questions displayed === function initiates **** need function for Qs
// when answer clicked, this is set to new object in array; iterate?

// var element = document.getElementById('');

// displayFirst();



// when the page starts display first page
    // when the button is clicked === replace field with fist question
        // when answer clicked === replace field with next question


// h1El.textContent = '';
// quizP.textContent = '';
// startBtn.textContent = '';

// function questionDisplay() {
    
// }

// function displayFirst () {
//     questionEl = '';
//      //= '';
// }

// startBtn.addEventListener('click', function() {
    
//     countdown();

// });

// li1.textContent = '';
// li2.textContent = '';
// li3.textContent = '';
// li4.textContent = '';



// li1.addEventListener('click', displayMessage);
// li2.addEventListener('click', displayMessage);
// li3.addEventListener('click', displayMessage);
// li4.addEventListener('click', displayMessage);



    // askQuestion.textContent = questionObjects[i].q;
    // li1.textContent = questionObjects[i].a1;
    // li2.textContent = questionObjects[i].a2;
    // li3.textContent = questionObjects[i].a3;
    // li4.textContent = questionObjects[i].a4;

// add question number variable starting at 0
    // every time question answered add 1 to question number
// new function to clear current question
    // function to add next question

// var myVar = setInterval(setColor, 300);

// function setColor() {
//   var x = document.body;
//   x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
// }

// function stopColor() {
//   clearInterval(myVar);
// }

// var nextQuestion = function() {
    //     questionObjects++;
    // }
    // function setQuestionText() {
    //     questionObjects[i].q = '';
    //     questionObjects[i].a = '';
    // }
    // for (var i = 0; i < questionObjects.length; i++) {

    //     //     var answer = alert(questionObjects[i].a);
         
    //     li1.addEventListener('click', displayMessage);
    //     li2.addEventListener('click', displayMessage);
    //     li3.addEventListener('click', displayMessage);
    //     li4.addEventListener('click', displayMessage);

    //     if (questionObjects[i].a === true && questionObjects[i].a === questionObjects[i].correctAnswer) {
    //         displayMessage;
    //     }
        

    //     // if (answered === true && questionObjects[i].a === correctAnswer) {
    //     //     // create function messageDisplay() correct to call on for right or wrong with bottom border attached to question div
    //     //     i = i + 1;
    //     // } else if (answered === true && questionObjects[i].a !== correctAnswer) {
    //     //     // massageDisplay wrong
    //     //     i = i + 1;
    //     // } else {
            
    //     // }
            
    // }

// // questionObjects[a].addEventListener('click', function() {
// //     if () {};
// // });

// askQuestion.textContent = '';
// li1.textContent = '';
// li2.textContent = '';
// li3.textContent = '';
// li4.textContent = '';

// endH2.textContent = '',
// endP.textContent = '',
// initialsLabel.textContent = '',
// initialsBtn.textContent = '',

// li1.addEventListener('click', );
// li2.addEventListener('click', );
// li3.addEventListener('click', );
// li4.addEventListener('click', );

// // do i need prevent default?
// // startBtn.addEventListener('click', function() {
// //     if (countdown === true) {
        
// //     }
// // });

// if (timeLeft === 0) {
    //     removeQuestions();
    //     endQuiz();
    // }