//function declaration
function add(num1, num2) {
    // const sum = num1 + num2;
    // return sum;
    return num1 + num2;
}


// function expression
const add2 = function add2(num1, num2) {
    return num1 + num2;
}


// function expression(anonymous)
const add3 = function (num1, num2) {
    return num1 + num2;
}

// Arrow function

const add4 = (num1, num2) => num1 + num2;


const sum = add(21, 25)
const sum2 = add2(21, 25)
const sum3 = add3(21, 25)
const sum4 = add4(21, 25)
console.log(sum, sum2, sum3, sum4);