// display
const display = document.querySelector('#display');
// first row
// Clear all function
const clearAll = document.querySelector('#clear-all');
clearAll.addEventListener('click', () => {
    display.innerHTML = '0';
});
const clear = document.querySelector('#clear');
const backspace = document.querySelector('#backspace');
const division = document.querySelector('#division');
// second row
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const multiplication = document.querySelector('#multiplication');
// third row
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const minus = document.querySelector('#minus');
// fourth row
const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const plus = document.querySelector('#plus');
// fifth row
const negation = document.querySelector('#negation');
const zero = document.querySelector('#zero');
const period = document.querySelector('#period');
const equals = document.querySelector('#equals');

// 
let firstNum = 0;


