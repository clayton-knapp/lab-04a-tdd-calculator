// import functions and grab DOM elements
// initialize state
// set event listeners to update state and DOM
import { add } from './calculator.js';
import { subtract } from './calculator.js';
import { multiply } from './calculator.js';
import { divide } from './calculator.js';
import { toNumber } from './calculator.js';


//ADDITION
// add elements
const addend1 = document.getElementById('addend1');
const addend2 = document.getElementById('addend2');
const sumDisplay = document.getElementById('sum-display');
const addButton = document.getElementById('add-button');

// add listener
addButton.addEventListener('click', () =>{
    //console.log(addend1.value, addend2.value);
    //const sum = Number(addend1.value) + Number(addend2.value);
    const sum = add(toNumber(addend1), toNumber(addend2));
    //console.log(sum);
    sumDisplay.textContent = sum;
});


//SUBTRACTION
// subtract elements
const minuend = document.getElementById('minuend');
const subtrahend = document.getElementById('subtrahend');
const differenceDisplay = document.getElementById('difference-display');
const subtractButton = document.getElementById('subtract-button');

// subtract listener
subtractButton.addEventListener('click', () =>{
    //console.log(minuend.value, subtrahend.value);
    //const difference = Number(minuend.value) - Number(subtrahend.value);
    const difference = subtract(toNumber(minuend), toNumber(subtrahend));
    //console.log(difference);
    differenceDisplay.textContent = difference;
});


// MULTIPLICATION

// multiply elements
const multiplicand = document.getElementById('multiplicand');
const multiplier = document.getElementById('multiplier');
const multiplyButton = document.getElementById('multiply-button');
const productDisplay = document.getElementById('product-display');

// multiply listener
multiplyButton.addEventListener('click', () =>{
    //console.log(multiplicand.value, multiplier.value);
    //const product = Number(multiplicand.value) * Number(multiplier.value);
    const product = multiply(toNumber(multiplicand), toNumber(multiplier));
    //console.log(product);
    productDisplay.textContent = product;
});



// DIVISION
// divide elements
const dividend = document.getElementById('dividend');
const divisor = document.getElementById('divisor');
const divideButton = document.getElementById('divide-button');
const quotientDisplay = document.getElementById('quotient-display');

// divide listener
divideButton.addEventListener('click', () =>{
    //console.log(dividend.value, divisor.value);
    //const quotient = Number(dividend.value) / Number(divisor.value);
    const quotient = divide(toNumber(dividend), toNumber(divisor));
    //console.log(quotient);
    quotientDisplay.textContent = quotient;
}); 
