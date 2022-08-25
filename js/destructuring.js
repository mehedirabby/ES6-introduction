const fish = {
    name: 'hilsa',
    address: 'chadpur',
    color: 'silver',
    phone: '01747777972',
    price: '4000'
}



//array destructuring

const [first,another] = [44,33,88,456];
console.log(first,another);



const nayoks = ['sakib','rakib','bappy','raj']
const [king,lost,notun]= nayoks;
console.log(notun);

function getName (){
    return ['alim','halim']
}
const [baba,chacha]= getName();
console.log(chacha,baba);
