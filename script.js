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
let periodToggle = 0;
let history;
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
    };
    periodToggle = 0;
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

// NUMBERS AND OPERATORS
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

const period = document.querySelector('#period');
period.addEventListener('click', () => {
    if (display.innerHTML != '' && periodToggle == 0) {
        if (toggleValue == 0) {
            firstNum += '.';
            display.innerHTML = firstNum;
        } else {
            secondNum += '.';
            display.innerHTML = secondNum;
        };
        periodToggle = 1;
    } else if (periodToggle == 1) {
        if (toggleValue == 0) {
            firstNum = firstNum.replace(/\./g, '');
            display.innerHTML = firstNum;
        } else {
            secondNum = secondNum.replace(/\./g, '');
            display.innerHTML = secondNum;
        };
        periodToggle = 0;
    };
});
    


const negation = document.querySelector('#negation').addEventListener('click', () => {
        if (toggleValue == 0) {
            if (firstNum > 0) {
                firstNum = `-${firstNum}`;
                display.innerHTML = firstNum;
            } else if (firstNum < 0) {
                firstNum = -firstNum;
                display.innerHTML = firstNum;
            };
        } else {
            if (secondNum > 0) {
                secondNum = `-${secondNum}`;
                display.innerHTML = secondNum;
            } else if (secondNum < 0) {
                secondNum = -secondNum;
                display.innerHTML = secondNum;
            };
        };
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

function operatorToggle() {
    if (firstNum != '') {
        if (toggleValue == 0) {
        savedNum = firstNum;
        firstNum = '';
        secondDisplay.innerHTML = (savedNum += storedOperator);
        toggleValue = 1;
        display.innerHTML = secondNum
        periodToggle = 0;
        } else {
            firstNum = savedNum;
            savedNum = '';
            secondDisplay.innerHTML = '';
            toggleValue = 0;
            display.innerHTML = firstNum;
            secondNum = ''
            periodToggle = 0;
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
        periodToggle = 0;
        secondDisplay.innerHTML = '';
};

function equalsFunc() {
    if (savedNum != '' && secondNum != "" && resultNum == '') {
        let resultString = savedNum += secondNum;
        history = resultString;
        if (resultString == '0/0') {
            clearFunc();
            historyFunc();
            alert('bruh');
            console.log(display.innerHTML);
        } else {
            resultNum = new Function('return ' + resultString)();
            let resultRound = parseFloat(resultNum.toFixed(4));
            display.innerHTML = resultRound;
            display.setAttribute('title', resultNum);
            console.log(resultNum);
            historyFunc();
            periodToggle = 0;
        };    
    };
};

function historyFunc() {
    secondDisplay.innerHTML = '';
    toggleValue = 0;
    savedNum = '';
    secondNum = '';
    resultNum = '';
};


const bodyContainer = document.querySelector('#calcContent');
const historyBtn = document.querySelector('#historyBtn');
let historyToggle = 0;

historyBtn.addEventListener('click', () => {
    if (historyToggle == 0) {
        bodyContainer.style.visibility = 'hidden';
        historyToggle = 1;
    } else {
        bodyContainer.style.visibility = 'visible';
        historyToggle = 0;
    };
});