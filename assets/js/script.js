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

//created variable for start button, star page, and options
var startBtn = document.getElementById('start-btn');
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
startBtn.addEventListener('click', startQuiz);
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
// {
//     question: 'hdfgjsioak',
//     options: ['','','', ''],
//     answer: '',
// },
{
    question: 'What is the HTML tag for linking a javaScript file?',
    options: ['&lt;link&gt;','&lt;script&gt;','&lt;meta&gt;','&lt;div&gt;'],
    answer: '&lt;script&gt;',
},
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
// {
//     question: '',
//     options: ['','','',''],
//     answer: '',
// },
];
//wanted to see how the array was working --> console.log(questions.length);

// Get the elements by ID
var quizQuestions = document.getElementById('quiz-questions');
var results = document.getElementById('quiz-results');
var highscores = document.getElementById('highscores');
var userInitials = document.getElementById('initials');

// Function to display questions
function displayQuestions() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    var randomQuestion = questions[randomIndex];
    
    quizQuestions.innerHTML = `
        <h3>${randomQuestion.question}</h3>
            ${randomQuestion.options.map(option => `<button>${option}</button>`).join('<br>')}
            <hr />
    `;
}
