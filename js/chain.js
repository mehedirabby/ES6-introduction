const users = [{
    name:'abul',
    id:1,
    job:'doctor'
}]

// console.log(users[0].name);


const data = {
    count:500,
    data:[
        { id:1,name:'babul',job:'leader' },
        { id:2,name:'zabul',job:'leader' },
    ]
}
const firstJob=data.data[0].job;
//first job


const user={
    id:500,
    name:'rabby mia',
    address:{
    street:{
        first:'35/a kochukhet',
        second:'third floor',
        third:'right side'
    },
    postOffive: 'cantoment',
    city:'Dhaka'
    }
}


console.log(user.address.street.third);