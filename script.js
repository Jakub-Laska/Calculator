//           -- display --
const display = document.querySelector('#display');
//           -- first row --
// Clear all function
const clearAll = document.querySelector('#clear-all');
clearAll.addEventListener('click', () => {
    display.innerHTML = '0';
    num = '';
})
// clear function
const clear = document.querySelector('#clear');

const backspace = document.querySelector('#backspace');
// division function
const division = document.querySelector('#division');
// division.addEventListener('click', () => {
//     if (display.textContent.length < digitLimit + 1){
//     display.innerHTML =  num + '/';
//     } else {
//         display.innerHTML = num;
//     } 
// });
//           -- second row --
const seven = document.querySelector('#seven');
seven.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '7';
    } else {
        display.innerHTML = num;
    } 
});
const eight = document.querySelector('#eight');
eight.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '8';
    } else {
        display.innerHTML = num;
    } 
});
const nine = document.querySelector('#nine');
nine.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '9';
    } else {
        display.innerHTML = num;
    } 
});
const multiplication = document.querySelector('#multiplication');

//           -- third row --
const four = document.querySelector('#four');
four.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '4';
    } else {
        display.innerHTML = num;
    } 
});
const five = document.querySelector('#five');
five.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '5';
    } else {
        display.innerHTML = num;
    } 
});
const six = document.querySelector('#six');
six.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '6';
    } else {
        display.innerHTML = num;
    } 
});

const minus = document.querySelector('#minus');

//          -- fourth row --
const one = document.querySelector('#one');
one.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '1';
    } else {
        display.innerHTML = num;
    } 
});

const two = document.querySelector('#two');
two.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '2';
    } else {
        display.innerHTML = num;
    } 
});

const three = document.querySelector('#three');
three.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '3';
    } else {
        display.innerHTML = num;
    } 
});

const plus = document.querySelector('#plus');

//           -- fifth row --
const negation = document.querySelector('#negation');

const zero = document.querySelector('#zero');
zero.addEventListener('click', () => {
    if (display.textContent.length < digitLimit){
    display.innerHTML =  num += '0';
    } else {
        display.innerHTML = num;
    } 
});

const period = document.querySelector('#period');
const equals = document.querySelector('#equals');

//
let num = '';
let firstNum = 0;
let operator = '';
let secondNum = 0;

let digitLimit = 11;
function checkLimit () {
    if (display.textContent.length = 11) {

};
};