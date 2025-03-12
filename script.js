// VARIABLES
let digitLimit = 16;
let num = "";
let numValue = "";
let operatorValue = '';
let savedNum = '';
let toggleValue = 0;
let secondNum = '';
let resultNum = '';

// DISPLAY
const display = document.querySelector('#display');

const secondDisplay = document.querySelector('#secondDisplay');

// CLEARS
const clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("click", clearFunc);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    if (toggleValue == 0) {
        num = '';
        display.innerHTML = num;
    } else {
        secondNum = '';
        display.innerHTML = secondNum;
    }
});

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (toggleValue == 0) {
        num = num.slice(0, -1);
        display.innerHTML = num;
    } else {
        secondNum = secondNum.slice(0, -1);
        display.innerHTML = secondNum;
    };
});

// OPERATORS
const division = document.querySelector('#division');
division.addEventListener('click', () => {
    operatorValue = '/';
    operatorToggle();
});

const multiplication = document.querySelector('#multiplication');
multiplication.addEventListener('click', () => {
    operatorValue = '*';
    operatorToggle();
});

const minus = document.querySelector('#minus');
minus.addEventListener('click', () => {
    operatorValue = '-';
    operatorToggle();
});

const plus = document.querySelector('#plus');
plus.addEventListener('click', () => {
    operatorValue = '+';
    operatorToggle();
});

const negation = document.querySelector('#negation');
const period = document.querySelector('#period');

const equals = document.querySelector('#equals');
equals.addEventListener('click', equalsFunc);

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
function createNum() {
    if (display.textContent.length < digitLimit) {
      if (toggleValue == 0) {
      display.innerHTML = num += numValue;
      } else {
          display.innerHTML = secondNum += numValue;
      }
    } else {
        if (toggleValue == 0) {
        display.innerHTML = num;
        } else {
            display.innerHTML = secondNum;
        }
    };
    resize();
    centerAtMax();
};

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

function centerAtMax() {
    if (display.textContent.length == 16) {
        display.style.justifyContent = 'center';
    } else {
        display.style.justifyContent = 'flex-end';
    }
};

function operatorToggle() {
    if (num != '') {
        if (toggleValue == 0) {
        savedNum = num;
        num = '';
        secondDisplay.innerHTML = (savedNum += operatorValue);
        toggleValue = 1;
        display.innerHTML = secondNum
        } else {
            num = savedNum;
            savedNum = '';
            secondDisplay.innerHTML = '';
            toggleValue = 0;
            display.innerHTML = num;
            secondNum = ''
        }
     }
};

function clearFunc() {
        display.style.fontSize = "2.5vw";
        display.innerHTML = "";
        num = "";
        savedNum = '';
        secondNum = '';
        toggleValue = 0;
        secondDisplay.innerHTML = '';
};

function equalsFunc() {
    if (savedNum != '' && secondNum != "" && resultNum == '') {
        let resultString = savedNum += secondNum;
        resultNum =  new Function('return ' + resultString)();
        if (resultNum.toString().length > digitLimit - 1) {
            let currentFontSize = window.getComputedStyle(display).fontSize; 
            let newFontSize = parseFloat(currentFontSize) * 0.5 + "px";
            display.style.fontSize = newFontSize;
        };
        display.innerHTML = resultNum;
        console.log(resultNum);
        historyFunc();
    };
};

function historyFunc() {
    secondDisplay.innerHTML = '';
    toggleValue = 0;
    savedNum = '';
    secondNum = '';
    let history = resultNum;
    resultNum = '';


};
