
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
let history = '';
let resultRound;
let fullHistory;

// SOUNDS
const clickSound = new Audio('sfx/clickSound.ogg');

function playClickSound() {
    clickSound.currentTime = 0;
    clickSound.play();
}

const historySound = new Audio('sfx/historySound.mp3');

function playHistorySound() {
    historySound.currentTime = 0;
    historySound.play();
}

const operatorSound = new Audio('sfx/operatorSound.wav');

function playOperatorSound() {
    operatorSound.currentTime = 0;
    operatorSound.play();
}

const equalsSound = new Audio('sfx/equalsSound.wav');

function playEqualsSound() {
    equalsSound.currentTime = 0;
    equalsSound.play();
}

const negationPeriodSound = new Audio('sfx/negationPeriodSound.wav');

function playNegationPeriodSound() {
    negationPeriodSound.currentTime = 0;
    negationPeriodSound.play();
}

const backspaceSound = new Audio('sfx/backspaceSound.wav');

function playBackspaceSound() {
    backspaceSound.currentTime = 0;
    backspaceSound.play();
}

const clearAllSound = new Audio('sfx/clearAllSound.mp3');

function playClearAllSound() {
    clearAllSound.currentTime = 0;
    clearAllSound.play();
}

const clearSound = new Audio('sfx/clearSound.mp3');

function playClearSound() {
    clearSound.currentTime = 0;
    clearSound.play();
}
// DISPLAY
const display = document.querySelector('#display');

const secondDisplay = document.querySelector('#secondDisplay');

// CLEARS(
const clearAll = document.querySelector("#clearAll");
clearAll.addEventListener("click", clearAllFunc);
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        clearAllFunc();
    }
});

const clear = document.querySelector('#clear');
clear.addEventListener('click', clearFunc);
document.addEventListener('keydown', (event) => {
    if (event.key === 'c') {
        clearFunc();
    }
});


const backspace = document.querySelector('#backspace');
backspace.addEventListener('click', backspaceFunc);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Backspace') {
        backspaceFunc()
    }
});

// NUMBERS AND OPERATORS
const buttons = document.querySelectorAll(".btn");
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
    storedValue = btn.innerHTML;
    createNum();
    });
});
document.addEventListener('keydown', (event) => {
    if (event.key >= '1' && event.key <= '9') {
        storedValue = event.key;
        createNum();
    };
});

// zero
const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (display.innerHTML != '' || resultRound == '') {
            storedValue = zero.innerHTML;
            createNum();
        }
});
document.addEventListener('keydown', (event) => {
    if (display.innerHTML != '0' || resultRound == '0') {
        if (event.key == '0') {
            storedValue = event.key;
            createNum();
        }
    }
});

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        storedOperator = operator.innerHTML;
        operatorToggle();
    });
});
const operatorBtns = ['+', '-', '/', '*'];
document.addEventListener('keydown', (event) => {
    if (operatorBtns.includes(event.key)) {
        storedOperator = event.key;
        operatorToggle();
    }
});



const period = document.querySelector('#period');
period.addEventListener('click', periodFunc);
document.addEventListener('keydown', (event) => {
    if (event.key === '.') {
        periodFunc();
    };
});

const negation = document.querySelector('#negation').addEventListener('click', negationFunc);
document.addEventListener('keydown', (event) => {
    if (event.shiftKey) {
        if (event.key === '_') {
            negationFunc();
        };
    };
});


const equals = document.querySelector('#equals');
equals.addEventListener('click', equalsFunc);
document.addEventListener('keydown', (event) => {
    if (event.key === '=') {
        equalsFunc();
    };
});



// FUNCTIONS
function createNum() {
    if (display.textContent.length < digitLimit) {
    if (toggleValue == 0) {
    display.innerHTML = firstNum += storedValue;
    } else {
        display.innerHTML = secondNum += storedValue;
    }
    playClickSound()
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
            if (firstNum.endsWith('.')) {
                firstNum = firstNum.slice(0, -1);
            };
        savedNum = firstNum;
        secondDisplay.innerHTML = (savedNum += storedOperator);
        toggleValue = 1;
        display.innerHTML = secondNum
        periodToggle = 0;
        playOperatorSound()
        } else if (secondNum == '') {
            savedNum = '';
            secondDisplay.innerHTML = '';
            toggleValue = 0;
            display.innerHTML = firstNum;
            periodToggle = 0;
        playOperatorSound()
        }
    }
};

function clearAllFunc() {
    if (display.textContent != '' || secondDisplay.textContent != '') {
        display.style.fontSize = "2.5vw";
        display.innerHTML = "";
        firstNum = '';
        savedNum = '';
        secondNum = '';
        toggleValue = 0;
        periodToggle = 0;
        secondDisplay.innerHTML = '';
        playClearAllSound()
    }
};

function clearFunc() {
    if (toggleValue == 0 && display.textContent != '') {
        firstNum = '';
        display.innerHTML = firstNum;
        playClearSound()
    } else if (toggleValue == 1 && display.textContent != '') {
        secondNum = '';
        display.innerHTML = secondNum;
        playClearSound()
    };
    periodToggle = 0;
};

function backspaceFunc() {
    if (toggleValue == 0 && display.textContent != '') {
        firstNum = firstNum.slice(0, -1);
        display.innerHTML = firstNum;
        playBackspaceSound()
    } else if (toggleValue == 1 && display.textContent != ''){
        secondNum = secondNum.slice(0, -1);
        display.innerHTML = secondNum;
        playBackspaceSound()
    };
};

function periodFunc() {
    if (periodToggle == 0) {
        if (toggleValue == 0) {
            firstNum += '.';
            display.innerHTML = firstNum;
        } else {
            secondNum += '.';
            display.innerHTML = secondNum;
        };
        playNegationPeriodSound()
        periodToggle = 1;
    } else if (periodToggle == 1) {
        if (toggleValue == 0) {
            firstNum = firstNum.replace(/\./g, '');
            display.innerHTML = firstNum;
        } else {
            secondNum = secondNum.replace(/\./g, '');
            display.innerHTML = secondNum;
        };
        playNegationPeriodSound()
        periodToggle = 0;
    };
};

function negationFunc() {
    if (toggleValue == 0 && display.textContent != '') {
        if (firstNum > 0) {
            firstNum = `-${firstNum}`;
            display.innerHTML = firstNum;
        } else if (firstNum < 0) {
            firstNum = -firstNum;
            display.innerHTML = firstNum;
        };
    playNegationPeriodSound()
    } else if (toggleValue == 1 && display.textContent != '') {
        if (secondNum > 0) {
            secondNum = `-${secondNum}`;
            display.innerHTML = secondNum;
        } else if (secondNum < 0) {
            secondNum = -secondNum;
            display.innerHTML = secondNum;
        };
    playNegationPeriodSound()
    };
};

function equalsFunc() {
    if (savedNum != '' && secondNum != "" && resultNum == '') {
        let resultString = savedNum += secondNum;
        if (resultString == '0/0') {
            clearFunc();
            alert('bruh');
            console.log(display.innerHTML);
        } else {
            resultNum = new Function('return ' + resultString)();
            resultRound = parseFloat(resultNum.toFixed(4));
            display.innerHTML = resultRound;
            display.setAttribute('title', resultNum);
            console.log(resultNum);
            periodToggle = 0;
        };
        secondDisplay.innerHTML = '';
        toggleValue = 0;
        savedNum = '';
        secondNum = '';
        resultNum = '';
        firstNum = '';
        history = resultString + '=' + resultRound;    
        console.log(history);
        historyFunc(resultString + ' = ' + resultRound);
        playEqualsSound()
    };
};

const historyList = document.querySelector('#historyList');
function historyFunc(entry) {
    let historyCount = historyList.children.length;

    if (historyCount > 10) {
        historyList.replaceChildren();
    };

    let newEntry = document.createElement('li');
    newEntry.textContent = entry;
    historyList.prepend(newEntry);
};

const calcBody = document.querySelector('#calcBody');
const bodyContainer = document.querySelector('#calcContent');
const historyBtn = document.querySelector('#historyBtn');
const historyScreen = document.querySelector('#historyScreen');
let historyToggle = 0;

historyBtn.addEventListener('click', historyToggleFunc)

document.addEventListener('keydown', (event) => {
    if (event.key == 'h') {
        historyToggleFunc();
    }
});

function historyToggleFunc() {
    if (historyToggle == 0) {
        bodyContainer.style.display = 'none';
        historyScreen.style.display = 'flex';
        historyToggle = 1;
    } else {
        bodyContainer.style.display = 'flex';
        historyScreen.style.display = 'none';
        historyToggle = 0;
    };
    playHistorySound();
}