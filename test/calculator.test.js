// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../calculator.js';
import { subtract } from '../calculator.js';
import { multiply } from '../calculator.js';
import { divide } from '../calculator.js';
import { toNumber } from '../calculator.js';




const test = QUnit.test;

// TEMP ADD FUNCTION

// function add(x, y){
//     return x + y;
// }


//TEST ADD

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // what are the inputs? - two numbers
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// TEMP SUBTRACT FUNCTION
// function subtract(x, y) {
//     return(x - y);
// }

// TEST SUBTRACT

test('subtract', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // what are the inputs? - two numbers
    const x = 10;
    const y = 2;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



// TEMP MULiTPLY FUNCITON
// function multiply(x, y){
//     return (x * y);
// }

// TEST MULTIPLY

test('multiply', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // what are the inputs? - two numbers
    const x = 3;
    const y = 4;
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// TEMP DIVIDE FUNCTION
// function divide(x, y) {
//     return x / y;
// }


// TEST DIVIDE

test('divide', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // what are the inputs? - two numbers
    const x = 12;
    const y = 4;
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


// DIVIDE BY 0 TEST
test('0 divided by 0 returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // what are the inputs? - two numbers
    const x = 0;
    const y = 0;
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = divide(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});





//TEST toNumber Function

// function toNumber(input) {
//     return Number(input.value);
// }

test('toNumber Function', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // what are the inputs? - two numbers
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber(input);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});


//TEST Empty String Returns 0

test('Empty String Returns 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    // what are the inputs? - two numbers
    const expected = 0;
    const input = document.createElement('input');
    input.value = expected;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = toNumber('');

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

