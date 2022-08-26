const numbers = [13,5,8,23,45,11,18,9,55,61,1];
const fives = numbers.filter(num=> num%5===0);
const fivesall = numbers.find(num=> num%5===0);
console.log(fives);



const products = [
    {id:1,name:'laptop',price:450000},
    {id:2,name:'mobile',price:850000},
    {id:3,name:'watch',price:3600},
    {id:4,name:'tablet',price:4000}
];

const cheap = products.find(x=>x.price < 40000);
console.log(cheap);