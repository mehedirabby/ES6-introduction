const numbers = [12,56,87,44];
const half = numbers.map(n =>n/2)
const thirds = numbers.map(x=>x/3)
// console.log(half);
// console.log(thirds)


const friends = ['tom haland','tom cruise','tom brady','tom solaiman'];
const firstLetters = friends.map(x=>x[0]);
// console.log(firstLetters);

const nameLengths = friends.map(y =>y.length);
// console.log(nameLengths);


const products = [
    {id:1,name:'laptop',price:450000},
    {id:2,name:'mobile',price:850000},
    {id:3,name:'watch',price:3600},
    {id:4,name:'tablet',price:4000}
];

// const items = products.map(product=>console.log(product));
const items = products.map(product=>product.name);
const prices = products.map(product=>product.price);
console.log(prices);