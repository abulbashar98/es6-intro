function addNumbers(num1, num2 = 0) {

    // 0ption 1'
    // if (num2 == undefined) {
    //     num2 = 0;
    // }

    // option 2
    // num2 = num2 || 0;


    // Option 3 
    // es6 Style is to add a default parameter in function


    const result = num1 + num2;
    return result;
}


const sum = addNumbers(10)
// console.log(sum);




// One more example

function fullName(first, last = 'sheikh') {
    const fullName = first + ' ' + last;
    return fullName
}

const wholeName = fullName('bashar');
// console.log(wholeName)