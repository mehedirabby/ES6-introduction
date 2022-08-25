// 1.var let const difference



//2.default parameters
function calculateSalary(salary,tax =0.25,bonus = 0){
    const remaining = salary - salary*tax;
    const total = remaining + bonus;
    return total;
}



//3.template string
const elementHtml = `
<div>
<h3>name:</h3>
<p> address:</p>
<p>salery:${calculateSalery(1000,0,0)}</p>
<p> others:${numbers[2]}</p>

</div>

` 


//4.Arrow function
const doubleIt = x =>x*2;
const calculateSalary2 = (salery,tax,bonus)=> salery - salery*tax + bonus;



//5.spread
const ages =[11,13,15,14,10,16];
const newAges = [...ages,22,24,23];


//6.destructuring
const {x,y,...c} = {x:456,y:12, z:33,name:'sakib al hasan',salery:450000}
const [a,b,...r]=[12,45,21,65,98];