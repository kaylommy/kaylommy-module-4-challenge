 //created variable for needed Ids, classes, etc.
var startBtn = document.getElementById('start-btn');
var startPage = document.querySelector('#start-page');
var restartBtn = document.getElementById('restart-btn')
var score = document.getElementById('score');
var quizQuestions = document.getElementById('quiz-questions');
var results = document.getElementById('quiz-results');
var highscores = document.getElementById('highscores');
var userInitials = document.getElementById('initials');
var container=document.querySelector('.container')
var timeInterval = 0;
var timeLeft = 0;
var saveBtn = document.getElementById('saveBtn');
var userScores = JSON.parse(localStorage.getItem('userScores')) || [];
var scoreList = document.getElementById('scoreList');
var clearHistory = document.getElementById('clear-history');
var message = document.getElementById('message');

//start quiz function
function startQuiz (){
    startPage.style.display = 'none';
    quizQuestions.style.display = 'block';
    console.log('starting quiz!')
    startTimer();
    displayQuestions();
}

//event listener for the start button to run start quiz function
startBtn.addEventListener('click', startQuiz);
var timer = document.getElementById('countdown');
timer.textContent = 'Time remaining:';

//function for timer to begin (delayed)
function startTimer(){
    timeLeft = 60;
    timeInterval = setInterval(function(){
        timeLeft--;
    if (timeLeft > 1) {
        timer.textContent = 'Time remaining: ' + timeLeft + ' seconds'
    }else if (timeLeft === 1){
        timer.textContent = 'Time remaining: ' + timeLeft + ' second'
    }else if (timeLeft === 0){
        timer.textContent = 'Time is up!'
        clearInterval(timeInterval)
        displayResults();
    }
}, 1000);
}

//array for quiz questions, options and the correct answer.
var questions = [
{
    question: 'hdfgjsioak',
    options: ['a','b','c', 'd'],
    answer: 'a',
},
{
    question: 'What is the HTML tag for linking a javaScript file?',
    options: ['&lt;link&gt;','&lt;script&gt;','&lt;meta&gt;','&lt;div&gt;'],
    answer: '<script>',
},
{
    question: 'dfh',
    options: ['a','b','c','d'],
    answer: 'a',
},
{
    question: 'hfgd',
    options: ['a','b','c','d'],
    answer: 'a',
},
{
    question: 'fdgh',
    options: ['a','b','c','d'],
    answer: 'a',
},
];

// Function to display questions
function displayQuestions() {
    message.textContent = '';
    if (questions.length === 0) {
        console.log('Quiz completed!'); // Display a message indicating the end of the quiz
        displayResults(); // Stop the function execution
    }
    var randomIndex = Math.floor(Math.random() * questions.length);
    var randomQuestion = questions[randomIndex];
    
    quizQuestions.innerHTML = `
        <h3>${randomQuestion.question}</h3>
            ${randomQuestion.options.map(option => `<button>${option}</button>`).join('<br>')}
    `;
    var buttons = quizQuestions.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (button.textContent === randomQuestion.answer) {
                message.textContent = 'correct!'
            } else {
                timeLeft = timeLeft -5;
                message.textContent = 'incorrect!'
            }
            questions.splice(randomIndex, 1);
            setTimeout(function(){
                if (questions.length === 0){
                    message.textContent = '';
                    clearInterval(timeInterval);
                    displayResults();
                    return;
                }
                displayQuestions();
            }, 500)

        });
    });
}

//store initials and results, display as highscore
function displayResults(){
    score.textContent = 'Congratulations! Your score is: ' + timeLeft
    results.style.display = 'block';
        quizQuestions.style.display = 'none';
};

function displayHighscores(){
    scoreList.textContent = ''
    userScores = userScores.sort(function(a,b){
        return b.score - a.score
    });
    for (i=0; i < userScores.length; i++){
        var li = document.createElement('li');
        li.textContent = userScores[i].initials + '-' + userScores[i].score
        scoreList.appendChild(li)
    }
};
//event listeners for end page buttons
saveBtn.addEventListener('click', function(){
    var initials = userInitials.value
    userScores.push({
        initials, score:timeLeft
    })
    localStorage.setItem('userScores', JSON.stringify(userScores))
    results.style.display = 'none';
    highscores.style.display = 'block';
    displayHighscores();
});

clearHistory.addEventListener('click', function(){
    localStorage.clear();
    scoreList.textContent = '';
});

restartBtn.addEventListener('click', function(){
    window.location.reload();
});



