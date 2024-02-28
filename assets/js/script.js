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

//created variable for start button
var startBtn = document.getElementById('#start-btn');
var startPage = document.querySelector('#start-page');
var optionsEl = document.querySelectorAll('.options');
//start quiz function
function startQuiz (){
    startPage.style.display = 'none';
    optionsEl.forEach(function(options) {
        options.style.display = 'block';
    });
    console.log('starting quiz!')
    startTimer();
    displayQuestions();
}

//event listener for the start button to run start quiz function
startBtn = addEventListener('click', startQuiz);
var timer = document.getElementById('countdown');
//when start button is clicked the timer begins
function startTimer(){
    var timeLeft = 60;
    var timeInterval = setInterval(function(){
    if (timeLeft > 1) {
        timer.textContent = 'Time remaining: ' + timeLeft + ' seconds'
        timeLeft--;
    }else if (timeLeft === 1){
        timer.textContent = 'Time remaining: ' + timeLeft + ' second'
        timeLeft--;
    }else if (timeLeft === 0){
        timer.textContent = 'Time is up!'
        clearInterval(timeInterval)
    }
}, 1000);
}

//array for quiz questions, options and the correct answer.
var questions = [
{
    question: 'What is a boolean?',
    options: ['a data type with two possible values: true or false.','a sequence of characters that represents text','an entity that has state and behavior','a variable in JavaScript that is without any value'],
    answer: 'a data type with two possible values: true or false.',
},
{
    question: 'What is the HTML tag for linking a javaScript file?',
    options: ['<link>','<script>','<meta>','<div>'],
    answer: '<script>',
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
console.log(questions.length);


var quizQuestions = document.getElementById('#quiz-questions');
var results = document.getElementById('#quiz-results');
var highscores = document.getElementById('#highscores');
var userInitials = document.getElementById('#initials');

//function to display questions
function displayQuestions() {
    for (var i = 0; i < questions.length; i++){
        questions = Math.floor(Math.random())
    }

}

