const max = Math.max(12,85,999,78);
// console.log(max)
const numbers = [12,85,999,78];
const largest = Math.max(...numbers);
// console.log(largest);

const number2 = [...numbers];
number2.push(85);
console.log(number2)
console.log(numbers);
