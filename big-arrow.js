// Single Line Arrow functions With implicit Return

const add = (num1, num2) => num1 + num2;
const sum = add(45, 54)

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const output = multiply(3, 12, 12);


const fiveTimes = (num) => num * 5;
const fiveTimesResults = fiveTimes(25);


const tenTimes = num => num * 10;
const tenTimesResults = tenTimes(14);


// single line anonymous reference

const getName = () => 'Brandon Mackulum';
const name = getName()


// Multiple Line Arrow function references With Explicit Return;;;

const mathOperation = (a, b) => {
    const sum = a + b;
    const diff = a - b;
    const result = sum * diff;
    const output = result / 5;
    return output;
}
const total = mathOperation(12, 6)


// document.getElementById('').addEventListener('click', event => {

// })


console.log(sum, output, fiveTimesResults, tenTimesResults, name, total);