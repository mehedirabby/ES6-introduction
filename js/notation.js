const student ={
    name:'karim uddin',
    age:15,
    class:'ten',
    marks:{
        math:78,
        physics:89,
        chemistry:65,
    }
}

const marks = student.marks;
const math = student.marks.math;

const chem = student['marks']['chemistry'];
const subject = 'physics';

const subMarks = student.marks[subject];

console.log(subMarks);