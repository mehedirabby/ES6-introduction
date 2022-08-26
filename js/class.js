//syntetic suger
class Instructor{
    name;
    designation= 'web instructor'
    team= 'web team'
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    startSupportSession(time){
        console.log(`start the support session at: ${time}`)
    }
    creatQuiz(module){
        console.log(`please creat quiz for module ${module}`)

    }
}
const aamir = new Instructor('aamir','mumbai');
console.log(aamir);
const solaiman = new Instructor('solaiman','mumbai');
console.log(solaiman);
aamir. startSupportSession('9.00');
aamir.creatQuiz(60);


