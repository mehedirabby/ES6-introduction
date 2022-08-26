//extends.js

class TeamMember{
    name;
    location;
    constructor(name,location){
        this.name=name;
        this.location=location;
    }
    provideFeedback(){
        console.log(`${this.name} thank yoy for your feedback`)
    }
}







class Instructor extends TeamMember{
    
    designation= 'web instructor'
    team= 'web team'
    
    constructor(name,location){
        super(name,location)
        
    }
    startSupportSession(time){
        console.log(`start the support session at: ${time}`)
    }
    creatQuiz(module){
        console.log(`please creat quiz for module ${module}`)

    }
    
}




class Developer extends TeamMember{
   
    designation= 'web instructor'
    team= 'web team'
    
    tech;
    constructor(name,location,tech){
        super(name,location);
        this.tech=tech;
    }
    developFeature(feature){
        console.log(`please develop the: ${feature}`)
    }
   realese(version){
        console.log(`please realese the version: ${version}`)

    }
    provideFeedback(){
        console.log(`${this.name} thank yoy for your feedback`)
    }
}


class   JobPlacement extends TeamMember {
   
    designation= 'job placement comandos'
    team= 'job placement team'
    
    region;
    constructor(name,location,region){
       super(name,location);
        this.region=region;
    }
    provideResume(feature){
        console.log(`please develop the: ${feature}`)
    }
   prepareStudent(version){
        console.log(`please realese the version: ${version}`)

    }
    provideFeedback(){
        console.log(`${this.name} thank yoy for your feedback`)
    }
}

const alia = new Developer('alia bhatt','dhaka','react');
console.log(alia);
alia.provideFeedback();


const bipasha = new JobPlacement('bipasha','kolkata','india')
console.log(bipasha)
bipasha.provideFeedback();