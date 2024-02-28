//Acceptance Criteria
// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score

var startBtn = document.getElementById('#start-btn');
//var quizQuestions = document.getElementById('#quiz-questions');
var results = document.getElementById('#quiz-results');
var timer = document.getElementById('#countdown');
var highscores = document.getElementById('#highscores');
var userInitials = document.getElementById('#initials');

//start quiz function
function startQuiz (){
    console.log('starting quiz!')
}

//event listener for the start button to run start quiz function
startBtn.addEventListener("click", startQuiz);

//quiz questions, options and answers
var quizQuestions = [
{
    question: 'What is a boolean?',
    options: ['a data type with two possible values: true or false.','a sequence of characters that represents text','an entity that has state and behavior','a variable in JavaScript that is without any value'],
    answer: 'a data type with two possible values: true or false.',
},
{
    question: '',
    options: ['','','',''],
    answer: '',
},
{
    question: '',
    options: ['','','',''],
    answer: '',
},
{
    question: '',
    options: ['','','',''],
    answer: '',
},
{
    question: '',
    options: ['','','',''],
    answer: '',
},
{
    question: '',
    options: ['','','',''],
    answer: '',
},
];

