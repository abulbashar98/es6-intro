// const numbers = [54, 6, 34, 23, 76, 22, 79]

// console.log(...numbers);


// case 1
// const min = Math.min(54, 6, 43, 65)
// console.log(min);


// case 2
// const min = Math.min([54, 6, 45, 77])                       // Method Does not work for an Array
// const min = Math.min(numbers)
// console.log(min);



// case 3: solve case 2
// const min = Math.min(...numbers)
// console.log(min);





/*ome other uses*/

// Case 1

// const numbers = [54, 6, 34, 23, 76, 22, 79];
// const numbers2 = numbers;
// numbers.push(47);
// console.log(numbers2);


// Case 2

const numbers = [54, 6, 34, 23, 76, 22, 79];
// const numbers2 = [numbers];        // 47 counts here in the array
const numbers2 = [56, ...numbers, 77]     // pushed 47 doesn't count here, instead 77 is a count
numbers.push(47);
console.log(numbers);
console.log(numbers2);