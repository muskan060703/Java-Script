# projetcs related to dom

## project link 
[click here] (https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)


#solution code 

##project 1 

```javascript 

//selecting button

const buttons = document.querySelectorAll('.button');
const body = document.body;
// or
// const body = document.querySelectorAll("body");
//events

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.style.background = e.target.id;
    } else if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      body.style.background = 'blue';
    } else if (e.target.id === 'yellow') {
      document.body.style.background = e.target.id;
    } else if (e.target.id === 'lightblue') {
      document.body.style.background = e.target.id;
    }
  });
});


```
#solution code 

##project 2

```javascript 
const form = document.querySelector('form');

//this usecase will give you empty values
//const height = parseInt(document.querySelector('#height').value);

//stopping deault action of submit button
// submit button sends data by get or by post method

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);

  const weight = parseInt(document.querySelector('#weight').value);

  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = weight / ((height * height) / 10000).toFixed(2); // till 2 decimal value
    //show the result
    if (bmi < 18.6) {
      results.innerHTML = `<h4>YOU ARE UNDER WEIGHT</h4><span>${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `<h4>YOU HAVE NORMAL WEIGHT</h4><span>${bmi}</span>`;
    } else {
      results.innerHTML = `<h4>YOU ARE OVER WEIGHT </h4><span>${bmi}</span>`;
    }
  }
});


```

#solution code 
## project 3

```javascript

//where the time is displayed

const clock = document.getElementById('clock');

let date = new Date();
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

//event - method -> set interval
//parameters -> function , seconds -> 1000
setInterval(() => {
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```


#solution code 
## project 4 
```javascript 
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
let userInput = document.getElementById('guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = []; // previous guesses
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = userInput.value;

    valdateGuess(guess);
  });
}

function valdateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess > 100) {
    alert('please enter a number less than 100');
  } else if (guess < 0) {
    alert('please enter a number greater than 0 ');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`GAME OVER. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage('you won!!!');
    endGame();
  } else if (guess > randomNumber) {
    displayMessage(`Value is too high`);
  } else {
    displayMessage(`Value is too low`);
  }
}

function displayGuess(guess) {
  userInput.value = ''; //clean up
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  //interact with dom
  lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endGame() {
  //userInput.ariaDisabled = true;
  userInput.setAttribute('disabled', true);
  userInput.value = '';
  p.classList.add('button');
  p.innerHTML = `<h2 id = "newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector('#newGame');
  newGameBtn.addEventListener('click', () => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
  });
}
```