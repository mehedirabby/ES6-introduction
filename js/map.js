/*
    1.get an array
    2.for every elements of the array do something
    3.store the result in an array.
    4.return the result array.


*/






const numbers =[35,8,4,6,3];


function getDouble(numbers){
    const output =[];
    for(const number of numbers){
        const doubled = number *2;
        output.push(doubled);
    }
    return output;
}


function doubleItOld (num){
    return num*2;
}

const doubleIt = num => num*2;

const makeDoubleDirect =numbers.map(num => num*2);
const makeDouble2 = numbers.map(x => x*2);
console.log(makeDouble2);


const result = getDouble(numbers);
console.log(result);
const makeDouble = numbers.map(doubleIt);
console.log(makeDoubleDirect)

const fiveTimes = [1,2,3,4,5,6,7].map(x=>x*5);
console.log(fiveTimes);
