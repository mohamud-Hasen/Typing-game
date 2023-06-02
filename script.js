const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');

const words = [
    'sigh', 'tense', 'airplane', 'ball', 'pies', 'juice', 'warlike', 'bad', 'north', 'dependent', 'steer', 
    'silver', 'highfalutine', 'superficial', 'quince', 'eighties', 'feable', 'admit', 'drag', 'loving'
];

// init word 
let randomWord;

// init score
let score = 0;

// init time
let time = 10; 
// set difficulty to value in localstorage or mediun
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';

// set difficulty select value
difficultySelect.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';
// focus on text on start
text.focus();

// start countdown
const timeInterval = setInterval(updateTime, 1000);
 
// generate random word from array
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}
// add word to dom
function addWordToDom() {
    randomWord = getRandomWord();
    word.innerHTML = randomWord;
}
// update score
function updateScore() {
    score++;
    scoreEl.innerHTML = score;
}
// update time
function updateTime() {
    time--;
    timeEl.innerHTML = time + 's';
    if(time === 0){
        clearInterval(timeInterval);
        // end game
        gameOver();
    }
}
// if is game over, show end screen
function gameOver() {
    endgameEl.innerHTML = `
    <h1>Time ran out</h>
    <p> your final score is ${score}</p>
    <button onClick="location.reload()">Reload</button>
    `;
    endgameEl.style.display = 'flex';
}


addWordToDom();

// even listers
text.addEventListener('input', e => {
    const insertedText = e.target.value;
    if(insertedText === randomWord){
        addWordToDom();
        updateScore();
        // clear input
        e.target.value = '';
        
        if(difficulty === 'hard') {
            time+= 2;
        }else if(difficulty === 'medium') {
            time+= 3;
        }else {
            time+= 5;
        }
        
        
        updateTime();
    }
});
// settings btn click
settingsBtn.addEventListener('clic', () => {
    settings.classList.toggle('hide');
});
// settings select
settingsForm.addEventListener('change', e => {
    difficulty = e.target.value;
    localStorage.setItem('difficulty', difficulty);
})