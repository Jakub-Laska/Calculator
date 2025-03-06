// DISPLAY
const display = document.querySelector('#display');

// CLEARS
const clearAll = document.querySelector("#clear-all");
clearAll.addEventListener("click", () => {
  display.style.fontSize = "2.5vw";
  display.innerHTML = "";
  num = "";
});

const clear = document.querySelector('#clear');

const backspace = document.querySelector('#backspace');

// OPERATORS
const division = document.querySelector('#division');
const multiplication = document.querySelector('#multiplication');
const minus = document.querySelector('#minus');
const plus = document.querySelector('#plus');
const negation = document.querySelector('#negation');
const period = document.querySelector('#period');
const equals = document.querySelector('#equals');

// NUMBERS
const zero = document.querySelector("#zero");
zero.addEventListener("click", () => {
  numValue = 0;
  createNum();
});

const one = document.querySelector('#one');
one.addEventListener('click', () => {
    numValue = 1;
    createNum();
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    numValue = 2;
    createNum();
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    numValue = 3;
    createNum(); 
});

const four = document.querySelector('#four');
four.addEventListener('click', () => {
    numValue = 4;
    createNum();
});

const five = document.querySelector('#five');
five.addEventListener('click', () => {
    numValue = 5;
    createNum();
});

const six = document.querySelector('#six');
six.addEventListener('click', () => {
    numValue = 6;
    createNum();
});

const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    numValue = 7;
    createNum();
});

const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    numValue = 8;
    createNum();
});

const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    numValue = 9;
    createNum();
});


// FUNCTIONS
let digitLimit = 16;
let num = "";
let numValue = "";

function createNum() {
  if (display.textContent.length < digitLimit) {
    display.innerHTML = num += numValue;
  } else {
    display.innerHTML = num;
  }
  resize();
  centerAtMax();
}

function resize() {
    if (screen.width < 600) {
        if (display.textContent.length > 10) {
        display.style.fontSize = "3vw";
        } else {
        display.style.fontSize = "4.5vw";
        }
    } else if (screen.width < 1100) {
        if (display.textContent.length > 10) {
        display.style.fontSize = "2.5vw";
        } else {
        display.style.fontSize = "3.5vw";
        }
    } else if (screen.width > 1100) {
        if (display.textContent.length > 10) {
        display.style.fontSize = "1.25vw";
        } else {
        display.style.fontSize = "1.75vw";
        }
    }
};

function centerAtMax () {
    if (display.textContent.length == 16) {
        display.style.justifyContent = 'center';
    } else {
        display.style.justifyContent = 'flex-end';
    }
};