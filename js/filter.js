const numbers = [13,5,8,23,45,11,18,9,55,61,1];
const bigNums = numbers.filter(number => number >20);
const tiny = numbers.filter(x=> x<10);
const even = numbers.filter(num=> num%2===0);
console.log(even);



const products = [
    {id:1,name:'laptop',price:450000},
    {id:2,name:'mobile',price:850000},
    {id:3,name:'watch',price:3600},
    {id:4,name:'tablet',price:4000}
];

const expensive = products.filter(product=> product.price >40000)
console.log(expensive);