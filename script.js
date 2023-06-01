const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.createElement('score');
const timeEl = document.createElement('time');
const endgameEl = document.createElement('end-game');
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
    score = score + 1;
    scoreEl.innerHTML = score;
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
    }
})