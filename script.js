// VARIABLES
let digitLimit = 16;
let firstNum = "";
let numValue = "";
let operatorValue = '';
let savedNum = '';
let toggleValue = 0;
let secondNum = '';
let resultNum = '';
let storedValue = '';
let storedOperator = '';
// DISPLAY
const display = document.querySelector('#display');

const secondDisplay = document.querySelector('#secondDisplay');

// CLEARS
const clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("click", clearFunc);

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    if (toggleValue == 0) {
        firstNum = '';
        display.innerHTML = firstNum;
    } else {
        secondNum = '';
        display.innerHTML = secondNum;
    }
});

const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', () => {
    if (toggleValue == 0) {
        firstNum = firstNum.slice(0, -1);
        display.innerHTML = firstNum;
    } else {
        secondNum = secondNum.slice(0, -1);
        display.innerHTML = secondNum;
    };
});


const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    storedValue = btn.innerHTML;
    createNum();
  });
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        storedOperator = operator.innerHTML;
        operatorToggle();
    });
});

const equals = document.querySelector('#equals');
equals.addEventListener('click', equalsFunc);



// FUNCTIONS
function createNum() {
    if (display.textContent.length < digitLimit) {
      if (toggleValue == 0) {
      display.innerHTML = firstNum += storedValue;
      } else {
          display.innerHTML = secondNum += storedValue;
      }
    } else {
        if (toggleValue == 0) {
        display.innerHTML = firstNum;
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
    if (firstNum != '') {
        if (toggleValue == 0) {
        savedNum = firstNum;
        firstNum = '';
        secondDisplay.innerHTML = (savedNum += storedOperator);
        toggleValue = 1;
        display.innerHTML = secondNum
        } else {
            firstNum = savedNum;
            savedNum = '';
            secondDisplay.innerHTML = '';
            toggleValue = 0;
            display.innerHTML = firstNum;
            secondNum = ''
        }
     }
};

function clearFunc() {
        display.style.fontSize = "2.5vw";
        display.innerHTML = "";
        firstNum = "";
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



