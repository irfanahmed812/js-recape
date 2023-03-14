const numbers = [55, 23, 69, 12, 45, 39, 88, 10];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(...numbers);
// console.log(max);
const min = Math.min(...numbers);
// console.log(min);

const secondArray = [...numbers, 99, 12, 35, 97, 30];
numbers.push(55);
// console.log(secondArray);